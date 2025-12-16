import type { RoleKey } from "@/types/role";

export type ProjectLink = { label: string; href: string };

export type Project = {
    slug: string;
    title: string;
    year: string;
    summary: string;
    previewImage?: string;
    tags: string[];
    roles: RoleKey[];
    featuredFor?: RoleKey[];
    links?: ProjectLink[];
};
