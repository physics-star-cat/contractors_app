import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Calculadora de diária: do valor por hora ao dia e ao ano',
  description:
    'Converta seu valor por hora em diária, valor semanal e renda anual em segundos. Calculadora grátis para profissionais da construção.',
  alternates: { canonical: '/pt/tools/calculadora-diaria/' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
