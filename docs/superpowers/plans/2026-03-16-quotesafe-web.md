# LowRiskQuotes Web Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build LowRiskQuotes — a retro terminal-aesthetic web app for contractor cost estimation using Monte Carlo simulation, with SEO content pages for Google discoverability.

**Architecture:** Next.js 14 App Router with SSG for content pages and client-side rendering for the interactive estimator tool. React context manages state between `/estimate` and `/results`. All computation runs in the browser — no backend.

**Tech Stack:** Next.js 14, TypeScript, plain CSS (no Tailwind), jsPDF, JetBrains Mono font, Vercel deployment.

**Spec:** `docs/superpowers/specs/2026-03-16-lowriskquotes-web-design.md`

**Reference implementations:**
- iOS Monte Carlo engine: `ios/RiskEstimator/RiskEstimator/Services/MonteCarloEngine.swift`
- iOS models: `ios/RiskEstimator/RiskEstimator/Models/`
- whatbreaks aesthetic: `../carstat/client/src/`

---

## Chunk 1: Project Scaffold + Core Types + Monte Carlo Engine

### Task 1: Next.js Project Scaffold

**Files:**
- Create: `web/package.json`
- Create: `web/next.config.js`
- Create: `web/tsconfig.json`
- Create: `web/src/app/layout.tsx`
- Create: `web/src/app/page.tsx`
- Create: `web/src/styles/variables.css`
- Create: `web/src/styles/globals.css`

- [ ] **Step 1: Create Next.js project**

```bash
cd /Users/chris/Projects/contractors_app
npx create-next-app@latest web --typescript --app --src-dir --no-tailwind --no-eslint --import-alias "@/*"
```

When prompted, accept defaults. This creates the Next.js scaffold.

- [ ] **Step 2: Install dependencies**

```bash
cd /Users/chris/Projects/contractors_app/web
npm install jspdf
npm install -D @types/node
```

- [ ] **Step 3: Create CSS variables**

Create `web/src/styles/variables.css`:
```css
:root {
  --bg-primary: #0a0a0a;
  --bg-secondary: #111111;
  --bg-tertiary: #1a1a1a;
  --text-primary: #e0e0e0;
  --text-secondary: #999999;
  --text-dim: #555555;
  --accent-amber: #f59e0b;
  --accent-red: #dc2626;
  --accent-green: #22c55e;
  --accent-blue: #3b82f6;
  --border-color: #333333;
  --border-bright: #555555;
  --font-mono: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
}
```

- [ ] **Step 4: Create global CSS**

Create `web/src/styles/globals.css` — port from `../carstat/client/src/styles/globals.css` with same dark terminal aesthetic:
```css
@import './variables.css';

*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #root {
  height: 100%;
}

body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: var(--font-mono);
  font-size: 14px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

a {
  color: var(--accent-amber);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

::selection {
  background: var(--accent-amber);
  color: var(--bg-primary);
}

input, select, textarea, button {
  font-family: var(--font-mono);
  font-size: 14px;
  background: var(--bg-secondary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  padding: var(--spacing-sm) var(--spacing-md);
  outline: none;
  border-radius: 0;
  -webkit-appearance: none;
  appearance: none;
}

input:focus, select:focus, textarea:focus {
  border-color: var(--accent-amber);
}

button {
  cursor: pointer;
  border-color: var(--accent-amber);
  color: var(--accent-amber);
  background: transparent;
  text-transform: uppercase;
  letter-spacing: 1px;
}

button:hover {
  background: var(--accent-amber);
  color: var(--bg-primary);
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--bg-primary);
}

::-webkit-scrollbar-thumb {
  background: var(--border-color);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--border-bright);
}

@media (max-width: 600px) {
  body {
    font-size: 12px;
  }
}
```

- [ ] **Step 5: Update root layout**

Replace `web/src/app/layout.tsx`:
```tsx
import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'lowriskquotes // contractor cost estimation',
  description: 'Monte Carlo cost projections for contractors. Stop guessing, start simulating.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="app">
          {children}
        </div>
      </body>
    </html>
  )
}
```

Add `.app` styles to `globals.css`:
```css
.app {
  max-width: 800px;
  margin: 0 auto;
  padding: var(--spacing-md);
  min-height: 100vh;
}
```

- [ ] **Step 6: Create placeholder landing page**

Replace `web/src/app/page.tsx`:
```tsx
export default function HomePage() {
  return (
    <div>
      <pre>lowriskquotes</pre>
      <p>stop guessing // start simulating</p>
    </div>
  )
}
```

- [ ] **Step 7: Verify it runs**

```bash
cd /Users/chris/Projects/contractors_app/web
npm run dev
```

Open http://localhost:3000 — should see dark background, monospace text, "lowriskquotes" heading.

- [ ] **Step 8: Commit**

```bash
cd /Users/chris/Projects/contractors_app
git add web/
git commit -m "feat: scaffold Next.js project with terminal aesthetic CSS"
```

---

### Task 2: TypeScript Types + Constants

**Files:**
- Create: `web/src/models/types.ts`
- Create: `web/src/models/constants.ts`

Port all data models from iOS. Reference: `ios/RiskEstimator/RiskEstimator/Models/`.

- [ ] **Step 1: Create types**

Create `web/src/models/types.ts`:
```typescript
export type RiskLevel = 'certain' | 'low' | 'medium' | 'high' | 'wildGuess'
export type ComplexityLevel = 'routine' | 'moderate' | 'complex' | 'unknownScope'
export type TrafficVariability = 'predictable' | 'variable' | 'highVariability'
export type ItemCategory = 'material' | 'labor' | 'subcontractor' | 'other'
export type AppRegionCode = 'US' | 'UK' | 'CA' | 'AU' | 'NZ'

export interface LineItem {
  id: string
  name: string
  estimatedCost: number
  category: ItemCategory
  riskLevel: RiskLevel
}

export interface Worker {
  id: string
  name: string
  hourlyRate: number
  hoursPerDay: number
  daysOnJob: number | null
}

export interface Project {
  id: string
  name: string
  clientName: string
  createdAt: string
  updatedAt: string
  profitMargin: number
  lineItems: LineItem[]
  workers: Worker[]
  estimatedDays: number
  complexityLevel: ComplexityLevel
  hourlyLaborRate: number
  hoursPerDay: number
  travelTimeMinutes: number
  trafficVariability: TrafficVariability
  numberOfSiteVisits: number
  includeReturnTrip: boolean
  mileageRate: number
  distance: number
}

export interface SimulationResult {
  simulations: number[]
  percentile10: number
  percentile50: number
  percentile80: number
  percentile90: number
  percentile95: number
  mean: number
  standardDeviation: number
  standardErrorP80: number
  min: number
  max: number
  materialCostP50: number
  materialCostP80: number
  durationCostP50: number
  durationCostP80: number
  travelCostP50: number
  travelCostP80: number
  iterationsRun: number
  isConverged: boolean
}

export interface HistogramBucket {
  rangeStart: number
  rangeEnd: number
  count: number
  frequency: number
}
```

- [ ] **Step 2: Create constants**

