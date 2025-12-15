import { z } from 'zod';
import { RoleSchema } from './roles';

// --- Zod Schema ---
export const ProjectSchema = z.object({
    id: z.string(),
    title: z.string(),
    shortDescription: z.string(),
    roleId: RoleSchema.shape.id, // Links to a role defined in roles.ts
    techStack: z.array(z.string()),
    expPoints: z.number().int().positive().default(100), // Gamification
    demoUrl: z.string().optional(),
    repoUrl: z.string().optional(),
});

// --- TypeScript Type ---
export type Project = z.infer<typeof ProjectSchema>;

// --- Static Data Source (Simulated DB) ---
export const PROJECTS: Project[] = [
    // SDE Projects
    {
        id: "proj-1",
        title: "Realtime Chat Platform",
        shortDescription: "A high-throughput chat service using WebSockets and Next.js Server Actions.",
        roleId: "SDE",
        techStack: ["Next.js", "TypeScript", "Redis", "Tailwind CSS"],
        expPoints: 450,
        repoUrl: "https://github.com/my/chat-platform",
    },
    // PM Projects
    {
        id: "proj-2",
        title: "Q4 Roadmap Delivery",
        shortDescription: "Managed a 12-person team to launch a critical product feature two weeks ahead of schedule.",
        roleId: "PM",
        techStack: ["Scrum", "JIRA", "Confluence"],
        expPoints: 320,
        demoUrl: "/project/roadmap-delivery",
    },
    // DESIGN Projects
    {
        id: "proj-3",
        title: "Brutalist Design System",
        shortDescription: "Created a component library adhering to WCAG 2.2 contrast and accessibility standards.",
        roleId: "DESIGN",
        techStack: ["Figma", "Design Tokens", "Accessibility"],
        expPoints: 280,
        demoUrl: "/project/design-system-preview",
    },
    // ART Projects
    {
        id: "proj-4",
        title: "Lo-Fi Video Montage",
        shortDescription: "A short, pixel-art style animation and video edit showcasing the lo-fi aesthetic.",
        roleId: "ART",
        techStack: ["Aseprite", "Premiere Pro", "After Effects"],
        expPoints: 150,
    },
    // More SDE
    {
        id: "proj-5",
        title: "Serverless Auth Service",
        shortDescription: "Microservice for managing user sessions and tokens with an edge-caching layer.",
        roleId: "SDE",
        techStack: ["AWS Lambda", "Go", "Cloudflare Workers"],
        expPoints: 500,
    },
];

/**
 * Server Component Data Fetching Simulation
 * @param roleId The role to filter by
 */
export async function getProjects(roleId?: Project['roleId']): Promise<Project[]> {
    // Simulate a network delay for effect (optional)
    await new Promise(resolve => setTimeout(resolve, 50));

    const projects = PROJECTS;

    if (roleId) {
        return projects.filter(p => p.roleId === roleId);
    }

    return projects;
}