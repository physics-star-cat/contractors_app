'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useEstimator } from '@/context/EstimatorContext'
import { useRegion } from '@/context/RegionContext'
import { formatCurrency } from '@/services/currency'
import { saveProject } from '@/services/storage'
import { generateCustomerPDF, generateDetailedPDF, downloadPDF } from '@/services/pdf'
import ASCIIHistogram from '@/components/results/ASCIIHistogram'
import CostBreakdown from '@/components/results/CostBreakdown'
import SimulationStats from '@/components/results/SimulationStats'
import QuoteCard from '@/components/ui/QuoteCard'
import '@/components/results/results.css'

export default function AUResultsPage() {
  const { project, simulationResult, clear } = useEstimator()
  const { region } = useRegion()
  const router = useRouter()

  useEffect(() => {
    if (!simulationResult || !project) {
      router.push('/au/estimate/')
    }
  }, [simulationResult, project, router])

  if (!simulationResult || !project) return null

  const fmt = (v: number) => formatCurrency(v, region)

  const handleSave = () => {
    saveProject(project)
    alert('Estimate saved')
  }

  const handleNewEstimate = () => {
    clear()
    router.push('/au/estimate/')
  }

  return (
    <div className="results">
      <div className="results__hero">
        <div className="results__hero-label">recommended quote</div>
        <div className="results__hero-amount">{fmt(simulationResult.percentile80)}</div>
        <div className="results__hero-sub">
          80th percentile — 80% chance your costs will be under this
        </div>
      </div>

      <ASCIIHistogram
        simulations={simulationResult.simulations}
        min={simulationResult.min}
        max={simulationResult.max}
        percentile50={simulationResult.percentile50}
        percentile80={simulationResult.percentile80}
        formatValue={fmt}
      />

      <div className="results__cards">
        <QuoteCard
          label="conservative"
          amount={fmt(simulationResult.percentile50)}
          percentile="50th percentile"
          description="50/50 chance — risky"
        />
        <QuoteCard
          label="recommended"
          amount={fmt(simulationResult.percentile80)}
          percentile="80th percentile"
          description="80% chance under this"
          variant="recommended"
        />
        <QuoteCard
          label="safe"
          amount={fmt(simulationResult.percentile90)}
          percentile="90th percentile"
          description="very unlikely to lose money"
        />
      </div>

      <CostBreakdown result={simulationResult} formatValue={fmt} />

      <div className="results__actions">
        <button onClick={handleSave} type="button">[SAVE ESTIMATE]</button>
        <button onClick={() => {
          const blob = generateCustomerPDF(project, simulationResult.percentile80, region)
          downloadPDF(blob, `${project.name}-quote.pdf`)
        }} type="button">[CUSTOMER PDF]</button>
        <button onClick={() => {
          const blob = generateDetailedPDF(project, simulationResult, region)
          downloadPDF(blob, `${project.name}-detailed.pdf`)
        }} type="button">[DETAILED PDF]</button>
        <button onClick={handleNewEstimate} type="button">[NEW ESTIMATE]</button>
        <Link href="/au/estimate/">[EDIT ESTIMATE]</Link>
      </div>

      <SimulationStats result={simulationResult} />
    </div>
  )
}
