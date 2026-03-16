# LowRiskQuotes — Web App Design Spec

## Overview

LowRiskQuotes is a web port of the EstiMate contractor cost estimation app. It uses Monte Carlo simulation to give contractors probabilistic risk analysis for job quotes. The web version targets search traffic via SEO content pages, monetised with Google AdSense.

The visual identity follows the retro terminal aesthetic established in the whatbreaks/carstat project (`../carstat/`): dark background, monospace typography, ASCII box-drawing UI, amber accent colour.

## Problem

The native iOS/Android app got zero App Store impressions. A web app with SEO content pages solves the discovery problem by targeting contractors searching Google for quoting advice.

## Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | Next.js 14 (App Router) | SSG for SEO indexing; still React |
| Rendering | SSG for content pages, client-side for tool pages | Landing + guides pre-rendered for SEO; `/estimate` and `/results` are client components |
| Styling | Plain CSS + CSS variables | Matches whatbreaks, no Tailwind |
| Font | JetBrains Mono | Monospace throughout |
| PDF | jsPDF | Client-side generation |
| Ads | Google AdSense | Revenue on content pages |
| Hosting | Vercel (free tier) | Zero-config deploy from GitHub |
| Storage | localStorage | Offline-first, no backend |

## Colour Palette

```
--bg-primary:    #0a0a0a    (background)
--bg-secondary:  #111111    (input fields, cards)
--bg-tertiary:   #1a1a1a    (hover states)
--text-primary:  #e0e0e0    (body text)
--text-secondary:#999999    (labels, secondary)
--text-dim:      #555555    (disabled, hints)
--accent-amber:  #f59e0b    (brand, CTAs, links)
--accent-red:    #dc2626    (high risk, warnings)
--accent-green:  #22c55e    (low risk, good)
--accent-blue:   #3b82f6    (info, medium risk)
--border-color:  #333333    (borders)
--border-bright: #555555    (focus states)
```

## Pages

### Tool Pages

#### `/` — Landing Page
- ASCII art "LOWRISKQUOTES" logo (block characters)
- Tagline: `stop guessing // start simulating`
- Subtitle: `monte carlo cost projections for contractors`
- ASCIIBox: "How it works" — 3 steps
- ASCIIBox: "Example output" — sample result with ASCII histogram and risk bars
- Recent estimates list (if any saved in localStorage) with load/delete
- `[START ESTIMATE]` CTA button
- Brief intro paragraph (SEO)

#### `/estimate` — Estimator (client component)
The main tool. Single scrollable page with collapsible sections. State managed via React context (`EstimatorContext`). On `[RUN SIMULATION]`, results are stored in context and user is navigated to `/results`. If no line items exist, the button is disabled with a hint.

1. **Project details** — name, client name, profit margin
2. **Job duration** — estimated days, hourly rate, hours/day, complexity slider
3. **Workers** — add extra workers with rates
4. **Travel** — travel time, return trip toggle, site visits, traffic slider, mileage
5. **Line items** — add/edit/delete with category and risk level
6. **Summary** — totals by category, subtotal, profit
7. **`[RUN SIMULATION]`** button

All inputs styled as terminal: monospace, dark background, amber focus borders. Risk/complexity/traffic selectors rendered as ASCII bar selectors.

#### `/results` — Results (client component)
Reads project + simulation result from `EstimatorContext`. If context is empty (direct navigation), redirects to `/estimate`. Shown after simulation completes:

1. **Recommended quote** (P80) — large, prominent
2. **ASCII histogram** — bell curve rendered with block characters, colour-coded zones
3. **Percentile cards** — P50 (conservative), P80 (recommended), P90 (safe) with plain-English labels
4. **Cost breakdown** — materials/duration/travel at P50 and P80
5. **Actions** — save estimate, export customer PDF, export detailed PDF, new estimate
6. **Simulation stats** — iterations run, convergence status, confidence level

### SEO Content Pages

Each article is statically generated, long-form, and includes an embedded mini-estimator component. All share the same terminal aesthetic.

#### `/guides/how-to-quote-a-job` — Extended Guide
The flagship content piece. Structured as a step-by-step walkthrough:

1. **Why contractors underquote** — optimism bias, competitive pressure, single-point estimates
2. **Understanding uncertainty** — the 5 risk tiers explained with real examples
   - Embedded: mini-estimator showing a single line item at different risk levels
3. **Worked example: bathroom renovation** — line-by-line walkthrough
   - Materials: tiles (low risk), fixtures (medium), custom glass (high)
   - Duration: 5 days, moderate complexity
   - Travel: 30 min urban commute
   - Embedded: pre-filled mini-estimator readers can modify
4. **Reading the results** — what the bell curve means, why P80 is the sweet spot
5. **Common mistakes** — putting everything as "medium", forgetting travel, underestimating duration
6. **Your turn** — CTA to full estimator

