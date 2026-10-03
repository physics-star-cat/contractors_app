import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Build Your Quote // lowriskquotes',
  description: 'Build your quote line by line, tag each item\'s risk level, and get a realistic cost range that accounts for the things that go wrong.',
  alternates: { canonical: '/estimate/' },
}

export default function EstimateLayout({ children }: { children: React.ReactNode }) {
  return children
}
