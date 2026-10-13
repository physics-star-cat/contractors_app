import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Günlük ücret hesaplayıcı: saatlik ücretten günlük ve yıllığa',
  description:
    'Saatlik ücretinizi saniyeler içinde günlük, haftalık ve yıllık gelire çevirin. Ustalar ve müteahhitler için ücretsiz hesaplayıcı.',
  alternates: { canonical: '/tr/tools/gunluk-ucret-hesaplayici/' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
