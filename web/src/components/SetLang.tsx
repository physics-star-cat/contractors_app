'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const LOCALE_MAP: Record<string, string> = {
  de: 'de',
  fr: 'fr',
  es: 'es',
  pl: 'pl',
  nl: 'nl',
  pt: 'pt',
  it: 'it',
  sv: 'sv',
  tr: 'tr',
}

export default function SetLang() {
  const pathname = usePathname()

  useEffect(() => {
    const match = pathname.match(/^\/(de|fr|es|pl|nl|pt|it|sv|tr)(\/|$)/)
    const lang = match ? LOCALE_MAP[match[1]] : 'en'
    document.documentElement.lang = lang
  }, [pathname])

  return null
}
