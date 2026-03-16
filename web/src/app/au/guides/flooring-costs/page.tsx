import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Flooring Costs Australia 2026 // lowriskquotes',
  description:
    'Australian flooring costs per square metre — hybrid, timber, tiles, polished concrete. Real tradie pricing with subfloor prep and risk ratings.',
  alternates: { canonical: '/au/guides/flooring-costs/' },
}

export default function AUFlooringCostsPage() {
  return (
    <div className="guide">
      <h1>flooring costs: per-sqm pricing for australian tradies</h1>

      <p>
        Flooring jobs are everywhere — new builds, renovations, insurance work, rental
        turnarounds. The product range has exploded in the last few years, with hybrid and
        LVP now dominating the Australian market. But the real cost on a flooring job is
        rarely just the material. It is the subfloor prep, the transitions, the furniture
        moving, and the client who wants the existing tiles removed before you start.
      </p>
      <p>
        This guide covers what flooring actually costs per square metre in Australia in 2026
        across all the major types, plus the prep and finishing costs that determine whether
        you make money on the job.
      </p>

      <h2>typical cost per square metre</h2>

      <p>
        These are supply-and-install costs per square metre for a standard residential job.
        Subfloor preparation is listed separately because it varies enormously.
      </p>

      <ASCIIBox title="Flooring Cost Per SQM (AUD)">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Flooring Type</th>
              <th>Cost/m²</th>
              <th>Risk Level</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hybrid / LVP (click-lock)</td>
              <td>$45 - $90</td>
              <td className="guide__highlight">Low</td>
              <td>Most popular choice in AU. Waterproof, DIY-friendly. Brands: Hybrid Core, StoneFloor.</td>
            </tr>
            <tr>
              <td>Engineered timber</td>
              <td>$70 - $140</td>
              <td className="guide__highlight">Low - Medium</td>
              <td>European oak popular. Floating or glue-down. Acclimatisation period needed.</td>
            </tr>
            <tr>
              <td>Solid hardwood</td>
              <td>$90 - $180</td>
              <td className="guide__highlight">Medium</td>
              <td>Spotted gum, blackbutt, tallowwood. Nail-down on timber subfloor. Beautiful but moves.</td>
            </tr>
            <tr>
              <td>Porcelain tiles</td>
              <td>$60 - $130</td>
              <td className="guide__highlight">Low - Medium</td>
              <td>600x600 standard. Large format (1200x600) adds labour. Rectified edges recommended.</td>
            </tr>
            <tr>
              <td>Polished concrete</td>
              <td>$50 - $100</td>
              <td className="guide__highlight">Medium - High</td>
              <td>On existing slab. Grind, hone, seal. Result depends on aggregate exposure — unpredictable.</td>
            </tr>
            <tr>
              <td>Carpet (mid-range)</td>
              <td>$35 - $70</td>
              <td className="guide__highlight">Low</td>
              <td>Solution-dyed nylon. Includes underlay and install. Bedrooms and living areas.</td>
            </tr>
            <tr>
              <td>Vinyl sheet</td>
              <td>$30 - $55</td>
              <td className="guide__highlight">Low</td>
              <td>Budget option. Glue-down. Quick install. Rental properties and laundries.</td>
            </tr>
            <tr>
              <td>Subfloor levelling</td>
              <td>$15 - $50</td>
              <td className="guide__highlight">Medium - High</td>
              <td>Self-levelling compound. Old houses can need 10-20mm correction. Cost adds up fast.</td>
            </tr>
            <tr>
              <td>Existing floor removal</td>
              <td>$10 - $35</td>
              <td className="guide__highlight">Medium</td>
              <td>Tiles on concrete = hard yakka. Carpet = easy. Glued timber = time-consuming.</td>
            </tr>
            <tr>
              <td>Scotia / transitions</td>
              <td>$8 - $15/lm</td>
              <td className="guide__highlight">Low</td>
              <td>Per lineal metre. Colour-matched. Often forgotten in quotes — adds up in open-plan homes.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        A typical 80sqm hybrid flooring job with subfloor prep runs <span className="guide__highlight">$5,000
        - $9,000</span> installed. Switch to engineered timber with tile removal and levelling
        and you are looking at $9,000 - $16,000 for the same area.
      </p>

      <h2>where flooring jobs go wrong</h2>

      <ul>
        <li>
          <strong>Subfloor surprises.</strong> The floor looks flat until you put a straight edge
          on it. Old Australian homes regularly need 10-20mm of levelling compound across entire
          rooms. At $15-$50 per square metre for compound alone, an 80sqm job can blow out by
          $1,200-$4,000 just on prep. Always check levels before quoting — a $20 laser level
          check saves thousands.
        </li>
        <li>
          <strong>Moisture.</strong> Concrete slabs in older homes often have no moisture barrier.
          Timber and some hybrid products will fail if the slab is too damp. Test with a moisture
          meter. If relative humidity exceeds 75%, you need a moisture barrier or a different
          product. Do not skip this step.
        </li>
        <li>
          <strong>Transitions and finishing.</strong> Open-plan Australian homes mean long runs
          with transitions between rooms, sliding door thresholds, and connections to tiled wet
          areas. Scotia, cover strips, and transition profiles add $500-$1,500 to a typical job.
          Quote them explicitly or eat the cost.
        </li>
        <li>
          <strong>Waste factor.</strong> Standard waste allowance is 5-10%, but rooms with lots
          of angles, hallways, and offcuts push this higher. Order 10% extra minimum. Running
          short of a discontinued batch mid-job is a nightmare.
        </li>
      </ul>

      <h2>quoting flooring smarter</h2>

      <p>
        Break your flooring quote into three sections: prep, product, and finishing. The product
        supply is Low uncertainty — it is a known price from your supplier. The subfloor prep is
        where the risk lives, especially on renovation work. Rate it Medium or High until you
        have checked levels and moisture. Finishing (scotia, transitions, thresholds) is Low but
        easy to forget. Itemise everything and your quote actually reflects the job.
      </p>

      <div className="guide__cta">
        <Link href="/au/estimate/">[ ESTIMATE YOUR FLOORING JOB ]</Link>
      </div>
    </div>
  )
}