Create `web/src/models/constants.ts`:
```typescript
import type { RiskLevel, ComplexityLevel, TrafficVariability, AppRegionCode } from './types'

export const RISK_LEVELS: Record<RiskLevel, { label: string; variance: number; description: string }> = {
  certain:   { label: 'Certain',    variance: 0.02, description: 'Fixed/contracted price' },
  low:       { label: 'Low Risk',   variance: 0.08, description: 'Known supplier, stable pricing' },
  medium:    { label: 'Medium Risk',variance: 0.15, description: 'Standard market variability' },
  high:      { label: 'High Risk',  variance: 0.25, description: 'Volatile or uncertain costs' },
  wildGuess: { label: 'Wild Guess', variance: 0.40, description: 'Unknown scope items' },
}

export const COMPLEXITY_LEVELS: Record<ComplexityLevel, { label: string; variance: number; description: string }> = {
  routine:      { label: 'Routine',       variance: 0.10, description: 'Repeat job, clear scope' },
  moderate:     { label: 'Moderate',      variance: 0.25, description: 'Standard job, minor unknowns' },
  complex:      { label: 'Complex',       variance: 0.40, description: 'Custom work, dependencies' },
  unknownScope: { label: 'Unknown Scope', variance: 0.60, description: 'New type of job, unclear requirements' },
}

export const TRAFFIC_LEVELS: Record<TrafficVariability, { label: string; variance: number; description: string }> = {
  predictable:     { label: 'Predictable',      variance: 0.10, description: 'Rural, off-peak times' },
  variable:        { label: 'Variable',         variance: 0.25, description: 'Suburban, mixed traffic' },
  highVariability: { label: 'High Variability', variance: 0.50, description: 'Urban, peak hours' },
}

export const REGIONS: Record<AppRegionCode, {
  displayName: string
  flag: string
  currencyCode: string
  currencySymbol: string
  usesMiles: boolean
  distanceUnit: string
  distanceUnitShort: string
  defaultMileageRate: number
  laborSpelling: string
  workerTitle: string
  workerTitlePlural: string
}> = {
  US: {
    displayName: 'United States', flag: '🇺🇸',
    currencyCode: 'USD', currencySymbol: '$',
    usesMiles: true, distanceUnit: 'miles', distanceUnitShort: 'mi',
    defaultMileageRate: 0.67,
    laborSpelling: 'Labor', workerTitle: 'Contractor', workerTitlePlural: 'Contractors',
  },
  UK: {
    displayName: 'United Kingdom', flag: '🇬🇧',
    currencyCode: 'GBP', currencySymbol: '£',
    usesMiles: true, distanceUnit: 'miles', distanceUnitShort: 'mi',
    defaultMileageRate: 0.45,
    laborSpelling: 'Labour', workerTitle: 'Tradesperson', workerTitlePlural: 'Tradespeople',
  },
  CA: {
    displayName: 'Canada', flag: '🇨🇦',
    currencyCode: 'CAD', currencySymbol: '$',
    usesMiles: false, distanceUnit: 'kilometres', distanceUnitShort: 'km',
    defaultMileageRate: 0.70,
    laborSpelling: 'Labour', workerTitle: 'Contractor', workerTitlePlural: 'Contractors',
  },
  AU: {
    displayName: 'Australia', flag: '🇦🇺',
    currencyCode: 'AUD', currencySymbol: '$',
    usesMiles: false, distanceUnit: 'kilometres', distanceUnitShort: 'km',
    defaultMileageRate: 0.85,
    laborSpelling: 'Labour', workerTitle: 'Tradie', workerTitlePlural: 'Tradies',
  },
  NZ: {
    displayName: 'New Zealand', flag: '🇳🇿',
    currencyCode: 'NZD', currencySymbol: '$',
    usesMiles: false, distanceUnit: 'kilometres', distanceUnitShort: 'km',
    defaultMileageRate: 0.95,
    laborSpelling: 'Labour', workerTitle: 'Tradie', workerTitlePlural: 'Tradies',
  },
}

export const ITEM_CATEGORIES = {
  material: { label: 'Material' },
  labor: { label: 'Labor' },
  subcontractor: { label: 'Subcontractor' },
  other: { label: 'Other' },
} as const

export const DEFAULT_PROJECT = {
  name: 'New Estimate',
  clientName: '',
  profitMargin: 0.15,
  estimatedDays: 1.0,
  complexityLevel: 'moderate' as const,
  hourlyLaborRate: 50.0,
  hoursPerDay: 8.0,
  travelTimeMinutes: 30.0,
  trafficVariability: 'variable' as const,
  numberOfSiteVisits: 0,
  includeReturnTrip: true,
  distance: 0.0,
}

export const DEFAULT_WORKER = {
  name: 'Worker',
  hourlyRate: 25.0,
  hoursPerDay: 8.0,
  daysOnJob: null,
}
```

- [ ] **Step 3: Commit**

```bash
cd /Users/chris/Projects/contractors_app
git add web/src/models/
git commit -m "feat: add TypeScript types and constants ported from iOS"
```

---

### Task 3: Monte Carlo Engine

**Files:**
- Create: `web/src/engine/monteCarlo.ts`
- Create: `web/src/engine/__tests__/monteCarlo.test.ts`

Direct port of `ios/RiskEstimator/RiskEstimator/Services/MonteCarloEngine.swift`.

- [ ] **Step 1: Write engine tests**

```bash
cd /Users/chris/Projects/contractors_app/web
npm install -D jest @types/jest ts-jest
```

Create `web/jest.config.js`:
```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: { '^@/(.*)$': '<rootDir>/src/$1' },
}
```

Create `web/src/engine/__tests__/monteCarlo.test.ts`:
```typescript
import { runSimulation, computeHistogram, computeConfidenceLevel } from '../monteCarlo'
import type { Project } from '@/models/types'

function makeProject(overrides: Partial<Project> = {}): Project {
  return {
    id: 'test-1',
    name: 'Test Project',
    clientName: '',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    profitMargin: 0.15,
    lineItems: [
      { id: 'item-1', name: 'Materials', estimatedCost: 1000, category: 'material', riskLevel: 'medium' },
    ],
    workers: [],
    estimatedDays: 5,
    complexityLevel: 'moderate',
    hourlyLaborRate: 50,
    hoursPerDay: 8,
    travelTimeMinutes: 30,
    trafficVariability: 'variable',
    numberOfSiteVisits: 0,
    includeReturnTrip: true,
    mileageRate: 0.45,
    distance: 10,
    ...overrides,
  }
}

describe('Monte Carlo Engine', () => {
  test('returns valid simulation result', () => {
    const project = makeProject()
    const result = runSimulation(project)

    expect(result.simulations.length).toBeGreaterThanOrEqual(1000)
    expect(result.percentile10).toBeLessThan(result.percentile50)
    expect(result.percentile50).toBeLessThan(result.percentile80)
    expect(result.percentile80).toBeLessThan(result.percentile90)
    expect(result.percentile90).toBeLessThanOrEqual(result.percentile95)
    expect(result.mean).toBeGreaterThan(0)
    expect(result.standardDeviation).toBeGreaterThan(0)
    expect(result.min).toBeLessThanOrEqual(result.percentile10)
    expect(result.max).toBeGreaterThanOrEqual(result.percentile95)
    expect(result.iterationsRun).toBeGreaterThanOrEqual(1000)
  })

  test('higher risk produces wider spread', () => {
    const lowRisk = makeProject({
      lineItems: [{ id: '1', name: 'A', estimatedCost: 5000, category: 'material', riskLevel: 'certain' }],
    })
    const highRisk = makeProject({
      lineItems: [{ id: '1', name: 'A', estimatedCost: 5000, category: 'material', riskLevel: 'wildGuess' }],
    })

    const lowResult = runSimulation(lowRisk)
    const highResult = runSimulation(highRisk)

    const lowSpread = lowResult.percentile90 - lowResult.percentile10
    const highSpread = highResult.percentile90 - highResult.percentile10
    expect(highSpread).toBeGreaterThan(lowSpread)
  })

  test('profit margin is applied', () => {
    const noProfit = makeProject({ profitMargin: 0 })
    const withProfit = makeProject({ profitMargin: 0.20 })

    const noResult = runSimulation(noProfit)
    const profitResult = runSimulation(withProfit)

    // P50 with 20% margin should be ~20% higher than 0% margin
    const ratio = profitResult.percentile50 / noResult.percentile50
    expect(ratio).toBeGreaterThan(1.15)
    expect(ratio).toBeLessThan(1.25)
  })

  test('includes duration and travel cost breakdowns', () => {
    const project = makeProject()
    const result = runSimulation(project)

    expect(result.durationCostP50).toBeGreaterThan(0)
    expect(result.durationCostP80).toBeGreaterThan(0)
    expect(result.travelCostP50).toBeGreaterThan(0)
    expect(result.travelCostP80).toBeGreaterThan(0)
    expect(result.materialCostP50).toBeGreaterThan(0)
    expect(result.materialCostP80).toBeGreaterThan(0)
  })

  test('empty project returns zero result', () => {
    const project = makeProject({ lineItems: [], estimatedDays: 0, travelTimeMinutes: 0, distance: 0 })
    const result = runSimulation(project)
    expect(result.percentile50).toBe(0)
  })

  test('computeHistogram returns 20 buckets', () => {
    const data = Array.from({ length: 100 }, (_, i) => i)
    const buckets = computeHistogram(data, 0, 99)
    expect(buckets).toHaveLength(20)
    expect(buckets[0].rangeStart).toBe(0)
    expect(buckets[19].rangeEnd).toBeCloseTo(99)
    const totalCount = buckets.reduce((sum, b) => sum + b.count, 0)
    expect(totalCount).toBe(100)
  })

  test('computeConfidenceLevel returns 0-100', () => {
    expect(computeConfidenceLevel(10, 10000)).toBeLessThanOrEqual(100)
    expect(computeConfidenceLevel(10, 10000)).toBeGreaterThanOrEqual(0)
    expect(computeConfidenceLevel(1000, 10000)).toBeLessThan(computeConfidenceLevel(10, 10000))
  })
})
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
cd /Users/chris/Projects/contractors_app/web
npx jest
```

