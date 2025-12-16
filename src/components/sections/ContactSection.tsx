import { SITE } from "@/config/site";

export function ContactSection() {
    return (
        <section id="contact" className="relative">
            <div className="container-brutal py-[var(--section-pad-y)]">
                <p className="section-label">Contact</p>
                <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] md:text-6xl">
                    Let’s talk
                </h2>

                <div className="mt-10 flex flex-col gap-4 text-sm">
                    <a className="opacity-75 hover:opacity-100" href={SITE.links.email}>Email →</a>
                    <a className="opacity-75 hover:opacity-100" href={SITE.links.github}>GitHub →</a>
                    <a className="opacity-75 hover:opacity-100" href={SITE.links.linkedin}>LinkedIn →</a>
                </div>
            </div>
        </section>
    );
}
