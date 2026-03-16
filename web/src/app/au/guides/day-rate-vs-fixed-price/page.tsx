import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Day Rate vs Fixed Price for Australian Tradies // lowriskquotes',
  description:
    'Should Australian tradies charge a day rate or fixed price? Pros, cons, and when to use each. Practical advice with AUD examples.',
  alternates: { canonical: '/au/guides/day-rate-vs-fixed-price/' },
}

export default function AUDayRateVsFixedPricePage() {
  return (
    <div className="guide">
      <h1>day rate vs fixed price: which is right for your job?</h1>

      <p>
        It is one of the most common questions in the trade. Do you charge a day rate or give
        a fixed price? The answer is not one or the other — it depends on the job, the
        customer, and how much risk you are willing to carry.
      </p>

      <h2>day rate: how it works</h2>

      <p>
        You charge the customer for each day (or hour) you work, plus materials. The customer
        carries the risk of the job taking longer than expected. You get paid for your time
        regardless.
      </p>

      <ASCIIBox title="Typical Day Rates in Australia (AUD)">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Trade</th>
              <th>Day Rate Range</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>General carpenter / chippy</td>
              <td>$450 - $700</td>
              <td>Higher in Sydney/Melbourne metro</td>
            </tr>
            <tr>
              <td>Plumber</td>
              <td>$500 - $800</td>
              <td>Licensed plumber. Drainers can be higher.</td>
            </tr>
            <tr>
              <td>Electrician / sparky</td>
              <td>$450 - $750</td>
              <td>A-grade electrician</td>
            </tr>
            <tr>
              <td>Painter</td>
              <td>$400 - $600</td>
              <td>Qualified painter. Apprentice = less.</td>
            </tr>
            <tr>
              <td>Tiler</td>
              <td>$450 - $700</td>
              <td>Large format or natural stone = higher end</td>
            </tr>
            <tr>
              <td>Builder (registered)</td>
              <td>$550 - $900</td>
              <td>Project management included</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        <strong className="guide__highlight">Pros:</strong> No risk of underquoting. You get
        paid for every hour. Good for jobs with unclear scope or lots of customer decision-making.
      </p>
      <p>
        <strong className="guide__highlight">Cons:</strong> Customers worry about costs blowing
        out. Harder to compare quotes. Some customers do not trust day rates — they think you
        will drag the job out.
      </p>

      <h2>fixed price: how it works</h2>

      <p>
        You give the customer a single number for the whole job. They know exactly what they
        are paying. You carry the risk of overruns — if the job takes longer or costs more
        than expected, that comes out of your margin.
      </p>

      <p>
        <strong className="guide__highlight">Pros:</strong> Customers love the certainty. Easier
        to win jobs. You can make more money if you are efficient and the job goes well.
      </p>
      <p>
        <strong className="guide__highlight">Cons:</strong> All the risk is on you. If something
        goes wrong — hidden damage, supply delays, customer changes — you wear the cost. This
        is where tradies lose money.
      </p>

      <h2>when to use each</h2>

      <ASCIIBox title="Decision Guide">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Situation</th>
              <th>Recommendation</th>
              <th>Why</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Clear scope, familiar work</td>
              <td className="guide__highlight">Fixed price</td>
              <td>You know the costs. You can price in profit and still be competitive.</td>
            </tr>
            <tr>
              <td>Unclear scope, lots of unknowns</td>
              <td className="guide__highlight">Day rate</td>
              <td>Too much uncertainty to price safely. Let the customer carry the risk.</td>
            </tr>
            <tr>
              <td>Customer keeps changing their mind</td>
              <td className="guide__highlight">Day rate</td>
              <td>Every change on a fixed price erodes your margin.</td>
            </tr>
            <tr>
              <td>Insurance or body corporate work</td>
              <td className="guide__highlight">Fixed price</td>
              <td>They need a number for approval. Quote at P80 or P95.</td>
            </tr>
            <tr>
              <td>Small maintenance jobs</td>
              <td className="guide__highlight">Day rate</td>
              <td>Not worth the time to prepare a detailed fixed-price quote.</td>
            </tr>
            <tr>
              <td>Large renovation or extension</td>
              <td className="guide__highlight">Fixed price</td>
              <td>Customers expect it. Use Monte Carlo to price the risk properly.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <h2>the hybrid approach</h2>

      <p>
        Many experienced tradies use a combination. Fixed price for the known work. Day rate
        for anything discovered during the job (rotten timber, asbestos, unexpected plumbing).
        This is common in renovation work where you cannot see everything until you open up
        the walls.
      </p>
      <p>
        Put it in writing: &quot;This quote covers [scope]. Any additional work discovered during
        the job will be charged at $[rate] per day plus materials, with your approval before
        we proceed.&quot;
      </p>
      <p>
        This protects you on the unknowns while giving the customer certainty on the known
        scope. Most reasonable customers understand and accept this.
      </p>

      <h2>if you go fixed price, price the risk</h2>

      <p>
        The whole point of a fixed price is that the customer is paying you to carry the risk.
        If you do not charge for that risk, you are giving it away for free. Use a simulation
        to calculate the right contingency for each job instead of guessing at 10%.
      </p>

      <div className="guide__cta">
        <Link href="/au/tools/day-rate-calculator/">[ CALCULATE YOUR DAY RATE ]</Link>
      </div>
    </div>
  )
}
