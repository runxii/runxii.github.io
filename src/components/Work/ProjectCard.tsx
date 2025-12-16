import type { Project } from "@/types/project";

export function ProjectCard({ project }: { project: Project }) {
    return (
        <article className="rounded-2xl border border-white/15 bg-black/40 p-6 backdrop-blur-sm">
            <div className="flex items-start justify-between gap-6">
                <div>
                    <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
                    <p className="mt-2 text-sm opacity-75">{project.summary}</p>
                </div>
                <div className="text-xs uppercase tracking-[0.18em] opacity-60">{project.year}</div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                    <span
                        key={t}
                        className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.14em] opacity-80"
                    >
            {t}
          </span>
                ))}
            </div>

            {project.links?.length ? (
                <div className="mt-5 flex flex-wrap gap-4 text-xs font-medium uppercase tracking-[0.18em]">
                    {project.links.map((l) => (
                        <a key={l.href} href={l.href} className="opacity-70 hover:opacity-100">
                            {l.label} ↗
                        </a>
                    ))}
                    <a href={`/work/${project.slug}`} className="opacity-70 hover:opacity-100">
                        Case study →
                    </a>
                </div>
            ) : (
                <div className="mt-5 text-xs font-medium uppercase tracking-[0.18em] opacity-70">
                    <a href={`/work/${project.slug}`} className="hover:opacity-100">
                        Case study →
                    </a>
                </div>
            )}
        </article>
    );
}
