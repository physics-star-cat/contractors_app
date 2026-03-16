import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Cómo hacer un presupuesto como contratista // lowriskquotes',
  description:
    'Guía práctica para presupuestar trabajos con precisión. Aprenda por qué los contratistas presupuestan por debajo, cómo evaluar el riesgo en cada partida y cómo la simulación Monte Carlo genera presupuestos más seguros.',
  alternates: { canonical: '/es/guides/como-hacer-un-presupuesto/' },
}

export default function ComoHacerUnPresupuestoPage() {
  return (
    <div className="guide">
      <h1>cómo hacer un presupuesto (sin perder dinero)</h1>

      <p>
        La mayoría de los contratistas han perdido dinero en algún trabajo. No porque hicieran
        mal trabajo — sino porque presupuestaron mal. Fijaron el precio pensando en el mejor
        escenario, consiguieron el encargo y luego vieron cómo su margen se evaporaba cuando
        la realidad apareció.
      </p>
      <p>
        Esta guía explica por qué ocurre esto y cómo solucionarlo con un método que lleva unos
        cinco minutos más que su forma actual de presupuestar.
      </p>

      <h2>por qué los contratistas presupuestan por debajo</h2>

      <p>
        Tres fuerzas empujan cada presupuesto hacia abajo:
      </p>

      <p>
        <strong className="guide__highlight">Sesgo de optimismo.</strong> Se imagina el trabajo
        yendo bien. El yeso sale limpio. Las vigas están sólidas. El proveedor entrega a tiempo.
        Fija el precio para la versión del trabajo en la que nada sale mal — aunque esa versión
        casi nunca ocurre.
      </p>
      <p>
        <strong className="guide__highlight">Presión competitiva.</strong> Sabe que el cliente
        tiene tres presupuestos. Así que afila el lápiz, recorta todo lo posible, redondea hacia
        abajo. Ahora su presupuesto está ajustado. Demasiado ajustado. Gana el trabajo y pierde
        el beneficio.
      </p>
      <p>
        <strong className="guide__highlight">Estimaciones de punto único.</strong> Escribe un solo
        número para cada partida: azulejos 2.000 €. Eso no es una estimación. Es una suposición
        disfrazada de dato. Los costes reales son rangos. Los azulejos podrían costar 1.800 € si
        su proveedor habitual tiene stock, o 2.400 € si no lo tiene y tiene que pedir a otro nuevo.
      </p>

      <h2>los cinco niveles de incertidumbre</h2>

      <p>
        No todas las partidas de su presupuesto tienen el mismo riesgo. El alquiler de un contenedor
        de la empresa que ha usado cincuenta veces no es lo mismo que una mampara de ducha a medida
        de un fabricante que encontró la semana pasada. Tratarlos igual es el error principal del
        sistema de contingencia fija.
      </p>
      <p>
        LowRiskQuotes utiliza cinco niveles de incertidumbre. Esto es lo que significa cada uno
        en la práctica:
      </p>

      <ASCIIBox title="Niveles de incertidumbre">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Nivel</th>
              <th>Rango</th>
              <th>Ejemplo real</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="guide__highlight">Seguro</td>
              <td>+/- 2%</td>
              <td>Contenedor de escombros, presupuesto cerrado por escrito del proveedor</td>
            </tr>
            <tr>
              <td className="guide__highlight">Bajo</td>
              <td>+/- 8%</td>
              <td>Materiales de su proveedor habitual, accesorios estándar</td>
            </tr>
            <tr>
              <td className="guide__highlight">Medio</td>
              <td>+/- 15%</td>
              <td>Subcontratista con el que ha trabajado antes pero no recientemente</td>
            </tr>
            <tr>
              <td className="guide__highlight">Alto</td>
              <td>+/- 25%</td>
              <td>Subcontratista nuevo, materiales especiales, incógnitas en la obra</td>
            </tr>
            <tr>
              <td className="guide__highlight">Estimación a ojo</td>
              <td>+/- 40%</td>
              <td>Sin inspección previa, alcance desconocido, &quot;debería costar sobre...&quot;</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        La pregunta clave para cada partida es: <em>¿cuánta confianza tengo en que este número
        sea correcto?</em> No cuánta confianza quiere tener. Cuánta confianza tiene realmente,
        basada en evidencias. ¿Tiene un presupuesto por escrito? Eso es Seguro. ¿Está adivinando
        a partir de un trabajo que hizo hace dos años en otra zona? Eso es Alto como mucho.
      </p>

      <h2>ejemplo práctico: reforma de baño</h2>

      <p>
        Veamos un presupuesto real. La señora García quiere reformar su baño — demolición,
        azulejos nuevos, sanitarios nuevos, mampara de ducha a medida, fontanería nueva,
        electricidad y un contenedor para los escombros. Su estimación base llega a 6.400 €.
      </p>

      <ASCIIBox title="Partidas">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Partida</th>
              <th>Estimación</th>
              <th>Nivel</th>
              <th>Por qué</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Azulejos suelo y pared</td>
              <td>2.000 €</td>
              <td className="guide__highlight">Bajo</td>
              <td>Su proveedor habitual, ha presupuestado similar antes</td>
            </tr>
            <tr>
              <td>Sanitarios (lavabo, inodoro, grifería)</td>
              <td>800 €</td>
              <td className="guide__highlight">Medio</td>
              <td>El cliente eligió gama media pero no ha confirmado aún</td>
            </tr>
            <tr>
              <td>Mampara de ducha a medida</td>
              <td>1.500 €</td>
              <td className="guide__highlight">Alto</td>
              <td>Fabricante nuevo, medida especial, nunca ha pedido a este</td>
            </tr>
            <tr>
              <td>Fontanería (subcontratista)</td>
              <td>1.200 €</td>
              <td className="guide__highlight">Medio</td>
              <td>Miguel es fiable pero no ha presupuestado este trabajo aún</td>
            </tr>
            <tr>
              <td>Electricista</td>
              <td>600 €</td>
              <td className="guide__highlight">Bajo</td>
              <td>Electricidad estándar de baño, su electricista habitual</td>
            </tr>
            <tr>
              <td>Contenedor de escombros</td>
              <td>300 €</td>
              <td className="guide__highlight">Seguro</td>
              <td>Precio fijo de su empresa de contenedores habitual</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Si presupuesta 6.400 € a secas, está fijando el precio para el escenario en el que
        absolutamente todas las partidas salen exactamente según la estimación. Ese es el resultado
        más improbable. Es como apostar a que todas las monedas de una tirada de seis caen cara.
      </p>
      <p>
        Pase esos números por una simulación Monte Carlo y obtiene una distribución. La simulación
        ejecuta miles de versiones de este trabajo, cada vez extrayendo costes dentro del rango
        de incertidumbre que usted fijó. Como los sobrecostes son más frecuentes que los ahorros,
        la simulación se sesga hacia arriba — igual que la vida real.
      </p>

      <ASCIIBox title="Resultado de la simulación">
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          Estimación base: <span className="guide__highlight">6.400 €</span>
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          P50 (probabilidad al 50%): <span className="guide__highlight">6.720 €</span>
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          P80 (presupuesto recomendado): <span className="guide__highlight">7.180 €</span>
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
          P95 (colchón para el peor caso): <span className="guide__highlight">7.840 €</span>
        </p>
      </ASCIIBox>

      <p>
        La diferencia entre 6.400 € y 7.180 € es 780 € — alrededor del 12%. Pero no es un
        12% de contingencia plano. Es un colchón calculado basado en los riesgos específicos de
        este trabajo concreto. Un trabajo con todas las partidas en Bajo necesitaría menos. Un
        trabajo lleno de Estimaciones a ojo necesitaría mucho más.
      </p>

      <h2>interpretar los resultados: qué significa la curva</h2>

      <p>
        La simulación le da una distribución de probabilidad — una curva que muestra la probabilidad
        de cada coste total. Así se interpreta:
      </p>
      <ul>
        <li>
          <strong className="guide__highlight">P50</strong> significa que hay un 50% de probabilidad
          de que el coste real esté por debajo de este número. Probabilidad de cara o cruz. No es un
          presupuesto seguro.
        </li>
        <li>
          <strong className="guide__highlight">P80</strong> significa un 80% de probabilidad de que
          el coste real esté por debajo. Este es el punto ideal para la mayoría de contratistas.
          Está protegido contra la mayoría de sobrecostes sin sacarse del mercado por precio.
        </li>
        <li>
          <strong className="guide__highlight">P95</strong> significa un 95% de probabilidad. Este
          es su número para &quot;dormir tranquilo&quot;. Úselo para contratos a precio cerrado o clientes
          que no aceptarán ninguna variación.
        </li>
      </ul>
      <p>
        En qué percentil presupuesta depende del trabajo y del cliente. ¿Un trabajo por
        administración con un buen cliente? P50 puede valer. ¿Una cocina a precio cerrado para
        un cliente que le va a exigir cada céntimo? Presupueste a P80 o P95 y protéjase.
      </p>

      <h2>errores comunes al presupuestar</h2>

      <p>
        Después de pasar miles de estimaciones por el simulador, emergen patrones. Estos son los
        errores que más dinero cuestan a los contratistas:
      </p>

      <ol>
        <li>
          <strong>Marcar todo como incertidumbre Baja.</strong> Si no tiene un presupuesto por
          escrito, no es Bajo. Si no ha hecho exactamente este alcance antes, no es Bajo. Sea
          honesto consigo mismo.
        </li>
        <li>
          <strong>Olvidar los costes de desplazamiento y tiempo.</strong> Dos horas de conducción
          al día a 25 €/hora durante un trabajo de tres semanas son 750 €. Eso es dinero real.
          Presupuéstelo.
        </li>
        <li>
          <strong>No presupuestar los retrasos.</strong> Lluvia, entregas tardías, cambios del
          cliente. No son eventos raros. Son la norma. La estimación de duración del trabajo
          necesita su propio nivel de incertidumbre.
        </li>
        <li>
          <strong>Copiar los precios del año pasado.</strong> Los costes de materiales cambian.
          La madera ha subido. El cobre ha subido. Si sus precios tienen seis meses, están
          desactualizados.
        </li>
        <li>
          <strong>Presupuestar para ganar en vez de presupuestar para ganar dinero.</strong> Un
          trabajo que gana al precio equivocado es peor que un trabajo que no consigue. El peor
          resultado no es perder la licitación. Es ganarla y trabajar gratis.
        </li>
      </ol>

      <h2>poniéndolo todo junto</h2>

      <p>
        Este es el flujo de trabajo. Añade unos cinco minutos a su proceso de presupuestación:
      </p>
      <ol>
        <li>Liste todas las partidas como haría normalmente.</li>
        <li>Para cada una, pregúntese: ¿cuánta confianza tengo en este número? Asigne un nivel.</li>
        <li>Añada su tarifa diaria, duración del trabajo y desplazamientos.</li>
        <li>Ejecute la simulación.</li>
        <li>Presupueste a P80 para la mayoría de trabajos. Ajuste arriba o abajo según el tipo de contrato.</li>
      </ol>
      <p>
        No está añadiendo una contingencia inventada. Está construyendo un presupuesto que refleja
        el perfil de riesgo real del trabajo real. Esa es la diferencia entre esperar ganar dinero
        y saber que lo hará.
      </p>

      <div className="guide__cta">
        <Link href="/es/estimate/">[ CREAR SU PRESUPUESTO ]</Link>
      </div>
    </div>
  )
}
