import type { Project } from "@/types/project";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid({ projects }: { projects: Project[] }) {
    return (
        <div className="grid gap-5 md:grid-cols-2">
            {projects.map((p) => (
                <ProjectCard key={p.slug} project={p} />
            ))}
        </div>
    );
}
