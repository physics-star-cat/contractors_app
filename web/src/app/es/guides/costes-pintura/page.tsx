import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Costes pintura 2026 // lowriskquotes',
  description:
    'Cuánto cuesta pintar una vivienda en España. Precios por m², costes ocultos y evaluación de riesgo para contratistas.',
  alternates: { canonical: '/es/guides/costes-pintura/' },
}

export default function CostesPinturaPage() {
  return (
    <div className="guide">
      <h1>costes de pintura: tarifas, trampas y presupuesto realista</h1>

      <p>
        Pintar es aparentemente el servicio de reforma más sencillo. El cliente ve pintura
        y un rodillo y espera un precio bajo. Sin embargo, el 60-70% del tiempo del pintor
        se destina a la preparación — emplastecido, lijado, imprimación, protección. El
        contratista que presupuesta solo la aplicación de pintura siempre pierde dinero.
      </p>
      <p>
        A continuación, los costes reales de pintura en 2026 incluyendo la preparación
        de superficies.
      </p>

      <h2>desglose típico de costes</h2>

      <p>
        Precios para una vivienda con 100-180 m² de superficie de paredes y techos.
      </p>

      <ASCIIBox title="Desglose de costes de pintura">
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
              <td>Pintura paredes (2 manos)</td>
              <td>€ 6 - € 12/m²</td>
              <td className="guide__highlight">Bajo</td>
              <td>Sobre soporte preparado</td>
            </tr>
            <tr>
              <td>Pintura techos</td>
              <td>€ 8 - € 14/m²</td>
              <td className="guide__highlight">Bajo</td>
              <td>Trabajo más lento, acceso difícil</td>
            </tr>
            <tr>
              <td>Emplastecido y lijado</td>
              <td>€ 5 - € 12/m²</td>
              <td className="guide__highlight">Medio</td>
              <td>Depende del estado de las paredes</td>
            </tr>
            <tr>
              <td>Imprimación</td>
              <td>€ 2 - € 5/m²</td>
              <td className="guide__highlight">Seguro</td>
              <td>Siempre necesaria, fácil de presupuestar</td>
            </tr>
            <tr>
              <td>Protección de muebles y suelos</td>
              <td>€ 200 - € 800</td>
              <td className="guide__highlight">Seguro</td>
              <td>Plásticos, cinta, cartones</td>
            </tr>
            <tr>
              <td>Pintura carpintería (puertas, molduras)</td>
              <td>€ 50 - € 150/ud.</td>
              <td className="guide__highlight">Medio</td>
              <td>Pintura vieja = decapado + imprimación</td>
            </tr>
            <tr>
              <td>Pintura (material)</td>
              <td>€ 600 - € 2.000</td>
              <td className="guide__highlight">Bajo</td>
              <td>Depende de la marca y número de colores</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Coste total de pintar un piso de 60 m² (aprox. 140 m² de paredes): <span className="guide__highlight">
        € 2.800 - € 7.500</span> con preparación y material.
      </p>

      <h2>dónde pierden dinero los pintores</h2>

      <ul>
        <li>
          <strong>Subestimar la preparación.</strong> Paredes con papel pintado, grietas o
          humedades requieren mucho más trabajo que un enlucido nuevo. Inspecciona siempre
          antes de presupuestar.
        </li>
        <li>
          <strong>Colores oscuros e intensos.</strong> Los tonos oscuros necesitan 3-4 manos
          en vez de 2. Eso duplica el tiempo y el consumo de pintura. Pregunta por el color
          antes de dar precio.
        </li>
        <li>
          <strong>Muebles en la habitación.</strong> El cliente promete vaciar la estancia pero
          no lo hace. Mover y proteger muebles consume horas. Déjalo por escrito.
        </li>
      </ul>

      <h2>presupuesto inteligente</h2>

      <p>
        Mide la superficie, evalúa el estado de las paredes, pregunta por los colores. Pintar
        una habitación preparada es Bajo riesgo. Paredes viejas con papel pintado son Medio.
        Introduce cada partida en la calculadora y obtén un precio que no se coma tu margen.
      </p>

      <div className="guide__cta">
        <Link href="/es/estimate/">[ CALCULA TU PINTURA ]</Link>
      </div>
    </div>
  )
}
