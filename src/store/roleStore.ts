import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { RoleKey } from "@/types/role";
import { ROLE_ORDER } from "@/data/roles";

type RoleState = {
    role: RoleKey;
    setRole: (role: RoleKey) => void;
    nextRole: () => void;
    prevRole: () => void;
};

export const useRoleStore = create<RoleState>()(
    persist(
        (set, get) => ({
            role: "sde",
            setRole: (role) => set({ role }),
            nextRole: () => {
                const cur = get().role;
                const i = ROLE_ORDER.indexOf(cur);
                const next = ROLE_ORDER[(i + 1) % ROLE_ORDER.length];
                set({ role: next });
            },
            prevRole: () => {
                const cur = get().role;
                const i = ROLE_ORDER.indexOf(cur);
                const prev = ROLE_ORDER[(i - 1 + ROLE_ORDER.length) % ROLE_ORDER.length];
                set({ role: prev });
            },
        }),
        { name: "yang-role" }
    )
);