Expected: FAIL — `monteCarlo` module not found.

- [ ] **Step 3: Implement Monte Carlo engine**

Create `web/src/engine/monteCarlo.ts`:
```typescript
import type { Project, SimulationResult, HistogramBucket, LineItem } from '@/models/types'
import { RISK_LEVELS, COMPLEXITY_LEVELS, TRAFFIC_LEVELS } from '@/models/constants'

const MIN_ITERATIONS = 1000
const MAX_ITERATIONS = 10000
const BATCH_SIZE = 500
const CONVERGENCE_THRESHOLD = 0.01

export function runSimulation(project: Project): SimulationResult {
  // Handle empty project
  const hasWork = project.lineItems.length > 0 || project.estimatedDays > 0 || project.travelTimeMinutes > 0 || project.distance > 0
  if (!hasWork) {
    return emptyResult()
  }

  const simulations: number[] = []
  const durationSims: number[] = []
  const travelSims: number[] = []
  const materialSims: number[] = []

  let previousP80 = 0
  let isConverged = false
  let iterationsRun = 0

  while (iterationsRun < MAX_ITERATIONS) {
    const batchEnd = Math.min(iterationsRun + BATCH_SIZE, MAX_ITERATIONS)

    for (let i = iterationsRun; i < batchEnd; i++) {
      // Material costs
      let materialCost = 0
      for (const item of project.lineItems) {
        materialCost += simulateCost(item)
      }
      materialSims.push(materialCost)

      // Duration costs
      const simulatedDays = simulateDuration(project.estimatedDays, project.complexityLevel)
      const mainLaborCost = simulatedDays * project.hoursPerDay * project.hourlyLaborRate
      const workersLaborCost = project.workers.reduce((total, worker) => {
        const days = worker.daysOnJob ?? project.estimatedDays
        return total + worker.hourlyRate * worker.hoursPerDay * days
      }, 0)
      const durationCost = mainLaborCost + workersLaborCost
      durationSims.push(durationCost)

      // Travel costs (correlated with duration)
      const effectiveVisits = project.numberOfSiteVisits > 0
        ? project.numberOfSiteVisits
        : Math.ceil(simulatedDays)
      const simulatedTravelTime = simulateTravelTime(project.travelTimeMinutes, project.trafficVariability)
      const tripsPerVisit = project.includeReturnTrip ? 2.0 : 1.0
      const totalTravelHours = (simulatedTravelTime / 60.0) * tripsPerVisit * effectiveVisits
      const travelTimeCost = totalTravelHours * project.hourlyLaborRate
      const mileageCost = project.distance * project.mileageRate * tripsPerVisit * effectiveVisits
      const travelCost = travelTimeCost + mileageCost
      travelSims.push(travelCost)

      // Total with profit
      const totalCost = materialCost + durationCost + travelCost
      const withProfit = totalCost * (1 + project.profitMargin)
      simulations.push(withProfit)
    }

    iterationsRun = batchEnd

    // Check convergence after minimum iterations
    if (iterationsRun >= MIN_ITERATIONS) {
      const sorted = [...simulations].sort((a, b) => a - b)
      const currentP80 = percentile(sorted, 0.80)

      if (previousP80 > 0) {
        const relativeChange = Math.abs(currentP80 - previousP80) / previousP80
        if (relativeChange < CONVERGENCE_THRESHOLD) {
          isConverged = true
          break
        }
      }
      previousP80 = currentP80
    }
  }

  // Sort for percentile calculations
  simulations.sort((a, b) => a - b)
  durationSims.sort((a, b) => a - b)
  travelSims.sort((a, b) => a - b)
  materialSims.sort((a, b) => a - b)

  const mean = simulations.reduce((s, v) => s + v, 0) / simulations.length
  const variance = simulations.reduce((s, v) => s + (v - mean) ** 2, 0) / simulations.length
  const stdDev = Math.sqrt(variance)
  const standardErrorP80 = (stdDev / Math.sqrt(iterationsRun)) * 1.5

  return {
    simulations,
    percentile10: percentile(simulations, 0.10),
    percentile50: percentile(simulations, 0.50),
    percentile80: percentile(simulations, 0.80),
    percentile90: percentile(simulations, 0.90),
    percentile95: percentile(simulations, 0.95),
    mean,
    standardDeviation: stdDev,
    standardErrorP80,
    min: simulations[0] ?? 0,
    max: simulations[simulations.length - 1] ?? 0,
    durationCostP50: percentile(durationSims, 0.50),
    durationCostP80: percentile(durationSims, 0.80),
    travelCostP50: percentile(travelSims, 0.50),
    travelCostP80: percentile(travelSims, 0.80),
    materialCostP50: percentile(materialSims, 0.50),
    materialCostP80: percentile(materialSims, 0.80),
    iterationsRun,
    isConverged,
  }
}

function simulateCost(item: LineItem): number {
  const base = item.estimatedCost
  const variance = RISK_LEVELS[item.riskLevel].variance
  const z = generateSkewedNormal()
  const simulated = base * (1 + z * variance)
  const minCost = base * (1 - variance)
  const maxCost = base * (1 + variance * 1.5)
  return Math.max(minCost, Math.min(simulated, maxCost * 1.1))
}

function simulateDuration(baseDays: number, complexity: string): number {
  const variance = COMPLEXITY_LEVELS[complexity as keyof typeof COMPLEXITY_LEVELS].variance
  const z = generateSkewedNormal()
  const simulated = baseDays * (1 + z * variance)
  const minDays = baseDays * 0.9
  const maxDays = baseDays * (1 + variance * 3)
  return Math.max(minDays, Math.min(simulated, maxDays))
}

function simulateTravelTime(baseMinutes: number, variability: string): number {
  const variance = TRAFFIC_LEVELS[variability as keyof typeof TRAFFIC_LEVELS].variance
  const z = generateSkewedNormal()
  const simulated = baseMinutes * (1 + z * variance)
  const minMinutes = baseMinutes * 0.5
  const maxMinutes = baseMinutes * (1 + variance * 2)
  return Math.max(minMinutes, Math.min(simulated, maxMinutes))
}

function generateSkewedNormal(): number {
  const u1 = Math.random() * 0.9998 + 0.0001
  const u2 = Math.random() * 0.9998 + 0.0001
  const z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2)
  return z < 0 ? z * 0.7 : z * 1.3
}

function percentile(sorted: number[], p: number): number {
  if (sorted.length === 0) return 0
  const index = p * (sorted.length - 1)
  const lower = Math.floor(index)
  const upper = Math.ceil(index)
  if (lower === upper) return sorted[lower]
  const fraction = index - lower
  return sorted[lower] * (1 - fraction) + sorted[upper] * fraction
}

export function computeHistogram(simulations: number[], min: number, max: number): HistogramBucket[] {
  const bucketCount = 20
  const range = max - min
  const bucketSize = range / bucketCount

  return Array.from({ length: bucketCount }, (_, i) => {
    const rangeStart = min + i * bucketSize
    const rangeEnd = rangeStart + bucketSize
    const count = simulations.filter(v => v >= rangeStart && v < rangeEnd).length
    return { rangeStart, rangeEnd, count, frequency: count / simulations.length }
  })
}

export function computeConfidenceLevel(standardErrorP80: number, percentile80: number): number {
  if (percentile80 <= 0) return 100
  const cv = standardErrorP80 / percentile80
  return Math.max(0, Math.min(100, (1 - cv * 10) * 100))
}

function emptyResult(): SimulationResult {
  return {
    simulations: [], percentile10: 0, percentile50: 0, percentile80: 0,
    percentile90: 0, percentile95: 0, mean: 0, standardDeviation: 0,
    standardErrorP80: 0, min: 0, max: 0, materialCostP50: 0, materialCostP80: 0,
    durationCostP50: 0, durationCostP80: 0, travelCostP50: 0, travelCostP80: 0,
    iterationsRun: 0, isConverged: false,
  }
}
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
cd /Users/chris/Projects/contractors_app/web
npx jest
```

