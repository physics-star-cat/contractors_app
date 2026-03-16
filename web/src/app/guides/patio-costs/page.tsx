import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../guides.css'

export const metadata: Metadata = {
  title: 'Patio Costs UK 2026 // lowriskquotes',
  description:
    'Realistic patio costs for UK homeowners and contractors. Indian sandstone, porcelain, concrete and block paving prices with per-sqm rates, sub-base advice and drainage regs.',
  alternates: { canonical: '/guides/patio-costs/' },
}

export default function PatioCostsPage() {
  return (
    <div className="guide">
      <h1>patio costs: per-sqm prices that actually stack up</h1>

      <p>
        Patios are the bread and butter of landscaping work. They look straightforward on paper —
        dig out, lay sub-base, slap down some slabs. In practice, the difference between a patio
        that lasts twenty years and one that sinks after two winters comes down to preparation.
        Cutting corners on the sub-base is the single biggest mistake in domestic patio work.
      </p>
      <p>
        For an average UK patio (15-25 sqm), expect to pay between <span className="guide__highlight">
        £3,000 and £10,000</span> depending on materials, ground conditions and whether drainage
        work is needed.
      </p>

      <h2>typical cost breakdown</h2>

      <p>
        Per-sqm rates below include materials and labour for a standard domestic patio with
        reasonable access. Difficult access, sloping sites or complex patterns will add cost.
      </p>

      <ASCIIBox title="Patio Cost Breakdown">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Cost Range</th>
              <th>Risk Level</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Indian sandstone (per sqm, laid)</td>
              <td>£80 - £120/sqm</td>
              <td className="guide__highlight">Low - Medium</td>
              <td>Most popular natural stone. Calibrated is easier to lay.</td>
            </tr>
            <tr>
              <td>Porcelain paving (per sqm, laid)</td>
              <td>£100 - £150/sqm</td>
              <td className="guide__highlight">Medium</td>
              <td>Needs priming and specific adhesive. Cutting is harder.</td>
            </tr>
            <tr>
              <td>Concrete slabs (per sqm, laid)</td>
              <td>£50 - £80/sqm</td>
              <td className="guide__highlight">Low</td>
              <td>Budget option. Wide range of finishes now available.</td>
            </tr>
            <tr>
              <td>Block paving (per sqm, laid)</td>
              <td>£80 - £130/sqm</td>
              <td className="guide__highlight">Low - Medium</td>
              <td>Herringbone and basket weave are standard patterns</td>
            </tr>
            <tr>
              <td>Sub-base preparation</td>
              <td>£20 - £40/sqm</td>
              <td className="guide__highlight">Medium</td>
              <td>MOT Type 1 compacted. Deeper on soft ground.</td>
            </tr>
            <tr>
              <td>Excavation &amp; disposal</td>
              <td>£500 - £1,500</td>
              <td className="guide__highlight">Medium - High</td>
              <td>Old concrete underneath = jackhammer and extra skip</td>
            </tr>
            <tr>
              <td>Drainage / soakaway</td>
              <td>£300 - £1,500</td>
              <td className="guide__highlight">Medium - High</td>
              <td>Required if patio drains toward the house</td>
            </tr>
            <tr>
              <td>Pointing / jointing</td>
              <td>£10 - £25/sqm</td>
              <td className="guide__highlight">Low</td>
              <td>Resin jointing compound or traditional mortar</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <h2>drainage regulations</h2>

      <p>
        Since 2008, any new patio over 5 sqm at the front of a property that uses impermeable
        materials needs planning permission — unless you use permeable paving or drain the water
        to a lawn or border. This mostly affects driveways and front patios, but it applies to
        any hard surface that drains onto the highway. At the rear, you still need to manage
        surface water properly. Water running toward the house foundations or into a neighbour's
        garden will cause problems. Always plan the fall and drainage before you start laying.
      </p>

      <h2>material comparison</h2>

      <p>
        Indian sandstone is the most popular choice for UK patios — natural look, good range of
        colours, reasonable cost. Porcelain is gaining ground fast because it is virtually
        maintenance-free and does not stain, but it costs more and is harder to cut and lay
        (you need a specific primer or the slabs will de-bond). Concrete slabs are the budget
        option but modern pressed concrete can look surprisingly good. Block paving works well
        for patios that double as utility areas and is inherently permeable when laid on a sand
        bed with open joints.
      </p>

      <h2>where patio jobs go wrong</h2>

      <ul>
        <li>
          <strong>Skimping on sub-base.</strong> A 50mm sub-base on clay soil will move. You need
          a minimum of 100mm compacted MOT Type 1, and more on soft or made-up ground. This is
          where most patio failures start.
        </li>
        <li>
          <strong>Ignoring the fall.</strong> A patio needs a minimum 1:60 fall away from the
          building. Get this wrong and water pools against the house wall, leading to damp.
        </li>
        <li>
          <strong>Porcelain adhesion.</strong> Porcelain paving on a sand-cement bed will
          eventually lift. It needs a full bed of exterior tile adhesive on a primed slab. Use
          the right system or guarantee callbacks.
        </li>
      </ul>

      <h2>quoting patios smarter</h2>

      <p>
        The paving material itself is predictable — rate it Low once the customer has chosen. The
        sub-base and excavation carry more risk, especially if you have not dug a trial hole to
        see what is underneath. Old concrete, tree roots, services and soft spots all add time
        and cost. Rate groundworks Medium to High unless you know the ground well. Drainage is
        the other variable — if it is needed, price it properly rather than hoping for the best.
      </p>

      <div className="guide__cta">
        <Link href="/estimate/">[ ESTIMATE YOUR PATIO JOB ]</Link>
      </div>
    </div>
  )
}
