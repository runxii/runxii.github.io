import type { RoleKey } from "@/types/role";

export const ROLE_ORDER: RoleKey[] = ["sde", "security", "pm", "design"];

export const ROLES: Record<RoleKey, { label: string; watermark: string }> = {
    sde: { label: "Software Engineer", watermark: "y" },
    security: { label: "Security Engineer", watermark: "s" },
    pm: { label: "Product / PM", watermark: "p" },
    design: { label: "Design / Art", watermark: "d" },
} as const;
