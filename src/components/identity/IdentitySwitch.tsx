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
        <div className="w-full m-auto">
            <div className="mt-10 flex justify-end">
                <div className="m-10 flex items-baseline gap-6">
                    {/*<button
                        type="button"
                        onClick={prevRole}
                        aria-label="Previous role"
                        className="select-none rounded-full border border-foreground/30 px-6 py-4 text-[6vw] md:text-[56px] uppercase tracking-[0.10em] opacity-80 hover:opacity-100 font-pixel leading-none"
                    >
                        ←
                    </button>*/}

                    {/* SLOT TEXT: same scale as H1 */}
                    <div
                        className="font-mono font-bold slot-tape tracking-[-0.04em] leading-[0.84] text-[6vw] md:text-[3em] inline-flex items-baseline">
                        <div className="min-w-[18ch] md:min-w-[22ch]">
                            <SlotTape items={labels} activeIndex={activeIndex} itemPx={135}/>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={nextRole}
                        aria-label="Next role"
                        className="select-none rounded-full border border-foreground/30 px-6 py-4 text-[6vw] md:text-[56px] uppercase tracking-[0.10em] opacity-80 hover:opacity-100 font-pixel leading-none"
                    >
                        →
                    </button>
                </div>
            </div>
        </div>


    );
}
