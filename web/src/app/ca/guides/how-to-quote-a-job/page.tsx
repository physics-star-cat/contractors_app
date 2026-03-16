import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'How to Quote a Job as a Canadian Contractor // lowriskquotes',
  description:
    'A practical guide to quoting jobs accurately in Canada. Learn why contractors underquote, how to assess risk on each line item, and how Monte Carlo simulation builds safer quotes in CAD.',
  alternates: { canonical: '/ca/guides/how-to-quote-a-job/' },
}

export default function HowToQuoteAJobPageCA() {
  return (
    <div className="guide">
      <h1>how to quote a job (without losing your shirt)</h1>

      <p>
        Most contractors have lost money on a job. Not because they did bad work — because
        they quoted wrong. They priced based on best-case thinking, got the job, then watched
        their margin evaporate when reality showed up.
      </p>
      <p>
        This guide explains why that happens, and how to fix it with a method that takes about
        five minutes longer than your current approach.
      </p>

      <h2>why contractors underquote</h2>

      <p>
        Three forces push every quote downward:
      </p>

      <p>
        <strong className="guide__highlight">Optimism bias.</strong> You picture the job going
        smoothly. The drywall comes down clean. The joists are solid. The supplier delivers on
        time. You price for the version of the job where nothing goes wrong — even though that
        version almost never happens.
      </p>
      <p>
        <strong className="guide__highlight">Competitive pressure.</strong> You know the
        customer has three quotes. So you sharpen your pencil, trim the fat, round everything
        down. Now your quote is tight. Too tight. You win the job and lose the profit.
      </p>
      <p>
        <strong className="guide__highlight">Single-point estimates.</strong> You write down one
        number for each line item: tiles $3,200. That is not an estimate. That is a guess
        dressed up as a fact. Real costs are ranges. Tiles could be $2,800 if your usual
        supplier has stock, or $3,800 if they do not and you are ordering from someone new.
      </p>

      <h2>the five uncertainty tiers</h2>

      <p>
        Not every line item in your quote carries the same risk. A bin rental from the company
        you have used fifty times is not the same as a custom glass shower screen from a
        fabricator you found last week. Treating them the same is the core mistake in flat
        contingency pricing.
      </p>
      <p>
        LowRiskQuotes uses five tiers of uncertainty. Here is what each one means in practice:
      </p>

      <ASCIIBox title="Uncertainty Tiers">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Tier</th>
              <th>Range</th>
              <th>Real-World Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="guide__highlight">Certain</td>
              <td>+/- 2%</td>
              <td>Bin rental, fixed-price supplier quote in writing</td>
            </tr>
            <tr>
              <td className="guide__highlight">Low</td>
              <td>+/- 8%</td>
              <td>Materials from your regular supplier, standard fittings</td>
            </tr>
            <tr>
              <td className="guide__highlight">Medium</td>
              <td>+/- 15%</td>
              <td>Subcontractor you have used before but not recently</td>
            </tr>
            <tr>
              <td className="guide__highlight">High</td>
              <td>+/- 25%</td>
              <td>First-time subcontractor, specialist materials, site unknowns</td>
            </tr>
            <tr>
              <td className="guide__highlight">Wild Guess</td>
              <td>+/- 40%</td>
              <td>No survey done, unfamiliar scope, &quot;should be about...&quot;</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        The key question for each line item is: <em>how confident am I that this number is
        right?</em> Not how confident you want to be. How confident you actually are, based on
        evidence. Have you got a written quote? That is Certain. Are you guessing from a job
        you did two years ago in a different province? That is High at best.
      </p>

      <h2>worked example: bathroom renovation</h2>

      <p>
        Let us walk through a real quote. Mrs. Chen wants her bathroom redone — strip out,
        re-tile, new fixtures, custom glass shower screen, new plumbing, electrical, and a bin
        for the waste. Your base estimate comes to $10,200.
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
              <td>Wall &amp; floor tiles</td>
              <td>$3,200</td>
              <td className="guide__highlight">Low</td>
              <td>Your regular supplier, you have priced similar before</td>
            </tr>
            <tr>
              <td>Fixtures (vanity, toilet, taps)</td>
              <td>$1,300</td>
              <td className="guide__highlight">Medium</td>
              <td>Customer chose mid-range but has not finalised yet</td>
            </tr>
            <tr>
              <td>Custom glass shower screen</td>
              <td>$2,400</td>
              <td className="guide__highlight">High</td>
              <td>New fabricator, bespoke size, never ordered from them</td>
            </tr>
            <tr>
              <td>Plumbing (subcontractor)</td>
              <td>$1,800</td>
              <td className="guide__highlight">Medium</td>
              <td>Dave&apos;s reliable but has not quoted yet this job</td>
            </tr>
            <tr>
              <td>Electrician</td>
              <td>$1,000</td>
              <td className="guide__highlight">Low</td>
              <td>Standard bathroom electrical, your usual sparky</td>
            </tr>
            <tr>
              <td>Bin rental</td>
              <td>$500</td>
              <td className="guide__highlight">Certain</td>
              <td>Fixed price from your regular waste company</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        If you quoted $10,200 flat, you are pricing for the scenario where every single line
        item comes in exactly on estimate. That is the single most unlikely outcome. It is like
        betting that every coin in a six-coin toss lands heads.
      </p>
      <p>
        Run those numbers through a Monte Carlo simulation and you get a distribution. The
        simulation runs thousands of versions of this job, each time pulling costs from within
        the uncertainty range you set. Because overruns are more common than underruns, the
        simulation skews upward — just like real life.
      </p>

      <ASCIIBox title="Simulation Output">
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          Base estimate: <span className="guide__highlight">$10,200</span>
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          P50 (coin-flip odds): <span className="guide__highlight">$10,710</span>
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          P80 (recommended quote): <span className="guide__highlight">$11,450</span>
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
          P95 (worst-case buffer): <span className="guide__highlight">$12,500</span>
        </p>
      </ASCIIBox>

      <p>
        The difference between $10,200 and $11,450 is $1,250 — about 12%. But it is not a
        flat 12% contingency. It is a calculated buffer based on the specific risks in this
        specific job. A job with all-Low items would need less. A job full of Wild Guesses
        would need much more.
      </p>

      <h2>reading the results: what the bell curve means</h2>

      <p>
        The simulation gives you a probability distribution — a bell curve showing how likely
        each total cost is. Here is how to read it:
      </p>
      <ul>
        <li>
          <strong className="guide__highlight">P50</strong> means there is a 50% chance the
          actual cost is below this number. Coin-flip odds. Not a safe quote.
        </li>
        <li>
          <strong className="guide__highlight">P80</strong> means 80% chance the actual cost is
          below this. This is the sweet spot for most contractors. You are protected against
          most overruns without pricing yourself out of the market.
        </li>
        <li>
          <strong className="guide__highlight">P95</strong> means 95% chance. This is your
          &quot;sleep well at night&quot; number. Use it for fixed-price contracts or customers who will
          not accept any variation.
        </li>
      </ul>
      <p>
        Which percentile you quote at depends on the job and the customer. A time-and-materials
        job with a good client? P50 might be fine. A fixed-price kitchen for a lawyer who
        will hold you to every dollar? Quote at P80 or P95 and protect yourself.
      </p>

      <h2>common quoting mistakes</h2>

      <p>
        After running thousands of estimates through the simulator, patterns emerge. Here are
        the mistakes that cost contractors the most money:
      </p>

      <ol>
        <li>
          <strong>Marking everything as Low uncertainty.</strong> If you have not got a written
          quote, it is not Low. If you have not done this exact scope before, it is not Low.
          Be honest with yourself.
        </li>
        <li>
          <strong>Forgetting travel and time costs.</strong> Driving 80 kilometres round trip
          per day at the CRA rate of $0.70/km for a three-week job is $1,680. That is real
          money. Price it.
        </li>
        <li>
          <strong>Not pricing for delays.</strong> Weather, late deliveries, customer changes.
          In Canada, winter can shut down outdoor work for weeks. These are not rare events.
          They are the norm. Your job duration estimate needs its own uncertainty tier.
        </li>
        <li>
          <strong>Copying last year&apos;s prices.</strong> Material costs move. Lumber is up.
          Copper is up. If your prices are six months old, they are wrong.
        </li>
        <li>
          <strong>Quoting to win instead of quoting to profit.</strong> A job you win at the
          wrong price is worse than a job you do not get. The worst outcome is not losing the
          bid. It is winning it and working for free.
        </li>
      </ol>

      {/* MiniEstimator component will be added here */}

      <h2>putting it together</h2>

      <p>
        Here is the workflow. It adds about five minutes to your quoting process:
      </p>
      <ol>
        <li>List every line item as you normally would.</li>
        <li>For each one, ask: how confident am I in this number? Assign a tier.</li>
        <li>Add your daily rate, job duration, and travel.</li>
        <li>Run the simulation.</li>
        <li>Quote at P80 for most jobs. Adjust up or down based on contract type.</li>
      </ol>
      <p>
        You are not adding a made-up contingency. You are building a quote that reflects the
        actual risk profile of the actual job. That is the difference between hoping you make
        money and knowing you will.
      </p>

      <div className="guide__cta">
        <Link href="/estimate/">[ BUILD YOUR ESTIMATE ]</Link>
      </div>
    </div>
  )
}
