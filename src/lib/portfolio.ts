import type { Locale } from '@/types/i18n'
import type { NavItem } from '@/types/nav'
import type { Project } from '@/types/project'
import { navigation } from '@/config/navigation'
import { labs } from '@/data/labs'
import { projects } from '@/data/projects'

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

export function getFeaturedProjects(allProjects: Project[]): Project[] {
  return allProjects.filter(project => project.featured)
}

export function getHeroProject(): Project | null {
  return getFeaturedProjects(projects)[0] ?? null
}

export function getLabProjects(): Project[] {
  return labs
}
