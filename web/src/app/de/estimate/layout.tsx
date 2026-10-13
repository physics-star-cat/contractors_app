import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Angebot Position für Position mit realistischer Preisspanne',
  description: 'Erstellen Sie Ihr Angebot Position für Position, legen Sie je Posten das Risiko fest und erhalten Sie eine realistische Kostenspanne.',
  alternates: { canonical: '/de/estimate/' },
}

export default function EstimateLayout({ children }: { children: React.ReactNode }) {
  return children
}
