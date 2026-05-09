import type { Metadata } from 'next'
import type { Locale } from '@/types/i18n'
import { notFound } from 'next/navigation'
import LabFilterList from '@/components/card/LabFilterList'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
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
    title: locale === 'zh' ? 'Yang | 实验' : 'Yang | Lab',
    description:
        locale === 'zh'
          ? '代码片段、设计、博客。'
          : 'Useful code snippet, original design, and blogs.',
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

      <main className="mx-auto w-full max-w-[1500px] px-5 pb-24 pt-10 md:px-8 md:pt-12">
        <LabFilterList locale={typedLocale} items={workItems} />
      </main>
      <Footer links={socialLinks} />
      <div className="pointer-events-none absolute inset-x-0 bottom-40 -z-10">
        <DottedBand className="absolute inset-0 z-0" />
        <WaveLine className="relative z-0 translate-y-[150px]" />
      </div>
    </div>
  )
}
