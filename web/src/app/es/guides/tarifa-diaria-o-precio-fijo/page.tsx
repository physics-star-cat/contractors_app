import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Tarifa diaria o precio fijo 2026 // lowriskquotes',
  description:
    'Cuándo cobrar por día y cuándo a precio cerrado. Comparación de modelos de facturación para contratistas.',
  alternates: { canonical: '/es/guides/tarifa-diaria-o-precio-fijo/' },
}

export default function TarifaDiariaOPrecioFijoPage() {
  return (
    <div className="guide">
      <h1>tarifa diaria o precio fijo: qué modelo de facturación elegir</h1>

      <p>
        „¿Cuánto cobras al día?" frente a „¿Cuánto cuesta todo?" — esta pregunta se repite
        en cada encargo. Ambos modelos tienen su sitio, pero elegir el modelo equivocado
        para el trabajo equivocado es el camino más corto para perder dinero o perder al
        cliente.
      </p>
      <p>
        La pregunta clave es: quién asume el riesgo. Con tarifa diaria el riesgo es del
        cliente. Con precio fijo — del contratista.
      </p>

      <h2>cuándo tiene sentido la tarifa diaria</h2>

      <ASCIIBox title="Tarifa diaria — ventajas y desventajas">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Ventajas</th>
              <th>Desventajas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cero riesgo para ti</td>
              <td>El cliente no conoce el coste final</td>
            </tr>
            <tr>
              <td>Flexibilidad ante cambios de alcance</td>
              <td>El cliente puede cuestionar tu ritmo de trabajo</td>
            </tr>
            <tr>
              <td>Ideal para trabajos difíciles de presupuestar</td>
              <td>Limita tus ingresos si trabajas rápido</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        La tarifa diaria funciona en: demoliciones con incógnitas, reparaciones tras siniestros,
        encargos pequeños de un día, trabajos cuyo alcance el cliente no puede definir.
        Tarifas diarias habituales en España en 2026: <span className="guide__highlight">
        € 250 - € 500/día</span> por oficial, según la especialidad y la comunidad autónoma.
      </p>

      <h2>cuándo el precio fijo es mejor</h2>

      <p>
        El precio cerrado funciona cuando:
      </p>
      <ul>
        <li>El alcance está claramente definido y es medible</li>
        <li>Has hecho el mismo trabajo muchas veces y conoces los costes reales</li>
        <li>El cliente quiere saber el precio final antes de empezar</li>
        <li>Eres eficiente y puedes ganar más que con la tarifa diaria</li>
      </ul>

      <p>
        Con precio cerrado, tu beneficio depende de la eficiencia. Un equipo que termina un
        baño en 7 días en vez de 10 gana más por día de trabajo. Pero si presupuestas mal —
        pierdes.
      </p>

      <h2>modelo híbrido</h2>

      <p>
        Muchos contratistas experimentados combinan ambos enfoques. Las partidas conocidas
        (alicatado, pintura, montaje) las presupuestan a precio cerrado. Las desconocidas
        (demolición, reparación de daños ocultos) — a tarifa diaria. Es justo para ambas
        partes y elimina el riesgo de infravaloración.
      </p>

      <h2>cómo calcularlo</h2>

      <p>
        Introduce las partidas a precio cerrado con su nivel de riesgo. Las partidas por
        tarifa diaria márcalas como Coste seguro (la tarifa diaria es conocida). La
        calculadora mostrará el rango total con contingencia en las partidas de riesgo.
      </p>

      <div className="guide__cta">
        <Link href="/es/estimate/">[ COMPARA MODELOS DE FACTURACIÓN ]</Link>
      </div>
    </div>
  )
}
