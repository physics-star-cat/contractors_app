import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Résultat de votre devis : fourchette réaliste et risques',
  description: 'Votre projection de coût : la fourchette de prix réaliste, la répartition des risques et les plus grandes incertitudes de votre devis.',
  alternates: { canonical: '/fr/results/' },
}

export default function ResultsLayout({ children }: { children: React.ReactNode }) {
  return children
}
