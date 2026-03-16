import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../guides.css'

export const metadata: Metadata = {
  title: 'driveway costs // lowriskquotes',
  description:
    'Realistic driveway costs for UK contractors. Block paving, tarmac, resin-bound, gravel and concrete — with line-by-line risk ratings so you quote driveways without losing your shirt.',
  alternates: { canonical: '/guides/driveway-costs/' },
}

export default function DrivewayCostsPage() {
  return (
    <div className="guide">
      <h1>driveway costs: what the quote actually needs to cover</h1>

      <p>
        Driveways look straightforward on paper. Dig it out, lay a sub-base, surface it, done.
        But the margin killers hide underneath — literally. Bad drainage, soft ground, tree roots
        wrecking the sub-base, restricted access for a mini digger. A driveway that looks like a
        two-day job can turn into a week if you have not scoped it properly.
      </p>
      <p>
        Here is what driveways actually cost in 2026 and where the risk sits on each line.
      </p>

      <h2>cost per sqm by surface type</h2>

      <p>
        These are supply-and-fit rates for a standard domestic driveway (roughly 40-50 sqm).
        Prices assume reasonable access and a stable sub-base.
      </p>

      <ASCIIBox title="Surface Type Costs">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Surface Type</th>
              <th>Cost per sqm</th>
              <th>Lifespan</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Gravel</td>
              <td>£30 - £60</td>
              <td>10-15 years</td>
              <td>Cheapest option. Needs edging and weed membrane.</td>
            </tr>
            <tr>
              <td>Tarmac</td>
              <td>£45 - £80</td>
              <td>15-20 years</td>
              <td>Fast to lay. Needs a solid sub-base or it cracks.</td>
            </tr>
            <tr>
              <td>Concrete</td>
              <td>£50 - £90</td>
              <td>20-30 years</td>
              <td>Pattern imprint adds £20-30/sqm on top.</td>
            </tr>
            <tr>
              <td>Block paving</td>
              <td>£70 - £120</td>
              <td>25-30 years</td>
              <td>Most popular. Labour-intensive. Herringbone costs more.</td>
            </tr>
            <tr>
              <td>Resin-bound</td>
              <td>£60 - £100</td>
              <td>15-25 years</td>
              <td>Permeable. Needs a solid existing base or new tarmac base.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <h2>worked example: 50 sqm block paving driveway</h2>

      <p>
        Semi-detached house. Old tarmac driveway being dug out and replaced with block paving.
        Dropped kerb already in place. Reasonable side access for a mini digger.
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
              <td>Excavation &amp; removal</td>
              <td>£800 - £1,400</td>
              <td className="guide__highlight">Medium</td>
              <td>Depends on depth and what is underneath</td>
            </tr>
            <tr>
              <td>Skip hire (2-3 skips)</td>
              <td>£500 - £900</td>
              <td className="guide__highlight">Low</td>
              <td>Book in advance. Permit if on road.</td>
            </tr>
            <tr>
              <td>Sub-base (Type 1 MOT)</td>
              <td>£600 - £1,000</td>
              <td className="guide__highlight">Medium</td>
              <td>Soft spots need extra depth. This is where jobs go wrong.</td>
            </tr>
            <tr>
              <td>Drainage / soakaway</td>
              <td>£400 - £1,200</td>
              <td className="guide__highlight">High</td>
              <td>Required for non-permeable surfaces. Variable ground conditions.</td>
            </tr>
            <tr>
              <td>Block paving supply</td>
              <td>£1,200 - £2,000</td>
              <td className="guide__highlight">Low</td>
              <td>Standard blocks. Premium colours and patterns cost more.</td>
            </tr>
            <tr>
              <td>Laying &amp; compacting</td>
              <td>£1,500 - £2,500</td>
              <td className="guide__highlight">Low</td>
              <td>Your labour. Herringbone takes longer than stretcher bond.</td>
            </tr>
            <tr>
              <td>Edging &amp; haunching</td>
              <td>£300 - £500</td>
              <td className="guide__highlight">Low</td>
              <td>Concrete edging or kerb. Straightforward.</td>
            </tr>
            <tr>
              <td>Manhole cover recesses</td>
              <td>£80 - £200</td>
              <td className="guide__highlight">Medium</td>
              <td>Recessed covers look better. Some need adjusting to level.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Total range for a 50 sqm block paving driveway: <span className="guide__highlight">£5,380
        - £9,700</span>. The spread comes down to ground conditions and drainage. On a good site
        with stable ground, you are at the low end. Clay soil with poor drainage pushes you high.
      </p>

      <h2>where driveway jobs go wrong</h2>

      <p>
        Four things blow up driveway quotes:
      </p>
      <ul>
        <li>
          <strong>Sub-base condition.</strong> You dig out the old surface and find clay, rubble,
          or tree roots. Now you are digging deeper and bringing in more Type 1. That one item can
          add £500-£1,000 to the job. Always probe before you price.
        </li>
        <li>
          <strong>Drainage.</strong> Since 2008, non-permeable driveways over 5 sqm need planning
          permission or a drainage solution. A soakaway on difficult ground is unpredictable. Rate
          it High unless you have done a perc test.
        </li>
        <li>
          <strong>Access.</strong> No room for a mini digger means hand-digging. No road access for
          a grab lorry means wheelbarrowing. Both cost time. Price them in or lose money.
        </li>
        <li>
          <strong>Skip hire.</strong> Old driveways produce a lot of spoil. Underestimate the skip
          count and you are paying for an extra one mid-job at a premium.
        </li>
      </ul>

      <h2>quoting driveways smarter</h2>

      <p>
        The sub-base and drainage are where uncertainty lives. Everything above ground is
        predictable — you know your block prices, you know your laying speed. So rate those items
        Low and put the honest uncertainty on the groundworks. Feed it through a simulation and
        your quote covers the real risk instead of a blanket 15% markup.
      </p>

      <div className="guide__cta">
        <Link href="/estimate/">[ ESTIMATE YOUR DRIVEWAY JOB ]</Link>
      </div>
    </div>
  )
}
