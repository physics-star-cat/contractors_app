import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Kitchen Renovation Costs Australia 2026 // lowriskquotes',
  description:
    'Realistic kitchen renovation costs for Australian tradies. Full line-by-line cost breakdown in AUD with risk ratings to help you quote kitchen jobs accurately.',
  alternates: { canonical: '/au/guides/kitchen-renovation-costs/' },
}

export default function AUKitchenRenovationCostsPage() {
  return (
    <div className="guide">
      <h1>kitchen renovation costs: an aussie tradie&apos;s breakdown</h1>

      <p>
        Kitchens are high-value jobs with a lot of moving parts. Plumbing, electrics, gas,
        joinery, benchtops, tiling, flooring, appliances — the coordination alone can eat your
        margin if you have not priced properly. Here is what kitchens actually cost in
        Australia in 2026 and where the risk hides.
      </p>

      <h2>typical cost breakdown</h2>

      <p>
        Mid-range kitchen renovation for a typical 3-bedroom Australian home. This assumes a
        full strip-out and refit, not just changing doors.
      </p>

      <ASCIIBox title="Kitchen Cost Breakdown (AUD)">
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
              <td>$750 - $1,500</td>
              <td className="guide__highlight">Low</td>
              <td>Predictable unless asbestos is present (common in pre-1990 homes)</td>
            </tr>
            <tr>
              <td>Kitchen cabinetry (supply &amp; fit)</td>
              <td>$5,000 - $15,000</td>
              <td className="guide__highlight">Medium</td>
              <td>Flat-pack from Bunnings = Low. Custom joinery = High.</td>
            </tr>
            <tr>
              <td>Benchtops</td>
              <td>$1,200 - $5,500</td>
              <td className="guide__highlight">Medium - High</td>
              <td>Laminate = Low. Caesarstone/engineered stone templated on-site = High.</td>
            </tr>
            <tr>
              <td>Plumbing</td>
              <td>$900 - $1,800</td>
              <td className="guide__highlight">Medium</td>
              <td>Moving the sink location adds cost and risk</td>
            </tr>
            <tr>
              <td>Electrics</td>
              <td>$1,200 - $2,200</td>
              <td className="guide__highlight">Medium</td>
              <td>New switchboard or rewire pushes this up</td>
            </tr>
            <tr>
              <td>Gas (cooktop, oven relocation)</td>
              <td>$450 - $1,200</td>
              <td className="guide__highlight">Low</td>
              <td>Licensed gasfitter required. Straightforward if no relocation.</td>
            </tr>
            <tr>
              <td>Tiling (splashback &amp; floor)</td>
              <td>$1,200 - $3,000</td>
              <td className="guide__highlight">Low</td>
              <td>Standard subway tiles = Certain. Complex patterns = Medium.</td>
            </tr>
            <tr>
              <td>Flooring</td>
              <td>$600 - $1,800</td>
              <td className="guide__highlight">Low</td>
              <td>Vinyl plank or hybrid. Subfloor prep can add cost.</td>
            </tr>
            <tr>
              <td>Plastering &amp; painting</td>
              <td>$600 - $1,200</td>
              <td className="guide__highlight">Low</td>
              <td>Straightforward. Old kitchens may need more prep.</td>
            </tr>
            <tr>
              <td>Appliances</td>
              <td>$2,000 - $8,000</td>
              <td className="guide__highlight">Certain - Low</td>
              <td>Usually customer-purchased. Confirm before quoting.</td>
            </tr>
            <tr>
              <td>Skip bin / waste</td>
              <td>$400 - $700</td>
              <td className="guide__highlight">Certain</td>
              <td>Fixed price, book in advance</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Total range for a mid-spec kitchen: <span className="guide__highlight">$14,300 -
        $41,900</span>. The huge range comes down to cabinetry quality, benchtop material, and
        how much layout change is involved.
      </p>

      <h2>where kitchens blow budgets</h2>

      <ul>
        <li>
          <strong>Benchtops.</strong> Templated stone benchtops (Caesarstone, Essastone, or
          similar) are measured after the cabinets are fitted, then fabricated off-site. If the
          template is wrong or the stone has a flaw, you are waiting weeks for a replacement.
          Mark bespoke benchtops as High uncertainty.
        </li>
        <li>
          <strong>Layout changes.</strong> Moving the sink means moving waste and water. Moving
          the cooktop means moving gas and extraction. Each relocation is another subbie,
          another day, another point of failure. If the customer wants to move everything, your
          plumbing and electrical estimates should be Medium at minimum.
        </li>
        <li>
          <strong>Lead times.</strong> Custom cabinetry, stone benchtops, and imported appliances
          can take 4-8 weeks. If one item is late, your whole programme shifts. Price the risk
          of dead time into your quote or make sure the customer understands delays are at
          their cost.
        </li>
        <li>
          <strong>Scope creep.</strong> &quot;While you are here, can you move that power point?&quot;
          &quot;Actually, can we replaster the whole room?&quot; Kitchens attract scope creep because
          customers see the mess and want everything fixed at once. Have a clear scope in
          writing before you start.
        </li>
      </ul>

      <h2>quoting kitchens with confidence</h2>

      <p>
        A kitchen with flat-pack cabinets from Bunnings, laminate benchtops, and no layout
        changes is mostly Low-uncertainty work. You could quote close to your base estimate. A
        kitchen with custom joinery, stone benchtops, and a full layout redesign is packed with
        High-uncertainty items. Your contingency needs to reflect that.
      </p>
      <p>
        Rate each line item honestly, run the simulation, and quote at P80. Your quote will
        be higher on risky jobs and tighter on simple ones — which is exactly how it should
        be.
      </p>

      {/* MiniEstimator component will be added here */}

      <div className="guide__cta">
        <Link href="/estimate/">[ ESTIMATE YOUR KITCHEN JOB ]</Link>
      </div>
    </div>
  )
}
