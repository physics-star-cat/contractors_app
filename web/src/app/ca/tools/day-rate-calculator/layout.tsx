import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'day rate calculator for Canadian contractors // lowriskquotes',
  description:
    'Calculate your day rate, weekly rate, and annual income from your hourly rate in CAD. Free tool for Canadian contractors and tradespeople.',
  alternates: { canonical: '/ca/tools/day-rate-calculator/' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
