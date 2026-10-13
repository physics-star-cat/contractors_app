import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Margine vs ricarico: calcola i prezzi senza perdere soldi',
  description:
    'Confronta margine e ricarico per qualsiasi percentuale e non sottoprezzare più un lavoro confondendoli. Calcolatore gratuito per artigiani e imprese.',
  alternates: { canonical: '/it/tools/calcolatore-margine-ricarico/' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
