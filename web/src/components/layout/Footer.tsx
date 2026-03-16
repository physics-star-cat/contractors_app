import Link from 'next/link'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__separator">{'─'.repeat(60)}</div>
      <p className="footer__text">
        lowriskquotes // <Link href="/about/">about</Link> // all data stays in your browser
      </p>
    </footer>
  )
}
