import type { NavItem } from '@/types/nav'

export const navigation: NavItem[] = [
  {
    key: 'about',
    label: { en: 'about me', zh: '关于我' },
    href: '#about',
    type: 'anchor',
  },
  {
    key: 'projects',
    label: { en: 'projects', zh: '项目' },
    href: '#projects',
    type: 'anchor',
  },
  {
    key: 'experience',
    label: { en: 'experience', zh: '经历' },
    href: '#experience',
    type: 'anchor',
  },
  {
    key: 'blog',
    label: { en: 'blogs', zh: '博客' },
    href: '/blog',
    type: 'route',
  },
  {
    key: 'contact',
    label: { en: 'contact', zh: '联络' },
    href: '#contact',
    type: 'anchor',
  },
]
