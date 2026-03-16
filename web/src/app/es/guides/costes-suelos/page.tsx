import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Costes suelos España 2026 // lowriskquotes',
  description:
    'Precios reales de instalación de suelos por m² en España. Gres porcelánico, tarima, vinilo, microcemento — desglosados con evaluaciones de riesgo para profesionales.',
  alternates: { canonical: '/es/guides/costes-suelos/' },
}

export default function CostesSuelosPage() {
  return (
    <div className="guide">
      <h1>Costes de suelos: lo que los profesionales deben presupuestar por m²</h1>

      <p>
        Instalar suelos parece un trabajo predecible — medir, pedir material, colocar. Pero en
        la práctica surgen los imprevistos: solera desnivelada, mortero antiguo imposible de
        retirar, el cliente que cambia de despiece a mitad de obra. Todo esto se come el margen.
      </p>
      <p>
        Esta página le ofrece los costes reales de instalación de suelos en España en 2026 —
        por metro cuadrado, desglosados por tipo de pavimento, con evaluaciones de riesgo
        honestas.
      </p>

      <h2>costes típicos por metro cuadrado</h2>

      <p>
        Los precios siguientes incluyen material y colocación. La preparación del soporte y los
        rodapiés se indican por separado.
      </p>

      <ASCIIBox title="Costes de suelos por m²">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Tipo de suelo</th>
              <th>Coste / m²</th>
              <th>Nivel de riesgo</th>
              <th>Notas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Laminado</td>
              <td>€18 - €40</td>
              <td className="guide__highlight">Bajo</td>
              <td>Sistema clic. Instalación rápida, material más económico.</td>
            </tr>
            <tr>
              <td>Vinilo / SPC</td>
              <td>€22 - €50</td>
              <td className="guide__highlight">Bajo</td>
              <td>Clic o pegado. Apto para zonas húmedas. Soporte muy plano necesario.</td>
            </tr>
            <tr>
              <td>Gres porcelánico</td>
              <td>€35 - €85</td>
              <td className="guide__highlight">Medio</td>
              <td>Gran formato = más desperdicio. Colocación en diagonal más cara.</td>
            </tr>
            <tr>
              <td>Tarima flotante (multicapa)</td>
              <td>€40 - €80</td>
              <td className="guide__highlight">Bajo - Medio</td>
              <td>Instalación flotante. Respetar tiempo de aclimatación de la madera.</td>
            </tr>
            <tr>
              <td>Tarima maciza</td>
              <td>€70 - €140</td>
              <td className="guide__highlight">Medio - Alto</td>
              <td>Pegada. Lijado y barnizado = días de trabajo adicionales.</td>
            </tr>
            <tr>
              <td>Microcemento</td>
              <td>€60 - €150</td>
              <td className="guide__highlight">Alto</td>
              <td>Aplicación en varias capas. Muy sensible a las condiciones de obra.</td>
            </tr>
            <tr>
              <td>Piedra natural</td>
              <td>€70 - €180</td>
              <td className="guide__highlight">Alto</td>
              <td>Cada pieza diferente. Alto desperdicio, impermeabilización necesaria.</td>
            </tr>
            <tr>
              <td>Nivelación / preparación soporte</td>
              <td>€7 - €22</td>
              <td className="guide__highlight">Medio</td>
              <td>Autonivelante, imprimación. Estado real visible tras retirar el suelo antiguo.</td>
            </tr>
            <tr>
              <td>Rodapiés</td>
              <td>€4 - €12 / ml</td>
              <td className="guide__highlight">Bajo</td>
              <td>Material e instalación. Cortes a inglete más lentos con muchas esquinas.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Ejemplo: 55 m² de gres porcelánico en un salón cuestan <span className="guide__highlight">€1.925 -
        €4.675</span> en material y colocación, más €385 - €1.210 para nivelación y rodapiés.
      </p>

      <h2>dónde fallan los presupuestos de suelos</h2>

      <p>
        Las causas más frecuentes de sobrecoste:
      </p>
      <ul>
        <li>
          <strong>Sorpresas bajo el pavimento antiguo.</strong> Cola negra con amianto bajo el
          linóleo, solera fisurada, humedad residual excesiva — todo esto aparece solo cuando
          se retira el suelo existente. Presupueste siempre la preparación del soporte como
          Medio, salvo que ya conozca su estado.
        </li>
        <li>
          <strong>Cambios de despiece.</strong> El cliente decide a última hora que quiere
          espiga en lugar de junta corrida. Eso duplica el desperdicio y aumenta el tiempo de
          colocación un 30-50 %. Haga firmar el despiece antes de empezar.
        </li>
        <li>
          <strong>Puertas y umbrales.</strong> Recortar premarcos, ajustar perfiles de
          transición a distintos niveles, gestionar juntas de dilatación en espacios abiertos —
          detalles que se acumulan cuando hay quince puertas.
        </li>
      </ul>

      <h2>presupuestar suelos de forma inteligente</h2>

      <p>
        No presupueste toda la superficie de golpe. Evalúe cada estancia individualmente. El
        dormitorio con soporte conocido es Bajo. La cocina con baldosa antigua pegada es Medio.
        El salón con tarima maciza en espiga es Alto. Introduzca estos valores en una simulación
        de riesgo — obtendrá un presupuesto que refleja sus costes reales, no una estimación
        optimista.
      </p>

      <div className="guide__cta">
        <Link href="/es/estimate/">[ PRESUPUESTAR MI PROYECTO DE SUELOS ]</Link>
      </div>
    </div>
  )
}
