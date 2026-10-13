import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resultado do orçamento: faixa realista e análise de risco',
  description: 'Sua projeção de custos: a faixa de preço realista, a divisão dos riscos e onde estão as maiores incertezas do seu orçamento.',
  alternates: { canonical: '/pt/results/' },
}

export default function ResultsLayout({ children }: { children: React.ReactNode }) {
  return children
}
