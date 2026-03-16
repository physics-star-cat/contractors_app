'use client'

import type { Project, LineItem, RiskLevel, ItemCategory } from '@/models/types'
import { RISK_LEVELS, ITEM_CATEGORIES } from '@/models/constants'
import { createLineItem } from '@/services/project'
import ASCIIBox from '@/components/ui/ASCIIBox'

interface Props {
  project: Project
  onChange: (updates: Partial<Project>) => void
}

export default function LineItemsSection({ project, onChange }: Props) {
  const addItem = () => {
    onChange({ lineItems: [...project.lineItems, createLineItem()] })
  }

  const removeItem = (id: string) => {
    onChange({ lineItems: project.lineItems.filter(i => i.id !== id) })
  }

  const updateItem = (id: string, updates: Partial<LineItem>) => {
    onChange({
      lineItems: project.lineItems.map(i =>
        i.id === id ? { ...i, ...updates } : i
      ),
    })
  }

  return (
    <ASCIIBox title="Line items">
      {project.lineItems.length === 0 ? (
        <div className="empty-state">
          no items yet — add your first cost item
        </div>
      ) : (
        <table className="items-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Cost</th>
              <th>Category</th>
              <th>Risk</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {project.lineItems.map(item => (
              <tr key={item.id}>
                <td>
                  <input
                    value={item.name}
                    onChange={e => updateItem(item.id, { name: e.target.value })}
                    placeholder="item name"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    min="0"
                    step="10"
                    value={item.estimatedCost || ''}
                    onChange={e => updateItem(item.id, { estimatedCost: Number(e.target.value) })}
                    placeholder="0"
                    style={{ width: '100px' }}
                  />
                </td>
                <td>
                  <select
                    value={item.category}
                    onChange={e => updateItem(item.id, { category: e.target.value as ItemCategory })}
                  >
                    {Object.entries(ITEM_CATEGORIES).map(([key, val]) => (
                      <option key={key} value={key}>{val.label}</option>
                    ))}
                  </select>
                </td>
                <td>
                  <select
                    value={item.riskLevel}
                    onChange={e => updateItem(item.id, { riskLevel: e.target.value as RiskLevel })}
                  >
                    {Object.entries(RISK_LEVELS).map(([key, val]) => (
                      <option key={key} value={key}>{val.label}</option>
                    ))}
                  </select>
                </td>
                <td>
                  <button className="remove-btn" onClick={() => removeItem(item.id)} type="button">[x]</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button className="add-btn" onClick={addItem} type="button">[+ ADD ITEM]</button>
    </ASCIIBox>
  )
}