Expected: All tests PASS.

- [ ] **Step 5: Commit**

```bash
cd /Users/chris/Projects/contractors_app
git add web/src/engine/ web/jest.config.js
git commit -m "feat: port Monte Carlo simulation engine from iOS with tests"
```

---

### Task 4: Services — Storage, Currency, Project Helpers

**Files:**
- Create: `web/src/services/storage.ts`
- Create: `web/src/services/currency.ts`
- Create: `web/src/services/project.ts`

- [ ] **Step 1: Create storage service**

Create `web/src/services/storage.ts`:
```typescript
import type { Project, AppRegionCode } from '@/models/types'

const PROJECTS_KEY = 'lowriskquotes_projects'
const REGION_KEY = 'lowriskquotes_region'

export function loadProjects(): Project[] {
  if (typeof window === 'undefined') return []
  try {
    const json = localStorage.getItem(PROJECTS_KEY)
    return json ? JSON.parse(json) : []
  } catch {
    return []
  }
}

export function saveProject(project: Project): void {
  const projects = loadProjects()
  const index = projects.findIndex(p => p.id === project.id)
  if (index >= 0) {
    projects[index] = { ...project, updatedAt: new Date().toISOString() }
  } else {
    projects.push(project)
  }
  localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects))
}

export function deleteProject(id: string): void {
  const projects = loadProjects().filter(p => p.id !== id)
  localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects))
}

export function loadRegion(): AppRegionCode {
  if (typeof window === 'undefined') return 'US'
  const saved = localStorage.getItem(REGION_KEY)
  if (saved && ['US', 'UK', 'CA', 'AU', 'NZ'].includes(saved)) {
    return saved as AppRegionCode
  }
  return detectRegion()
}

export function saveRegion(region: AppRegionCode): void {
  localStorage.setItem(REGION_KEY, region)
}

function detectRegion(): AppRegionCode {
  if (typeof navigator === 'undefined') return 'US'
  const lang = navigator.language
  if (lang.includes('GB') || lang.includes('en-GB')) return 'UK'
  if (lang.includes('CA') || lang.includes('en-CA')) return 'CA'
  if (lang.includes('AU') || lang.includes('en-AU')) return 'AU'
  if (lang.includes('NZ') || lang.includes('en-NZ')) return 'NZ'
  return 'US'
}
```

- [ ] **Step 2: Create currency service**

Create `web/src/services/currency.ts`:
```typescript
import type { AppRegionCode } from '@/models/types'
import { REGIONS } from '@/models/constants'

export function formatCurrency(value: number, region: AppRegionCode): string {
  const { currencyCode } = REGIONS[region]
  try {
    return new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value)
  } catch {
    return `${REGIONS[region].currencySymbol}${value.toFixed(2)}`
  }
}

export function formatPercent(value: number): string {
  return `${Math.round(value * 100)}%`
}
```

- [ ] **Step 3: Create project helpers**

Create `web/src/services/project.ts`:
```typescript
import type { Project, LineItem, Worker } from '@/models/types'
import { DEFAULT_PROJECT, REGIONS } from '@/models/constants'
import type { AppRegionCode } from '@/models/types'

export function createProject(region: AppRegionCode): Project {
  return {
    ...DEFAULT_PROJECT,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    lineItems: [],
    workers: [],
    mileageRate: REGIONS[region].defaultMileageRate,
  }
}

export function createLineItem(): LineItem {
  return {
    id: crypto.randomUUID(),
    name: '',
    estimatedCost: 0,
    category: 'material',
    riskLevel: 'medium',
  }
}

export function createWorker(): Worker {
  return {
    id: crypto.randomUUID(),
    name: 'Worker',
    hourlyRate: 25.0,
    hoursPerDay: 8.0,
    daysOnJob: null,
  }
}

// Computed project properties matching iOS Project.swift
export function getMainLaborCost(p: Project): number {
  return p.estimatedDays * p.hoursPerDay * p.hourlyLaborRate
}

export function getWorkersLaborCost(p: Project): number {
  return p.workers.reduce((total, w) => {
    const days = w.daysOnJob ?? p.estimatedDays
    return total + w.hourlyRate * w.hoursPerDay * days
  }, 0)
}

export function getBaseDurationCost(p: Project): number {
  return getMainLaborCost(p) + getWorkersLaborCost(p)
}

export function getEffectiveSiteVisits(p: Project): number {
  return p.numberOfSiteVisits > 0 ? p.numberOfSiteVisits : Math.ceil(p.estimatedDays)
}

export function getBaseTravelCost(p: Project): number {
  const trips = p.includeReturnTrip ? 2.0 : 1.0
  const visits = getEffectiveSiteVisits(p)
  const travelHours = (p.travelTimeMinutes / 60.0) * trips * visits
  const timeCost = travelHours * p.hourlyLaborRate
  const mileageCost = p.distance * p.mileageRate * trips * visits
  return timeCost + mileageCost
}

export function getMaterialsTotal(p: Project): number {
  return p.lineItems.reduce((sum, item) => sum + item.estimatedCost, 0)
}

export function getTotalWithProfit(p: Project): number {
  const subtotal = getMaterialsTotal(p) + getBaseDurationCost(p) + getBaseTravelCost(p)
  return subtotal * (1 + p.profitMargin)
}
```

- [ ] **Step 4: Commit**

```bash
cd /Users/chris/Projects/contractors_app
git add web/src/services/
git commit -m "feat: add storage, currency, and project helper services"
```

---

## Chunk 2: Layout Components + Context + Estimator Page

### Task 5: Layout Components

**Files:**
- Create: `web/src/components/layout/ASCIILogo.tsx`
- Create: `web/src/components/layout/ASCIILogo.css`
- Create: `web/src/components/layout/Nav.tsx`
- Create: `web/src/components/layout/Nav.css`
- Create: `web/src/components/layout/Footer.tsx`
- Create: `web/src/components/layout/Footer.css`

- [ ] **Step 1: Create ASCIILogo**

Create `web/src/components/layout/ASCIILogo.tsx`:
```tsx
import './ASCIILogo.css'

const LOGO = `
 ██████╗ ██╗   ██╗ ██████╗ ████████╗███████╗███████╗ █████╗ ███████╗███████╗
██╔═══██╗██║   ██║██╔═══██╗╚══██╔══╝██╔════╝██╔════╝██╔══██╗██╔════╝██╔════╝
██║   ██║██║   ██║██║   ██║   ██║   █████╗  ███████╗███████║█████╗  █████╗
██║▄▄ ██║██║   ██║██║   ██║   ██║   ██╔══╝  ╚════██║██╔══██║██╔══╝  ██╔══╝
╚██████╔╝╚██████╔╝╚██████╔╝   ██║   ███████╗███████║██║  ██║██║     ███████╗
 ╚══▀▀═╝  ╚═════╝  ╚═════╝    ╚═╝   ╚══════╝╚══════╝╚═╝  ╚═╝╚═╝     ╚══════╝`.trimStart()

const LOGO_SMALL = 'lowriskquotes'

export default function ASCIILogo() {
  return (
    <div className="ascii-logo">
      <pre className="ascii-logo__full" aria-label="lowriskquotes">{LOGO}</pre>
      <span className="ascii-logo__small" aria-hidden="true">{LOGO_SMALL}</span>
    </div>
  )
}
```

Create `web/src/components/layout/ASCIILogo.css`:
```css
.ascii-logo__full {
  color: var(--accent-amber);
  font-size: 8px;
  line-height: 1.1;
  overflow: hidden;
}

.ascii-logo__small {
  display: none;
  color: var(--accent-amber);
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 2px;
}

@media (max-width: 600px) {
  .ascii-logo__full {
    display: none;
  }
  .ascii-logo__small {
    display: inline;
  }
}
```

