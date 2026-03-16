import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Costes conversión ático 2026 // lowriskquotes',
  description:
    'Cuánto cuesta convertir un ático o buhardilla en vivienda en España. Desglose de costes con evaluación de riesgo.',
  alternates: { canonical: '/es/guides/costes-conversion-atico/' },
}

export default function CostesConversionAticoPage() {
  return (
    <div className="guide">
      <h1>costes de conversión de ático: de trastero a espacio habitable</h1>

      <p>
        Convertir un ático o buhardilla en un espacio habitable es un proyecto que parece
        sencillo — ya existe el tejado, ya están los muros, solo hay que acondicionar. Pero
        cualquier contratista con experiencia sabe que los áticos dan sorpresas. Alturas
        insuficientes, aislamiento deficiente, estructura de cubierta que no soporta cargas
        adicionales, accesos complicados para materiales.
      </p>
      <p>
        A continuación, los costes reales de conversión de ático en 2026 y las partidas
        que hay que presupuestar con precaución.
      </p>

      <h2>desglose típico de costes</h2>

      <p>
        Costes para un ático de 25-40 m² útiles en vivienda unifamiliar.
      </p>

      <ASCIIBox title="Desglose de costes de ático">
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
              <td>Refuerzo estructural</td>
              <td>€ 4.000 - € 14.000</td>
              <td className="guide__highlight">Alto</td>
              <td>Cerchas antiguas pueden necesitar sustitución</td>
            </tr>
            <tr>
              <td>Aislamiento de cubierta</td>
              <td>€ 4.000 - € 12.000</td>
              <td className="guide__highlight">Bajo</td>
              <td>Lana mineral o PIR — coste predecible</td>
            </tr>
            <tr>
              <td>Tabiquería y trasdosados</td>
              <td>€ 3.500 - € 9.000</td>
              <td className="guide__highlight">Bajo</td>
              <td>Las pendientes añaden horas de trabajo</td>
            </tr>
            <tr>
              <td>Ventanas de tejado</td>
              <td>€ 2.500 - € 10.000</td>
              <td className="guide__highlight">Medio</td>
              <td>Cada ventana adicional = modificación de estructura</td>
            </tr>
            <tr>
              <td>Suelo</td>
              <td>€ 3.000 - € 8.000</td>
              <td className="guide__highlight">Medio</td>
              <td>Nivelación y aislamiento acústico encarecen</td>
            </tr>
            <tr>
              <td>Electricidad</td>
              <td>€ 2.000 - € 5.000</td>
              <td className="guide__highlight">Bajo</td>
              <td>Puntos estándar + iluminación</td>
            </tr>
            <tr>
              <td>Calefacción / climatización</td>
              <td>€ 2.500 - € 7.000</td>
              <td className="guide__highlight">Medio</td>
              <td>Conexión a instalación existente o split</td>
            </tr>
            <tr>
              <td>Escalera</td>
              <td>€ 3.000 - € 12.000</td>
              <td className="guide__highlight">Alto</td>
              <td>Hueco en forjado + escalera a medida</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Rango total: <span className="guide__highlight">€ 24.500 - € 77.000</span>. Las
        mayores incertidumbres están en la estructura y la escalera — ambas requieren
        evaluación presencial.
      </p>

      <h2>dónde fallan las conversiones de ático</h2>

      <ul>
        <li>
          <strong>Estructura de cubierta.</strong> Viviendas antiguas pueden tener cerchas
          insuficientes para cargas de habitabilidad. Sin informe del estructurista, te
          arriesgas a reformas costosas a mitad de obra.
        </li>
        <li>
          <strong>Altura libre.</strong> La normativa exige una altura mínima de 2,20-2,50 m
          en al menos el 50% de la superficie. Si el cliente espera habitaciones completas
          y el tejado es bajo, habrá compromisos o costosas elevaciones del peto.
        </li>
        <li>
          <strong>Escalera.</strong> El hueco en el forjado es una intervención estructural.
          Requiere proyecto y normalmente refuerzo de viguetas. No presupuestes esto de cabeza.
        </li>
      </ul>

      <h2>presupuesto seguro</h2>

      <p>
        Evalúa el estado de la estructura y la cubierta antes de dar precio. Las partidas
        estructurales son Alto riesgo, los acabados son Bajo. Introduce todo en la calculadora
        y obtén un precio que proteja tu margen incluso con sorpresas bajo el tejado.
      </p>

      <div className="guide__cta">
        <Link href="/es/estimate/">[ CALCULA TU CONVERSIÓN DE ÁTICO ]</Link>
      </div>
    </div>
  )
}
