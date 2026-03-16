import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'day rate calculator for australian tradies // lowriskquotes',
  description:
    'Calculate your day rate, weekly rate, and annual income from your hourly rate. Free tool for Australian tradies in AUD.',
  alternates: { canonical: '/au/tools/day-rate-calculator/' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
