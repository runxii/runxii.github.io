"use client";

import { ROLE_ORDER, ROLES } from "@/data/roles";
import { useRoleStore } from "@/store/roleStore";
import type { RoleKey } from "@/types/role";

export function WorkFilters() {
    const role = useRoleStore((s) => s.role);
    const setRole = useRoleStore((s) => s.setRole);

    return (
        <div className="flex flex-wrap items-center gap-2">
            {ROLE_ORDER.map((k) => {
                const active = k === role;
                return (
                    <button
                        key={k}
                        type="button"
                        onClick={() => setRole(k as RoleKey)}
                        className={[
                            "rounded-full border px-4 py-2 text-xs uppercase tracking-[0.18em] transition",
                            active ? "border-white/40 opacity-100" : "border-white/15 opacity-70 hover:opacity-100",
                        ].join(" ")}
                    >
                        {ROLES[k].label}
                    </button>
                );
            })}
        </div>
    );
}
