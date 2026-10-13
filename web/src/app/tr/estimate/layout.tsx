import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Teklifinizi kalem kalem, riski hesaba katarak hazırlayın',
  description: 'Teklifinizi kalem kalem oluşturun, her kalemin riskini belirleyin ve sürprizleri hesaba katan gerçekçi bir maliyet aralığı alın.',
  alternates: { canonical: '/tr/estimate/' },
}

export default function EstimateLayout({ children }: { children: React.ReactNode }) {
  return children
}
