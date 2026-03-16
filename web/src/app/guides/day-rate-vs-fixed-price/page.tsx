import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../guides.css'

export const metadata: Metadata = {
  title: 'day rate vs fixed price — which is better // lowriskquotes',
  description:
    'When should contractors charge a day rate vs fixed price? Pros and cons of each approach, how to protect yourself on fixed-price work, and hybrid strategies that work.',
  alternates: { canonical: '/guides/day-rate-vs-fixed-price/' },
}

export default function DayRateVsFixedPricePage() {
  return (
    <div className="guide">
      <h1>day rate vs fixed price — which is better?</h1>

      <p>
        This is probably the most common argument in any trades WhatsApp group. Some
        contractors swear by day rate. Others will not touch a job without a fixed price.
        The honest answer is: it depends on the job. Here is how to decide.
      </p>

      <h2>day rate: when it makes sense</h2>

      <p>
        Day rate means you charge for your time and the client pays for materials separately.
        You get paid for every hour you work. Simple.
      </p>
      <p>
        It works best when:
      </p>
      <ul>
        <li>
          <strong className="guide__highlight">The scope is unclear.</strong> Nobody knows
          what is behind that wall until you open it up. Day rate means you are not gambling
          on what you find.
        </li>
        <li>
          <strong className="guide__highlight">The client keeps changing their mind.</strong>{' '}
          &quot;Actually, can we move that socket?&quot; On day rate, no problem. On fixed
          price, that is a variation order and an awkward conversation.
        </li>
        <li>
          <strong className="guide__highlight">It is T&amp;M work by nature.</strong>{' '}
          Maintenance, repairs, snagging. Jobs where you show up, see what needs doing, and
          fix it.
        </li>
        <li>
          <strong className="guide__highlight">You trust the client.</strong> Day rate
          requires a good relationship. The client needs to believe you are working
          efficiently, not stretching the job.
        </li>
      </ul>
      <p>
        The downside: your earnings are capped by hours in the day. You cannot benefit from
        being fast. And some clients will always wonder if the job could have been quicker.
      </p>

      <h2>fixed price: when it wins</h2>

      <p>
        Fixed price means you agree a total cost upfront. The client knows what they are
        paying. You know what you are earning — if you quoted right.
      </p>
      <p>
        It works best when:
      </p>
      <ul>
        <li>
          <strong className="guide__highlight">The scope is crystal clear.</strong> A kitchen
          fit with specified units, a bathroom to a drawn plan, a fence along a measured
          boundary. No surprises.
        </li>
        <li>
          <strong className="guide__highlight">You are competing on price.</strong> Most
          homeowners want to compare quotes. That means fixed numbers. &quot;It depends&quot;
          does not win bids.
        </li>
        <li>
          <strong className="guide__highlight">You are fast at this type of work.</strong>{' '}
          If you can do a job in three days that others take five, fixed price rewards your
          efficiency. Day rate punishes it.
        </li>
        <li>
          <strong className="guide__highlight">The client demands it.</strong> Some clients —
          especially commercial ones — will only work with fixed-price quotes. No quote, no
          job.
        </li>
      </ul>
      <p>
        The downside: if you underquote, you eat the loss. And every surprise eats into your
        margin.
      </p>

      <h2>protecting yourself on fixed price</h2>

      <p>
        Fixed price is riskier. That is not a reason to avoid it — it is a reason to quote
        it properly. This is where risk-adjusted quoting changes the game.
      </p>
      <p>
        Instead of adding a flat 10% contingency and hoping for the best, you assign an
        uncertainty tier to each line item. Things you know are{' '}
        <strong className="guide__highlight">Certain</strong> or{' '}
        <strong className="guide__highlight">Low</strong>. Things you are less sure about
        are <strong className="guide__highlight">High</strong> or{' '}
        <strong className="guide__highlight">Wild Guess</strong>. The simulation then
        calculates exactly how much buffer you need — not too much, not too little.
      </p>
      <p>
        Quote at <strong className="guide__highlight">P80</strong> for standard fixed-price
        work. That gives you 80% confidence the actual cost stays below your quote. For
        high-stakes contracts with no variation mechanism, go to{' '}
        <strong className="guide__highlight">P95</strong>.
      </p>

      <h2>the hybrid approach</h2>

      <p>
        Smart contractors mix both. Here is how:
      </p>

      <ASCIIBox title="Hybrid Strategy">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Phase</th>
              <th>Pricing</th>
              <th>Why</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Strip-out / investigation</td>
              <td className="guide__highlight">Day rate</td>
              <td>You do not know what you will find</td>
            </tr>
            <tr>
              <td>Main works</td>
              <td className="guide__highlight">Fixed price</td>
              <td>Scope is clear after strip-out</td>
            </tr>
            <tr>
              <td>Snagging / extras</td>
              <td className="guide__highlight">Day rate</td>
              <td>Small items, not worth quoting individually</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        You do the first day or two on day rate. Open things up, see what you are dealing
        with. Then give a fixed price for the main scope based on what you actually found —
        not what you guessed from outside.
      </p>
      <p>
        Clients like this because they still get a fixed number for the big stuff. You like
        it because you are not gambling on unknowns. Everyone sleeps better.
      </p>

      <h2>the bottom line</h2>

      <p>
        Day rate is safer for you but harder to sell. Fixed price wins more work but carries
        more risk. The hybrid approach splits the difference.
      </p>
      <p>
        Whichever way you go, the quote still needs to be right. Build your estimate with
        honest uncertainty tiers and let the numbers tell you what to charge.
      </p>

      <div className="guide__cta">
        <Link href="/estimate/">[ BUILD YOUR ESTIMATE ]</Link>
      </div>
    </div>
  )
}
