'use client'

import type { Project, ComplexityLevel } from '@/models/types'
import { COMPLEXITY_LEVELS } from '@/models/constants'
import { getMainLaborCost } from '@/services/project'
import { formatCurrency } from '@/services/currency'
import { useRegion } from '@/context/RegionContext'
import ASCIIBox from '@/components/ui/ASCIIBox'
import OptionSelector from '@/components/ui/OptionSelector'

interface Props {
  project: Project
  onChange: (updates: Partial<Project>) => void
}

export default function DurationSection({ project, onChange }: Props) {
  const { region } = useRegion()
  const complexityOptions = Object.entries(COMPLEXITY_LEVELS).map(([key, val]) => ({
    key, ...val,
  }))

  return (
    <ASCIIBox title="Job duration">
      <div className="field__row">
        <div className="field">
          <label className="field__label">Estimated days</label>
          <input
            className="field__input"
            type="number"
            min="0.5"
            step="0.5"
            value={project.estimatedDays}
            onChange={e => onChange({ estimatedDays: Number(e.target.value) })}
          />
        </div>
        <div className="field">
          <label className="field__label">Hourly rate</label>
          <input
            className="field__input"
            type="number"
            min="0"
            step="1"
            value={project.hourlyLaborRate}
            onChange={e => onChange({ hourlyLaborRate: Number(e.target.value) })}
          />
        </div>
        <div className="field">
          <label className="field__label">Hours/day</label>
          <input
            className="field__input"
            type="number"
            min="1"
            max="24"
            step="0.5"
            value={project.hoursPerDay}
            onChange={e => onChange({ hoursPerDay: Number(e.target.value) })}
          />
        </div>
      </div>
      <div className="field">
        <label className="field__label">Complexity</label>
        <OptionSelector
          options={complexityOptions}
          value={project.complexityLevel}
          onChange={v => onChange({ complexityLevel: v as ComplexityLevel })}
          label="Job complexity"
        />
      </div>
      <div className="field__computed">
        base labor: {formatCurrency(getMainLaborCost(project), region)}
      </div>
    </ASCIIBox>
  )
}
