import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stundensatz-Rechner: Tages- und Jahressatz aus Stundenlohn',
  description:
    'Rechnen Sie Ihren Stundensatz in Tagessatz, Wochensatz und Jahreseinkommen um. Kostenloser Rechner für Handwerker und Selbstständige.',
  alternates: { canonical: '/de/tools/stundensatz-rechner/' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
