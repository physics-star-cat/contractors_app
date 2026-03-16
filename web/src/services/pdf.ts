import { jsPDF } from 'jspdf'
import type { Project, SimulationResult, AppRegionCode } from '@/models/types'
import { RISK_LEVELS, ITEM_CATEGORIES, REGIONS } from '@/models/constants'
import { formatCurrency } from './currency'
import { getMaterialsTotal, getBaseDurationCost, getBaseTravelCost } from './project'

export function generateCustomerPDF(
  project: Project,
  quoteAmount: number,
  region: AppRegionCode
): Blob {
  const doc = new jsPDF()
  const fmt = (v: number) => formatCurrency(v, region)
  const margin = 20
  let y = margin

  // Header
  doc.setFontSize(18)
  doc.text('LOWRISKQUOTES', margin, y)
  y += 8
  doc.setFontSize(10)
  doc.setTextColor(120)
  doc.text(`Quote generated ${new Date().toLocaleDateString()}`, margin, y)
  y += 16

  // Project info
  doc.setTextColor(0)
  doc.setFontSize(14)
  doc.text(project.name, margin, y)
  y += 7
  if (project.clientName) {
    doc.setFontSize(10)
    doc.setTextColor(80)
    doc.text(`For: ${project.clientName}`, margin, y)
    y += 10
  } else {
    y += 3
  }

  // Cost breakdown with profit folded in
  const materials = getMaterialsTotal(project)
  const duration = getBaseDurationCost(project)
  const travel = getBaseTravelCost(project)
  const subtotal = materials + duration + travel
  const profitMultiplier = subtotal > 0 ? quoteAmount / subtotal : 1

  doc.setFontSize(12)
  doc.setTextColor(0)
  doc.text('Cost Breakdown', margin, y)
  y += 8

  doc.setFontSize(10)
  const rows = [
    ['Materials', fmt(materials * profitMultiplier)],
    ['Labour', fmt(duration * profitMultiplier)],
    ['Travel', fmt(travel * profitMultiplier)],
  ]

  for (const [label, value] of rows) {
    doc.setTextColor(80)
    doc.text(label, margin + 4, y)
    doc.text(value, 160, y, { align: 'right' })
    y += 6
  }

  y += 4
  doc.setDrawColor(200)
  doc.line(margin, y, 190, y)
  y += 8

  doc.setFontSize(14)
  doc.setTextColor(0)
  doc.text('Total Quote', margin, y)
  doc.text(fmt(quoteAmount), 190, y, { align: 'right' })
  y += 12

  // Job details
  doc.setFontSize(10)
  doc.setTextColor(80)
  doc.text(`Estimated duration: ${project.estimatedDays} day${project.estimatedDays !== 1 ? 's' : ''}`, margin, y)
  y += 6
  doc.text(`Site visits: ${project.numberOfSiteVisits || Math.ceil(project.estimatedDays)}`, margin, y)
  y += 12

  // Terms
  doc.setFontSize(8)
  doc.setTextColor(120)
  doc.text('This quote is valid for 30 days from the date above.', margin, y)
  y += 5
  doc.text('Final costs may vary based on site conditions and scope changes.', margin, y)

  return doc.output('blob')
}

export function generateDetailedPDF(
  project: Project,
  result: SimulationResult,
  region: AppRegionCode
): Blob {
  const doc = new jsPDF()
  const fmt = (v: number) => formatCurrency(v, region)
  const margin = 20
  let y = margin

  // Header
  doc.setFontSize(18)
  doc.text('LOWRISKQUOTES — Detailed Estimate', margin, y)
  y += 8
  doc.setFontSize(10)
  doc.setTextColor(120)
  doc.text(`${project.name} | ${new Date().toLocaleDateString()}`, margin, y)
  if (project.clientName) {
    doc.text(`Client: ${project.clientName}`, 120, y)
  }
  y += 12

  // Line items
  doc.setTextColor(0)
  doc.setFontSize(12)
  doc.text('Line Items', margin, y)
  y += 8

  doc.setFontSize(9)
  doc.setTextColor(120)
  doc.text('Item', margin + 4, y)
  doc.text('Cost', 100, y)
  doc.text('Category', 130, y)
  doc.text('Risk', 165, y)
  y += 6

  doc.setTextColor(0)
  for (const item of project.lineItems) {
    doc.text(item.name || '(unnamed)', margin + 4, y)
    doc.text(fmt(item.estimatedCost), 100, y)
    doc.text(ITEM_CATEGORIES[item.category].label, 130, y)
    doc.text(RISK_LEVELS[item.riskLevel].label, 165, y)
    y += 5
  }
  y += 6

  // Cost summary
  doc.setFontSize(12)
  doc.text('Cost Summary', margin, y)
  y += 8

  doc.setFontSize(10)
  const summaryRows = [
    ['Materials', fmt(getMaterialsTotal(project))],
    ['Duration / Labor', fmt(getBaseDurationCost(project))],
    ['Travel', fmt(getBaseTravelCost(project))],
    ['Subtotal', fmt(getMaterialsTotal(project) + getBaseDurationCost(project) + getBaseTravelCost(project))],
    [`Profit (${Math.round(project.profitMargin * 100)}%)`, fmt((getMaterialsTotal(project) + getBaseDurationCost(project) + getBaseTravelCost(project)) * project.profitMargin)],
  ]

  for (const [label, value] of summaryRows) {
    doc.setTextColor(80)
    doc.text(label, margin + 4, y)
    doc.text(value, 160, y, { align: 'right' })
    y += 6
  }
  y += 6

  // Monte Carlo results
  doc.setTextColor(0)
  doc.setFontSize(12)
  doc.text('Risk Analysis (Monte Carlo)', margin, y)
  y += 8

  doc.setFontSize(10)
  const percentileRows = [
    ['50th percentile (conservative)', fmt(result.percentile50)],
    ['80th percentile (recommended)', fmt(result.percentile80)],
    ['90th percentile (safe)', fmt(result.percentile90)],
    ['95th percentile', fmt(result.percentile95)],
  ]

  for (const [label, value] of percentileRows) {
    doc.setTextColor(80)
    doc.text(label, margin + 4, y)
    doc.text(value, 160, y, { align: 'right' })
    y += 6
  }
  y += 4

  doc.setFontSize(9)
  doc.setTextColor(120)
  doc.text(`80% confidence range: ${fmt(result.percentile10)} - ${fmt(result.percentile90)}`, margin + 4, y)
  y += 5
  doc.text(`Simulations: ${result.iterationsRun.toLocaleString()} | Converged: ${result.isConverged ? 'Yes' : 'No'}`, margin + 4, y)

  return doc.output('blob')
}

export function downloadPDF(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}
