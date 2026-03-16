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

export default function ItResultsPage() {
  const { project, simulationResult, clear } = useEstimator()
  const { region } = useRegion()
  const router = useRouter()

  useEffect(() => {
    if (!simulationResult || !project) {
      router.push('/it/estimate/')
    }
  }, [simulationResult, project, router])

  if (!simulationResult || !project) return null

  const fmt = (v: number) => formatCurrency(v, region)

  const handleSave = () => {
    saveProject(project)
    alert('Preventivo salvato')
  }

  const handleNewEstimate = () => {
    clear()
    router.push('/it/estimate/')
  }

  return (
    <div className="results">
      <div className="results__hero">
        <div className="results__hero-label">preventivo raccomandato</div>
        <div className="results__hero-amount">{fmt(simulationResult.percentile80)}</div>
        <div className="results__hero-sub">
          80° percentile — 80% di probabilità che i costi siano inferiori
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
          label="conservativo"
          amount={fmt(simulationResult.percentile50)}
          percentile="50° percentile"
          description="50/50 — rischioso"
        />
        <QuoteCard
          label="raccomandato"
          amount={fmt(simulationResult.percentile80)}
          percentile="80° percentile"
          description="80% di probabilità al di sotto"
          variant="recommended"
        />
        <QuoteCard
          label="prudente"
          amount={fmt(simulationResult.percentile90)}
          percentile="90° percentile"
          description="molto improbabile perdere soldi"
        />
      </div>

      <CostBreakdown result={simulationResult} formatValue={fmt} />

      <div className="results__actions">
        <button onClick={handleSave} type="button">[SALVA]</button>
        <button onClick={() => {
          const blob = generateCustomerPDF(project, simulationResult.percentile80, region)
          downloadPDF(blob, `${project.name}-preventivo.pdf`)
        }} type="button">[PDF CLIENTE]</button>
        <button onClick={() => {
          const blob = generateDetailedPDF(project, simulationResult, region)
          downloadPDF(blob, `${project.name}-dettagliato.pdf`)
        }} type="button">[PDF DETTAGLIATO]</button>
        <button onClick={handleNewEstimate} type="button">[NUOVO PREVENTIVO]</button>
        <Link href="/it/estimate/">[MODIFICA PREVENTIVO]</Link>
      </div>

      <SimulationStats result={simulationResult} />
    </div>
  )
}
