'use client'

import type { Project } from '@/models/types'
import ASCIIBox from '@/components/ui/ASCIIBox'

interface Props {
  project: Project
  onChange: (updates: Partial<Project>) => void
}

export default function ProjectDetails({ project, onChange }: Props) {
  return (
    <ASCIIBox title="Project details">
      <div className="field__row">
        <div className="field">
          <label className="field__label">Project name</label>
          <input
            className="field__input"
            value={project.name}
            onChange={e => onChange({ name: e.target.value })}
          />
        </div>
        <div className="field">
          <label className="field__label">Client name (optional)</label>
          <input
            className="field__input"
            value={project.clientName}
            onChange={e => onChange({ clientName: e.target.value })}
          />
        </div>
      </div>
      <div className="field">
        <label className="field__label">Profit margin (%)</label>
        <input
          className="field__input"
          type="number"
          min="0"
          max="100"
          step="1"
          value={Math.round(project.profitMargin * 100)}
          onChange={e => onChange({ profitMargin: Number(e.target.value) / 100 })}
          style={{ width: '120px' }}
        />
      </div>
    </ASCIIBox>
  )
}
