import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Costes de reforma de cocina España 2026 // lowriskquotes',
  description:
    'Costes reales de reforma de cocina para contratistas en España. Desglose completo partida por partida con niveles de riesgo para presupuestar cocinas con precisión.',
  alternates: { canonical: '/es/guides/costes-reforma-cocina/' },
}

export default function CostesReformaCocinaPage() {
  return (
    <div className="guide">
      <h1>costes de reforma de cocina: desglose para contratistas</h1>

      <p>
        Las cocinas son trabajos de alto valor con muchas piezas en movimiento. Fontanería,
        electricidad, gas, carpintería, encimeras, alicatado, suelos, electrodomésticos — la
        coordinación sola puede comerse su margen si no ha presupuestado bien. Esto es lo que
        cuestan realmente las cocinas en 2026 en España y dónde se esconde el riesgo.
      </p>

      <h2>desglose típico de costes</h2>

      <p>
        Reforma de cocina de gama media para una vivienda tipo en España. Esto asume una demolición
        completa y nueva instalación, no solo cambiar las puertas.
      </p>

      <ASCIIBox title="Desglose de costes de cocina">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Partida</th>
              <th>Rango de coste</th>
              <th>Nivel de riesgo</th>
              <th>Notas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Demolición y retirada</td>
              <td>400 € - 900 €</td>
              <td className="guide__highlight">Bajo</td>
              <td>Predecible salvo presencia de amianto</td>
            </tr>
            <tr>
              <td>Muebles de cocina (suministro e instalación)</td>
              <td>2.500 € - 7.000 €</td>
              <td className="guide__highlight">Medio</td>
              <td>Fabricante estándar = Bajo. Carpintería a medida = Alto.</td>
            </tr>
            <tr>
              <td>Encimeras</td>
              <td>700 € - 3.000 €</td>
              <td className="guide__highlight">Medio - Alto</td>
              <td>Laminado = Bajo. Granito/silestone con plantilla in situ = Alto.</td>
            </tr>
            <tr>
              <td>Fontanería</td>
              <td>500 € - 1.100 €</td>
              <td className="guide__highlight">Medio</td>
              <td>Mover el fregadero añade coste y riesgo</td>
            </tr>
            <tr>
              <td>Electricidad</td>
              <td>700 € - 1.300 €</td>
              <td className="guide__highlight">Medio</td>
              <td>Nuevo cuadro eléctrico o redistribución sube el precio</td>
            </tr>
            <tr>
              <td>Gas (placa, reubicación de caldera)</td>
              <td>250 € - 700 €</td>
              <td className="guide__highlight">Bajo</td>
              <td>Instalador autorizado. Sencillo si no hay reubicación.</td>
            </tr>
            <tr>
              <td>Alicatado (salpicadero y suelo)</td>
              <td>700 € - 1.800 €</td>
              <td className="guide__highlight">Bajo</td>
              <td>Azulejo metro estándar = seguro. Diseños complejos = Medio.</td>
            </tr>
            <tr>
              <td>Suelo</td>
              <td>350 € - 1.000 €</td>
              <td className="guide__highlight">Bajo</td>
              <td>Vinílico o porcelánico. La preparación del subsuelo puede añadir coste.</td>
            </tr>
            <tr>
              <td>Enlucido y pintura</td>
              <td>350 € - 700 €</td>
              <td className="guide__highlight">Bajo</td>
              <td>Sencillo. Las cocinas antiguas pueden necesitar más preparación.</td>
            </tr>
            <tr>
              <td>Electrodomésticos</td>
              <td>800 € - 3.500 €</td>
              <td className="guide__highlight">Seguro - Bajo</td>
              <td>Normalmente los compra el cliente. Confirme antes de presupuestar.</td>
            </tr>
            <tr>
              <td>Contenedor / escombros</td>
              <td>250 € - 450 €</td>
              <td className="guide__highlight">Seguro</td>
              <td>Precio cerrado, reserve con antelación</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Rango total para una cocina de gama media: <span className="guide__highlight">7.500 € -
        21.450 €</span>. El enorme rango se debe a la calidad de los muebles, el material de la
        encimera y la magnitud del cambio de distribución.
      </p>

      <h2>dónde las cocinas revientan presupuestos</h2>

      <ul>
        <li>
          <strong>Encimeras.</strong> Las encimeras de piedra se miden con plantilla después de
          instalar los muebles y se fabrican fuera de obra. Si la plantilla está mal o la piedra
          tiene un defecto, estará esperando semanas por un reemplazo. Marque las encimeras a
          medida como incertidumbre Alta.
        </li>
        <li>
          <strong>Cambios de distribución.</strong> Mover el fregadero significa mover desagüe y
          agua. Mover la placa significa mover gas y extracción. Cada reubicación es otro
          subcontratista, otro día, otro punto de fallo. Si el cliente quiere moverlo todo, sus
          estimaciones de fontanería y electricidad deberían ser Medio como mínimo.
        </li>
        <li>
          <strong>Plazos de entrega.</strong> Los muebles a medida, encimeras de piedra y
          electrodomésticos especiales pueden tardar 4-8 semanas. Si un elemento se retrasa, todo
          su programa se desplaza. Incluya el riesgo de tiempo muerto en su presupuesto o asegúrese
          de que el cliente entiende que los retrasos corren de su cuenta.
        </li>
        <li>
          <strong>Ampliación del alcance.</strong> &quot;Ya que está aquí, ¿puede mover ese radiador?&quot;
          &quot;En realidad, ¿podemos enlucir toda la habitación?&quot; Las cocinas atraen ampliaciones de
          alcance porque los clientes ven el desorden y quieren arreglarlo todo a la vez. Tenga un
          alcance claro por escrito antes de empezar.
        </li>
      </ul>

      <h2>presupuestar cocinas con confianza</h2>

      <p>
        Una cocina con muebles estándar de fabricante, encimeras laminadas y sin cambios de
        distribución es mayoritariamente trabajo de incertidumbre Baja. Podría presupuestar cerca
        de su estimación base. Una cocina con carpintería a medida, encimeras de granito y un
        rediseño completo de distribución está llena de partidas de incertidumbre Alta. Su
        contingencia necesita reflejar eso.
      </p>
      <p>
        Califique cada partida con honestidad, ejecute la simulación y presupueste a P80. Su
        presupuesto será más alto en trabajos arriesgados y más ajustado en los sencillos — que
        es exactamente como debe ser.
      </p>

      <div className="guide__cta">
        <Link href="/es/estimate/">[ PRESUPUESTAR SU REFORMA DE COCINA ]</Link>
      </div>
    </div>
  )
}
