import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Roofing Costs Australia 2026 // lowriskquotes',
  description:
    'Realistic roofing costs for Australian tradies. Colorbond, concrete tile, and terracotta re-roofs — with line-by-line risk ratings so you can quote roofing work without getting burned.',
  alternates: { canonical: '/au/guides/roofing-costs/' },
}

export default function AURoofingCostsPage() {
  return (
    <div className="guide">
      <h1>roofing costs: pricing the job you cannot see until you are up there</h1>

      <p>
        Roofing is high-risk quoting by nature. You price it from the ground, then find the
        problems at height. Rotten battens, sagging rafters, rusted flashing that crumbles when
        you touch it. Scaffold goes up, the clock starts, and every surprise costs money.
      </p>
      <p>
        This page breaks down what roofing work actually costs in Australia in 2026 and where
        the uncertainty hides on each line item. Whether it is Colorbond, concrete tiles, or
        terracotta, the risk principles are the same.
      </p>

      <h2>cost ranges by job type</h2>

      <p>
        Ballpark figures for common roofing jobs on a standard 3-bedroom Australian home.
        Actual costs depend on roof pitch, access, material choice, and what you find once
        the old covering comes off.
      </p>

      <ASCIIBox title="Roofing Job Type Costs (AUD)">
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
              <td>Full re-roof — Colorbond</td>
              <td>$10,000 - $25,000</td>
              <td>5-10 days</td>
              <td>Strip tiles, install Colorbond. Huge range based on roof area and access.</td>
            </tr>
            <tr>
              <td>Full re-roof — concrete tiles</td>
              <td>$8,000 - $18,000</td>
              <td>5-10 days</td>
              <td>Strip and re-tile. Price swings on timber condition.</td>
            </tr>
            <tr>
              <td>Full re-roof — terracotta tiles</td>
              <td>$12,000 - $28,000</td>
              <td>7-12 days</td>
              <td>Premium material. Heavier, more labour-intensive.</td>
            </tr>
            <tr>
              <td>Roof restoration (clean, re-point, re-coat)</td>
              <td>$3,500 - $8,000</td>
              <td>3-5 days</td>
              <td>Pressure wash, replace broken tiles, re-point ridges, apply coating.</td>
            </tr>
            <tr>
              <td>Roof repair</td>
              <td>$300 - $2,500</td>
              <td>0.5-2 days</td>
              <td>Cracked tiles to valley repairs. Wide range.</td>
            </tr>
            <tr>
              <td>Fascias, soffits &amp; guttering</td>
              <td>$2,500 - $6,000</td>
              <td>2-4 days</td>
              <td>Colorbond gutters and fascia. Rotten timber adds cost.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <h2>worked example: tile-to-Colorbond conversion on a 3-bed home</h2>

      <p>
        Standard 3-bedroom home in suburban Sydney or Melbourne. Concrete tiles from the 1980s.
        Sarking is deteriorated, some battens suspect. Roof area roughly 180 sqm. Customer wants
        Colorbond standing seam with new guttering.
      </p>

      <ASCIIBox title="Tile-to-Colorbond Cost Breakdown (AUD)">
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
              <td>Scaffold / edge protection</td>
              <td>$1,500 - $3,000</td>
              <td className="guide__highlight">Low</td>
              <td>Get a fixed quote. Longer hire = more cost if job overruns.</td>
            </tr>
            <tr>
              <td>Strip existing tiles &amp; sarking</td>
              <td>$1,200 - $2,000</td>
              <td className="guide__highlight">Low</td>
              <td>Predictable labour. Old mortar ridges slow things down.</td>
            </tr>
            <tr>
              <td>Batten replacement</td>
              <td>$800 - $1,500</td>
              <td className="guide__highlight">Medium</td>
              <td>Full re-batten often needed for Colorbond. Rotten ones snap on removal.</td>
            </tr>
            <tr>
              <td>Sarking / insulation</td>
              <td>$600 - $1,000</td>
              <td className="guide__highlight">Low</td>
              <td>Anticon or similar. Material cost is stable.</td>
            </tr>
            <tr>
              <td>Timber repairs (rafters/purlins)</td>
              <td>$0 - $3,500</td>
              <td className="guide__highlight">High</td>
              <td>The big unknown. Could be nothing. Could be major rafter work.</td>
            </tr>
            <tr>
              <td>Colorbond supply</td>
              <td>$3,000 - $5,000</td>
              <td className="guide__highlight">Medium</td>
              <td>BlueScope pricing. Custom colours or profiles cost more.</td>
            </tr>
            <tr>
              <td>Roofing labour (install)</td>
              <td>$2,500 - $4,000</td>
              <td className="guide__highlight">Low</td>
              <td>Your crew. Weather delays are the main variable.</td>
            </tr>
            <tr>
              <td>Ridge capping &amp; flashing</td>
              <td>$600 - $1,200</td>
              <td className="guide__highlight">Low</td>
              <td>Colorbond ridge and valley. Straightforward.</td>
            </tr>
            <tr>
              <td>Guttering &amp; downpipes</td>
              <td>$1,200 - $2,500</td>
              <td className="guide__highlight">Low</td>
              <td>Colorbond quad or half-round. Standard installation.</td>
            </tr>
            <tr>
              <td>Skip bin &amp; waste disposal</td>
              <td>$600 - $1,200</td>
              <td className="guide__highlight">Low</td>
              <td>Old tiles are heavy. Usually need two skip bins minimum.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Total range for a tile-to-Colorbond conversion: <span className="guide__highlight">$12,000 -
        $24,900</span>. That $12,900 spread is not sloppiness — it is genuine uncertainty. The
        timber repairs line alone can swing the job by $3,500. Everything else is reasonably
        predictable if you know your supplier prices and crew speed.
      </p>

      <h2>where roofing jobs go wrong</h2>

      <p>
        Four risk factors dominate roofing quotes:
      </p>
      <ul>
        <li>
          <strong>Hidden rot.</strong> You cannot see rafter or purlin condition from the ground.
          A roof cavity inspection helps, but you still will not know for certain until the tiles
          come off. If the roof is pre-1990 and has never been touched, budget for at least some
          timber work and mark it High.
        </li>
        <li>
          <strong>Scaffold hire.</strong> The scaffold itself is predictable. The risk is duration.
          If bad weather or timber repairs add three days to the job, you are paying for an extra
          week of hire. Factor that into your scaffold line item.
        </li>
        <li>
          <strong>Weather windows.</strong> An open roof cannot sit overnight in heavy rain —
          especially during summer storm season in QLD and NSW. You need a realistic weather
          window for the strip-and-sark stage. In the wet season, that window is smaller.
          Price accordingly or accept the risk.
        </li>
        <li>
          <strong>Material price volatility.</strong> Steel, timber, and Colorbond have all seen
          sharp price moves in recent years. A quote that sits for eight weeks before acceptance
          might need re-pricing. Put an expiry date on your quotes — 30 days maximum.
        </li>
      </ul>

      <h2>quoting roofs smarter</h2>

      <p>
        The scaffold, sarking, and your labour are all Low uncertainty. You know those numbers.
        The timber repairs and custom Colorbond profiles are where the risk lives. Instead of
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
