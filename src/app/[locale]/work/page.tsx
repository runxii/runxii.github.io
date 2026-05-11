import type { Metadata } from 'next'
import type { Locale } from '@/types/i18n'
import { notFound } from 'next/navigation'
import WorkList from '@/components/card/WorkList'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import DottedBand from '@/components/ui/DottedBand'
import { socialLinks } from '@/data/social'
import { isLocale } from '@/lib/i18n'
import { getLocalizedNav } from '@/lib/portfolio'
import { getAllWork } from '@/lib/work'

interface PageProps {
  params: Promise<{
    locale: string
  }>
}

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'zh' },
  ]
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params

  if (!isLocale(locale)) {
    return {}
  }

  return {
    title: locale === 'zh' ? 'Yang | 全部作品' : 'Yang | All Work',
    description:
        locale === 'zh'
          ? '项目：思考，制作与展示'
          : 'Projects: thinking, making and showing.',
  }
}
export default async function WorkPage({ params }: PageProps) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  const typedLocale: Locale = locale
  const navItems = getLocalizedNav(typedLocale)
  const workItems = getAllWork(typedLocale)

  return (
    <div className="relative min-h-screen text-neutral-950">
      <Header locale={typedLocale} navItems={navItems} />

      <main className="mx-auto w-full max-w-[1500px] px-10 pb-24 pt-10 md:pt-12">
        <WorkList locale={typedLocale} items={workItems} />
      </main>
      <Footer links={socialLinks} />
      <div className="pointer-events-none absolute inset-x-0 bottom-60 -z-10">
        <DottedBand className="absolute inset-0 z-0" />
      </div>
    </div>
  )
}
