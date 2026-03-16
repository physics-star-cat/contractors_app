import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'how much does a home addition cost // lowriskquotes',
  description:
    'Realistic home addition costs for US contractors. Single-story and two-story breakdowns with risk ratings on every line item so you can bid additions without getting burned.',
  alternates: { canonical: '/us/guides/home-addition-costs/' },
}

export default function HomeAdditionCostsPage() {
  return (
    <div className="guide">
      <h1>how much does a home addition cost</h1>

      <p>
        Additions are big-ticket jobs. They are also where contractors lose the most money. A
        kitchen addition that looked straightforward on paper turns into a nightmare when you hit
        rock, the structural steel takes eight weeks, and the building inspector wants a full
        engineering review. Get your pricing wrong and you are working for free by week ten.
      </p>
      <p>
        This guide covers real home addition costs in 2026 for the US market. Prices vary
        significantly by region — a similar addition in the Northeast will cost 30-50% more than
        one in the Southeast — but the risk factors are the same everywhere.
      </p>

      <h2>single-story vs two-story</h2>

      <p>
        A single-story rear addition (roughly 200 sqft) typically lands between{' '}
        <span className="guide__highlight">$40,000 - $80,000</span> depending on region. Two-story
        additions are not double the cost — more like 50-70% more — because you share the
        foundation, roof structure, and most of the sitework. Expect{' '}
        <span className="guide__highlight">$65,000 - $130,000</span> for a two-story of similar
        footprint.
      </p>
      <p>
        The per-square-foot rate for a single-story sits around $200 - $400. Two-story
        drops to $160 - $325 per sqft because you spread the expensive stuff (foundation,
        roof) across more floor area.
      </p>

      <h2>where addition costs blow up</h2>

      <p>
        Additions have more risk than most contractors price for. Here is where the money
        disappears:
      </p>
      <ul>
        <li>
          <strong>Foundation.</strong> You will not know the full picture until you dig. Clay soil,
          tree roots, old utilities in the way — any of these can double your sitework cost. If the
          soil report is thin, price the foundation as High uncertainty.
        </li>
        <li>
          <strong>Permits and building codes.</strong> Permit approval is not guaranteed.
          Zoning setback issues pop up. The building department might want engineered details you
          did not budget for. Allow time and money for delays.
        </li>
        <li>
          <strong>Structural steel.</strong> Lead times in 2026 are still unpredictable. A standard
          beam might take two weeks or eight. If the steel is late, everything else stacks up behind
          it. Price the wait into your schedule.
        </li>
        <li>
          <strong>Weather.</strong> Sitework and framing are weather-dependent. A rainy spring can
          add weeks to a schedule. If you are starting in November, build that into your bid.
        </li>
      </ul>

      <h2>worked example: single-story rear addition (200 sqft)</h2>

      <ASCIIBox title="Addition Cost Breakdown">
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
              <td>Foundation &amp; sitework</td>
              <td>$6,000 - $15,000</td>
              <td className="guide__highlight">High</td>
              <td>Soil type is everything. Budget for the worst.</td>
            </tr>
            <tr>
              <td>Structural steel (beams)</td>
              <td>$2,000 - $5,000</td>
              <td className="guide__highlight">High</td>
              <td>Lead times are volatile. Order early.</td>
            </tr>
            <tr>
              <td>Framing</td>
              <td>$6,000 - $10,000</td>
              <td className="guide__highlight">Medium</td>
              <td>Tying into existing structure adds complexity</td>
            </tr>
            <tr>
              <td>Roofing</td>
              <td>$4,000 - $8,000</td>
              <td className="guide__highlight">Low - Medium</td>
              <td>Flat roof = simpler. Matching existing pitch = more labor.</td>
            </tr>
            <tr>
              <td>Windows &amp; sliding doors</td>
              <td>$4,000 - $12,000</td>
              <td className="guide__highlight">Medium</td>
              <td>Lead times on custom sliding doors: 4-8 weeks</td>
            </tr>
            <tr>
              <td>Electrical (rough-in + finish)</td>
              <td>$2,000 - $4,000</td>
              <td className="guide__highlight">Low</td>
              <td>Standard residential. Panel upgrade adds $800.</td>
            </tr>
            <tr>
              <td>Plumbing &amp; HVAC</td>
              <td>$1,800 - $4,000</td>
              <td className="guide__highlight">Low - Medium</td>
              <td>Extending the existing system. New unit = separate bid.</td>
            </tr>
            <tr>
              <td>Insulation &amp; drywall</td>
              <td>$2,000 - $3,500</td>
              <td className="guide__highlight">Low</td>
              <td>New construction walls = predictable</td>
            </tr>
            <tr>
              <td>Flooring &amp; paint</td>
              <td>$2,000 - $5,000</td>
              <td className="guide__highlight">Medium</td>
              <td>Homeowner spec drives this line completely</td>
            </tr>
            <tr>
              <td>Permits &amp; inspections</td>
              <td>$2,000 - $4,500</td>
              <td className="guide__highlight">High</td>
              <td>Varies wildly by municipality. Engineering fees add up.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Total range for a single-story rear addition:{' '}
        <span className="guide__highlight">$31,800 - $71,000</span>. The low end assumes good
        soil, standard finishes, and no permit complications. The high end is where reality
        usually lives.
      </p>

      <h2>bidding additions without losing money</h2>

      <p>
        A flat 10% contingency does not cut it on additions. Your foundation might be fine or it
        might need piers. Your steel might arrive in two weeks or two months. Rate each line item
        individually. The drywall is Low risk — you know exactly what it costs. The sitework is
        High risk — it depends on what is in the ground. Feed honest ratings into a proper
        simulation and your bid covers the real spread of outcomes, not a guess.
      </p>

      <div className="guide__cta">
        <Link href="/estimate/">[ ESTIMATE YOUR ADDITION JOB ]</Link>
      </div>
    </div>
  )
}
