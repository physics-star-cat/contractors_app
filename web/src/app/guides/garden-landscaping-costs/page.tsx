import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../guides.css'

export const metadata: Metadata = {
  title: 'Garden Landscaping Costs UK 2026 // lowriskquotes',
  description:
    'Realistic garden landscaping costs for UK homeowners and contractors. Patio, lawn, fencing, planting and drainage prices with per-sqm rates and practical advice.',
  alternates: { canonical: '/guides/garden-landscaping-costs/' },
}

export default function GardenLandscapingCostsPage() {
  return (
    <div className="guide">
      <h1>garden landscaping costs: realistic prices for UK gardens</h1>

      <p>
        Landscaping is one of those jobs where the scope can balloon without anyone noticing. What
        starts as "a new patio and some turf" turns into drainage works, a retaining wall, six
        tonnes of topsoil and a skip that needs emptying twice. The key to quoting landscaping
        profitably is breaking every element down and rating the uncertainty honestly.
      </p>
      <p>
        For an average UK rear garden (around 50-80 sqm), a full landscape including patio, lawn,
        fencing and planting will typically land between <span className="guide__highlight">£5,000
        and £20,000</span>. The range is wide because every garden is different.
      </p>

      <h2>typical cost breakdown</h2>

      <ASCIIBox title="Garden Landscaping Cost Breakdown">
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
              <td>Site clearance &amp; levelling</td>
              <td>£500 - £2,000</td>
              <td className="guide__highlight">Medium - High</td>
              <td>Old concrete, roots, buried rubble all add time</td>
            </tr>
            <tr>
              <td>Patio (per sqm, laid)</td>
              <td>£80 - £150/sqm</td>
              <td className="guide__highlight">Low - Medium</td>
              <td>Material choice drives this — see patio guide</td>
            </tr>
            <tr>
              <td>Lawn (turf, per sqm)</td>
              <td>£15 - £30/sqm</td>
              <td className="guide__highlight">Low</td>
              <td>Includes topsoil and preparation. Seed is cheaper.</td>
            </tr>
            <tr>
              <td>Fencing (per metre)</td>
              <td>£80 - £120/m</td>
              <td className="guide__highlight">Low - Medium</td>
              <td>Standard 6ft close-board. Concrete posts last longer.</td>
            </tr>
            <tr>
              <td>Planting &amp; beds</td>
              <td>£500 - £3,000</td>
              <td className="guide__highlight">Low</td>
              <td>Depends entirely on plant spec and bed sizes</td>
            </tr>
            <tr>
              <td>Drainage</td>
              <td>£500 - £2,500</td>
              <td className="guide__highlight">High</td>
              <td>Essential on clay soils. French drains, soakaways.</td>
            </tr>
            <tr>
              <td>Skip hire (per skip)</td>
              <td>£250 - £400</td>
              <td className="guide__highlight">Certain</td>
              <td>Most landscape jobs need at least one</td>
            </tr>
            <tr>
              <td>Retaining walls</td>
              <td>£150 - £300/m</td>
              <td className="guide__highlight">Medium</td>
              <td>Needed on sloped sites. Sleepers or block.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <h2>access issues</h2>

      <p>
        Access is the hidden cost killer on landscaping jobs. If materials cannot be delivered
        directly to the rear garden — and on most terraced and semi-detached houses they cannot —
        everything has to come through the house or over the fence. That means a wheelbarrow,
        manual labour and a lot more time. On tight-access jobs, add 15-25% to your labour costs.
        If a grab lorry cannot tip into the garden, bulk materials like aggregate and topsoil will
        need bagging and carrying in by hand.
      </p>

      <h2>per-sqm rates that actually work</h2>

      <p>
        When estimating garden landscaping, working in per-sqm rates keeps things transparent.
        Turfing runs £15-£30/sqm all-in. A patio with sub-base sits at £80-£150/sqm depending
        on material. Artificial grass (popular but divisive) is £60-£90/sqm installed. These
        rates assume reasonable access and a site that does not need major earthworks.
      </p>

      <h2>where landscaping goes wrong</h2>

      <ul>
        <li>
          <strong>Drainage ignored.</strong> Water has to go somewhere. If you lay a patio without
          thinking about fall and runoff, the customer ends up with a pond by the back door. On
          clay soils, a proper drainage scheme is not optional.
        </li>
        <li>
          <strong>Underestimating waste.</strong> Old patios, concrete paths, rubble, soil —
          landscaping generates a surprising amount of waste. Price skip hire accurately or you
          will eat into your margin.
        </li>
        <li>
          <strong>Seasonal timing.</strong> Turfing in July during a heatwave is asking for
          trouble. Concrete work in January is slow and risky. Season affects both quality and
          productivity.
        </li>
      </ul>

      <h2>quoting landscaping smarter</h2>

      <p>
        Break the job into zones: hard landscaping, soft landscaping, drainage, fencing. Rate each
        zone separately. Site clearance and drainage carry the most uncertainty — mark them Medium
        to High. Turfing and planting are Low. Fencing depends on ground conditions and whether
        old posts need grubbing out. Feed honest ratings into your estimate and you will get a
        price that protects your margin without scaring the customer.
      </p>

      <div className="guide__cta">
        <Link href="/estimate/">[ ESTIMATE YOUR LANDSCAPING JOB ]</Link>
      </div>
    </div>
  )
}
