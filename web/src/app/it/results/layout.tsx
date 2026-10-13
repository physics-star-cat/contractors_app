import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Risultato del preventivo: fascia realistica e rischi',
  description: 'La tua proiezione dei costi: la fascia di prezzo realistica, la ripartizione dei rischi e le maggiori incertezze del tuo preventivo.',
  alternates: { canonical: '/it/results/' },
}

export default function ResultsLayout({ children }: { children: React.ReactNode }) {
  return children
}
