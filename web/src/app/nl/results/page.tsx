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

export default function NlResultsPage() {
  const { project, simulationResult, clear } = useEstimator()
  const { region } = useRegion()
  const router = useRouter()

  useEffect(() => {
    if (!simulationResult || !project) {
      router.push('/nl/estimate/')
    }
  }, [simulationResult, project, router])

  if (!simulationResult || !project) return null

  const fmt = (v: number) => formatCurrency(v, region)

  const handleSave = () => {
    saveProject(project)
    alert('Offerte opgeslagen')
  }

  const handleNewEstimate = () => {
    clear()
    router.push('/nl/estimate/')
  }

  return (
    <div className="results">
      <div className="results__hero">
        <div className="results__hero-label">aanbevolen offerte</div>
        <div className="results__hero-amount">{fmt(simulationResult.percentile80)}</div>
        <div className="results__hero-sub">
          80e percentiel — 80% kans dat uw kosten lager zijn
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
          label="conservatief"
          amount={fmt(simulationResult.percentile50)}
          percentile="50e percentiel"
          description="50/50 kans — risicovol"
        />
        <QuoteCard
          label="aanbevolen"
          amount={fmt(simulationResult.percentile80)}
          percentile="80e percentiel"
          description="80% kans eronder"
          variant="recommended"
        />
        <QuoteCard
          label="veilig"
          amount={fmt(simulationResult.percentile90)}
          percentile="90e percentiel"
          description="zeer onwaarschijnlijk om geld te verliezen"
        />
      </div>

      <CostBreakdown result={simulationResult} formatValue={fmt} />

      <div className="results__actions">
        <button onClick={handleSave} type="button">[OFFERTE OPSLAAN]</button>
        <button onClick={() => {
          const blob = generateCustomerPDF(project, simulationResult.percentile80, region)
          downloadPDF(blob, `${project.name}-offerte.pdf`)
        }} type="button">[KLANT PDF]</button>
        <button onClick={() => {
          const blob = generateDetailedPDF(project, simulationResult, region)
          downloadPDF(blob, `${project.name}-detail.pdf`)
        }} type="button">[DETAIL PDF]</button>
        <button onClick={handleNewEstimate} type="button">[NIEUWE OFFERTE]</button>
        <Link href="/nl/estimate/">[OFFERTE BEWERKEN]</Link>
      </div>

      <SimulationStats result={simulationResult} />
    </div>
  )
}
