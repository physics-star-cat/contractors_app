'use client'

import type { SimulationResult } from '@/models/types'
import { computeConfidenceLevel } from '@/engine/monteCarlo'

interface Props {
  result: SimulationResult
}

export default function SimulationStats({ result }: Props) {
  const confidence = computeConfidenceLevel(result.standardErrorP80, result.percentile80)

  return (
    <div className="sim-stats">
      <span className="sim-stats__item">
        iterations: {result.iterationsRun.toLocaleString()}
      </span>
      <span className="sim-stats__item">
        converged: {result.isConverged ? '\u2588 yes' : '\u2591 no'}
      </span>
      <span className="sim-stats__item">
        confidence: {Math.round(confidence)}%
      </span>
    </div>
  )
}
