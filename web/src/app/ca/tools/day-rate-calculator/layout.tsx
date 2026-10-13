import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Day Rate Calculator (CAD): Hourly Rate to Daily and Yearly',
  description:
    'Turn your hourly rate into a day rate, weekly rate and annual income in CAD. Free calculator for Canadian contractors.',
  alternates: { canonical: '/ca/tools/day-rate-calculator/' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
