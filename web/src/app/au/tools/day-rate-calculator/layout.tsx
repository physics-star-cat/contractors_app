import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tradie Day Rate Calculator: Hourly to Daily and Yearly AUD',
  description:
    'Turn your hourly rate into a day rate, weekly rate and annual income in AUD, plus the ATO travel claim. Free calculator for Australian tradies.',
  alternates: { canonical: '/au/tools/day-rate-calculator/' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
