import type { RoleKey } from '@/types/role'

export interface ProjectLink { label: string, href: string }

export interface Project {
  slug: string
  title: string
  year: string
  summary: string
  previewImage?: string
  tags: string[]
  roles: RoleKey[]
  featuredFor?: RoleKey[]
  links?: ProjectLink[]
}
