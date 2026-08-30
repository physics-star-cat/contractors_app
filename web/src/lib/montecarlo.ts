/**
 * Monte Carlo engines behind /api/simulate, /api/drawdown and /api/mcp.
 * Deterministic when a seed is supplied (mulberry32 PRNG).
 */

export const MAX_ITERATIONS = 20000
export const DEFAULT_ITERATIONS = 5000

function mulberry32(seed: number) {
  let a = seed >>> 0
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function percentile(sorted: number[], p: number): number {
  const idx = (sorted.length - 1) * p
  const lo = Math.floor(idx)
  const hi = Math.ceil(idx)
  const frac = idx - lo
  return sorted[lo] * (1 - frac) + sorted[hi] * frac
}

const round2 = (x: number) => Math.round(x * 100) / 100

/** Sample a triangular distribution given min/mode/max. */
function triangular(rand: () => number, low: number, likely: number, high: number): number {
  const u = rand()
  const fc = (likely - low) / (high - low)
  if (u < fc) return low + Math.sqrt(u * (high - low) * (likely - low))
  return high - Math.sqrt((1 - u) * (high - low) * (high - likely))
}

export interface EstimateItem {
  name?: string
  low: number
  likely: number
  high: number
}

export interface EstimateResult {
  iterations: number
  total: { mean: number; p10: number; p50: number; p80: number; p90: number }
  items: { name: string; p50: number; p80: number }[]
}

export function simulateEstimate(
  items: EstimateItem[],
  iterations: number = DEFAULT_ITERATIONS,
  seed?: number,
): EstimateResult {
  if (!items.length) throw new Error('items must be a non-empty array')
  for (const it of items) {
    if (![it.low, it.likely, it.high].every(Number.isFinite))
      throw new Error('each item needs numeric low, likely, high')
    if (!(it.low <= it.likely && it.likely <= it.high))
      throw new Error(`item "${it.name ?? '?'}" must satisfy low <= likely <= high`)
  }
  const n = Math.min(Math.max(Math.floor(iterations) || DEFAULT_ITERATIONS, 100), MAX_ITERATIONS)
  const rand = mulberry32(seed ?? Math.floor(Math.random() * 2 ** 31))

  const totals = new Array<number>(n)
  const perItem = items.map(() => new Array<number>(n))
  for (let i = 0; i < n; i++) {
    let total = 0
    for (let j = 0; j < items.length; j++) {
      const it = items[j]
      const v = it.low === it.high ? it.low : triangular(rand, it.low, it.likely, it.high)
      perItem[j][i] = v
      total += v
    }
    totals[i] = total
  }
  totals.sort((a, b) => a - b)
  const mean = totals.reduce((s, x) => s + x, 0) / n
  return {
    iterations: n,
    total: {
      mean: round2(mean),
      p10: round2(percentile(totals, 0.1)),
      p50: round2(percentile(totals, 0.5)),
      p80: round2(percentile(totals, 0.8)),
      p90: round2(percentile(totals, 0.9)),
    },
    items: items.map((it, j) => {
      const s = perItem[j].sort((a, b) => a - b)
      return {
        name: it.name ?? `item ${j + 1}`,
        p50: round2(percentile(s, 0.5)),
        p80: round2(percentile(s, 0.8)),
      }
    }),
  }
}

/** Documented, fixed capital-market assumptions (annual, real i.e. after inflation). */
export const DRAWDOWN_ASSUMPTIONS = {
  equityRealReturnMean: 0.05,
  equityRealReturnStdev: 0.17,
  bondRealReturnMean: 0.015,
  bondRealReturnStdev: 0.06,
  model:
    'Annual steps. Spending withdrawn at the start of each year, then the remainder grows by a ' +
    'portfolio return drawn from lognormal real (inflation-adjusted) distributions. All figures in ' +
    "today's money.",
} as const

export interface DrawdownParams {
  portfolio: number
  annualSpend: number
  years: number
  equityPct: number // 0..1
  iterations?: number
  seed?: number
}

export interface DrawdownResult {
  iterations: number
  successRate: number
  ruinProbability: number
  medianRuinYear: number | null
  endBalance: { p10: number; p50: number; p90: number }
  assumptions: typeof DRAWDOWN_ASSUMPTIONS
}

function lognormalDraw(rand: () => number, mean: number, sd: number): number {
  // Box-Muller normal, applied to log(1+r)
  const u1 = Math.max(rand(), 1e-12)
  const u2 = rand()
  const z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2)
  const m = Math.log(1 + mean) - (sd * sd) / 2
  return Math.exp(m + sd * z) - 1
}

export function simulateDrawdown(params: DrawdownParams): DrawdownResult {
  const { portfolio, annualSpend, years, equityPct } = params
  if (![portfolio, annualSpend, years, equityPct].every(Number.isFinite))
    throw new Error('portfolio, annualSpend, years and equityPct must be numbers')
  if (portfolio <= 0 || annualSpend < 0) throw new Error('portfolio must be > 0 and annualSpend >= 0')
  if (years < 1 || years > 80) throw new Error('years must be between 1 and 80')
  if (equityPct < 0 || equityPct > 1) throw new Error('equityPct must be between 0 and 1')

  const n = Math.min(
    Math.max(Math.floor(params.iterations ?? DEFAULT_ITERATIONS) || DEFAULT_ITERATIONS, 100),
    MAX_ITERATIONS,
  )
  const rand = mulberry32(params.seed ?? Math.floor(Math.random() * 2 ** 31))
  const A = DRAWDOWN_ASSUMPTIONS

  const endBalances = new Array<number>(n)
  const ruinYears: number[] = []
  for (let i = 0; i < n; i++) {
    let bal = portfolio
    let ruined = 0
    for (let y = 1; y <= Math.floor(years); y++) {
      bal -= annualSpend
      if (bal <= 0) {
        bal = 0
        ruined = y
        break
      }
      const eq = lognormalDraw(rand, A.equityRealReturnMean, A.equityRealReturnStdev)
      const bd = lognormalDraw(rand, A.bondRealReturnMean, A.bondRealReturnStdev)
      bal *= 1 + equityPct * eq + (1 - equityPct) * bd
    }
    endBalances[i] = bal
    if (ruined) ruinYears.push(ruined)
  }
  endBalances.sort((a, b) => a - b)
  ruinYears.sort((a, b) => a - b)
  const ruinProbability = ruinYears.length / n
  return {
    iterations: n,
    successRate: round2((1 - ruinProbability) * 100),
    ruinProbability: round2(ruinProbability * 100) ,
    medianRuinYear: ruinYears.length ? ruinYears[Math.floor(ruinYears.length / 2)] : null,
    endBalance: {
      p10: round2(percentile(endBalances, 0.1)),
      p50: round2(percentile(endBalances, 0.5)),
      p90: round2(percentile(endBalances, 0.9)),
    },
    assumptions: A,
  }
}
