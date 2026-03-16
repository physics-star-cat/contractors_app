import './QuoteCard.css'

interface Props {
  label: string
  amount: string
  percentile: string
  description: string
  variant?: 'default' | 'recommended'
}

export default function QuoteCard({ label, amount, percentile, description, variant = 'default' }: Props) {
  const padLen = Math.max(0, 25 - label.length)
  return (
    <div className={`quote-card quote-card--${variant}`}>
      <div className="quote-card__header">
        {'\u250C\u2500 '}{label}{' ' + '\u2500'.repeat(padLen) + '\u2510'}
      </div>
      <div className="quote-card__body">
        <div className="quote-card__amount">{amount}</div>
        <div className="quote-card__percentile">{percentile}</div>
        <div className="quote-card__desc">{description}</div>
      </div>
      <div className="quote-card__footer">
        {'\u2514' + '\u2500'.repeat(28) + '\u2518'}
      </div>
    </div>
  )
}
