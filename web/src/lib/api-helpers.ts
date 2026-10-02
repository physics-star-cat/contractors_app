import { NextResponse } from 'next/server'

export const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Mcp-Protocol-Version',
}

export const ATTRIBUTION = {
  source: 'lowriskquotes.com',
  link: 'https://lowriskquotes.com/',
  docs: 'https://lowriskquotes.com/api/',
  disclaimer: 'Indicative simulation output for educational use; not financial advice.',
}

export function json(data: unknown, status = 200) {
  return NextResponse.json(data, { status, headers: CORS_HEADERS })
}

/**
 * Responses that never change (API index, MCP "POST here" notice) can be served
 * by Vercel's CDN instead of invoking a function. Added 2026-10-02: the project
 * was burning ~1,500 function invocations/day on /api/mcp, almost all of it
 * liveness probes and registry scanners rather than tool calls.
 */
export const CDN_CACHE_HEADERS = {
  'Cache-Control': 'public, max-age=0, s-maxage=86400, stale-while-revalidate=604800',
  'CDN-Cache-Control': 'public, s-maxage=86400',
}

export function cachedJson(data: unknown, status = 200, extra: Record<string, string> = {}) {
  return NextResponse.json(data, { status, headers: { ...CORS_HEADERS, ...CDN_CACHE_HEADERS, ...extra } })
}

/**
 * Known liveness/uptime probers that re-run the MCP handshake every few
 * minutes and never call a tool. glimind.com's SentinelOracle documents its
 * opt-out as "return HTTP 403 with header X-Sentinel-OptOut: 1 to our probe
 * User-Agent" (https://glimind.com/opt-out). Returns a response if the request
 * should be refused, otherwise null.
 */
export function rejectProber(req: Request): NextResponse | null {
  const ua = req.headers.get('user-agent') ?? ''
  if (/SentinelOracle/i.test(ua)) {
    return new NextResponse(null, {
      status: 403,
      headers: { ...CORS_HEADERS, 'X-Sentinel-OptOut': '1', 'Cache-Control': 'no-store' },
    })
  }
  return null
}

export function errorJson(message: string, status = 400) {
  return json({ error: message, ...{ docs: ATTRIBUTION.docs } }, status)
}

export function optionsResponse() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS })
}
