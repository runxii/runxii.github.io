import type { Locale } from '@/types/i18n'
import type { NavItem } from '@/types/nav'
import type { Project } from '@/types/project'
import { navigation } from '@/config/navigation'
import { getAllWork, getFeaturedWork } from '@/lib/work'

export function getLocalizedNav(locale: Locale): Array<{
  key: string
  label: string
  href: string
  type: NavItem['type']
}> {
  return navigation.map(item => ({
    key: item.key,
    label: item.label[locale],
    href: item.href,
    type: item.type,
  }))
}

export function getFeaturedProjects(locale: Locale): Project[] {
  return getFeaturedWork(locale).filter(item => item.type === 'project')
}

export function getHeroProject(locale: Locale): Project | null {
  return getFeaturedProjects(locale)[0] ?? null
}

export function getProjects(locale: Locale): Project[] {
  return getAllWork(locale).filter(item => item.type === 'project')
}

export function getBlogPosts(locale: Locale): Project[] {
  return getAllWork(locale).filter(item => item.type === 'blog')
}

export function getLabProjects(locale: Locale): Project[] {
  return getAllWork(locale).filter(item => item.type === 'lab')
}
