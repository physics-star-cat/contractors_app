import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Presupuestar trabajo desconocido 2026 // lowriskquotes',
  description:
    'Cómo presupuestar un trabajo que nunca has hecho. Estrategias para contratistas ante encargos desconocidos.',
  alternates: { canonical: '/es/guides/presupuestar-trabajo-desconocido/' },
}

export default function PresupuestarTrabajoDesconocidoPage() {
  return (
    <div className="guide">
      <h1>presupuestar trabajo desconocido: cómo no perder dinero en lo que no conoces</h1>

      <p>
        Un cliente te llama con un trabajo que nunca has hecho. Montar una pérgola. Renovar
        una terraza. Construir una chimenea. Tienes el equipo, tienes las herramientas,
        seguramente puedes hacerlo — pero cuánto cobrar. Ahí empiezan los problemas.
      </p>
      <p>
        Los trabajos desconocidos son la mayor fuente de pérdidas para contratistas. No porque
        el trabajo sea difícil, sino porque no sabes lo que no sabes. Así es como abordarlo
        de forma segura.
      </p>

      <h2>estrategia 1: descompón en elementos conocidos</h2>

      <p>
        Todo trabajo se compone de tareas menores. Una pérgola es: cimentaciones puntuales,
        pilares, vigas, uniones, acabado. Las cimentaciones sabes presupuestarlas. Cortar
        madera y montar — también. Descompón el trabajo desconocido en elementos conocidos
        y presupuesta los que dominas con normalidad.
      </p>

      <h2>estrategia 2: marca las incógnitas con honestidad</h2>

      <ASCIIBox title="Ejemplo de descomposición">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Partida</th>
              <th>Tu valoración</th>
              <th>Nivel de riesgo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Excavación para cimentaciones</td>
              <td>Lo hago regularmente</td>
              <td className="guide__highlight">Bajo</td>
            </tr>
            <tr>
              <td>Pilares y vigas de madera</td>
              <td>He hecho algo similar</td>
              <td className="guide__highlight">Medio</td>
            </tr>
            <tr>
              <td>Uniones de carpintería</td>
              <td>Primera vez</td>
              <td className="guide__highlight">Alto</td>
            </tr>
            <tr>
              <td>Cubierta de pérgola</td>
              <td>Nunca lo he hecho</td>
              <td className="guide__highlight">Estimación a ojo</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Las partidas marcadas como Alto riesgo y Estimación a ojo recibirán un margen mayor
        en el cálculo. Es honesto — no finges conocer un precio que desconoces.
      </p>

      <h2>estrategia 3: busca información</h2>

      <ul>
        <li>
          <strong>Pregunta a colegas del gremio.</strong> Otros contratistas pueden tener
          experiencia con trabajos similares. Una llamada puede salvar tu presupuesto.
        </li>
        <li>
          <strong>Pide precios a subcontratistas.</strong> Si no sabes hacer algo, pide
          presupuesto a un especialista. Su precio es un Coste seguro en tu cálculo.
        </li>
        <li>
          <strong>Investiga en internet.</strong> Foros de construcción, grupos profesionales,
          vídeos tutoriales — no te darán un precio exacto pero ayudan a estimar tiempo y
          material.
        </li>
      </ul>

      <h2>cuándo rechazar</h2>

      <p>
        Si tras descomponer el encargo la mayoría de partidas son Estimación a ojo —
        plantéate si merece la pena aceptar. Mejor rechazar o proponer cobro por horas que
        dar un precio cerrado en el que no confías.
      </p>

      <h2>presupuesta con margen para lo desconocido</h2>

      <p>
        Introduce las partidas con sus niveles de riesgo reales. La calculadora ajustará
        el margen por partida — los elementos conocidos tendrán poco, los desconocidos mucho.
      </p>

      <div className="guide__cta">
        <Link href="/es/estimate/">[ CALCULA TU TRABAJO DESCONOCIDO ]</Link>
      </div>
    </div>
  )
}
