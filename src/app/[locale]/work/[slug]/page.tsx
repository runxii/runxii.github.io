import type { Metadata } from 'next'
import type { Locale } from '@/types/i18n'
import { notFound } from 'next/navigation'
import Header from '@/components/layout/Header'
import TechBadge from '@/components/ui/TechBadge'
import { projects } from '@/data/projects'
import { isLocale } from '@/lib/i18n'
import { getLocalizedNav } from '@/lib/portfolio'

interface PageProps {
  params: Promise<{
    locale: string
    slug: string
  }>
}

export function generateStaticParams() {
  return ['en', 'zh'].flatMap(locale =>
    projects.map(project => ({
      locale,
      slug: project.slug,
    })),
  )
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, slug } = await params

  if (!isLocale(locale)) {
    return {}
  }

  const project = projects.find(item => item.slug === slug)

  if (!project) {
    return {}
  }

  return {
    title: `${project.title[locale]} | Work`,
    description: project.description[locale],
  }
}

export default async function WorkDetailPage({ params }: PageProps) {
  const { locale, slug } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  const typedLocale: Locale = locale
  const project = projects.find(item => item.slug === slug)
  const navItems = getLocalizedNav(typedLocale)
  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-[#f6f2ed] text-neutral-900">
      {/*  Header */}
      <Header locale={typedLocale} navItems={navItems} />
      {/* Main content */}
      <div className="mx-auto w-full max-w-4xl px-6 py-12 ">
        <p className="font-portfolio-mono text-sm text-neutral-500">
          /work/
          {project.slug}
        </p>

        <h1 className="font-portfolio-serif mt-4 text-5xl text-black">
          {project.title[typedLocale]}
        </h1>

        {project.subtitle
          ? (
              <p className="font-portfolio-mono mt-3 text-lg text-neutral-600">
                {project.subtitle[typedLocale]}
              </p>
            )
          : null}

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map(item => (
            <TechBadge key={item} label={item} />
          ))}
        </div>

        <p className="font-portfolio-sans mt-8 max-w-2xl text-base leading-8 text-neutral-800">
          {project.description[typedLocale]}
        </p>
      </div>
    </main>
  )
}
