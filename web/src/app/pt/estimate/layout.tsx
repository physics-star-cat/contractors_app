import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Monte seu orçamento item por item com o risco incluído',
  description: 'Monte seu orçamento item por item, defina o risco de cada elemento e obtenha uma faixa de custo realista em BRL que considera os imprevistos.',
  alternates: { canonical: '/pt/estimate/' },
}

export default function EstimateLayout({ children }: { children: React.ReactNode }) {
  return children
}
