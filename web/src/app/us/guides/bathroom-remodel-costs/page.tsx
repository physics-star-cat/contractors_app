import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Bathroom Remodel Costs US 2026 // lowriskquotes',
  description:
    'Realistic bathroom remodel costs for US contractors. Line-by-line breakdown with uncertainty ratings so you can bid bathrooms without losing money.',
  alternates: { canonical: '/us/guides/bathroom-remodel-costs/' },
}

export default function BathroomRemodelCostsPage() {
  return (
    <div className="guide">
      <h1>bathroom remodel costs: what contractors actually need to know</h1>

      <p>
        Bathrooms are bread and butter work for most contractors. They are also where a lot of
        money gets left on the table. The scope looks simple — demo, re-plumb, tile, install.
        But the hidden costs stack up fast: rotten subfloor under the tub, mold behind the
        drywall, a homeowner who changes their tile choice three weeks in.
      </p>
      <p>
        This page breaks down real bathroom costs in 2026 and shows you where the risk sits on
        each line item.
      </p>

      <h2>typical cost breakdown</h2>

      <p>
        These are mid-range bathroom remodel costs for a standard US bathroom (roughly 8 ft
        x 6 ft). Budget and high-end jobs will sit either side of these numbers.
      </p>

      <ASCIIBox title="Bathroom Cost Breakdown">
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
              <td>Demo &amp; disposal</td>
              <td>$500 - $1,200</td>
              <td className="guide__highlight">Medium</td>
              <td>Depends what you find behind the walls</td>
            </tr>
            <tr>
              <td>Plumbing</td>
              <td>$1,200 - $2,500</td>
              <td className="guide__highlight">Medium</td>
              <td>Moving drains = more cost. Like-for-like = less.</td>
            </tr>
            <tr>
              <td>Electrical</td>
              <td>$500 - $1,200</td>
              <td className="guide__highlight">Low</td>
              <td>Standard GFCI outlets and lighting. Heated floors add $400+.</td>
            </tr>
            <tr>
              <td>Wall &amp; floor tile</td>
              <td>$1,500 - $3,500</td>
              <td className="guide__highlight">Low - Medium</td>
              <td>Large format = more cuts and waste</td>
            </tr>
            <tr>
              <td>Fixtures (vanity, toilet, faucets)</td>
              <td>$800 - $3,000</td>
              <td className="guide__highlight">Medium</td>
              <td>Homeowner-supplied items = higher risk of delays</td>
            </tr>
            <tr>
              <td>Shower enclosure / glass door</td>
              <td>$400 - $2,500</td>
              <td className="guide__highlight">High</td>
              <td>Off-the-shelf = Low. Custom frameless glass = High.</td>
            </tr>
            <tr>
              <td>Drywall / cement board</td>
              <td>$400 - $800</td>
              <td className="guide__highlight">Low</td>
              <td>Straightforward unless walls are in bad shape</td>
            </tr>
            <tr>
              <td>Dumpster / waste removal</td>
              <td>$350 - $600</td>
              <td className="guide__highlight">Certain</td>
              <td>Get a fixed price in advance</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Total range for a mid-spec bathroom: <span className="guide__highlight">$5,650 -
        $15,300</span>. That is a wide spread. The difference is mostly driven by the fixtures
        the homeowner picks and what is lurking behind the old tile.
      </p>

      <h2>where bathrooms go wrong</h2>

      <p>
        The biggest cost blowouts on bathrooms come from three places:
      </p>
      <ul>
        <li>
          <strong>Hidden damage.</strong> Rotten subfloor, mold in the walls, old galvanized
          pipes that need replacing. You will not know until you demo. If there is any
          chance of structural issues, mark those items as High uncertainty.
        </li>
        <li>
          <strong>Homeowner changes.</strong> They saw something on Instagram. The tile they
          wanted is discontinued. They want to move the toilet to the other wall. Every change
          mid-job costs time and money. Price your fixtures at Medium uncertainty minimum unless
          the homeowner has already purchased everything.
        </li>
        <li>
          <strong>Custom items.</strong> Custom frameless shower glass, non-standard vanities,
          imported tile with six-week lead times. These are High or Wild Guess territory. If
          it has to be custom-fabricated, assume something will not fit the first time.
        </li>
      </ul>

      <h2>bidding bathrooms smarter</h2>

      <p>
        Instead of adding a flat 10% contingency to your bathroom bid, rate each line item
        honestly. The dumpster is Certain. Your usual electrician is Low. That custom shower
        glass from a new supplier is High. Feed those into a simulation and you get a bid that
        covers the actual risks — not a finger-in-the-air percentage.
      </p>

      {/* MiniEstimator component will be added here */}

      <div className="guide__cta">
        <Link href="/estimate/">[ ESTIMATE YOUR BATHROOM JOB ]</Link>
      </div>
    </div>
  )
}
