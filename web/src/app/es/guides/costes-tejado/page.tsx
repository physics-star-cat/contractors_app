import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Costes de tejado España 2026 // lowriskquotes',
  description:
    'Costes reales de trabajos de tejado para contratistas en España. Retejados, tejados planos, reparaciones y canalones — con niveles de riesgo por partida para presupuestar sin perder dinero.',
  alternates: { canonical: '/es/guides/costes-tejado/' },
}

export default function CostesTejadoPage() {
  return (
    <div className="guide">
      <h1>costes de tejado: presupuestar lo que no se ve hasta que se sube</h1>

      <p>
        Los trabajos de tejado son presupuestos de alto riesgo por naturaleza. Se presupuesta
        desde el suelo y los problemas se encuentran en altura. Listones podridos, vigas
        combadas, tela asfáltica que se deshace al tocarla. Se monta el andamio, empieza el
        reloj, y cada sorpresa cuesta dinero.
      </p>
      <p>
        Esta página desglosa lo que realmente cuestan los trabajos de tejado en España en 2026
        y dónde se esconde la incertidumbre en cada partida.
      </p>

      <h2>rangos de costes por tipo de trabajo</h2>

      <p>
        Cifras orientativas para trabajos de tejado comunes en una vivienda unifamiliar estándar.
        Los costes reales dependen de la inclinación, el acceso, la elección de materiales y lo
        que se encuentre al retirar la cubierta vieja.
      </p>

      <ASCIIBox title="Costes por tipo de trabajo de tejado">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Tipo de trabajo</th>
              <th>Coste típico</th>
              <th>Duración</th>
              <th>Notas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Retejado completo (inclinado)</td>
              <td>4.500 € - 11.000 €</td>
              <td>5-10 días</td>
              <td>Retirar y retejar. El precio oscila según el estado de la madera.</td>
            </tr>
            <tr>
              <td>Cubierta plana (impermeabilización)</td>
              <td>1.200 € - 3.500 €</td>
              <td>2-4 días</td>
              <td>Por sección de 20 m². El estado del tablero es la incógnita.</td>
            </tr>
            <tr>
              <td>Reparación de tejado</td>
              <td>180 € - 1.300 €</td>
              <td>0,5-2 días</td>
              <td>Desde tejas sueltas hasta reparación de limahoyas. Rango amplio.</td>
            </tr>
            <tr>
              <td>Canalones y bajantes</td>
              <td>1.200 € - 3.000 €</td>
              <td>2-3 días</td>
              <td>Sustitución PVC. Cabios podridos añaden coste.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <h2>ejemplo práctico: retejado completo de vivienda unifamiliar</h2>

      <p>
        Vivienda unifamiliar estándar. Tejas de hormigón de los años 80. La tela asfáltica está
        deteriorada, algunos listones sospechosos. Superficie de cubierta aproximada 70 m². El
        cliente quiere tejas nuevas de hormigón y sistema de cumbrera seca.
      </p>

      <ASCIIBox title="Desglose de costes de retejado">
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
              <td>Andamio</td>
              <td>700 € - 1.200 €</td>
              <td className="guide__highlight">Bajo</td>
              <td>Pida presupuesto cerrado. Si el trabajo se alarga, más alquiler.</td>
            </tr>
            <tr>
              <td>Retirada de tejas y tela vieja</td>
              <td>500 € - 900 €</td>
              <td className="guide__highlight">Bajo</td>
              <td>Mano de obra predecible. Clavos y mortero viejos ralentizan.</td>
            </tr>
            <tr>
              <td>Sustitución de listones</td>
              <td>350 € - 700 €</td>
              <td className="guide__highlight">Medio</td>
              <td>Re-listar completo es estándar. Los podridos se rompen al retirar.</td>
            </tr>
            <tr>
              <td>Lámina impermeabilizante</td>
              <td>250 € - 450 €</td>
              <td className="guide__highlight">Bajo</td>
              <td>Coste de material estable. Mano de obra incluida en el tejado.</td>
            </tr>
            <tr>
              <td>Reparación de madera (vigas/correas)</td>
              <td>0 € - 1.800 €</td>
              <td className="guide__highlight">Alto</td>
              <td>La gran incógnita. Puede ser nada. Pueden ser seis vigas.</td>
            </tr>
            <tr>
              <td>Suministro de tejas</td>
              <td>1.200 € - 2.000 €</td>
              <td className="guide__highlight">Medio</td>
              <td>Tejas de hormigón ~0,80 €/ud. Pizarra natural 3-4x más.</td>
            </tr>
            <tr>
              <td>Mano de obra de colocación</td>
              <td>1.000 € - 1.800 €</td>
              <td className="guide__highlight">Bajo</td>
              <td>Su equipo. Los retrasos por lluvia son la principal variable.</td>
            </tr>
            <tr>
              <td>Sistema de cumbrera seca</td>
              <td>250 € - 500 €</td>
              <td className="guide__highlight">Bajo</td>
              <td>Fijación mecánica. Más rápido que mortero.</td>
            </tr>
            <tr>
              <td>Trabajos de plomo (encuentros/limahoyas)</td>
              <td>350 € - 800 €</td>
              <td className="guide__highlight">Medio</td>
              <td>El precio del plomo fluctúa. Consulte tarifas antes de presupuestar.</td>
            </tr>
            <tr>
              <td>Contenedor y retirada de escombros</td>
              <td>350 € - 600 €</td>
              <td className="guide__highlight">Bajo</td>
              <td>Las tejas viejas pesan. Normalmente se necesitan dos contenedores mínimo.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Rango total para un retejado completo: <span className="guide__highlight">4.950 € -
        10.750 €</span>. Ese margen de 5.800 € no es imprecisión — es incertidumbre genuina. Solo
        la partida de reparación de madera puede hacer oscilar el trabajo en 1.800 €. Todo lo demás
        es razonablemente predecible si conoce los precios de su proveedor y la velocidad de su
        equipo.
      </p>

      <h2>dónde salen mal los trabajos de tejado</h2>

      <p>
        Cuatro factores de riesgo dominan los presupuestos de tejado:
      </p>
      <ul>
        <li>
          <strong>Podredumbre oculta.</strong> No se puede ver el estado de las vigas desde el suelo.
          Una inspección desde el desván ayuda, pero no sabrá con certeza hasta que se retiren las
          tejas. Si el tejado es anterior a 1990 y nunca se ha tocado, presupueste al menos algo de
          carpintería y márquelo como Alto.
        </li>
        <li>
          <strong>Alquiler de andamio.</strong> El andamio en sí es predecible. El riesgo es la
          duración. Si el mal tiempo o las reparaciones de madera añaden tres días al trabajo, está
          pagando una semana extra de alquiler. Téngalo en cuenta en la partida de andamio.
        </li>
        <li>
          <strong>Ventanas meteorológicas.</strong> Un tejado abierto no puede quedarse a la
          intemperie con lluvia fuerte. Necesita una ventana meteorológica realista para la fase de
          retirada e impermeabilización. En invierno, esa ventana es más pequeña. Presupueste en
          consecuencia o asuma el riesgo.
        </li>
        <li>
          <strong>Volatilidad de precios de materiales.</strong> El plomo, la madera y las tejas han
          experimentado variaciones bruscas de precio en los últimos años. Un presupuesto que lleve
          ocho semanas sin aceptarse puede necesitar actualización. Ponga fecha de caducidad a sus
          presupuestos — 30 días máximo.
        </li>
      </ul>

      <h2>presupuestar tejados de forma más inteligente</h2>

      <p>
        El andamio, la lámina y su mano de obra son todo incertidumbre Baja. Esos números los
        conoce. Las reparaciones de madera y los trabajos de plomo son donde está el riesgo. En
        lugar de inflar cada partida con una contingencia plana, califique las partidas arriesgadas
        con honestidad y simule el rango. Su presupuesto entonces muestra al cliente un margen
        realista — y protege su beneficio en las partidas que realmente se disparan.
      </p>

      <div className="guide__cta">
        <Link href="/es/estimate/">[ PRESUPUESTAR SU TRABAJO DE TEJADO ]</Link>
      </div>
    </div>
  )
}
