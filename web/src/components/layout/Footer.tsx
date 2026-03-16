'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './Footer.css'

const DISCLAIMERS: Record<string, { about: string; privacy: string; disclaimer: string }> = {
  en: { about: 'about', privacy: 'all data stays in your browser', disclaimer: 'cost estimates are indicative only and not financial advice' },
  de: { about: 'über uns', privacy: 'alle Daten bleiben in Ihrem Browser', disclaimer: 'Kostenschätzungen sind nur Richtwerte und keine Finanzberatung' },
  fr: { about: 'à propos', privacy: 'toutes les données restent dans votre navigateur', disclaimer: 'les estimations de coûts sont indicatives et ne constituent pas un conseil financier' },
  pl: { about: 'o nas', privacy: 'wszystkie dane pozostają w Twojej przeglądarce', disclaimer: 'wyceny kosztów mają charakter orientacyjny i nie stanowią porady finansowej' },
  nl: { about: 'over ons', privacy: 'alle gegevens blijven in uw browser', disclaimer: 'kostenramingen zijn indicatief en vormen geen financieel advies' },
  es: { about: 'acerca de', privacy: 'todos los datos permanecen en su navegador', disclaimer: 'las estimaciones de costes son orientativas y no constituyen asesoramiento financiero' },
  us: { about: 'about', privacy: 'all data stays in your browser', disclaimer: 'cost estimates are indicative only and not financial advice' },
  au: { about: 'about', privacy: 'all data stays in your browser', disclaimer: 'cost estimates are indicative only and not financial advice' },
  ca: { about: 'about', privacy: 'all data stays in your browser', disclaimer: 'cost estimates are indicative only and not financial advice' },
  pt: { about: 'sobre', privacy: 'todos os dados permanecem no seu navegador', disclaimer: 'estimativas de custos são indicativas e não constituem aconselhamento financeiro' },
  it: { about: 'chi siamo', privacy: 'tutti i dati restano nel tuo browser', disclaimer: 'le stime dei costi sono indicative e non costituiscono consulenza finanziaria' },
  sv: { about: 'om oss', privacy: 'all data stannar i din webbläsare', disclaimer: 'kostnadsuppskattningar är vägledande och utgör inte finansiell rådgivning' },
  tr: { about: 'hakkında', privacy: 'tüm veriler tarayıcınızda kalır', disclaimer: 'maliyet tahminleri yalnızca gösterge niteliğindedir ve mali tavsiye değildir' },
}

function getLocale(pathname: string): string {
  const match = pathname.match(/^\/(de|fr|pl|nl|es|us|au|ca|pt|it|sv|tr)(\/|$)/)
  return match ? match[1] : 'en'
}

export default function Footer() {
  const pathname = usePathname()
  const locale = getLocale(pathname)
  const strings = DISCLAIMERS[locale] || DISCLAIMERS.en
  const aboutPath = locale === 'en' ? '/about/' : `/${locale}/about/`

  return (
    <footer className="footer">
      <div className="footer__separator">{'─'.repeat(60)}</div>
      <p className="footer__text">
        lowriskquotes // <Link href={aboutPath}>{strings.about}</Link> // {strings.privacy}
      </p>
      <p className="footer__disclaimer">{strings.disclaimer}</p>
    </footer>
  )
}
