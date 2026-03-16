import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Concrete Patio Costs US 2026 // lowriskquotes',
  description:
    'Realistic concrete patio costs for US contractors. Line-by-line breakdown with uncertainty ratings so you can bid patio jobs without losing money.',
  alternates: { canonical: '/us/guides/concrete-patio-costs/' },
}

export default function ConcretePatiosCostsPage() {
  return (
    <div className="guide">
      <h1>concrete patio costs: what contractors actually need to know</h1>

      <p>
        Concrete patios are one of the most common outdoor projects in the US. Homeowners want a
        flat, durable surface for entertaining, and concrete delivers that at a reasonable price
        point. But for contractors, the bidding challenge is that concrete work spans a huge range —
        a basic broom-finish slab is a completely different job from a stamped and stained
        decorative patio with integrated seating walls.
      </p>
      <p>
        This page breaks down real concrete patio costs in 2026 and shows where the risk sits on
        each line item.
      </p>

      <h2>typical cost breakdown</h2>

      <p>
        These are costs for a standard US residential concrete patio (roughly 300 - 400 sq ft).
        Pricing varies significantly by finish type and site conditions.
      </p>

      <ASCIIBox title="Concrete Patio Cost Breakdown">
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
              <td>Site prep &amp; grading</td>
              <td>$500 - $2,000</td>
              <td className="guide__highlight">Medium - High</td>
              <td>Slope, drainage, and soil type drive this number</td>
            </tr>
            <tr>
              <td>Gravel base (4 - 6 in.)</td>
              <td>$400 - $1,000</td>
              <td className="guide__highlight">Low</td>
              <td>Compacted gravel is essential. Do not skip this.</td>
            </tr>
            <tr>
              <td>Forms &amp; rebar / wire mesh</td>
              <td>$400 - $1,200</td>
              <td className="guide__highlight">Low</td>
              <td>Curved forms cost more than straight runs</td>
            </tr>
            <tr>
              <td>Concrete (plain broom finish)</td>
              <td>$6 - $10 per sq ft</td>
              <td className="guide__highlight">Low</td>
              <td>Standard 4-inch slab. Most affordable option.</td>
            </tr>
            <tr>
              <td>Stamped concrete</td>
              <td>$12 - $20 per sq ft</td>
              <td className="guide__highlight">Medium</td>
              <td>Pattern, color hardener, and release agent add cost and skill</td>
            </tr>
            <tr>
              <td>Stained / colored concrete</td>
              <td>$8 - $15 per sq ft</td>
              <td className="guide__highlight">Medium</td>
              <td>Acid stain or integral color. Results vary by technique.</td>
            </tr>
            <tr>
              <td>Footings (frost depth)</td>
              <td>$500 - $2,500</td>
              <td className="guide__highlight">Medium - High</td>
              <td>Northern states require footings below frost line. Major cost add.</td>
            </tr>
            <tr>
              <td>Sealing</td>
              <td>$200 - $600</td>
              <td className="guide__highlight">Certain</td>
              <td>Recommended for all finishes. Required for stamped.</td>
            </tr>
            <tr>
              <td>Concrete pump (if needed)</td>
              <td>$300 - $800</td>
              <td className="guide__highlight">Certain</td>
              <td>Needed if truck cannot reach the pour site</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Total range for a standard concrete patio (300 - 400 sq ft):
        <span className="guide__highlight">$3,000 - $12,000</span>. A basic broom-finish slab
        runs $3,000 - $5,000. A stamped patio with color and sealer runs $6,000 - $10,000.
        Add steps, seat walls, or a fire pit pad and you are pushing toward $12,000 or beyond.
      </p>

      <h2>where concrete patio jobs go wrong</h2>

      <p>
        The biggest cost blowouts on concrete patios come from three places:
      </p>
      <ul>
        <li>
          <strong>Grade and drainage.</strong> If the site slopes toward the house, you need to
          regrade or add drainage — and that is not optional. Water pooling against a foundation
          causes serious problems. A site that looks flat can have subtle grade issues that only
          show up when you start digging. Always check the grade with a laser level before pricing
          the job, and plan for proper slope away from the structure (1/8 inch per foot minimum).
        </li>
        <li>
          <strong>Frost depth requirements.</strong> In northern US states, a freestanding patio
          slab on grade is fine, but if it connects to or supports a structure (like a covered
          patio or pergola), footings may need to go below frost line — 36 to 48 inches in many
          northern states. That turns a simple slab pour into a much bigger excavation job. Always
          check local code before bidding.
        </li>
        <li>
          <strong>Stamped concrete execution.</strong> Stamping looks great when done well, but
          it is time-sensitive and unforgiving. You are working against the concrete cure time.
          If the crew is not experienced with the specific pattern and color system, you can end
          up with inconsistent stamps, color variation, or surface defects that are impossible to
          fix without tearing it out. If you are subbing out the stamping, verify the crew&#39;s
          track record.
        </li>
      </ul>

      <h2>bidding concrete patios smarter</h2>

      <p>
        The concrete itself is predictable — you know the square footage and the per-yard price
        from your supplier. The risk lives in the site prep and the finish complexity. Rate your
        grading and site prep honestly based on what you see on the ground. Keep the basic pour
        at Low uncertainty. If stamping is involved, rate it Medium at minimum. Your bid will
        reflect where the actual risk sits instead of guessing with a flat markup.
      </p>

      <div className="guide__cta">
        <Link href="/us/estimate/">[ ESTIMATE YOUR CONCRETE PATIO JOB ]</Link>
      </div>
    </div>
  )
}
