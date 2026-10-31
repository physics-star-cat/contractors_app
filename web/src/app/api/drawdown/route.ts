import { NextRequest } from 'next/server'
import { simulateDrawdown } from '@/lib/montecarlo'
import { ATTRIBUTION, errorJson, json, optionsResponse } from '@/lib/api-helpers'
import { trackEvent } from '@/lib/track'

export const dynamic = 'force-dynamic'

function run(p: Record<string, unknown>, req: NextRequest) {
  trackEvent('agent_api_drawdown', req)
  const num = (k: string) => (p[k] === undefined || p[k] === null ? undefined : Number(p[k]))
  const result = simulateDrawdown({
    portfolio: num('portfolio') as number,
    annualSpend: num('annualSpend') as number,
    years: num('years') as number,
    equityPct: num('equityPct') as number,
    iterations: num('iterations'),
    seed: num('seed'),
  })
  return json({ ...result, ...ATTRIBUTION })
}

export async function GET(req: NextRequest) {
  try {
    return run(Object.fromEntries(req.nextUrl.searchParams), req)
  } catch (e) {
    return errorJson(e instanceof Error ? e.message : 'invalid request')
  }
}

export async function POST(req: NextRequest) {
  try {
    return run((await req.json()) as Record<string, unknown>, req)
  } catch (e) {
    return errorJson(e instanceof Error ? e.message : 'invalid request')
  }
}

export async function OPTIONS() {
  return optionsResponse()
}
