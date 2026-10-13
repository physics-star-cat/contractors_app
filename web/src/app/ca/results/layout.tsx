import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Your Quote Results: Realistic CAD Range and Risk Breakdown',
  description: 'Your cost projection in CAD: the realistic price range, the risk breakdown, and where the biggest uncertainties are in your quote.',
  alternates: { canonical: '/ca/results/' },
}

export default function ResultsLayout({ children }: { children: React.ReactNode }) {
  return children
}
