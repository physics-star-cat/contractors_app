import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../guides.css'

export const metadata: Metadata = {
  title: 'loft conversion costs // lowriskquotes',
  description:
    'Realistic loft conversion costs broken down by type. Velux, dormer, hip-to-gable, and mansard — with risk ratings on every line item so contractors can quote lofts with confidence.',
  alternates: { canonical: '/guides/loft-conversion-costs/' },
}

export default function LoftConversionCostsPage() {
  return (
    <div className="guide">
      <h1>loft conversion costs: what it actually takes</h1>

      <p>
        Loft conversions are one of the most profitable jobs in residential building. They are also
        one of the easiest to underquote. The structure looks sound from the hatch, then you get up
        there and find the ridge is sagging, the purlins are undersized, and the party wall needs a
        surveyor. By the time building control has signed off, you have eaten your margin.
      </p>
      <p>
        This guide covers real loft conversion costs in 2026 so you can quote them properly.
      </p>

      <h2>types of loft conversion</h2>

      <p>
        The type dictates the cost. Here is the hierarchy from cheapest to most expensive:
      </p>
      <ul>
        <li>
          <strong>Velux (rooflight).</strong> No change to the roof shape. Just rooflights,
          insulation, floor strengthening, and a staircase. Cheapest option at{' '}
          <span className="guide__highlight">£20,000 - £35,000</span>. Only works if you have
          enough head height already — minimum 2.2m at the ridge.
        </li>
        <li>
          <strong>Dormer.</strong> A box structure built out from the roof slope to create more floor
          area and headroom. The most common type. Costs{' '}
          <span className="guide__highlight">£35,000 - £55,000</span> for a standard rear dormer.
        </li>
        <li>
          <strong>Hip-to-gable.</strong> Converts a hipped roof end into a vertical gable wall.
          Common on semi-detached houses. Usually combined with a rear dormer. Expect{' '}
          <span className="guide__highlight">£45,000 - £65,000</span>.
        </li>
        <li>
          <strong>Mansard.</strong> The entire roof slope is rebuilt at a near-vertical angle. Maximum
          space, maximum cost, and almost always needs full planning permission. Budget{' '}
          <span className="guide__highlight">£55,000 - £80,000+</span>.
        </li>
      </ul>

      <h2>where loft conversions go wrong</h2>

      <p>
        Three things catch contractors out on lofts:
      </p>
      <ul>
        <li>
          <strong>Structural surprises.</strong> The existing roof structure is rarely what you
          expect. Timbers that looked fine from below are split, undersized, or bodged from a
          previous job. You will not know until you open it up. If you have not done a proper
          structural survey, price the steelwork and timber as High uncertainty.
        </li>
        <li>
          <strong>Party wall.</strong> On terraced and semi-detached properties, you will almost
          certainly trigger the Party Wall Act. The neighbour might agree quickly or they might
          appoint their own surveyor and drag it out for months. Budget £1,000 - £2,000 per
          neighbour and allow for delays.
        </li>
        <li>
          <strong>Building regs.</strong> Fire separation, escape windows, sound insulation between
          the new floor and the floor below, staircase headroom — building control will check all of
          it. If the staircase does not fit within the existing footprint, you are into structural
          alterations on the floor below. That is a different job entirely.
        </li>
      </ul>

      <h2>worked example: rear dormer loft conversion</h2>

      <ASCIIBox title="Loft Conversion Cost Breakdown">
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
              <td>Scaffolding</td>
              <td>£1,500 - £2,500</td>
              <td className="guide__highlight">Low</td>
              <td>Fixed price. Get it quoted up front.</td>
            </tr>
            <tr>
              <td>Structural steelwork</td>
              <td>£2,500 - £5,000</td>
              <td className="guide__highlight">High</td>
              <td>Depends on existing structure. Engineer designs vary.</td>
            </tr>
            <tr>
              <td>Dormer construction</td>
              <td>£5,000 - £8,000</td>
              <td className="guide__highlight">Medium</td>
              <td>Timber frame, flat roof, cladding</td>
            </tr>
            <tr>
              <td>Roofing &amp; leadwork</td>
              <td>£2,000 - £3,500</td>
              <td className="guide__highlight">Low - Medium</td>
              <td>GRP or felt flat roof. Lead flashings to existing.</td>
            </tr>
            <tr>
              <td>Staircase</td>
              <td>£2,500 - £4,500</td>
              <td className="guide__highlight">Medium</td>
              <td>Standard flight = Low. Tight layout = High.</td>
            </tr>
            <tr>
              <td>Floor strengthening &amp; insulation</td>
              <td>£1,500 - £2,500</td>
              <td className="guide__highlight">Medium</td>
              <td>Existing joists rarely meet current regs</td>
            </tr>
            <tr>
              <td>Electrics (first fix + second fix)</td>
              <td>£1,500 - £2,500</td>
              <td className="guide__highlight">Low</td>
              <td>Lighting, sockets, smoke detection</td>
            </tr>
            <tr>
              <td>Plumbing &amp; heating</td>
              <td>£1,200 - £2,500</td>
              <td className="guide__highlight">Low - Medium</td>
              <td>Radiators easy. En-suite adds £3k+.</td>
            </tr>
            <tr>
              <td>Plastering &amp; decoration</td>
              <td>£2,000 - £3,500</td>
              <td className="guide__highlight">Low</td>
              <td>Drylining throughout. Predictable.</td>
            </tr>
            <tr>
              <td>Windows &amp; fire escape</td>
              <td>£1,500 - £3,000</td>
              <td className="guide__highlight">Low</td>
              <td>Must meet Part B escape requirements</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Total range for a rear dormer loft conversion:{' '}
        <span className="guide__highlight">£21,700 - £37,500</span>. Add an en-suite bathroom and
        you are looking at another £4,000 - £8,000 on top. A hip-to-gable with rear dormer will sit
        closer to £45,000 - £65,000 once you factor in the additional structural work.
      </p>

      <h2>quoting loft conversions properly</h2>

      <p>
        The scaffolding is a known cost. The electrics are predictable. But the structural steel
        depends on what the engineer finds, and the staircase depends on the layout of the floor
        below. Stop adding a blanket contingency and start rating each line individually. A
        simulation built on honest risk ratings will give you a quote range that actually reflects
        reality — and protects your margin when the surprises hit.
      </p>

      <div className="guide__cta">
        <Link href="/estimate/">[ ESTIMATE YOUR LOFT CONVERSION ]</Link>
      </div>
    </div>
  )
}
