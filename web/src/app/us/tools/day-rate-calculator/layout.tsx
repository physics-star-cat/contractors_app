import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'day rate calculator for contractors // lowriskquotes',
  description:
    'Calculate your day rate, weekly rate, and annual income from your hourly rate. Free tool for contractors.',
  alternates: { canonical: '/us/tools/day-rate-calculator/' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
