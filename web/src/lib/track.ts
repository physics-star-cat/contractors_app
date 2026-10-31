import { after } from 'next/server'
import { classifyClient } from './agent-client'

/**
 * Anonymous usage tracking for the agent API via the GA4 Measurement
 * Protocol (event name and a client class — no user data, no IPs, not the
 * User-Agent itself). agent_client must be registered as an event-scoped custom
 * dimension in GA4 before it reports. This repo is public,
 * so the write-only MP secret must come from the GA4_MP_API_SECRET env var
 * (Vercel → project → Settings → Environment Variables); without it,
 * tracking is a silent no-op.
 */
const MEASUREMENT_ID = 'G-WWM7JY1TDY'

export function trackEvent(name: string, req: { headers: Headers }) {
  const secret = process.env.GA4_MP_API_SECRET
  if (!secret) return
  const agent_client = classifyClient(req.headers.get('user-agent'))
  after(async () => {
    try {
      await fetch(
        `https://www.google-analytics.com/mp/collect?measurement_id=${MEASUREMENT_ID}&api_secret=${secret}`,
        {
          method: 'POST',
          body: JSON.stringify({
            client_id: `agent.${Math.floor(Math.random() * 1e10)}`,
            events: [{ name, params: { agent_client } }],
          }),
        },
      )
    } catch {
      // Tracking must never break the API.
    }
  })
}
