import type { Locale } from "@/types/i18n";

export type Profile = {
  name: string;
  role: Record<Locale, string>;
  heroIntro?: Record<Locale, string>;
  aboutTitle: Record<Locale, string>;
  aboutText: Record<Locale, string>;
};