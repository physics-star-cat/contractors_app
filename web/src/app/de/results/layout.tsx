import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ihr Angebotsergebnis: realistische Spanne und Risikoanalyse',
  description: 'Ihre Kostenprognose: die realistische Preisspanne, die Risikoaufteilung und wo die größten Unsicherheiten in Ihrem Angebot liegen.',
  alternates: { canonical: '/de/results/' },
}

export default function ResultsLayout({ children }: { children: React.ReactNode }) {
  return children
}
