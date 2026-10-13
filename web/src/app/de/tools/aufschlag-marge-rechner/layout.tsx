import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aufschlag vs. Marge: Angebote kalkulieren ohne Verlust',
  description:
    'Sehen Sie Aufschlag und Marge für jeden Prozentsatz nebeneinander und kalkulieren Sie nie wieder zu niedrig. Kostenloser Rechner für Handwerker.',
  alternates: { canonical: '/de/tools/aufschlag-marge-rechner/' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
