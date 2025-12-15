"use client";

import { useEffect, useMemo } from "react";
import { useRoleStore } from "@/store/roleStore";
import { ROLE_ORDER, ROLES } from "@/data/roles";
import { SlotTape } from "./SlotTape";

export function IdentitySwitch() {
    const role = useRoleStore((s) => s.role);
    const nextRole = useRoleStore((s) => s.nextRole);
    const prevRole = useRoleStore((s) => s.prevRole);

    const labels = useMemo(() => ROLE_ORDER.map((k) => ROLES[k].label), []);
    const activeIndex = ROLE_ORDER.indexOf(role);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") nextRole();
            if (e.key === "ArrowLeft") prevRole();
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [nextRole, prevRole]);

    return (
        <div className="mt-8 flex items-center gap-4 text-xl md:text-2xl">
            <span className="opacity-70">Identity:</span>

            <div className="flex items-center gap-3">
                <button
                    type="button"
                    onClick={prevRole}
                    aria-label="Previous role"
                    className="select-none rounded-full border border-white/20 px-3 py-1 text-sm uppercase tracking-[0.14em] opacity-80 hover:opacity-100"
                >
                    ←
                </button>

                <div className="font-semibold tracking-[-0.01em]">
                    <SlotTape items={labels} activeIndex={activeIndex} />
                </div>

                <button
                    type="button"
                    onClick={nextRole}
                    aria-label="Next role"
                    className="select-none rounded-full border border-white/20 px-3 py-1 text-sm uppercase tracking-[0.14em] opacity-80 hover:opacity-100"
                >
                    →
                </button>
            </div>

            <span className="ml-2 text-xs font-medium uppercase tracking-[0.18em] opacity-60">
        (← / →)
      </span>
        </div>
    );
}
