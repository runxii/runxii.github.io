/*
import * as React from "react";
import {cn} from "@/lib/cn"

// ---- Minimal Slot impl (so we don't need external libs) ----
// Similar to Radix Slot behavior: merges className onto child.
function Slot(props: {
    children: React.ReactElement;
    className?: string;
    [key: string]: any;
}) {
    const { children, className, ...rest } = props;
    return React.cloneElement(children, {
        ...rest,
        className: cn(children.props.className, className),
    });
}

export type NeonButtonProps = {
    label: string;
    asChild?: boolean;
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function NeonButton({
                               label,
                               asChild = false,
                               className,
                               ...props
                           }: NeonButtonProps) {
    const Comp: any = asChild ? Slot : "button";

    return (
        <Comp
            // If asChild=true, consumer should pass a single ReactElement child.
            // For button default, we render label.
            className={cn(
                "relative inline-flex items-center justify-center",
                "select-none rounded-2xl px-10 py-4",
                "bg-lime-400 text-neutral-950",
                "font-semibold tracking-[0.35em] uppercase",
                "shadow-[0_0_18px_rgba(163,230,53,0.65),0_0_48px_rgba(163,230,53,0.25)]",
                "transition duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950",
                "active:translate-y-[1px]",
                // glow layers via pseudo-elements
                "before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl",
                "before:bg-lime-400/80 before:blur-2xl before:opacity-70",
                "after:pointer-events-none after:absolute after:-inset-6 after:rounded-[1.25rem]",
                "after:bg-lime-400/45 after:blur-3xl after:opacity-40",
                // hover intensify
                "hover:shadow-[0_0_28px_rgba(163,230,53,0.85),0_0_70px_rgba(163,230,53,0.35)]",
                "hover:before:opacity-90 hover:after:opacity-55",
                // subtle inner shine
                "[text-shadow:0_1px_0_rgba(255,255,255,0.25)]",
                className
            )}
            {...props}
        >
            {!asChild ? (
                <>
                    {/!* Inner highlight *!/}
                    <span
                        aria-hidden
                        className={cn(
                            "pointer-events-none absolute left-0 right-0 top-full",
                            "mt-4 h-16",
                            "[clip-path:polygon(12% 0%,88% 0%,100% 100%,0% 100%)]",
                            "origin-top",
                            "[transform:perspective(180px)_rotateX(45deg)_scaleY(-1)]",
                            "bg-lime-400/55 blur-sm",
                            "[mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.55),rgba(0,0,0,0.0))]",
                            "opacity-35"
                        )}
                    />

                    {/!* Label *!/}
                    <span className="relative z-10">{label}</span>

                    {/!* Reflection (mirror) *!/}
                    {/!* Reflection (trapezoid + perspective) *!/}
                    <span
                        aria-hidden
                        className={cn(
                            "pointer-events-none absolute left-0 right-0 top-full",
                            "mt-4 h-16",
                            // trapezoid: bottom wider than top
                            "[clip-path:polygon(25% 0%,75% 0%,100% 100%,0% 100%)]",
                            // perspective + tilt + mirror
                            "origin-top",
                            "[transform:perspective(180px)_rotateX(75deg)_scaleY(-1)]",
                            // soften edges (left/right/bottom)
                            "bg-lime-400/45 blur-2xl",
                            // fade out downward
                            "[mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.55),rgba(0,0,0,0.0))]",
                            "opacity-15"
                        )}
                    >
            {/!* brighter core so center reads stronger *!/}
                        <span
                            className={cn(
                                "absolute inset-0",
                                "[clip-path:polygon(14%_6%,86%_6%,98%_100%,2%_100%)]",
                                "bg-gradient-to-b from-lime-200/55 to-lime-400/10",
                                "blur-[2px]"
                            )}
                        />
          </span>
                </>
            ) : (
                // asChild mode: consumer supplies the child element. We still render reflection.
                // For asChild we can't inject label safely; use children.
                <>
                    {props.children}
                    <span
                        aria-hidden
                        className={cn(
                            "pointer-events-none absolute left-0 right-0 top-full",
                            "mt-4 h-16",
                            "[clip-path:polygon(25%_0,75%_0,100%_100%,0_100%)]",
                            "origin-top",
                            "[transform:perspective(220px)_rotateX(65deg)_scaleY(-1)]",
                            "bg-lime-400/55 blur-2xl",
                            "[mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.55),rgba(0,0,0,0.0))]",
                            "opacity-15"
                        )}
                    />
                </>
            )}
        </Comp>
    );
}*/
