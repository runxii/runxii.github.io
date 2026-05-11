'use client'

import type { Locale } from '@/types/i18n'
import type { Project } from '@/types/project'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo } from 'react'
import { localizePath } from '@/lib/i18n'

interface WorkListProps {
  locale: Locale
  items: Project[]
}

export default function WorkList({ locale, items }: WorkListProps) {
  const filteredItems = useMemo(() => {
    return items.filter(item => item.type === 'project')
  }, [items])

  return (
    <section>
      <div className="mb-10 grid gap-10 lg:grid-cols-[1fr_470px] lg:items-start">
        <div>
          <p className="font-portfolio-mono text-[14px] text-neutral-500">
            /work
          </p>

          <h1 className="font-portfolio-serif mt-4 text-[54px] leading-none text-black md:text-[64px]">
            {locale === 'zh' ? '作品' : 'All Work'}
          </h1>

          <div
            className="mt-2 h-3 w-[255px] bg-[radial-gradient(circle,_rgba(132,219,218,0.9)_5px,_transparent_3px)] bg-[length:18px_14px] bg-repeat-x"
          />
        </div>
      </div>

      <div className="space-y-10">
        {filteredItems.map(item => (
          <Link
            key={`${item.type}-${item.slug}`}
            href={localizePath(locale, `/work/${item.slug}`)}
            className="group block"
          >
            <article
              className="grid w-full min-h-[208px] overflow-hidden rounded-[12px] bg-white shadow-[0_10px_28px_rgba(0,0,0,0.035)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(0,0,0,0.08)] md:grid-cols-[1fr_345px] lg:grid-cols-[1fr_350px]"
            >
              <div className="flex flex-col px-5 py-5 md:px-6">
                <div>
                  {item.tag
                    ? (
                        <span
                          className="inline-flex items-center justify-center rounded-full bg-primary px-3 py-[5px] font-portfolio-sans text-[11px] font-bold uppercase leading-none tracking-[0.04em] text-white shadow-sm"
                        >
                          {item.tag}
                        </span>
                      )
                    : null}
                  <h2 className="font-portfolio-serif mt-3 text-[32px] leading-none text-black md:text-[36px]">
                    {item.title}
                  </h2>

                  <p className="font-portfolio-sans mt-6 max-w-[760px] text-sm leading-[1.5] text-neutral-600">
                    {item.description}
                  </p>
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-8">

                  {item.stack?.map(stackItem => (
                    <span key={stackItem} className="font-portfolio-mono text-sm font-bold text-black">
                      #
                      {stackItem}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative min-h-[190px] bg-[#fbfaf8] md:min-h-full">
                {item.image
                  ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    )
                  : (
                      <div className="flex h-full min-h-[190px] items-center justify-center bg-[#f6f2ed]">
                        <div
                          className="h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(185,227,225,0.9)_0%,rgba(185,227,225,0.35)_45%,transparent_70%)]"
                        />
                      </div>
                    )}
              </div>
            </article>
          </Link>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="rounded-[12px] bg-white/70 p-10 text-center">
          <p className="font-portfolio-sans text-sm text-neutral-500">
            {locale === 'zh' ? '暂无发布项目。' : 'No projects published yet.'}
          </p>
        </div>
      )}
    </section>
  )
}