#### `/guides/bathroom-renovation-costs`
- Typical bathroom scope and cost ranges
- Worked example with realistic UK/US/AU figures
- Risk factors specific to bathrooms (water damage discovery, tile breakage)
- Embedded mini-estimator pre-filled for a bathroom job

#### `/guides/how-much-contingency`
- Why flat percentage contingency (10%, 15%) is crude
- How Monte Carlo does it better — simulate, don't guess
- Visual comparison: flat contingency vs probabilistic range
- Embedded mini-estimator demonstrating the difference

#### `/guides/pricing-guide-for-contractors`
- Overview of pricing strategies (cost-plus, value-based, competitive)
- How to factor in risk without overpricing
- Profit margin considerations
- Embedded mini-estimator for a generic job

#### `/guides/kitchen-renovation-costs`
- Similar structure to bathroom guide
- Kitchen-specific risk factors (appliance lead times, worktop templating)
- Worked example
- Embedded mini-estimator pre-filled for a kitchen job

## Components

### Layout Components

**`ASCIILogo`** — Block-character "LOWRISKQUOTES" rendered in `<pre>` tag. Responsive: full logo on desktop, abbreviated on mobile.

**`ASCIIBox`** — Container using box-drawing characters. Props: `title`, `variant`. Matches whatbreaks implementation.

**`Nav`** — Simple navigation. Logo (small) + links: `[ESTIMATE]` `[GUIDES]` `[ABOUT]`. Region selector as small dropdown on the right (shows flag + currency code, e.g. `🇬🇧 GBP`). Amber on hover.

**`Footer`** — Minimal. Copyright, link to about page.

#### `/about` — About Page
Brief explanation of LowRiskQuotes, the Monte Carlo methodology, and that no data leaves the browser. Links to guides.

### Tool Components

**`RiskSelector`** — Five-option selector rendered as ASCII bar. Selected level highlighted in amber with filled blocks showing variance magnitude.
```
CERTAIN  [██░░░░░░░░░░░░░░░░░░] ±2%
LOW      [████░░░░░░░░░░░░░░░░] ±8%
MEDIUM   [██████░░░░░░░░░░░░░░] ±15%  ← selected
HIGH     [██████████░░░░░░░░░░] ±25%
WILD     [████████████████░░░░] ±40%
```

**`ComplexitySelector`** — Same pattern for duration complexity (Routine/Moderate/Complex/Unknown).

**`TrafficSelector`** — Same pattern for traffic variability.

**`LineItemRow`** — Editable row in a box-drawing table. Fields: name, cost, category dropdown, risk selector.

**`ASCIIHistogram`** — Bell curve rendered with block characters. 20 buckets. Colour-coded: green (P10-P50), amber (P50-P80), red (P80+). Percentile markers shown.
```
                    ▓▓
                  ▓▓▓▓▓▓
                ▓▓▓▓▓▓▓▓▓▓
              ▓▓▓▓▓▓▓▓▓▓▓▓▓▓
            ▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░
          ▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░
        ▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░
      ▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░
────┴─────────┴──────────────┴─────────
   P10       P50            P80
```

**`QuoteCard`** — Shows a percentile value with label and interpretation.
```
┌─ recommended ─────────┐
│ £12,450               │
│ 80th percentile       │
│ 80% chance under this │
└───────────────────────┘
```

**`CostBreakdown`** — Table showing material/duration/travel costs at P50 and P80.

**`MiniEstimator`** — Simplified estimator for embedding in articles. Fewer fields (3-5 line items, no workers section, simplified travel). Runs simulation inline and shows compact results. Can be pre-filled with example data via props.

### PDF Components

**Customer PDF** — Clean quote for clients. Cost breakdown by category with profit folded in. No Monte Carlo jargon. Generated client-side with jsPDF.

**Detailed PDF** — Full analysis with percentiles, histogram description, confidence levels. For the contractor's own records.

## Data Models

Ported directly from native app. All TypeScript interfaces.

```typescript
interface Project {
  id: string
  name: string
  clientName: string
  createdAt: string
  updatedAt: string
  profitMargin: number          // default 0.15
  lineItems: LineItem[]
  workers: Worker[]
  estimatedDays: number
  complexityLevel: ComplexityLevel
  hourlyLaborRate: number
  hoursPerDay: number
  travelTimeMinutes: number
  trafficVariability: TrafficVariability
  numberOfSiteVisits: number    // 0 = auto from duration
  includeReturnTrip: boolean
  mileageRate: number
  distance: number
}

interface LineItem {
  id: string
  name: string
  estimatedCost: number
  category: 'material' | 'labor' | 'subcontractor' | 'other'
  riskLevel: RiskLevel
}

interface Worker {
  id: string
  name: string
  hourlyRate: number            // default 25.0
  hoursPerDay: number           // default 8.0
  daysOnJob: number | null      // null = full project duration
  // Computed: totalCost(projectDays) = hourlyRate * hoursPerDay * (daysOnJob ?? projectDays)
}

type RiskLevel = 'certain' | 'low' | 'medium' | 'high' | 'wildGuess'
type ComplexityLevel = 'routine' | 'moderate' | 'complex' | 'unknownScope'
type TrafficVariability = 'predictable' | 'variable' | 'highVariability'

interface SimulationResult {
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
  // Computed from simulations array:
  // histogram — derived into 20 HistogramBuckets
  // confidenceLevel — derived from coefficient of variation
  // recommendedQuote — alias for percentile80
}

interface HistogramBucket {
  rangeStart: number
  rangeEnd: number
  count: number
  frequency: number            // count / total iterations
}
```

