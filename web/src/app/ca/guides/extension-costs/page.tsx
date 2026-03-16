import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'How Much Does a Home Addition Cost in Canada // lowriskquotes',
  description:
    'Realistic home addition and extension costs for Canadian contractors in CAD. Single-storey and two-storey breakdowns with risk ratings on every line item so you can quote additions without getting burned.',
  alternates: { canonical: '/ca/guides/extension-costs/' },
}

export default function ExtensionCostsPageCA() {
  return (
    <div className="guide">
      <h1>how much does a home addition cost in Canada</h1>

      <p>
        Additions are big-ticket jobs. They are also where contractors lose the most money. A
        kitchen addition that looked straightforward on paper turns into a nightmare when you
        hit rock during excavation, the steel beam takes ten weeks, and the building inspector
        wants a full drainage recalculation. Get your pricing wrong and you are working for
        free by week twelve.
      </p>
      <p>
        This guide covers real addition costs in Canada for 2026. Prices vary significantly
        by province — the GTA and Metro Vancouver are at the high end, while the Prairies and
        Atlantic provinces tend to run lower. But the risk factors are the same everywhere.
      </p>

      <h2>single-storey vs two-storey</h2>

      <p>
        A single-storey rear addition (roughly 4m x 5m / 200 sq ft) typically lands between{' '}
        <span className="guide__highlight">$50,000 - $100,000</span> in Canada. Two-storey
        additions are not double the cost — more like 50-70% more — because you share the
        foundations, roof structure, and most of the groundwork. Expect{' '}
        <span className="guide__highlight">$80,000 - $160,000</span> for a two-storey of similar
        footprint.
      </p>
      <p>
        The per-square-foot rate for a single-storey sits around $250 - $500. Two-storey
        drops to $200 - $400 per sq ft because you spread the expensive stuff (foundations,
        roof) across more floor area.
      </p>

      <h2>Canadian permit and code considerations</h2>

      <p>
        Unlike some countries, Canadian building permits are non-negotiable for additions.
        Budget for:
      </p>
      <ul>
        <li>
          <strong>Building permit fees:</strong> typically $1,000 - $5,000 depending on the
          municipality and project value.
        </li>
        <li>
          <strong>Architectural/engineering drawings:</strong> $3,000 - $8,000 for stamped
          drawings required by most municipalities.
        </li>
        <li>
          <strong>Multiple inspections:</strong> foundation, framing, insulation, rough-in,
          and final. Each failed inspection costs you a day.
        </li>
        <li>
          <strong>Energy code compliance:</strong> Canadian building code requires high
          insulation values (R-24+ walls, R-50+ attic) which affects framing and material
          costs.
        </li>
      </ul>

      <h2>where addition costs blow up</h2>

      <ul>
        <li>
          <strong>Foundations.</strong> You will not know the full picture until you dig. Rock,
          high water table, clay soil, old septic lines in the way — any of these can double
          your groundwork cost. Frost depth in most of Canada requires footings at 1.2m to
          1.5m below grade. If the site investigation is thin, price foundations as High
          uncertainty.
        </li>
        <li>
          <strong>Permits and inspections.</strong> Municipal approvals can drag on for months.
          Committee of adjustment hearings, minor variances, and neighbour objections all add
          time. Allow time and money for delays.
        </li>
        <li>
          <strong>Structural steel.</strong> Lead times in 2026 are still unpredictable. A
          standard beam might take two weeks or ten. If the steel is late, everything else
          stacks up behind it. Price the wait into your programme.
        </li>
        <li>
          <strong>Winter conditions.</strong> Starting groundwork in November in Ontario or
          Alberta means frozen ground, heated enclosures for concrete pours, and shorter
          daylight hours. All of that costs money. Build it into your quote.
        </li>
      </ul>

      <h2>worked example: single-storey rear addition (200 sq ft)</h2>

      <ASCIIBox title="Addition Cost Breakdown (CAD)">
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
              <td>Foundations &amp; excavation</td>
              <td>$8,000 - $18,000</td>
              <td className="guide__highlight">High</td>
              <td>Soil type is everything. Frost depth adds cost vs. milder climates.</td>
            </tr>
            <tr>
              <td>Structural steel / LVL beams</td>
              <td>$2,500 - $6,000</td>
              <td className="guide__highlight">High</td>
              <td>Lead times are volatile. Order early.</td>
            </tr>
            <tr>
              <td>Framing &amp; sheathing</td>
              <td>$6,000 - $12,000</td>
              <td className="guide__highlight">Medium</td>
              <td>Lumber prices fluctuate. 2x6 walls for insulation code compliance.</td>
            </tr>
            <tr>
              <td>Roof structure &amp; covering</td>
              <td>$4,500 - $9,000</td>
              <td className="guide__highlight">Low - Medium</td>
              <td>Flat roof = simpler. Pitched with ice/water shield = more labour.</td>
            </tr>
            <tr>
              <td>Windows &amp; patio doors</td>
              <td>$4,000 - $12,000</td>
              <td className="guide__highlight">Medium</td>
              <td>Triple-pane for energy code. Lead times on custom sizes: 6-10 weeks.</td>
            </tr>
            <tr>
              <td>Electrical (rough-in + finish)</td>
              <td>$2,500 - $5,000</td>
              <td className="guide__highlight">Low</td>
              <td>Standard residential. Panel upgrade adds $1,000+.</td>
            </tr>
            <tr>
              <td>Plumbing &amp; HVAC</td>
              <td>$2,000 - $4,500</td>
              <td className="guide__highlight">Low - Medium</td>
              <td>Extending the existing system. New furnace = separate quote.</td>
            </tr>
            <tr>
              <td>Insulation &amp; vapour barrier</td>
              <td>$2,000 - $3,500</td>
              <td className="guide__highlight">Low</td>
              <td>Must meet code minimums. Spray foam costs more but performs better.</td>
            </tr>
            <tr>
              <td>Drywall &amp; painting</td>
              <td>$2,500 - $4,500</td>
              <td className="guide__highlight">Low</td>
              <td>New build walls = predictable</td>
            </tr>
            <tr>
              <td>Flooring &amp; finishes</td>
              <td>$2,500 - $6,000</td>
              <td className="guide__highlight">Medium</td>
              <td>Customer spec drives this line completely</td>
            </tr>
            <tr>
              <td>Permits, inspections &amp; drawings</td>
              <td>$4,000 - $10,000</td>
              <td className="guide__highlight">High</td>
              <td>Municipal fees, engineer stamps, survey if required</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Total range for a single-storey rear addition:{' '}
        <span className="guide__highlight">$40,500 - $90,500</span>. The low end assumes good
        ground, standard finishes, and no permit complications. The high end is where reality
        usually lives. Add HST/GST on top.
      </p>

      <h2>quoting additions without losing money</h2>

      <p>
        A flat 10% contingency does not cut it on additions. Your foundations might be fine or
        they might need underpinning. Your steel might arrive in two weeks or two months. Rate
        each line item individually. The drywall is Low risk — you know exactly what it costs.
        The groundwork is High risk — it depends on what is in the ground. Feed honest ratings
        into a proper simulation and your quote covers the real spread of outcomes, not a guess.
      </p>

      <div className="guide__cta">
        <Link href="/estimate/">[ ESTIMATE YOUR ADDITION ]</Link>
      </div>
    </div>
  )
}
