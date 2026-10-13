import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Build a Job Quote Line by Line with Realistic CAD Ranges',
  description: 'Build your quote line by line, tag each item\'s risk level, and get a realistic cost range in CAD that accounts for the things that go wrong.',
  alternates: { canonical: '/ca/estimate/' },
}

export default function EstimateLayout({ children }: { children: React.ReactNode }) {
  return children
}
