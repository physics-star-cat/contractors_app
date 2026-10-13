import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wynik wyceny: realistyczny zakres cen i analiza ryzyka',
  description: 'Twoja prognoza kosztów: realistyczny zakres cen, podział ryzyka i miejsca największej niepewności w Twojej wycenie.',
  alternates: { canonical: '/pl/results/' },
}

export default function ResultsLayout({ children }: { children: React.ReactNode }) {
  return children
}
