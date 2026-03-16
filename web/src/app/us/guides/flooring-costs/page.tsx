import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Flooring Costs US 2026 // lowriskquotes',
  description:
    'Realistic flooring installation costs for US contractors. Line-by-line breakdown with uncertainty ratings so you can bid flooring jobs without losing money.',
  alternates: { canonical: '/us/guides/flooring-costs/' },
}

export default function FlooringCostsPage() {
  return (
    <div className="guide">
      <h1>flooring costs: what contractors actually need to know</h1>

      <p>
        Flooring is one of the highest-volume renovation projects in the US. Nearly every remodel
        touches the floors at some point, and whole-house flooring replacements are a massive
        market. The challenge for contractors is that flooring spans a huge range of materials,
        each with different installation methods, subfloor requirements, and labor rates. A
        homeowner asking &ldquo;how much does new flooring cost?&rdquo; could mean anything from
        $2 per sq ft carpet to $15 per sq ft engineered hardwood.
      </p>
      <p>
        This page breaks down real flooring costs in 2026 and shows where the risk sits on each
        line item.
      </p>

      <h2>typical cost breakdown by material</h2>

      <p>
        These are installed costs per square foot for a standard US home. Total project costs
        assume a whole-house install of roughly 1,500 - 2,000 sq ft.
      </p>

      <ASCIIBox title="Flooring Cost Breakdown">
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
              <td>LVP (luxury vinyl plank)</td>
              <td>$3 - $7 per sq ft installed</td>
              <td className="guide__highlight">Low</td>
              <td>Most popular choice in US. Click-lock over most subfloors.</td>
            </tr>
            <tr>
              <td>Engineered hardwood</td>
              <td>$6 - $12 per sq ft installed</td>
              <td className="guide__highlight">Low - Medium</td>
              <td>Nail-down, glue-down, or float. Acclimation time matters.</td>
            </tr>
            <tr>
              <td>Solid hardwood</td>
              <td>$8 - $15 per sq ft installed</td>
              <td className="guide__highlight">Medium</td>
              <td>Nail-down on plywood subfloor only. Sand and finish on site adds cost.</td>
            </tr>
            <tr>
              <td>Porcelain / ceramic tile</td>
              <td>$7 - $14 per sq ft installed</td>
              <td className="guide__highlight">Medium</td>
              <td>Subfloor prep critical. Large format = more cuts and waste.</td>
            </tr>
            <tr>
              <td>Carpet</td>
              <td>$2 - $5 per sq ft installed</td>
              <td className="guide__highlight">Low</td>
              <td>Cheapest option. Pad quality matters. Stairs add labor.</td>
            </tr>
            <tr>
              <td>Laminate</td>
              <td>$3 - $6 per sq ft installed</td>
              <td className="guide__highlight">Low</td>
              <td>Budget alternative to hardwood. Not for wet areas.</td>
            </tr>
            <tr>
              <td>Old flooring removal</td>
              <td>$1 - $3 per sq ft</td>
              <td className="guide__highlight">Low - Medium</td>
              <td>Glue-down vinyl and tile are hardest. Carpet is easiest.</td>
            </tr>
            <tr>
              <td>Subfloor repair / leveling</td>
              <td>$1 - $4 per sq ft</td>
              <td className="guide__highlight">Medium - High</td>
              <td>Uneven subfloors need leveling compound or plywood overlay</td>
            </tr>
            <tr>
              <td>Transitions &amp; trim</td>
              <td>$300 - $1,200</td>
              <td className="guide__highlight">Low</td>
              <td>T-moldings, reducers, baseboards. Often overlooked in bids.</td>
            </tr>
            <tr>
              <td>Dumpster / waste removal</td>
              <td>$300 - $600</td>
              <td className="guide__highlight">Certain</td>
              <td>Old carpet and pad are bulky. Tile demo fills dumpsters fast.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Total range for a whole-house flooring project (1,500 - 2,000 sq ft):
        <span className="guide__highlight">$5,000 - $15,000+</span>. LVP throughout a typical
        home runs $5,000 - $10,000 including removal and transitions. Engineered hardwood pushes
        $10,000 - $18,000. Tile in kitchens and bathrooms with LVP elsewhere is a common combo
        that lands in the $8,000 - $14,000 range.
      </p>

      <h2>where flooring jobs go wrong</h2>

      <p>
        The biggest cost blowouts on flooring come from three places:
      </p>
      <ul>
        <li>
          <strong>Subfloor surprises.</strong> This is the number one risk on any flooring job.
          You pull up the old carpet and find cracked plywood, water damage, or a concrete slab
          that is an inch out of level. LVP is forgiving of minor imperfections, but hardwood
          and tile are not. Leveling a 1,500 sq ft concrete slab can add $2,000 - $4,000 to
          the job. Always check the subfloor condition before giving a firm price — pull up a
          section of existing flooring during the estimate if possible.
        </li>
        <li>
          <strong>Moisture in concrete slabs.</strong> Slab-on-grade homes are common across the
          southern US and in newer construction everywhere. Concrete holds moisture, and if you
          install hardwood or certain underlayments over a slab without testing moisture levels,
          you will have failures. A calcium chloride moisture test costs almost nothing compared
          to a warranty callback. If moisture is high, you are limited to LVP, tile, or a
          moisture barrier system that adds cost.
        </li>
        <li>
          <strong>Scope creep and transitions.</strong> Whole-house flooring touches every room,
          every doorway, every closet. The homeowner asks you to do the stairs too. Then the
          laundry room. Then they want tile in the bathrooms instead of LVP. Every material
          change means a transition strip, a different adhesive or underlayment, and potentially
          a different subcontractor. Nail down the exact scope — room by room — before bidding.
        </li>
      </ul>

      <h2>bidding flooring smarter</h2>

      <p>
        The flooring material itself is the most predictable part of the job — you know the
        square footage, you know the price per box. The risk lives in the subfloor and the
        removal. Rate your subfloor prep as Medium or High uncertainty unless you have physically
        inspected it. Keep the material and installation at Low. Transitions and trim are often
        underestimated — always count your doorways and material changes before bidding.
      </p>

      <div className="guide__cta">
        <Link href="/us/estimate/">[ ESTIMATE YOUR FLOORING JOB ]</Link>
      </div>
    </div>
  )
}
