import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../guides.css'

export const metadata: Metadata = {
  title: 'New Boiler Costs UK 2026 // lowriskquotes',
  description:
    'Realistic new boiler installation costs for UK homeowners and contractors. Combi, system and regular boiler prices with Gas Safe requirements and practical fitting advice.',
  alternates: { canonical: '/guides/new-boiler-costs/' },
}

export default function NewBoilerCostsPage() {
  return (
    <div className="guide">
      <h1>new boiler costs: what installation actually costs in 2026</h1>

      <p>
        Boiler replacements are one of the highest-volume domestic jobs in the UK. Every heating
        engineer knows the basics, but quoting accurately is harder than it looks. A straight
        like-for-like combi swap in a kitchen is a day's work. Moving the boiler to the loft,
        upgrading the system type or dealing with old pipework can turn it into three days with
        additional materials most customers are not expecting to pay for.
      </p>
      <p>
        All gas boiler work in the UK must be carried out by a Gas Safe registered engineer. There
        are no exceptions. If you are quoting gas work and you are not Gas Safe, you need a
        registered subcontractor — and their costs need to be in your estimate.
      </p>

      <h2>typical cost breakdown</h2>

      <p>
        These prices include supply and installation of the boiler. Figures assume a straightforward
        installation with existing pipework in reasonable condition.
      </p>

      <ASCIIBox title="New Boiler Cost Breakdown">
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
              <td>Combi boiler (supply &amp; fit)</td>
              <td>£2,000 - £3,500</td>
              <td className="guide__highlight">Low - Medium</td>
              <td>Like-for-like swap is lowest risk</td>
            </tr>
            <tr>
              <td>System boiler (supply &amp; fit)</td>
              <td>£2,500 - £4,000</td>
              <td className="guide__highlight">Medium</td>
              <td>Needs unvented cylinder — adds cost and space</td>
            </tr>
            <tr>
              <td>Regular/heat-only boiler (supply &amp; fit)</td>
              <td>£2,200 - £3,800</td>
              <td className="guide__highlight">Medium</td>
              <td>Tanks in loft, older system — often an upgrade job</td>
            </tr>
            <tr>
              <td>Flue routing</td>
              <td>£100 - £500</td>
              <td className="guide__highlight">Low - Medium</td>
              <td>Straight through wall = cheap. Long runs = more.</td>
            </tr>
            <tr>
              <td>Power flush</td>
              <td>£350 - £600</td>
              <td className="guide__highlight">Low</td>
              <td>Recommended on older systems to protect new boiler</td>
            </tr>
            <tr>
              <td>Magnetic filter</td>
              <td>£100 - £200</td>
              <td className="guide__highlight">Certain</td>
              <td>Standard fitting on all new installs now</td>
            </tr>
            <tr>
              <td>Radiator upgrades (each)</td>
              <td>£150 - £350</td>
              <td className="guide__highlight">Low</td>
              <td>Often needed if switching to combi from gravity system</td>
            </tr>
            <tr>
              <td>Controls &amp; thermostat</td>
              <td>£150 - £400</td>
              <td className="guide__highlight">Low</td>
              <td>Boiler Plus regs require time/temp controls minimum</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Total range for a typical boiler replacement: <span className="guide__highlight">£2,000 -
        £4,000+</span>. A straight combi swap sits at the lower end. A full system conversion with
        new radiators, power flush and controls will push toward the top and beyond.
      </p>

      <h2>combi vs system vs regular</h2>

      <p>
        Combi boilers dominate the UK market — they heat water on demand with no tank, which suits
        smaller properties. System boilers store hot water in an unvented cylinder, better for
        larger homes with multiple bathrooms. Regular (heat-only) boilers work with a traditional
        tank and cistern setup — mostly found in older properties. Converting from one type to
        another adds significant cost because of the pipework changes involved.
      </p>

      <h2>where boiler jobs go wrong</h2>

      <ul>
        <li>
          <strong>Old pipework.</strong> Microbore pipe, old iron radiators full of sludge, or
          undersized gas supply pipes all cause problems. A power flush helps but does not fix
          fundamentally knackered pipework. Inspect before you quote.
        </li>
        <li>
          <strong>Flue complications.</strong> The boiler needs a flue to the outside, and there
          are strict rules about proximity to windows, boundaries and air bricks. If the obvious
          flue position does not comply, you are re-routing — and that costs time and materials.
        </li>
        <li>
          <strong>System conversions.</strong> Changing from a regular boiler to a combi means
          removing tanks, capping feeds, potentially re-piping the hot water circuit. It is a
          bigger job than most customers expect and needs pricing accordingly.
        </li>
      </ul>

      <h2>quoting boiler jobs smarter</h2>

      <p>
        On a like-for-like combi swap with decent existing pipework, the whole job is Low to Medium
        risk. Once you start moving boilers, changing system types or dealing with properties that
        have not had a plumber near them in twenty years, the uncertainty climbs. Rate each element
        individually. The boiler itself is a known cost — Low once ordered. The pipework
        modifications and flue routing are where the surprises live.
      </p>

      <div className="guide__cta">
        <Link href="/estimate/">[ ESTIMATE YOUR BOILER JOB ]</Link>
      </div>
    </div>
  )
}
