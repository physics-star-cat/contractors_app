import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dagstariffkalkylator: från timpris till dags- och årsinkomst',
  description:
    'Räkna om ditt timpris till dagstariff, veckotariff och årsinkomst på några sekunder. Gratis kalkylator för hantverkare.',
  alternates: { canonical: '/sv/tools/dagstariff-kalkylator/' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
