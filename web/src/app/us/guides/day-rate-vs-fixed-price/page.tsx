import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'T&M vs fixed bid — which is better // lowriskquotes',
  description:
    'When should contractors charge time and materials vs a fixed bid? Pros and cons of each approach, how to protect yourself on fixed-price work, and hybrid strategies that work.',
  alternates: { canonical: '/us/guides/day-rate-vs-fixed-price/' },
}

export default function DayRateVsFixedPricePage() {
  return (
    <div className="guide">
      <h1>T&amp;M vs fixed bid — which is better?</h1>

      <p>
        This is probably the most common argument on any contractor forum. Some
        contractors swear by time and materials. Others will not touch a job without a fixed bid.
        The honest answer is: it depends on the job. Here is how to decide.
      </p>

      <h2>time and materials: when it makes sense</h2>

      <p>
        T&amp;M means you charge for your time and the client pays for materials separately.
        You get paid for every hour you work. Simple.
      </p>
      <p>
        It works best when:
      </p>
      <ul>
        <li>
          <strong className="guide__highlight">The scope is unclear.</strong> Nobody knows
          what is behind that wall until you open it up. T&amp;M means you are not gambling
          on what you find.
        </li>
        <li>
          <strong className="guide__highlight">The client keeps changing their mind.</strong>{' '}
          &quot;Actually, can we move that outlet?&quot; On T&amp;M, no problem. On a fixed
          bid, that is a change order and an awkward conversation.
        </li>
        <li>
          <strong className="guide__highlight">It is service work by nature.</strong>{' '}
          Maintenance, repairs, punch list items. Jobs where you show up, see what needs doing,
          and fix it.
        </li>
        <li>
          <strong className="guide__highlight">You trust the client.</strong> T&amp;M
          requires a good relationship. The client needs to believe you are working
          efficiently, not stretching the job.
        </li>
      </ul>
      <p>
        The downside: your earnings are capped by hours in the day. You cannot benefit from
        being fast. And some clients will always wonder if the job could have been quicker.
      </p>

      <h2>fixed bid: when it wins</h2>

      <p>
        A fixed bid means you agree a total cost upfront. The client knows what they are
        paying. You know what you are earning — if you bid right.
      </p>
      <p>
        It works best when:
      </p>
      <ul>
        <li>
          <strong className="guide__highlight">The scope is crystal clear.</strong> A kitchen
          remodel with specified cabinets, a bathroom to a drawn plan, a fence along a surveyed
          line. No surprises.
        </li>
        <li>
          <strong className="guide__highlight">You are competing on price.</strong> Most
          homeowners want to compare bids. That means fixed numbers. &quot;It depends&quot;
          does not win jobs.
        </li>
        <li>
          <strong className="guide__highlight">You are fast at this type of work.</strong>{' '}
          If you can do a job in three days that others take five, a fixed bid rewards your
          efficiency. T&amp;M punishes it.
        </li>
        <li>
          <strong className="guide__highlight">The client demands it.</strong> Some clients —
          especially commercial ones — will only work with fixed bids. No bid, no
          job.
        </li>
      </ul>
      <p>
        The downside: if you underbid, you eat the loss. And every surprise eats into your
        margin.
      </p>

      <h2>protecting yourself on a fixed bid</h2>

      <p>
        A fixed bid is riskier. That is not a reason to avoid it — it is a reason to bid
        it properly. This is where risk-adjusted estimation changes the game.
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
        Bid at <strong className="guide__highlight">P80</strong> for standard fixed-price
        work. That gives you 80% confidence the actual cost stays below your bid. For
        high-stakes contracts with no change order mechanism, go to{' '}
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
              <td>Demo / investigation</td>
              <td className="guide__highlight">T&amp;M</td>
              <td>You do not know what you will find</td>
            </tr>
            <tr>
              <td>Main construction</td>
              <td className="guide__highlight">Fixed bid</td>
              <td>Scope is clear after demo</td>
            </tr>
            <tr>
              <td>Punch list / extras</td>
              <td className="guide__highlight">T&amp;M</td>
              <td>Small items, not worth bidding individually</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        You do the first day or two on T&amp;M. Open things up, see what you are dealing
        with. Then give a fixed bid for the main scope based on what you actually found —
        not what you guessed from outside.
      </p>
      <p>
        Clients like this because they still get a fixed number for the big stuff. You like
        it because you are not gambling on unknowns. Everyone sleeps better.
      </p>

      <h2>the bottom line</h2>

      <p>
        T&amp;M is safer for you but harder to sell. Fixed bids win more work but carry
        more risk. The hybrid approach splits the difference.
      </p>
      <p>
        Whichever way you go, the bid still needs to be right. Build your estimate with
        honest uncertainty tiers and let the numbers tell you what to charge.
      </p>

      <div className="guide__cta">
        <Link href="/estimate/">[ BUILD YOUR ESTIMATE ]</Link>
      </div>
    </div>
  )
}
