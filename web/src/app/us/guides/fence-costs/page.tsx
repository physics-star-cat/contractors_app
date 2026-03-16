import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Fence Costs US 2026 // lowriskquotes',
  description:
    'Realistic fence installation costs for US contractors. Line-by-line breakdown with uncertainty ratings so you can bid fence jobs without losing money.',
  alternates: { canonical: '/us/guides/fence-costs/' },
}

export default function FenceCostsPage() {
  return (
    <div className="guide">
      <h1>fence costs: what contractors actually need to know</h1>

      <p>
        Fence installation is high-volume work across the US. Homeowners want privacy, security,
        or just a defined yard — and they are searching for pricing constantly. For contractors,
        fencing can be steady profitable work, but only if you bid it right. The per-linear-foot
        pricing looks simple until you factor in terrain, rocky soil, property line disputes, and
        HOA restrictions that force material changes mid-project.
      </p>
      <p>
        This page breaks down real fence costs in 2026 and shows where the risk sits on each
        line item.
      </p>

      <h2>typical cost breakdown</h2>

      <p>
        These are costs for a standard US residential fence project (roughly 150 - 200 linear
        feet). Pricing is shown per linear foot and as a total range for a typical yard.
      </p>

      <ASCIIBox title="Fence Cost Breakdown">
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
              <td>Wood privacy fence (6 ft)</td>
              <td>$18 - $35 per linear ft</td>
              <td className="guide__highlight">Low</td>
              <td>Cedar costs more than pine. Most popular style in US.</td>
            </tr>
            <tr>
              <td>Vinyl / PVC fence</td>
              <td>$25 - $45 per linear ft</td>
              <td className="guide__highlight">Low</td>
              <td>Higher material cost, lower maintenance. HOA-friendly.</td>
            </tr>
            <tr>
              <td>Chain-link fence (4 - 6 ft)</td>
              <td>$10 - $20 per linear ft</td>
              <td className="guide__highlight">Low</td>
              <td>Cheapest option. Privacy slats add $3 - $5 per ft.</td>
            </tr>
            <tr>
              <td>Aluminum / ornamental iron</td>
              <td>$25 - $55 per linear ft</td>
              <td className="guide__highlight">Low - Medium</td>
              <td>Popular for front yards. Custom heights and styles vary.</td>
            </tr>
            <tr>
              <td>Post holes (digging &amp; concrete)</td>
              <td>$800 - $2,000</td>
              <td className="guide__highlight">Medium - High</td>
              <td>Rocky soil, roots, or clay = much more labor</td>
            </tr>
            <tr>
              <td>Gates (walk &amp; drive)</td>
              <td>$200 - $1,200 each</td>
              <td className="guide__highlight">Medium</td>
              <td>Double drive gates cost more. Hardware matters for longevity.</td>
            </tr>
            <tr>
              <td>Property line survey</td>
              <td>$300 - $800</td>
              <td className="guide__highlight">Certain</td>
              <td>Strongly recommended. Building on the wrong line = tear it down.</td>
            </tr>
            <tr>
              <td>Permit</td>
              <td>$50 - $400</td>
              <td className="guide__highlight">Certain</td>
              <td>Required in most jurisdictions. Some exempt under 6 ft.</td>
            </tr>
            <tr>
              <td>Old fence removal &amp; disposal</td>
              <td>$500 - $1,500</td>
              <td className="guide__highlight">Low - Medium</td>
              <td>Concrete-set posts are harder to remove</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Total range for a typical residential fence (150 - 200 linear feet):
        <span className="guide__highlight">$3,000 - $10,000</span>. A basic cedar privacy fence
        around a standard yard runs $4,500 - $7,000. Vinyl fencing for the same yard runs $5,000 -
        $9,000. Chain-link is the budget option at $2,000 - $4,000.
      </p>

      <h2>where fence jobs go wrong</h2>

      <p>
        The biggest cost blowouts on fence installs come from three places:
      </p>
      <ul>
        <li>
          <strong>Soil and terrain.</strong> Flat sandy soil is easy. Rocky ground, heavy clay,
          tree roots, and slopes are not. On a sloped yard, every panel needs to be stepped or
          racked, which adds significant labor. If you hit rock at 18 inches and need 36-inch
          post depth, you are either renting a rock drill or switching to driven posts. Always
          walk the full fence line and probe a few post locations before bidding.
        </li>
        <li>
          <strong>Property line problems.</strong> Building a fence 6 inches onto a neighbor&#39;s
          property can mean tearing it all down. A survey costs $300 - $800 and is worth every
          dollar. If the homeowner does not have a recent survey, strongly recommend one.
          Existing stakes and assumed boundaries are not reliable.
        </li>
        <li>
          <strong>HOA and code restrictions.</strong> Many HOAs dictate fence style, height,
          color, and even which side faces out. Municipal codes may restrict height in front yards
          (often 4 feet max) and require setbacks from property lines. Always verify HOA rules
          and local code before ordering materials. A homeowner who wants a 6-foot wood privacy
          fence may be required to install 4-foot aluminum in the front.
        </li>
      </ul>

      <h2>bidding fences smarter</h2>

      <p>
        The materials and labor per linear foot are predictable on flat ground with clean soil.
        The risk lives in the post holes and the terrain. Rate your post hole work honestly — if
        the yard is rocky or sloped, that line item is High uncertainty. Keep the fencing material
        itself at Low. Your bid will reflect where the real risk sits.
      </p>

      <div className="guide__cta">
        <Link href="/us/estimate/">[ ESTIMATE YOUR FENCE JOB ]</Link>
      </div>
    </div>
  )
}
