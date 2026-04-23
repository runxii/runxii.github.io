import type { Locale } from "@/types/i18n";

export type BlogConfig = {
  enabled: boolean;
  title: Record<Locale, string>;
  placeholder: Record<Locale, string>;
};