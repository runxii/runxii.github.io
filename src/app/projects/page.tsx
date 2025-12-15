import React, { Suspense } from 'react';
import { ProjectList } from '@/components/projects/ProjectList';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Projects | Dev_Portfolio_v3",
    description: "Dashboard of multi-disciplinary projects filtered by professional identity.",
};

export default function ProjectsPage() {
    return (
        // CRITICAL: Suspense boundary ensures static export works despite
        // the use of useSearchParams inside ProjectList.
        <Suspense fallback={
            <div className="h-96 flex items-center justify-center font-pixel text-retro-gray">
                LOADING PROJECT DATA...
            </div>
        }>
            <ProjectList />
        </Suspense>
    );
}