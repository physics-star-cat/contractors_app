import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Painting Costs US 2026 // lowriskquotes',
  description:
    'Realistic painting costs for US contractors. Interior and exterior breakdowns with risk ratings so you can bid painting jobs without losing money.',
  alternates: { canonical: '/us/guides/painting-costs/' },
}

export default function PaintingCostsPage() {
  return (
    <div className="guide">
      <h1>painting costs: what contractors need to charge</h1>

      <p>
        Painting looks like the simplest job to bid. Measure the walls, calculate the paint,
        add labor, done. But the margin killers are in the prep — old wallpaper that does not
        want to come off, lead paint that needs abatement, textured ceilings that triple your
        time, and homeowners who pick five different colors for one room.
      </p>
      <p>
        Here is what painting work actually costs in 2026 and where the uncertainty sits on
        each line item.
      </p>

      <h2>interior painting costs</h2>

      <p>
        These are rates for a standard residential interior. Prices assume walls in reasonable
        condition — no major patching or plaster repair needed.
      </p>

      <ASCIIBox title="Interior Painting Costs">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Scope</th>
              <th>Cost Range</th>
              <th>Risk Level</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Single room (12x12)</td>
              <td>$300 - $700</td>
              <td className="guide__highlight">Low</td>
              <td>Walls and ceiling. Two coats. Standard prep.</td>
            </tr>
            <tr>
              <td>Full interior (3-bed home)</td>
              <td>$3,000 - $6,000</td>
              <td className="guide__highlight">Medium</td>
              <td>Depends on room count, ceiling height, trim.</td>
            </tr>
            <tr>
              <td>Cabinet painting</td>
              <td>$1,500 - $4,000</td>
              <td className="guide__highlight">Medium</td>
              <td>Labor-intensive. Spray vs brush matters.</td>
            </tr>
            <tr>
              <td>Trim and doors (whole house)</td>
              <td>$1,500 - $3,500</td>
              <td className="guide__highlight">Low</td>
              <td>Tedious but predictable. Count your doors.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <h2>exterior painting costs</h2>

      <ASCIIBox title="Exterior Painting Costs">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Scope</th>
              <th>Cost Range</th>
              <th>Risk Level</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Full exterior (2,000 sqft home)</td>
              <td>$3,500 - $7,000</td>
              <td className="guide__highlight">Medium</td>
              <td>Siding condition is the variable. Scraping adds days.</td>
            </tr>
            <tr>
              <td>Deck staining (400 sqft)</td>
              <td>$800 - $1,500</td>
              <td className="guide__highlight">Low</td>
              <td>Pressure wash, sand, two coats. Weather dependent.</td>
            </tr>
            <tr>
              <td>Fence staining (100 linear ft)</td>
              <td>$600 - $1,200</td>
              <td className="guide__highlight">Low</td>
              <td>Spray application is fastest. Both sides doubles time.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <h2>where painting jobs go wrong</h2>

      <ul>
        <li>
          <strong>Prep work.</strong> The paint is 20% of the job. The prep is 80%. Old lead
          paint needs RRP-certified abatement. Wallpaper removal can take days. Damaged drywall
          needs patching. If you have not seen the surfaces up close, mark prep as High
          uncertainty.
        </li>
        <li>
          <strong>Color changes.</strong> The homeowner picks a dark color over a light base.
          Now you need three or four coats instead of two. Or they want an accent wall in a
          different color — that is taping, cutting in, and extra time. Confirm final colors
          before you bid.
        </li>
        <li>
          <strong>Exterior weather.</strong> You cannot spray in wind. You cannot paint in
          rain or below 50 degrees. An exterior job in October might lose half its work days
          to weather. Build that into your schedule.
        </li>
        <li>
          <strong>Height and access.</strong> Two-story exteriors need scaffolding or lifts.
          A boom lift rental runs $300-$500/day. That adds up fast on a week-long job.
        </li>
      </ul>

      <h2>worked example: full interior repaint (3-bed ranch)</h2>

      <ASCIIBox title="Interior Repaint Breakdown">
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
              <td>Paint (premium, ~10 gallons)</td>
              <td>$400 - $600</td>
              <td className="guide__highlight">Certain</td>
              <td>Benjamin Moore or Sherwin-Williams. Price is fixed.</td>
            </tr>
            <tr>
              <td>Supplies (tape, drop cloths, caulk)</td>
              <td>$100 - $200</td>
              <td className="guide__highlight">Certain</td>
              <td>Standard consumables. You know the cost.</td>
            </tr>
            <tr>
              <td>Prep (patching, sanding, caulking)</td>
              <td>$400 - $1,000</td>
              <td className="guide__highlight">Medium</td>
              <td>Walls in good shape = Low. Older home with damage = High.</td>
            </tr>
            <tr>
              <td>Labor — walls and ceilings</td>
              <td>$2,000 - $3,500</td>
              <td className="guide__highlight">Low</td>
              <td>Your core skill. Spray vs roll affects speed.</td>
            </tr>
            <tr>
              <td>Labor — trim and doors</td>
              <td>$800 - $1,500</td>
              <td className="guide__highlight">Low</td>
              <td>Time-consuming but predictable. Count your linear feet.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Total range: <span className="guide__highlight">$3,700 - $6,800</span>. Most of the
        spread is in prep. A newer home with clean walls is at the low end. An older home
        with wallpaper, damaged drywall, or lead paint is at the high end.
      </p>

      <h2>bidding painting jobs smarter</h2>

      <p>
        Paint and supplies are Certain — you know exactly what they cost. Your labor on walls
        is Low if it is your regular work. The risk is in prep and anything you have not seen
        up close. Walk the job site, inspect every surface, and rate your uncertainty honestly.
        A simulation will tell you exactly how much buffer to add for the unknowns.
      </p>

      <div className="guide__cta">
        <Link href="/estimate/">[ ESTIMATE YOUR PAINTING JOB ]</Link>
      </div>
    </div>
  )
}
