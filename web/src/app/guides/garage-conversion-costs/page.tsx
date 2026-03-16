import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../guides.css'

export const metadata: Metadata = {
  title: 'Garage Conversion Costs UK 2026 // lowriskquotes',
  description:
    'Realistic garage conversion costs for UK homeowners and contractors. Single and double garage prices, building regs, insulation, damp proofing and RSL beam guidance.',
  alternates: { canonical: '/guides/garage-conversion-costs/' },
}

export default function GarageConversionCostsPage() {
  return (
    <div className="guide">
      <h1>garage conversion costs: turning dead space into living space</h1>

      <p>
        Garage conversions are one of the most cost-effective ways to add living space to a UK
        home. The shell already exists — walls, roof, floor — so you are essentially insulating,
        finishing and connecting it to the house. Pound for pound, a garage conversion adds more
        usable space per pound spent than almost any other home improvement. Estate agents
        generally agree that a well-done conversion adds more value than the parking space it
        replaces, though this depends on the area and on-street parking availability.
      </p>
      <p>
        For a standard single garage conversion, expect to pay between <span className="guide__highlight">
        £8,000 and £15,000</span>. A double garage comes in at <span className="guide__highlight">
        £12,000 - £20,000</span>. The main variables are the condition of the existing structure,
        the level of finish required and whether you are adding plumbing.
      </p>

      <h2>typical cost breakdown</h2>

      <ASCIIBox title="Garage Conversion Cost Breakdown">
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
              <td>Front wall (replacing garage door)</td>
              <td>£1,200 - £2,500</td>
              <td className="guide__highlight">Low - Medium</td>
              <td>Brickwork, window, matching render or cladding</td>
            </tr>
            <tr>
              <td>RSL beam (rolled steel lintel)</td>
              <td>£600 - £1,500</td>
              <td className="guide__highlight">Medium</td>
              <td>Required if removing the garage door opening support</td>
            </tr>
            <tr>
              <td>Floor insulation &amp; screed</td>
              <td>£1,500 - £3,000</td>
              <td className="guide__highlight">Medium</td>
              <td>Dig down or build up — depends on ceiling height</td>
            </tr>
            <tr>
              <td>Wall insulation &amp; boarding</td>
              <td>£800 - £1,800</td>
              <td className="guide__highlight">Low</td>
              <td>Stud wall with insulation, then plasterboard</td>
            </tr>
            <tr>
              <td>Damp proofing</td>
              <td>£500 - £1,500</td>
              <td className="guide__highlight">Medium - High</td>
              <td>Garages often lack DPC. Tanking may be needed.</td>
            </tr>
            <tr>
              <td>Electrics</td>
              <td>£600 - £1,200</td>
              <td className="guide__highlight">Low</td>
              <td>Sockets, lighting, consumer unit extension</td>
            </tr>
            <tr>
              <td>Heating (radiators or UFH)</td>
              <td>£400 - £1,200</td>
              <td className="guide__highlight">Low</td>
              <td>Extending existing central heating is cheapest</td>
            </tr>
            <tr>
              <td>Plastering &amp; decoration</td>
              <td>£800 - £1,500</td>
              <td className="guide__highlight">Low</td>
              <td>Skim, paint, skirting, architrave</td>
            </tr>
            <tr>
              <td>Building regs application</td>
              <td>£400 - £800</td>
              <td className="guide__highlight">Certain</td>
              <td>Always required. Not optional.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <h2>planning permission vs building regs</h2>

      <p>
        Here is the distinction that catches people out: most garage conversions do not need
        planning permission (they fall under permitted development), but they always need building
        regulations approval. Building regs cover structural integrity, fire safety, insulation,
        ventilation and drainage. You cannot legally convert a garage without a building control
        sign-off. When the customer eventually sells the house, a missing completion certificate
        will cause problems with solicitors and mortgage lenders.
      </p>

      <h2>the RSL beam</h2>

      <p>
        When you remove the garage door and build a new front wall with a window, you usually need
        a rolled steel lintel (RSL) to support the load above. This needs structural calculations
        from an engineer — do not guess the size. The beam is typically supported on padstones at
        each end and needs proper bearing. On some garages with a lightweight roof and no load
        above, a standard concrete lintel may suffice, but get a structural engineer to confirm.
      </p>

      <h2>where garage conversions go wrong</h2>

      <ul>
        <li>
          <strong>Damp.</strong> Most garages were not built to habitable standards. They often
          lack a damp proof course, the floor may have no membrane, and the walls may be single-
          skin. Damp proofing is the biggest variable cost on these jobs. Inspect thoroughly
          before quoting — look for tide marks, efflorescence and musty smells.
        </li>
        <li>
          <strong>Floor levels.</strong> Garage floors are typically 100-150mm lower than the house
          floor. You need to insulate and screed to bring the level up, which eats into ceiling
          height. If the garage ceiling is already low, you may not have enough headroom after
          insulation. Check this before committing.
        </li>
        <li>
          <strong>Value vs parking.</strong> In areas where on-street parking is scarce, losing
          a garage can actually reduce property value. It is worth having an honest conversation
          with the customer about this before they spend £15,000.
        </li>
      </ul>

      <h2>quoting garage conversions smarter</h2>

      <p>
        The predictable elements — insulation, boarding, electrics, plastering — are all Low
        risk. The front wall and RSL are Medium because they depend on structural specifics. Damp
        proofing is where the uncertainty lives. If you can see damp issues during your survey,
        price for tanking and rate it Medium. If you cannot inspect properly because the garage
        is full of junk, rate damp proofing as High and make sure your estimate reflects that
        uncertainty.
      </p>

      <div className="guide__cta">
        <Link href="/estimate/">[ ESTIMATE YOUR GARAGE CONVERSION ]</Link>
      </div>
    </div>
  )
}
