'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { PROJECTS, Project } from '@/data/proejcts';
import { getRoleById, cn } from '@/lib/utils';
import { ProjectCard } from './ProjectCard';
import { ROLES } from '@/data/roles';

// Default role if no search parameter is present
const DEFAULT_ROLE_ID = ROLES[0].id;

export const ProjectList = () => {
    const searchParams = useSearchParams();
    const requestedRoleId = searchParams.get('role');

    // Determine the active role for filtering and display
    const activeRoleId = requestedRoleId && getRoleById(requestedRoleId)
        ? requestedRoleId
        : DEFAULT_ROLE_ID;

    const activeRole = getRoleById(activeRoleId)!; // We know this will exist

    // Filter the static project list
    const filteredProjects: Project[] = PROJECTS.filter(p => p.roleId === activeRoleId);

    return (
        <div className="container mx-auto max-w-6xl py-8">

            {/* Header: Status and Role */}
            <header className="mb-10 border-b-4 border-foreground pb-4">
                <h1 className="font-pixel text-2xl md:text-3xl text-retro-gray mb-2">
                    PROJECT DASHBOARD
                </h1>
                <h2 className={cn("font-pixel text-xl leading-tight", `text-${activeRole.color}`)}>
                    // CURRENT FILTER: {activeRole.title} ({activeRole.id})
                </h2>
                <p className="font-mono text-sm mt-2 text-foreground/70">
                    Showing {filteredProjects.length} results. Use the main page slot machine to change context.
                </p>
            </header>

            {/* Project Grid */}
            {filteredProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            ) : (
                <div className="text-center p-12 pixel-border border-retro-gray bg-black/50">
                    <p className="font-pixel text-lg text-retro-yellow">
                        [ ERROR 404: NO PROJECTS FOUND ]
                    </p>
                    <p className="font-mono text-sm mt-4">
                        No projects are currently categorized under the '{activeRole.title}' identity. Please check back later or switch identities.
                    </p>
                </div>
            )}

            {/* Back Link */}
            <div className="text-center pt-12">
                <a
                    href={`/?role=${activeRoleId}`}
                    className="font-pixel text-sm text-retro-blue hover:text-foreground transition-colors"
                >
                    [ $\ll$ RETURN TO SYSTEM INTRO ]
                </a>
            </div>
        </div>
    );
};