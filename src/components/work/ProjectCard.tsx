import type { Project } from "@/types/project";
import { useEffect, useRef, useState, useCallback } from 'react';

export function ProjectCard({ project }: { project: Project }) {
        const [blurStrength, setBlurStrength] = useState(90);
        const [isMobile, setIsMobile] = useState(false);
        const imageContainerRef = useRef<HTMLDivElement>(null);

        // Detect mobile viewport
        useEffect(() => {
            const checkMobile = () => setIsMobile(window.innerWidth <= 1024);

            checkMobile();
            window.addEventListener('resize', checkMobile);

            return () => window.removeEventListener('resize', checkMobile);
        }, []);

        // Stable reference to calculateBlur using useCallback
        const calculateBlur = useCallback(() => {
            const container = imageContainerRef.current;
            if (!container) return;

            const rect = container.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Calculate centers
            const imgCenterY = rect.top + rect.height / 2;
            const viewportCenterY = viewportHeight / 2;

            // Distance from image center to viewport center
            const distance = Math.abs(imgCenterY - viewportCenterY);

            // Maximum distance = half viewport height
            const maxDistance = viewportHeight / 2;

            // Normalize distance to 0-1 range and clamp
            const normalizedDistance = Math.min(distance / maxDistance, 1);

            // Linear mapping: 0% at center, 90% at edges
            const blurPercent = 150 * normalizedDistance;

            setBlurStrength(Math.round(blurPercent));
        }, []); // Empty deps - imageContainerRef is stable

        // Calculate blur based on distance from viewport center
        useEffect(() => {
            if (!isMobile) return;

            // Initial calculation
            calculateBlur();

            // Recalculate on scroll with passive listener for performance
            window.addEventListener('scroll', calculateBlur, { passive: true });

            return () => window.removeEventListener('scroll', calculateBlur);
        }, [isMobile, calculateBlur]);

        const overlayOpacity = blurStrength / 100;

        return (
            <article className="group relative overflow-hidden rounded-3xl border border-white/15 bg-black/40 backdrop-blur-xl">
                {/* Preview Image (hover: unblur + remove frosted overlay) */}
                {project.previewImage && (
                    <div ref={imageContainerRef} className="relative h-56 w-full overflow-hidden">
                        <img
                            src={project.previewImage}
                            alt={project.title}
                            className="h-full w-full object-cover transition-[filter,transform] duration-700 ease-out"
                        />

                        {/* Frosted overlay (fade out on hover on desktop, fade based on scroll on mobile) */}
                        <div
                            className="absolute inset-0 bg-black/35 transition-opacity duration-800 ease-out lg:backdrop-blur-xl lg:opacity-100 lg:hover:opacity-0"
                            style={
                                isMobile
                                    ? {
                                        opacity: overlayOpacity,
                                        backdropFilter: `blur(${blurStrength}px)`,
                                        transitionProperty: 'opacity, backdrop-filter',
                                    }
                                    : undefined
                            }
                        />

                        {/* Subtle highlight for a premium feel (optional, monochrome) */}
                        <div
                            className="pointer-events-none absolute inset-0 opacity-70 transition-opacity duration-700 ease-out group-hover:opacity-30"
                            style={{
                                background:
                                    'radial-gradient(600px 220px at 30% 20%, rgba(255,255,255,0.12), transparent 60%)',
                            }}
                        />
                    </div>
                )}

            {/* Content */}
            <div className="p-7">
                <div className="flex items-start justify-between gap-6">
                    <h3 className="text-2xl font-serif font-extrabold tracking-tight">{project.title}</h3>
                    <span className="text-xs uppercase tracking-[0.18em] opacity-60">
            {project.year}
          </span>
                </div>

                <p className="mt-3 text-sm opacity-75">{project.summary}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((t) => (
                        <span
                            key={t}
                            className="rounded-full border border-white/15 px-3 py-1 text-[11px] uppercase tracking-[0.18em]"
                        >
              {t}
            </span>
                    ))}
                </div>

                <div className="mt-6 flex justify-between text-xs uppercase tracking-[0.18em]">
                    <a href={`/work/${project.slug}`} className="opacity-70 hover:opacity-100">
                        Case study →
                    </a>
                    <div className={"justify-end"}>
                    {project.links?.map((l) => (
                        <a key={l.href} href={l.href} className="opacity-70 hover:opacity-100">
                            {l.label} ↗
                        </a>
                    ))}
                    </div>
                </div>
            </div>
        </article>
    );
}
