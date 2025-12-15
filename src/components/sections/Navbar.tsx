import { NAV } from "@/config/site";

export function Navbar() {
    return (
        <header className="absolute left-0 right-0 top-0 z-20 px-6 py-5">
            <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium uppercase tracking-[0.18em] opacity-80">
                {NAV.map((item) => (
                    <a
                        key={item.key}
                        href={item.href}
                        className="hover:opacity-100 transition-opacity"
                    >
                        {item.label}
                    </a>
                ))}
            </nav>
        </header>
    );
}
