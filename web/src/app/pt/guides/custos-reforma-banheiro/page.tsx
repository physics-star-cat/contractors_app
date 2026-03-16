import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Custos de reforma de banheiro Brasil 2026 // lowriskquotes',
  description:
    'Custos reais de reforma de banheiro para profissionais da construção no Brasil. Detalhamento item por item com níveis de risco para orçar suas obras sem perder dinheiro.',
  alternates: { canonical: '/pt/guides/custos-reforma-banheiro/' },
}

export default function CustosReformaBanheiroPage() {
  return (
    <div className="guide">
      <h1>custos de reforma de banheiro: o que o profissional precisa saber de verdade</h1>

      <p>
        O banheiro é o pão de cada dia de muitos profissionais da construção. Também é onde
        muito dinheiro fica na mesa. O escopo parece simples — demolição, hidráulica nova,
        revestimento, instalação. Mas os custos escondidos se acumulam rápido: vigas apodrecidas
        atrás do revestimento antigo, tubulação de ferro que precisa trocar, um cliente que muda
        o porcelanato três semanas depois do início.
      </p>
      <p>
        Esta página detalha os custos reais de reforma de banheiro em 2026 e mostra onde está
        o risco em cada item.
      </p>

      <h2>detalhamento típico de custos</h2>

      <p>
        Estes são os custos de reforma de banheiro de padrão médio para um banheiro típico no
        Brasil (cerca de 4 a 6 m²). Obras econômicas e de alto padrão ficarão abaixo e acima
        desses valores.
      </p>

      <ASCIIBox title="Detalhamento de custos — banheiro">
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
              <td>Demolição e retirada de entulho</td>
              <td>R$ 2.500 - R$ 5.000</td>
              <td className="guide__highlight">Médio</td>
              <td>Depende do que você encontra atrás das paredes</td>
            </tr>
            <tr>
              <td>Hidráulica</td>
              <td>R$ 5.000 - R$ 9.000</td>
              <td className="guide__highlight">Médio</td>
              <td>Mover pontos de água = mais caro. Manter posição = menos.</td>
            </tr>
            <tr>
              <td>Elétrica</td>
              <td>R$ 2.500 - R$ 5.000</td>
              <td className="guide__highlight">Baixo</td>
              <td>Padrão NBR 5410. Piso aquecido adiciona R$ 2.000+.</td>
            </tr>
            <tr>
              <td>Revestimento piso e parede</td>
              <td>R$ 7.500 - R$ 15.000</td>
              <td className="guide__highlight">Baixo - Médio</td>
              <td>Formato grande = mais cortes e perdas</td>
            </tr>
            <tr>
              <td>Louças e metais</td>
              <td>R$ 4.000 - R$ 12.500</td>
              <td className="guide__highlight">Médio</td>
              <td>Fornecimento pelo cliente = risco de atraso maior</td>
            </tr>
            <tr>
              <td>Box de vidro</td>
              <td>R$ 2.000 - R$ 11.000</td>
              <td className="guide__highlight">Alto</td>
              <td>Padrão de loja = Baixo. Vidro sob medida = Alto.</td>
            </tr>
            <tr>
              <td>Gesso / forro</td>
              <td>R$ 2.000 - R$ 4.000</td>
              <td className="guide__highlight">Baixo</td>
              <td>Simples, exceto se as paredes estiverem em mau estado</td>
            </tr>
            <tr>
              <td>Caçamba de entulho</td>
              <td>R$ 1.500 - R$ 2.500</td>
              <td className="guide__highlight">Certo</td>
              <td>Feche um preço fixo antecipadamente</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Faixa total para um banheiro de padrão médio: <span className="guide__highlight">R$ 27.000 -
        R$ 64.000</span>. Essa variação grande se deve principalmente às louças escolhidas pelo
        cliente e ao que se esconde atrás do revestimento antigo.
      </p>

      <h2>onde os banheiros estouram</h2>

      <p>
        Os maiores estouros de orçamento em banheiros vêm de três fontes:
      </p>
      <ul>
        <li>
          <strong>Danos ocultos.</strong> Vigas apodrecidas, umidade nas paredes, tubulação
          antiga de ferro que precisa ser substituída. Você só descobre quando demole. Se houver
          a menor chance de problema estrutural, marque esses itens em incerteza Alta.
        </li>
        <li>
          <strong>Mudanças do cliente.</strong> Viram algo no Instagram. O porcelanato que queriam
          está em falta. Querem mover o vaso para a outra parede. Cada mudança durante a obra
          custa tempo e dinheiro. Orce suas louças no mínimo em incerteza Média, a menos que o
          cliente já tenha comprado tudo.
        </li>
        <li>
          <strong>Itens sob medida.</strong> Box de vidro personalizado, bancadas fora do padrão,
          porcelanato importado com seis semanas de prazo. É território Alto ou Chute. Se é feito
          sob medida, parta do princípio de que algo não vai encaixar de primeira.
        </li>
      </ul>

      <h2>orçando banheiros com inteligência</h2>

      <p>
        Em vez de adicionar uma contingência fixa de 10% ao seu orçamento de banheiro, avalie
        cada item honestamente. A caçamba é Certa. Seu eletricista de confiança é Baixo. Aquele
        box sob medida de um vidraceiro novo é Alto. Passe tudo isso na simulação e você obtém
        um orçamento que cobre os riscos reais — não uma porcentagem inventada.
      </p>

      <div className="guide__cta">
        <Link href="/pt/estimate/">[ ORÇAR SEU BANHEIRO ]</Link>
      </div>
    </div>
  )
}
