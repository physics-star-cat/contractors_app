import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marża vs narzut: wyceniaj zlecenia bez strat',
  description:
    'Porównaj marżę i narzut dla dowolnego procentu i nie zaniżaj już wycen przez ich mylenie. Darmowy kalkulator dla wykonawców.',
  alternates: { canonical: '/pl/tools/kalkulator-marzy-narzutu/' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
