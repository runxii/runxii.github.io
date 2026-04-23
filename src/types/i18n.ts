export const locales = ["en", "zh"] as const;

export type Locale = (typeof locales)[number];

export type Localized<T> = Record<Locale, T>;