import type { Metadata } from 'next'
import type { Locale } from '@/types/i18n'
import { notFound } from 'next/navigation'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import WorkFilterList from '@/components/layout/WorkFilterList'
import DottedBand from '@/components/ui/DottedBand'
import WaveLine from '@/components/ui/WaveLine'
import { socialLinks } from '@/data/social'
import { isLocale } from '@/lib/i18n'
import { getLocalizedNav } from '@/lib/portfolio'
import { getAllWork } from '@/lib/work'

interface PageProps {
  params: Promise<{
    locale: string
  }>
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
          ? '项目详情、博客与实验记录的统一索引页。'
          : 'Unified index of projects, blogs, and lab records.',
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
    <div className="min-h-screen text-neutral-950">
      <Header locale={typedLocale} navItems={navItems} />

      <main className="mx-auto w-full max-w-[1500px] px-5 pb-24 pt-10 md:px-8 md:pt-12">
        <WorkFilterList locale={typedLocale} items={workItems} />
      </main>
      <Footer links={socialLinks} />
      <div className="pointer-events-none absolute inset-x-0 top-[105%] -z-10">
        <DottedBand className="absolute inset-0 z-0" />
        <WaveLine className="relative z-0 translate-y-[150px]" />
      </div>
    </div>
  )
}
