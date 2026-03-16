import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Costes ampliación vivienda 2026 // lowriskquotes',
  description:
    'Cuánto cuesta una ampliación de vivienda en España. Desglose completo con evaluación de riesgo para contratistas.',
  alternates: { canonical: '/es/guides/costes-ampliacion-vivienda/' },
}

export default function CostesAmpliacionViviendaPage() {
  return (
    <div className="guide">
      <h1>costes de ampliación de vivienda: lo que realmente cuesta en 2026</h1>

      <p>
        La ampliación de una vivienda es uno de los proyectos más rentables para un contratista,
        pero también uno de los que más riesgo conllevan. Cimentación, estructura, cubierta,
        instalaciones, acabados — en cada fase pueden surgir sorpresas. Una ampliación mal
        presupuestada puede absorber todo el margen del equipo en las primeras dos semanas.
      </p>
      <p>
        A continuación encontrarás los costes reales de una ampliación en 2026, desglosados
        por partidas con su nivel de riesgo.
      </p>

      <h2>desglose típico de costes</h2>

      <p>
        Costes para una ampliación en planta baja de 15-25 m², estructura de ladrillo,
        cubierta plana o a un agua.
      </p>

      <ASCIIBox title="Desglose de costes de ampliación">
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
              <td>Cimentación</td>
              <td>€ 6.000 - € 16.000</td>
              <td className="guide__highlight">Alto</td>
              <td>Las condiciones del terreno pueden sorprender</td>
            </tr>
            <tr>
              <td>Estructura y muros</td>
              <td>€ 10.000 - € 24.000</td>
              <td className="guide__highlight">Medio</td>
              <td>Depende del material y la altura</td>
            </tr>
            <tr>
              <td>Cubierta</td>
              <td>€ 6.000 - € 15.000</td>
              <td className="guide__highlight">Medio</td>
              <td>La unión con la cubierta existente encarece</td>
            </tr>
            <tr>
              <td>Carpintería (ventanas y puertas)</td>
              <td>€ 4.000 - € 12.000</td>
              <td className="guide__highlight">Bajo</td>
              <td>Medidas estándar = coste predecible</td>
            </tr>
            <tr>
              <td>Instalaciones (electricidad, fontanería)</td>
              <td>€ 5.000 - € 13.000</td>
              <td className="guide__highlight">Medio</td>
              <td>Conexión a instalaciones existentes</td>
            </tr>
            <tr>
              <td>Aislamiento y fachada</td>
              <td>€ 4.000 - € 10.000</td>
              <td className="guide__highlight">Bajo</td>
              <td>Trabajo predecible</td>
            </tr>
            <tr>
              <td>Acabados interiores</td>
              <td>€ 8.000 - € 22.000</td>
              <td className="guide__highlight">Medio</td>
              <td>Depende del nivel elegido por el cliente</td>
            </tr>
            <tr>
              <td>Proyecto y licencias</td>
              <td>€ 3.000 - € 8.000</td>
              <td className="guide__highlight">Seguro</td>
              <td>Definir antes de empezar</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Rango total para una ampliación estándar en planta baja: <span className="guide__highlight">
        € 46.000 - € 120.000</span>. La variación depende principalmente del terreno, el nivel
        de acabado y la comunidad autónoma.
      </p>

      <h2>dónde se pierden los márgenes</h2>

      <ul>
        <li>
          <strong>Cimentación y terreno.</strong> Nivel freático alto, arcilla expansiva,
          cimentaciones antiguas en mal estado. Un estudio geotécnico cuesta € 1.000-2.000
          y puede salvar todo el presupuesto.
        </li>
        <li>
          <strong>Unión con el edificio existente.</strong> Juntas de dilatación, sellado de
          cubierta, nivelación de suelos — aquí aparecen horas de trabajo no planificadas.
        </li>
        <li>
          <strong>Trámites.</strong> Falta de licencia o cambios en la normativa urbanística
          durante el proyecto. Siempre comprobar el PGOU antes de presupuestar.
        </li>
      </ul>

      <h2>cómo presupuestar con seguridad</h2>

      <p>
        No des un precio por metro cuadrado. Desglosa el presupuesto por partidas y evalúa
        el riesgo de cada una por separado. La cimentación en terreno desconocido es Alto
        riesgo. La carpintería estándar es Bajo. Introduce cada partida en la calculadora
        y deja que las matemáticas marquen el precio seguro.
      </p>

      <div className="guide__cta">
        <Link href="/es/estimate/">[ CALCULA TU AMPLIACIÓN ]</Link>
      </div>
    </div>
  )
}
