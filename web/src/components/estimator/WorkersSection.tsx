'use client'

import type { Project, Worker } from '@/models/types'
import { createWorker } from '@/services/project'
import { formatCurrency } from '@/services/currency'
import { useRegion } from '@/context/RegionContext'
import ASCIIBox from '@/components/ui/ASCIIBox'

interface Props {
  project: Project
  onChange: (updates: Partial<Project>) => void
}

export default function WorkersSection({ project, onChange }: Props) {
  const { region } = useRegion()

  const addWorker = () => {
    onChange({ workers: [...project.workers, createWorker()] })
  }

  const removeWorker = (id: string) => {
    onChange({ workers: project.workers.filter(w => w.id !== id) })
  }

  const updateWorker = (id: string, updates: Partial<Worker>) => {
    onChange({
      workers: project.workers.map(w =>
        w.id === id ? { ...w, ...updates } : w
      ),
    })
  }

  return (
    <ASCIIBox title="Extra workers">
      {project.workers.map(worker => {
        const days = worker.daysOnJob ?? project.estimatedDays
        const dailyCost = worker.hourlyRate * worker.hoursPerDay
        const totalCost = dailyCost * days

        return (
          <div key={worker.id} className="worker-card">
            <div className="worker-card__header">
              <input
                value={worker.name}
                onChange={e => updateWorker(worker.id, { name: e.target.value })}
                style={{ width: '150px', border: 'none', background: 'transparent', color: 'var(--text-primary)' }}
              />
              <button className="remove-btn" onClick={() => removeWorker(worker.id)} type="button">[x]</button>
            </div>
            <div className="field__row">
              <div className="field">
                <label className="field__label">Rate/hr</label>
                <input
                  className="field__input"
                  type="number"
                  min="0"
                  step="1"
                  value={worker.hourlyRate}
                  onChange={e => updateWorker(worker.id, { hourlyRate: Number(e.target.value) })}
                />
              </div>
              <div className="field">
                <label className="field__label">Hrs/day</label>
                <input
                  className="field__input"
                  type="number"
                  min="1"
                  max="24"
                  step="0.5"
                  value={worker.hoursPerDay}
                  onChange={e => updateWorker(worker.id, { hoursPerDay: Number(e.target.value) })}
                />
              </div>
              <div className="field">
                <label className="field__label">Days (blank=all)</label>
                <input
                  className="field__input"
                  type="number"
                  min="0"
                  step="0.5"
                  value={worker.daysOnJob ?? ''}
                  onChange={e => updateWorker(worker.id, {
                    daysOnJob: e.target.value === '' ? null : Number(e.target.value),
                  })}
                  placeholder="all"
                />
              </div>
            </div>
            <div className="worker-card__cost">
              {formatCurrency(dailyCost, region)}/day = {formatCurrency(totalCost, region)} total
            </div>
          </div>
        )
      })}
      <button className="add-btn" onClick={addWorker} type="button">[+ ADD WORKER]</button>
    </ASCIIBox>
  )
}
