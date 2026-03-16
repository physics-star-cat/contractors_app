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

export default function TrResultsPage() {
  const { project, simulationResult, clear } = useEstimator()
  const { region } = useRegion()
  const router = useRouter()

  useEffect(() => {
    if (!simulationResult || !project) {
      router.push('/tr/estimate/')
    }
  }, [simulationResult, project, router])

  if (!simulationResult || !project) return null

  const fmt = (v: number) => formatCurrency(v, region)

  const handleSave = () => {
    saveProject(project)
    alert('Teklif kaydedildi')
  }

  const handleNewEstimate = () => {
    clear()
    router.push('/tr/estimate/')
  }

  return (
    <div className="results">
      <div className="results__hero">
        <div className="results__hero-label">önerilen teklif</div>
        <div className="results__hero-amount">{fmt(simulationResult.percentile80)}</div>
        <div className="results__hero-sub">
          80. yüzdelik — maliyetlerinizin altında kalma olasılığı %80
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
          label="tutucu"
          amount={fmt(simulationResult.percentile50)}
          percentile="50. yüzdelik"
          description="yarı yarıya — riskli"
        />
        <QuoteCard
          label="önerilen"
          amount={fmt(simulationResult.percentile80)}
          percentile="80. yüzdelik"
          description="altında kalma olasılığı %80"
          variant="recommended"
        />
        <QuoteCard
          label="ihtiyatlı"
          amount={fmt(simulationResult.percentile90)}
          percentile="90. yüzdelik"
          description="para kaybetme riski çok düşük"
        />
      </div>

      <CostBreakdown result={simulationResult} formatValue={fmt} />

      <div className="results__actions">
        <button onClick={handleSave} type="button">[KAYDET]</button>
        <button onClick={() => {
          const blob = generateCustomerPDF(project, simulationResult.percentile80, region)
          downloadPDF(blob, `${project.name}-teklif.pdf`)
        }} type="button">[MÜŞTERİ PDF]</button>
        <button onClick={() => {
          const blob = generateDetailedPDF(project, simulationResult, region)
          downloadPDF(blob, `${project.name}-detayli.pdf`)
        }} type="button">[DETAYLI PDF]</button>
        <button onClick={handleNewEstimate} type="button">[YENİ TEKLİF]</button>
        <Link href="/tr/estimate/">[TEKLİFİ DÜZENLE]</Link>
      </div>

      <SimulationStats result={simulationResult} />
    </div>
  )
}
