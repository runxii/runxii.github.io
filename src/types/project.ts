import type { Locale } from '@/types/i18n'

export interface ProjectLink {
  label: Record<Locale, string>
  href: string
}

export interface Project {
  slug: string
  title: Record<Locale, string>
  subtitle?: Record<Locale, string>
  description: Record<Locale, string>
  stack: string[]
  image: string
  link: ProjectLink
  featured?: boolean
}