- [ ] **Step 2: Create Nav**

Create `web/src/components/layout/Nav.tsx` and `Nav.css`:

Nav.tsx:
```tsx
'use client'

import Link from 'next/link'
import { useRegion } from '@/context/RegionContext'
import { REGIONS } from '@/models/constants'
import type { AppRegionCode } from '@/models/types'
import './Nav.css'

export default function Nav() {
  const { region, setRegion } = useRegion()
  const regionInfo = REGIONS[region]

  return (
    <nav className="nav">
      <div className="nav__links">
        <Link href="/" className="nav__brand">lowriskquotes</Link>
        <Link href="/estimate" className="nav__link">[ESTIMATE]</Link>
        <Link href="/guides/how-to-quote-a-job" className="nav__link">[GUIDES]</Link>
        <Link href="/about" className="nav__link">[ABOUT]</Link>
      </div>
      <select
        className="nav__region"
        value={region}
        onChange={(e) => setRegion(e.target.value as AppRegionCode)}
        aria-label="Select region"
      >
        {(Object.keys(REGIONS) as AppRegionCode[]).map(code => (
          <option key={code} value={code}>
            {REGIONS[code].flag} {REGIONS[code].currencyCode}
          </option>
        ))}
      </select>
    </nav>
  )
}
```

Nav.css:
```css
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-sm) 0;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: var(--spacing-lg);
}

.nav__links {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.nav__brand {
  color: var(--accent-amber);
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 1px;
}

.nav__link {
  color: var(--text-secondary);
  font-size: 12px;
  letter-spacing: 1px;
}

.nav__link:hover {
  color: var(--accent-amber);
  text-decoration: none;
}

.nav__region {
  font-size: 12px;
  padding: var(--spacing-xs) var(--spacing-sm);
  background: transparent;
  border: 1px solid var(--border-color);
  cursor: pointer;
}

@media (max-width: 600px) {
  .nav__links {
    gap: var(--spacing-sm);
  }
  .nav__link {
    font-size: 10px;
  }
}
```

- [ ] **Step 3: Create Footer**

Create `web/src/components/layout/Footer.tsx` and `Footer.css`:

Footer.tsx:
```tsx
import Link from 'next/link'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__separator">{'─'.repeat(60)}</div>
      <p className="footer__text">
        lowriskquotes // <Link href="/about">about</Link> // all data stays in your browser
      </p>
    </footer>
  )
}
```

Footer.css:
```css
.footer {
  margin-top: var(--spacing-xl);
  padding: var(--spacing-md) 0;
}

.footer__separator {
  color: var(--border-color);
  margin-bottom: var(--spacing-sm);
}

.footer__text {
  font-size: 11px;
  color: var(--text-dim);
}
```

- [ ] **Step 4: Commit**

```bash
cd /Users/chris/Projects/contractors_app
git add web/src/components/layout/
git commit -m "feat: add layout components — ASCIILogo, Nav, Footer"
```

---

### Task 6: UI Components

**Files:**
- Create: `web/src/components/ui/ASCIIBox.tsx`
- Create: `web/src/components/ui/ASCIIBox.css`
- Create: `web/src/components/ui/RiskSelector.tsx`
- Create: `web/src/components/ui/RiskSelector.css`
- Create: `web/src/components/ui/OptionSelector.tsx`
- Create: `web/src/components/ui/OptionSelector.css`
- Create: `web/src/components/ui/QuoteCard.tsx`
- Create: `web/src/components/ui/QuoteCard.css`

- [ ] **Step 1: Create ASCIIBox**

Port from `../carstat/client/src/components/ASCIIBox.jsx`.

Create `web/src/components/ui/ASCIIBox.tsx`:
```tsx
import './ASCIIBox.css'

interface Props {
  title?: string
  variant?: 'default' | 'highlight' | 'warning'
  children: React.ReactNode
}

export default function ASCIIBox({ title, variant = 'default', children }: Props) {
  return (
    <div className={`ascii-box ascii-box--${variant}`}>
      {title ? (
        <div className="ascii-box__header">
          <span className="ascii-box__corner">{'┌─'}</span>
          <span className="ascii-box__title">{` ${title} `}</span>
          <span className="ascii-box__line">{'─'.repeat(40)}</span>
          <span className="ascii-box__corner">{'┐'}</span>
        </div>
      ) : (
        <div className="ascii-box__header">
          <span className="ascii-box__border-top">{'┌' + '─'.repeat(60) + '┐'}</span>
        </div>
      )}
      <div className="ascii-box__content">{children}</div>
      <div className="ascii-box__footer">
        <span className="ascii-box__border-bottom">{'└' + '─'.repeat(60) + '┘'}</span>
      </div>
    </div>
  )
}
```

Create `web/src/components/ui/ASCIIBox.css`:
```css
.ascii-box {
  margin-bottom: var(--spacing-md);
}

.ascii-box__header, .ascii-box__footer {
  color: var(--border-color);
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
}

.ascii-box--highlight .ascii-box__header,
.ascii-box--highlight .ascii-box__footer {
  color: var(--accent-amber);
}

.ascii-box__title {
  color: var(--text-primary);
  font-weight: 500;
}

.ascii-box__content {
  padding: var(--spacing-sm) var(--spacing-md);
}
```

- [ ] **Step 2: Create OptionSelector (generic for risk/complexity/traffic)**

Create `web/src/components/ui/OptionSelector.tsx`:
```tsx
'use client'

import './OptionSelector.css'

interface Option {
  key: string
  label: string
  variance: number
  description: string
}

interface Props {
  options: Option[]
  value: string
  onChange: (value: string) => void
  label: string
}

export default function OptionSelector({ options, value, onChange, label }: Props) {
  const barWidth = 20
  const maxVariance = Math.max(...options.map(o => o.variance))

  return (
    <div className="option-selector" role="radiogroup" aria-label={label}>
      {options.map(option => {
        const filled = Math.round((option.variance / maxVariance) * barWidth)
        const empty = barWidth - filled
        const bar = '\u2588'.repeat(filled) + '\u2591'.repeat(empty)
        const isSelected = option.key === value

        return (
          <button
            key={option.key}
            className={`option-selector__item ${isSelected ? 'option-selector__item--selected' : ''}`}
            onClick={() => onChange(option.key)}
            role="radio"
            aria-checked={isSelected}
            title={option.description}
          >
            <span className="option-selector__label">{option.label.toUpperCase()}</span>
            <span className="option-selector__bar">[{bar}]</span>
            <span className="option-selector__variance">&plusmn;{Math.round(option.variance * 100)}%</span>
          </button>
        )
      })}
    </div>
  )
}
```

Create `web/src/components/ui/OptionSelector.css`:
```css
.option-selector {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.option-selector__item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: 2px var(--spacing-sm);
  border: none;
  text-transform: none;
  letter-spacing: 0;
  font-size: 12px;
  color: var(--text-dim);
  cursor: pointer;
  text-align: left;
  background: transparent;
}

.option-selector__item:hover {
  color: var(--text-secondary);
  background: transparent;
}

.option-selector__item--selected {
  color: var(--accent-amber);
}

.option-selector__item--selected:hover {
  color: var(--accent-amber);
  background: transparent;
}

.option-selector__label {
  width: 120px;
  flex-shrink: 0;
  font-size: 11px;
  letter-spacing: 1px;
}

.option-selector__bar {
  font-size: 12px;
}

.option-selector__variance {
  font-size: 11px;
  color: var(--text-secondary);
}

@media (max-width: 600px) {
  .option-selector__label {
    width: 80px;
    font-size: 10px;
  }
  .option-selector__bar {
    font-size: 10px;
  }
}
```

- [ ] **Step 3: Create QuoteCard**

Create `web/src/components/ui/QuoteCard.tsx` and `QuoteCard.css`:

QuoteCard.tsx:
```tsx
import './QuoteCard.css'

interface Props {
  label: string
  amount: string
  percentile: string
  description: string
  variant?: 'default' | 'recommended'
}

export default function QuoteCard({ label, amount, percentile, description, variant = 'default' }: Props) {
  return (
    <div className={`quote-card quote-card--${variant}`}>
      <div className="quote-card__header">
        {'┌─ '}{label}{' ─'.padEnd(25 - label.length, '─')}{'┐'}
      </div>
      <div className="quote-card__body">
        <div className="quote-card__amount">{amount}</div>
        <div className="quote-card__percentile">{percentile}</div>
        <div className="quote-card__desc">{description}</div>
      </div>
      <div className="quote-card__footer">
        {'└' + '─'.repeat(28) + '┘'}
      </div>
    </div>
  )
}
```

