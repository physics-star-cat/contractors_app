import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Calculadora margen vs recargo: presupuesta sin perder dinero',
  description:
    'Compara margen y recargo para cualquier porcentaje y no vuelvas a cobrar de menos por confundirlos. Calculadora gratuita para contratistas.',
  alternates: { canonical: '/es/tools/calculadora-margen-recargo/' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
