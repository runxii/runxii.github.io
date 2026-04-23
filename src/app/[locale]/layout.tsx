import type { Metadata } from 'next'
import {
  DM_Serif_Display,
  Fira_Code,
  Noto_Sans,
  Noto_Sans_SC,
  Noto_Serif_SC,
} from 'next/font/google'
import { notFound } from 'next/navigation'
import { isLocale } from '@/lib/i18n'
import { locales } from '@/types/i18n'
import '@/app/globals.css'

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-serif-en',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-mono',
})

const notoSans = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-sans-en',
})

const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-sans-zh',
})

const notoSerifSc = Noto_Serif_SC({
  subsets: ['latin'],
  weight: ['900'],
  variable: '--font-serif-zh',
})

export async function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}

export const metadata: Metadata = {
  title: 'Yang Portfolio',
  description: 'Portfolio website',
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body
        className={[
          dmSerifDisplay.variable,
          firaCode.variable,
          notoSans.variable,
          notoSansSC.variable,
          notoSerifSc.variable,
          'bg-portfolio text-neutral-900 antialiased',
        ].join(' ')}
      >
        {children}
      </body>
    </html>
  )
}
