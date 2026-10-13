import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Calcolatore tariffa giornaliera: da oraria a giorno e anno',
  description:
    'Converti la tua tariffa oraria in tariffa giornaliera, settimanale e annuale in pochi secondi. Calcolatore gratuito per artigiani e imprese.',
  alternates: { canonical: '/it/tools/calcolatore-tariffa-giornaliera/' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
