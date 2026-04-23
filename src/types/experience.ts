import type { Locale } from "@/types/i18n";

export type ExperienceCategory = "work" | "education" | "open-source";

export type ExperienceItem = {
  id: string;
  dateLabel: string;
  title: Record<Locale, string>;
  organization: Record<Locale, string>;
  category: ExperienceCategory;
  start?: string;
  end?: string;
  side?: "left" | "right";
};