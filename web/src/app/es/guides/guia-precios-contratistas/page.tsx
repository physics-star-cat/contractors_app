import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Guía de precios para contratistas 2026 // lowriskquotes',
  description:
    'Cómo presupuestar trabajos de construcción. Guía completa para contratistas — de la medición a la presentación de la oferta.',
  alternates: { canonical: '/es/guides/guia-precios-contratistas/' },
}

export default function GuiaPreciosContratistasPage() {
  return (
    <div className="guide">
      <h1>guía de precios para contratistas: de la medición a la oferta</h1>

      <p>
        Presupuestar es la habilidad que determina si tu empresa gana dinero. Un precio
        demasiado bajo — trabajas gratis o a pérdidas. Un precio demasiado alto — pierdes
        el encargo. La mayoría de contratistas aprenden a presupuestar por ensayo y error,
        pagando la formación con su propio bolsillo.
      </p>
      <p>
        Esta guía muestra un enfoque sistemático que minimiza riesgos y te permite presentar
        ofertas con confianza.
      </p>

      <h2>paso 1: medición precisa</h2>

      <p>
        Todo empieza con la visita a obra. Nunca presupuestes a partir de fotos ni de
        descripciones telefónicas. En el sitio mide:
      </p>
      <ul>
        <li>Superficies de paredes, suelos y techos</li>
        <li>Longitudes de instalaciones a sustituir o ejecutar</li>
        <li>Estado del soporte y elementos existentes</li>
        <li>Accesos — vehículos, ascensor, escalera, aparcamiento</li>
      </ul>

      <h2>paso 2: listado de partidas</h2>

      <p>
        Desglosa el encargo en partidas independientes. Cada partida debe incluir:
      </p>

      <ASCIIBox title="Estructura de partida">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Elemento</th>
              <th>Ejemplo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nombre de la partida</td>
              <td>Demolición de alicatado antiguo</td>
            </tr>
            <tr>
              <td>Coste de material</td>
              <td>€ 120 (sacos, herramientas)</td>
            </tr>
            <tr>
              <td>Coste de mano de obra</td>
              <td>€ 700 (2 días × € 350)</td>
            </tr>
            <tr>
              <td>Nivel de riesgo</td>
              <td>Medio — no se sabe qué hay debajo</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <h2>paso 3: evaluación de riesgo</h2>

      <p>
        Asigna a cada partida un nivel de certeza — desde Seguro (tienes oferta firme del
        proveedor) hasta Estimación a ojo (estás adivinando). Esto no es añadir un 10%
        genérico. Es una evaluación honesta de cada partida por separado.
      </p>

      <h2>paso 4: cálculo final</h2>

      <p>
        Suma los costes, añade el margen de gestión y beneficio, e incluye las contingencias
        derivadas del nivel de riesgo. Tu precio final debe cubrir:
      </p>
      <ul>
        <li>Materiales y mano de obra</li>
        <li>Costes indirectos (desplazamiento, herramientas, seguros)</li>
        <li>Contingencia por riesgo (diferente para cada partida)</li>
        <li>Tu beneficio</li>
      </ul>

      <h2>paso 5: presentación de la oferta</h2>

      <p>
        El cliente agradece un presupuesto transparente con desglose por partidas. No tienes
        que mostrar el nivel de riesgo — pero muestra el rango de costes. „Demolición:
        € 700-1.100, según el estado bajo los azulejos" suena profesional y honesto.
      </p>

      <h2>empieza a presupuestar con sistema</h2>

      <p>
        Introduce tus partidas en la calculadora. El sistema calculará un rango de precio
        seguro y te mostrará cuánta contingencia necesitas en cada fase.
      </p>

      <div className="guide__cta">
        <Link href="/es/estimate/">[ CALCULA TU ENCARGO ]</Link>
      </div>
    </div>
  )
}
