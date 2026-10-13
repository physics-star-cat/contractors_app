import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Crea il preventivo voce per voce con il rischio incluso',
  description: 'Crea il tuo preventivo voce per voce, imposta il rischio di ogni elemento e ottieni una fascia di costo realistica che tiene conto degli imprevisti.',
  alternates: { canonical: '/it/estimate/' },
}

export default function EstimateLayout({ children }: { children: React.ReactNode }) {
  return children
}
