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

export default function FrResultsPage() {
  const { project, simulationResult, clear } = useEstimator()
  const { region } = useRegion()
  const router = useRouter()

  useEffect(() => {
    if (!simulationResult || !project) {
      router.push('/fr/estimate/')
    }
  }, [simulationResult, project, router])

  if (!simulationResult || !project) return null

  const fmt = (v: number) => formatCurrency(v, region)

  const handleSave = () => {
    saveProject(project)
    alert('Devis sauvegardé')
  }

  const handleNewEstimate = () => {
    clear()
    router.push('/fr/estimate/')
  }

  return (
    <div className="results">
      <div className="results__hero">
        <div className="results__hero-label">devis recommandé</div>
        <div className="results__hero-amount">{fmt(simulationResult.percentile80)}</div>
        <div className="results__hero-sub">
          80e percentile — 80% de chances que vos coûts soient inférieurs
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
          label="conservateur"
          amount={fmt(simulationResult.percentile50)}
          percentile="50e percentile"
          description="50/50 — risqué"
        />
        <QuoteCard
          label="recommandé"
          amount={fmt(simulationResult.percentile80)}
          percentile="80e percentile"
          description="80% de chances en dessous"
          variant="recommended"
        />
        <QuoteCard
          label="prudent"
          amount={fmt(simulationResult.percentile90)}
          percentile="90e percentile"
          description="très peu probable de perdre de l'argent"
        />
      </div>

      <CostBreakdown result={simulationResult} formatValue={fmt} />

      <div className="results__actions">
        <button onClick={handleSave} type="button">[SAUVEGARDER]</button>
        <button onClick={() => {
          const blob = generateCustomerPDF(project, simulationResult.percentile80, region)
          downloadPDF(blob, `${project.name}-devis.pdf`)
        }} type="button">[PDF CLIENT]</button>
        <button onClick={() => {
          const blob = generateDetailedPDF(project, simulationResult, region)
          downloadPDF(blob, `${project.name}-détaillé.pdf`)
        }} type="button">[PDF DÉTAILLÉ]</button>
        <button onClick={handleNewEstimate} type="button">[NOUVEAU DEVIS]</button>
        <Link href="/fr/estimate/">[MODIFIER LE DEVIS]</Link>
      </div>

      <SimulationStats result={simulationResult} />
    </div>
  )
}
