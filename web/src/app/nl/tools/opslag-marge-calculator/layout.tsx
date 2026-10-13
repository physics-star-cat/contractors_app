import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Opslag vs marge calculator: prijs opdrachten zonder verlies',
  description:
    'Zie opslag en marge voor elk percentage naast elkaar en prijs nooit meer te laag door ze te verwarren. Gratis calculator voor aannemers.',
  alternates: { canonical: '/nl/tools/opslag-marge-calculator/' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
