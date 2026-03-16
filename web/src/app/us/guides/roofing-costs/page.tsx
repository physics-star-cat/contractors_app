import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'roofing costs // lowriskquotes',
  description:
    'Realistic roofing costs for US contractors. Full re-roofs, flat roofs, repairs, and siding — with line-by-line risk ratings so you can bid roofing work without getting burned.',
  alternates: { canonical: '/us/guides/roofing-costs/' },
}

export default function RoofingCostsPage() {
  return (
    <div className="guide">
      <h1>roofing costs: pricing the job you cannot see until you are up there</h1>

      <p>
        Roofing is high-risk bidding by nature. You price it from the ground, then find the
        problems at height. Rotten decking, sagging rafters, water damage that has been leaking
        for years. Scaffolding goes up, the clock starts, and every surprise costs money.
      </p>
      <p>
        This page breaks down what roofing work actually costs in 2026 and where the uncertainty
        hides on each line item.
      </p>

      <h2>cost ranges by job type</h2>

      <p>
        Ballpark figures for common roofing jobs on a standard 3-bedroom ranch. Actual costs depend on
        roof pitch, access, material choice, and what you find once the old covering comes off.
      </p>

      <ASCIIBox title="Roofing Job Type Costs">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Job Type</th>
              <th>Typical Cost</th>
              <th>Duration</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Full re-roof (asphalt shingles)</td>
              <td>$8,000 - $18,000</td>
              <td>2-5 days</td>
              <td>Strip and re-shingle. Price swings on decking condition.</td>
            </tr>
            <tr>
              <td>Flat roof (TPO/EPDM)</td>
              <td>$3,000 - $8,000</td>
              <td>2-4 days</td>
              <td>Per 200 sqft section. Decking condition is the unknown.</td>
            </tr>
            <tr>
              <td>Roof repair</td>
              <td>$300 - $2,000</td>
              <td>0.5-2 days</td>
              <td>Missing shingles to valley repairs. Wide range.</td>
            </tr>
            <tr>
              <td>Fascia, soffit &amp; gutters</td>
              <td>$2,000 - $5,000</td>
              <td>2-3 days</td>
              <td>Aluminum or vinyl replacement. Rotten rafter tails add cost.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <h2>worked example: full re-roof on a 3-bedroom ranch</h2>

      <p>
        Standard 3-bedroom ranch. Three-tab asphalt shingles from the 1990s. Underlayment is
        shot, some decking suspect. Roof area roughly 2,000 sqft. Homeowner wants architectural
        shingles and new ridge vent.
      </p>

      <ASCIIBox title="Re-Roof Cost Breakdown">
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
              <td>Dumpster &amp; permits</td>
              <td>$500 - $900</td>
              <td className="guide__highlight">Low</td>
              <td>Get a fixed quote. Permit fees vary by municipality.</td>
            </tr>
            <tr>
              <td>Tear-off existing shingles</td>
              <td>$800 - $1,500</td>
              <td className="guide__highlight">Low</td>
              <td>Predictable labor. Multiple layers slow things down.</td>
            </tr>
            <tr>
              <td>Decking repair/replacement</td>
              <td>$0 - $3,000</td>
              <td className="guide__highlight">High</td>
              <td>The big unknown. Could be nothing. Could be half the deck.</td>
            </tr>
            <tr>
              <td>Underlayment (synthetic felt)</td>
              <td>$400 - $700</td>
              <td className="guide__highlight">Low</td>
              <td>Material cost is stable. Ice &amp; water shield at edges adds cost.</td>
            </tr>
            <tr>
              <td>Shingle supply (architectural)</td>
              <td>$2,500 - $4,000</td>
              <td className="guide__highlight">Medium</td>
              <td>Standard architectural ~$100/square. Premium brands are 2x more.</td>
            </tr>
            <tr>
              <td>Shingle labor</td>
              <td>$2,000 - $3,500</td>
              <td className="guide__highlight">Low</td>
              <td>Your crew. Weather delays are the main variable.</td>
            </tr>
            <tr>
              <td>Ridge vent &amp; ridge cap</td>
              <td>$300 - $600</td>
              <td className="guide__highlight">Low</td>
              <td>Standard install. Better ventilation for the homeowner.</td>
            </tr>
            <tr>
              <td>Flashing (valleys, pipe boots, step)</td>
              <td>$500 - $1,200</td>
              <td className="guide__highlight">Medium</td>
              <td>Material prices fluctuate. Check current rates before bidding.</td>
            </tr>
            <tr>
              <td>Drip edge &amp; starter strip</td>
              <td>$300 - $500</td>
              <td className="guide__highlight">Low</td>
              <td>Required by building code in most jurisdictions.</td>
            </tr>
            <tr>
              <td>Cleanup &amp; haul-off</td>
              <td>$200 - $400</td>
              <td className="guide__highlight">Low</td>
              <td>Magnetic sweep, debris removal. Budget for it.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Total range for a full re-roof: <span className="guide__highlight">$7,500 -
        $16,300</span>. That $8,800 spread is not sloppiness — it is genuine uncertainty. The
        decking repair line alone can swing the job by $3,000. Everything else is reasonably
        predictable if you know your supplier prices and crew speed.
      </p>

      <h2>where roofing jobs go wrong</h2>

      <p>
        Four risk factors dominate roofing bids:
      </p>
      <ul>
        <li>
          <strong>Hidden rot.</strong> You cannot see decking condition from the ground. A drone
          survey or attic inspection helps, but you still will not know for certain until the shingles
          come off. If the roof is pre-2000 and has never been touched, budget for at least some
          decking work and mark it High.
        </li>
        <li>
          <strong>Weather windows.</strong> An open roof cannot sit overnight in heavy rain. You
          need a realistic weather window for the tear-off stage. In the Midwest or Northeast,
          that window shrinks fast in fall. Price accordingly or accept the risk.
        </li>
        <li>
          <strong>Code compliance.</strong> Building codes vary by state and municipality. Some
          jurisdictions require ice and water shield on the entire deck, not just the eaves. Others
          require specific ventilation ratios. Know your local code before you bid.
        </li>
        <li>
          <strong>Material price volatility.</strong> Shingles, lumber, and flashing have all seen sharp
          price moves in recent years. A bid that sits for eight weeks before acceptance might
          need re-pricing. Put an expiry date on your bids — 30 days maximum.
        </li>
      </ul>

      <h2>bidding roofs smarter</h2>

      <p>
        The dumpster, underlayment, and your labor are all Low uncertainty. You know those numbers.
        The decking repairs and flashing are where the risk lives. Instead of padding every line
        with a flat contingency, rate the risky items honestly and simulate the range. Your bid
        then shows the homeowner a realistic spread — and protects your margin on the items that
        actually blow up.
      </p>

      <div className="guide__cta">
        <Link href="/estimate/">[ ESTIMATE YOUR ROOFING JOB ]</Link>
      </div>
    </div>
  )
}
