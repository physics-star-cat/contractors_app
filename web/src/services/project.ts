import type { Project, LineItem, Worker, AppRegionCode } from '@/models/types'
import { DEFAULT_PROJECT, REGIONS } from '@/models/constants'

export function createProject(region: AppRegionCode): Project {
  return {
    ...DEFAULT_PROJECT,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    lineItems: [],
    workers: [],
    mileageRate: REGIONS[region].defaultMileageRate,
  }
}

export function createLineItem(): LineItem {
  return {
    id: crypto.randomUUID(),
    name: '',
    estimatedCost: 0,
    category: 'material',
    riskLevel: 'medium',
  }
}

export function createWorker(): Worker {
  return {
    id: crypto.randomUUID(),
    name: 'Worker',
    hourlyRate: 25.0,
    hoursPerDay: 8.0,
    daysOnJob: null,
  }
}

export function getMainLaborCost(p: Project): number {
  return p.estimatedDays * p.hoursPerDay * p.hourlyLaborRate
}

export function getWorkersLaborCost(p: Project): number {
  return p.workers.reduce((total, w) => {
    const days = w.daysOnJob ?? p.estimatedDays
    return total + w.hourlyRate * w.hoursPerDay * days
  }, 0)
}

export function getBaseDurationCost(p: Project): number {
  return getMainLaborCost(p) + getWorkersLaborCost(p)
}

export function getEffectiveSiteVisits(p: Project): number {
  return p.numberOfSiteVisits > 0 ? p.numberOfSiteVisits : Math.ceil(p.estimatedDays)
}

export function getBaseTravelCost(p: Project): number {
  const trips = p.includeReturnTrip ? 2.0 : 1.0
  const visits = getEffectiveSiteVisits(p)
  const travelHours = (p.travelTimeMinutes / 60.0) * trips * visits
  const timeCost = travelHours * p.hourlyLaborRate
  const mileageCost = p.distance * p.mileageRate * trips * visits
  return timeCost + mileageCost
}

export function getMaterialsTotal(p: Project): number {
  return p.lineItems.reduce((sum, item) => sum + item.estimatedCost, 0)
}

export function getTotalWithProfit(p: Project): number {
  const subtotal = getMaterialsTotal(p) + getBaseDurationCost(p) + getBaseTravelCost(p)
  return subtotal * (1 + p.profitMargin)
}
