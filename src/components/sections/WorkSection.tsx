"use client";

import { PROJECTS } from "@/data/projects";
import { getVisibleProjects } from "@/lib/projectFilter";
import { useRoleStore } from "@/store/roleStore";
import { ROLES } from "@/data/roles";
import { WorkFilters } from "@/components/work/WorkFilters";
import { ProjectGrid } from "@/components/work/ProjectGrid";

export function WorkSection() {
    const role = useRoleStore((s) => s.role);
    const visible = getVisibleProjects(PROJECTS, role);

    return (
        <section id="work" className="relative">
            <div className="container-brutal py-[var(--section-pad-y)]">
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="section-label">Work</p>
                        <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] md:text-6xl">
                            Selected projects
                        </h2>
                        {/*<p className="mt-3 text-sm opacity-75">
                            Filtered by identity: <span className="opacity-95">{ROLES[role].label}</span>
                        </p>*/}
                    </div>

                    <WorkFilters />
                </div>

                <div className="mt-10">
                    <ProjectGrid projects={visible} />
                </div>

                <div className="mt-10">
                    <a
                        href="/work"
                        className="text-xs font-medium uppercase tracking-[0.18em] opacity-70 hover:opacity-100"
                    >
                        View all on /work →
                    </a>
                </div>
            </div>
        </section>
    );
}
