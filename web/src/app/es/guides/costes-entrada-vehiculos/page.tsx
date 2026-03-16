import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Costes entrada de vehículos 2026 // lowriskquotes',
  description:
    'Cuánto cuesta una entrada de vehículos en España. Adoquín, hormigón, asfalto — precios reales con evaluación de riesgo.',
  alternates: { canonical: '/es/guides/costes-entrada-vehiculos/' },
}

export default function CostesEntradaVehiculosPage() {
  return (
    <div className="guide">
      <h1>costes de entrada de vehículos: adoquín, hormigón y asfalto en 2026</h1>

      <p>
        Las entradas de vehículos parecen trabajos sencillos y repetitivos. Dimensiones
        conocidas, material elegido, trabajo al exterior. Pero el terreno debajo puede
        convertir un encargo rentable en un problema — sobre todo cuando hay que cambiar
        la base, drenar agua o mover una arqueta.
      </p>
      <p>
        A continuación, los costes reales de ejecución de una entrada de vehículos en
        España en 2026.
      </p>

      <h2>desglose típico de costes</h2>

      <p>
        Costes para una entrada estándar de 25-45 m².
      </p>

      <ASCIIBox title="Desglose de costes de entrada">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Partida</th>
              <th>Rango de costes</th>
              <th>Nivel de riesgo</th>
              <th>Notas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Demolición entrada antigua</td>
              <td>€ 1.200 - € 3.500</td>
              <td className="guide__highlight">Medio</td>
              <td>El espesor del pavimento viejo varía</td>
            </tr>
            <tr>
              <td>Excavación y sub-base</td>
              <td>€ 2.500 - € 8.000</td>
              <td className="guide__highlight">Alto</td>
              <td>Terreno malo = excavación más profunda + geotextil</td>
            </tr>
            <tr>
              <td>Adoquín (material + colocación)</td>
              <td>€ 4.500 - € 14.000</td>
              <td className="guide__highlight">Bajo</td>
              <td>Patrones estándar = predecible</td>
            </tr>
            <tr>
              <td>Bordillos y contenciones</td>
              <td>€ 800 - € 2.500</td>
              <td className="guide__highlight">Seguro</td>
              <td>Medible de antemano</td>
            </tr>
            <tr>
              <td>Drenaje</td>
              <td>€ 1.200 - € 4.000</td>
              <td className="guide__highlight">Medio</td>
              <td>Canal lineal o sumidero — depende de la pendiente</td>
            </tr>
            <tr>
              <td>Puerta de acceso (opcional)</td>
              <td>€ 2.500 - € 10.000</td>
              <td className="guide__highlight">Medio</td>
              <td>La automatización sube coste y riesgo</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Rango total (sin puerta): <span className="guide__highlight">€ 10.200 - € 32.000</span>.
        La principal incógnita es el terreno — un buen suelo ahorra días de trabajo.
      </p>

      <h2>trampas más frecuentes</h2>

      <ul>
        <li>
          <strong>Terreno y agua.</strong> Suelos arcillosos retienen agua y necesitan una
          sub-base más gruesa. Si no conoces la parcela, marca la excavación como Alto riesgo.
        </li>
        <li>
          <strong>Instalaciones ocultas.</strong> Tuberías de agua, cables eléctricos, arquetas
          de saneamiento bajo el pavimento viejo. Siempre pedir planos de servicios.
        </li>
        <li>
          <strong>Clima.</strong> Trabajos exteriores en zonas con lluvia frecuente o heladas
          se retrasan. El hormigón y el adoquín no se colocan bien con agua. Incluye un
          margen temporal.
        </li>
      </ul>

      <h2>presupuesto sin riesgo</h2>

      <p>
        Mide la superficie, comprueba el terreno y define el material. La sub-base en terreno
        desconocido es Alto riesgo, el adoquín sobre base preparada es Bajo. Introduce las
        partidas en la calculadora y obtén un precio que cubra las amenazas reales.
      </p>

      <div className="guide__cta">
        <Link href="/es/estimate/">[ CALCULA TU ENTRADA DE VEHÍCULOS ]</Link>
      </div>
    </div>
  )
}
