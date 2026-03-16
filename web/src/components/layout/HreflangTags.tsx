import { LOCALES, LOCALE_INFO } from '@/models/translations'
import type { Locale } from '@/models/translations'

interface HreflangMap {
  [locale: string]: string
}

interface Props {
  currentLocale: Locale
  alternates: HreflangMap
}

export default function HreflangTags({ currentLocale, alternates }: Props) {
  const baseUrl = 'https://lowriskquotes.com'

  return (
    <>
      {Object.entries(alternates).map(([locale, path]) => (
        <link
          key={locale}
          rel="alternate"
          hrefLang={LOCALE_INFO[locale as Locale].hreflang}
          href={`${baseUrl}${path}`}
        />
      ))}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${baseUrl}${alternates.en || '/'}`}
      />
    </>
  )
}
