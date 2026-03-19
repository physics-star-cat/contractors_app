import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Guider // lowriskquotes',
  description: 'Kostnadsguider för hantverkare i Sverige. Badrum, kök, tak och hur man gör en offert.',
  alternates: { canonical: '/sv/guides/' },
}

export default function SvGuidesPage() {
  return (
    <div className="guide">
      <h1>Guider</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
        Kostnadsguider för hantverkare i Sverige.
      </p>

      <ASCIIBox title="Hur man offerterar">
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ marginBottom: '8px' }}>
            <Link href="/sv/guides/hur-man-offerterar/">Hur man gör en offert som hantverkare</Link>
          </li>
        </ul>
      </ASCIIBox>

      <ASCIIBox title="Kostnadsguider">
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ marginBottom: '8px' }}>
            <Link href="/sv/guides/badrumsrenovering-kostnad/">Kostnad badrumsrenovering</Link>
          </li>
          <li style={{ marginBottom: '8px' }}>
            <Link href="/sv/guides/koksrenovering-kostnad/">Kostnad köksrenovering</Link>
          </li>
          <li style={{ marginBottom: '8px' }}>
            <Link href="/sv/guides/tak-kostnad/">Kostnad takarbeten</Link>
          </li>
        </ul>
      </ASCIIBox>

      <div className="guide__cta">
        <Link href="/sv/estimate/">[SKAPA OFFERT]</Link>
      </div>
    </div>
  )
}
