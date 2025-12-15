import { z } from 'zod';

// --- Zod Schema ---
export const RoleSchema = z.object({
    id: z.enum(["SDE", "PM", "DESIGN", "ART"]),
    title: z.string(),
    color: z.enum(["retro-blue", "retro-yellow", "retro-green"]),
    description: z.string(),
});

// --- TypeScript Type ---
export type Role = z.infer<typeof RoleSchema>;

// --- Data ---
export const ROLES: Role[] = [
    {
        id: "SDE",
        title: "SOFTWARE DEV ENGINEER",
        color: "retro-blue",
        description: "Developing scalable full-stack applications and high-speed APIs. Focus: Next.js, TypeScript, Systems Architecture.",
    },
    {
        id: "PM",
        title: "PROJECT MANAGER",
        color: "retro-yellow",
        description: "Leading agile development teams, scoping requirements, and ensuring timely delivery and stakeholder alignment. Focus: Scrum, JIRA, Roadmapping.",
    },
    {
        id: "DESIGN",
        title: "UX/UI DESIGNER",
        color: "retro-green",
        description: "Creating brutalist, pixel-perfect, and WCAG-compliant user interfaces and engaging design systems. Focus: Figma, Accessibility, Branding.",
    },
    {
        id: "ART",
        title: "CREATIVE ARTIST",
        color: "retro-blue", // Reusing a color
        description: "Exploring graphic design, video editing, and lo-fi digital art to support marketing and personal projects. Focus: Pixel Art, Premiere Pro, Blender.",
    },
];