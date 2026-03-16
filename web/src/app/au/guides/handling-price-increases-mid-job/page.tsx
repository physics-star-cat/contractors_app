import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Handling Price Increases Mid-Job for Australian Tradies // lowriskquotes',
  description:
    'How Australian tradies can handle material price increases, supply delays, and cost blowouts during a job. Practical advice with AUD examples.',
  alternates: { canonical: '/au/guides/handling-price-increases-mid-job/' },
}

export default function AUHandlingPriceIncreasesPage() {
  return (
    <div className="guide">
      <h1>handling price increases mid-job</h1>

      <p>
        You quoted the job three months ago. The customer finally said yes. Now you go to
        order materials and the price has jumped 15%. Timber is up. Steel is up. The sparky
        has put his rates up. Your carefully calculated quote is suddenly underwater.
      </p>
      <p>
        This happens to every tradie eventually. Here is how to handle it without losing the
        job or losing money.
      </p>

      <h2>why prices move</h2>

      <p>
        Australia has seen significant material price volatility in recent years. Some of the
        drivers:
      </p>
      <ul>
        <li>
          <strong>Timber.</strong> Structural pine, hardwood decking, and engineered timber
          have all seen sharp price swings. Supply chain issues, bushfire impacts on
          plantations, and strong building demand all contribute.
        </li>
        <li>
          <strong>Steel and Colorbond.</strong> BlueScope steel prices flow through to
          Colorbond roofing, structural steel, and reinforcement mesh. Global steel markets
          and local demand both affect pricing.
        </li>
        <li>
          <strong>Copper and electrical.</strong> Cable, switchboards, and plumbing fittings
          all track copper prices, which move with global commodity markets.
        </li>
        <li>
          <strong>Concrete.</strong> Sand, aggregate, and cement costs have been climbing
          steadily. Ready-mix pricing varies by region and season.
        </li>
        <li>
          <strong>Subcontractor rates.</strong> When demand is high, subbies put their rates
          up. A plumber who quoted $1,800 three months ago might now want $2,100.
        </li>
      </ul>

      <h2>prevention: protecting yourself upfront</h2>

      <p>
        The best time to handle price increases is before they happen. Build these protections
        into your quotes:
      </p>

      <ASCIIBox title="Quote Protection Clauses">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Protection</th>
              <th>What It Means</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="guide__highlight">Quote expiry date</td>
              <td>Put a 30-day expiry on every quote. After that, prices may need to be revised.</td>
            </tr>
            <tr>
              <td className="guide__highlight">Rise-and-fall clause</td>
              <td>Include a clause allowing price adjustment if material costs change by more than a set percentage (e.g., 5%) between quote and purchase.</td>
            </tr>
            <tr>
              <td className="guide__highlight">Material allowances</td>
              <td>Quote materials as provisional sums or allowances. The customer pays actual cost, not your estimate.</td>
            </tr>
            <tr>
              <td className="guide__highlight">Higher uncertainty tiers</td>
              <td>If you know prices are volatile, mark those items as High uncertainty. The simulation will build in a larger buffer.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <h2>mid-job: the conversation with the customer</h2>

      <p>
        If prices have already moved and you need to talk to the customer, here is how to
        approach it:
      </p>

      <ol>
        <li>
          <strong>Be upfront and immediate.</strong> Do not wait until the end of the job to
          spring it on them. The moment you discover a price increase, tell the customer.
        </li>
        <li>
          <strong>Show the evidence.</strong> Bring the original supplier quote and the new
          one. Show the price difference. Customers are more understanding when they can see
          it is the market, not you padding your margin.
        </li>
        <li>
          <strong>Offer options.</strong> &quot;The tiles you chose have gone up $800. We can either
          absorb the increase and use a similar tile from a different range, or proceed with
          your original choice at the new price.&quot; Giving options shows you are working with
          them, not against them.
        </li>
        <li>
          <strong>Document everything.</strong> Follow up verbal conversations with a text or
          email confirming what was agreed. This protects both you and the customer.
        </li>
      </ol>

      <h2>worked example: timber price increase on a deck build</h2>

      <ASCIIBox title="Price Increase Scenario (AUD)">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Quoted Price</th>
              <th>Current Price</th>
              <th>Difference</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Merbau decking (90x19, 30 sqm)</td>
              <td>$3,200</td>
              <td>$3,680</td>
              <td className="guide__highlight">+$480 (+15%)</td>
            </tr>
            <tr>
              <td>Treated pine subframe</td>
              <td>$1,400</td>
              <td>$1,540</td>
              <td className="guide__highlight">+$140 (+10%)</td>
            </tr>
            <tr>
              <td>Hardware (bolts, brackets, screws)</td>
              <td>$350</td>
              <td>$380</td>
              <td className="guide__highlight">+$30 (+9%)</td>
            </tr>
          </tbody>
        </table>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '8px' }}>
          Total increase: <span className="guide__highlight">$650</span> on a $12,000 job.
          That is 5.4% of the total job value — enough to wipe out your profit margin.
        </p>
      </ASCIIBox>

      <h2>when to wear the increase yourself</h2>

      <p>
        Sometimes it makes sense to absorb a small price increase:
      </p>
      <ul>
        <li>The increase is minor (under 2-3% of total job value)</li>
        <li>The customer is a repeat client who sends you regular work</li>
        <li>Your quote already had sufficient contingency built in via simulation</li>
        <li>You quoted at P95 and the increase is within the buffer</li>
      </ul>
      <p>
        If your simulation-based quote at P80 already accounted for material price uncertainty
        (by marking volatile items as Medium or High), you may already have enough buffer to
        cover moderate increases without going back to the customer.
      </p>

      <h2>the bottom line</h2>

      <p>
        Price increases are a fact of life in the Australian building industry. The tradies
        who handle them well are the ones who plan for them upfront — with quote expiry dates,
        rise-and-fall clauses, and risk-weighted contingency in their quotes. The tradies who
        get burned are the ones who quote tight, leave the quote open-ended, and hope nothing
        changes.
      </p>

      <div className="guide__cta">
        <Link href="/estimate/">[ BUILD A RISK-WEIGHTED QUOTE ]</Link>
      </div>
    </div>
  )
}
