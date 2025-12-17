import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/cn'; // Adjust path if needed

interface GlassButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    icon?: LucideIcon;
    size?: 'default' | 'sm' | 'md';
    active?: boolean;
    variant?: 'default' | 'hover' | 'active';
    interactive?: boolean;
    className?: string;
}

export const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
    (
        {
            children,
            icon: Icon,
            size = 'default',
            active = false,
            variant = 'default',
            interactive = true,
            className,
            onClick,
            ...props
        },
        ref
    ) => {
        const [isPressed, setIsPressed] = React.useState(false);
        const [isHovered, setIsHovered] = React.useState(false);

        // Determine actual variant based on state
        const currentVariant = active
            ? 'active'
            : interactive
                ? isPressed
                    ? 'active'
                    : isHovered
                        ? 'hover'
                        : 'default'
                : variant;

        // Size configurations
        const sizeClasses = {
            default: 'px-6 py-2 text-sm min-w-[180px]',
            sm: 'px-8 py-4 text-lg',
            md: 'px-10 py-5 text-xl',
        };

        const iconSizes = {
            default: 'w-4 h-4',
            sm: 'w-5 h-5',
            md: 'w-6 h-6',
        };

        const gapSizes = {
            default: 'gap-2',
            sm: 'gap-3',
            md: 'gap-3',
        };

        // Variant styles
        const getBackgroundStyle = () => {
            switch (currentVariant) {
                case 'hover':
                    return 'radial-gradient(circle at 10% 0%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)';
                case 'active':
                    return 'radial-gradient(circle at 10% 60%, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.06) 100%)';
                default:
                    return 'radial-gradient(circle at 10% 60%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)';
            }
        };

        const getShadowStyle = () => {
            if (isPressed) {
                return '0 4px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.2)';
            }
            if (currentVariant === 'hover') {
                return '0 12px 40px rgba(0,0,0,0.5), inset 0 2px 0 rgba(255,255,255,0.2), inset 0 -2px 0 rgba(0,0,0,0.3)';
            }
            return '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(0,0,0,0.25)';
        };

        return (
            <button
                ref={ref}
                onClick={onClick}
                onMouseDown={() => setIsPressed(true)}
                onMouseUp={() => setIsPressed(false)}
                onMouseLeave={() => {
                    setIsPressed(false);
                    setIsHovered(false);
                }}
                onMouseEnter={() => setIsHovered(true)}
                className={cn(
                    'group relative rounded-full backdrop-blur-xl font-mono font-medium border border-white/20 transition-all duration-200 flex items-center justify-center',
                    sizeClasses[size],
                    isPressed && 'translate-y-[2px]',
                    className
                )}
                style={{
                    background: getBackgroundStyle(),
                    boxShadow: getShadowStyle(),
                }}
                {...props}
            >
                {/* Top highlight for glass effect */}
                <div
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{
                        background: 'linear-gradient(180deg, rgba(255,255,255,0.12) 0%, transparent 50%)',
                        opacity: isPressed ? 0.5 : 1,
                        transition: 'opacity 0.2s',
                    }}
                />

                {/* Bottom shadow for depth */}
                <div
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{
                        background: 'linear-gradient(0deg, rgba(0,0,0,0.15) 0%, transparent 50%)',
                    }}
                />

                {/* Content */}
                <div className={cn('relative flex items-center z-10', gapSizes[size])}>
                    {Icon && (
                        <Icon
                            className={cn(
                                'text-white/70 transition-all group-hover:text-white/90 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]',
                                iconSizes[size]
                            )}
                        />
                    )}
                    <span className="font-semibold text-white/80 tracking-[-0.04em] tracking-wide transition-all group-hover:text-white/95 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
            {children}
          </span>
                </div>
            </button>
        );
    }
);

GlassButton.displayName = 'GlassButton';