import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Roofing Costs Canada 2026 // lowriskquotes',
  description:
    'Realistic roofing costs for Canadian contractors in CAD. Asphalt shingles, metal roofing, flat roofs, and ice/water shield — with line-by-line risk ratings so you can quote roofing work without getting burned.',
  alternates: { canonical: '/ca/guides/roofing-costs/' },
}

export default function RoofingCostsPageCA() {
  return (
    <div className="guide">
      <h1>roofing costs in Canada: pricing the job you cannot see until you are up there</h1>

      <p>
        Roofing is high-risk quoting by nature. You price it from the ground, then find the
        problems at height. Rotten sheathing, sagging rafters, ice dam damage from years of
        harsh winters. Scaffolding goes up, the clock starts, and every surprise costs money.
      </p>
      <p>
        Canadian roofing has its own challenges: freeze-thaw cycles that destroy shingles,
        ice and water shield requirements in cold climate zones, and shorter weather windows
        for outdoor work. This page breaks down what roofing work actually costs in Canada
        in 2026 and where the uncertainty hides. All prices in CAD.
      </p>

      <h2>cost ranges by job type</h2>

      <p>
        Ballpark figures for common roofing jobs on a standard 3-bedroom home. Actual costs
        depend on roof pitch, access, material choice, and what you find once the old
        covering comes off.
      </p>

      <ASCIIBox title="Roofing Job Type Costs (CAD)">
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
              <td>3-7 days</td>
              <td>Strip and re-shingle. Price swings on sheathing condition.</td>
            </tr>
            <tr>
              <td>Metal roofing</td>
              <td>$15,000 - $30,000</td>
              <td>5-10 days</td>
              <td>Standing seam or corrugated. Higher cost, longer lifespan.</td>
            </tr>
            <tr>
              <td>Flat roof (TPO/EPDM)</td>
              <td>$3,000 - $7,000</td>
              <td>2-4 days</td>
              <td>Per 20 sqm section. Decking condition is the unknown.</td>
            </tr>
            <tr>
              <td>Roof repair</td>
              <td>$300 - $2,500</td>
              <td>0.5-2 days</td>
              <td>Missing shingles to valley repairs. Wide range.</td>
            </tr>
            <tr>
              <td>Fascia, soffit &amp; eavestrough</td>
              <td>$2,500 - $6,000</td>
              <td>2-4 days</td>
              <td>Aluminium or vinyl replacement. Rotten rafter tails add cost.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <h2>worked example: full re-roof on a 3-bedroom home (asphalt shingles)</h2>

      <p>
        Standard 3-bedroom home in Ontario. Three-tab shingles from the early 2000s. Underlayment
        is failing, some sheathing suspect. Roof area roughly 200 square feet per square (about
        20 squares total). Customer wants architectural shingles with proper ice and water
        shield at eaves and valleys.
      </p>

      <ASCIIBox title="Re-Roof Cost Breakdown (CAD)">
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
              <td>Scaffolding / safety equipment</td>
              <td>$1,200 - $2,200</td>
              <td className="guide__highlight">Low</td>
              <td>Get a fixed quote. Longer hire = more cost if job overruns.</td>
            </tr>
            <tr>
              <td>Strip existing shingles &amp; underlayment</td>
              <td>$1,000 - $1,600</td>
              <td className="guide__highlight">Low</td>
              <td>Predictable labour. Multiple layers slow things down.</td>
            </tr>
            <tr>
              <td>Sheathing repairs (plywood/OSB)</td>
              <td>$0 - $3,500</td>
              <td className="guide__highlight">High</td>
              <td>The big unknown. Could be nothing. Could be a dozen sheets.</td>
            </tr>
            <tr>
              <td>Ice &amp; water shield</td>
              <td>$600 - $1,200</td>
              <td className="guide__highlight">Low</td>
              <td>Required at eaves, valleys, and around penetrations. Essential for Canadian winters.</td>
            </tr>
            <tr>
              <td>Synthetic underlayment</td>
              <td>$400 - $700</td>
              <td className="guide__highlight">Low</td>
              <td>Material cost is stable. Labour included in shingling.</td>
            </tr>
            <tr>
              <td>Shingle supply (architectural)</td>
              <td>$2,500 - $4,000</td>
              <td className="guide__highlight">Medium</td>
              <td>BP, IKO, or CertainTeed. Price varies by colour and availability.</td>
            </tr>
            <tr>
              <td>Shingling labour</td>
              <td>$2,000 - $3,500</td>
              <td className="guide__highlight">Low</td>
              <td>Your crew. Weather delays are the main variable.</td>
            </tr>
            <tr>
              <td>Ridge vent &amp; ridge cap</td>
              <td>$400 - $800</td>
              <td className="guide__highlight">Low</td>
              <td>Standard ridge ventilation. Straightforward install.</td>
            </tr>
            <tr>
              <td>Flashing (step, counter, chimney)</td>
              <td>$500 - $1,200</td>
              <td className="guide__highlight">Medium</td>
              <td>Aluminium or galvanized. Complex roof lines cost more.</td>
            </tr>
            <tr>
              <td>Bin rental &amp; waste disposal</td>
              <td>$500 - $900</td>
              <td className="guide__highlight">Low</td>
              <td>Old shingles are heavy. Usually need a large bin or two smaller ones.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Total range for a full re-roof: <span className="guide__highlight">$9,100 -
        $19,600</span>. That $10,500 spread is not sloppiness — it is genuine uncertainty. The
        sheathing repairs line alone can swing the job by $3,500. Everything else is reasonably
        predictable if you know your supplier prices and crew speed.
      </p>

      <h2>where roofing jobs go wrong in Canada</h2>

      <p>
        Five risk factors dominate roofing quotes in Canada:
      </p>
      <ul>
        <li>
          <strong>Ice dam damage.</strong> Years of ice dams can rot sheathing, fascia, and
          even rafter ends without any visible sign from the ground. If the home is older and
          in a cold climate zone, budget for sheathing replacement and mark it High.
        </li>
        <li>
          <strong>Hidden rot.</strong> You cannot see sheathing condition from the ground. An
          attic inspection helps, but you still will not know for certain until the shingles
          come off. If the roof is 20+ years old, budget for at least some plywood and mark
          it High.
        </li>
        <li>
          <strong>Weather windows.</strong> An open roof cannot sit overnight in rain or snow.
          You need a realistic weather window for the strip-and-paper stage. In shoulder
          seasons (October/November, March/April), that window is smaller. In winter, roofing
          is often impossible. Price accordingly.
        </li>
        <li>
          <strong>Multiple layers.</strong> Some jurisdictions allow two layers of shingles.
          Stripping a double-layered roof takes twice the labour and disposal. Check before
          you quote.
        </li>
        <li>
          <strong>Material price volatility.</strong> Shingle, lumber, and flashing prices have
          all seen sharp moves in recent years. A quote that sits for eight weeks before
          acceptance might need re-pricing. Put an expiry date on your quotes — 30 days
          maximum.
        </li>
      </ul>

      <h2>quoting roofs smarter</h2>

      <p>
        The scaffolding, underlayment, and your labour are all Low uncertainty. You know those
        numbers. The sheathing repairs and flashing are where the risk lives. Instead of
        padding every line with a flat contingency, rate the risky items honestly and simulate
        the range. Your quote then shows the customer a realistic spread — and protects your
        margin on the items that actually blow up.
      </p>

      <div className="guide__cta">
        <Link href="/estimate/">[ ESTIMATE YOUR ROOFING JOB ]</Link>
      </div>
    </div>
  )
}
