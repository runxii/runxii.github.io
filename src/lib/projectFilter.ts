import type { RoleKey } from "@/types/role";
import type { Project } from "@/types/project";

export function filterProjectsByRole(projects: Project[], role: RoleKey) {
    return projects.filter((p) => p.roles.includes(role));
}

export function sortProjectsForRole(projects: Project[], role: RoleKey) {
    return [...projects].sort((a, b) => {
        const aFeat = a.featuredFor?.includes(role) ? 1 : 0;
        const bFeat = b.featuredFor?.includes(role) ? 1 : 0;

        if (aFeat !== bFeat) return bFeat - aFeat;

        // secondary: newest first (string years OK if consistent)
        if (a.year !== b.year) return b.year.localeCompare(a.year);

        return a.title.localeCompare(b.title);
    });
}

export function getVisibleProjects(projects: Project[], role: RoleKey) {
    return sortProjectsForRole(filterProjectsByRole(projects, role), role);
}
