import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Build a Bid Line by Line with Realistic Risk Ranges',
  description: 'Build your bid line by line, tag each item\'s risk level, and get a realistic cost range that accounts for the things that go wrong.',
  alternates: { canonical: '/us/estimate/' },
}

export default function EstimateLayout({ children }: { children: React.ReactNode }) {
  return children
}
