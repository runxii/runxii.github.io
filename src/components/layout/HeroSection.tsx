'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { SlotMachine } from '@/components/gamify/SlotMachine';
import { getRoleById} from '@/lib/utils';
import { ROLES } from '@/data/roles'
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export const HeroSection = () => {
    const searchParams = useSearchParams();
    const currentRoleId = searchParams.get('role') || ROLES[0].id;
    const currentRole = getRoleById(currentRoleId) || ROLES[0];

    return (
        <section className="flex flex-col gap-12 py-12">
            {/* 1. SLOT MACHINE HEADER */}
            <div className="text-center space-y-4">
                <h1 className="font-pixel text-2xl md:text-4xl leading-tight">
                    MULTI-CLASS<br/>
                    <span className="text-retro-gray">ENGINEER</span>
                </h1>
                <SlotMachine />
            </div>

            {/* 2. DYNAMIC BIO (Updates based on URL) */}
            <div className="relative min-h-[200px] border-l-4 border-retro-gray pl-6 py-2">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentRole.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                    >
                        <h2 className={cn("font-pixel text-xl", `text-${currentRole.color}`)}>
                            // MODE: {currentRole.title}
                        </h2>
                        <p className="font-mono text-base md:text-lg leading-relaxed max-w-2xl text-foreground/90">
                            {currentRole.description}
                        </p>

                        {/* Gamified Stats Block */}
                        <div className="flex gap-4 mt-6 text-xs font-mono text-retro-gray">
                            <div className="border border-retro-gray px-2 py-1">
                                XP_RATE: <span className="text-foreground">1.5x</span>
                            </div>
                            <div className="border border-retro-gray px-2 py-1">
                                SKILL_TREE: <span className="text-foreground">MAXED</span>
                            </div>
                        </div>

                        <div className="pt-6">
                            <a
                                href={`/projects?role=${currentRole.id}`}
                                className={cn(
                                    "inline-block font-bold hover:underline underline-offset-4 decoration-2",
                                    `text-${currentRole.color} decoration-${currentRole.color}`
                                )}
                            >
                                [ VIEW {currentRole.id} PROJECTS $\gg$ ]
                            </a>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};