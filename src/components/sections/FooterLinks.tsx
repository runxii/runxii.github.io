import { SITE } from "@/config/site";

export function FooterLinks() {
    const links = [
        { label: "Email", href: SITE.links.email },
        { label: "GitHub", href: SITE.links.github },
        { label: "LinkedIn", href: SITE.links.linkedin },
    ];

    return (
        <div className="container-brutal">
            <div className="flex items-center justify-center gap-10 text-xs font-medium uppercase tracking-[0.18em] opacity-75">
                {links.map((l) => (
                    <a key={l.label} href={l.href} className="opacity-60 hover:opacity-100 transition-opacity duration-200 ease-in-out">
                        {l.label}
                    </a>
                ))}
            </div>
        </div>
    );
}
