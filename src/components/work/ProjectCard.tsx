import type { Project } from "@/types/project";

export function ProjectCard({ project }: { project: Project }) {
    return (
        <article className="group relative overflow-hidden rounded-3xl border border-white/15 bg-black/40 backdrop-blur-xl">
            {project.previewImage && (
                <div className="relative h-56 w-full overflow-hidden">
                    <img src={project.previewImage} alt={project.title} className="h-full w-full object-cover" />

                    {/* Frosted layer */}
                    <div className="absolute inset-0 bg-black/30 backdrop-blur-xl transition-opacity group-hover:opacity-0" />

                    {/* Hover clear spotlight (blurred everywhere except cursor circle) */}
                    <div
                        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                        style={{
                            maskImage:
                                "radial-gradient(circle 120px at var(--x,50%) var(--y,50%), transparent 0%, black 70%)",
                            WebkitMaskImage:
                                "radial-gradient(circle 120px at var(--x,50%) var(--y,50%), transparent 0%, black 70%)",
                            backdropFilter: "blur(16px)",
                        }}
                    />
                </div>
            )}

            <div
                className="p-7"
                onMouseMove={(e) => {
                    const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
                    e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
                    e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
                }}
            >
                <div className="flex items-start justify-between gap-6">
                    <h3 className="text-2xl font-serif tracking-tight">{project.title}</h3>
                    <span className="text-xs uppercase tracking-[0.18em] opacity-60">{project.year}</span>
                </div>

                <p className="mt-3 text-sm opacity-75">{project.summary}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((t) => (
                        <span
                            key={t}
                            className="rounded-full border border-white/15 px-3 py-1 text-[11px] uppercase tracking-[0.18em]"
                        >
              {t}
            </span>
                    ))}
                </div>

                <div className="mt-6 flex gap-5 text-xs uppercase tracking-[0.18em]">
                    <a href={`/work/${project.slug}`} className="opacity-70 hover:opacity-100">
                        Case study →
                    </a>
                    {project.links?.map((l) => (
                        <a key={l.href} href={l.href} className="opacity-70 hover:opacity-100">
                            {l.label} ↗
                        </a>
                    ))}
                </div>
            </div>
        </article>
    );
}
