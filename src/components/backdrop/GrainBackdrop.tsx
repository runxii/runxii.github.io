"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { useRoleStore } from "@/store/roleStore";
import { ROLES } from "@/data/roles";

type GrainBackdropProps = {
    className?: string;
};

export function GrainBackdrop({ className }: GrainBackdropProps) {
    const role = useRoleStore((s) => s.role);
    const watermark = ROLES[role].watermark;

    return (
        <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
            <motion.div
                className="absolute -left-[12vw] -top-[16vh] h-[44vh] w-[44vh] rounded-full blur-3xl"
                style={{
                    background:
                        "radial-gradient(circle at 30% 30%, rgba(var(--accent),0.95), rgba(var(--accent),0.0) 65%)",
                }}
                animate={{ scale: [1, 1.03, 1], opacity: [0.9, 1, 0.92] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="absolute left-[26vw] -top-[18vh] h-[52vh] w-[30vh] rounded-[999px] blur-3xl"
                style={{
                    background:
                        "radial-gradient(circle at 40% 20%, rgba(var(--accent-2),0.95), rgba(var(--accent-2),0.0) 70%)",
                }}
                animate={{ y: [0, 10, 0], opacity: [0.85, 1, 0.9] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="absolute left-[44vw] -top-[18vh] h-[52vh] w-[30vh] rounded-[999px] blur-3xl"
                style={{
                    background:
                        "radial-gradient(circle at 40% 20%, rgba(var(--accent),0.85), rgba(var(--accent),0.0) 70%)",
                }}
                animate={{ y: [0, 14, 0], opacity: [0.75, 0.95, 0.8] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="absolute right-[6vw] top-[18vh] select-none text-[22vw] font-extrabold leading-none tracking-tight opacity-[0.12]">
        <span className="text-transparent [text-stroke:2px_rgba(255,255,255,0.35)] [-webkit-text-stroke:2px_rgba(255,255,255,0.35)]">
          {watermark}
        </span>
            </div>

            <div
                className="absolute inset-0 opacity-[var(--grain-opacity)] mix-blend-overlay"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='.6'/%3E%3C/svg%3E\")",
                    backgroundSize: "180px 180px",
                }}
            />

            <div className="absolute inset-0 vignette" />
        </div>
    );
}
