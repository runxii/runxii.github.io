import type { Project } from "@/types/project";
import { useEffect, useRef, useState, useCallback } from 'react';

export function ProjectCard({ project }: { project: Project }) {
    const [blurStrength, setBlurStrength] = useState(90);
    const [isMobile, setIsMobile] = useState(false);
    const imageContainerRef = useRef<HTMLDivElement>(null);
    const rafIdRef = useRef<number | null>(null);

    // Detect mobile viewport - iOS-safe detection
    useEffect(() => {
        const checkMobile = () => {
            // Use matchMedia which is more reliable on iOS
            const mobileQuery = window.matchMedia('(max-width: 1023px)');
            setIsMobile(mobileQuery.matches);
        };

        checkMobile();

        // Use matchMedia listener for better iOS support
        const mobileQuery = window.matchMedia('(max-width: 1023px)');
        const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);

        // Modern browsers
        if (mobileQuery.addEventListener) {
            mobileQuery.addEventListener('change', handler);
        } else {
            // Fallback for older iOS versions
            mobileQuery.addListener(handler);
        }

        return () => {
            if (mobileQuery.removeEventListener) {
                mobileQuery.removeEventListener('change', handler);
            } else {
                mobileQuery.removeListener(handler);
            }
        };
    }, []);

    // Calculate blur based on distance from viewport center
    useEffect(() => {
        if (!isMobile) return;

        const container = imageContainerRef.current;
        if (!container) return;

        const calculateBlur = () => {
            const rect = container.getBoundingClientRect();
            // Use visualViewport for iOS, fallback to window.innerHeight
            const viewportHeight = window.visualViewport?.height || window.innerHeight;

            const imgCenterY = rect.top + rect.height / 2;
            const viewportCenterY = viewportHeight / 2;
            const distance = Math.abs(imgCenterY - viewportCenterY);
            const maxDistance = viewportHeight / 2;
            const normalizedDistance = Math.min(distance / maxDistance, 1);
            const blurPercent = 150 * normalizedDistance;

            setBlurStrength(Math.round(blurPercent));
        };

        // Initial calculation
        calculateBlur();

        // iOS-compatible scroll handler using RAF
        const handleScroll = () => {
            if (rafIdRef.current !== null) {
                cancelAnimationFrame(rafIdRef.current);
            }
            rafIdRef.current = requestAnimationFrame(() => {
                calculateBlur();
                rafIdRef.current = null;
            });
        };

        // Multiple event listeners for iOS compatibility
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('touchmove', handleScroll, { passive: true });

        // iOS visual viewport changes (address bar show/hide)
        if (window.visualViewport) {
            window.visualViewport.addEventListener('resize', calculateBlur);
            window.visualViewport.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (rafIdRef.current !== null) {
                cancelAnimationFrame(rafIdRef.current);
            }
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('touchmove', handleScroll);
            if (window.visualViewport) {
                window.visualViewport.removeEventListener('resize', calculateBlur);
                window.visualViewport.removeEventListener('scroll', handleScroll);
            }
        };
    }, [isMobile]);

    const overlayOpacity = blurStrength / 100;

    return (
        <article className="group relative overflow-hidden rounded-3xl border border-white/15 bg-black/40 backdrop-blur-xl">
            {project.previewImage && (
                <div ref={imageContainerRef} className="relative h-56 w-full overflow-hidden">
                    <img
                        src={project.previewImage}
                        alt={project.title}
                        className="h-full w-full object-cover transition-[filter,transform] duration-700 ease-out"
                    />

                    {/* Frosted overlay - iOS-safe conditional rendering */}
                    <div
                        className="absolute inset-0 bg-black/35 transition-opacity duration-300 ease-out lg:backdrop-blur-xl lg:opacity-100 lg:hover:opacity-0"
                        style={
                            isMobile
                                ? {
                                    opacity: overlayOpacity,
                                    backdropFilter: `blur(${blurStrength}px)`,
                                    WebkitBackdropFilter: `blur(${blurStrength}px)`, // iOS Safari prefix
                                    transitionProperty: 'all',
                                }
                                : undefined
                        }
                    />

                    <div
                        className="pointer-events-none absolute inset-0 opacity-70 transition-opacity duration-700 ease-out group-hover:opacity-30"
                        style={{
                            background:
                                'radial-gradient(600px 220px at 30% 20%, rgba(255,255,255,0.12), transparent 60%)',
                        }}/>
                    </div>
                )}

            {/* Content */}
            <div className="p-7">
                <div className="flex items-start justify-between align-middle gap-6">
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
