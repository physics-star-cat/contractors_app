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

export default function SvResultsPage() {
  const { project, simulationResult, clear } = useEstimator()
  const { region } = useRegion()
  const router = useRouter()

  useEffect(() => {
    if (!simulationResult || !project) {
      router.push('/sv/estimate/')
    }
  }, [simulationResult, project, router])

  if (!simulationResult || !project) return null

  const fmt = (v: number) => formatCurrency(v, region)

  const handleSave = () => {
    saveProject(project)
    alert('Offert sparad')
  }

  const handleNewEstimate = () => {
    clear()
    router.push('/sv/estimate/')
  }

  return (
    <div className="results">
      <div className="results__hero">
        <div className="results__hero-label">rekommenderad offert</div>
        <div className="results__hero-amount">{fmt(simulationResult.percentile80)}</div>
        <div className="results__hero-sub">
          80:e percentilen — 80% chans att dina kostnader hamnar under
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
          percentile="50:e percentilen"
          description="50/50 — riskabelt"
        />
        <QuoteCard
          label="rekommenderad"
          amount={fmt(simulationResult.percentile80)}
          percentile="80:e percentilen"
          description="80% chans att hamna under"
          variant="recommended"
        />
        <QuoteCard
          label="försiktig"
          amount={fmt(simulationResult.percentile90)}
          percentile="90:e percentilen"
          description="mycket liten risk att förlora pengar"
        />
      </div>

      <CostBreakdown result={simulationResult} formatValue={fmt} />

      <div className="results__actions">
        <button onClick={handleSave} type="button">[SPARA]</button>
        <button onClick={() => {
          const blob = generateCustomerPDF(project, simulationResult.percentile80, region)
          downloadPDF(blob, `${project.name}-offert.pdf`)
        }} type="button">[KUND-PDF]</button>
        <button onClick={() => {
          const blob = generateDetailedPDF(project, simulationResult, region)
          downloadPDF(blob, `${project.name}-detaljerad.pdf`)
        }} type="button">[DETALJERAD PDF]</button>
        <button onClick={handleNewEstimate} type="button">[NY OFFERT]</button>
        <Link href="/sv/estimate/">[ÄNDRA OFFERT]</Link>
      </div>

      <SimulationStats result={simulationResult} />
    </div>
  )
}
