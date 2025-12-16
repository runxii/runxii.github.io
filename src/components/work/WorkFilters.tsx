"use client";

import { ROLE_ORDER, ROLES } from "@/data/roles";
import { useRoleStore } from "@/store/roleStore";
import type { RoleKey } from "@/types/role";
import { cn } from "@/lib/cn";

export function WorkFilters() {
    const role = useRoleStore((s) => s.role);
    const setRole = useRoleStore((s) => s.setRole);

    return (
        <div className="flex flex-wrap items-center gap-3">
            {ROLE_ORDER.map((k) => {
                const active = k === role;

                return (
                    <button
                        key={k}
                        type="button"
                        onClick={() => setRole(k as RoleKey)}
                        className={cn(
                            "work-pill tracking-[-0.04em] text-sm tracking-wide flex-1 min-w-[180px]",
                            active && "work-pill--active"
                        )}
                    >
                        {ROLES[k].label}
                    </button>
                );
            })}
        </div>
    );
}
