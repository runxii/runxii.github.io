import type { Locale } from "@/types/i18n";

export const siteConfig = {
  name: "Yang Portfolio",
  title: 'Yang=XII',
  baseUrl: "http://localhost:3000",
  defaultTitle: {
    en: "Yang | Web Developer · Software Engineer",
    zh: "Yang | 网页开发·软件工程",
  } satisfies Record<Locale, string>,
  defaultDescription: {
    en: "Personal portfolio for projects, labs, experience, and blogs.",
    zh: "个人作品集，展示项目、实验、工作经历与博客。",
  } satisfies Record<Locale, string>,
};
