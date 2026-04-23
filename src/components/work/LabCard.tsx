import Link from "next/link";
import type { Locale } from "@/types/i18n";
import type { Project } from "@/types/project";
import TechBadge from "@/components/ui/TechBadge";

type LabCardProps = {
  project: Project;
  locale: Locale;
};

export default function LabCard({ project, locale }: LabCardProps) {
  return (
    <article className="rounded-[10px] bg-white/78 px-5 pb-5 pt-4 shadow-[0_10px_30px_rgba(0,0,0,0.07)] ring-1 ring-neutral-200/80 backdrop-blur">
      <h3 className="font-portfolio-serif text-[28px] leading-none text-neutral-950">
        {project.title[locale]}
      </h3>

      {project.subtitle ? (
        <p className="font-portfolio-sans mt-2 min-h-[28px] text-[10px] text-neutral-500">
          {project.subtitle[locale]}
        </p>
      ) : null}

      <div className="mt-5 flex h-[150px] items-center justify-center rounded-[8px] bg-[linear-gradient(to_bottom,rgba(255,255,255,0.7),rgba(250,245,245,0.96))]">
        <div className="relative h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(239,68,68,0.9)_0%,rgba(239,68,68,0.5)_28%,rgba(255,255,255,0)_70%)]" />
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <TechBadge key={item} label={item} />
        ))}
      </div>

      {project.links[0] ? (
        <div className="mt-5">
          <Link
            href={project.links[0].href}
            className="font-portfolio-sans text-[11px] font-semibold uppercase tracking-[0.06em] text-neutral-800 underline-offset-4 hover:underline"
          >
            {project.links[0].label[locale]}
          </Link>
        </div>
      ) : null}
    </article>
  );
}