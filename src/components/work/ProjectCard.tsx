import type { Project } from "@/types/project";

export function ProjectCard({ project }: { project: Project }) {
    return (
        <article className="group relative overflow-hidden rounded-3xl border border-white/15 bg-black/40 backdrop-blur-xl">
            {/* Preview Image (hover: unblur + remove frosted overlay) */}
            {project.previewImage && (
                <div className="relative h-56 w-full overflow-hidden">
                    <img
                        src={project.previewImage}
                        alt={project.title}
                        className="h-full w-full object-cover transition-[filter,transform] duration-700 ease-out"
                    />

                    {/* Frosted overlay (fade out on hover) */}
                    <div
                        className="absolute inset-0 bg-black/35 backdrop-blur-xl hover:blur-0 transition-opacity duration-800 ease-in-out opacity-100 hover:opacity-0"
                    />

                    {/* Subtle highlight for a premium feel (optional, monochrome) */}
                    <div
                        className="pointer-events-none absolute inset-0 opacity-70 transition-opacity duration-700 ease-out group-hover:opacity-30"
                        style={{
                            background:
                                "radial-gradient(600px 220px at 30% 20%, rgba(255,255,255,0.12), transparent 60%)",
                        }}
                    />
                </div>
            )}

            {/* Content */}
            <div className="p-7">
                <div className="flex items-start justify-between gap-6">
                    <h3 className="text-2xl font-serif tracking-tight">{project.title}</h3>
                    <span className="text-xs uppercase tracking-[0.18em] opacity-60">
            {project.year}
          </span>
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
