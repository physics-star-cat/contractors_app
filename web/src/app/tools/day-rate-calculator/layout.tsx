import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Day Rate Calculator: Hourly Rate to Daily and Yearly Pay',
  description:
    'Turn your hourly rate into a day rate, weekly rate and annual income in seconds. Free calculator for contractors and tradespeople.',
  alternates: { canonical: '/tools/day-rate-calculator/' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