QuoteCard.css:
```css
.quote-card {
  font-size: 13px;
  margin-bottom: var(--spacing-sm);
}

.quote-card__header, .quote-card__footer {
  color: var(--border-color);
}

.quote-card--recommended .quote-card__header,
.quote-card--recommended .quote-card__footer {
  color: var(--accent-amber);
}

.quote-card__body {
  padding: var(--spacing-xs) var(--spacing-md);
}

.quote-card__amount {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
}

.quote-card--recommended .quote-card__amount {
  color: var(--accent-amber);
}

.quote-card__percentile {
  color: var(--text-secondary);
  font-size: 12px;
}

.quote-card__desc {
  color: var(--text-dim);
  font-size: 11px;
}
```

- [ ] **Step 4: Commit**

```bash
cd /Users/chris/Projects/contractors_app
git add web/src/components/ui/
git commit -m "feat: add UI components — ASCIIBox, OptionSelector, QuoteCard"
```

---

### Task 7: Region Context + Estimator Context

**Files:**
- Create: `web/src/context/RegionContext.tsx`
- Create: `web/src/context/EstimatorContext.tsx`

- [ ] **Step 1: Create RegionContext**

Create `web/src/context/RegionContext.tsx`:
```tsx
'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import type { AppRegionCode } from '@/models/types'
import { loadRegion, saveRegion } from '@/services/storage'

interface RegionContextValue {
  region: AppRegionCode
  setRegion: (region: AppRegionCode) => void
}

const RegionContext = createContext<RegionContextValue>({
  region: 'US',
  setRegion: () => {},
})

export function RegionProvider({ children }: { children: React.ReactNode }) {
  const [region, setRegionState] = useState<AppRegionCode>('US')
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setRegionState(loadRegion())
    setLoaded(true)
  }, [])

  const setRegion = (r: AppRegionCode) => {
    setRegionState(r)
    saveRegion(r)
  }

  if (!loaded) return null

  return (
    <RegionContext.Provider value={{ region, setRegion }}>
      {children}
    </RegionContext.Provider>
  )
}

export function useRegion() {
  return useContext(RegionContext)
}
```

- [ ] **Step 2: Create EstimatorContext**

Create `web/src/context/EstimatorContext.tsx`:
```tsx
'use client'

import { createContext, useContext, useState, useCallback } from 'react'
import type { Project, SimulationResult } from '@/models/types'

interface EstimatorContextValue {
  project: Project | null
  setProject: (project: Project) => void
  simulationResult: SimulationResult | null
  setSimulationResult: (result: SimulationResult) => void
  clear: () => void
}

const EstimatorContext = createContext<EstimatorContextValue>({
  project: null,
  setProject: () => {},
  simulationResult: null,
  setSimulationResult: () => {},
  clear: () => {},
})

export function EstimatorProvider({ children }: { children: React.ReactNode }) {
  const [project, setProject] = useState<Project | null>(null)
  const [simulationResult, setSimulationResult] = useState<SimulationResult | null>(null)

  const clear = useCallback(() => {
    setProject(null)
    setSimulationResult(null)
  }, [])

  return (
    <EstimatorContext.Provider value={{ project, setProject, simulationResult, setSimulationResult, clear }}>
      {children}
    </EstimatorContext.Provider>
  )
}

export function useEstimator() {
  return useContext(EstimatorContext)
}
```

- [ ] **Step 3: Wire contexts into layout**

Update `web/src/app/layout.tsx` — wrap body children in both providers:
```tsx
import type { Metadata } from 'next'
import { RegionProvider } from '@/context/RegionContext'
import { EstimatorProvider } from '@/context/EstimatorContext'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'lowriskquotes // contractor cost estimation',
  description: 'Monte Carlo cost projections for contractors. Stop guessing, start simulating.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <RegionProvider>
          <EstimatorProvider>
            <div className="app">
              <Nav />
              <main>{children}</main>
              <Footer />
            </div>
          </EstimatorProvider>
        </RegionProvider>
      </body>
    </html>
  )
}
```

- [ ] **Step 4: Commit**

```bash
cd /Users/chris/Projects/contractors_app
git add web/src/context/ web/src/app/layout.tsx
git commit -m "feat: add Region and Estimator context providers"
```

---

### Task 8: Landing Page

**Files:**
- Modify: `web/src/app/page.tsx`
- Create: `web/src/app/page.css`

- [ ] **Step 1: Build landing page**

Create `web/src/app/page.css`:
```css
.home__hero {
  margin-bottom: var(--spacing-lg);
}

.home__tagline {
  color: var(--text-secondary);
  font-size: 14px;
  letter-spacing: 1px;
  margin-top: var(--spacing-sm);
}

.home__subtitle {
  color: var(--text-dim);
  font-size: 12px;
  letter-spacing: 1px;
}

.home__steps {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.home__step {
  color: var(--text-primary);
  font-size: 13px;
}

.home__step-num {
  color: var(--accent-amber);
  margin-right: var(--spacing-sm);
}

.home__sample {
  color: var(--text-secondary);
  font-size: 11px;
  line-height: 1.4;
  white-space: pre;
}

.home__recent {
  margin-bottom: var(--spacing-md);
}

.home__recent-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-xs) 0;
  font-size: 12px;
  color: var(--text-secondary);
}

.home__recent-name {
  color: var(--accent-amber);
  cursor: pointer;
}

.home__recent-delete {
  color: var(--text-dim);
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font-size: 12px;
}

.home__recent-delete:hover {
  color: var(--accent-red);
  background: none;
}

.home__cta {
  text-align: center;
  margin: var(--spacing-xl) 0;
}

.home__cta-button {
  display: inline-block;
  color: var(--accent-amber);
  border: 1px solid var(--accent-amber);
  padding: var(--spacing-sm) var(--spacing-lg);
  font-weight: 700;
  letter-spacing: 2px;
  text-decoration: none;
  transition: background 0.15s, color 0.15s;
}

.home__cta-button:hover {
  background: var(--accent-amber);
  color: var(--bg-primary);
  text-decoration: none;
}

.home__seo {
  margin-top: var(--spacing-lg);
  color: var(--text-dim);
  font-size: 12px;
  line-height: 1.6;
}
```

Replace `web/src/app/page.tsx` with the full landing page — includes ASCII logo, how-it-works steps, example output, recent estimates from localStorage, and CTA. Reference the whatbreaks HomePage at `../carstat/client/src/pages/HomePage.jsx` for the structure and tone.

The page is a server component for SEO, but the "recent estimates" section needs to be a separate client component that reads localStorage.

- [ ] **Step 2: Create RecentEstimates client component**

Create `web/src/components/home/RecentEstimates.tsx`:
```tsx
'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import type { Project } from '@/models/types'
import { loadProjects, deleteProject } from '@/services/storage'
import { useEstimator } from '@/context/EstimatorContext'
import { useRegion } from '@/context/RegionContext'
import { formatCurrency } from '@/services/currency'
import ASCIIBox from '@/components/ui/ASCIIBox'

export default function RecentEstimates() {
  const [projects, setProjects] = useState<Project[]>([])
  const { setProject } = useEstimator()
  const { region } = useRegion()
  const router = useRouter()

  useEffect(() => {
    setProjects(loadProjects().sort((a, b) =>
      new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    ))
  }, [])

  if (projects.length === 0) return null

  const handleLoad = (project: Project) => {
    setProject(project)
    router.push('/estimate')
  }

  const handleDelete = (id: string) => {
    deleteProject(id)
    setProjects(prev => prev.filter(p => p.id !== id))
  }

  return (
    <ASCIIBox title="Recent estimates">
      {projects.slice(0, 5).map(p => (
        <div key={p.id} className="home__recent-item">
          <span className="home__recent-name" onClick={() => handleLoad(p)}>
            {'> '}{p.name}
          </span>
          <span>{new Date(p.updatedAt).toLocaleDateString()}</span>
          <button className="home__recent-delete" onClick={() => handleDelete(p.id)}>[x]</button>
        </div>
      ))}
    </ASCIIBox>
  )
}
```

