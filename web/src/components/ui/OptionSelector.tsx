'use client'

import './OptionSelector.css'

interface Option {
  key: string
  label: string
  variance: number
  description: string
}

interface Props {
  options: Option[]
  value: string
  onChange: (value: string) => void
  label: string
}

export default function OptionSelector({ options, value, onChange, label }: Props) {
  const barWidth = 20
  const maxVariance = Math.max(...options.map(o => o.variance))

  return (
    <div className="option-selector" role="radiogroup" aria-label={label}>
      {options.map(option => {
        const filled = Math.round((option.variance / maxVariance) * barWidth)
        const empty = barWidth - filled
        const bar = '\u2588'.repeat(filled) + '\u2591'.repeat(empty)
        const isSelected = option.key === value

        return (
          <button
            key={option.key}
            className={`option-selector__item ${isSelected ? 'option-selector__item--selected' : ''}`}
            onClick={() => onChange(option.key)}
            role="radio"
            aria-checked={isSelected}
            title={option.description}
            type="button"
          >
            <span className="option-selector__label">{option.label.toUpperCase()}</span>
            <span className="option-selector__bar">[{bar}]</span>
            <span className="option-selector__variance">&plusmn;{Math.round(option.variance * 100)}%</span>
          </button>
        )
      })}
    </div>
  )
}
