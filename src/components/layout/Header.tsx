'use client'

import type { Locale } from '@/types/i18n'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { getAlternateLocale, localizePath } from '@/lib/i18n'

interface HeaderProps {
  locale: Locale
  navItems: Array<{
    key: string
    label: string
    href: string
    type: 'anchor' | 'route'
  }>
}

function getAlternatePath(pathname: string, currentLocale: Locale, nextLocale: Locale) {
  if (!pathname) {
    return `/${nextLocale}`
  }

  const currentPrefix = `/${currentLocale}`
  const nextPrefix = `/${nextLocale}`

  if (pathname === currentPrefix) {
    return nextPrefix
  }

  if (pathname.startsWith(`${currentPrefix}/`)) {
    return pathname.replace(currentPrefix, nextPrefix)
  }

  return nextPrefix
}

export default function Header({ locale, navItems }: HeaderProps) {
  const pathname = usePathname()
  const altLocale = getAlternateLocale(locale)
  const altHref = getAlternatePath(pathname, locale, altLocale)

  return (
    <header className="sticky top-0 z-30 w-full">
      <div className=" flex w-full items-center justify-center rounded-t-[3px] bg-white/60 px-4 py-4 shadow-[0_10px_28px_rgba(0,0,0,0.08)] backdrop-blur">
        <nav className="font-portfolio-mono flex items-center gap-5 text-[14px] tracking-[0.06em] text-neutral-900 md:gap-9">
          {navItems.map((item) => {
            const href
              = item.type === 'route'
                ? localizePath(locale, item.href)
                : `/${locale}${item.href}`
            return (
              <Link
                key={item.key}
                href={href}
                className="transition hover:opacity-70"
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <Link
          href={altHref}
          className="font-portfolio-sans absolute right-3 rounded-full border border-neutral-300 bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-700 transition hover:bg-neutral-100"
        >
          {locale === 'en' ? '中文' : 'EN'}
        </Link>
      </div>
    </header>
  )
}
