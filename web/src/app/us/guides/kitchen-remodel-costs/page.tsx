import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Kitchen Remodel Costs US 2026 // lowriskquotes',
  description:
    'Realistic kitchen remodel costs for US contractors. Full line-by-line cost breakdown with risk ratings to help you bid kitchen jobs accurately.',
  alternates: { canonical: '/us/guides/kitchen-remodel-costs/' },
}

export default function KitchenRemodelCostsPage() {
  return (
    <div className="guide">
      <h1>kitchen remodel costs: a contractor&apos;s breakdown</h1>

      <p>
        Kitchens are high-value jobs with a lot of moving parts. Plumbing, electrical, gas,
        cabinetry, countertops, tile, flooring, appliances — the coordination alone can eat your
        margin if you have not priced properly. Here is what kitchens actually cost in 2026
        and where the risk hides.
      </p>

      <h2>typical cost breakdown</h2>

      <p>
        Mid-range kitchen remodel for a typical US home. This assumes a full gut and refit,
        not just refacing doors.
      </p>

      <ASCIIBox title="Kitchen Cost Breakdown">
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
              <td>Demo &amp; disposal</td>
              <td>$800 - $1,500</td>
              <td className="guide__highlight">Low</td>
              <td>Predictable unless asbestos is present</td>
            </tr>
            <tr>
              <td>Cabinets (supply &amp; install)</td>
              <td>$5,000 - $15,000</td>
              <td className="guide__highlight">Medium</td>
              <td>Home Depot/Lowes stock = Low. Custom cabinetry = High.</td>
            </tr>
            <tr>
              <td>Countertops</td>
              <td>$1,200 - $5,000</td>
              <td className="guide__highlight">Medium - High</td>
              <td>Laminate = Low. Granite/quartz templated on-site = High.</td>
            </tr>
            <tr>
              <td>Plumbing</td>
              <td>$800 - $1,800</td>
              <td className="guide__highlight">Medium</td>
              <td>Moving the sink location adds cost and risk</td>
            </tr>
            <tr>
              <td>Electrical</td>
              <td>$1,200 - $2,500</td>
              <td className="guide__highlight">Medium</td>
              <td>New panel or rewire pushes this up</td>
            </tr>
            <tr>
              <td>Gas (range, relocation)</td>
              <td>$400 - $1,200</td>
              <td className="guide__highlight">Low</td>
              <td>Licensed sub. Straightforward if no relocation.</td>
            </tr>
            <tr>
              <td>Tile (backsplash &amp; floor)</td>
              <td>$1,000 - $3,000</td>
              <td className="guide__highlight">Low</td>
              <td>Standard subway tile = certain. Complex patterns = Medium.</td>
            </tr>
            <tr>
              <td>Flooring</td>
              <td>$600 - $1,800</td>
              <td className="guide__highlight">Low</td>
              <td>LVP or hardwood. Subfloor prep can add cost.</td>
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
              <td>Usually homeowner-purchased. Confirm before bidding.</td>
            </tr>
            <tr>
              <td>Dumpster / waste</td>
              <td>$400 - $700</td>
              <td className="guide__highlight">Certain</td>
              <td>Fixed price, book in advance</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Total range for a mid-spec kitchen: <span className="guide__highlight">$14,000 -
        $41,700</span>. The huge range comes down to cabinet quality, countertop material, and
        how much layout change is involved.
      </p>

      <h2>where kitchens blow budgets</h2>

      <ul>
        <li>
          <strong>Countertops.</strong> Templated stone countertops are measured after the cabinets are
          installed, then fabricated off-site. If the template is wrong or the stone has a flaw,
          you are waiting weeks for a replacement. Mark custom countertops as High uncertainty.
        </li>
        <li>
          <strong>Layout changes.</strong> Moving the sink means moving waste and water. Moving
          the range means moving gas and venting. Each relocation is another subcontractor,
          another day, another point of failure. If the homeowner wants to move everything, your
          plumbing and electrical estimates should be Medium at minimum.
        </li>
        <li>
          <strong>Lead times.</strong> Custom cabinets, stone countertops, and specialty appliances
          can take 4-8 weeks. If one item is late, your whole schedule shifts. Price the risk
          of dead time into your bid or make sure the homeowner understands delays are at
          their cost.
        </li>
        <li>
          <strong>Scope creep.</strong> &quot;While you are here, can you move that return air?&quot;
          &quot;Actually, can we redo the whole dining room too?&quot; Kitchens attract scope creep because
          homeowners see the mess and want everything fixed at once. Have a clear scope in
          writing before you start.
        </li>
      </ul>

      <h2>bidding kitchens with confidence</h2>

      <p>
        A kitchen with stock Home Depot cabinets, laminate countertops, and no layout changes is
        mostly Low-uncertainty work. You could bid close to your base estimate. A kitchen
        with custom cabinetry, granite countertops, and a full layout redesign is packed with
        High-uncertainty items. Your contingency needs to reflect that.
      </p>
      <p>
        Rate each line item honestly, run the simulation, and bid at P80. Your bid will
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
