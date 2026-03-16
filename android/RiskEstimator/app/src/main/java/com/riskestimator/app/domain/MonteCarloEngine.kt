package com.riskestimator.app.domain

import com.riskestimator.app.data.model.ComplexityLevel
import com.riskestimator.app.data.model.LineItem
import com.riskestimator.app.data.model.Project
import com.riskestimator.app.data.model.SimulationResult
import com.riskestimator.app.data.model.TrafficVariability
import kotlin.math.ceil
import kotlin.math.cos
import kotlin.math.ln
import kotlin.math.max
import kotlin.math.min
import kotlin.math.pow
import kotlin.math.sqrt
import kotlin.random.Random

object MonteCarloEngine {
    private const val SIMULATION_COUNT = 1000

    fun runSimulation(project: Project): SimulationResult {
        val simulations = mutableListOf<Double>()
        val durationSimulations = mutableListOf<Double>()
        val travelSimulations = mutableListOf<Double>()
        val materialSimulations = mutableListOf<Double>()

        repeat(SIMULATION_COUNT) {
            // Simulate material/line item costs
            var materialCost = 0.0
            for (item in project.lineItems) {
                val simulatedCost = simulateCost(item)
                materialCost += simulatedCost
            }
            materialSimulations.add(materialCost)

            // Simulate duration (affects labor cost)
            val simulatedDays = simulateDuration(
                baseDays = project.estimatedDays,
                complexity = project.complexityLevel
            )
            val durationCost = simulatedDays * project.hoursPerDay * project.hourlyLaborRate
            durationSimulations.add(durationCost)

            // Simulate travel (correlated with duration - more days = more trips)
            val effectiveVisits = if (project.numberOfSiteVisits > 0) {
                project.numberOfSiteVisits.toDouble()
            } else {
                ceil(simulatedDays)  // Travel days correlate with job duration
            }

            val simulatedTravelTime = simulateTravelTime(
                baseMinutes = project.travelTimeMinutes,
                variability = project.trafficVariability
            )

            val tripsPerVisit = if (project.includeReturnTrip) 2.0 else 1.0
            val totalTravelHours = (simulatedTravelTime / 60.0) * tripsPerVisit * effectiveVisits
            val travelTimeCost = totalTravelHours * project.hourlyLaborRate

            // Mileage cost (fixed rate, but trips vary with duration)
            val mileageCost = project.distanceKm * project.mileageRatePerKm * tripsPerVisit * effectiveVisits

            val travelCost = travelTimeCost + mileageCost
            travelSimulations.add(travelCost)

            // Total with profit
            val totalCost = materialCost + durationCost + travelCost
            val withProfit = totalCost * (1 + project.profitMargin)
            simulations.add(withProfit)
        }

        simulations.sort()
        durationSimulations.sort()
        travelSimulations.sort()
        materialSimulations.sort()

        val mean = simulations.average()
        val variance = simulations.map { (it - mean).pow(2) }.average()
        val stdDev = sqrt(variance)

        return SimulationResult(
            simulations = simulations,
            percentile10 = percentile(simulations, 0.10),
            percentile50 = percentile(simulations, 0.50),
            percentile80 = percentile(simulations, 0.80),
            percentile90 = percentile(simulations, 0.90),
            percentile95 = percentile(simulations, 0.95),
            mean = mean,
            standardDeviation = stdDev,
            min = simulations.firstOrNull() ?: 0.0,
            max = simulations.lastOrNull() ?: 0.0,
            // Breakdown statistics
            durationCostP50 = percentile(durationSimulations, 0.50),
            durationCostP80 = percentile(durationSimulations, 0.80),
            travelCostP50 = percentile(travelSimulations, 0.50),
            travelCostP80 = percentile(travelSimulations, 0.80),
            materialCostP50 = percentile(materialSimulations, 0.50),
            materialCostP80 = percentile(materialSimulations, 0.80)
        )
    }

    private fun simulateCost(item: LineItem): Double {
        val base = item.estimatedCost
        val variance = item.riskLevel.varianceMultiplier

        val z = generateSkewedNormal()
        val simulatedValue = base * (1 + z * variance)

        return max(item.minCost, min(simulatedValue, item.maxCost * 1.1))
    }

    private fun simulateDuration(baseDays: Double, complexity: ComplexityLevel): Double {
        val variance = complexity.varianceMultiplier

        // Duration tends to go over more than under
        val z = generateSkewedNormal()
        val simulatedDays = baseDays * (1 + z * variance)

        // Can't go below 10% of estimate or above 3x
        val minDays = baseDays * 0.9
        val maxDays = baseDays * (1 + variance * 3)

        return max(minDays, min(simulatedDays, maxDays))
    }

    private fun simulateTravelTime(baseMinutes: Double, variability: TrafficVariability): Double {
        val variance = variability.varianceMultiplier

        // Traffic can both add and subtract time, but tends toward longer
        val z = generateSkewedNormal()
        val simulatedMinutes = baseMinutes * (1 + z * variance)

        // Travel time bounded between 50% and 200% of estimate
        val minMinutes = baseMinutes * 0.5
        val maxMinutes = baseMinutes * (1 + variance * 2)

        return max(minMinutes, min(simulatedMinutes, maxMinutes))
    }

    private fun generateSkewedNormal(): Double {
        // Box-Muller transform for normal distribution
        val u1 = Random.nextDouble(0.0001, 0.9999)
        val u2 = Random.nextDouble(0.0001, 0.9999)
        val z = sqrt(-2 * ln(u1)) * cos(2 * Math.PI * u2)

        // Skew towards higher values (projects tend to go over budget/time)
        return if (z < 0) z * 0.7 else z * 1.3
    }

    private fun percentile(sortedList: List<Double>, p: Double): Double {
        if (sortedList.isEmpty()) return 0.0

        val index = p * (sortedList.size - 1)
        val lower = index.toInt()
        val upper = (index + 1).toInt().coerceAtMost(sortedList.size - 1)

        if (lower == upper) {
            return sortedList[lower]
        }

        val fraction = index - lower
        return sortedList[lower] * (1 - fraction) + sortedList[upper] * fraction
    }
}
