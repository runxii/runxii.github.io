import type { Locale } from '@/types/i18n'
import { locales } from '@/types/i18n'

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'en' ? 'zh' : 'en'
}

export function localizePath(locale: Locale, href: string): string {
  if (href.startsWith('#'))
    return href
  if (href === '/')
    return `/${locale}`
  return `/${locale}${href}`
}
