import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../guides.css'

export const metadata: Metadata = {
  title: 'how to price a job you haven\'t done before // lowriskquotes',
  description:
    'Practical advice for contractors quoting unfamiliar work. How to get material prices, talk to other trades, use risk tiers honestly, and build learning time into your quote.',
  alternates: { canonical: '/guides/pricing-a-job-you-havent-done-before/' },
}

export default function PricingAJobYouHaventDoneBeforePage() {
  return (
    <div className="guide">
      <h1>how to price a job you haven&apos;t done before</h1>

      <p>
        Someone asks you to do something you have never quoted. Maybe it is a loft
        conversion and you have only done extensions. Maybe a client wants polished
        concrete floors and you have always laid tiles. The job is within your skill set —
        just outside your experience.
      </p>
      <p>
        You have two options. Say no and watch the work go to someone else. Or figure out
        what it actually costs, price it honestly, and add a new service to your business.
        This guide is about option two.
      </p>

      <h2>step one: get real material numbers</h2>

      <p>
        Do not Google &quot;average cost of polished concrete per m2&quot; and use that.
        Those numbers are stale, vague, and usually wrong. Instead, pick up the phone.
      </p>
      <p>
        Call two or three suppliers. Tell them what you need. Get actual quotes for the
        actual materials on the actual job. A supplier quote in writing is a{' '}
        <strong className="guide__highlight">Certain</strong> tier line item. A number you
        pulled from a blog post is a{' '}
        <strong className="guide__highlight">Wild Guess</strong>. That difference matters
        when you run the simulation.
      </p>
      <p>
        Ask suppliers about lead times too. A specialist product that takes six weeks to
        arrive changes your programme and your costs.
      </p>

      <h2>step two: talk to someone who has done it</h2>

      <p>
        You know other tradespeople. Ask one who has done this type of work before. Not for
        their exact prices — just for the things you do not know to ask about. Hidden costs.
        Common problems. Things that catch first-timers out.
      </p>
      <p>
        A twenty-minute conversation can save you thousands. Most tradespeople will help if
        you ask honestly. &quot;I have not done one of these before, what should I watch out
        for?&quot; goes a long way.
      </p>

      <h2>step three: be honest about your uncertainty</h2>

      <p>
        This is where most people go wrong. They have never done the job before but they
        mark every line item as <strong className="guide__highlight">Low</strong> uncertainty
        because they do not want to face the real numbers.
      </p>
      <p>
        If you have not done this work before, most of your line items are{' '}
        <strong className="guide__highlight">High</strong> or{' '}
        <strong className="guide__highlight">Wild Guess</strong>. That is not a problem.
        That is just reality. The tool is designed to handle it — it will widen the range and
        give you a quote that accounts for the unknowns.
      </p>
      <p>
        The only person you hurt by lying about uncertainty is yourself. Mark things honestly
        and let the maths do the work.
      </p>

      <h2>step four: build in learning time</h2>

      <p>
        You will be slower on the first one. That is normal. A tiler doing their first
        polished concrete job will take longer than someone who has done fifty. Price your
        labour accordingly.
      </p>
      <p>
        Add 20–30% more time than you think a seasoned pro would take. Put it in as a
        separate line item — &quot;additional labour (first project of this type)&quot; — so
        you can see exactly what the learning tax costs you. On the next job, you will drop
        that line entirely.
      </p>

      <h2>when to walk away</h2>

      <p>
        Sometimes the honest answer is: this is not the right job to learn on. Walk away if:
      </p>
      <ul>
        <li>The client wants a fixed price and will not accept any variation.</li>
        <li>The job is high-value and you cannot afford to get it wrong.</li>
        <li>You cannot find a single person to ask for advice.</li>
        <li>
          The simulation output shows a massive spread between P50 and P95 — that means your
          uncertainty is so high that no reasonable quote will protect you.
        </li>
      </ul>
      <p>
        There is no shame in saying &quot;this is not my area.&quot; Refer it to someone
        who does it regularly. They might return the favour when something in your wheelhouse
        comes up.
      </p>

      <h2>worked example: quoting your first stud wall job</h2>

      <p>
        You are a general builder. A client wants a room divided with a stud wall, plastered
        and painted. You have done plenty of plastering but never built a stud wall from
        scratch. Here is how you might price it:
      </p>

      <ASCIIBox title="Line Items">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Estimate</th>
              <th>Tier</th>
              <th>Why</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Timber &amp; fixings</td>
              <td>£280</td>
              <td className="guide__highlight">Low</td>
              <td>Supplier quote in hand, standard CLS timber</td>
            </tr>
            <tr>
              <td>Plasterboard &amp; tape</td>
              <td>£120</td>
              <td className="guide__highlight">Certain</td>
              <td>You buy this regularly, price confirmed</td>
            </tr>
            <tr>
              <td>Plaster &amp; finishing</td>
              <td>£90</td>
              <td className="guide__highlight">Low</td>
              <td>Your bread and butter, know the cost</td>
            </tr>
            <tr>
              <td>Paint</td>
              <td>£60</td>
              <td className="guide__highlight">Certain</td>
              <td>Two coats mist then emulsion, standard area</td>
            </tr>
            <tr>
              <td>Labour — framing</td>
              <td>£400</td>
              <td className="guide__highlight">High</td>
              <td>First time building a stud wall, slower than normal</td>
            </tr>
            <tr>
              <td>Labour — plaster &amp; paint</td>
              <td>£350</td>
              <td className="guide__highlight">Low</td>
              <td>Done this hundreds of times</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Notice the split. The materials are low-risk because you got real prices. The
        plastering labour is low-risk because it is your core skill. But the framing labour
        is <strong className="guide__highlight">High</strong> because you have never done it.
        That honesty is what makes the quote safe.
      </p>
      <p>
        Base estimate: £1,300. After simulation, your P80 might come in around £1,450. That
        extra £150 is not padding — it is the cost of doing something new, calculated
        properly.
      </p>

      <div className="guide__cta">
        <Link href="/estimate/">[ BUILD YOUR ESTIMATE ]</Link>
      </div>
    </div>
  )
}
