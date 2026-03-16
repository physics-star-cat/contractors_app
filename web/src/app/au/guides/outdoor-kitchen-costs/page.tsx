import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Outdoor Kitchen Costs Australia 2026 // lowriskquotes',
  description:
    'Real outdoor kitchen costs for Australian tradies. BBQ setups to full alfresco kitchens — AUD pricing, risk ratings, and what catches builders out.',
  alternates: { canonical: '/au/guides/outdoor-kitchen-costs/' },
}

export default function AUOutdoorKitchenCostsPage() {
  return (
    <div className="guide">
      <h1>outdoor kitchen costs: pricing alfresco builds in australia</h1>

      <p>
        Outdoor kitchens are one of the fastest-growing renovation categories in Australia.
        The climate suits it, the lifestyle demands it, and clients are willing to spend serious
        money. But quoting these jobs is tricky — you are dealing with gas, water, electrical,
        and weather exposure all in one build. Get the scope wrong and your margin disappears.
      </p>
      <p>
        This guide covers what outdoor kitchens actually cost to build in Australia in 2026, from
        a basic built-in BBQ setup through to a full alfresco kitchen with sink, fridge, and
        pizza oven.
      </p>

      <h2>typical cost breakdown</h2>

      <p>
        These figures cover a mid-range outdoor kitchen build. A basic built-in BBQ station
        starts lower, while a full alfresco kitchen with stone benchtops and Colorbond roofing
        pushes well past the top end.
      </p>

      <ASCIIBox title="Outdoor Kitchen Cost Breakdown (AUD)">
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
              <td>BBQ unit (built-in)</td>
              <td>$2,000 - $8,000</td>
              <td className="guide__highlight">Low</td>
              <td>Beefeater, Ziegler &amp; Brown popular. Customer-supplied = Medium risk.</td>
            </tr>
            <tr>
              <td>Cabinetry / frame</td>
              <td>$3,000 - $10,000</td>
              <td className="guide__highlight">Medium</td>
              <td>Rendered block, stone veneer, or marine-grade stainless. Weather exposure matters.</td>
            </tr>
            <tr>
              <td>Benchtops</td>
              <td>$1,500 - $5,000</td>
              <td className="guide__highlight">Medium</td>
              <td>Caesarstone, granite, or polished concrete. Templating adds lead time.</td>
            </tr>
            <tr>
              <td>Gas connection</td>
              <td>$800 - $2,500</td>
              <td className="guide__highlight">High</td>
              <td>Licensed gasfitter required. Distance from meter is the variable.</td>
            </tr>
            <tr>
              <td>Plumbing (sink)</td>
              <td>$1,200 - $3,000</td>
              <td className="guide__highlight">High</td>
              <td>Hot water, waste connection, and drainage. Council may require trade waste.</td>
            </tr>
            <tr>
              <td>Electrical</td>
              <td>$800 - $2,000</td>
              <td className="guide__highlight">Low - Medium</td>
              <td>Power points, lighting, rangehood. RCD protection mandatory outdoors.</td>
            </tr>
            <tr>
              <td>Roofing / shelter</td>
              <td>$3,000 - $12,000</td>
              <td className="guide__highlight">Medium</td>
              <td>Colorbond, insulated panels, or louvre system. Council approval often needed.</td>
            </tr>
            <tr>
              <td>Tiling / flooring</td>
              <td>$1,500 - $4,000</td>
              <td className="guide__highlight">Low</td>
              <td>Non-slip rated essential. Drainage fall must be correct.</td>
            </tr>
            <tr>
              <td>Council approval</td>
              <td>$200 - $800</td>
              <td className="guide__highlight">Medium</td>
              <td>Required in most councils if roofed or near boundary. Check CDC vs DA.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Total range for a mid-spec outdoor kitchen: <span className="guide__highlight">$15,000 -
        $50,000+</span>. A basic built-in BBQ with rendered block surround and no plumbing can
        come in under $10,000. A full alfresco kitchen with pizza oven, sink, fridge, and
        insulated roofing easily exceeds $50,000.
      </p>

      <h2>where outdoor kitchens go wrong</h2>

      <p>
        The biggest cost blowouts on outdoor kitchen builds come from three areas:
      </p>
      <ul>
        <li>
          <strong>Underestimating services.</strong> Gas and plumbing are the killers. Running a
          new gas line 15 metres from the meter is not the same as tapping into an existing bayonet.
          Always get your gasfitter and plumber to quote before you price the job — not after.
        </li>
        <li>
          <strong>Weatherproofing failures.</strong> This is an outdoor structure. Every material
          has to handle UV, rain, and temperature swings. Cheap cabinetry warps. Untreated steel
          rusts. Rendered block without proper sealing cracks. Spend on materials now or come back
          to fix it under warranty later.
        </li>
        <li>
          <strong>Council surprises.</strong> Many tradies assume outdoor kitchens are exempt from
          approval. They often are not — especially if you are adding a roof, building near a
          boundary, or connecting to sewer. Check your local council requirements before you start.
          A Complying Development Certificate (CDC) is quicker than a full DA but not always available.
        </li>
      </ul>

      <h2>quoting outdoor kitchens smarter</h2>

      <p>
        Do not lump an outdoor kitchen into one line item. Break it into structure, services,
        and finishes. Rate each one separately. The BBQ unit from Bunnings is Certain. The gas
        connection across the yard is High. The custom stone benchtop is Medium at best. When
        you simulate those individually, you get a quote range that actually protects your margin
        instead of a single number you hope works out.
      </p>

      <div className="guide__cta">
        <Link href="/au/estimate/">[ ESTIMATE YOUR OUTDOOR KITCHEN JOB ]</Link>
      </div>
    </div>
  )
}
