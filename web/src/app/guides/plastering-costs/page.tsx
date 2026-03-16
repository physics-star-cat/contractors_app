import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../guides.css'

export const metadata: Metadata = {
  title: 'plastering costs // lowriskquotes',
  description:
    'UK plastering costs broken down by type: skim coat, full re-plaster, dry lining, and rendering. Per-sqm rates, risk factors, and a worked example for a 3-bed house.',
  alternates: { canonical: '/guides/plastering-costs/' },
}

export default function PlasteringCostsPage() {
  return (
    <div className="guide">
      <h1>plastering costs: real numbers for real jobs</h1>

      <p>
        Plastering looks straightforward on paper. Strip it, skim it, done. But anyone who has
        priced a full re-plaster knows the reality. Old lime plaster that falls off in chunks.
        Damp patches that reappear two days after you finish. Ceilings that flex when you look
        at them wrong.
      </p>
      <p>
        Here are the actual costs you should be working with in 2026, broken down by job type
        and the risks that blow budgets.
      </p>

      <h2>cost by plastering type</h2>

      <ASCIIBox title="Plastering Rates per sqm">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Cost per sqm</th>
              <th>Typical Use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Skim coat (over existing plaster)</td>
              <td>£8 - £15</td>
              <td>Smooth finish on sound surfaces</td>
            </tr>
            <tr>
              <td>Full re-plaster (2 coat)</td>
              <td>£18 - £30</td>
              <td>Back to brick, fresh start</td>
            </tr>
            <tr>
              <td>Dry lining (dot and dab)</td>
              <td>£12 - £22</td>
              <td>Uneven walls, insulation upgrades</td>
            </tr>
            <tr>
              <td>External rendering</td>
              <td>£25 - £45</td>
              <td>Sand/cement, monocouche, silicone</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Labour is the main cost. Materials for a skim run about £2-£4 per sqm. The rest is time,
        skill, and dealing with whatever the walls throw at you.
      </p>

      <h2>risk factors that move the price</h2>

      <ul>
        <li>
          <strong>Old plaster removal.</strong> Stripping blown plaster adds £5-£10 per sqm.
          On older properties, half the wall can come away with it. Budget for disposal too —
          plaster is heavy and fills skips fast.
        </li>
        <li>
          <strong>Damp issues.</strong> Plastering over damp is a callback waiting to happen.
          If there is any sign of moisture, the source needs sorting first. That is a separate
          cost and a separate timeline. Mark it High uncertainty.
        </li>
        <li>
          <strong>Ceiling work.</strong> Ceilings take longer per sqm than walls. Working
          overhead is slower and harder on the body. Lath and plaster ceilings that need
          replacing can double the ceiling cost — you are boarding before you skim.
        </li>
        <li>
          <strong>Access and room size.</strong> Stairwells, high ceilings, and tight box rooms
          all slow you down. Scaffolding for a stairwell adds £200-£400. Small rooms have more
          fiddly cuts per sqm than open spaces.
        </li>
      </ul>

      <h2>worked example: 3-bed house full re-plaster</h2>

      <p>
        Standard 1930s 3-bed semi. All rooms stripped back and re-plastered. Ceilings skimmed.
        Roughly 180 sqm of wall area, 65 sqm of ceiling.
      </p>

      <ASCIIBox title="3-Bed Re-plaster Breakdown">
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
              <td>Strip old plaster (walls)</td>
              <td>£900 - £1,800</td>
              <td className="guide__highlight">Medium</td>
              <td>Lime plaster comes off unpredictably</td>
            </tr>
            <tr>
              <td>Re-plaster walls (2 coat)</td>
              <td>£3,200 - £5,400</td>
              <td className="guide__highlight">Low</td>
              <td>Straightforward once walls are prepped</td>
            </tr>
            <tr>
              <td>Ceiling skim (all rooms)</td>
              <td>£650 - £1,300</td>
              <td className="guide__highlight">Medium</td>
              <td>Depends on ceiling condition</td>
            </tr>
            <tr>
              <td>Ceiling boarding (where needed)</td>
              <td>£400 - £900</td>
              <td className="guide__highlight">High</td>
              <td>Only know once you inspect the lath</td>
            </tr>
            <tr>
              <td>Materials</td>
              <td>£500 - £700</td>
              <td className="guide__highlight">Low</td>
              <td>Multi-finish, bonding, beads, PVA</td>
            </tr>
            <tr>
              <td>Skip &amp; waste removal</td>
              <td>£300 - £500</td>
              <td className="guide__highlight">Certain</td>
              <td>Old plaster is heavy — may need two loads</td>
            </tr>
            <tr>
              <td>Stairwell access</td>
              <td>£200 - £400</td>
              <td className="guide__highlight">Certain</td>
              <td>Scaffold tower or stair platform hire</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Total range: <span className="guide__highlight">£6,150 - £11,000</span>. The spread is
        wide because you do not know what the ceilings need until you are up there. A house with
        sound ceilings comes in at the low end. A house with blown lath and plaster everywhere
        hits the top.
      </p>

      <h2>quoting plastering work smarter</h2>

      <p>
        Stop guessing contingencies. Rate each line item for what it actually is. The materials
        are Certain. The skim on sound plasterboard is Low. That 1920s ceiling you have not
        opened up yet is High. Run the numbers through a proper simulation and your quote
        covers the real risk — not a made-up percentage.
      </p>

      <div className="guide__cta">
        <Link href="/estimate/">[ ESTIMATE YOUR PLASTERING JOB ]</Link>
      </div>
    </div>
  )
}
