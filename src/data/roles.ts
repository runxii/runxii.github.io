import type { RoleKey } from "@/types/role";

export const ROLE_ORDER: RoleKey[] = ["sde", "security", "pm", "design"];

export const ROLES: Record<RoleKey, { label: string; watermark: string }> = {
    sde: { label: "Software Engineer", watermark: "y" },
    security: { label: "Security Engineer", watermark: "s" },
    pm: { label: "Product Manager", watermark: "p" },
    design: { label: "Designer", watermark: "d" },
} as const;
