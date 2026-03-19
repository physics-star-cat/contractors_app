import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Rehberler // lowriskquotes',
  description: 'Türk müteahhitler ve ustalar için maliyet tahmin rehberleri. Banyo, mutfak, çatı maliyetleri ve teklif hazırlama.',
  alternates: { canonical: '/tr/guides/' },
}

export default function TrGuidesPage() {
  return (
    <div className="guide">
      <h1>Rehberler</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
        Türk müteahhitler ve ustalar için maliyet tahmin rehberleri.
      </p>

      <ASCIIBox title="Teklif hazırlama">
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ marginBottom: '8px' }}>
            <Link href="/tr/guides/is-teklifi-nasil-hazirlanir/">İş teklifi nasıl hazırlanır</Link>
          </li>
        </ul>
      </ASCIIBox>

      <ASCIIBox title="Maliyet rehberleri">
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ marginBottom: '8px' }}>
            <Link href="/tr/guides/banyo-renovasyon-maliyetleri/">Banyo renovasyon maliyetleri</Link>
          </li>
          <li style={{ marginBottom: '8px' }}>
            <Link href="/tr/guides/mutfak-renovasyon-maliyetleri/">Mutfak renovasyon maliyetleri</Link>
          </li>
          <li style={{ marginBottom: '8px' }}>
            <Link href="/tr/guides/cati-maliyetleri/">Çatı maliyetleri</Link>
          </li>
        </ul>
      </ASCIIBox>

      <div className="guide__cta">
        <Link href="/tr/estimate/">[TEKLİF OLUŞTUR]</Link>
      </div>
    </div>
  )
}
