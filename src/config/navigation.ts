import type { NavItem } from '@/types/nav'

export const navigation: NavItem[] = [
  {
    key: 'bio',
    label: { en: 'bio', zh: '简历' },
    href: '#experience',
    type: 'anchor',
  },
  {
    key: 'work',
    label: { en: 'work', zh: '作品' },
    href: '/work',
    type: 'route',
  },
  // {
  //   key: 'lab',
  //   label: { en: 'lab', zh: '实验' },
  //   href: '/lab',
  //   type: 'route',
  // },
]
