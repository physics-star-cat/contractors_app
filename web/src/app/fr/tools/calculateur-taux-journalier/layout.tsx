import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Taux journalier : du taux horaire au jour et à l\'année',
  description:
    'Convertissez votre taux horaire en taux journalier, hebdomadaire et annuel en quelques secondes. Calculateur gratuit pour artisans.',
  alternates: { canonical: '/fr/tools/calculateur-taux-journalier/' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
