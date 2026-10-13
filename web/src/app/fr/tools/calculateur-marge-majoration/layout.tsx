import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marge vs majoration : chiffrez sans perdre d\'argent',
  description:
    'Comparez marge et majoration pour n\'importe quel pourcentage et ne sous-évaluez plus un chantier en les confondant. Calculateur gratuit pour artisans.',
  alternates: { canonical: '/fr/tools/calculateur-marge-majoration/' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
