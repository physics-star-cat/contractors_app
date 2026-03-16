import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'how to handle price increases mid-job // lowriskquotes',
  description:
    'What to do when material costs go up or scope creeps during a job. How to talk to clients, write change orders, and protect yourself in the original bid.',
  alternates: { canonical: '/us/guides/handling-price-increases-mid-job/' },
}

export default function HandlingPriceIncreasesMidJobPage() {
  return (
    <div className="guide">
      <h1>how to handle price increases mid-job</h1>

      <p>
        You bid the job in January. You started in March. Between then and now, lumber
        went up 15%, your supplier changed their delivery charges, and the homeowner decided
        they want heated floors after all. Your original number is now fiction.
      </p>
      <p>
        This happens all the time. Here is how to deal with it without losing the client or
        losing money.
      </p>

      <h2>materials going up</h2>

      <p>
        Material prices move. Sometimes slowly, sometimes overnight. If you bid three
        months ago and prices have shifted, you have a problem — but only if you did not plan
        for it.
      </p>
      <p>
        The fix starts before the job begins. When you bid, ask yourself: how stable are
        these prices? If you are bidding a job that will not start for two months, material
        costs are not <strong className="guide__highlight">Certain</strong>. They are{' '}
        <strong className="guide__highlight">Medium</strong> at best. Mark them accordingly
        and the simulation will build in a buffer.
      </p>
      <p>
        For long lead-time jobs, include a line in your contract:{' '}
        <em>
          &quot;Material prices valid for 30 days. After that, prices may be adjusted to
          reflect current supplier costs.&quot;
        </em>{' '}
        Simple. Professional. Gives you a mechanism to revisit if things change.
      </p>

      <h2>scope creep</h2>

      <p>
        The homeowner says &quot;while you are here, could you also...&quot; and suddenly the
        three-day job is a five-day job. This is the number one margin killer for contractors.
      </p>
      <p>
        The answer is always the same: yes, but it is extra. Say it kindly, say it clearly,
        and say it before you do the work. Not after. Once you have done it, you have no
        leverage.
      </p>
      <p>
        &quot;Happy to do that. Let me price it up and send you a change order so we are both
        clear on the cost.&quot; That sentence protects you every time.
      </p>

      <h2>how to have the conversation</h2>

      <p>
        Most contractors hate this part. Telling a client the price has changed feels
        uncomfortable. But it does not have to be confrontational. Three rules:
      </p>
      <ol>
        <li>
          <strong className="guide__highlight">Be specific.</strong> Do not say &quot;costs
          have gone up.&quot; Say &quot;the plywood I bid at $52 a sheet is now $64 a
          sheet. That adds $360 to the materials bill.&quot; Numbers are harder to argue with
          than feelings.
        </li>
        <li>
          <strong className="guide__highlight">Show your receipts.</strong> Forward the
          supplier invoice or price list. Let them see you are not making it up. Transparency
          builds trust.
        </li>
        <li>
          <strong className="guide__highlight">Give them options.</strong> &quot;We can use
          the same plywood at the new price, or I can source a similar product at $56 a
          sheet. Your call.&quot; Clients want to feel in control.
        </li>
      </ol>

      <h2>change orders</h2>

      <p>
        A change order is just a written record of a change to the original scope or
        price. It does not need to be complicated. A short email or text that says:
      </p>

      <ASCIIBox title="Example Change Order">
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          <span className="guide__highlight">Change Order #1</span> — March 15
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          Additional work: install heated floors in bathroom
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          Materials: $520 (heating mat, thermostat, self-leveling compound)
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          Labor: $600 (1.5 days)
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          Additional cost: <span className="guide__highlight">$1,120</span>
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
          Revised total: <span className="guide__highlight">$11,220</span> (was $10,100)
        </p>
      </ASCIIBox>

      <p>
        Get a &quot;yes&quot; in writing — even a text message reply — before you start the
        extra work. If it ever goes sideways, that message is your proof.
      </p>

      <h2>protecting yourself in the original bid</h2>

      <p>
        The best way to handle mid-job price increases is to not need to. That means
        building realistic risk into your bid from day one.
      </p>
      <p>
        If a material price could change before you buy it, do not mark it as{' '}
        <strong className="guide__highlight">Certain</strong>. If a subcontractor has not
        given you a firm price, do not mark them as{' '}
        <strong className="guide__highlight">Low</strong>. Use the tier that reflects what
        you actually know right now.
      </p>
      <p>
        A bid built on honest uncertainty tiers already has a buffer for normal price
        movement. You will not need to go back to the client for every small increase —
        only for the big ones or genuine scope changes. That makes you look professional
        and reliable, not like someone who cannot price a job.
      </p>

      <h2>real talk</h2>

      <p>
        Price increases mid-job are part of the trade. They are not going away. The
        contractors who handle them well are the ones who bid honestly in the first
        place, communicate clearly when things change, and put it in writing every time.
      </p>
      <p>
        Build your next bid with proper risk tiers and you will have less of these
        conversations. When you do need to have them, you will have the numbers to back
        you up.
      </p>

      <div className="guide__cta">
        <Link href="/estimate/">[ BUILD YOUR ESTIMATE ]</Link>
      </div>
    </div>
  )
}
