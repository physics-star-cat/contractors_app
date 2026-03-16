import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Deck Building Costs US 2026 // lowriskquotes',
  description:
    'Realistic deck building costs for US contractors. Line-by-line breakdown with uncertainty ratings so you can bid deck projects without losing money.',
  alternates: { canonical: '/us/guides/deck-building-costs/' },
}

export default function DeckBuildingCostsPage() {
  return (
    <div className="guide">
      <h1>deck building costs: what contractors actually need to know</h1>

      <p>
        Decks are one of the most-searched renovation projects in the US market. Homeowners want
        outdoor living space, and they want to know what it costs. The tricky part for contractors
        is that deck pricing swings wildly based on one decision: pressure-treated lumber vs
        composite decking. That single choice can double your materials line item.
      </p>
      <p>
        This page breaks down real deck building costs in 2026 and shows you where the risk sits
        on each line item.
      </p>

      <h2>typical cost breakdown</h2>

      <p>
        These are costs for a standard US deck build (roughly 300 - 400 sq ft, attached to the
        house, one level). Multi-level decks, rooftop decks, and screened-in structures will cost
        significantly more.
      </p>

      <ASCIIBox title="Deck Building Cost Breakdown">
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
              <td>Permits &amp; engineering</td>
              <td>$200 - $800</td>
              <td className="guide__highlight">Certain</td>
              <td>Required almost everywhere. Some jurisdictions need engineered plans.</td>
            </tr>
            <tr>
              <td>Footings (concrete piers / sonotubes)</td>
              <td>$500 - $2,000</td>
              <td className="guide__highlight">Medium - High</td>
              <td>Frost depth varies by region. Rocky soil = more labor.</td>
            </tr>
            <tr>
              <td>Framing (joists, beams, ledger board)</td>
              <td>$1,500 - $3,500</td>
              <td className="guide__highlight">Low - Medium</td>
              <td>Ledger attachment to house is critical. Flashing is code.</td>
            </tr>
            <tr>
              <td>Decking — pressure-treated lumber</td>
              <td>$1,800 - $3,500</td>
              <td className="guide__highlight">Low</td>
              <td>$6 - $9 per sq ft installed. Needs staining every 2-3 years.</td>
            </tr>
            <tr>
              <td>Decking — composite (Trex / TimberTech)</td>
              <td>$3,500 - $7,000</td>
              <td className="guide__highlight">Low</td>
              <td>$12 - $22 per sq ft installed. Low maintenance sells.</td>
            </tr>
            <tr>
              <td>Railing system</td>
              <td>$1,000 - $3,500</td>
              <td className="guide__highlight">Low - Medium</td>
              <td>Wood = cheapest. Cable or glass = premium. Code requires 36&quot; min.</td>
            </tr>
            <tr>
              <td>Stairs</td>
              <td>$500 - $2,000</td>
              <td className="guide__highlight">Medium</td>
              <td>Each set of stairs adds material and code requirements</td>
            </tr>
            <tr>
              <td>Fasteners &amp; hardware</td>
              <td>$300 - $800</td>
              <td className="guide__highlight">Low</td>
              <td>Hidden fastener systems for composite add cost but look clean</td>
            </tr>
            <tr>
              <td>Labor (total)</td>
              <td>$3,000 - $6,000</td>
              <td className="guide__highlight">Medium</td>
              <td>Typically 50-60% of total for wood, 40-50% for composite</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Total range for a standard deck: <span className="guide__highlight">$8,000 - $25,000</span>.
        A basic 12 x 16 pressure-treated deck with simple railings can come in around $8,000 -
        $12,000. A 400 sq ft composite deck with cable railing and built-in lighting runs $18,000 -
        $25,000 or more.
      </p>

      <h2>where deck jobs go wrong</h2>

      <p>
        The biggest cost blowouts on deck builds come from three places:
      </p>
      <ul>
        <li>
          <strong>Footing problems.</strong> Frost depth requirements vary dramatically across
          the US — 12 inches in the South, 48 inches or more in northern states. If you hit rock,
          a high water table, or unstable soil, your footing costs can triple. Always check local
          frost depth codes and ideally probe the soil before pricing footings.
        </li>
        <li>
          <strong>Permit and code surprises.</strong> Deck codes have gotten stricter. The ledger
          board connection, joist hangers, railing height (36 inches minimum, 42 inches in some
          jurisdictions), and baluster spacing (less than 4 inches) are all inspected. If the
          existing house rim joist is rotted or the siding makes proper ledger attachment
          difficult, you are looking at extra work and cost.
        </li>
        <li>
          <strong>Material price swings.</strong> Lumber prices are more stable than the 2021
          spike but still fluctuate. Composite decking prices vary by brand and product line.
          Lock in material pricing before finalizing your bid, and note that special-order colors
          or profiles can have long lead times.
        </li>
      </ul>

      <h2>bidding decks smarter</h2>

      <p>
        Your footings and framing are where the real uncertainty lives. The decking itself is
        predictable — you know the square footage and the price per board. Rate your footings as
        Medium or High uncertainty depending on soil conditions, keep the decking at Low, and
        your bid will reflect where the actual risk sits instead of padding everything equally.
      </p>

      <div className="guide__cta">
        <Link href="/us/estimate/">[ ESTIMATE YOUR DECK JOB ]</Link>
      </div>
    </div>
  )
}
