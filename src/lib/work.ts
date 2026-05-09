import type { Locale } from '@/types/i18n'
import type {
  Project,
  ProjectFrontmatter,
  WorkArticle,
  WorkType,
} from '@/types/project'
import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

// eslint-disable-next-line node/prefer-global/process
const CONTENT_DIR = path.join(process.cwd(), 'src', 'content')

function getLocaleDir(locale: Locale) {
  return path.join(CONTENT_DIR, locale)
}

function getSlugFromFilename(filename: string) {
  return filename.replace(/\.md$/, '')
}

function normalizeType(type?: string): WorkType {
  if (type === 'project' || type === 'blog' || type === 'lab') {
    return type
  }

  return 'project'
}

function normalizeProject(
  locale: Locale,
  fileSlug: string,
  frontmatter: ProjectFrontmatter,
): Project {
  return {
    ...frontmatter,
    slug: frontmatter.slug ?? fileSlug,
    locale,
    type: normalizeType(frontmatter.type),
    tag: frontmatter.tag,
    stack: frontmatter.stack ?? [],
    view: frontmatter.view ?? (locale === 'zh' ? '案例详情' : 'case study'),
  }
}

export function getWorkSlugs(locale: Locale): string[] {
  const dir = getLocaleDir(locale)

  if (!fs.existsSync(dir)) {
    return []
  }

  return fs
    .readdirSync(dir)
    .filter(file => file.endsWith('.md'))
    .map(getSlugFromFilename)
}

export function getAllWork(locale: Locale): Project[] {
  const dir = getLocaleDir(locale)

  return getWorkSlugs(locale)
    .map((fileSlug) => {
      const filePath = path.join(dir, `${fileSlug}.md`)
      const file = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(file)

      return normalizeProject(locale, fileSlug, data as ProjectFrontmatter)
    })
    .sort((a, b) => {
      if (!a.date || !b.date) {
        return 0
      }

      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
}

export function getFeaturedWork(locale: Locale): Project[] {
  return getAllWork(locale).filter(item => item.featured)
}

export function getWorkBySlug(
  locale: Locale,
  slug: string,
): WorkArticle | null {
  const dir = getLocaleDir(locale)
  const filePath = path.join(dir, `${slug}.md`)

  if (!fs.existsSync(filePath)) {
    console.warn('[work detail] file does not exist:', filePath)
    return null
  }

  const file = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(file)

  return {
    ...normalizeProject(locale, slug, data as ProjectFrontmatter),
    content,
  }
}
