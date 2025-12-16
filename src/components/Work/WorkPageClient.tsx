"use client";

import { PROJECTS } from "@/data/projects";
import { getVisibleProjects } from "@/lib/projectFilter";
import { ROLES } from "@/data/roles";
import { useRoleStore } from "@/store/roleStore";
import { WorkFilters } from "./WorkFilters";
import { ProjectGrid } from "./ProjectGrid";

export function WorkPageClient() {
    const role = useRoleStore((s) => s.role);
    const visible = getVisibleProjects(PROJECTS, role);

    return (
        <section className="relative px-6 pt-24 pb-44">
            <div className="mx-auto max-w-6xl">
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-xs font-medium uppercase tracking-[0.18em] opacity-70">
                            Work
                        </p>
                        <h1 className="mt-4 text-5xl font-extrabold tracking-[-0.04em] md:text-7xl">
                            Selected projects
                        </h1>
                        <p className="mt-3 text-sm opacity-75">
                            Filtered by identity: <span className="opacity-90">{ROLES[role].label}</span>
                        </p>
                    </div>

                    <WorkFilters />
                </div>

                <div className="mt-10">
                    <ProjectGrid projects={visible} />
                </div>

                {visible.length === 0 && (
                    <p className="mt-10 text-sm opacity-70">
                        No projects tagged for this identity yet. Add roles[] in{" "}
                        <code className="opacity-90">src/data/projects.ts</code>.
                    </p>
                )}
            </div>
        </section>
    );
}
