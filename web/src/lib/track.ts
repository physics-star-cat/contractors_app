import { after } from 'next/server'

/**
 * Anonymous usage tracking for the agent API via the GA4 Measurement
 * Protocol (event name only — no user data, no IPs). This repo is public,
 * so the write-only MP secret must come from the GA4_MP_API_SECRET env var
 * (Vercel → project → Settings → Environment Variables); without it,
 * tracking is a silent no-op.
 */
const MEASUREMENT_ID = 'G-WWM7JY1TDY'

export function trackEvent(name: string) {
  const secret = process.env.GA4_MP_API_SECRET
  if (!secret) return
  after(async () => {
    try {
      await fetch(
        `https://www.google-analytics.com/mp/collect?measurement_id=${MEASUREMENT_ID}&api_secret=${secret}`,
        {
          method: 'POST',
          body: JSON.stringify({
            client_id: `agent.${Math.floor(Math.random() * 1e10)}`,
            events: [{ name }],
          }),
        },
      )
    } catch {
      // Tracking must never break the API.
    }
  })
}
