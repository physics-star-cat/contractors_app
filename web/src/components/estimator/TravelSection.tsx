'use client'

import type { Project, TrafficVariability } from '@/models/types'
import { TRAFFIC_LEVELS, REGIONS } from '@/models/constants'
import { getBaseTravelCost, getEffectiveSiteVisits } from '@/services/project'
import { formatCurrency } from '@/services/currency'
import { useRegion } from '@/context/RegionContext'
import ASCIIBox from '@/components/ui/ASCIIBox'
import OptionSelector from '@/components/ui/OptionSelector'

interface Props {
  project: Project
  onChange: (updates: Partial<Project>) => void
}

export default function TravelSection({ project, onChange }: Props) {
  const { region } = useRegion()
  const regionInfo = REGIONS[region]
  const trafficOptions = Object.entries(TRAFFIC_LEVELS).map(([key, val]) => ({
    key, ...val,
  }))

  return (
    <ASCIIBox title="Travel">
      <div className="field__row">
        <div className="field">
          <label className="field__label">Travel time (mins, one-way)</label>
          <input
            className="field__input"
            type="number"
            min="0"
            step="5"
            value={project.travelTimeMinutes}
            onChange={e => onChange({ travelTimeMinutes: Number(e.target.value) })}
          />
        </div>
        <div className="field">
          <label className="field__label">Site visits (0=auto)</label>
          <input
            className="field__input"
            type="number"
            min="0"
            step="1"
            value={project.numberOfSiteVisits}
            onChange={e => onChange({ numberOfSiteVisits: Number(e.target.value) })}
          />
          <span className="field__hint">effective: {getEffectiveSiteVisits(project)}</span>
        </div>
      </div>
      <div className="field">
        <label className="field__label">
          <input
            type="checkbox"
            checked={project.includeReturnTrip}
            onChange={e => onChange({ includeReturnTrip: e.target.checked })}
            style={{ marginRight: '8px' }}
          />
          Include return trip
        </label>
      </div>
      <div className="field">
        <label className="field__label">Traffic variability</label>
        <OptionSelector
          options={trafficOptions}
          value={project.trafficVariability}
          onChange={v => onChange({ trafficVariability: v as TrafficVariability })}
          label="Traffic variability"
        />
      </div>
      <div className="field__row">
        <div className="field">
          <label className="field__label">Distance ({regionInfo.distanceUnitShort})</label>
          <input
            className="field__input"
            type="number"
            min="0"
            step="1"
            value={project.distance}
            onChange={e => onChange({ distance: Number(e.target.value) })}
          />
        </div>
        <div className="field">
          <label className="field__label">Rate per {regionInfo.distanceUnitShort}</label>
          <input
            className="field__input"
            type="number"
            min="0"
            step="0.01"
            value={project.mileageRate}
            onChange={e => onChange({ mileageRate: Number(e.target.value) })}
          />
        </div>
      </div>
      <div className="field__computed">
        base travel: {formatCurrency(getBaseTravelCost(project), region)}
      </div>
    </ASCIIBox>
  )
}
