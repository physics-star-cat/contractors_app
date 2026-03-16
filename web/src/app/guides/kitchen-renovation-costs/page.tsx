import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../guides.css'

export const metadata: Metadata = {
  title: 'Kitchen Renovation Costs UK 2026 // lowriskquotes',
  description:
    'Realistic kitchen renovation costs for UK contractors. Full line-by-line cost breakdown with risk ratings to help you quote kitchen jobs accurately.',
  alternates: { canonical: '/guides/kitchen-renovation-costs/' },
}

export default function KitchenRenovationCostsPage() {
  return (
    <div className="guide">
      <h1>kitchen renovation costs: a contractor&apos;s breakdown</h1>

      <p>
        Kitchens are high-value jobs with a lot of moving parts. Plumbing, electrics, gas,
        joinery, worktops, tiling, flooring, appliances — the coordination alone can eat your
        margin if you have not priced properly. Here is what kitchens actually cost in 2026
        and where the risk hides.
      </p>

      <h2>typical cost breakdown</h2>

      <p>
        Mid-range kitchen renovation for a typical 3-bed UK home. This assumes a full strip-out
        and refit, not just changing doors.
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
              <td>Strip out &amp; disposal</td>
              <td>£500 - £1,000</td>
              <td className="guide__highlight">Low</td>
              <td>Predictable unless asbestos is present</td>
            </tr>
            <tr>
              <td>Kitchen units (supply &amp; fit)</td>
              <td>£3,000 - £8,000</td>
              <td className="guide__highlight">Medium</td>
              <td>Howdens = Low. Bespoke joinery = High.</td>
            </tr>
            <tr>
              <td>Worktops</td>
              <td>£800 - £3,500</td>
              <td className="guide__highlight">Medium - High</td>
              <td>Laminate = Low. Granite/quartz templated on-site = High.</td>
            </tr>
            <tr>
              <td>Plumbing</td>
              <td>£600 - £1,200</td>
              <td className="guide__highlight">Medium</td>
              <td>Moving the sink location adds cost and risk</td>
            </tr>
            <tr>
              <td>Electrics</td>
              <td>£800 - £1,500</td>
              <td className="guide__highlight">Medium</td>
              <td>New consumer unit or rewire pushes this up</td>
            </tr>
            <tr>
              <td>Gas (hob, boiler relocation)</td>
              <td>£300 - £800</td>
              <td className="guide__highlight">Low</td>
              <td>Gas Safe registered sub. Straightforward if no relocation.</td>
            </tr>
            <tr>
              <td>Tiling (splashback &amp; floor)</td>
              <td>£800 - £2,000</td>
              <td className="guide__highlight">Low</td>
              <td>Standard metro tiles = certain. Complex patterns = Medium.</td>
            </tr>
            <tr>
              <td>Flooring</td>
              <td>£400 - £1,200</td>
              <td className="guide__highlight">Low</td>
              <td>LVT or vinyl. Subfloor prep can add cost.</td>
            </tr>
            <tr>
              <td>Plastering &amp; decoration</td>
              <td>£400 - £800</td>
              <td className="guide__highlight">Low</td>
              <td>Straightforward. Old kitchens may need more prep.</td>
            </tr>
            <tr>
              <td>Appliances</td>
              <td>£1,000 - £4,000</td>
              <td className="guide__highlight">Certain - Low</td>
              <td>Usually customer-purchased. Confirm before quoting.</td>
            </tr>
            <tr>
              <td>Skip / waste</td>
              <td>£300 - £500</td>
              <td className="guide__highlight">Certain</td>
              <td>Fixed price, book in advance</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Total range for a mid-spec kitchen: <span className="guide__highlight">£8,900 -
        £24,500</span>. The huge range comes down to unit quality, worktop material, and
        how much layout change is involved.
      </p>

      <h2>where kitchens blow budgets</h2>

      <ul>
        <li>
          <strong>Worktops.</strong> Templated stone worktops are measured after the units are
          fitted, then fabricated off-site. If the template is wrong or the stone has a flaw,
          you are waiting weeks for a replacement. Mark bespoke worktops as High uncertainty.
        </li>
        <li>
          <strong>Layout changes.</strong> Moving the sink means moving waste and water. Moving
          the hob means moving gas and extraction. Each relocation is another subcontractor,
          another day, another point of failure. If the customer wants to move everything, your
          plumbing and electrical estimates should be Medium at minimum.
        </li>
        <li>
          <strong>Lead times.</strong> Bespoke units, stone worktops, and specialist appliances
          can take 4-8 weeks. If one item is late, your whole programme shifts. Price the risk
          of dead time into your quote or make sure the customer understands delays are at
          their cost.
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
        A kitchen with standard Howdens units, laminate worktops, and no layout changes is
        mostly Low-uncertainty work. You could quote close to your base estimate. A kitchen
        with bespoke joinery, granite worktops, and a full layout redesign is packed with
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
