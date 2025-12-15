"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type SlotTapeProps = {
    items: string[];
    activeIndex: number;
    className?: string;
};

export function SlotTape({ items, activeIndex, className }: SlotTapeProps) {
    // repeat items to make it feel like a continuous tape
    const tape = [...items, ...items, ...items];
    const baseOffset = items.length; // centre the second block
    const target = (baseOffset + activeIndex) * -1;

    return (
        <div className={cn("relative h-[1.15em] overflow-hidden", className)}>
            <motion.div
                className="will-change-transform"
                animate={{ y: `${target}em` }}
                transition={{ type: "spring", stiffness: 160, damping: 18, mass: 0.9 }}
            >
                {tape.map((t, idx) => (
                    <div key={`${t}-${idx}`} className="h-[1.15em] leading-[1.15em]">
                        {t}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
