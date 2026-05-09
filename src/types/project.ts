import type { Locale } from '@/types/i18n'

export type WorkType = 'project' | 'blog' | 'lab'

export interface ProjectLink {
  label: string
  href: string
}

export interface ProjectFrontmatter {
  slug?: string
  title: string
  subtitle?: string
  description: string
  featured?: boolean
  type?: WorkType
  tag?: string
  stack?: string[]
  image?: string
  link?: ProjectLink
  view?: string
  date?: string
}

export interface Project extends ProjectFrontmatter {
  slug: string
  locale: Locale
  type: WorkType
  stack: string[]
  view: string
}

export interface WorkArticle extends Project {
  content: string
}
