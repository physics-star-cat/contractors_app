import type { RiskLevel, ComplexityLevel, TrafficVariability, AppRegionCode } from './types'

export const RISK_LEVELS: Record<RiskLevel, { label: string; variance: number; description: string }> = {
  certain:   { label: 'Certain',    variance: 0.02, description: 'Fixed/contracted price' },
  low:       { label: 'Low Risk',   variance: 0.08, description: 'Known supplier, stable pricing' },
  medium:    { label: 'Medium Risk',variance: 0.15, description: 'Standard market variability' },
  high:      { label: 'High Risk',  variance: 0.25, description: 'Volatile or uncertain costs' },
  wildGuess: { label: 'Wild Guess', variance: 0.40, description: 'Unknown scope items' },
}

export const COMPLEXITY_LEVELS: Record<ComplexityLevel, { label: string; variance: number; description: string }> = {
  routine:      { label: 'Routine',       variance: 0.10, description: 'Repeat job, clear scope' },
  moderate:     { label: 'Moderate',      variance: 0.25, description: 'Standard job, minor unknowns' },
  complex:      { label: 'Complex',       variance: 0.40, description: 'Custom work, dependencies' },
  unknownScope: { label: 'Unknown Scope', variance: 0.60, description: 'New type of job, unclear requirements' },
}

export const TRAFFIC_LEVELS: Record<TrafficVariability, { label: string; variance: number; description: string }> = {
  predictable:     { label: 'Predictable',      variance: 0.10, description: 'Rural, off-peak times' },
  variable:        { label: 'Variable',         variance: 0.25, description: 'Suburban, mixed traffic' },
  highVariability: { label: 'High Variability', variance: 0.50, description: 'Urban, peak hours' },
}

export const REGIONS: Record<AppRegionCode, {
  displayName: string
  flag: string
  currencyCode: string
  currencySymbol: string
  usesMiles: boolean
  distanceUnit: string
  distanceUnitShort: string
  defaultMileageRate: number
  laborSpelling: string
  workerTitle: string
  workerTitlePlural: string
}> = {
  US: {
    displayName: 'United States', flag: '\u{1F1FA}\u{1F1F8}',
    currencyCode: 'USD', currencySymbol: '$',
    usesMiles: true, distanceUnit: 'miles', distanceUnitShort: 'mi',
    defaultMileageRate: 0.67,
    laborSpelling: 'Labor', workerTitle: 'Contractor', workerTitlePlural: 'Contractors',
  },
  UK: {
    displayName: 'United Kingdom', flag: '\u{1F1EC}\u{1F1E7}',
    currencyCode: 'GBP', currencySymbol: '\u00A3',
    usesMiles: true, distanceUnit: 'miles', distanceUnitShort: 'mi',
    defaultMileageRate: 0.45,
    laborSpelling: 'Labour', workerTitle: 'Tradesperson', workerTitlePlural: 'Tradespeople',
  },
  CA: {
    displayName: 'Canada', flag: '\u{1F1E8}\u{1F1E6}',
    currencyCode: 'CAD', currencySymbol: '$',
    usesMiles: false, distanceUnit: 'kilometres', distanceUnitShort: 'km',
    defaultMileageRate: 0.70,
    laborSpelling: 'Labour', workerTitle: 'Contractor', workerTitlePlural: 'Contractors',
  },
  AU: {
    displayName: 'Australia', flag: '\u{1F1E6}\u{1F1FA}',
    currencyCode: 'AUD', currencySymbol: '$',
    usesMiles: false, distanceUnit: 'kilometres', distanceUnitShort: 'km',
    defaultMileageRate: 0.85,
    laborSpelling: 'Labour', workerTitle: 'Tradie', workerTitlePlural: 'Tradies',
  },
  NZ: {
    displayName: 'New Zealand', flag: '\u{1F1F3}\u{1F1FF}',
    currencyCode: 'NZD', currencySymbol: '$',
    usesMiles: false, distanceUnit: 'kilometres', distanceUnitShort: 'km',
    defaultMileageRate: 0.95,
    laborSpelling: 'Labour', workerTitle: 'Tradie', workerTitlePlural: 'Tradies',
  },
}

export const ITEM_CATEGORIES = {
  material: { label: 'Material' },
  labor: { label: 'Labor' },
  subcontractor: { label: 'Subcontractor' },
  other: { label: 'Other' },
} as const

export const DEFAULT_PROJECT = {
  name: 'New Estimate',
  clientName: '',
  profitMargin: 0.15,
  estimatedDays: 1.0,
  complexityLevel: 'moderate' as const,
  hourlyLaborRate: 50.0,
  hoursPerDay: 8.0,
  travelTimeMinutes: 30.0,
  trafficVariability: 'variable' as const,
  numberOfSiteVisits: 0,
  includeReturnTrip: true,
  distance: 0.0,
}

export const DEFAULT_WORKER = {
  name: 'Worker',
  hourlyRate: 25.0,
  hoursPerDay: 8.0,
  daysOnJob: null,
}
