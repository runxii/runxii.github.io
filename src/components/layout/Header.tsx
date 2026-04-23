import Link from "next/link";
import type { Locale } from "@/types/i18n";
import { getAlternateLocale, getLocalePrefix, localizePath } from "@/lib/i18n";

type HeaderProps = {
  locale: Locale;
  navItems: Array<{
    key: string;
    label: string;
    href: string;
    type: "anchor" | "route";
  }>;
};

export default function Header({ locale, navItems }: HeaderProps) {
  const altLocale = getAlternateLocale(locale);
  const altHref = getLocalePrefix(altLocale) || "/";

  return (
    <header className="sticky top-0 z-30">
      <div className="mx-auto mt-3 flex max-w-[900px] items-center justify-center rounded-t-[3px] border border-neutral-200 bg-white/85 px-4 py-3 shadow-[0_10px_28px_rgba(0,0,0,0.08)] backdrop-blur">
        <nav className="font-portfolio-sans flex items-center gap-5 text-[12px] tracking-[0.06em] text-neutral-900 md:gap-9">
          {navItems.map((item) => {
            const href =
              item.type === "route" ? localizePath(locale, item.href) : item.href;

            return (
              <Link
                key={item.key}
                href={href}
                className="transition hover:opacity-70"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href={altHref}
          className="font-portfolio-sans absolute right-3 rounded-full border border-neutral-300 bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-700 transition hover:bg-neutral-100"
        >
          {locale === "en" ? "中文" : "EN"}
        </Link>
      </div>
    </header>
  );
}