import type { Metadata } from 'next'
import type { Locale } from '@/types/i18n'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Header from '@/components/layout/Header'
import TechBadge from '@/components/ui/TechBadge'
import { isLocale } from '@/lib/i18n'
import { getLocalizedNav } from '@/lib/portfolio'
import { getWorkBySlug, getWorkSlugs } from '@/lib/work'

interface PageProps {
  params: Promise<{
    locale: string
    slug: string
  }>
}

export function generateStaticParams() {
  const locales: Locale[] = ['en', 'zh']

  return locales.flatMap(locale =>
    getWorkSlugs(locale).map(slug => ({
      locale,
      slug,
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

  const project = getWorkBySlug(locale, slug)

  if (!project) {
    return {}
  }

  return {
    title: `${project.title} | Work`,
    description: project.description,
  }
}

export default async function WorkDetailPage({ params }: PageProps) {
  const { locale, slug } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  const typedLocale: Locale = locale
  const project = getWorkBySlug(typedLocale, slug)
  const navItems = getLocalizedNav(typedLocale)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-[#f6f2ed] text-neutral-900">
      <Header locale={typedLocale} navItems={navItems} />

      <article className="mx-auto w-full max-w-6xl px-6 py-12">
        <p className="font-portfolio-mono text-sm text-neutral-500">
          /work/
          {project.slug}
        </p>

        <h1 className="font-portfolio-serif mt-4 text-5xl text-black">
          {project.title}
        </h1>

        {project.subtitle
          ? (
              <p className="font-portfolio-mono mt-3 text-sm text-neutral-600">
                {project.subtitle}
              </p>
            )
          : null}

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tag
            ? (
                <span
                  className="inline-flex items-center justify-center rounded-full bg-[#bd292f] px-3 py-[5px] font-portfolio-sans text-[11px] font-bold uppercase leading-none tracking-[0.04em] text-white shadow-sm"
                >
                  {project.tag}
                </span>
              )
            : null}

          {project.stack?.map(item => (
            <TechBadge key={item} label={item} />
          ))}
        </div>

        <div
          className="prose prose-neutral mt-12 max-w-none font-portfolio-sans prose-headings:font-portfolio-serif prose-h1:text-5xl prose-h2:text-3xl prose-h3:text-2xl prose-p:leading-8 prose-img:rounded-[16px]"
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {project.content}
          </ReactMarkdown>
        </div>
      </article>
    </main>
  )
}
