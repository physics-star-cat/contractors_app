import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kalkulator stawki dziennej: z godzinowej na dzienną i roczną',
  description:
    'Przelicz stawkę godzinową na dzienną, tygodniową i roczną w kilka sekund. Darmowy kalkulator dla wykonawców i fachowców.',
  alternates: { canonical: '/pl/tools/kalkulator-stawki-dziennej/' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
