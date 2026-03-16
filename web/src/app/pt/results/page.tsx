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

export default function PtResultsPage() {
  const { project, simulationResult, clear } = useEstimator()
  const { region } = useRegion()
  const router = useRouter()

  useEffect(() => {
    if (!simulationResult || !project) {
      router.push('/pt/estimate/')
    }
  }, [simulationResult, project, router])

  if (!simulationResult || !project) return null

  const fmt = (v: number) => formatCurrency(v, region)

  const handleSave = () => {
    saveProject(project)
    alert('Orçamento salvo')
  }

  const handleNewEstimate = () => {
    clear()
    router.push('/pt/estimate/')
  }

  return (
    <div className="results">
      <div className="results__hero">
        <div className="results__hero-label">orçamento recomendado</div>
        <div className="results__hero-amount">{fmt(simulationResult.percentile80)}</div>
        <div className="results__hero-sub">
          percentil 80 — 80% de chance de que seus custos fiquem abaixo
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
          label="conservador"
          amount={fmt(simulationResult.percentile50)}
          percentile="percentil 50"
          description="50/50 — arriscado"
        />
        <QuoteCard
          label="recomendado"
          amount={fmt(simulationResult.percentile80)}
          percentile="percentil 80"
          description="80% de chance abaixo"
          variant="recommended"
        />
        <QuoteCard
          label="prudente"
          amount={fmt(simulationResult.percentile90)}
          percentile="percentil 90"
          description="muito improvável perder dinheiro"
        />
      </div>

      <CostBreakdown result={simulationResult} formatValue={fmt} />

      <div className="results__actions">
        <button onClick={handleSave} type="button">[SALVAR]</button>
        <button onClick={() => {
          const blob = generateCustomerPDF(project, simulationResult.percentile80, region)
          downloadPDF(blob, `${project.name}-orcamento.pdf`)
        }} type="button">[PDF CLIENTE]</button>
        <button onClick={() => {
          const blob = generateDetailedPDF(project, simulationResult, region)
          downloadPDF(blob, `${project.name}-detalhado.pdf`)
        }} type="button">[PDF DETALHADO]</button>
        <button onClick={handleNewEstimate} type="button">[NOVO ORÇAMENTO]</button>
        <Link href="/pt/estimate/">[EDITAR ORÇAMENTO]</Link>
      </div>

      <SimulationStats result={simulationResult} />
    </div>
  )
}
