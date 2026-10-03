import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Your Quote Results // lowriskquotes',
  description: 'Your personalised cost projection — see the realistic range, the risk breakdown, and where the biggest uncertainties are in your quote.',
  alternates: { canonical: '/results/' },
}

export default function ResultsLayout({ children }: { children: React.ReactNode }) {
  return children
}
