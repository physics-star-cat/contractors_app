import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Kitchen Renovation Costs Canada 2026 // lowriskquotes',
  description:
    'Realistic kitchen renovation costs for Canadian contractors in CAD. Full line-by-line cost breakdown with risk ratings to help you quote kitchen jobs accurately.',
  alternates: { canonical: '/ca/guides/kitchen-renovation-costs/' },
}

export default function KitchenRenovationCostsPageCA() {
  return (
    <div className="guide">
      <h1>kitchen renovation costs: a Canadian contractor&apos;s breakdown</h1>

      <p>
        Kitchens are high-value jobs with a lot of moving parts. Plumbing, electrical, gas,
        cabinetry, countertops, tiling, flooring, appliances — the coordination alone can eat
        your margin if you have not priced properly. Here is what kitchens actually cost in
        Canada in 2026 and where the risk hides. All prices in CAD.
      </p>

      <h2>typical cost breakdown</h2>

      <p>
        Mid-range kitchen renovation for a typical 3-bedroom Canadian home. This assumes a
        full strip-out and refit, not just changing doors.
      </p>

      <ASCIIBox title="Kitchen Cost Breakdown (CAD)">
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
              <td>$800 - $1,600</td>
              <td className="guide__highlight">Low</td>
              <td>Predictable unless asbestos is present</td>
            </tr>
            <tr>
              <td>Cabinets (supply &amp; install)</td>
              <td>$5,000 - $15,000</td>
              <td className="guide__highlight">Medium</td>
              <td>IKEA/stock = Low. Custom cabinetry = High.</td>
            </tr>
            <tr>
              <td>Countertops</td>
              <td>$1,200 - $6,000</td>
              <td className="guide__highlight">Medium - High</td>
              <td>Laminate = Low. Granite/quartz templated on-site = High.</td>
            </tr>
            <tr>
              <td>Plumbing</td>
              <td>$900 - $2,000</td>
              <td className="guide__highlight">Medium</td>
              <td>Moving the sink location adds cost and risk</td>
            </tr>
            <tr>
              <td>Electrical</td>
              <td>$1,200 - $2,500</td>
              <td className="guide__highlight">Medium</td>
              <td>Panel upgrade or rewire pushes this up</td>
            </tr>
            <tr>
              <td>Gas (range, relocation)</td>
              <td>$400 - $1,200</td>
              <td className="guide__highlight">Low</td>
              <td>Licensed gas fitter required. Straightforward if no relocation.</td>
            </tr>
            <tr>
              <td>Tiling (backsplash &amp; floor)</td>
              <td>$1,200 - $3,200</td>
              <td className="guide__highlight">Low</td>
              <td>Standard subway tile = certain. Complex patterns = Medium.</td>
            </tr>
            <tr>
              <td>Flooring</td>
              <td>$600 - $2,000</td>
              <td className="guide__highlight">Low</td>
              <td>LVP or vinyl. Subfloor prep can add cost.</td>
            </tr>
            <tr>
              <td>Drywall &amp; painting</td>
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
              <td>Bin rental / waste</td>
              <td>$400 - $700</td>
              <td className="guide__highlight">Certain</td>
              <td>Fixed price, book in advance</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Total range for a mid-spec kitchen: <span className="guide__highlight">$14,300 -
        $43,400</span>. The huge range comes down to cabinet quality, countertop material, and
        how much layout change is involved. Add HST/GST on top.
      </p>

      <h2>where kitchens blow budgets</h2>

      <ul>
        <li>
          <strong>Countertops.</strong> Templated stone countertops are measured after the
          cabinets are installed, then fabricated off-site. If the template is wrong or the
          stone has a flaw, you are waiting weeks for a replacement. Mark bespoke countertops
          as High uncertainty.
        </li>
        <li>
          <strong>Layout changes.</strong> Moving the sink means moving waste and water. Moving
          the range means moving gas and ventilation. Each relocation is another subtrade,
          another day, another point of failure. If the customer wants to move everything, your
          plumbing and electrical estimates should be Medium at minimum.
        </li>
        <li>
          <strong>Lead times.</strong> Custom cabinets, stone countertops, and specialty
          appliances can take 4-10 weeks. If one item is late, your whole programme shifts.
          Price the risk of dead time into your quote or make sure the customer understands
          delays are at their cost.
        </li>
        <li>
          <strong>Scope creep.</strong> &quot;While you are here, can you move that radiator?&quot;
          &quot;Actually, can we replaster the whole room?&quot; Kitchens attract scope creep because
          customers see the mess and want everything fixed at once. Have a clear scope in
          writing before you start.
        </li>
      </ul>

      <h2>quoting kitchens with confidence</h2>

      <p>
        A kitchen with stock IKEA cabinets, laminate countertops, and no layout changes is
        mostly Low-uncertainty work. You could quote close to your base estimate. A kitchen
        with custom cabinetry, quartz countertops, and a full layout redesign is packed with
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
