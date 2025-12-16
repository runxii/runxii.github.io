import type { Project } from "@/types/project";

/**
 * Replace placeholders with your real projects.
 * Keep roles[] accurate — it drives filtering.
 */
export const PROJECTS: Project[] = [
    {
        slug: "fred-gpt",
        title: "FRED GPT",
        year: "2025",
        summary: "GenAI platform for economic data exploration with RAG + guardrails.",
        tags: ["AWS", "RAG", "Agents"],
        roles: ["sde", "pm"],
        featuredFor: ["sde", "pm"],
        links: [
            { label: "GitHub", href: "https://github.com/" },
        ],
    },
    {
        slug: "cloud-security",
        title: "Cloud Security & Risk Modelling",
        year: "2025",
        summary: "Threat modelling and security posture improvements using NIST-style frameworks.",
        tags: ["Cloud", "Risk", "Security"],
        roles: ["security", "pm"],
        featuredFor: ["security"],
    },
    {
        slug: "mentorbridge",
        title: "MentorBridge",
        year: "2025",
        summary: "AI-assisted teacher–AI co-mentoring system for design-thinking education.",
        tags: ["HCI", "LLM", "Education"],
        roles: ["pm", "design", "sde"],
        featuredFor: ["pm", "design"],
    },
];
