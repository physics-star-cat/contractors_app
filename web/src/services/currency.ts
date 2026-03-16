import type { AppRegionCode } from '@/models/types'
import { REGIONS } from '@/models/constants'

export function formatCurrency(value: number, region: AppRegionCode): string {
  const { currencyCode } = REGIONS[region]
  try {
    return new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value)
  } catch {
    return `${REGIONS[region].currencySymbol}${value.toFixed(2)}`
  }
}

export function formatPercent(value: number): string {
  return `${Math.round(value * 100)}%`
}
