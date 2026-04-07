import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'day rate calculator for Canadian contractors // lowriskquotes',
  description:
    'Turn your hourly rate into a day rate, weekly rate, and annual income in CAD. Free calculator for Canadian contractors — accounts for billable days and expenses.',
  alternates: { canonical: '/ca/tools/day-rate-calculator/' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
