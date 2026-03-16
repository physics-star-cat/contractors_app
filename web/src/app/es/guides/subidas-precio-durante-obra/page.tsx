import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Subidas de precio durante la obra 2026 // lowriskquotes',
  description:
    'Cómo protegerse de las subidas de precio de materiales durante una obra. Estrategias para contratistas en un mercado inestable.',
  alternates: { canonical: '/es/guides/subidas-precio-durante-obra/' },
}

export default function SubidasPrecioDuranteObraPage() {
  return (
    <div className="guide">
      <h1>subidas de precio durante la obra: cómo protegerte</h1>

      <p>
        Presentaste el presupuesto en enero, la obra empieza en marzo. Mientras tanto el acero
        ha subido un 15% y la madera un 20%. Tu presupuesto está desfasado, pero el cliente
        te exige el precio pactado. ¿Te suena?
      </p>
      <p>
        Los últimos años han demostrado que los precios de materiales de construcción pueden
        dispararse en semanas. El contratista que no se protege contra este riesgo puede
        perder todo su beneficio por una subida sobre la que no tenía control.
      </p>

      <h2>la magnitud del problema</h2>

      <ASCIIBox title="Ejemplos de subidas de precios 2024-2026">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Material</th>
              <th>Subida anual típica</th>
              <th>Impacto en presupuesto de € 60.000</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Acero y armaduras</td>
              <td>5 - 20%</td>
              <td className="guide__highlight">€ 750 - € 3.600</td>
            </tr>
            <tr>
              <td>Madera estructural</td>
              <td>8 - 25%</td>
              <td className="guide__highlight">€ 1.200 - € 4.500</td>
            </tr>
            <tr>
              <td>Cemento y hormigón</td>
              <td>5 - 12%</td>
              <td className="guide__highlight">€ 300 - € 1.400</td>
            </tr>
            <tr>
              <td>Aislamiento térmico</td>
              <td>3 - 10%</td>
              <td className="guide__highlight">€ 200 - € 900</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        En obras grandes que duran meses, una subida de materiales no cubierta puede costar
        € 3.000-10.000 de beneficio.
      </p>

      <h2>estrategias de protección</h2>

      <ul>
        <li>
          <strong>Cláusula de revisión de precios.</strong> Incluye en el contrato que los
          precios de materiales pueden variar si la subida supera un umbral (p.ej. 5%). Es
          práctica habitual en el sector y los clientes razonables lo aceptan.
        </li>
        <li>
          <strong>Validez corta del presupuesto.</strong> Presupuesto válido 14-30 días, no 90.
          A mayor validez, mayor riesgo de subidas.
        </li>
        <li>
          <strong>Comprar materiales con antelación.</strong> Si tienes la certeza de que la
          obra se ejecutará, encarga los materiales clave por adelantado y bloquea el precio.
          Requiere capital, pero elimina riesgo.
        </li>
        <li>
          <strong>Partidas de material por separado.</strong> En el presupuesto separa material
          de mano de obra. El material lo indicas como „a precios de almacén vigentes + X%".
          La mano de obra la cierras a precio fijo.
        </li>
      </ul>

      <h2>cómo incluirlo en el presupuesto</h2>

      <p>
        Las partidas de material con plazo de entrega largo márcalas como Medio o Alto riesgo.
        Los materiales comprados por adelantado son Coste seguro. La mano de obra de tu equipo
        habitual es Bajo riesgo. La calculadora ajustará la contingencia por partida.
      </p>

      <p>
        Recuerda: una conversación honesta con el cliente sobre el riesgo de subidas en la
        fase de oferta es mejor que una conversación difícil sobre sobrecostes a mitad de obra.
      </p>

      <div className="guide__cta">
        <Link href="/es/estimate/">[ CALCULA CON PROTECCIÓN ANTE SUBIDAS ]</Link>
      </div>
    </div>
  )
}
