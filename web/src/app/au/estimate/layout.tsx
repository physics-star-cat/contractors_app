import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Build a Tradie Quote Line by Line with Realistic Risk Ranges',
  description: 'Build your quote line by line, tag each item\'s risk level, and get a realistic cost range in AUD that accounts for the things that go wrong.',
  alternates: { canonical: '/au/estimate/' },
}

export default function EstimateLayout({ children }: { children: React.ReactNode }) {
  return children
}