## Monte Carlo Engine

Direct port of the iOS engine to TypeScript. Key parameters:

| Parameter | Value |
|-----------|-------|
| Min iterations | 1,000 |
| Max iterations | 10,000 |
| Convergence batch | 500 |
| Convergence threshold | 1% relative change in P80 |
| Skew (negative z) | 0.7 |
| Skew (positive z) | 1.3 |
| Histogram buckets | 20 |
| Duration min bound | 90% of estimate |
| Duration max bound | estimate * (1 + 3 * variance) |
| Travel min bound | 50% of estimate |
| Travel max bound | estimate * (1 + 2 * variance) |

Uses Box-Muller transform for normal distribution with skew toward overages.

## Regionalisation

Carried over from native app:

| Region | Currency | Distance | Mileage Rate |
|--------|----------|----------|--------------|
| US | USD ($) | Miles | $0.67/mi |
| UK | GBP (£) | Miles | £0.45/mi |
| Canada | CAD ($) | Kilometres | $0.70/km |
| Australia | AUD ($) | Kilometres | $0.85/km |
| New Zealand | NZD ($) | Kilometres | $0.95/km |

Auto-detected from browser locale, manually overridable. Stored in localStorage.

## Storage

- Projects saved to `localStorage` as JSON array under key `lowriskquotes_projects`
- Region preference in `localStorage` under `lowriskquotes_region`
- No cloud sync, no accounts
- Import/export as JSON file for backup (stretch goal, not MVP)

## AdSense Integration

- Ad slots on content pages (between article sections)
- No ads on the estimator or results pages (don't interrupt the tool)
- Responsive ad units that fit the terminal aesthetic (dark background)

## Project Structure

```
contractors_app/web/
├── next.config.js
├── package.json
├── public/
│   └── fonts/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # root layout, global CSS
│   │   ├── page.tsx                # landing page
│   │   ├── estimate/
│   │   │   └── page.tsx            # estimator
│   │   ├── results/
│   │   │   └── page.tsx            # results display
│   │   ├── about/
│   │   │   └── page.tsx            # about page
│   │   └── guides/
│   │       ├── how-to-quote-a-job/
│   │       │   └── page.tsx
│   │       ├── bathroom-renovation-costs/
│   │       │   └── page.tsx
│   │       ├── how-much-contingency/
│   │       │   └── page.tsx
│   │       ├── pricing-guide-for-contractors/
│   │       │   └── page.tsx
│   │       └── kitchen-renovation-costs/
│   │           └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── ASCIILogo.tsx
│   │   │   ├── Nav.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui/
│   │   │   ├── ASCIIBox.tsx
│   │   │   ├── RiskSelector.tsx
│   │   │   ├── ComplexitySelector.tsx
│   │   │   ├── TrafficSelector.tsx
│   │   │   └── QuoteCard.tsx
│   │   ├── estimator/
│   │   │   ├── ProjectDetails.tsx
│   │   │   ├── DurationSection.tsx
│   │   │   ├── WorkersSection.tsx
│   │   │   ├── TravelSection.tsx
│   │   │   ├── LineItemsSection.tsx
│   │   │   ├── LineItemRow.tsx
│   │   │   └── Summary.tsx
│   │   ├── results/
│   │   │   ├── ASCIIHistogram.tsx
│   │   │   ├── CostBreakdown.tsx
│   │   │   └── SimulationStats.tsx
│   │   └── guides/
│   │       └── MiniEstimator.tsx
│   ├── context/
│   │   └── EstimatorContext.tsx     # React context for project + results state
│   ├── engine/
│   │   └── monteCarlo.ts           # simulation engine
│   ├── models/
│   │   └── types.ts                # TypeScript interfaces
│   ├── services/
│   │   ├── storage.ts              # localStorage wrapper
│   │   ├── pdf.ts                  # jsPDF generation
│   │   └── currency.ts             # formatting + region
│   └── styles/
│       ├── variables.css
│       └── globals.css
```

## Not in MVP

- Accounts / authentication
- Cloud sync
- Payment / premium tier
- Project templates
- Photo attachments
- Integration with accounting software
- Mobile app deep links
