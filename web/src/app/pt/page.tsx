import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIILogo from '@/components/layout/ASCIILogo'
import ASCIIBox from '@/components/ui/ASCIIBox'
import RecentEstimates from '@/components/home/RecentEstimates'
import '../page.css'

export const metadata: Metadata = {
  title: 'lowriskquotes // estimativa de custos para profissionais da construção',
  description: 'Projeções de custos Monte Carlo para profissionais da construção civil. Pare de adivinhar seus orçamentos — simule milhares de cenários para encontrar o preço certo.',
  alternates: { canonical: '/pt/' },
}

const SAMPLE_OUTPUT = `┌────────────────┬──────────────┐
│ Conservador    │ R$ 49.500    │
│ Recomendado    │ R$ 59.200    │
│ Prudente       │ R$ 68.700    │
└────────────────┴──────────────┘

ANÁLISE DE RISCOS
Materiais      [██████░░░░░░░░░░░░░░] 30%
Duração        [█████████░░░░░░░░░░░] 45%
Deslocamentos  [███░░░░░░░░░░░░░░░░░] 15%`

export default function PtHomePage() {
  return (
    <div className="home">
      <section className="home__hero">
        <ASCIILogo />
        <p className="home__tagline">pare de adivinhar // comece a simular</p>
        <p className="home__subtitle">projeções de custos Monte Carlo para profissionais da construção</p>
      </section>

      <section className="home__how-it-works">
        <ASCIIBox title="Como funciona">
          <div className="home__steps">
            <div className="home__step"><span className="home__step-num">[1]</span> Insira seus itens, duração e deslocamentos com os níveis de incerteza</div>
            <div className="home__step"><span className="home__step-num">[2]</span> A simulação Monte Carlo calcula 10.000 cenários de custos</div>
            <div className="home__step"><span className="home__step-num">[3]</span> Obtenha um orçamento estatisticamente seguro — não um chute</div>
          </div>
        </ASCIIBox>
      </section>

      <section className="home__preview">
        <ASCIIBox title="Exemplo de resultado">
          <pre className="home__sample">{SAMPLE_OUTPUT}</pre>
        </ASCIIBox>
      </section>

      <RecentEstimates />

      <section className="home__cta">
        <Link href="/pt/estimate/" className="home__cta-button">[CRIAR UM ORÇAMENTO]</Link>
      </section>

      <section className="home__seo">
        <p>
          LowRiskQuotes utiliza simulação Monte Carlo para ajudar profissionais da construção civil
          a criar orçamentos que consideram a incerteza real. Em vez de adicionar uma porcentagem
          fixa de contingência, simule milhares de cenários de custos para encontrar o preço com o
          qual você tem muito pouca chance de perder dinheiro.
        </p>
        <p>
          Funciona offline. Nenhuma conta necessária. Seus dados nunca saem do seu navegador.
        </p>
      </section>
    </div>
  )
}
