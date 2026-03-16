import type { Project, SimulationResult, HistogramBucket, LineItem } from '@/models/types'
import { RISK_LEVELS, COMPLEXITY_LEVELS, TRAFFIC_LEVELS } from '@/models/constants'

const MIN_ITERATIONS = 1000
const MAX_ITERATIONS = 10000
const BATCH_SIZE = 500
const CONVERGENCE_THRESHOLD = 0.01

export function runSimulation(project: Project): SimulationResult {
  const hasWork = project.lineItems.length > 0 || project.estimatedDays > 0 || project.travelTimeMinutes > 0 || project.distance > 0
  if (!hasWork) {
    return emptyResult()
  }

  const simulations: number[] = []
  const durationSims: number[] = []
  const travelSims: number[] = []
  const materialSims: number[] = []

  let previousP80 = 0
  let isConverged = false
  let iterationsRun = 0

  while (iterationsRun < MAX_ITERATIONS) {
    const batchEnd = Math.min(iterationsRun + BATCH_SIZE, MAX_ITERATIONS)

    for (let i = iterationsRun; i < batchEnd; i++) {
      let materialCost = 0
      for (const item of project.lineItems) {
        materialCost += simulateCost(item)
      }
      materialSims.push(materialCost)

      const simulatedDays = simulateDuration(project.estimatedDays, project.complexityLevel)
      const mainLaborCost = simulatedDays * project.hoursPerDay * project.hourlyLaborRate
      const workersLaborCost = project.workers.reduce((total, worker) => {
        const days = worker.daysOnJob ?? project.estimatedDays
        return total + worker.hourlyRate * worker.hoursPerDay * days
      }, 0)
      const durationCost = mainLaborCost + workersLaborCost
      durationSims.push(durationCost)

      const effectiveVisits = project.numberOfSiteVisits > 0
        ? project.numberOfSiteVisits
        : Math.ceil(simulatedDays)
      const simulatedTravelTime = simulateTravelTime(project.travelTimeMinutes, project.trafficVariability)
      const tripsPerVisit = project.includeReturnTrip ? 2.0 : 1.0
      const totalTravelHours = (simulatedTravelTime / 60.0) * tripsPerVisit * effectiveVisits
      const travelTimeCost = totalTravelHours * project.hourlyLaborRate
      const mileageCost = project.distance * project.mileageRate * tripsPerVisit * effectiveVisits
      const travelCost = travelTimeCost + mileageCost
      travelSims.push(travelCost)

      const totalCost = materialCost + durationCost + travelCost
      const withProfit = totalCost * (1 + project.profitMargin)
      simulations.push(withProfit)
    }

    iterationsRun = batchEnd

    if (iterationsRun >= MIN_ITERATIONS) {
      const sorted = [...simulations].sort((a, b) => a - b)
      const currentP80 = percentile(sorted, 0.80)

      if (previousP80 > 0) {
        const relativeChange = Math.abs(currentP80 - previousP80) / previousP80
        if (relativeChange < CONVERGENCE_THRESHOLD) {
          isConverged = true
          break
        }
      }
      previousP80 = currentP80
    }
  }

  simulations.sort((a, b) => a - b)
  durationSims.sort((a, b) => a - b)
  travelSims.sort((a, b) => a - b)
  materialSims.sort((a, b) => a - b)

  const mean = simulations.reduce((s, v) => s + v, 0) / simulations.length
  const variance = simulations.reduce((s, v) => s + (v - mean) ** 2, 0) / simulations.length
  const stdDev = Math.sqrt(variance)
  const standardErrorP80 = (stdDev / Math.sqrt(iterationsRun)) * 1.5

  return {
    simulations,
    percentile10: percentile(simulations, 0.10),
    percentile50: percentile(simulations, 0.50),
    percentile80: percentile(simulations, 0.80),
    percentile90: percentile(simulations, 0.90),
    percentile95: percentile(simulations, 0.95),
    mean,
    standardDeviation: stdDev,
    standardErrorP80,
    min: simulations[0] ?? 0,
    max: simulations[simulations.length - 1] ?? 0,
    durationCostP50: percentile(durationSims, 0.50),
    durationCostP80: percentile(durationSims, 0.80),
    travelCostP50: percentile(travelSims, 0.50),
    travelCostP80: percentile(travelSims, 0.80),
    materialCostP50: percentile(materialSims, 0.50),
    materialCostP80: percentile(materialSims, 0.80),
    iterationsRun,
    isConverged,
  }
}

function simulateCost(item: LineItem): number {
  const base = item.estimatedCost
  const variance = RISK_LEVELS[item.riskLevel].variance
  const z = generateSkewedNormal()
  const simulated = base * (1 + z * variance)
  const minCost = base * (1 - variance)
  const maxCost = base * (1 + variance * 1.5)
  return Math.max(minCost, Math.min(simulated, maxCost * 1.1))
}

function simulateDuration(baseDays: number, complexity: string): number {
  const variance = COMPLEXITY_LEVELS[complexity as keyof typeof COMPLEXITY_LEVELS].variance
  const z = generateSkewedNormal()
  const simulated = baseDays * (1 + z * variance)
  const minDays = baseDays * 0.9
  const maxDays = baseDays * (1 + variance * 3)
  return Math.max(minDays, Math.min(simulated, maxDays))
}

function simulateTravelTime(baseMinutes: number, variability: string): number {
  const variance = TRAFFIC_LEVELS[variability as keyof typeof TRAFFIC_LEVELS].variance
  const z = generateSkewedNormal()
  const simulated = baseMinutes * (1 + z * variance)
  const minMinutes = baseMinutes * 0.5
  const maxMinutes = baseMinutes * (1 + variance * 2)
  return Math.max(minMinutes, Math.min(simulated, maxMinutes))
}

function generateSkewedNormal(): number {
  const u1 = Math.random() * 0.9998 + 0.0001
  const u2 = Math.random() * 0.9998 + 0.0001
  const z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2)
  return z < 0 ? z * 0.7 : z * 1.3
}

function percentile(sorted: number[], p: number): number {
  if (sorted.length === 0) return 0
  const index = p * (sorted.length - 1)
  const lower = Math.floor(index)
  const upper = Math.ceil(index)
  if (lower === upper) return sorted[lower]
  const fraction = index - lower
  return sorted[lower] * (1 - fraction) + sorted[upper] * fraction
}

export function computeHistogram(simulations: number[], min: number, max: number): HistogramBucket[] {
  const bucketCount = 20
  const range = max - min
  const bucketSize = range / bucketCount

  return Array.from({ length: bucketCount }, (_, i) => {
    const rangeStart = min + i * bucketSize
    const rangeEnd = rangeStart + bucketSize
    const count = simulations.filter(v => v >= rangeStart && v < rangeEnd).length
    return { rangeStart, rangeEnd, count, frequency: count / simulations.length }
  })
}

export function computeConfidenceLevel(standardErrorP80: number, percentile80: number): number {
  if (percentile80 <= 0) return 100
  const cv = standardErrorP80 / percentile80
  return Math.max(0, Math.min(100, (1 - cv * 10) * 100))
}

function emptyResult(): SimulationResult {
  return {
    simulations: [], percentile10: 0, percentile50: 0, percentile80: 0,
    percentile90: 0, percentile95: 0, mean: 0, standardDeviation: 0,
    standardErrorP80: 0, min: 0, max: 0, materialCostP50: 0, materialCostP80: 0,
    durationCostP50: 0, durationCostP80: 0, travelCostP50: 0, travelCostP80: 0,
    iterationsRun: 0, isConverged: false,
  }
}
