import type { NavItem } from '@/types/nav'

export const navigation: NavItem[] = [
  {
    key: 'homepage',
    label: { en: 'homepage', zh: '首页' },
    href: '/',
    type: 'anchor',
  },
  {
    key: 'experience',
    label: { en: 'experience', zh: '经历' },
    href: '#experience',
    type: 'anchor',
  },
  {
    key: 'work',
    label: { en: 'work', zh: '工作' },
    href: '/work',
    type: 'route',
  },
  {
    key: 'about',
    label: { en: 'about me', zh: '关于我' },
    href: '#about',
    type: 'anchor',
  },
  {
    key: 'contact',
    label: { en: 'contact', zh: '联络' },
    href: '#contact',
    type: 'anchor',
  },
]
