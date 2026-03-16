import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Painting Costs Canada 2026 // lowriskquotes',
  description:
    'Realistic interior and exterior painting costs for Canadian contractors in CAD. Room-by-room breakdown with risk ratings so you can quote painting jobs accurately.',
  alternates: { canonical: '/ca/guides/painting-costs/' },
}

export default function PaintingCostsPageCA() {
  return (
    <div className="guide">
      <h1>painting costs in Canada: what contractors need to price</h1>

      <p>
        Painting looks like one of the simpler trades to quote. Measure the walls, price the
        paint, estimate the labour, done. But the margin killers are in the prep — and in
        Canada, exterior work has an extra layer of complexity thanks to harsh weather and
        short painting seasons.
      </p>
      <p>
        This page covers real painting costs in Canada for 2026 — interior and exterior — and
        shows you where the risk sits. All prices in CAD.
      </p>

      <h2>interior painting costs</h2>

      <p>
        Standard rates for a typical Canadian home. Assumes walls and ceilings, two coats
        over primer where needed, standard latex paint.
      </p>

      <ASCIIBox title="Interior Painting Costs (CAD)">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Scope</th>
              <th>Cost Range</th>
              <th>Risk Level</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Single room (12 x 12 ft)</td>
              <td>$400 - $800</td>
              <td className="guide__highlight">Low</td>
              <td>Walls + ceiling. Standard prep and two coats.</td>
            </tr>
            <tr>
              <td>Kitchen / bathroom</td>
              <td>$500 - $1,000</td>
              <td className="guide__highlight">Low - Medium</td>
              <td>More cutting in around cabinets, fixtures. Moisture-rated paint.</td>
            </tr>
            <tr>
              <td>Whole house interior (3-bed)</td>
              <td>$3,500 - $7,000</td>
              <td className="guide__highlight">Low</td>
              <td>Economies of scale. More rooms = lower per-room cost.</td>
            </tr>
            <tr>
              <td>Stairwell / high ceilings</td>
              <td>$600 - $1,200</td>
              <td className="guide__highlight">Medium</td>
              <td>Scaffolding or ladder staging needed. Slower work.</td>
            </tr>
            <tr>
              <td>Trim &amp; baseboards (per room)</td>
              <td>$150 - $350</td>
              <td className="guide__highlight">Low</td>
              <td>Labour-intensive but predictable. Brush and roller work.</td>
            </tr>
            <tr>
              <td>Cabinet painting (kitchen)</td>
              <td>$2,000 - $5,000</td>
              <td className="guide__highlight">Medium - High</td>
              <td>Spray finish. Prep is everything. High skill required.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <h2>exterior painting costs</h2>

      <p>
        Exterior painting in Canada has a limited season — roughly May through October in most
        provinces, shorter in the Prairies and Atlantic Canada. Weather windows matter.
      </p>

      <ASCIIBox title="Exterior Painting Costs (CAD)">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Scope</th>
              <th>Cost Range</th>
              <th>Risk Level</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Full exterior (2-storey home)</td>
              <td>$4,000 - $9,000</td>
              <td className="guide__highlight">Medium</td>
              <td>Scrape, prime, two coats. Condition of existing paint matters.</td>
            </tr>
            <tr>
              <td>Siding only (1-storey)</td>
              <td>$2,000 - $4,500</td>
              <td className="guide__highlight">Low - Medium</td>
              <td>Vinyl siding rarely painted. Wood/Hardie board more common.</td>
            </tr>
            <tr>
              <td>Deck / fence staining</td>
              <td>$800 - $2,500</td>
              <td className="guide__highlight">Low</td>
              <td>Pressure wash + stain. Weather-dependent drying time.</td>
            </tr>
            <tr>
              <td>Trim, fascia &amp; soffit</td>
              <td>$1,000 - $2,500</td>
              <td className="guide__highlight">Medium</td>
              <td>Height = ladder/lift time. Rot repair adds cost.</td>
            </tr>
            <tr>
              <td>Garage door</td>
              <td>$300 - $600</td>
              <td className="guide__highlight">Low</td>
              <td>Single or double. Straightforward spray or roller job.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <h2>where painting jobs go wrong</h2>

      <ul>
        <li>
          <strong>Prep time.</strong> The number one mistake is underestimating prep. Peeling
          paint, water damage, nail holes, caulking, taping — prep can take longer than the
          painting itself. If the surfaces are in poor condition, mark your labour as Medium
          or High uncertainty.
        </li>
        <li>
          <strong>Weather (exterior).</strong> You cannot paint in rain, high humidity, or
          below 10°C. A week of bad weather in June can push your whole schedule. In Canada,
          build weather days into your exterior quote — at least one per week.
        </li>
        <li>
          <strong>Customer colour changes.</strong> &quot;Actually, can we try a different shade
          in the bedroom?&quot; Every colour change mid-job is another coat, more paint, more
          time. Confirm all colours in writing before you start.
        </li>
        <li>
          <strong>Heights and access.</strong> Two-storey exteriors need extension ladders or
          lifts. Budget $200-$500/day for a boom lift if you need one. Working at height is
          slower — do not price it at ground-level speed.
        </li>
      </ul>

      <h2>quoting painting work smarter</h2>

      <p>
        Interior painting in good condition rooms is mostly Low uncertainty — you know your
        coverage rates and labour speed. Exterior work in unknown condition is Medium or
        Higher. Cabinet painting with spray finish is specialist work — if it is not your
        core skill, mark it High.
      </p>
      <p>
        Rate each scope element individually, run the simulation, and quote at P80. Your
        labour rate should reflect the CRA mileage ($0.70/km) for travel to site.
      </p>

      {/* MiniEstimator component will be added here */}

      <div className="guide__cta">
        <Link href="/estimate/">[ ESTIMATE YOUR PAINTING JOB ]</Link>
      </div>
    </div>
  )
}
