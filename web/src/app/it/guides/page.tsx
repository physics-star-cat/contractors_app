import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Guide // lowriskquotes',
  description: 'Guide ai costi per artigiani e imprese edili in Italia. Bagno, cucina, tetto e come fare un preventivo.',
  alternates: { canonical: '/it/guides/' },
}

export default function ItGuidesPage() {
  return (
    <div className="guide">
      <h1>Guide</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
        Guide ai costi per artigiani e imprese edili in Italia.
      </p>

      <ASCIIBox title="Come preventivare">
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ marginBottom: '8px' }}>
            <Link href="/it/guides/come-fare-un-preventivo/">Come fare un preventivo da artigiano</Link>
          </li>
        </ul>
      </ASCIIBox>

      <ASCIIBox title="Guide ai costi">
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ marginBottom: '8px' }}>
            <Link href="/it/guides/costi-ristrutturazione-bagno/">Costi ristrutturazione bagno</Link>
          </li>
          <li style={{ marginBottom: '8px' }}>
            <Link href="/it/guides/costi-ristrutturazione-cucina/">Costi ristrutturazione cucina</Link>
          </li>
          <li style={{ marginBottom: '8px' }}>
            <Link href="/it/guides/costi-tetto/">Costi tetto</Link>
          </li>
        </ul>
      </ASCIIBox>

      <div className="guide__cta">
        <Link href="/it/estimate/">[CREA PREVENTIVO]</Link>
      </div>
    </div>
  )
}
