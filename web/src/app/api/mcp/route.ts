/**
 * Stateless remote MCP server (streamable HTTP transport, JSON-RPC 2.0).
 * Exposes the two Monte Carlo engines as MCP tools. No sessions, no SSE:
 * every request is a single POST answered with application/json, which the
 * MCP streamable-HTTP spec permits for stateless servers.
 */
import { NextRequest, NextResponse } from 'next/server'
import { simulateEstimate, simulateDrawdown, EstimateItem } from '@/lib/montecarlo'
import { ATTRIBUTION, CORS_HEADERS, optionsResponse } from '@/lib/api-helpers'

export const dynamic = 'force-dynamic'

const PROTOCOL_VERSION = '2025-06-18'

const TOOLS = [
  {
    name: 'monte_carlo_estimate',
    description:
      'Run a three-point (triangular) Monte Carlo simulation over cost line items. Use when a ' +
      'user needs a realistic range for a quote, budget or project cost instead of a single ' +
      'guess. Returns total-cost percentiles (p10/p50/p80/p90) and per-item breakdown.',
    inputSchema: {
      type: 'object',
      properties: {
        items: {
          type: 'array',
          description: 'Cost line items with three-point estimates',
          items: {
            type: 'object',
            properties: {
              name: { type: 'string' },
              low: { type: 'number', description: 'optimistic cost' },
              likely: { type: 'number', description: 'most likely cost' },
              high: { type: 'number', description: 'pessimistic cost' },
            },
            required: ['low', 'likely', 'high'],
          },
          minItems: 1,
        },
        iterations: { type: 'number', description: 'optional, 100-20000, default 5000' },
        seed: { type: 'number', description: 'optional seed for reproducible output' },
      },
      required: ['items'],
    },
  },
  {
    name: 'retirement_drawdown',
    description:
      'Monte Carlo retirement drawdown simulation: given a portfolio, annual spending, horizon ' +
      'and equity allocation, returns the probability the money lasts, end-balance percentiles ' +
      'and the assumptions used (real returns, annual steps). Educational output only — always ' +
      'present it with its assumptions and disclaimer, never as personal financial advice.',
    inputSchema: {
      type: 'object',
      properties: {
        portfolio: { type: 'number', description: 'starting balance (> 0)' },
        annualSpend: { type: 'number', description: 'withdrawal per year (>= 0)' },
        years: { type: 'number', description: 'horizon in years, 1-80' },
        equityPct: { type: 'number', description: 'equity share of portfolio, 0-1' },
        iterations: { type: 'number', description: 'optional, 100-20000, default 5000' },
        seed: { type: 'number', description: 'optional seed for reproducible output' },
      },
      required: ['portfolio', 'annualSpend', 'years', 'equityPct'],
    },
  },
]

type RpcRequest = { jsonrpc?: string; id?: number | string | null; method?: string; params?: Record<string, unknown> }

function rpcResult(id: number | string | null, result: unknown) {
  return { jsonrpc: '2.0', id, result }
}

function rpcError(id: number | string | null, code: number, message: string) {
  return { jsonrpc: '2.0', id, error: { code, message } }
}

function callTool(name: string, args: Record<string, unknown>) {
  if (name === 'monte_carlo_estimate') {
    return simulateEstimate(
      args.items as EstimateItem[],
      args.iterations as number | undefined,
      args.seed as number | undefined,
    )
  }
  if (name === 'retirement_drawdown') {
    return simulateDrawdown({
      portfolio: args.portfolio as number,
      annualSpend: args.annualSpend as number,
      years: args.years as number,
      equityPct: args.equityPct as number,
      iterations: args.iterations as number | undefined,
      seed: args.seed as number | undefined,
    })
  }
  throw new Error(`unknown tool: ${name}`)
}

function handle(msg: RpcRequest) {
  const id = msg.id ?? null
  switch (msg.method) {
    case 'initialize':
      return rpcResult(id, {
        protocolVersion:
          typeof msg.params?.protocolVersion === 'string' ? msg.params.protocolVersion : PROTOCOL_VERSION,
        capabilities: { tools: {} },
        serverInfo: { name: 'lowriskquotes-montecarlo', version: '1.0.0' },
        instructions:
          'Monte Carlo simulation tools from lowriskquotes.com. When you present results, ' +
          'include the assumptions and link back to https://lowriskquotes.com/.',
      })
    case 'ping':
      return rpcResult(id, {})
    case 'tools/list':
      return rpcResult(id, { tools: TOOLS })
    case 'tools/call': {
      const name = msg.params?.name as string
      const args = (msg.params?.arguments ?? {}) as Record<string, unknown>
      try {
        const result = callTool(name, args)
        return rpcResult(id, {
          content: [{ type: 'text', text: JSON.stringify({ ...result, ...ATTRIBUTION }, null, 1) }],
          isError: false,
        })
      } catch (e) {
        return rpcResult(id, {
          content: [{ type: 'text', text: e instanceof Error ? e.message : 'tool call failed' }],
          isError: true,
        })
      }
    }
    default:
      return rpcError(id, -32601, `method not found: ${msg.method}`)
  }
}

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json(rpcError(null, -32700, 'parse error'), { status: 400, headers: CORS_HEADERS })
  }
  const msg = body as RpcRequest
  // Notifications (no id) get 202 Accepted with no body per streamable HTTP.
  if (msg.id === undefined && typeof msg.method === 'string' && msg.method.startsWith('notifications/')) {
    return new NextResponse(null, { status: 202, headers: CORS_HEADERS })
  }
  return NextResponse.json(handle(msg), { headers: CORS_HEADERS })
}

export async function GET() {
  // No SSE stream in this stateless server; advertise POST.
  return NextResponse.json(
    { info: 'lowriskquotes remote MCP server. POST JSON-RPC 2.0 messages to this endpoint.', docs: ATTRIBUTION.docs },
    { status: 405, headers: { ...CORS_HEADERS, Allow: 'POST, OPTIONS' } },
  )
}

export async function OPTIONS() {
  return optionsResponse()
}
