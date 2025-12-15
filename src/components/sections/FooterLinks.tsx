import { SITE } from "@/config/site";

export function FooterLinks() {
    const links = [
        { label: "Email", href: SITE.links.email },
        { label: "GitHub", href: SITE.links.github },
        { label: "LinkedIn", href: SITE.links.linkedin },
    ];

    return (
        <div className="absolute bottom-6 left-0 right-0 z-20 px-6">
            <div className="flex items-center justify-center gap-10 text-xs font-medium uppercase tracking-[0.18em] opacity-75">
                {links.map((l) => (
                    <a key={l.label} href={l.href} className="hover:opacity-100 transition-opacity">
                        {l.label}
                    </a>
                ))}
            </div>
        </div>
    );
}
