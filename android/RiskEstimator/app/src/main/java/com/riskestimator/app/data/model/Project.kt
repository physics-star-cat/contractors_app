package com.riskestimator.app.data.model

import java.util.UUID
import kotlin.math.ceil

data class Project(
    val id: String = UUID.randomUUID().toString(),
    var name: String = "New Estimate",
    var clientName: String = "",
    val lineItems: MutableList<LineItem> = mutableListOf(),
    val createdAt: Long = System.currentTimeMillis(),
    var updatedAt: Long = System.currentTimeMillis(),
    var profitMargin: Double = 0.15,

    // Duration estimation
    var estimatedDays: Double = 1.0,
    var complexityLevel: ComplexityLevel = ComplexityLevel.MODERATE,
    var hourlyLaborRate: Double = 50.0,
    var hoursPerDay: Double = 8.0,

    // Travel estimation
    var travelTimeMinutes: Double = 30.0,  // One-way travel time
    var trafficVariability: TrafficVariability = TrafficVariability.VARIABLE,
    var numberOfSiteVisits: Int = 0,  // 0 means auto-calculate from days
    var includeReturnTrip: Boolean = true,
    var mileageRatePerKm: Double = 0.0,
    var distanceKm: Double = 0.0
) {
    // Effective site visits (auto-calculate if not set)
    val effectiveSiteVisits: Int
        get() = if (numberOfSiteVisits > 0) numberOfSiteVisits else ceil(estimatedDays).toInt()

    // Base duration cost (labor hours × rate)
    val baseDurationCost: Double
        get() = estimatedDays * hoursPerDay * hourlyLaborRate

    // Base travel time cost (travel time as labor)
    val baseTravelTimeCost: Double
        get() {
            val tripsPerVisit = if (includeReturnTrip) 2.0 else 1.0
            val totalTravelHours = (travelTimeMinutes / 60.0) * tripsPerVisit * effectiveSiteVisits
            return totalTravelHours * hourlyLaborRate
        }

    // Base mileage cost
    val baseMileageCost: Double
        get() {
            val tripsPerVisit = if (includeReturnTrip) 2.0 else 1.0
            return distanceKm * mileageRatePerKm * tripsPerVisit * effectiveSiteVisits
        }

    // Total travel cost
    val baseTravelCost: Double
        get() = baseTravelTimeCost + baseMileageCost

    val totalEstimate: Double
        get() = lineItems.sumOf { it.estimatedCost }

    val totalWithDurationAndTravel: Double
        get() = totalEstimate + baseDurationCost + baseTravelCost

    val totalWithProfit: Double
        get() = totalWithDurationAndTravel * (1 + profitMargin)

    fun addItem(item: LineItem) {
        lineItems.add(item)
        updatedAt = System.currentTimeMillis()
    }

    fun removeItem(index: Int) {
        if (index in lineItems.indices) {
            lineItems.removeAt(index)
            updatedAt = System.currentTimeMillis()
        }
    }

    fun updateItem(item: LineItem) {
        val index = lineItems.indexOfFirst { it.id == item.id }
        if (index != -1) {
            lineItems[index] = item
            updatedAt = System.currentTimeMillis()
        }
    }

    fun copy(): Project {
        return Project(
            id = id,
            name = name,
            clientName = clientName,
            lineItems = lineItems.toMutableList(),
            createdAt = createdAt,
            updatedAt = updatedAt,
            profitMargin = profitMargin,
            estimatedDays = estimatedDays,
            complexityLevel = complexityLevel,
            hourlyLaborRate = hourlyLaborRate,
            hoursPerDay = hoursPerDay,
            travelTimeMinutes = travelTimeMinutes,
            trafficVariability = trafficVariability,
            numberOfSiteVisits = numberOfSiteVisits,
            includeReturnTrip = includeReturnTrip,
            mileageRatePerKm = mileageRatePerKm,
            distanceKm = distanceKm
        )
    }
}
