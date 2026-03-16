import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Costes vallado España 2026 // lowriskquotes',
  description:
    'Precios reales de vallado por metro lineal en España. Malla, madera, hormigón, aluminio — desglosados con evaluaciones de riesgo para profesionales.',
  alternates: { canonical: '/es/guides/costes-vallado/' },
}

export default function CostesValladoPage() {
  return (
    <div className="guide">
      <h1>Costes de vallado: lo que los profesionales deben presupuestar por metro</h1>

      <p>
        La instalación de vallados es uno de los trabajos más demandados en construcción y
        jardinería. Sobre el papel parece sencillo: excavar, colocar postes, fijar paneles. Pero
        la realidad es otra: terreno rocoso, raíces, lindes mal definidas y precios de materiales
        que cambian de un mes a otro convierten el presupuesto en un reto.
      </p>
      <p>
        Esta página le ofrece los costes reales de vallado en España en 2026 — por metro lineal,
        desglosados por tipo de valla, con evaluaciones de riesgo honestas.
      </p>

      <h2>costes típicos por metro lineal</h2>

      <p>
        Los precios siguientes incluyen material, postes, cimentación y mano de obra. El coste
        real depende en gran medida del tipo de terreno y la altura elegida.
      </p>

      <ASCIIBox title="Costes de vallado por metro lineal">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Tipo de valla</th>
              <th>Coste / ml</th>
              <th>Nivel de riesgo</th>
              <th>Notas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Malla de simple torsión</td>
              <td>€15 - €35</td>
              <td className="guide__highlight">Bajo</td>
              <td>Opción más económica. Instalación rápida en terreno llano.</td>
            </tr>
            <tr>
              <td>Panel de malla electrosoldada</td>
              <td>€35 - €70</td>
              <td className="guide__highlight">Bajo</td>
              <td>Muy habitual. El precio varía según altura y grosor del alambre.</td>
            </tr>
            <tr>
              <td>Valla de madera tratada</td>
              <td>€55 - €120</td>
              <td className="guide__highlight">Medio</td>
              <td>Precios de la madera fluctuantes. Autoclave recomendado.</td>
            </tr>
            <tr>
              <td>Muro de bloques de hormigón</td>
              <td>€80 - €180</td>
              <td className="guide__highlight">Medio - Alto</td>
              <td>Cimentación obligatoria. Ferralla y encofrado en función de la altura.</td>
            </tr>
            <tr>
              <td>Valla de aluminio</td>
              <td>€90 - €200</td>
              <td className="guide__highlight">Medio</td>
              <td>Gama alta. Plazos largos para medidas o colores a medida.</td>
            </tr>
            <tr>
              <td>Valla de PVC / composite</td>
              <td>€60 - €140</td>
              <td className="guide__highlight">Bajo - Medio</td>
              <td>Sin mantenimiento. Stock limitado en colores especiales.</td>
            </tr>
            <tr>
              <td>Brezo o cañizo sobre estructura</td>
              <td>€20 - €45</td>
              <td className="guide__highlight">Bajo</td>
              <td>Solución económica. Vida útil corta, recambio cada 3-5 años.</td>
            </tr>
            <tr>
              <td>Cimentación de postes</td>
              <td>€10 - €30</td>
              <td className="guide__highlight">Medio</td>
              <td>Roca o raíces = sobrecoste importante. Sondear el terreno antes.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Ejemplo: 30 ml de panel electrosoldado con instalación completa cuestan <span className="guide__highlight">€1.050 -
        €2.100</span>. Sume una puerta o cancela (€350 - €1.000 según ancho y material) y la
        cimentación adicional si el terreno lo requiere.
      </p>

      <h2>dónde fallan los presupuestos de vallado</h2>

      <p>
        Las causas más frecuentes de sobrecoste:
      </p>
      <ul>
        <li>
          <strong>Tipo de terreno.</strong> Roca superficial, arcilla compacta o nivel freático
          alto dificultan enormemente la excavación de los agujeros para postes. Sin un
          reconocimiento previo del suelo, presupuesta a ciegas.
        </li>
        <li>
          <strong>Lindes de parcela.</strong> Mojones desaparecidos o vallas existentes mal
          colocadas generan conflictos y paralizaciones. Verifique siempre el catastro o
          solicite un topógrafo antes de empezar.
        </li>
        <li>
          <strong>Desniveles.</strong> En terrenos con pendiente, los paneles deben escalonarse
          o seguir la rasante. Esto aumenta los cortes y el tiempo de montaje de forma
          considerable. Presupueste estos tramos como Alto.
        </li>
      </ul>

      <h2>presupuestar vallados de forma inteligente</h2>

      <p>
        En lugar de ofrecer un precio único por metro, evalúe cada tramo por separado. El tramo
        recto en terreno llano es Bajo. El tramo en pendiente con tocones es Alto. La cancela a
        medida es Medio a Alto. Introduzca estos valores en una simulación de riesgo y obtendrá
        un presupuesto que protege su margen — no una estimación genérica que le hará perder
        dinero.
      </p>

      <div className="guide__cta">
        <Link href="/es/estimate/">[ PRESUPUESTAR MI PROYECTO DE VALLADO ]</Link>
      </div>
    </div>
  )
}
