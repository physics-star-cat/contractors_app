import './ASCIIBox.css'

interface Props {
  title?: string
  variant?: 'default' | 'highlight' | 'warning'
  children: React.ReactNode
}

export default function ASCIIBox({ title, variant = 'default', children }: Props) {
  return (
    <div className={`ascii-box ascii-box--${variant}`}>
      {title ? (
        <div className="ascii-box__header">
          <span className="ascii-box__corner">{'\u250C\u2500'}</span>
          <span className="ascii-box__title">{` ${title} `}</span>
          <span className="ascii-box__line">{'\u2500'.repeat(40)}</span>
          <span className="ascii-box__corner">{'\u2510'}</span>
        </div>
      ) : (
        <div className="ascii-box__header">
          <span className="ascii-box__border-top">{'\u250C' + '\u2500'.repeat(60) + '\u2510'}</span>
        </div>
      )}
      <div className="ascii-box__content">{children}</div>
      <div className="ascii-box__footer">
        <span className="ascii-box__border-bottom">{'\u2514' + '\u2500'.repeat(60) + '\u2518'}</span>
      </div>
    </div>
  )
}
