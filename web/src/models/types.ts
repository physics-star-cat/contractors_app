export type RiskLevel = 'certain' | 'low' | 'medium' | 'high' | 'wildGuess'
export type ComplexityLevel = 'routine' | 'moderate' | 'complex' | 'unknownScope'
export type TrafficVariability = 'predictable' | 'variable' | 'highVariability'
export type ItemCategory = 'material' | 'labor' | 'subcontractor' | 'other'
export type AppRegionCode = 'US' | 'UK' | 'CA' | 'AU' | 'NZ'

export interface LineItem {
  id: string
  name: string
  estimatedCost: number
  category: ItemCategory
  riskLevel: RiskLevel
}

export interface Worker {
  id: string
  name: string
  hourlyRate: number
  hoursPerDay: number
  daysOnJob: number | null
}

export interface Project {
  id: string
  name: string
  clientName: string
  createdAt: string
  updatedAt: string
  profitMargin: number
  lineItems: LineItem[]
  workers: Worker[]
  estimatedDays: number
  complexityLevel: ComplexityLevel
  hourlyLaborRate: number
  hoursPerDay: number
  travelTimeMinutes: number
  trafficVariability: TrafficVariability
  numberOfSiteVisits: number
  includeReturnTrip: boolean
  mileageRate: number
  distance: number
}

export interface SimulationResult {
  simulations: number[]
  percentile10: number
  percentile50: number
  percentile80: number
  percentile90: number
  percentile95: number
  mean: number
  standardDeviation: number
  standardErrorP80: number
  min: number
  max: number
  materialCostP50: number
  materialCostP80: number
  durationCostP50: number
  durationCostP80: number
  travelCostP50: number
  travelCostP80: number
  iterationsRun: number
  isConverged: boolean
}

export interface HistogramBucket {
  rangeStart: number
  rangeEnd: number
  count: number
  frequency: number
}
