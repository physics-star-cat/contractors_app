import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'

export const metadata: Metadata = {
  title: 'sobre // lowriskquotes',
  description: 'Como o LowRiskQuotes usa simulação Monte Carlo para ajudar profissionais da construção a criar orçamentos mais seguros.',
  alternates: { canonical: '/pt/about/' },
}

export default function PtAboutPage() {
  return (
    <div>
      <h1 style={{ color: 'var(--accent-amber)', fontSize: '20px', marginBottom: '24px' }}>
        sobre o lowriskquotes
      </h1>

      <ASCIIBox title="O que é">
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '12px' }}>
          LowRiskQuotes é uma ferramenta gratuita de estimativa de custos para pedreiros, mestres
          de obras, empreiteiros e qualquer profissional que precise orçar uma obra sem subestimar
          o preço.
        </p>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
          Em vez de adicionar uma porcentagem fixa de contingência ao seu orçamento, o LowRiskQuotes
          executa uma simulação Monte Carlo — milhares de cenários de custos randomizados com base
          nos níveis de incerteza que você atribui a cada item, à duração da obra e aos seus
          deslocamentos. O resultado é uma distribuição de probabilidade mostrando quanto sua obra
          realmente pode custar.
        </p>
      </ASCIIBox>

      <ASCIIBox title="Como funciona o Monte Carlo">
        <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
          <p style={{ marginBottom: '12px' }}>
            Para cada item do seu orçamento, você indica o nível de incerteza sobre o custo
            (de &quot;certo&quot; com +/-2% até &quot;chute&quot; com +/-40%). O mesmo princípio se
            aplica à duração da obra e ao tempo de deslocamento.
          </p>
          <p style={{ marginBottom: '12px' }}>
            O motor então executa 1.000 a 10.000 versões simuladas do seu projeto, cada uma com
            custos randomizados dentro das suas faixas de incerteza. As simulações são enviesadas
            para cima — porque na realidade, obras estouram o orçamento com mais frequência do que
            ficam abaixo.
          </p>
          <p>
            O resultado indica: no percentil 80 (nosso nível de orçamento recomendado), há 80%
            de chance de que seus custos reais fiquem abaixo desse valor. É uma base muito mais
            segura para um orçamento do que uma intuição acrescida de 10%.
          </p>
        </div>
      </ASCIIBox>

      <ASCIIBox title="Seus dados">
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
          Tudo funciona no seu navegador. Seus orçamentos são salvos apenas no seu dispositivo
          (localStorage). Nenhum dado é enviado a um servidor. Nenhuma conta necessária. Nenhum
          rastreamento além das estatísticas básicas.
        </p>
      </ASCIIBox>

      <div style={{ marginTop: '24px', fontSize: '13px' }}>
        <Link href="/pt/guides/como-fazer-orcamento/" style={{ marginRight: '16px' }}>
          [LER O GUIA]
        </Link>
        <Link href="/pt/estimate/">
          [COMEÇAR]
        </Link>
      </div>
    </div>
  )
}
