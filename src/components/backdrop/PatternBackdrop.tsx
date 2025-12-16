"use client";

import { useRoleStore } from "@/store/roleStore";
import { motion } from "framer-motion";

export function PatternBackdrop() {
    const role = useRoleStore((s) => s.role);
    const index = ["sde", "security", "pm", "design"].indexOf(role);

    return (
        <motion.div
            className="pointer-events-none absolute inset-0 z-0"
            animate={{ x: -index * 240 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E
    %3Cg fill='none' stroke='white' stroke-opacity='0.22' stroke-width='1.4'%3E
      %3Ccircle cx='40' cy='40' r='14'/%3E
      %3Crect x='120' y='30' width='28' height='28'/%3E
      %3Cpath d='M40 160 L70 190 L10 190 Z'/%3E
    %3C/g%3E
  %3C/svg%3E")`,
                backgroundRepeat: "repeat",
                opacity: 0.35,
            }}

        />
    );
}
