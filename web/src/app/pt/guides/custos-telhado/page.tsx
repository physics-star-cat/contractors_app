import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Custos de telhado Brasil 2026 // lowriskquotes',
  description:
    'Custos reais de telhado para profissionais no Brasil. Reforma completa, telhado embutido, reparos e calhas — com níveis de risco para orçar sem se queimar.',
  alternates: { canonical: '/pt/guides/custos-telhado/' },
}

export default function CustosTelhadoPage() {
  return (
    <div className="guide">
      <h1>custos de telhado: orçando uma obra que você não vê até subir</h1>

      <p>
        Telhado é por natureza uma área de alto risco para orçamento. Você faz o preço do chão
        e descobre os problemas lá em cima. Ripas apodrecidas, caibros cedidos, manta asfáltica
        que se desintegra ao toque. O andaime está montado, o relógio está correndo, e cada
        surpresa custa dinheiro.
      </p>
      <p>
        Esta página detalha quanto custam realmente os serviços de telhado no Brasil em 2026
        e onde se esconde a incerteza em cada item.
      </p>

      <h2>faixas de preço por tipo de serviço</h2>

      <p>
        Preços indicativos para serviços comuns de telhado em uma casa padrão. Os custos reais
        dependem da inclinação, acessibilidade, escolha dos materiais e do que você encontra
        quando remove a cobertura antiga.
      </p>

      <ASCIIBox title="Custos por tipo de serviço — telhado">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Tipo de serviço</th>
              <th>Custo típico</th>
              <th>Duração</th>
              <th>Observações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Reforma completa (telha cerâmica)</td>
              <td>R$ 40.000 - R$ 90.000</td>
              <td>5-12 dias</td>
              <td>Remoção e recolocação. Preço varia conforme estado da estrutura.</td>
            </tr>
            <tr>
              <td>Telhado embutido (platibanda)</td>
              <td>R$ 12.500 - R$ 30.000</td>
              <td>2-5 dias</td>
              <td>Por seção de 20 m². O estado da laje é a incógnita.</td>
            </tr>
            <tr>
              <td>Reparo de telhado</td>
              <td>R$ 1.500 - R$ 10.000</td>
              <td>0,5-2 dias</td>
              <td>De telhas soltas a reparos de cumeeira. Faixa ampla.</td>
            </tr>
            <tr>
              <td>Calhas e rufos</td>
              <td>R$ 7.500 - R$ 20.000</td>
              <td>2-3 dias</td>
              <td>Substituição em aço galvanizado ou PVC. Madeiramento podre = custo extra.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <h2>exemplo prático: reforma completa em casa de alvenaria</h2>

      <p>
        Casa dos anos 1990 em São Paulo. Telha de concreto original. Manta impermeabilizante
        deteriorada, algumas ripas suspeitas. Área de telhado aproximadamente 90 m². O cliente
        quer telha cerâmica e cumeeira selada.
      </p>

      <ASCIIBox title="Detalhamento de custos — reforma de telhado">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Faixa</th>
              <th>Nível de risco</th>
              <th>Observações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Andaime</td>
              <td>R$ 6.000 - R$ 10.000</td>
              <td className="guide__highlight">Baixo</td>
              <td>Peça orçamento fechado. Atraso na obra = locação mais longa.</td>
            </tr>
            <tr>
              <td>Remoção telhas e manta existentes</td>
              <td>R$ 4.000 - R$ 7.000</td>
              <td className="guide__highlight">Baixo</td>
              <td>Mão de obra previsível. Pregos antigos e argamassa atrasam.</td>
            </tr>
            <tr>
              <td>Troca de ripas</td>
              <td>R$ 3.000 - R$ 6.000</td>
              <td className="guide__highlight">Médio</td>
              <td>Ripamento completo padrão. As podres quebram na desmontagem.</td>
            </tr>
            <tr>
              <td>Manta impermeabilizante</td>
              <td>R$ 2.500 - R$ 4.000</td>
              <td className="guide__highlight">Baixo</td>
              <td>Custo de material estável. Instalação inclusa na cobertura.</td>
            </tr>
            <tr>
              <td>Reparos na estrutura (caibros/terças)</td>
              <td>R$ 0 - R$ 15.000</td>
              <td className="guide__highlight">Alto</td>
              <td>A grande incógnita. Pode ser zero. Pode ser oito caibros.</td>
            </tr>
            <tr>
              <td>Telha cerâmica (fornecimento)</td>
              <td>R$ 10.000 - R$ 17.500</td>
              <td className="guide__highlight">Médio</td>
              <td>Telha romana ~R$ 2,50/peça. Telha de concreto plana 2-3x mais caro.</td>
            </tr>
            <tr>
              <td>Mão de obra (instalação)</td>
              <td>R$ 9.000 - R$ 15.000</td>
              <td className="guide__highlight">Baixo</td>
              <td>Sua equipe. Chuva é a principal variável.</td>
            </tr>
            <tr>
              <td>Cumeeira e acabamentos</td>
              <td>R$ 2.000 - R$ 4.000</td>
              <td className="guide__highlight">Baixo</td>
              <td>Fixação mecânica. Mais rápido que argamassa.</td>
            </tr>
            <tr>
              <td>Rufos e calhas</td>
              <td>R$ 3.000 - R$ 7.000</td>
              <td className="guide__highlight">Médio</td>
              <td>Aço galvanizado oscila de preço. Verifique cotações antes de orçar.</td>
            </tr>
            <tr>
              <td>Caçamba e descarte de resíduos</td>
              <td>R$ 2.500 - R$ 4.500</td>
              <td className="guide__highlight">Baixo</td>
              <td>Telhas antigas são pesadas. Conte pelo menos duas caçambas.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Faixa total para uma reforma completa: <span className="guide__highlight">R$ 42.000 -
        R$ 90.000</span>. Essa diferença de R$ 48.000 não é aproximação — é incerteza real. O
        item de reparo estrutural sozinho pode variar a obra em R$ 15.000. Todo o resto é
        razoavelmente previsível se você conhece seus preços de fornecedores e o ritmo da sua equipe.
      </p>

      <h2>onde obras de telhado estouram</h2>

      <p>
        Quatro fatores de risco dominam os orçamentos de telhado:
      </p>
      <ul>
        <li>
          <strong>A estrutura oculta.</strong> Você não consegue ver o estado dos caibros do chão.
          Uma inspeção por drone ou pelo sótão ajuda, mas você só vai saber com certeza quando as
          telhas forem removidas. Se o telhado é anterior a 1995 e nunca foi mexido, preveja pelo
          menos algum reparo estrutural e marque como Alto.
        </li>
        <li>
          <strong>O andaime.</strong> O andaime em si é previsível. O risco é a duração. Se chuva
          ou reparos estruturais acrescentam três dias à obra, você paga uma semana extra de
          locação. Inclua isso no item andaime.
        </li>
        <li>
          <strong>As janelas de tempo bom.</strong> Um telhado aberto não pode ficar exposto à
          chuva a noite toda. Você precisa de uma janela de tempo bom realista para a etapa de
          remoção e impermeabilização. No inverno do sul, essa janela é mais curta. Orce
          considerando isso ou aceite o risco.
        </li>
        <li>
          <strong>A volatilidade dos preços de materiais.</strong> Aço, madeira e telhas sofreram
          variações bruscas nos últimos anos. Um orçamento que fica oito semanas esperando
          aprovação pode precisar de atualização de preços. Coloque data de validade nos seus
          orçamentos — 30 dias no máximo.
        </li>
      </ul>

      <h2>orçando telhados com inteligência</h2>

      <p>
        Andaime, manta e sua mão de obra são todos de incerteza Baixa. Você conhece esses
        números. Reparos estruturais e rufos são onde o risco se esconde. Em vez de inflar cada
        item com uma contingência fixa, avalie os itens arriscados honestamente e simule a faixa.
        Seu orçamento mostra então ao cliente uma faixa realista — e protege sua margem nos itens
        que realmente estouram.
      </p>

      <div className="guide__cta">
        <Link href="/pt/estimate/">[ ORÇAR SEU TELHADO ]</Link>
      </div>
    </div>
  )
}
