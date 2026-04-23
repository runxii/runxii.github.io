import Link from "next/link";
import type { Locale } from "@/types/i18n";
import type { Project } from "@/types/project";
import TechBadge from "@/components/ui/TechBadge";
import BlurGlow from "@/components/decorative/BlurGlow";

type FeaturedProjectCardProps = {
  project: Project;
  locale: Locale;
  allProjectsCount?: number;
  activeIndex?: number;
};

export default function FeaturedProjectCard({
  project,
  locale,
  allProjectsCount = 4,
  activeIndex = 0,
}: FeaturedProjectCardProps) {
  return (
    <div className="relative">
      <BlurGlow className="-left-[110px] top-[10px] h-[260px] w-[260px] opacity-85" />

      <div className="relative grid items-start gap-8 md:grid-cols-[140px_1fr_220px]">
        <div className="relative flex items-center justify-center pt-6">
          <div className="relative flex h-[92px] w-[92px] items-center justify-center rounded-full border border-cyan-100 bg-cyan-200/95 text-center text-[16px] text-neutral-900 shadow-[0_10px_28px_rgba(0,0,0,0.08)]">
            AI Agent
            <div className="absolute inset-[18px] rounded-full border border-white/40" />
          </div>
        </div>

        <div className="pt-1">
          <h3 className="font-portfolio-serif text-[35px] leading-none text-neutral-950">
            {project.title[locale]}
          </h3>

          {project.subtitle ? (
            <p className="font-portfolio-sans mt-2 text-[12px] italic text-neutral-500">
              {project.subtitle[locale]}
            </p>
          ) : null}

          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <TechBadge key={item} label={item} />
            ))}
          </div>

          <p className="font-portfolio-sans mt-5 max-w-[480px] text-[12px] leading-6 text-neutral-700">
            {project.description[locale]}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <Link
                key={`${project.slug}-${link.href}`}
                href={link.href}
                className="font-portfolio-sans rounded-full bg-[linear-gradient(to_bottom,rgba(103,16,16,1),rgba(133,23,23,1))] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-white shadow-[0_4px_10px_rgba(80,0,0,0.25)] transition hover:opacity-90"
              >
                {link.label[locale]}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-2 rounded-[3px] border border-neutral-800 bg-[linear-gradient(to_bottom,rgba(20,20,20,0.98),rgba(8,8,8,1))] p-3 shadow-[0_14px_30px_rgba(0,0,0,0.22)]">
          <div className="font-portfolio-mono rounded-[2px] border border-neutral-700 bg-neutral-950 px-3 py-2 text-[9px] leading-4 text-neutral-100">
            <div className="mb-2 flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-red-400" />
              <span className="h-2 w-2 rounded-full bg-yellow-300" />
              <span className="h-2 w-2 rounded-full bg-green-400" />
            </div>
            <p>λ next dev</p>
            <p>ready - started server</p>
            <p>route / loaded successfully</p>
            <p>portfolio build active</p>
          </div>

          <div className="font-portfolio-mono mt-3 flex items-center justify-between text-[10px] uppercase tracking-[0.08em] text-neutral-400">
            <span>project reel</span>
            <span>{String(activeIndex + 1).padStart(2, "0")}</span>
          </div>
        </div>
      </div>

      <div className="mt-7 flex items-center justify-center gap-3">
        {Array.from({ length: allProjectsCount }).map((_, index) => {
          const active = index === activeIndex;

          return (
            <button
              key={index}
              type="button"
              aria-label={`Project ${index + 1}`}
              className={[
                "group relative h-5 w-5 rounded-full border transition",
                active
                  ? "border-cyan-100 bg-cyan-300 shadow-[0_0_0_4px_rgba(186,230,253,0.45)]"
                  : "border-cyan-200 bg-cyan-200 hover:bg-cyan-300",
              ].join(" ")}
            >
              <span className="absolute inset-[5px] rounded-full border border-white/45" />
            </button>
          );
        })}
      </div>
    </div>
  );
}