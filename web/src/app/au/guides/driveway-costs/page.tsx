import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Driveway Costs Australia 2026 // lowriskquotes',
  description:
    'Realistic driveway costs for Australian tradies. Exposed aggregate, plain concrete, asphalt, and paver driveways — full cost breakdown in AUD with risk ratings.',
  alternates: { canonical: '/au/guides/driveway-costs/' },
}

export default function AUDriverwayCostsPage() {
  return (
    <div className="guide">
      <h1>driveway costs: what australian concreters and tradies need to know</h1>

      <p>
        Driveways are one of the most visible jobs you will do — the customer sees it every
        single day. That means expectations are high and there is no room for a dodgy finish.
        Exposed aggregate is the most popular choice across Australia, but plain concrete,
        stamped concrete, asphalt, and pavers all have their place.
      </p>
      <p>
        This page breaks down real driveway costs in 2026 and shows you where the risk sits.
      </p>

      <h2>cost ranges by driveway type</h2>

      <p>
        Typical costs for a standard double driveway (approximately 50 sqm). Prices vary by
        region — metro Sydney and Melbourne tend to be higher than regional areas.
      </p>

      <ASCIIBox title="Driveway Cost By Type (AUD)">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Driveway Type</th>
              <th>Cost / sqm</th>
              <th>Total (50 sqm)</th>
              <th>Risk Level</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Plain concrete</td>
              <td>$65 - $100</td>
              <td>$3,250 - $5,000</td>
              <td className="guide__highlight">Low</td>
            </tr>
            <tr>
              <td>Exposed aggregate</td>
              <td>$100 - $160</td>
              <td>$5,000 - $8,000</td>
              <td className="guide__highlight">Medium</td>
            </tr>
            <tr>
              <td>Stamped / stencilled concrete</td>
              <td>$90 - $150</td>
              <td>$4,500 - $7,500</td>
              <td className="guide__highlight">Medium</td>
            </tr>
            <tr>
              <td>Asphalt</td>
              <td>$45 - $75</td>
              <td>$2,250 - $3,750</td>
              <td className="guide__highlight">Low</td>
            </tr>
            <tr>
              <td>Clay pavers</td>
              <td>$80 - $140</td>
              <td>$4,000 - $7,000</td>
              <td className="guide__highlight">Medium</td>
            </tr>
            <tr>
              <td>Natural stone pavers</td>
              <td>$120 - $250</td>
              <td>$6,000 - $12,500</td>
              <td className="guide__highlight">High</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <h2>worked example: exposed aggregate driveway (50 sqm)</h2>

      <p>
        Standard double driveway replacement in suburban Melbourne. Remove existing cracked
        concrete, prepare base, pour new exposed aggregate with Colorbond-compatible border.
      </p>

      <ASCIIBox title="Exposed Aggregate Driveway Breakdown (AUD)">
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
              <td>Demolition &amp; removal of existing</td>
              <td>$800 - $1,500</td>
              <td className="guide__highlight">Low</td>
              <td>Bobcat or jackhammer. Predictable unless reinforced.</td>
            </tr>
            <tr>
              <td>Skip bin / tip fees</td>
              <td>$400 - $700</td>
              <td className="guide__highlight">Certain</td>
              <td>Concrete waste. Get a fixed price.</td>
            </tr>
            <tr>
              <td>Excavation &amp; base preparation</td>
              <td>$600 - $1,200</td>
              <td className="guide__highlight">Medium</td>
              <td>Depends on soil condition. Poor drainage = more work.</td>
            </tr>
            <tr>
              <td>Compacted road base (crushed rock)</td>
              <td>$400 - $800</td>
              <td className="guide__highlight">Low</td>
              <td>100-150mm compacted. Material cost is stable.</td>
            </tr>
            <tr>
              <td>Formwork &amp; reinforcement (mesh)</td>
              <td>$500 - $900</td>
              <td className="guide__highlight">Low</td>
              <td>SL72 mesh standard. More for heavy vehicle access.</td>
            </tr>
            <tr>
              <td>Concrete supply (exposed aggregate)</td>
              <td>$1,500 - $2,500</td>
              <td className="guide__highlight">Medium</td>
              <td>Aggregate choice affects price. Coloured oxide adds cost.</td>
            </tr>
            <tr>
              <td>Labour — pour, finish, expose</td>
              <td>$1,200 - $2,000</td>
              <td className="guide__highlight">Medium</td>
              <td>Timing is critical. Hot weather shortens working time.</td>
            </tr>
            <tr>
              <td>Sealer</td>
              <td>$300 - $500</td>
              <td className="guide__highlight">Low</td>
              <td>Applied after curing. Straightforward.</td>
            </tr>
            <tr>
              <td>Crossover (council works)</td>
              <td>$800 - $2,000</td>
              <td className="guide__highlight">High</td>
              <td>Council permit required. Some councils do their own crossovers.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Total range for a 50 sqm exposed aggregate driveway: <span className="guide__highlight">$6,500 -
        $12,100</span>. The council crossover and aggregate choice are the biggest swing factors.
      </p>

      <h2>where driveway jobs go wrong</h2>

      <ul>
        <li>
          <strong>Weather.</strong> Concrete does not like extremes. A pour on a 40-degree day
          in January means the surface sets too fast and you cannot get a proper exposed finish.
          Rain mid-pour is a disaster. Always have a weather contingency in your programme.
        </li>
        <li>
          <strong>Council crossover permits.</strong> Most councils require a permit to modify
          the crossover (the bit between your driveway and the road). Some councils insist on
          doing the crossover themselves — at their price, on their timeline. Check with council
          before quoting.
        </li>
        <li>
          <strong>Drainage.</strong> If the existing driveway had poor drainage, the customer
          will expect you to fix it. Stormwater pits, agi drains, and connection to the street
          drain can add $1,000 - $3,000 to the job. Clarify this in scope.
        </li>
        <li>
          <strong>Access.</strong> Can the concrete truck get close enough? If it cannot,
          you need a pump or wheelbarrows — both add significant cost. Check site access before
          you quote.
        </li>
      </ul>

      <h2>quoting driveways smarter</h2>

      <p>
        The demolition, base prep, and formwork are predictable for experienced concreters.
        The weather risk, council crossover, and drainage unknowns are where your contingency
        should be concentrated. Rate each item honestly, simulate the range, and quote at P80.
      </p>

      <div className="guide__cta">
        <Link href="/estimate/">[ ESTIMATE YOUR DRIVEWAY JOB ]</Link>
      </div>
    </div>
  )
}