- [ ] **Step 3: Commit**

```bash
cd /Users/chris/Projects/contractors_app
git add web/src/app/page.tsx web/src/app/page.css web/src/components/home/
git commit -m "feat: build landing page with ASCII logo and recent estimates"
```

---

### Task 9: Estimator Page

**Files:**
- Create: `web/src/app/estimate/page.tsx`
- Create: `web/src/app/estimate/page.css`
- Create: `web/src/components/estimator/ProjectDetails.tsx`
- Create: `web/src/components/estimator/DurationSection.tsx`
- Create: `web/src/components/estimator/WorkersSection.tsx`
- Create: `web/src/components/estimator/TravelSection.tsx`
- Create: `web/src/components/estimator/LineItemsSection.tsx`
- Create: `web/src/components/estimator/LineItemRow.tsx`
- Create: `web/src/components/estimator/Summary.tsx`
- Create: `web/src/components/estimator/estimator.css`

This is the largest task. Each component is a collapsible section in a single-page form.

- [ ] **Step 1: Create estimator page shell**

Create `web/src/app/estimate/page.tsx` — client component that:
1. Initialises a project from EstimatorContext (or creates new)
2. Renders each section component, passing project state + updater
3. Shows `[RUN SIMULATION]` button at bottom (disabled if no line items)
4. On simulation: calls `runSimulation()`, stores result in context, navigates to `/results`

- [ ] **Step 2: Create ProjectDetails component**

Fields: project name, client name, profit margin (as percentage input). All wrapped in ASCIIBox with title "Project details".

- [ ] **Step 3: Create DurationSection component**

Fields: estimated days, hourly rate, hours/day, complexity selector (OptionSelector). Shows computed base labor cost. Wrapped in ASCIIBox "Job duration".

- [ ] **Step 4: Create WorkersSection component**

List of workers with add/remove. Each worker: name, hourly rate, hours/day, days on job. Shows daily cost per worker. Wrapped in ASCIIBox "Workers".

- [ ] **Step 5: Create TravelSection component**

Fields: travel time (minutes), return trip toggle, site visits (0=auto), traffic selector (OptionSelector), distance, mileage rate. Shows computed base travel cost. Wrapped in ASCIIBox "Travel".

- [ ] **Step 6: Create LineItemsSection + LineItemRow components**

Table with box-drawing borders. Each row: name input, cost input, category dropdown, risk selector (compact). Add/remove buttons. Empty state: "No items yet — add your first cost item". Wrapped in ASCIIBox "Line items".

- [ ] **Step 7: Create Summary component**

Read-only display: materials total, duration cost, travel cost, subtotal, profit amount, total. Wrapped in ASCIIBox "Summary".

- [ ] **Step 8: Create estimator.css**

Shared styles for estimator components — input groups, field labels, section spacing. Terminal aesthetic: no rounded corners, monospace, amber focus.

- [ ] **Step 9: Verify estimator page works**

```bash
cd /Users/chris/Projects/contractors_app/web
npm run dev
```

Navigate to http://localhost:3000/estimate — verify all sections render, inputs work, simulation runs.

- [ ] **Step 10: Commit**

```bash
cd /Users/chris/Projects/contractors_app
git add web/src/app/estimate/ web/src/components/estimator/
git commit -m "feat: build estimator page with all input sections"
```

---

## Chunk 3: Results Page + PDF Export

### Task 10: ASCII Histogram + Results Components

**Files:**
- Create: `web/src/components/results/ASCIIHistogram.tsx`
- Create: `web/src/components/results/ASCIIHistogram.css`
- Create: `web/src/components/results/CostBreakdown.tsx`
- Create: `web/src/components/results/SimulationStats.tsx`

- [ ] **Step 1: Create ASCIIHistogram**

Renders the bell curve using block characters. Takes `simulations`, `min`, `max`, and percentile values as props. Uses `computeHistogram()` from the engine. Colours buckets: green below P50, amber P50-P80, red above P80.

```tsx
'use client'

import { computeHistogram } from '@/engine/monteCarlo'
import './ASCIIHistogram.css'

interface Props {
  simulations: number[]
  min: number
  max: number
  percentile50: number
  percentile80: number
  formatValue: (v: number) => string
}

export default function ASCIIHistogram({ simulations, min, max, percentile50, percentile80, formatValue }: Props) {
  const buckets = computeHistogram(simulations, min, max)
  const maxCount = Math.max(...buckets.map(b => b.count))
  const maxHeight = 12

  return (
    <div className="histogram">
      <div className="histogram__chart">
        {buckets.map((bucket, i) => {
          const height = maxCount > 0 ? Math.round((bucket.count / maxCount) * maxHeight) : 0
          const mid = (bucket.rangeStart + bucket.rangeEnd) / 2
          let colorClass = 'histogram__bar--green'
          if (mid >= percentile80) colorClass = 'histogram__bar--red'
          else if (mid >= percentile50) colorClass = 'histogram__bar--amber'

          return (
            <div key={i} className="histogram__column">
              <div className={`histogram__bar ${colorClass}`}>
                {Array.from({ length: height }, (_, j) => (
                  <span key={j} className="histogram__block">{'\u2588'}</span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
      <div className="histogram__axis">{'─'.repeat(62)}</div>
      <div className="histogram__labels">
        <span>{formatValue(min)}</span>
        <span>P50: {formatValue(percentile50)}</span>
        <span>P80: {formatValue(percentile80)}</span>
        <span>{formatValue(max)}</span>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Create CostBreakdown**

Box-drawing table showing material/duration/travel costs at P50 and P80. Uses ASCIIBox.

- [ ] **Step 3: Create SimulationStats**

Shows iterations run, convergence status, confidence level. Small text below results.

- [ ] **Step 4: Commit**

```bash
cd /Users/chris/Projects/contractors_app
git add web/src/components/results/
git commit -m "feat: add results components — histogram, cost breakdown, stats"
```

---

### Task 11: Results Page

**Files:**
- Create: `web/src/app/results/page.tsx`
- Create: `web/src/app/results/page.css`

- [ ] **Step 1: Build results page**

Client component that:
1. Reads project + simulationResult from EstimatorContext
2. If no result, redirects to `/estimate`
3. Shows recommended quote (P80) prominently
4. ASCIIHistogram of the simulation
5. Three QuoteCards: Conservative (P50), Recommended (P80), Safe (P90)
6. CostBreakdown component
7. Action buttons: `[SAVE]` `[CUSTOMER PDF]` `[DETAILED PDF]` `[NEW ESTIMATE]`
8. SimulationStats at bottom

- [ ] **Step 2: Wire save action**

Save button calls `saveProject()` from storage service.

- [ ] **Step 3: Verify end-to-end flow**

```bash
cd /Users/chris/Projects/contractors_app/web
npm run dev
```

Full flow: landing → estimate → fill in data → run simulation → results page shows histogram + percentiles.

- [ ] **Step 4: Commit**

```bash
cd /Users/chris/Projects/contractors_app
git add web/src/app/results/
git commit -m "feat: build results page with histogram and quote cards"
```

---

### Task 12: PDF Export

**Files:**
- Create: `web/src/services/pdf.ts`

- [ ] **Step 1: Implement PDF generation**

Create `web/src/services/pdf.ts` using jsPDF. Two functions:

`generateCustomerPDF(project, quoteAmount, region)` — clean client-facing quote:
- Header with "LOWRISKQUOTES" and date
- Project name, client name
- Cost breakdown by category (materials, labor, travel) with profit folded in proportionally
- Job details (duration, site visits)
- Total quote amount
- Terms line

`generateDetailedPDF(project, result, region)` — contractor's internal analysis:
- Full line item list with categories and risk levels
- Cost summary with separate profit line
- Percentile breakdown (P50/P80/P90/P95)
- Convergence status
- 80% confidence range

Both return a Blob for download.

Reference: `ios/RiskEstimator/RiskEstimator/Services/PDFService.swift`

- [ ] **Step 2: Wire PDF buttons on results page**

Add download handlers that call the PDF functions and trigger browser download.

- [ ] **Step 3: Test PDF export**

Run the app, create an estimate, export both PDFs, verify they open correctly.

- [ ] **Step 4: Commit**

```bash
cd /Users/chris/Projects/contractors_app
git add web/src/services/pdf.ts web/src/app/results/
git commit -m "feat: add client-side PDF export — customer and detailed quotes"
```

---

## Chunk 4: Content Pages + SEO

### Task 13: About Page

**Files:**
- Create: `web/src/app/about/page.tsx`

- [ ] **Step 1: Build about page**

Static page explaining LowRiskQuotes, Monte Carlo methodology (in plain language), privacy (all data stays in browser). Links to guides. Uses ASCIIBox components. Terminal aesthetic.

- [ ] **Step 2: Commit**

```bash
cd /Users/chris/Projects/contractors_app
git add web/src/app/about/
git commit -m "feat: add about page"
```

---

### Task 14: MiniEstimator Component

**Files:**
- Create: `web/src/components/guides/MiniEstimator.tsx`
- Create: `web/src/components/guides/MiniEstimator.css`

- [ ] **Step 1: Build MiniEstimator**

Simplified estimator for embedding in articles:
- Props: `initialItems` (pre-filled line items), `showDuration`, `showTravel`
- Compact form: 3-5 line items, optional duration/travel
- `[SIMULATE]` button runs Monte Carlo inline
- Shows compact results below: P50/P80/P90 as a mini table, small histogram
- All client-side, self-contained

- [ ] **Step 2: Commit**

```bash
cd /Users/chris/Projects/contractors_app
git add web/src/components/guides/
git commit -m "feat: add MiniEstimator component for article embeds"
```

---

### Task 15: Guide Pages

**Files:**
- Create: `web/src/app/guides/how-to-quote-a-job/page.tsx`
- Create: `web/src/app/guides/bathroom-renovation-costs/page.tsx`
- Create: `web/src/app/guides/how-much-contingency/page.tsx`
- Create: `web/src/app/guides/pricing-guide-for-contractors/page.tsx`
- Create: `web/src/app/guides/kitchen-renovation-costs/page.tsx`
- Create: `web/src/app/guides/guides.css`

Each guide is a statically generated page with long-form content and embedded MiniEstimator components. Content should be written in the terminal aesthetic tone — direct, no fluff, data-driven.

- [ ] **Step 1: Create shared guide styles**

```css
/* guides.css */
.guide {
  max-width: 700px;
}

