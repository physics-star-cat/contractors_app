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

export default function DeResultsPage() {
  const { project, simulationResult, clear } = useEstimator()
  const { region } = useRegion()
  const router = useRouter()

  useEffect(() => {
    if (!simulationResult || !project) {
      router.push('/de/estimate/')
    }
  }, [simulationResult, project, router])

  if (!simulationResult || !project) return null

  const fmt = (v: number) => formatCurrency(v, region)

  const handleSave = () => {
    saveProject(project)
    alert('Kalkulation gespeichert')
  }

  const handleNewEstimate = () => {
    clear()
    router.push('/de/estimate/')
  }

  return (
    <div className="results">
      <div className="results__hero">
        <div className="results__hero-label">Empfohlenes Angebot</div>
        <div className="results__hero-amount">{fmt(simulationResult.percentile80)}</div>
        <div className="results__hero-sub">
          80. Perzentil — 80% Wahrscheinlichkeit, dass Ihre Kosten darunter liegen
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
          label="konservativ"
          amount={fmt(simulationResult.percentile50)}
          percentile="50. Perzentil"
          description="50/50 Chance — riskant"
        />
        <QuoteCard
          label="empfohlen"
          amount={fmt(simulationResult.percentile80)}
          percentile="80. Perzentil"
          description="80% Wahrscheinlichkeit darunter"
          variant="recommended"
        />
        <QuoteCard
          label="sicher"
          amount={fmt(simulationResult.percentile90)}
          percentile="90. Perzentil"
          description="sehr unwahrscheinlich, Geld zu verlieren"
        />
      </div>

      <CostBreakdown result={simulationResult} formatValue={fmt} />

      <div className="results__actions">
        <button onClick={handleSave} type="button">[KALKULATION SPEICHERN]</button>
        <button onClick={() => {
          const blob = generateCustomerPDF(project, simulationResult.percentile80, region)
          downloadPDF(blob, `${project.name}-angebot.pdf`)
        }} type="button">[KUNDEN-PDF]</button>
        <button onClick={() => {
          const blob = generateDetailedPDF(project, simulationResult, region)
          downloadPDF(blob, `${project.name}-detail.pdf`)
        }} type="button">[DETAIL-PDF]</button>
        <button onClick={handleNewEstimate} type="button">[NEUE KALKULATION]</button>
        <Link href="/de/estimate/">[KALKULATION BEARBEITEN]</Link>
      </div>

      <SimulationStats result={simulationResult} />
    </div>
  )
}
