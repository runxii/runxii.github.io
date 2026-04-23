import Link from "next/link";
import type { SocialLink } from "@/types/social";

type FooterProps = {
  links: SocialLink[];
};

function SocialMark({ platform }: { platform: SocialLink["platform"] }) {
  if (platform === "github") {
    return <span className="text-[20px]" aria-hidden="true">◔</span>;
  }

  if (platform === "email") {
    return <span className="text-[18px]" aria-hidden="true">✉</span>;
  }

  return <span className="text-[18px]" aria-hidden="true">in</span>;
}

export default function Footer({ links }: FooterProps) {
  return (
    <footer id="contact" className="pb-20 pt-8">
      <div className="mx-auto flex max-w-[900px] items-center justify-center gap-5 px-5">
        {links.map((link) => (
          <Link
            key={`${link.platform}-${link.href}`}
            href={link.href}
            target={link.platform === "email" ? undefined : "_blank"}
            rel={link.platform === "email" ? undefined : "noreferrer"}
            aria-label={link.label}
            className="font-portfolio-sans inline-flex h-9 w-9 items-center justify-center rounded-full text-neutral-900 transition hover:-translate-y-0.5 hover:opacity-75"
          >
            <SocialMark platform={link.platform} />
          </Link>
        ))}
      </div>
    </footer>
  );
}