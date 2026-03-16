import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'House Extension Costs Australia 2026 // lowriskquotes',
  description:
    'Realistic house extension costs for Australian builders and tradies. Full cost breakdown in AUD with risk ratings for single-storey and double-storey extensions.',
  alternates: { canonical: '/au/guides/extension-costs/' },
}

export default function AUExtensionCostsPage() {
  return (
    <div className="guide">
      <h1>house extension costs: what australian builders need to budget</h1>

      <p>
        Extensions are the big-ticket jobs. They are also where the biggest money gets lost.
        Council approvals drag on, engineers find problems, the existing structure does not line
        up with the plans. Every week of delay costs you labour, hire fees, and opportunity cost
        on the next job.
      </p>
      <p>
        This page breaks down real extension costs in Australia in 2026 and flags where the
        risk hides on each stage of the build.
      </p>

      <h2>cost per square metre</h2>

      <p>
        The most common way to ballpark an extension in Australia is cost per square metre.
        These are builder-to-client rates including labour, materials, and margin — but
        excluding council fees, engineer reports, and site costs.
      </p>

      <ASCIIBox title="Extension Cost Per Sqm (AUD)">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Extension Type</th>
              <th>Cost / sqm</th>
              <th>Risk Level</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Single-storey rear extension</td>
              <td>$2,000 - $3,500</td>
              <td className="guide__highlight">Medium</td>
              <td>Standard timber or steel frame. Slab or stumps.</td>
            </tr>
            <tr>
              <td>Double-storey extension</td>
              <td>$2,800 - $4,500</td>
              <td className="guide__highlight">High</td>
              <td>Structural steel, engineering, scaffolding costs.</td>
            </tr>
            <tr>
              <td>Granny flat / separate dwelling</td>
              <td>$1,800 - $3,200</td>
              <td className="guide__highlight">Medium</td>
              <td>Separate slab. Simpler than tying into existing structure.</td>
            </tr>
            <tr>
              <td>Sunroom / enclosed alfresco</td>
              <td>$1,500 - $2,800</td>
              <td className="guide__highlight">Low - Medium</td>
              <td>Lighter build. Insulation and glazing drive cost.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <h2>worked example: 30 sqm single-storey rear extension</h2>

      <p>
        Adding a living area and second bathroom to a 1970s brick home in Melbourne. Timber
        frame extension on a concrete slab, tying into the existing roofline with a Colorbond
        skillion roof.
      </p>

      <ASCIIBox title="Extension Cost Breakdown (AUD)">
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
              <td>Council / planning approvals</td>
              <td>$2,000 - $5,000</td>
              <td className="guide__highlight">High</td>
              <td>Heritage overlays, neighbour objections, delays</td>
            </tr>
            <tr>
              <td>Engineer &amp; drafting</td>
              <td>$3,000 - $6,000</td>
              <td className="guide__highlight">Medium</td>
              <td>Structural engineer, energy report, soil test</td>
            </tr>
            <tr>
              <td>Site prep &amp; demolition</td>
              <td>$2,000 - $4,000</td>
              <td className="guide__highlight">Medium</td>
              <td>Removing existing walls, stumps, or slab sections</td>
            </tr>
            <tr>
              <td>Concrete slab</td>
              <td>$4,500 - $7,000</td>
              <td className="guide__highlight">Low - Medium</td>
              <td>Standard waffle pod or raft slab. Reactive soil = more cost.</td>
            </tr>
            <tr>
              <td>Framing (timber or steel)</td>
              <td>$6,000 - $10,000</td>
              <td className="guide__highlight">Medium</td>
              <td>LVL beams for openings. Steel portal frames push this up.</td>
            </tr>
            <tr>
              <td>Roofing (Colorbond)</td>
              <td>$3,500 - $6,000</td>
              <td className="guide__highlight">Low</td>
              <td>Tying into existing roofline adds complexity</td>
            </tr>
            <tr>
              <td>Windows &amp; external doors</td>
              <td>$3,000 - $6,000</td>
              <td className="guide__highlight">Medium</td>
              <td>Aluminium standard = Low. Bifold/stacker doors = High.</td>
            </tr>
            <tr>
              <td>Plumbing (new bathroom)</td>
              <td>$4,000 - $7,000</td>
              <td className="guide__highlight">Medium</td>
              <td>New wet area. Sewer connection can be tricky on older blocks.</td>
            </tr>
            <tr>
              <td>Electrics</td>
              <td>$3,000 - $5,000</td>
              <td className="guide__highlight">Medium</td>
              <td>New circuits, switchboard upgrade if needed</td>
            </tr>
            <tr>
              <td>Plastering &amp; internal linings</td>
              <td>$3,000 - $5,000</td>
              <td className="guide__highlight">Low</td>
              <td>Standard plasterboard. Cornice and finishing.</td>
            </tr>
            <tr>
              <td>Tiling (bathroom &amp; laundry)</td>
              <td>$2,500 - $4,500</td>
              <td className="guide__highlight">Low - Medium</td>
              <td>Including waterproofing to Australian Standards</td>
            </tr>
            <tr>
              <td>Painting</td>
              <td>$2,000 - $3,500</td>
              <td className="guide__highlight">Low</td>
              <td>Interior and exterior to match existing</td>
            </tr>
            <tr>
              <td>Flooring</td>
              <td>$2,000 - $4,000</td>
              <td className="guide__highlight">Low</td>
              <td>Hybrid plank or tiles. Subfloor is new so minimal prep.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Total range for a 30 sqm extension: <span className="guide__highlight">$40,500 -
        $77,000</span>. That is roughly $1,350 - $2,570 per square metre all-in. The council
        approvals and engineering alone can swing things by $6,000 before you even break ground.
      </p>

      <h2>where extensions blow budgets</h2>

      <ul>
        <li>
          <strong>Council delays.</strong> In some councils, a Development Application can take
          3-6 months. Every month of delay is a month you are not billing. Factor this into
          your programme and cashflow — or make sure the customer covers holding costs.
        </li>
        <li>
          <strong>Reactive soil.</strong> Much of Melbourne, Adelaide, and parts of Sydney sit
          on reactive clay. This means deeper footings, more reinforcement, and potentially
          engineered slab designs. Get a soil test before pricing the slab.
        </li>
        <li>
          <strong>Tying into existing structure.</strong> The junction between old and new is
          where cracks appear, roofs leak, and levels do not match. Budget extra time and
          materials for the connection point. This is Medium uncertainty at minimum.
        </li>
        <li>
          <strong>Scope creep from the client.</strong> &quot;While you are opening up the back,
          can we redo the kitchen too?&quot; Extensions attract massive scope creep. Get the full
          scope locked down in writing before you start.
        </li>
      </ul>

      <h2>quoting extensions smarter</h2>

      <p>
        The slab, framing, and roofing are relatively predictable for experienced builders.
        The council approvals, engineering discoveries, and connection to the existing structure
        are where the uncertainty lives. Rate each stage honestly, simulate the range, and
        quote at P80. On a $60,000 extension, the difference between a flat 10% contingency
        and a risk-weighted one could be $5,000 or more.
      </p>

      <div className="guide__cta">
        <Link href="/estimate/">[ ESTIMATE YOUR EXTENSION ]</Link>
      </div>
    </div>
  )
}
