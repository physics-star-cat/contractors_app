import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tu presupuesto: rango de precios realista y riesgos',
  description: 'Tu proyección de costes: el rango de precios realista, el desglose de riesgos y dónde están las mayores incertidumbres de tu presupuesto.',
  alternates: { canonical: '/es/results/' },
}

export default function ResultsLayout({ children }: { children: React.ReactNode }) {
  return children
}
