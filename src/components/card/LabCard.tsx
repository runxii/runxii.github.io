import type { Locale } from '@/types/i18n'
import type { Project } from '@/types/project'
import Image from 'next/image'
import Link from 'next/link'
import TechBadge from '@/components/ui/TechBadge'
import { localizePath } from '@/lib/i18n'

interface LabCardProps {
  project: Project
  locale: Locale
}

export default function LabCard({ project, locale }: LabCardProps) {
  return (
    <article
      className="flex flex-col h-[480px] rounded-[20px] bg-white/78 mx-4 px-5 pb-5 pt-4 shadow-[0_10px_30px_rgba(0,0,0,0.07)] ring-1 ring-neutral-200/80 backdrop-blur"
    >
      {/* Header Section */}
      <div className="flex-none">
        <h3 className="font-portfolio-mono text-[28px] font-semibold leading-none text-neutral-950">
          {project.title[locale]}
        </h3>

        {project.subtitle
          ? (
              <p className="font-portfolio-sans mt-2 min-h-[28px] text-[12px] text-neutral-500">
                {project.subtitle[locale]}
              </p>
            )
          : null}
      </div>

      {/* Main Content Section */}
      <div
        className="mt-5 flex h-[240px] items-center justify-center rounded-[8px] bg-[linear-gradient(to_bottom,rgba(255,255,255,0.7),rgba(250,245,245,0.96))]"
      >

        {project.image
          ? (
              <Image
                src={project.image}
                width={250}
                height={250}
                quality={80}
                alt={project.slug}
              />
            )
          : (
              <div
                className="relative h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(239,68,68,0.9)_0%,rgba(239,68,68,0.5)_28%,rgba(255,255,255,0)_70%)]"
              />
            )}

      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map(item => (
          <TechBadge key={item} label={item} />
        ))}
      </div>

      {/* Footer Section */}
      <div className="mt-auto pt-5 flex justify-end items-center gap-4 text-[14px]">
        {project.link
          ? (
              <Link
                href={project.link.href}
                target="_blank"
                rel="noreferrer"
                className="font-portfolio-sans font-semibold uppercase tracking-[0.06em] text-neutral-800 underline-offset-4 hover:underline"
              >
                {project.link.label[locale]}
              </Link>
            )
          : null}

        {project.slug
          ? (
              <Link
                href={localizePath(locale, `/work/${project.slug}`)}
                className="font-portfolio-sans font-semibold uppercase tracking-[0.06em] text-neutral-800 underline-offset-4 hover:underline"
              >
                view
              </Link>
            )
          : null}
      </div>
    </article>
  )
}
