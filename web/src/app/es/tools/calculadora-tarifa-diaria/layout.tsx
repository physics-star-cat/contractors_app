import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'calculadora de tarifa diaria para contratistas // lowriskquotes',
  description:
    'Calcule su tarifa diaria, semanal y anual a partir de su tarifa por hora. Herramienta gratuita para contratistas y profesionales.',
  alternates: { canonical: '/es/tools/calculadora-tarifa-diaria/' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
