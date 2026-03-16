'use client'

import { computeHistogram } from '@/engine/monteCarlo'
import './ASCIIHistogram.css'

interface Props {
  simulations: number[]
  min: number
  max: number
  percentile50: number
  percentile80: number
  formatValue: (v: number) => string
}

export default function ASCIIHistogram({ simulations, min, max, percentile50, percentile80, formatValue }: Props) {
  const buckets = computeHistogram(simulations, min, max)
  const maxCount = Math.max(...buckets.map(b => b.count))
  const maxHeight = 12

  return (
    <div className="histogram">
      <div className="histogram__chart">
        {buckets.map((bucket, i) => {
          const height = maxCount > 0 ? Math.round((bucket.count / maxCount) * maxHeight) : 0
          const mid = (bucket.rangeStart + bucket.rangeEnd) / 2
          let colorClass = 'histogram__bar--green'
          if (mid >= percentile80) colorClass = 'histogram__bar--red'
          else if (mid >= percentile50) colorClass = 'histogram__bar--amber'

          return (
            <div key={i} className="histogram__column">
              {Array.from({ length: maxHeight }, (_, j) => {
                const row = maxHeight - 1 - j
                return (
                  <span
                    key={j}
                    className={`histogram__cell ${row < height ? colorClass : ''}`}
                  >
                    {row < height ? '\u2588\u2588' : '  '}
                  </span>
                )
              })}
            </div>
          )
        })}
      </div>
      <div className="histogram__axis">{'\u2500'.repeat(42)}</div>
      <div className="histogram__labels">
        <span>{formatValue(min)}</span>
        <span className="histogram__label--p50">P50: {formatValue(percentile50)}</span>
        <span className="histogram__label--p80">P80: {formatValue(percentile80)}</span>
        <span>{formatValue(max)}</span>
      </div>
    </div>
  )
}
