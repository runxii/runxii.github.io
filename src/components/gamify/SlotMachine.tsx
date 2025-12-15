'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';
import { ROLES, Role } from '@/data/roles';
import { cn, getRoleById } from '@/lib/utils';
import { Button } from '../ui/Button';

const ITEM_HEIGHT = 64; // Height in pixels (h-16 = 4rem = 64px)

export const SlotMachine = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    // 1. Get Current Role from URL or Default to First
    const currentRoleId = searchParams.get('role') || ROLES[0].id;
    const currentRole = getRoleById(currentRoleId) || ROLES[0];

    const [isSpinning, setIsSpinning] = useState(false);

    // 2. Animation Values
    const y = useMotionValue(0);
    const springY = useSpring(y, { stiffness: 60, damping: 15, mass: 1 });

    // 3. Prepare Reel (Duplicate roles for looping illusion)
    // We explicitly create a long list: [Roles, Roles, Roles, Roles]
    const reelRoles = [...ROLES, ...ROLES, ...ROLES, ...ROLES];

    // 4. Initialize Position based on current role
    useEffect(() => {
        // Find the index of the current role in the *first* set
        const index = ROLES.findIndex(r => r.id === currentRoleId);
        if (index !== -1 && !isSpinning) {
            y.set(-(index * ITEM_HEIGHT));
        }
    }, [currentRoleId, isSpinning, y]);

    // 5. Spin Logic
    const handleSpin = useCallback(() => {
        if (isSpinning) return;
        setIsSpinning(true);

        // Pick a random NEXT role
        const nextIndex = Math.floor(Math.random() * ROLES.length);
        const nextRole = ROLES[nextIndex];

        // We want to land on the 3rd set of roles to ensure we scroll DOWN
        // 0 = Set 1, 1 = Set 2, 2 = Set 3...
        const targetSetIndex = 2;
        const targetIndexInReel = (ROLES.length * targetSetIndex) + nextIndex;
        const targetY = -(targetIndexInReel * ITEM_HEIGHT);

        // Animate
        springY.set(targetY);

        // Wait for animation to settle (approx 1.5s based on spring physics)
        setTimeout(() => {
            // Update URL (This triggers the parent to update content)
            router.push(`/?role=${nextRole.id}`, { scroll: false });
            setIsSpinning(false);

            // Quietly reset position to the first set to prevent infinite scrolling issues
            // y.set(-(nextIndex * ITEM_HEIGHT)); // Optional optimization
        }, 1500);

    }, [isSpinning, router, springY]);

    return (
        <div className="flex flex-col gap-6 items-center w-full max-w-lg mx-auto">
            {/* --- SLOT WINDOW --- */}
            <div className="relative w-full border-4 border-retro-gray bg-black p-1 shadow-brutal">
                {/* Decorative Arrows */}
                <div className="absolute -left-6 top-1/2 -translate-y-1/2 text-retro-yellow font-pixel text-xl">▶</div>
                <div className="absolute -right-6 top-1/2 -translate-y-1/2 text-retro-yellow font-pixel text-xl">◀</div>

                {/* Viewport */}
                <div className="relative h-16 overflow-hidden bg-retro-gray/20">
                    {/* Scanline Overlay */}
                    <div className="absolute inset-0 z-20 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>

                    {/* The Moving Reel */}
                    <motion.div style={{ y: springY }} className="w-full">
                        {reelRoles.map((role, i) => (
                            <div
                                key={`${role.id}-${i}`}
                                className={cn(
                                    "h-16 flex items-center justify-center font-pixel text-lg md:text-xl tracking-wider",
                                    `text-${role.color}`
                                )}
                            >
                                {role.title}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* --- CONTROLS --- */}
            <div className="flex flex-col items-center gap-2">
                <Button onClick={handleSpin} disabled={isSpinning} className="w-64">
                    {isSpinning ? '>>> ROLLING >>>' : 'SWITCH IDENTITY'}
                </Button>
                <div className="text-[10px] text-retro-gray font-mono uppercase">
                    Current Mode: <span className={cn(`text-${currentRole.color}`)}>{currentRole.id}</span>
                </div>
            </div>
        </div>
    );
};