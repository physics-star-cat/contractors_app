import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Como fazer um orçamento de obra // lowriskquotes',
  description:
    'Guia prático para orçar suas obras com precisão. Descubra por que profissionais subestimam seus orçamentos, como avaliar o risco em cada item e como a simulação Monte Carlo constrói orçamentos mais seguros.',
  alternates: { canonical: '/pt/guides/como-fazer-orcamento/' },
}

export default function ComoFazerOrcamentoPage() {
  return (
    <div className="guide">
      <h1>como fazer um orçamento de obra (sem perder dinheiro)</h1>

      <p>
        A maioria dos profissionais da construção já perdeu dinheiro em uma obra. Não porque
        trabalharam mal — porque orçaram mal. Fizeram o preço pensando no melhor cenário,
        fecharam o contrato e assistiram sua margem derreter quando a realidade se impôs.
      </p>
      <p>
        Este guia explica por que isso acontece e como resolver com um método que leva apenas
        cinco minutos a mais do que sua abordagem habitual.
      </p>

      <h2>por que profissionais subestimam seus orçamentos</h2>

      <p>
        Três forças empurram cada orçamento para baixo:
      </p>

      <p>
        <strong className="guide__highlight">O viés de otimismo.</strong> Você imagina a obra
        acontecendo sem problemas. O reboco sai limpo. As vigas estão inteiras. O fornecedor
        entrega no prazo. Você orça para a versão da obra onde nada dá errado — mas essa versão
        quase nunca acontece.
      </p>
      <p>
        <strong className="guide__highlight">A pressão competitiva.</strong> Você sabe que o
        cliente pediu três orçamentos. Então você corta custos, arredonda para baixo, aperta os
        preços. Seu orçamento fica apertado. Apertado demais. Você fecha a obra mas perde o lucro.
      </p>
      <p>
        <strong className="guide__highlight">As estimativas pontuais.</strong> Você anota um
        único número para cada item: revestimento R$ 12.000. Isso não é uma estimativa. É um
        chute disfarçado de fato. Os custos reais são faixas. O revestimento pode custar
        R$ 10.500 se seu fornecedor habitual tiver estoque, ou R$ 14.500 se não tiver e você
        comprar de outro.
      </p>

      <h2>os cinco níveis de incerteza</h2>

      <p>
        Cada item do seu orçamento não carrega o mesmo risco. Uma caçamba de entulho do locador
        que você usa há dez anos não é a mesma coisa que um box de vidro sob medida de um
        vidraceiro encontrado na semana passada. Tratá-los da mesma forma é o erro fundamental
        da porcentagem fixa de contingência.
      </p>
      <p>
        O LowRiskQuotes usa cinco níveis de incerteza. Veja o que cada um significa na prática:
      </p>

      <ASCIIBox title="Níveis de incerteza">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Nível</th>
              <th>Faixa</th>
              <th>Exemplo prático</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="guide__highlight">Certo</td>
              <td>+/- 2%</td>
              <td>Caçamba de entulho, orçamento escrito de fornecedor a preço fixo</td>
            </tr>
            <tr>
              <td className="guide__highlight">Baixo</td>
              <td>+/- 8%</td>
              <td>Materiais do seu fornecedor habitual, ferragens padrão</td>
            </tr>
            <tr>
              <td className="guide__highlight">Médio</td>
              <td>+/- 15%</td>
              <td>Subempreiteiro com quem já trabalhou mas não recentemente</td>
            </tr>
            <tr>
              <td className="guide__highlight">Alto</td>
              <td>+/- 25%</td>
              <td>Novo subempreiteiro, materiais especiais, incógnitas da obra</td>
            </tr>
            <tr>
              <td className="guide__highlight">Chute</td>
              <td>+/- 40%</td>
              <td>Sem visita técnica, escopo desconhecido, &quot;deve ser mais ou menos...&quot;</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        A pergunta chave para cada item é: <em>quão confiante estou de que esse número está
        certo?</em> Não quão confiante você quer estar. Quão confiante você realmente está,
        com base em evidências. Tem um orçamento escrito? É Certo. Está estimando a partir de
        uma obra feita há dois anos em outro estado? É Alto, no mínimo.
      </p>

      <h2>exemplo prático: reforma de banheiro</h2>

      <p>
        Vamos usar um orçamento real. Dona Maria quer reformar o banheiro — demolição,
        revestimento novo, louças novas, box sob medida, hidráulica, elétrica e retirada de
        entulho. Sua estimativa base é de R$ 38.500.
      </p>

      <ASCIIBox title="Itens de custo">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Estimativa</th>
              <th>Nível</th>
              <th>Por quê</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Revestimento piso e parede</td>
              <td>R$ 12.000</td>
              <td className="guide__highlight">Baixo</td>
              <td>Seu fornecedor habitual, já orçou material similar</td>
            </tr>
            <tr>
              <td>Louças (pia, vaso, metais)</td>
              <td>R$ 5.000</td>
              <td className="guide__highlight">Médio</td>
              <td>Cliente escolheu linha intermediária mas não finalizou</td>
            </tr>
            <tr>
              <td>Box de vidro sob medida</td>
              <td>R$ 9.000</td>
              <td className="guide__highlight">Alto</td>
              <td>Vidraceiro novo, medidas fora do padrão, nunca comprou dele</td>
            </tr>
            <tr>
              <td>Hidráulica (subempreiteiro)</td>
              <td>R$ 7.000</td>
              <td className="guide__highlight">Médio</td>
              <td>João é confiável mas ainda não orçou esta obra</td>
            </tr>
            <tr>
              <td>Eletricista</td>
              <td>R$ 3.750</td>
              <td className="guide__highlight">Baixo</td>
              <td>Elétrica padrão de banheiro, seu eletricista de sempre</td>
            </tr>
            <tr>
              <td>Caçamba de entulho</td>
              <td>R$ 1.750</td>
              <td className="guide__highlight">Certo</td>
              <td>Preço fixo da locadora habitual</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Se você orçou R$ 38.500 sem margem, está orçando para o cenário onde cada item cai
        exatamente na estimativa. É o resultado mais improvável. É como apostar que seis moedas
        cairão todas em cara.
      </p>
      <p>
        Passe esses números na simulação Monte Carlo e você obtém uma distribuição. A simulação
        executa milhares de versões desta obra, sorteando custos dentro da faixa de incerteza
        que você definiu. Como estouros são mais frequentes que economias, a simulação é
        enviesada para cima — exatamente como na realidade.
      </p>

      <ASCIIBox title="Resultado da simulação">
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          Estimativa base: <span className="guide__highlight">R$ 38.500</span>
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          P50 (cara ou coroa): <span className="guide__highlight">R$ 40.450</span>
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          P80 (orçamento recomendado): <span className="guide__highlight">R$ 43.200</span>
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
          P95 (margem de segurança máxima): <span className="guide__highlight">R$ 47.050</span>
        </p>
      </ASCIIBox>

      <p>
        A diferença entre R$ 38.500 e R$ 43.200 é de R$ 4.700 — cerca de 12%. Mas não é uma
        contingência fixa de 12%. É um colchão calculado em função dos riscos específicos desta
        obra. Uma obra com itens todos de risco Baixo precisaria de menos. Uma obra cheia de
        chutes precisaria de muito mais.
      </p>

      <h2>lendo os resultados: o que significa a curva de distribuição</h2>

      <p>
        A simulação gera uma distribuição de probabilidade — uma curva mostrando a probabilidade
        de cada custo total. Veja como interpretar:
      </p>
      <ul>
        <li>
          <strong className="guide__highlight">P50</strong> significa que há 50% de chance de que
          o custo real fique abaixo desse valor. É cara ou coroa. Não é um orçamento seguro.
        </li>
        <li>
          <strong className="guide__highlight">P80</strong> significa 80% de chance de que o custo
          real fique abaixo. É o ponto ideal para a maioria dos profissionais. Você está protegido
          contra a maioria dos estouros sem se excluir do mercado.
        </li>
        <li>
          <strong className="guide__highlight">P95</strong> significa 95% de chance. É o número
          para &quot;dormir tranquilo&quot;. Use para contratos a preço fixo ou clientes que não
          aceitarão nenhuma variação.
        </li>
      </ul>
      <p>
        O percentil em que você orça depende da obra e do cliente. Uma obra por administração
        com um bom cliente? P50 pode bastar. Uma cozinha a preço fechado para um cliente que vai
        cobrar cada centavo? Orce no P80 ou P95 e se proteja.
      </p>

      <h2>erros comuns de orçamento</h2>

      <p>
        Depois de passar milhares de orçamentos pelo simulador, padrões surgem. Estes são os
        erros que mais custam caro:
      </p>

      <ol>
        <li>
          <strong>Marcar tudo como incerteza Baixa.</strong> Se você não tem um orçamento escrito,
          não é Baixo. Se nunca fez exatamente esse serviço, não é Baixo. Seja honesto consigo.
        </li>
        <li>
          <strong>Esquecer custos de deslocamento e tempo.</strong> Duas horas de estrada por dia
          a R$ 175/hora durante três semanas são R$ 5.250. É dinheiro real. Orce isso.
        </li>
        <li>
          <strong>Não orçar atrasos.</strong> Chuva, entregas atrasadas, mudanças do cliente. Não
          são eventos raros. É o normal. Sua estimativa de duração da obra também precisa do seu
          próprio nível de incerteza.
        </li>
        <li>
          <strong>Usar preços do ano passado.</strong> Custos de materiais mudam. Aço subiu.
          Cimento subiu. Se seus preços têm seis meses, estão errados.
        </li>
        <li>
          <strong>Orçar para ganhar a obra em vez de orçar para ganhar dinheiro.</strong> Uma obra
          que você fecha no preço errado é pior que uma obra que não fecha. O pior resultado não é
          perder a concorrência. É ganhá-la e trabalhar de graça.
        </li>
      </ol>

      <h2>juntando tudo</h2>

      <p>
        Aqui está o método. Ele acrescenta cerca de cinco minutos ao seu processo de orçamento:
      </p>
      <ol>
        <li>Liste cada item como faz normalmente.</li>
        <li>Para cada um, pergunte-se: quão confiante estou nesse número? Atribua um nível.</li>
        <li>Adicione sua diária, a duração da obra e os deslocamentos.</li>
        <li>Execute a simulação.</li>
        <li>Orce no P80 para a maioria das obras. Ajuste para cima ou para baixo conforme o tipo de contrato.</li>
      </ol>
      <p>
        Você não está adicionando uma contingência inventada. Está construindo um orçamento que
        reflete o perfil de risco real da obra real. É a diferença entre esperar ganhar dinheiro
        e saber que vai ganhar.
      </p>

      <div className="guide__cta">
        <Link href="/pt/estimate/">[ CRIAR SEU ORÇAMENTO ]</Link>
      </div>
    </div>
  )
}
