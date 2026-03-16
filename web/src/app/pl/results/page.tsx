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

export default function PlResultsPage() {
  const { project, simulationResult, clear } = useEstimator()
  const { region } = useRegion()
  const router = useRouter()

  useEffect(() => {
    if (!simulationResult || !project) {
      router.push('/pl/estimate/')
    }
  }, [simulationResult, project, router])

  if (!simulationResult || !project) return null

  const fmt = (v: number) => formatCurrency(v, region)

  const handleSave = () => {
    saveProject(project)
    alert('Wycena zapisana')
  }

  const handleNewEstimate = () => {
    clear()
    router.push('/pl/estimate/')
  }

  return (
    <div className="results">
      <div className="results__hero">
        <div className="results__hero-label">zalecana wycena</div>
        <div className="results__hero-amount">{fmt(simulationResult.percentile80)}</div>
        <div className="results__hero-sub">
          80. percentyl — 80% szans, że koszty będą niższe
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
          label="ostrożna"
          amount={fmt(simulationResult.percentile50)}
          percentile="50. percentyl"
          description="50/50 szans — ryzykowne"
        />
        <QuoteCard
          label="zalecana"
          amount={fmt(simulationResult.percentile80)}
          percentile="80. percentyl"
          description="80% szans poniżej"
          variant="recommended"
        />
        <QuoteCard
          label="bezpieczna"
          amount={fmt(simulationResult.percentile90)}
          percentile="90. percentyl"
          description="bardzo mało prawdopodobna strata"
        />
      </div>

      <CostBreakdown result={simulationResult} formatValue={fmt} />

      <div className="results__actions">
        <button onClick={handleSave} type="button">[ZAPISZ WYCENĘ]</button>
        <button onClick={() => {
          const blob = generateCustomerPDF(project, simulationResult.percentile80, region)
          downloadPDF(blob, `${project.name}-wycena.pdf`)
        }} type="button">[PDF DLA KLIENTA]</button>
        <button onClick={() => {
          const blob = generateDetailedPDF(project, simulationResult, region)
          downloadPDF(blob, `${project.name}-szczegoly.pdf`)
        }} type="button">[PDF SZCZEGÓŁOWY]</button>
        <button onClick={handleNewEstimate} type="button">[NOWA WYCENA]</button>
        <Link href="/pl/estimate/">[EDYTUJ WYCENĘ]</Link>
      </div>

      <SimulationStats result={simulationResult} />
    </div>
  )
}
