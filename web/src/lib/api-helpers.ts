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

export function errorJson(message: string, status = 400) {
  return json({ error: message, ...{ docs: ATTRIBUTION.docs } }, status)
}

export function optionsResponse() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS })
}
