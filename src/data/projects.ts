import type { Project } from '@/types/project'

export const projects: Project[] = [
  {
    slug: 'job-radar',
    title: {
      en: 'Job Radar',
      zh: 'Job Radar',
    },
    subtitle: {
      en: 'AI Agent for job searching and matching',
      zh: '用于岗位搜索与匹配的 AI 智能体',
    },
    description: {
      en: 'A job search system using Python, PostgreSQL, and OpenAI API. It reduces manual filtering effort through structured evaluation, deduplication, and lightweight workflow design.',
      zh: '一个基于 Python、PostgreSQL 与 OpenAI API 的求职系统，通过结构化评估、去重与轻量化流程设计，降低人工筛选成本。',
    },
    stack: ['Python', 'SQL', 'LLM', 'Flask', 'Agent'],
    image: '/data/img/job-job-radar.png',
    featured: true,
    links: [
      {
        label: { en: 'GitHub', zh: 'GitHub' },
        href: 'https://github.com/runxii/job-radar',
      },
      {
        label: { en: 'Read More', zh: '了解更多' },
        href: '/work',
      },
    ],
  },
  {
    slug: 'habichew',
    title: {
      en: 'Habichew',
      zh: 'Habichew',
    },
    subtitle: {
      en: 'AI-powered Habit Formation Mobile App',
      zh: 'AI驱动的习惯养成手机应用',
    },
    description: {
      en: 'A job search system using Python, PostgreSQL, and OpenAI API. It reduces manual filtering effort through structured evaluation, deduplication, and lightweight workflow design.',
      zh: '一个基于 Python、PostgreSQL 与 OpenAI API 的求职系统，通过结构化评估、去重与轻量化流程设计，降低人工筛选成本。',
    },
    stack: ['Nodejs', 'React Native', 'Android', 'iOS', 'RESTful API'],
    image: '/data/img/habichew.png',
    featured: true,
    links: [
      {
        label: { en: 'GitHub', zh: 'GitHub' },
        href: 'https://github.com/Habichew/app',
      },
      {
        label: { en: 'Read More', zh: '了解更多' },
        href: '/work',
      },
    ],
  },
  {
    slug: 'portfolio',
    title: {
      en: 'Portfolio',
      zh: '作品集网站',
    },
    subtitle: {
      en: 'Website by Next.js and Tailwind CSS',
      zh: '基于 Next.js 与 Tailwind CSS 的个人网站',
    },
    description: {
      en: 'Compact lab entry for the portfolio grid.',
      zh: '用于作品集网格展示的精简项目卡片。',
    },
    stack: ['Next.js', 'Tailwind CSS'],
    image: '/data/img/portfolio.png',
    links: [{ label: { en: 'View', zh: '查看' }, href: '/' }],
  },
]
