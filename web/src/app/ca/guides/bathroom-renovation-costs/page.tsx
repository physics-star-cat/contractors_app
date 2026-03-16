import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Bathroom Renovation Costs Canada 2026 // lowriskquotes',
  description:
    'Realistic bathroom renovation costs for Canadian contractors in CAD. Line-by-line breakdown with uncertainty ratings so you can quote bathrooms without losing money.',
  alternates: { canonical: '/ca/guides/bathroom-renovation-costs/' },
}

export default function BathroomRenovationCostsPageCA() {
  return (
    <div className="guide">
      <h1>bathroom renovation costs: what Canadian contractors actually need to know</h1>

      <p>
        Bathrooms are bread and butter work for most contractors. They are also where a lot of
        money gets left on the table. The scope looks simple — rip out, re-plumb, tile, fit.
        But the hidden costs stack up fast: rotten subfloor under the tub, asbestos in
        the old adhesive, a customer who changes their tile choice three weeks in.
      </p>
      <p>
        This page breaks down real bathroom costs in Canada for 2026 and shows you where the
        risk sits on each line item. All prices in CAD.
      </p>

      <h2>typical cost breakdown</h2>

      <p>
        These are mid-range bathroom renovation costs for a standard Canadian bathroom (roughly
        2.5m x 2m). Budget and high-end jobs will sit either side of these numbers. Prices
        vary by province — Toronto and Vancouver run higher than the Prairies.
      </p>

      <ASCIIBox title="Bathroom Cost Breakdown (CAD)">
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
              <td>Strip out &amp; disposal</td>
              <td>$600 - $1,200</td>
              <td className="guide__highlight">Medium</td>
              <td>Depends what you find behind the walls</td>
            </tr>
            <tr>
              <td>Plumbing</td>
              <td>$1,200 - $2,500</td>
              <td className="guide__highlight">Medium</td>
              <td>Moving waste = more cost. Like-for-like = less.</td>
            </tr>
            <tr>
              <td>Electrical</td>
              <td>$600 - $1,200</td>
              <td className="guide__highlight">Low</td>
              <td>Standard zones. In-floor heating adds $500+.</td>
            </tr>
            <tr>
              <td>Wall &amp; floor tiling</td>
              <td>$1,800 - $4,000</td>
              <td className="guide__highlight">Low - Medium</td>
              <td>Large format = more cuts and waste</td>
            </tr>
            <tr>
              <td>Fixtures (vanity, toilet, taps)</td>
              <td>$900 - $3,200</td>
              <td className="guide__highlight">Medium</td>
              <td>Customer-supplied items = higher risk of delays</td>
            </tr>
            <tr>
              <td>Shower enclosure / screen</td>
              <td>$500 - $2,800</td>
              <td className="guide__highlight">High</td>
              <td>Off-the-shelf = Low. Bespoke glass = High.</td>
            </tr>
            <tr>
              <td>Drywall / boarding</td>
              <td>$400 - $900</td>
              <td className="guide__highlight">Low</td>
              <td>Straightforward unless walls are a mess</td>
            </tr>
            <tr>
              <td>Bin rental / waste removal</td>
              <td>$350 - $600</td>
              <td className="guide__highlight">Certain</td>
              <td>Get a fixed price in advance</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Total range for a mid-spec bathroom: <span className="guide__highlight">$6,350 -
        $16,400</span>. That is a wide spread. The difference is mostly driven by the fixtures
        the customer picks and what is lurking behind the old tiles. Add HST/GST on top
        depending on your province.
      </p>

      <h2>where bathrooms go wrong</h2>

      <p>
        The biggest cost blowouts on bathrooms come from three places:
      </p>
      <ul>
        <li>
          <strong>Hidden damage.</strong> Rotten floor joists, moisture damage in the walls, old
          galvanized pipes that need replacing. You will not know until you strip out. If there
          is any chance of structural issues, mark those items as High uncertainty.
        </li>
        <li>
          <strong>Customer changes.</strong> They saw something on Instagram. The tiles they
          wanted are discontinued. They want to move the toilet to the other wall. Every change
          mid-job costs time and money. Price your fixtures at Medium uncertainty minimum unless
          the customer has already bought everything.
        </li>
        <li>
          <strong>Bespoke items.</strong> Custom shower screens, non-standard vanity units,
          imported tiles with six-week lead times. These are High or Wild Guess territory. If
          it has to be made to measure, assume something will not fit first time.
        </li>
      </ul>

      <h2>quoting bathrooms smarter</h2>

      <p>
        Instead of adding a flat 10% contingency to your bathroom quote, rate each line item
        honestly. The bin rental is Certain. Your usual electrician is Low. That bespoke shower
        screen from a new supplier is High. Feed those into a simulation and you get a quote
        that covers the actual risks — not a finger-in-the-air percentage.
      </p>

      {/* MiniEstimator component will be added here */}

      <div className="guide__cta">
        <Link href="/estimate/">[ ESTIMATE YOUR BATHROOM JOB ]</Link>
      </div>
    </div>
  )
}
