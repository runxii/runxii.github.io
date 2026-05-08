import type { Metadata } from 'next'
import type { Locale } from '@/types/i18n'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/layout/Header'
import { projects } from '@/data/projects'
import { isLocale, localizePath } from '@/lib/i18n'
import { getLocalizedNav } from '@/lib/portfolio'

interface PageProps {
  params: Promise<{
    locale: string
  }>
}

interface WorkListItem {
  slug: string
  title: Record<Locale, string>
  subtitle?: Record<Locale, string>
  description: Record<Locale, string>
  image?: string
  kind: Record<Locale, string>
  href: string
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params

  if (!isLocale(locale)) {
    return {}
  }

  return {
    title: locale === 'zh' ? '全部作品' : 'All Work',
    description:
            locale === 'zh'
              ? '项目详情与文章内容的统一索引页。'
              : 'Unified index of project details and articles.',
  }
}

export default async function WorkPage({ params }: PageProps) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  const typedLocale: Locale = locale

  const projectItems: WorkListItem[] = projects.map(project => ({
    slug: project.slug,
    title: project.title,
    subtitle: project.subtitle,
    description: project.description,
    image: project.image,
    kind: {
      en: 'project',
      zh: '项目',
    },
    href: `/work/${project.slug}`,
  }))

  const workItems = [...projectItems]
  const navItems = getLocalizedNav(typedLocale)

  return (
    <main className="min-h-screen bg-[#f6f2ed] text-neutral-900">
      <Header locale={locale} navItems={navItems} />
      <div className="mx-auto w-full max-w-5xl px-6 py-12">
        <div className="mb-10">
          <p className="font-portfolio-mono text-sm text-neutral-500">
            /
            {typedLocale}
            /work
          </p>
          <h1 className="font-portfolio-serif mt-3 text-5xl text-black">
            {typedLocale === 'zh' ? '全部作品' : 'All Work'}
          </h1>
          <p className="font-portfolio-sans mt-4 text-sm text-neutral-600">
            {typedLocale === 'zh'
              ? '项目案例详情，文章，博客，工作记录'
              : 'project case study, articles, blogs, record of work'}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {workItems.map(item => (
            <Link
              key={`${item.kind[locale]}-${item.slug}`}
              href={localizePath(typedLocale, item.href)}
              className="block rounded-[12px] border border-neutral-200 bg-white/80 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(0,0,0,0.10)]"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-portfolio-mono rounded-full bg-neutral-100 px-3 py-1 text-[11px] uppercase tracking-[0.08em] text-neutral-700">
                  {item.kind[locale]}
                </span>
              </div>

              <h2 className="font-portfolio-serif text-3xl leading-none text-black">
                {item.title[typedLocale]}
              </h2>

              {item.subtitle
                ? (
                    <p className="font-portfolio-sans mt-2 text-xs text-neutral-500">
                      {item.subtitle[typedLocale]}
                    </p>
                  )
                : null}

              <p className="font-portfolio-sans mt-5 text-sm leading-7 text-neutral-700">
                {item.description[typedLocale]}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
