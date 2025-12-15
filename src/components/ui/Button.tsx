'use client';

import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "font-pixel text-xs md:text-sm uppercase px-6 py-3 transition-all duration-100",
                    "border-2 border-foreground active:translate-x-[2px] active:translate-y-[2px]",
                    variant === "primary"
                        ? "bg-foreground text-background shadow-brutal hover:shadow-brutal-sm active:shadow-none"
                        : "bg-transparent text-foreground hover:bg-foreground/10",
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";