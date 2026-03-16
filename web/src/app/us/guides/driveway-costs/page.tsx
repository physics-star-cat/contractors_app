import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'driveway costs // lowriskquotes',
  description:
    'Realistic driveway costs for US contractors. Concrete, asphalt, pavers, and gravel — with line-by-line risk ratings so you bid driveways without losing your shirt.',
  alternates: { canonical: '/us/guides/driveway-costs/' },
}

export default function DrivewayCostsPage() {
  return (
    <div className="guide">
      <h1>driveway costs: what the bid actually needs to cover</h1>

      <p>
        Driveways look straightforward on paper. Tear it out, prep the base, pour or pave, done.
        But the margin killers hide underneath — literally. Bad drainage, soft subgrade, tree roots
        wrecking the base, restricted access for equipment. A driveway that looks like a
        two-day job can turn into a week if you have not scoped it properly.
      </p>
      <p>
        Here is what driveways actually cost in 2026 and where the risk sits on each line.
      </p>

      <h2>cost per sqft by surface type</h2>

      <p>
        These are supply-and-install rates for a standard residential driveway (roughly 400-600
        sqft). Prices assume reasonable access and a stable subgrade.
      </p>

      <ASCIIBox title="Surface Type Costs">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Surface Type</th>
              <th>Cost per sqft</th>
              <th>Lifespan</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Gravel</td>
              <td>$2 - $5</td>
              <td>5-10 years</td>
              <td>Cheapest option. Needs edging and fabric.</td>
            </tr>
            <tr>
              <td>Asphalt</td>
              <td>$4 - $8</td>
              <td>15-20 years</td>
              <td>Most common in northern states. Needs good base.</td>
            </tr>
            <tr>
              <td>Concrete</td>
              <td>$6 - $12</td>
              <td>25-30 years</td>
              <td>Most popular nationwide. Stamped adds $4-8/sqft.</td>
            </tr>
            <tr>
              <td>Pavers</td>
              <td>$10 - $20</td>
              <td>25-50 years</td>
              <td>Premium option. Labor-intensive. Herringbone costs more.</td>
            </tr>
            <tr>
              <td>Exposed aggregate</td>
              <td>$8 - $14</td>
              <td>25-30 years</td>
              <td>Decorative concrete. Needs experienced finisher.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <h2>worked example: 500 sqft concrete driveway</h2>

      <p>
        Single-family home. Old cracked concrete driveway being torn out and replaced with
        a new 4-inch concrete slab with broom finish. Reasonable access for a bobcat.
      </p>

      <ASCIIBox title="Driveway Cost Breakdown">
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
              <td>Demolition &amp; removal</td>
              <td>$1,000 - $2,000</td>
              <td className="guide__highlight">Medium</td>
              <td>Depends on thickness, rebar, and what is underneath</td>
            </tr>
            <tr>
              <td>Hauling / dumpster</td>
              <td>$600 - $1,200</td>
              <td className="guide__highlight">Low</td>
              <td>Book in advance. Concrete is heavy — budget accordingly.</td>
            </tr>
            <tr>
              <td>Grading &amp; base prep</td>
              <td>$800 - $1,500</td>
              <td className="guide__highlight">Medium</td>
              <td>Soft spots need extra depth. This is where jobs go wrong.</td>
            </tr>
            <tr>
              <td>Drainage</td>
              <td>$500 - $1,500</td>
              <td className="guide__highlight">High</td>
              <td>Required by code in many areas. Variable soil conditions.</td>
            </tr>
            <tr>
              <td>Concrete (ready-mix delivery)</td>
              <td>$1,500 - $2,500</td>
              <td className="guide__highlight">Low</td>
              <td>Price per yard is stable. Short loads cost more per yard.</td>
            </tr>
            <tr>
              <td>Labor (forming, pouring, finishing)</td>
              <td>$2,000 - $3,500</td>
              <td className="guide__highlight">Low</td>
              <td>Your crew. Stamped or exposed aggregate takes longer.</td>
            </tr>
            <tr>
              <td>Forms &amp; rebar/mesh</td>
              <td>$400 - $700</td>
              <td className="guide__highlight">Low</td>
              <td>Standard materials. Fiber mesh is cheaper than rebar.</td>
            </tr>
            <tr>
              <td>Expansion joints &amp; sealing</td>
              <td>$200 - $400</td>
              <td className="guide__highlight">Low</td>
              <td>Cut joints prevent random cracking. Sealer optional.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Total range for a 500 sqft concrete driveway: <span className="guide__highlight">$7,000
        - $13,300</span>. The spread comes down to soil conditions and drainage. On a good site
        with stable subgrade, you are at the low end. Clay soil with poor drainage pushes you high.
      </p>

      <h2>where driveway jobs go wrong</h2>

      <p>
        Four things blow up driveway bids:
      </p>
      <ul>
        <li>
          <strong>Subgrade condition.</strong> You tear out the old slab and find clay, tree roots,
          or old utility lines. Now you are digging deeper and bringing in more base material. That
          one item can add $500-$1,500 to the job. Always probe before you price.
        </li>
        <li>
          <strong>Drainage.</strong> Many municipalities require proper drainage for impervious
          surfaces. A French drain on difficult ground is unpredictable. Rate it High unless you
          have done a soil test.
        </li>
        <li>
          <strong>Access.</strong> No room for a bobcat means hand-digging. No road access for
          a concrete truck means pumping, which adds $800-$1,500. Both cost time. Price them in
          or lose money.
        </li>
        <li>
          <strong>Weather.</strong> You cannot pour concrete in freezing temps or heavy rain.
          A job scheduled for late fall might get pushed weeks. Have a weather contingency plan.
        </li>
      </ul>

      <h2>bidding driveways smarter</h2>

      <p>
        The base prep and drainage are where uncertainty lives. Everything above ground is
        predictable — you know your concrete prices, you know your pour rate. So rate those items
        Low and put the honest uncertainty on the sitework. Feed it through a simulation and
        your bid covers the real risk instead of a blanket 15% markup.
      </p>

      <div className="guide__cta">
        <Link href="/estimate/">[ ESTIMATE YOUR DRIVEWAY JOB ]</Link>
      </div>
    </div>
  )
}
