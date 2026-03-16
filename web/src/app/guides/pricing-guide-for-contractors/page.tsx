import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../guides.css'

export const metadata: Metadata = {
  title: 'Pricing Guide for Contractors // lowriskquotes',
  description:
    'How to price your work as a contractor. Cost-plus, value-based, and competitive pricing strategies explained with practical advice for tradespeople.',
  alternates: { canonical: '/guides/pricing-guide-for-contractors/' },
}

export default function PricingGuideForContractorsPage() {
  return (
    <div className="guide">
      <h1>pricing guide for contractors</h1>

      <p>
        Knowing what a job costs you is only half the equation. The other half is deciding
        what to charge. These are different problems. Cost estimation tells you the floor —
        below this number you lose money. Pricing strategy tells you where above that floor
        to set your quote.
      </p>

      <h2>cost-plus pricing</h2>

      <p>
        The most common approach. Add up your materials, labour, subcontractors, and overheads.
        Then add a markup — typically 15-25% for most trades.
      </p>

      <ASCIIBox title="Cost-Plus Example">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Component</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Materials</td>
              <td>£3,200</td>
            </tr>
            <tr>
              <td>Labour (5 days x £250)</td>
              <td>£1,250</td>
            </tr>
            <tr>
              <td>Subcontractors</td>
              <td>£800</td>
            </tr>
            <tr>
              <td>Overheads (van, insurance, tools)</td>
              <td>£400</td>
            </tr>
            <tr>
              <td><strong>Total cost</strong></td>
              <td><strong>£5,650</strong></td>
            </tr>
            <tr>
              <td>Markup (20%)</td>
              <td className="guide__highlight">£1,130</td>
            </tr>
            <tr>
              <td><strong>Quote price</strong></td>
              <td><strong className="guide__highlight">£6,780</strong></td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Cost-plus is transparent and easy to calculate. The risk is that your cost estimate
        is wrong — which is where most contractors get burned. If that £5,650 is based on
        optimistic numbers, your 20% markup gets eaten by overruns and you end up working
        for your day rate with no profit.
      </p>
      <p>
        Fix: run your costs through a Monte Carlo simulation first. Get the P80 cost, then
        apply your markup to that. Now your markup is actual profit, not an overrun buffer
        disguised as profit.
      </p>

      <h2>value-based pricing</h2>

      <p>
        Price based on what the work is worth to the customer, not what it costs you. A new
        kitchen that adds £30,000 to a property value is worth more than the £12,000 it costs
        to install. Customers in expensive areas expect to pay more and are often happy to if
        the work is good.
      </p>
      <p>
        Value-based pricing works best when you have a strong reputation, good reviews, and a
        portfolio. If you are competing on price alone, this approach is hard to pull off.
        But if customers come to you because of your quality, you should be charging for it.
      </p>

      <h2>competitive pricing</h2>

      <p>
        Pricing based on what everyone else charges. Check what other contractors in your area
        quote for similar work and position yourself accordingly. This is fine as a sanity
        check. It is dangerous as your primary strategy.
      </p>
      <p>
        The problem: you do not know what the other contractor&apos;s costs are, what their
        overheads look like, or whether they are actually making money. Matching someone
        else&apos;s quote could mean matching their losses.
      </p>

      <h2>which approach to use</h2>

      <p>
        In practice, most successful contractors use a blend:
      </p>
      <ul>
        <li>
          Start with <strong>cost-plus</strong> to find your floor. Use realistic cost
          estimates with proper uncertainty ratings, not best-case numbers.
        </li>
        <li>
          Check against <strong>competitive rates</strong> in your area. If you are way
          above or below market, understand why.
        </li>
        <li>
          Adjust upward using <strong>value-based thinking</strong> when the job warrants it
          — complex work, tight timelines, premium finishes, your specialist expertise.
        </li>
      </ul>
      <p>
        Whatever strategy you use, the foundation is knowing your true costs. If your
        estimate is wrong, your pricing strategy does not matter. Get the estimate right
        first. Then decide your margin.
      </p>

      {/* MiniEstimator component will be added here */}

      <div className="guide__cta">
        <Link href="/estimate/">[ BUILD YOUR ESTIMATE ]</Link>
      </div>
    </div>
  )
}
