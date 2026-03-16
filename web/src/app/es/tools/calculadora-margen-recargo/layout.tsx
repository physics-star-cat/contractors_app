import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'calculadora de margen vs recargo // lowriskquotes',
  description:
    'Calcule la diferencia entre margen y recargo. Calculadora gratuita para contratistas — deje de perder dinero confundiendo los dos conceptos.',
  alternates: { canonical: '/es/tools/calculadora-margen-recargo/' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
