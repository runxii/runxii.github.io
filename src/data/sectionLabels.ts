import type { Locale } from '@/types/i18n'

export const sectionLabels: Record<
    'projects' | 'labs' | 'experience' | 'about',
    Record<Locale, string>
> = {
  projects: {
    en: 'Projects',
    zh: '项目',
  },
  labs: {
    en: 'Labs',
    zh: '实验',
  },
  experience: {
    en: 'Experience',
    zh: '经历',
  },
  about: {
    en: 'About Me',
    zh: '关于我',
  },
}
