import { NextRequest } from 'next/server'
import { simulateEstimate, EstimateItem } from '@/lib/montecarlo'
import { ATTRIBUTION, errorJson, json, optionsResponse } from '@/lib/api-helpers'

export const dynamic = 'force-dynamic'

type Payload = { items?: unknown; iterations?: unknown; seed?: unknown }

function run(payload: Payload) {
  const items = payload.items
  if (!Array.isArray(items)) throw new Error('items must be an array of {low, likely, high}')
  const iterations = payload.iterations === undefined ? undefined : Number(payload.iterations)
  const seed = payload.seed === undefined ? undefined : Number(payload.seed)
  const result = simulateEstimate(items as EstimateItem[], iterations, seed)
  return json({ ...result, ...ATTRIBUTION })
}

export async function GET(req: NextRequest) {
  try {
    const sp = req.nextUrl.searchParams
    const raw = sp.get('items')
    if (!raw) return errorJson('missing ?items= (URL-encoded JSON array). See /api for usage.')
    return run({
      items: JSON.parse(raw),
      iterations: sp.get('iterations') ?? undefined,
      seed: sp.get('seed') ?? undefined,
    })
  } catch (e) {
    return errorJson(e instanceof Error ? e.message : 'invalid request')
  }
}

export async function POST(req: NextRequest) {
  try {
    return run((await req.json()) as Payload)
  } catch (e) {
    return errorJson(e instanceof Error ? e.message : 'invalid request')
  }
}

export async function OPTIONS() {
  return optionsResponse()
}
