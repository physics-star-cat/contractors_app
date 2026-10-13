import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dagtarief calculator: van uurtarief naar dag- en jaartarief',
  description:
    'Reken uw uurtarief om naar dagtarief, weektarief en jaarinkomen in een paar seconden. Gratis calculator voor aannemers en vakmensen.',
  alternates: { canonical: '/nl/tools/dagtarief-calculator/' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
