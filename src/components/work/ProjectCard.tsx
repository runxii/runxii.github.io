import type { Project } from "@/types/project";

export function ProjectCard({ project }: { project: Project }) {
    return (
        <article className="rounded-3xl border border-white/12 bg-black/35 p-7 backdrop-blur-md">
            <div className="flex items-start justify-between gap-6">
                <div>
                    <h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>
                    <p className="mt-3 text-sm opacity-75">{project.summary}</p>
                </div>
                <div className="text-xs uppercase tracking-[0.18em] opacity-60">{project.year}</div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                    <span
                        key={t}
                        className="rounded-full border border-white/12 px-3 py-1 text-[11px] uppercase tracking-[0.18em] opacity-80"
                    >
            {t}
          </span>
                ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-5 text-xs font-medium uppercase tracking-[0.18em]">
                <a href={`/work/${project.slug}`} className="opacity-70 hover:opacity-100">
                    Case study →
                </a>
                {project.links?.map((l) => (
                    <a key={l.href} href={l.href} className="opacity-70 hover:opacity-100">
                        {l.label} ↗
                    </a>
                ))}
            </div>
        </article>
    );
}
