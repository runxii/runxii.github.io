"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type SlotTapeProps = {
    items: string[];
    activeIndex: number;
    className?: string;
    itemPx?: number; // allows tuning
};

export function SlotTape({ items, activeIndex, className }: SlotTapeProps) {
    const tape = useMemo(() => [...items, ...items, ...items], [items]);
    const baseOffset = items.length;

    const [itemPx, setItemPx] = useState<number>(48); // set to a stable value

    useEffect(() => {
        const compute = () => setItemPx(Math.max(32, Math.round(window.innerWidth * 0.10)));
        compute();
        window.addEventListener("resize", compute);
        return () => window.removeEventListener("resize", compute);
    }, []);

    const y = -1 * (baseOffset + activeIndex) * itemPx;

    return (
        <div className={cn("relative overflow-hidden", className)} style={{ height: itemPx }}>
            <motion.div
                className="will-change-transform"
                animate={{ y }}
                transition={{ type: "spring", stiffness: 180, damping: 20, mass: 0.9 }}
            >
                {tape.map((t, idx) => (
                    <div
                        key={`${t}-${idx}`}
                        className="whitespace-nowrap font-bold text-right"
                        style={{ height: itemPx, lineHeight: `${itemPx}px` }}
                    >
                        <h1>{t}</h1>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
