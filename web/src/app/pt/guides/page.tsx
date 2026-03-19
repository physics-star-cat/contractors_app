import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Guias // lowriskquotes',
  description: 'Guias de estimativa de custos para empreiteiros e prestadores de serviço no Brasil. Banheiro, cozinha, telhado e como fazer orçamentos.',
  alternates: { canonical: '/pt/guides/' },
}

export default function PtGuidesPage() {
  return (
    <div className="guide">
      <h1>Guias</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
        Guias de estimativa de custos para empreiteiros e prestadores de serviço no Brasil.
      </p>

      <ASCIIBox title="Como orçar">
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ marginBottom: '8px' }}>
            <Link href="/pt/guides/como-fazer-orcamento/">Como fazer um orçamento de obra</Link>
          </li>
        </ul>
      </ASCIIBox>

      <ASCIIBox title="Guias de custos">
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ marginBottom: '8px' }}>
            <Link href="/pt/guides/custos-reforma-banheiro/">Custos de reforma de banheiro</Link>
          </li>
          <li style={{ marginBottom: '8px' }}>
            <Link href="/pt/guides/custos-reforma-cozinha/">Custos de reforma de cozinha</Link>
          </li>
          <li style={{ marginBottom: '8px' }}>
            <Link href="/pt/guides/custos-telhado/">Custos de telhado</Link>
          </li>
        </ul>
      </ASCIIBox>

      <div className="guide__cta">
        <Link href="/pt/estimate/">[CRIAR ORÇAMENTO]</Link>
      </div>
    </div>
  )
}
