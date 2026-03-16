import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Cuánto margen de seguridad 2026 // lowriskquotes',
  description:
    'Cuánto margen de seguridad añadir al presupuesto de obra. Guía para contratistas — contingencia por partida en vez de porcentaje fijo.',
  alternates: { canonical: '/es/guides/cuanto-margen-de-seguridad/' },
}

export default function CuantoMargenDeSeguridadPage() {
  return (
    <div className="guide">
      <h1>cuánto margen de seguridad: contingencia sin adivinar</h1>

      <p>
        Todo contratista sabe que hay que añadir „algo para imprevistos". La pregunta es:
        cuánto. ¿5%? ¿10%? ¿20%? La mayoría de empresas aplican un porcentaje fijo a todo —
        y o bien sobrevaloran (perdiendo encargos) o infravaloran (perdiendo dinero).
      </p>
      <p>
        El problema es que un porcentaje fijo no distingue entre un coste seguro y una
        incógnita total. Hay una forma mejor.
      </p>

      <h2>por qué el porcentaje fijo no funciona</h2>

      <p>
        Imagina dos encargos:
      </p>

      <ASCIIBox title="Comparación de encargos">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Encargo</th>
              <th>Valor</th>
              <th>Contingencia 10%</th>
              <th>Riesgo real</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pintar 3 habitaciones (paredes conocidas)</td>
              <td>€ 4.000</td>
              <td>€ 400</td>
              <td className="guide__highlight">Muy bajo — € 100 basta</td>
            </tr>
            <tr>
              <td>Reforma baño en edificio antiguo</td>
              <td>€ 18.000</td>
              <td>€ 1.800</td>
              <td className="guide__highlight">Alto — € 3.600 puede no bastar</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        El 10% es demasiado para la pintura y poco para el edificio antiguo. El porcentaje
        fijo no refleja la realidad.
      </p>

      <h2>enfoque por partida</h2>

      <p>
        En lugar de un solo porcentaje, evalúa el riesgo de cada partida por separado:
      </p>
      <ul>
        <li>
          <strong>Coste seguro</strong> — tienes la oferta del proveedor. Contingencia: 0%.
        </li>
        <li>
          <strong>Riesgo bajo</strong> — lo has hecho muchas veces, precios estables.
          Contingencia: 3-5%.
        </li>
        <li>
          <strong>Riesgo medio</strong> — conoces el alcance pero hay incógnitas (soporte,
          acceso). Contingencia: 10-15%.
        </li>
        <li>
          <strong>Riesgo alto</strong> — primera vez, material especial, dependencia climática.
          Contingencia: 20-30%.
        </li>
        <li>
          <strong>Estimación a ojo</strong> — estás adivinando. Contingencia: 30-50% o más.
        </li>
      </ul>

      <h2>cómo funciona en la práctica</h2>

      <p>
        Reforma de baño con 8 partidas. Contenedor y retirada es Seguro — 0%. Electricidad
        con tu subcontratista habitual es Bajo — 5%. Mampara de cristal a medida es Alto — 25%.
        La contingencia total resultante será distinta a un 10% fijo — y más precisa.
      </p>

      <p>
        Este enfoque tiene otra ventaja: es más fácil de explicar al cliente. En lugar de
        „he añadido un 10% por si acaso", dices „esta partida tiene mayor margen porque no
        sabemos qué hay detrás de los azulejos antiguos". El cliente lo entiende y lo acepta.
      </p>

      <h2>calcúlalo automáticamente</h2>

      <p>
        Introduce tus partidas con su nivel de riesgo en la calculadora. El sistema calculará
        una contingencia segura para cada partida y mostrará la cantidad total de margen —
        sin adivinar.
      </p>

      <div className="guide__cta">
        <Link href="/es/estimate/">[ CALCULA EL MARGEN DE TU ENCARGO ]</Link>
      </div>
    </div>
  )
}
