'use client'

import type { Locale } from '@/types/i18n'
import type { Project, WorkType } from '@/types/project'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { localizePath } from '@/lib/i18n'

interface WorkFilterListProps {
  locale: Locale
  items: Project[]
}

const FILTERS: WorkType[] = ['project', 'blog', 'lab']

function getFilterLabel(locale: Locale, type: WorkType) {
  const labels: Record<WorkType, Record<Locale, string>> = {
    project: {
      en: 'Project',
      zh: '项目',
    },
    blog: {
      en: 'Blog',
      zh: '博客',
    },
    lab: {
      en: 'Lab',
      zh: '实验室',
    },
  }

  return labels[type][locale]
}

export default function LabFilterList({ locale, items }: WorkFilterListProps) {
  const [selectedType, setSelectedType] = useState<WorkType>('project')

  const filteredItems = useMemo(() => {
    return items.filter(item => item.type === selectedType)
  }, [items, selectedType])

  return (
    <section>
      <div className="mb-10 grid gap-10 lg:grid-cols-[1fr_470px] lg:items-start">
        <div>
          <p className="font-portfolio-mono text-[14px] text-black">
            /lab
          </p>

          <h1 className="font-portfolio-serif mt-4 text-[54px] leading-none text-black md:text-[64px]">
            {locale === 'zh' ? '实验' : 'Lab'}
          </h1>

          <div className="mt-2 h-3 w-[255px] bg-[radial-gradient(circle,_rgba(132,219,218,0.9)_5px,_transparent_3px)] bg-[length:18px_14px] bg-repeat-x" />
        </div>

        <div className="flex items-center justify-start gap-8 pt-9 lg:justify-between">
          {FILTERS.map((type) => {
            const isSelected = selectedType === type

            return (
              <button
                key={type}
                type="button"
                onClick={() => setSelectedType(type)}
                className={[
                  'font-portfolio-mono min-w-[112px] rounded-full px-7 py-2 text-[20px] leading-none shadow-[0_4px_10px_rgba(0,0,0,0.18)] transition',
                  isSelected
                    ? 'bg-[#b91419] text-white'
                    : 'bg-[#f0f0ee] text-neutral-400 hover:bg-[#b91419] hover:text-white',
                ].join(' ')}
              >
                {getFilterLabel(locale, type)}
              </button>
            )
          })}
        </div>
      </div>

      <div className="space-y-10">
        {filteredItems.map(item => (
          <Link
            key={`${item.type}-${item.slug}`}
            href={localizePath(locale, `/lab/${item.slug}`)}
            className="group block"
          >
            <article className="grid w-full min-h-[208px] overflow-hidden rounded-[12px] bg-white shadow-[0_10px_28px_rgba(0,0,0,0.035)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(0,0,0,0.08)] md:grid-cols-[1fr_345px] lg:grid-cols-[1fr_350px]">
              <div className="flex flex-col px-5 py-5 md:px-6">
                <div>
                  <span className="font-portfolio-mono inline-flex rounded-full bg-[#f4f4f3] px-3 py-1 text-[12px] lowercase tracking-[0.03em] text-neutral-600">
                    {getFilterLabel(locale, item.type).toLowerCase()}
                  </span>

                  <h2 className="font-portfolio-serif mt-3 text-[32px] leading-none text-black md:text-[36px]">
                    {item.title}
                  </h2>

                  <p className="font-portfolio-sans mt-6 max-w-[760px] text-[14px] leading-[1.5] text-neutral-600">
                    {item.description}
                  </p>
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-8">
                  {item.tag
                    ? (
                        <span
                          className="inline-flex items-center justify-center rounded-full bg-[#bd292f] px-3 py-[5px] font-portfolio-sans text-[11px] font-bold uppercase leading-none tracking-[0.04em] text-white shadow-sm"
                        >
                          {item.tag}
                        </span>
                      )
                    : null}

                  {item.stack && item.stack.length > 0
                    ? (
                        item.stack.map(stackItem => (
                          <span
                            key={stackItem}
                            className="font-portfolio-sans text-[12px] font-bold text-black"
                          >
                            #
                            {stackItem}
                          </span>
                        ))
                      )
                    : null}
                </div>
              </div>

              <div className="relative min-h-[190px] bg-[#fbfaf8] md:min-h-full">
                {item.image
                  ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        quality={90}
                        className="object-cover"
                      />
                    )
                  : (
                      <div className="flex h-full min-h-[190px] items-center justify-center bg-[#f6f2ed]">
                        <div className="h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(185,227,225,0.9)_0%,rgba(185,227,225,0.35)_45%,transparent_70%)]" />
                      </div>
                    )}
              </div>
            </article>
          </Link>
        ))}
      </div>

      {filteredItems.length === 0
        ? (
            <div className="rounded-[12px] bg-white/70 p-10 text-center">
              <p className="font-portfolio-sans text-sm text-neutral-500">
                {locale === 'zh'
                  ? '当前分类暂无内容。'
                  : 'No work items in this category yet.'}
              </p>
            </div>
          )
        : null}
    </section>
  )
}
