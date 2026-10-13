import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kâr payı ve marj hesaplayıcı: zarar etmeden fiyatlayın',
  description:
    'Her yüzde için kâr payı ve marjı yan yana görün, ikisini karıştırıp işi ucuza vermeyin. Ustalar ve müteahhitler için ücretsiz hesaplayıcı.',
  alternates: { canonical: '/tr/tools/kar-marji-hesaplayici/' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
