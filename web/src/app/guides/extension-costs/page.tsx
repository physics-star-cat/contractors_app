import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../guides.css'

export const metadata: Metadata = {
  title: 'how much does a house extension cost // lowriskquotes',
  description:
    'Realistic house extension costs for UK contractors. Single-storey and two-storey breakdowns with risk ratings on every line item so you can quote extensions without getting burned.',
  alternates: { canonical: '/guides/extension-costs/' },
}

export default function ExtensionCostsPage() {
  return (
    <div className="guide">
      <h1>how much does a house extension cost</h1>

      <p>
        Extensions are big-ticket jobs. They are also where contractors lose the most money. A
        kitchen extension that looked straightforward on paper turns into a nightmare when you hit
        clay, the steel takes eight weeks, and the building inspector wants a full drainage
        recalculation. Get your pricing wrong and you are working for free by week ten.
      </p>
      <p>
        This guide covers real extension costs in 2026. UK prices are the baseline. If you are
        quoting in the US or Australia, expect labour rates 20-40% higher and material costs that
        vary by region — but the risk factors are the same everywhere.
      </p>

      <h2>single-storey vs two-storey</h2>

      <p>
        A single-storey rear extension (roughly 4m x 5m) typically lands between{' '}
        <span className="guide__highlight">£30,000 - £60,000</span> in the UK. Two-storey
        extensions are not double the cost — more like 50-70% more — because you share the
        foundations, roof structure, and most of the groundwork. Expect{' '}
        <span className="guide__highlight">£50,000 - £95,000</span> for a two-storey of similar
        footprint.
      </p>
      <p>
        The per-square-metre rate for a single-storey sits around £1,500 - £2,500. Two-storey
        drops to £1,200 - £2,000 per sqm because you spread the expensive stuff (foundations,
        roof) across more floor area.
      </p>
      <p>
        In the US, a similar single-storey addition runs $40,000 - $80,000 depending on state. In
        Australia, $50,000 - $120,000 AUD. The maths changes but the risk profile does not.
      </p>

      <h2>where extension costs blow up</h2>

      <p>
        Extensions have more risk than most contractors price for. Here is where the money
        disappears:
      </p>
      <ul>
        <li>
          <strong>Foundations.</strong> You will not know the full picture until you dig. Clay soil,
          tree roots, old drains in the way — any of these can double your groundwork cost. If the
          site investigation is thin, price foundations as High uncertainty.
        </li>
        <li>
          <strong>Planning and building regs.</strong> Permitted development is not guaranteed.
          Party wall agreements drag on. Building control might want engineered details you did not
          budget for. Allow time and money for delays.
        </li>
        <li>
          <strong>Structural steel.</strong> Lead times in 2026 are still unpredictable. A standard
          RSJ might take two weeks or eight. If the steel is late, everything else stacks up behind
          it. Price the wait into your programme.
        </li>
        <li>
          <strong>Weather.</strong> Groundwork and brickwork are weather-dependent. A wet autumn can
          add weeks to a programme. If you are starting in October, build that into your quote.
        </li>
      </ul>

      <h2>worked example: single-storey rear extension (4m x 5m)</h2>

      <ASCIIBox title="Extension Cost Breakdown">
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
              <td>Foundations &amp; groundwork</td>
              <td>£4,000 - £10,000</td>
              <td className="guide__highlight">High</td>
              <td>Soil type is everything. Budget for the worst.</td>
            </tr>
            <tr>
              <td>Structural steel (RSJs)</td>
              <td>£1,500 - £3,500</td>
              <td className="guide__highlight">High</td>
              <td>Lead times are volatile. Order early.</td>
            </tr>
            <tr>
              <td>Brickwork &amp; blockwork</td>
              <td>£4,000 - £7,000</td>
              <td className="guide__highlight">Medium</td>
              <td>Matching existing brick adds cost</td>
            </tr>
            <tr>
              <td>Roof structure &amp; covering</td>
              <td>£3,000 - £5,500</td>
              <td className="guide__highlight">Low - Medium</td>
              <td>Flat roof = simpler. Pitched = more labour.</td>
            </tr>
            <tr>
              <td>Windows &amp; bifold doors</td>
              <td>£3,000 - £8,000</td>
              <td className="guide__highlight">Medium</td>
              <td>Lead times on aluminium bifolds: 4-8 weeks</td>
            </tr>
            <tr>
              <td>Electrics (first fix + second fix)</td>
              <td>£1,500 - £3,000</td>
              <td className="guide__highlight">Low</td>
              <td>Standard domestic. Consumer unit upgrade adds £500.</td>
            </tr>
            <tr>
              <td>Plumbing &amp; heating</td>
              <td>£1,200 - £2,500</td>
              <td className="guide__highlight">Low - Medium</td>
              <td>Extending the existing system. New boiler = separate quote.</td>
            </tr>
            <tr>
              <td>Plastering &amp; drylining</td>
              <td>£1,500 - £2,500</td>
              <td className="guide__highlight">Low</td>
              <td>New build walls = predictable</td>
            </tr>
            <tr>
              <td>Flooring &amp; decoration</td>
              <td>£1,500 - £3,500</td>
              <td className="guide__highlight">Medium</td>
              <td>Customer spec drives this line completely</td>
            </tr>
            <tr>
              <td>Drainage &amp; building regs</td>
              <td>£1,500 - £3,000</td>
              <td className="guide__highlight">High</td>
              <td>Sewer connections, inspections, sign-off</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Total range for a single-storey rear extension:{' '}
        <span className="guide__highlight">£22,700 - £48,500</span>. The low end assumes good
        ground, standard finishes, and no planning complications. The high end is where reality
        usually lives.
      </p>

      <h2>quoting extensions without losing money</h2>

      <p>
        A flat 10% contingency does not cut it on extensions. Your foundations might be fine or they
        might need piling. Your steel might arrive in two weeks or two months. Rate each line item
        individually. The plastering is Low risk — you know exactly what it costs. The groundwork is
        High risk — it depends on what is in the ground. Feed honest ratings into a proper
        simulation and your quote covers the real spread of outcomes, not a guess.
      </p>

      <div className="guide__cta">
        <Link href="/estimate/">[ ESTIMATE YOUR EXTENSION JOB ]</Link>
      </div>
    </div>
  )
}
