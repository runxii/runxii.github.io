import type { Locale } from "@/types/i18n";

export type ProjectLink = {
  label: Record<Locale, string>;
  href: string;
};

export type Project = {
  slug: string;
  title: Record<Locale, string>;
  subtitle?: Record<Locale, string>;
  description: Record<Locale, string>;
  stack: string[];
  image: string;
  links: ProjectLink[];
  featured?: boolean;
};