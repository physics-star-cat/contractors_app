import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Teklif sonucunuz: gerçekçi fiyat aralığı ve risk dağılımı',
  description: 'Maliyet tahmininiz: gerçekçi fiyat aralığı, risk dağılımı ve teklifinizdeki en büyük belirsizliklerin nerede olduğu.',
  alternates: { canonical: '/tr/results/' },
}

export default function ResultsLayout({ children }: { children: React.ReactNode }) {
  return children
}