.guide h1 {
  color: var(--accent-amber);
  font-size: 20px;
  font-weight: 700;
  margin-bottom: var(--spacing-md);
}

.guide h2 {
  color: var(--text-primary);
  font-size: 16px;
  font-weight: 500;
  margin: var(--spacing-xl) 0 var(--spacing-md);
  border-bottom: 1px solid var(--border-color);
  padding-bottom: var(--spacing-xs);
}

.guide p {
  color: var(--text-secondary);
  font-size: 13px;
  line-height: 1.7;
  margin-bottom: var(--spacing-md);
}

.guide ul, .guide ol {
  color: var(--text-secondary);
  font-size: 13px;
  padding-left: var(--spacing-lg);
  margin-bottom: var(--spacing-md);
}

.guide li {
  margin-bottom: var(--spacing-xs);
}

.guide__ad-slot {
  margin: var(--spacing-xl) 0;
  text-align: center;
  min-height: 90px;
}

.guide__cta {
  text-align: center;
  margin: var(--spacing-xl) 0;
}
```

- [ ] **Step 2: Build "How to Quote a Job" (flagship guide)**

The extended article as described in the spec. Sections:
1. Why contractors underquote
2. Understanding the 5 risk tiers (with MiniEstimator showing single item at different levels)
3. Worked example: bathroom renovation (MiniEstimator pre-filled)
4. Reading the results
5. Common mistakes
6. CTA to full estimator

Include `<meta>` tags for SEO. AdSense placeholder divs between major sections.

- [ ] **Step 3: Build bathroom renovation guide**

Shorter guide focused on bathroom costs. Pre-filled MiniEstimator with typical bathroom items (tiles, fixtures, plumbing, etc).

- [ ] **Step 4: Build contingency guide**

Explains why flat percentages are crude, how Monte Carlo works better. MiniEstimator comparing a "certain" item vs "wild guess" item.

- [ ] **Step 5: Build pricing guide**

Overview of pricing strategies. Generic MiniEstimator.

- [ ] **Step 6: Build kitchen renovation guide**

Kitchen-specific. Pre-filled MiniEstimator with kitchen items.

- [ ] **Step 7: Add metadata for each guide**

Each guide page exports `metadata` with title, description, and OpenGraph tags for SEO.

- [ ] **Step 8: Commit**

```bash
cd /Users/chris/Projects/contractors_app
git add web/src/app/guides/
git commit -m "feat: add 5 SEO content guides with embedded mini-estimators"
```

---

### Task 16: AdSense Integration

**Files:**
- Create: `web/src/components/layout/AdSlot.tsx`
- Modify: guide pages to include AdSlot components

- [ ] **Step 1: Create AdSlot component**

```tsx
'use client'

export default function AdSlot({ className = '' }: { className?: string }) {
  return (
    <div className={`guide__ad-slot ${className}`}>
      {/* Google AdSense will be configured with actual ad unit ID */}
      {/* <ins className="adsbygoogle" data-ad-client="ca-pub-XXXX" data-ad-slot="XXXX" /> */}
    </div>
  )
}
```

Placeholder for now — actual AdSense code added when the Google account is set up.

- [ ] **Step 2: Add AdSlot to guide pages**

Insert between major article sections on each guide page. No ads on `/estimate` or `/results`.

- [ ] **Step 3: Commit**

```bash
cd /Users/chris/Projects/contractors_app
git add web/src/components/layout/AdSlot.tsx web/src/app/guides/
git commit -m "feat: add AdSense placeholder slots to guide pages"
```

---

## Chunk 5: Polish + Deploy

### Task 17: Next.js Config + SEO

**Files:**
- Modify: `web/next.config.js`
- Create: `web/src/app/sitemap.ts`
- Create: `web/src/app/robots.ts`

- [ ] **Step 1: Configure Next.js**

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
}

module.exports = nextConfig
```

Note: `output: 'export'` generates static HTML for all pages — deployable to any static host including Vercel.

- [ ] **Step 2: Create sitemap**

```typescript
// web/src/app/sitemap.ts
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lowriskquotes.com' // Update with actual domain

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/estimate`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/guides/how-to-quote-a-job`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/guides/bathroom-renovation-costs`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/guides/how-much-contingency`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/guides/pricing-guide-for-contractors`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/guides/kitchen-renovation-costs`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]
}
```

- [ ] **Step 3: Create robots.txt**

```typescript
// web/src/app/robots.ts
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://lowriskquotes.com/sitemap.xml',
  }
}
```

- [ ] **Step 4: Commit**

```bash
cd /Users/chris/Projects/contractors_app
git add web/next.config.js web/src/app/sitemap.ts web/src/app/robots.ts
git commit -m "feat: add SEO config — sitemap, robots.txt, static export"
```

---

### Task 18: Build Verification + Deploy

- [ ] **Step 1: Run production build**

```bash
cd /Users/chris/Projects/contractors_app/web
npm run build
```

Expected: Successful static export to `out/` directory.

- [ ] **Step 2: Test static output locally**

```bash
cd /Users/chris/Projects/contractors_app/web
npx serve out
```

Navigate through all pages, test estimator flow, verify PDF export works.

- [ ] **Step 3: Run tests**

```bash
cd /Users/chris/Projects/contractors_app/web
npx jest
```

All engine tests should pass.

- [ ] **Step 4: Push to GitHub**

```bash
cd /Users/chris/Projects/contractors_app
git push origin main
```

- [ ] **Step 5: Deploy to Vercel**

```bash
cd /Users/chris/Projects/contractors_app/web
npx vercel --prod
```

Or connect the GitHub repo to Vercel via the dashboard for automatic deploys.

- [ ] **Step 6: Verify deployed site**

Check all pages load, estimator works, PDFs generate, guides render with proper meta tags.

- [ ] **Step 7: Commit any fixes**

```bash
cd /Users/chris/Projects/contractors_app
git add -A
git commit -m "fix: deployment fixes"
git push origin main
```
