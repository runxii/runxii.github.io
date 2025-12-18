"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type TypewriterNameProps = {
    text: string;
    typeSpeedMs?: number;   // type speed (slow)
    holdAfterMs?: number;   // pause time
    restartDelayMs?: number; // pause after one loop
};

export function TypewriterName({
        text,
        typeSpeedMs = 260,
        holdAfterMs = 1600,
        restartDelayMs = 600,}: TypewriterNameProps) {
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState("");

    useEffect(() => {
        let timer: number;

        // Typing
        if (index < text.length) {
            timer = window.setTimeout(() => {
                setVisible(text.slice(0, index + 1));
                setIndex((i) => i + 1);
            }, typeSpeedMs);
        }
        // All done, empty the area
        else {
            timer = window.setTimeout(() => {
                setVisible("");
                setIndex(0);
            }, holdAfterMs + restartDelayMs);
        }

        return () => clearTimeout(timer);
    }, [index, text, typeSpeedMs, holdAfterMs, restartDelayMs]);

    return (
        <span className="inline-flex items-baseline">
      {/* Typed text */}
            <span className="font-mono font-medium text-green-600">{visible}</span>

            {/* Blinking cursor */}
            <motion.span
                aria-hidden
                className="ml-[0.08em] inline-block w-[0.1em] h-[0.9em] bg-white"
                animate={{ opacity: [1, 0, 1] }}
                transition={{
                    duration: 1.1,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
    </span>
    );
}
