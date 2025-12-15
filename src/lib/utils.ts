import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ROLES, Role, RoleSchema } from '@/data/roles';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Finds the role details by its ID.
 * @param id The Role ID (e.g., 'SDE')
 * @returns The Role object or undefined.
 */
export function getRoleById(id: string): Role | undefined {
    // Safe lookup with Zod type enforcement
    const result = RoleSchema.shape.id.safeParse(id);
    if (!result.success) return undefined;

    return ROLES.find(role => role.id === result.data);
}