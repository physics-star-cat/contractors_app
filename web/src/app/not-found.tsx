import type { Metadata } from 'next'
import Link from 'next/link'

// Without this the default 404 inherits the root layout's canonical ('/'), telling
// crawlers every missing URL is the homepage. A 404 should carry no canonical and noindex.
export const metadata: Metadata = {
  title: 'Page Not Found | lowriskquotes',
  robots: { index: false, follow: true },
  alternates: { canonical: null },
}

export default function NotFound() {
  return (
    <div>
      <h1 style={{ color: 'var(--accent-amber)', fontSize: '20px', marginBottom: '24px' }}>
        page not found
      </h1>
      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
        That page doesn&apos;t exist. <Link href="/">Build a quote</Link> or browse the{' '}
        <Link href="/guides/how-to-quote-a-job/">cost guides</Link>.
      </p>
    </div>
  )
}
