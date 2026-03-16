import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Custos de reforma de cozinha Brasil 2026 // lowriskquotes',
  description:
    'Custos reais de reforma de cozinha para profissionais da construção no Brasil. Detalhamento completo item por item com níveis de risco para orçar suas cozinhas com precisão.',
  alternates: { canonical: '/pt/guides/custos-reforma-cozinha/' },
}

export default function CustosReformaCozinhaPage() {
  return (
    <div className="guide">
      <h1>custos de reforma de cozinha: o detalhamento do profissional</h1>

      <p>
        Cozinhas são obras de alto valor com muitas especialidades envolvidas. Hidráulica,
        elétrica, gás, marcenaria, bancadas, revestimento, piso, eletrodomésticos — a coordenação
        sozinha pode comer sua margem se você não orçou corretamente. Veja quanto custam realmente
        as cozinhas no Brasil em 2026 e onde se escondem os riscos.
      </p>

      <h2>detalhamento típico de custos</h2>

      <p>
        Reforma de cozinha de padrão médio para uma casa típica no Brasil. Isso considera uma
        demolição completa e refeita, não apenas a troca de portas de armário.
      </p>

      <ASCIIBox title="Detalhamento de custos — cozinha">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Faixa de preço</th>
              <th>Nível de risco</th>
              <th>Observações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Demolição e retirada</td>
              <td>R$ 3.000 - R$ 6.000</td>
              <td className="guide__highlight">Baixo</td>
              <td>Previsível, exceto se houver amianto</td>
            </tr>
            <tr>
              <td>Armários (fornecimento e instalação)</td>
              <td>R$ 20.000 - R$ 60.000</td>
              <td className="guide__highlight">Médio</td>
              <td>Modulado padrão = Baixo. Marcenaria sob medida = Alto.</td>
            </tr>
            <tr>
              <td>Bancadas</td>
              <td>R$ 5.000 - R$ 22.500</td>
              <td className="guide__highlight">Médio - Alto</td>
              <td>Granito sintético = Baixo. Quartzo/granito natural moldado = Alto.</td>
            </tr>
            <tr>
              <td>Hidráulica</td>
              <td>R$ 4.000 - R$ 7.500</td>
              <td className="guide__highlight">Médio</td>
              <td>Mover a pia = mais custo e risco</td>
            </tr>
            <tr>
              <td>Elétrica</td>
              <td>R$ 5.000 - R$ 10.000</td>
              <td className="guide__highlight">Médio</td>
              <td>Adequação NBR 5410 ou refazer completo</td>
            </tr>
            <tr>
              <td>Gás (fogão/cooktop, aquecedor)</td>
              <td>R$ 2.000 - R$ 5.000</td>
              <td className="guide__highlight">Baixo</td>
              <td>Gasista credenciado. Simples se não mudar posição.</td>
            </tr>
            <tr>
              <td>Revestimento (parede e piso)</td>
              <td>R$ 5.000 - R$ 12.500</td>
              <td className="guide__highlight">Baixo</td>
              <td>Subway tile padrão = certo. Padrões complexos = Médio.</td>
            </tr>
            <tr>
              <td>Piso</td>
              <td>R$ 2.500 - R$ 7.500</td>
              <td className="guide__highlight">Baixo</td>
              <td>Porcelanato ou vinílico. Preparação do contrapiso pode acrescentar custo.</td>
            </tr>
            <tr>
              <td>Gesso e pintura</td>
              <td>R$ 2.500 - R$ 5.000</td>
              <td className="guide__highlight">Baixo</td>
              <td>Simples. Cozinhas antigas podem precisar de mais preparação.</td>
            </tr>
            <tr>
              <td>Eletrodomésticos</td>
              <td>R$ 7.500 - R$ 25.000</td>
              <td className="guide__highlight">Certo - Baixo</td>
              <td>Geralmente comprado pelo cliente. Confirme antes de orçar.</td>
            </tr>
            <tr>
              <td>Caçamba / entulho</td>
              <td>R$ 1.750 - R$ 3.000</td>
              <td className="guide__highlight">Certo</td>
              <td>Preço fixo, reserve antecipadamente</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Faixa total para uma cozinha de padrão médio: <span className="guide__highlight">R$ 58.250 -
        R$ 164.000</span>. A variação enorme se explica pela qualidade dos armários, o material da
        bancada e a extensão das mudanças de layout.
      </p>

      <h2>onde as cozinhas estouram orçamentos</h2>

      <ul>
        <li>
          <strong>As bancadas.</strong> Bancadas de pedra natural são medidas após a instalação
          dos armários e fabricadas fora do local. Se a medição estiver errada ou a pedra tiver
          defeito, você espera semanas pela reposição. Marque bancadas sob medida em incerteza Alta.
        </li>
        <li>
          <strong>As mudanças de layout.</strong> Mover a pia implica mover esgoto e água. Mover
          o fogão implica mover gás e exaustão. Cada mudança é um subempreiteiro a mais, um dia a
          mais, um ponto de falha a mais. Se o cliente quer mudar tudo, suas estimativas de
          hidráulica e elétrica devem ser no mínimo Médio.
        </li>
        <li>
          <strong>Os prazos de entrega.</strong> Armários sob medida, bancadas de pedra e
          eletrodomésticos específicos podem levar 4 a 8 semanas. Se um item atrasa, todo seu
          cronograma muda. Inclua o risco de tempo parado no orçamento ou garanta que o cliente
          entenda que atrasos são por conta dele.
        </li>
        <li>
          <strong>O escopo que cresce.</strong> &quot;Já que você está aqui, dá para mover esse
          registro?&quot; &quot;Na verdade, dá para refazer o gesso de toda a sala?&quot; Cozinhas
          atraem aumento de escopo porque os clientes veem a obra e querem fazer tudo de uma vez.
          Tenha um escopo claro por escrito antes de começar.
        </li>
      </ul>

      <h2>orçando cozinhas com confiança</h2>

      <p>
        Uma cozinha com armários modulados padrão, bancada de granito sintético e nenhuma mudança
        de layout é uma obra essencialmente de incerteza Baixa. Você pode orçar perto da
        estimativa base. Uma cozinha com marcenaria sob medida, bancada de quartzo e reformulação
        completa do layout está repleta de itens de incerteza Alta. Sua contingência deve
        refletir isso.
      </p>
      <p>
        Avalie cada item honestamente, execute a simulação e orce no P80. Seu orçamento será
        mais alto em obras arriscadas e mais apertado em obras simples — é exatamente assim que
        deve funcionar.
      </p>

      <div className="guide__cta">
        <Link href="/pt/estimate/">[ ORÇAR SUA COZINHA ]</Link>
      </div>
    </div>
  )
}
