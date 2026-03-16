import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Costes enlucido 2026 // lowriskquotes',
  description:
    'Cuánto cuesta enlucir paredes y techos en España. Precios por m² de yeso, cemento y monocapa con evaluación de riesgo.',
  alternates: { canonical: '/es/guides/costes-enlucido/' },
}

export default function CostesEnlucidoPage() {
  return (
    <div className="guide">
      <h1>costes de enlucido: precios por m² y riesgos ocultos</h1>

      <p>
        El enlucido es uno de los trabajos más repetitivos en la construcción. Los precios
        por metro cuadrado son bien conocidos en el mercado y un equipo experimentado puede
        estimar el tiempo de trabajo con precisión. A pesar de ello, hay presupuestos que
        no cubren los costes — normalmente por el estado del soporte, acceso difícil o
        cambios de alcance durante la obra.
      </p>
      <p>
        A continuación, el desglose de costes de enlucido en 2026 con evaluación de riesgo
        por partida.
      </p>

      <h2>desglose típico de costes</h2>

      <p>
        Precios para enlucido de una vivienda con 120-250 m² de superficie de paredes.
      </p>

      <ASCIIBox title="Desglose de costes de enlucido">
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
              <td>Enlucido de yeso (proyectado)</td>
              <td>€ 10 - € 18/m²</td>
              <td className="guide__highlight">Bajo</td>
              <td>Trabajo estándar, bien medible</td>
            </tr>
            <tr>
              <td>Enfoscado de cemento</td>
              <td>€ 12 - € 20/m²</td>
              <td className="guide__highlight">Bajo</td>
              <td>Zonas húmedas y exteriores</td>
            </tr>
            <tr>
              <td>Preparación del soporte</td>
              <td>€ 1.200 - € 4.000</td>
              <td className="guide__highlight">Medio</td>
              <td>Picado de revestimientos antiguos, imprimación</td>
            </tr>
            <tr>
              <td>Guardavivos y junquillos</td>
              <td>€ 500 - € 1.500</td>
              <td className="guide__highlight">Seguro</td>
              <td>Se calcula por metros lineales</td>
            </tr>
            <tr>
              <td>Techos</td>
              <td>€ 14 - € 22/m²</td>
              <td className="guide__highlight">Medio</td>
              <td>Acceso más difícil, trabajo más lento</td>
            </tr>
            <tr>
              <td>Alisado fino (acabado)</td>
              <td>€ 6 - € 12/m²</td>
              <td className="guide__highlight">Bajo</td>
              <td>Tras el enlucido proyectado — opcional</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Ejemplo: enlucido de yeso proyectado en vivienda de 180 m² de paredes: <span className="guide__highlight">
        € 1.800 - € 3.240</span> solo la aplicación, más preparación de soporte y material.
      </p>

      <h2>qué encarece el presupuesto</h2>

      <ul>
        <li>
          <strong>Revestimientos antiguos a picar.</strong> Picar y retirar enlucidos viejos
          cuesta € 1.200-4.000 adicionales, según el grosor y la dureza. Si no sabes qué hay
          debajo, marca como Medio riesgo.
        </li>
        <li>
          <strong>Paredes desplomadas.</strong> Desviaciones superiores a 2-3 cm requieren capas
          adicionales o maestreado. Eso aumenta el consumo de material y el tiempo de trabajo.
        </li>
        <li>
          <strong>Alturas y espacios estrechos.</strong> Cajas de escalera, techos de más de
          3 m, pasillos estrechos — todo ralentiza el trabajo y exige andamios.
        </li>
      </ul>

      <h2>presupuesto fiable</h2>

      <p>
        Mide la superficie de paredes y techos, evalúa el estado del soporte. Enlucido
        proyectado sobre obra nueva es Bajo riesgo. Picar revestimientos antiguos en un
        edificio histórico es Medio o Alto. Introduce las partidas en la simulación y obtén
        un precio ajustado al riesgo real.
      </p>

      <div className="guide__cta">
        <Link href="/es/estimate/">[ CALCULA TU ENLUCIDO ]</Link>
      </div>
    </div>
  )
}
