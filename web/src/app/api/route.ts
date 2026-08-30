import { ATTRIBUTION, json, optionsResponse } from '@/lib/api-helpers'

export const dynamic = 'force-dynamic'

export async function GET() {
  return json({
    name: 'lowriskquotes agent API',
    description:
      'Monte Carlo simulation endpoints for AI agents and developers. No auth, CORS-open, ' +
      'GET or POST. Also available as a remote MCP server at POST /api/mcp.',
    endpoints: {
      'GET|POST /api/simulate': {
        description:
          'Three-point (triangular) Monte Carlo over cost line items. Returns total percentiles.',
        params: {
          items:
            'JSON array of {name?, low, likely, high}. For GET, pass URL-encoded JSON in ?items=',
          iterations: 'optional, 100..20000, default 5000',
          seed: 'optional integer for reproducible output',
        },
        example:
          'https://lowriskquotes.com/api/simulate/?items=' +
          encodeURIComponent('[{"name":"materials","low":800,"likely":1200,"high":2100}]'),
      },
      'GET|POST /api/drawdown': {
        description:
          'Retirement drawdown Monte Carlo (real returns, annual steps). Returns success rate ' +
          'and end-balance percentiles. Educational only.',
        params: {
          portfolio: 'starting balance, > 0',
          annualSpend: 'withdrawal per year, >= 0',
          years: '1..80',
          equityPct: '0..1 share of portfolio in equities',
          iterations: 'optional, 100..20000, default 5000',
          seed: 'optional integer for reproducible output',
        },
        example:
          'https://lowriskquotes.com/api/drawdown/?portfolio=500000&annualSpend=25000&years=30&equityPct=0.6',
      },
      'POST /api/mcp': 'Remote MCP server (streamable HTTP, stateless) exposing both tools.',
    },
    ...ATTRIBUTION,
  })
}

export async function OPTIONS() {
  return optionsResponse()
}
