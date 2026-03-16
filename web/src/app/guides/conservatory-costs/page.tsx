import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../guides.css'

export const metadata: Metadata = {
  title: 'Conservatory Costs UK 2026 // lowriskquotes',
  description:
    'Realistic conservatory costs for UK homeowners and contractors. Lean-to, Victorian, Edwardian and orangery prices with building regs guidance and planning advice.',
  alternates: { canonical: '/guides/conservatory-costs/' },
}

export default function ConservatoryCostsPage() {
  return (
    <div className="guide">
      <h1>conservatory costs: what it really costs to build in 2026</h1>

      <p>
        Conservatories remain one of the most popular home improvements in the UK. They add living
        space without the full cost of a brick extension — but they are not as cheap as the
        double-glazing salesmen would have you believe. The price depends heavily on the style, size,
        glazing and whether you need to satisfy building regulations.
      </p>
      <p>
        Since October 2010, most new conservatories need to comply with building regulations. The old
        exemption only applies if you meet very specific criteria (under 30 sqm, thermal separation
        from the house, independent heating). Most modern designs do not qualify. Budget for a
        building control application.
      </p>

      <h2>typical cost breakdown</h2>

      <p>
        These prices assume a 3m x 4m conservatory on a standard suburban plot with reasonable
        access. Larger builds, difficult ground conditions or premium glazing will push costs higher.
      </p>

      <ASCIIBox title="Conservatory Cost Breakdown">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Style</th>
              <th>Cost Range</th>
              <th>Risk Level</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lean-to (UPVC)</td>
              <td>£8,000 - £14,000</td>
              <td className="guide__highlight">Low - Medium</td>
              <td>Simplest build, fewer structural complications</td>
            </tr>
            <tr>
              <td>Victorian (UPVC)</td>
              <td>£12,000 - £20,000</td>
              <td className="guide__highlight">Medium</td>
              <td>Bay front adds complexity to roof and base</td>
            </tr>
            <tr>
              <td>Edwardian (UPVC)</td>
              <td>£13,000 - £22,000</td>
              <td className="guide__highlight">Medium</td>
              <td>Square footprint, efficient use of space</td>
            </tr>
            <tr>
              <td>Orangery (brick/aluminium)</td>
              <td>£20,000 - £30,000+</td>
              <td className="guide__highlight">Medium - High</td>
              <td>Brick pillars, lantern roof, more like an extension</td>
            </tr>
            <tr>
              <td>Aluminium frame upgrade</td>
              <td>+£3,000 - £8,000</td>
              <td className="guide__highlight">Low</td>
              <td>Slimmer sightlines, better longevity than UPVC</td>
            </tr>
            <tr>
              <td>Base &amp; footings</td>
              <td>£2,000 - £4,500</td>
              <td className="guide__highlight">Medium - High</td>
              <td>Ground conditions drive this — clay, drains, trees</td>
            </tr>
            <tr>
              <td>Building regs &amp; structural calcs</td>
              <td>£500 - £1,200</td>
              <td className="guide__highlight">Certain</td>
              <td>Required for most builds post-2010</td>
            </tr>
            <tr>
              <td>Electrics &amp; heating</td>
              <td>£800 - £2,000</td>
              <td className="guide__highlight">Low</td>
              <td>Underfloor heating popular but adds cost</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Total range for a typical conservatory: <span className="guide__highlight">£8,000 -
        £30,000+</span>. The spread is wide because a basic lean-to in UPVC and a full orangery
        with aluminium bi-folds are fundamentally different jobs.
      </p>

      <h2>UPVC vs aluminium</h2>

      <p>
        UPVC is cheaper upfront and perfectly adequate for most builds. Aluminium costs more but
        gives thinner frames (more glass, more light), better colour options and a longer lifespan.
        If the customer is building an orangery or wants a contemporary look, aluminium is usually
        worth it. For a standard lean-to on a budget, UPVC does the job.
      </p>

      <h2>planning permission</h2>

      <p>
        Most conservatories fall under permitted development — no planning application needed — as
        long as they stay within size limits, do not cover more than half the garden, and respect
        height restrictions. However, if the property is listed, in a conservation area, or the
        build is unusually large, a full planning application is required. Always check with the
        local authority before starting groundworks. Getting this wrong is expensive.
      </p>

      <h2>where conservatories go wrong</h2>

      <ul>
        <li>
          <strong>Ground conditions.</strong> Clay soil near trees means deeper foundations.
          Existing drains running through the footprint need diverting. Both add thousands.
        </li>
        <li>
          <strong>Roof choice.</strong> Polycarbonate roofs are cheap but turn the space into a
          greenhouse in summer and an icebox in winter. A solid or glass roof costs more but makes
          the room usable year-round.
        </li>
        <li>
          <strong>Skimping on heating.</strong> A conservatory without proper heating is only
          comfortable for six months a year. Factor in radiator extensions or underfloor heating
          from the start.
        </li>
      </ul>

      <h2>quoting conservatories smarter</h2>

      <p>
        The base and groundworks carry the most uncertainty. Rate them Medium to High depending on
        what you know about the ground. The frame and glazing are typically supplied as a package —
        mark those as Low once the order is confirmed. Everything above the damp course is
        predictable; everything below it is where you need margin.
      </p>

      <div className="guide__cta">
        <Link href="/estimate/">[ ESTIMATE YOUR CONSERVATORY JOB ]</Link>
      </div>
    </div>
  )
}
