import { LABS } from "@/data/labs";

export function LabSection() {
    return (
        <section id="lab" className="relative">
            <div className="container-brutal py-[var(--section-pad-y)]">
                <p className="section-label">Lab</p>
                <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] md:text-6xl">
                    Experiments
                </h2>

                <div className="mt-10 grid gap-6 lg:grid-cols-2">
                    {LABS.map((x) => (
                        <a
                            key={x.title}
                            href={x.href}
                            className="rounded-3xl border border-white/12 bg-black/35 p-7 backdrop-blur-md hover:bg-white/5 transition"
                        >
                            <div className="text-xl font-semibold">{x.title}</div>
                            <div className="mt-2 text-sm opacity-75">{x.note}</div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
