'use client'

import type { SimulationResult } from '@/models/types'
import ASCIIBox from '@/components/ui/ASCIIBox'

interface Props {
  result: SimulationResult
  formatValue: (v: number) => string
}

export default function CostBreakdown({ result, formatValue }: Props) {
  return (
    <ASCIIBox title="Cost breakdown">
      <table className="items-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>P50 (likely)</th>
            <th>P80 (safe)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Materials</td>
            <td>{formatValue(result.materialCostP50)}</td>
            <td>{formatValue(result.materialCostP80)}</td>
          </tr>
          <tr>
            <td>Duration / labor</td>
            <td>{formatValue(result.durationCostP50)}</td>
            <td>{formatValue(result.durationCostP80)}</td>
          </tr>
          <tr>
            <td>Travel</td>
            <td>{formatValue(result.travelCostP50)}</td>
            <td>{formatValue(result.travelCostP80)}</td>
          </tr>
        </tbody>
      </table>
    </ASCIIBox>
  )
}
