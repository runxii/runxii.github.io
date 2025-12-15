"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type SlotTapeProps = {
    items: string[];
    activeIndex: number;
    className?: string;
    itemPx?: number; // allows tuning
};

export function SlotTape({
                             items,
                             activeIndex,
                             className,
                             itemPx = 35, // good for text-2xl; adjust if needed
                         }: SlotTapeProps) {
    const tape = [...items, ...items, ...items];
    const baseOffset = items.length; // centre block

    const y = -1 * (baseOffset + activeIndex) * itemPx;

    return (
        <div
            className={cn("relative overflow-hidden", className)}
            style={{ height: itemPx }}
        >
            <motion.div
                className="will-change-transform"
                animate={{ y }}
                transition={{ type: "spring", stiffness: 180, damping: 20, mass: 0.9 }}
            >
                {tape.map((t, idx) => (
                    <div
                        key={`${t}-${idx}`}
                        className="whitespace-nowrap text-2xl font-bold text-center"
                        style={{height: itemPx, lineHeight: `${itemPx}px`}}
                    >
                        {t}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
