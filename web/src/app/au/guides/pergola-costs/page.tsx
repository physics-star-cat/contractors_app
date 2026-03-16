import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Pergola Costs Australia 2026 // lowriskquotes',
  description:
    'Pergola and patio costs in Australia — timber, aluminium, insulated panels. Real tradie pricing per square metre with council exemption sizes and risk ratings.',
  alternates: { canonical: '/au/guides/pergola-costs/' },
}

export default function AUPergolaCostsPage() {
  return (
    <div className="guide">
      <h1>pergola costs: timber, aluminium, and insulated builds in australia</h1>

      <p>
        Pergolas and patios are bread-and-butter work for Australian tradies. The demand is
        year-round, the jobs are visible (great for referrals), and the product range has
        expanded from basic timber frames to insulated aluminium systems that are essentially
        outdoor rooms. But the quoting needs to account for council rules, site conditions,
        and the gap between what the client pictures on Pinterest and what their budget allows.
      </p>
      <p>
        This guide covers what pergolas and patios actually cost to build in Australia in 2026,
        from a simple timber frame through to a full insulated patio system.
      </p>

      <h2>typical cost breakdown</h2>

      <p>
        These are supply-and-install costs for common pergola and patio builds. Size is the
        biggest variable — a 3m x 3m pergola costs far less per square metre than a 6m x 4m
        structure because the fixed costs (footings, connections, guttering) spread further.
      </p>

      <ASCIIBox title="Pergola / Patio Cost Breakdown (AUD)">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Cost Range</th>
              <th>Risk Level</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Timber pergola (open)</td>
              <td>$5,000 - $12,000</td>
              <td className="guide__highlight">Low</td>
              <td>Treated pine or hardwood. Open rafters, no roofing. Popular for vines and shade cloth.</td>
            </tr>
            <tr>
              <td>Timber pergola (roofed)</td>
              <td>$8,000 - $18,000</td>
              <td className="guide__highlight">Low - Medium</td>
              <td>Polycarbonate or Colorbond roof. Needs guttering and proper fall. Council approval likely.</td>
            </tr>
            <tr>
              <td>Aluminium patio (flat roof)</td>
              <td>$6,000 - $14,000</td>
              <td className="guide__highlight">Low</td>
              <td>Stratco Outback, Lysaght, or similar. Powder-coated. Low maintenance. Fast install.</td>
            </tr>
            <tr>
              <td>Insulated patio (panel roof)</td>
              <td>$10,000 - $25,000</td>
              <td className="guide__highlight">Low - Medium</td>
              <td>Stratco Cooldek or similar. 50-100mm insulated panels. Keeps heat out, looks clean.</td>
            </tr>
            <tr>
              <td>Louvre roof system</td>
              <td>$15,000 - $35,000</td>
              <td className="guide__highlight">Medium</td>
              <td>Vergola, Eclipse, or similar. Adjustable blades. Premium product, premium price.</td>
            </tr>
            <tr>
              <td>Footings (per post)</td>
              <td>$150 - $400</td>
              <td className="guide__highlight">Low - Medium</td>
              <td>450mm diameter, 600mm deep minimum. Rocky ground or reactive clay adds cost.</td>
            </tr>
            <tr>
              <td>Concrete slab / base</td>
              <td>$60 - $100/m²</td>
              <td className="guide__highlight">Medium</td>
              <td>If no existing slab. Prep, boxing, pour, finish. Site access affects price.</td>
            </tr>
            <tr>
              <td>Electrical (fan, lights)</td>
              <td>$500 - $2,000</td>
              <td className="guide__highlight">Low</td>
              <td>Ceiling fan, downlights, power point. Licensed sparky required.</td>
            </tr>
            <tr>
              <td>Council approval</td>
              <td>$200 - $800</td>
              <td className="guide__highlight">Low - Medium</td>
              <td>Many pergolas under 20sqm are exempt. Roofed structures usually need approval.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Total range for a typical pergola or patio: <span className="guide__highlight">$5,000 -
        $25,000</span>. A basic 3m x 3m timber pergola with no roofing comes in under $6,000.
        A 6m x 4m insulated Stratco Outback patio with fan, lights, and a new concrete slab
        easily reaches $20,000-$25,000.
      </p>

      <h2>where pergola builds go wrong</h2>

      <ul>
        <li>
          <strong>Council exemptions misunderstood.</strong> Many tradies assume all pergolas are
          council-exempt. The rules vary by state and council. In NSW, an open pergola under
          20sqm that is not near a boundary is usually exempt. Add a roof and it changes. In
          Queensland, anything attached to the house over 10sqm typically needs approval. Always
          check your specific council — a $200 CDC is cheaper than a stop-work order.
        </li>
        <li>
          <strong>Attachment to existing structure.</strong> Bolting a patio to the fascia of an
          older home can be risky. Rotten fascia boards, undersized rafters, or an existing roof
          that was not engineered for additional load. If the attachment point fails, the whole
          structure comes down. Get an engineer&apos;s detail for the connection if there is any
          doubt.
        </li>
        <li>
          <strong>Drainage and fall.</strong> A roofed pergola needs guttering and downpipes, and
          the fall needs to direct water away from the house. Poor drainage creates damp issues
          against the existing wall. It sounds basic but it is one of the most common callbacks
          on patio jobs.
        </li>
        <li>
          <strong>Ground conditions.</strong> Post footings in reactive clay (common in Melbourne
          and Adelaide) or rocky ground (common in Sydney) add significant cost. A footing that
          takes 20 minutes on sandy soil takes two hours in sandstone. Price your footings at
          Medium uncertainty unless you know the ground conditions.
        </li>
      </ul>

      <h2>quoting pergolas smarter</h2>

      <p>
        A pergola quote should separate structure, roofing, footings, slab (if needed), and
        electrical. The aluminium frame from Stratco is a fixed price — Low uncertainty. The
        footings are Medium until you know the soil. The concrete slab is Medium because access
        and ground prep vary. Electrical is Low if your sparky gives you a fixed price. Rate
        each component honestly and simulate the range. That gives your client a realistic
        band instead of a single number that either scares them off or costs you money.
      </p>

      <div className="guide__cta">
        <Link href="/au/estimate/">[ ESTIMATE YOUR PERGOLA BUILD ]</Link>
      </div>
    </div>
  )
}
