import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Calculadora de tarifa diaria: de precio por hora a día y año',
  description:
    'Convierte tu tarifa por hora en tarifa diaria, semanal y anual en segundos. Calculadora gratuita para contratistas y profesionales.',
  alternates: { canonical: '/es/tools/calculadora-tarifa-diaria/' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
