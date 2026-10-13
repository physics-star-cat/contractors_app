import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Crea tu presupuesto partida por partida con riesgo incluido',
  description: 'Crea tu presupuesto partida por partida, fija el riesgo de cada elemento y obtén un rango de costes realista que tiene en cuenta los imprevistos.',
  alternates: { canonical: '/es/estimate/' },
}

export default function EstimateLayout({ children }: { children: React.ReactNode }) {
  return children
}
