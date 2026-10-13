import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Maak uw offerte post voor post, met risico ingecalculeerd',
  description: 'Bouw uw offerte post voor post op, stel per item het risico in en krijg een realistische kostenbandbreedte die rekening houdt met tegenvallers.',
  alternates: { canonical: '/nl/estimate/' },
}

export default function EstimateLayout({ children }: { children: React.ReactNode }) {
  return children
}
