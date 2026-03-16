import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Costes de reforma de baño España 2026 // lowriskquotes',
  description:
    'Costes reales de reforma de baño para contratistas en España. Desglose partida por partida con niveles de riesgo para presupuestar baños sin perder dinero.',
  alternates: { canonical: '/es/guides/costes-reforma-bano/' },
}

export default function CostesReformaBanoPage() {
  return (
    <div className="guide">
      <h1>costes de reforma de baño: lo que los contratistas necesitan saber</h1>

      <p>
        Los baños son el pan de cada día de la mayoría de reformistas. También es donde mucho
        dinero se queda en la mesa. El alcance parece sencillo — demoler, fontanería nueva,
        alicatar, instalar. Pero los costes ocultos se acumulan rápido: vigas podridas detrás
        del panel de bañera, humedades en el tabique, un cliente que cambia de azulejo tres
        semanas después de empezar.
      </p>
      <p>
        Esta página desglosa los costes reales de reforma de baño en 2026 en España y muestra
        dónde está el riesgo en cada partida.
      </p>

      <h2>desglose típico de costes</h2>

      <p>
        Estos son los costes de reforma de baño de gama media para un baño estándar en España
        (aproximadamente 2,5 m x 2 m). Los trabajos económicos y de alta gama se situarán a
        cada lado de estas cifras.
      </p>

      <ASCIIBox title="Desglose de costes de baño">
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
              <td>Demolición y retirada de escombros</td>
              <td>350 € - 700 €</td>
              <td className="guide__highlight">Medio</td>
              <td>Depende de lo que encuentre detrás de las paredes</td>
            </tr>
            <tr>
              <td>Fontanería</td>
              <td>700 € - 1.400 €</td>
              <td className="guide__highlight">Medio</td>
              <td>Mover desagües = más coste. Mismo sitio = menos.</td>
            </tr>
            <tr>
              <td>Electricidad</td>
              <td>350 € - 700 €</td>
              <td className="guide__highlight">Bajo</td>
              <td>Zonas estándar. Suelo radiante añade 250 €+.</td>
            </tr>
            <tr>
              <td>Alicatado suelo y paredes</td>
              <td>1.000 € - 2.200 €</td>
              <td className="guide__highlight">Bajo - Medio</td>
              <td>Formato grande = más cortes y desperdicio</td>
            </tr>
            <tr>
              <td>Sanitarios</td>
              <td>500 € - 1.800 €</td>
              <td className="guide__highlight">Medio</td>
              <td>Material del cliente = mayor riesgo de retrasos</td>
            </tr>
            <tr>
              <td>Mampara de ducha</td>
              <td>250 € - 1.500 €</td>
              <td className="guide__highlight">Alto</td>
              <td>Estándar = Bajo. Cristal a medida = Alto.</td>
            </tr>
            <tr>
              <td>Enlucido / tabiquería</td>
              <td>250 € - 500 €</td>
              <td className="guide__highlight">Bajo</td>
              <td>Sencillo salvo que las paredes estén muy mal</td>
            </tr>
            <tr>
              <td>Contenedor / retirada de escombros</td>
              <td>200 € - 350 €</td>
              <td className="guide__highlight">Seguro</td>
              <td>Pida precio cerrado por adelantado</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Rango total para un baño de gama media: <span className="guide__highlight">3.600 € -
        9.150 €</span>. Es un rango amplio. La diferencia viene principalmente de los sanitarios
        que elige el cliente y de lo que se esconde detrás de los azulejos antiguos.
      </p>

      <h2>dónde salen mal los baños</h2>

      <p>
        Los mayores desvíos de coste en baños vienen de tres sitios:
      </p>
      <ul>
        <li>
          <strong>Daños ocultos.</strong> Vigas podridas en el forjado, humedades en las paredes,
          tuberías de plomo antiguas que hay que cambiar. No lo sabrá hasta demoler. Si hay alguna
          posibilidad de problemas estructurales, marque esas partidas con incertidumbre Alta.
        </li>
        <li>
          <strong>Cambios del cliente.</strong> Vieron algo en Instagram. Los azulejos que querían
          ya no se fabrican. Quieren mover el inodoro a la otra pared. Cada cambio a mitad de obra
          cuesta tiempo y dinero. Presupueste sus sanitarios con incertidumbre Media como mínimo
          a menos que el cliente ya haya comprado todo.
        </li>
        <li>
          <strong>Elementos a medida.</strong> Mamparas de ducha personalizadas, muebles de baño
          no estándar, azulejos importados con seis semanas de plazo de entrega. Esto es territorio
          de incertidumbre Alta o Estimación a ojo. Si tiene que fabricarse a medida, asuma que
          algo no encajará a la primera.
        </li>
      </ul>

      <h2>presupuestar baños de forma más inteligente</h2>

      <p>
        En lugar de añadir un 10% plano de contingencia a su presupuesto de baño, califique cada
        partida con honestidad. El contenedor es Seguro. Su electricista habitual es Bajo. Esa
        mampara a medida de un proveedor nuevo es Alto. Introdúzcalo en una simulación y obtendrá
        un presupuesto que cubre los riesgos reales — no un porcentaje sacado de la nada.
      </p>

      <div className="guide__cta">
        <Link href="/es/estimate/">[ PRESUPUESTAR SU REFORMA DE BAÑO ]</Link>
      </div>
    </div>
  )
}
