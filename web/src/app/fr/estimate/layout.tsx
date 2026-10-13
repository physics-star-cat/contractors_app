import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chiffrez votre devis poste par poste, risques compris',
  description: 'Construisez votre devis poste par poste, fixez le risque de chaque élément et obtenez une fourchette de coût réaliste qui tient compte des imprévus.',
  alternates: { canonical: '/fr/estimate/' },
}

export default function EstimateLayout({ children }: { children: React.ReactNode }) {
  return children
}
