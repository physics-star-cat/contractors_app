'use client'

import type { Project } from '@/models/types'
import { getMaterialsTotal, getBaseDurationCost, getBaseTravelCost, getTotalWithProfit } from '@/services/project'
import { formatCurrency } from '@/services/currency'
import { useRegion } from '@/context/RegionContext'
import ASCIIBox from '@/components/ui/ASCIIBox'

interface Props {
  project: Project
}

export default function Summary({ project }: Props) {
  const { region } = useRegion()
  const materials = getMaterialsTotal(project)
  const duration = getBaseDurationCost(project)
  const travel = getBaseTravelCost(project)
  const subtotal = materials + duration + travel
  const profit = subtotal * project.profitMargin
  const total = getTotalWithProfit(project)

  return (
    <ASCIIBox title="Summary">
      <div className="summary-row">
        <span>Materials</span>
        <span>{formatCurrency(materials, region)}</span>
      </div>
      <div className="summary-row">
        <span>Duration / labor</span>
        <span>{formatCurrency(duration, region)}</span>
      </div>
      <div className="summary-row">
        <span>Travel</span>
        <span>{formatCurrency(travel, region)}</span>
      </div>
      <div className="summary-row">
        <span>Subtotal</span>
        <span>{formatCurrency(subtotal, region)}</span>
      </div>
      <div className="summary-row">
        <span>Profit ({Math.round(project.profitMargin * 100)}%)</span>
        <span>{formatCurrency(profit, region)}</span>
      </div>
      <div className="summary-row summary-row--total">
        <span>Total estimate</span>
        <span>{formatCurrency(total, region)}</span>
      </div>
    </ASCIIBox>
  )
}
