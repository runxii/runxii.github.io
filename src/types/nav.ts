import type { Locale } from "@/types/i18n";

export type NavItem = {
  key: string;
  label: Record<Locale, string>;
  href: string;
  type: "anchor" | "route";
};