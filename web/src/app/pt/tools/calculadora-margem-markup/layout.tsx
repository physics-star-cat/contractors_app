import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Margem vs markup: orce sem perder dinheiro',
  description:
    'Compare margem e markup para qualquer porcentagem e nunca mais cobre menos por confundir os dois. Calculadora grátis para profissionais da construção.',
  alternates: { canonical: '/pt/tools/calculadora-margem-markup/' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
