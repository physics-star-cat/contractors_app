import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../guides.css'

export const metadata: Metadata = {
  title: 'roofing costs // lowriskquotes',
  description:
    'Realistic roofing costs for UK contractors. Full re-roofs, flat roofs, repairs and fascias — with line-by-line risk ratings so you can quote roofing work without getting burned.',
  alternates: { canonical: '/guides/roofing-costs/' },
}

export default function RoofingCostsPage() {
  return (
    <div className="guide">
      <h1>roofing costs: pricing the job you cannot see until you are up there</h1>

      <p>
        Roofing is high-risk quoting by nature. You price it from the ground, then find the
        problems at height. Rotten battens, sagging rafters, sodden felt that falls apart when
        you touch it. Scaffold goes up, the clock starts, and every surprise costs money.
      </p>
      <p>
        This page breaks down what roofing work actually costs in 2026 and where the uncertainty
        hides on each line item.
      </p>

      <h2>cost ranges by job type</h2>

      <p>
        Ballpark figures for common roofing jobs on a standard 3-bed semi. Actual costs depend on
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
              <td>Full re-roof (pitched)</td>
              <td>£5,000 - £12,000</td>
              <td>5-10 days</td>
              <td>Strip and re-tile/slate. Price swings on timber condition.</td>
            </tr>
            <tr>
              <td>Flat roof (GRP/EPDM)</td>
              <td>£1,500 - £4,000</td>
              <td>2-4 days</td>
              <td>Per 20 sqm section. Decking condition is the unknown.</td>
            </tr>
            <tr>
              <td>Roof repair</td>
              <td>£200 - £1,500</td>
              <td>0.5-2 days</td>
              <td>Slipped tiles to valley repairs. Wide range.</td>
            </tr>
            <tr>
              <td>Fascias, soffits &amp; guttering</td>
              <td>£1,500 - £3,500</td>
              <td>2-3 days</td>
              <td>UPVC replacement. Rotten rafter feet add cost.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <h2>worked example: full re-roof on a 3-bed semi</h2>

      <p>
        Standard 3-bed semi-detached. Concrete interlocking tiles from the 1980s. Felt is shot,
        some battens suspect. Roof area roughly 70 sqm. Customer wants new concrete tiles and
        dry ridge/verge system.
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
              <td>Scaffold hire</td>
              <td>£800 - £1,400</td>
              <td className="guide__highlight">Low</td>
              <td>Get a fixed quote. Longer hire = more cost if job overruns.</td>
            </tr>
            <tr>
              <td>Strip existing tiles &amp; felt</td>
              <td>£600 - £1,000</td>
              <td className="guide__highlight">Low</td>
              <td>Predictable labour. Old nails and mortar slow things down.</td>
            </tr>
            <tr>
              <td>Batten replacement</td>
              <td>£400 - £800</td>
              <td className="guide__highlight">Medium</td>
              <td>Full re-batten is standard. Rotten ones snap on removal.</td>
            </tr>
            <tr>
              <td>Breathable membrane</td>
              <td>£300 - £500</td>
              <td className="guide__highlight">Low</td>
              <td>Material cost is stable. Labour included in tiling.</td>
            </tr>
            <tr>
              <td>Timber repairs (rafters/joists)</td>
              <td>£0 - £2,000</td>
              <td className="guide__highlight">High</td>
              <td>The big unknown. Could be nothing. Could be six rafters.</td>
            </tr>
            <tr>
              <td>Tile supply</td>
              <td>£1,400 - £2,200</td>
              <td className="guide__highlight">Medium</td>
              <td>Concrete tiles ~£1/tile. Natural slate is 3-4x more.</td>
            </tr>
            <tr>
              <td>Tiling labour</td>
              <td>£1,200 - £2,000</td>
              <td className="guide__highlight">Low</td>
              <td>Your crew. Weather delays are the main variable.</td>
            </tr>
            <tr>
              <td>Dry ridge &amp; verge system</td>
              <td>£300 - £600</td>
              <td className="guide__highlight">Low</td>
              <td>Mechanical fix. Faster than mortar bedding.</td>
            </tr>
            <tr>
              <td>Lead work (flashings/valleys)</td>
              <td>£400 - £900</td>
              <td className="guide__highlight">Medium</td>
              <td>Lead prices fluctuate. Check current rates before quoting.</td>
            </tr>
            <tr>
              <td>Skip hire &amp; waste disposal</td>
              <td>£400 - £700</td>
              <td className="guide__highlight">Low</td>
              <td>Old tiles are heavy. Usually need two skips minimum.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Total range for a full re-roof: <span className="guide__highlight">£5,800 -
        £12,100</span>. That £6,300 spread is not sloppiness — it is genuine uncertainty. The
        timber repairs line alone can swing the job by £2,000. Everything else is reasonably
        predictable if you know your supplier prices and crew speed.
      </p>

      <h2>where roofing jobs go wrong</h2>

      <p>
        Four risk factors dominate roofing quotes:
      </p>
      <ul>
        <li>
          <strong>Hidden rot.</strong> You cannot see rafter condition from the ground. A drone
          survey or loft inspection helps, but you still will not know for certain until the tiles
          come off. If the roof is pre-1990 and has never been touched, budget for at least some
          timber work and mark it High.
        </li>
        <li>
          <strong>Scaffold hire.</strong> The scaffold itself is predictable. The risk is duration.
          If bad weather or timber repairs add three days to the job, you are paying for an extra
          week of hire. Factor that into your scaffold line item.
        </li>
        <li>
          <strong>Weather windows.</strong> An open roof cannot sit overnight in heavy rain. You
          need a realistic weather window for the strip-and-felt stage. In winter, that window is
          smaller. Price accordingly or accept the risk.
        </li>
        <li>
          <strong>Material price volatility.</strong> Lead, timber, and tiles have all seen sharp
          price moves in recent years. A quote that sits for eight weeks before acceptance might
          need re-pricing. Put an expiry date on your quotes — 30 days maximum.
        </li>
      </ul>

      <h2>quoting roofs smarter</h2>

      <p>
        The scaffold, membrane, and your labour are all Low uncertainty. You know those numbers.
        The timber repairs and lead work are where the risk lives. Instead of padding every line
        with a flat contingency, rate the risky items honestly and simulate the range. Your quote
        then shows the customer a realistic spread — and protects your margin on the items that
        actually blow up.
      </p>

      <div className="guide__cta">
        <Link href="/estimate/">[ ESTIMATE YOUR ROOFING JOB ]</Link>
      </div>
    </div>
  )
}
