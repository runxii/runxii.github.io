type NoiseOverlayProps = {
  className?: string;
};

export default function NoiseOverlay({ className = "" }: NoiseOverlayProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-soft-light ${className}`}
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 20%, rgba(255,255,255,0.22) 0 1px, transparent 1.5px),
          radial-gradient(circle at 80% 30%, rgba(255,255,255,0.16) 0 1px, transparent 1.5px),
          radial-gradient(circle at 40% 70%, rgba(0,0,0,0.14) 0 1px, transparent 1.5px),
          radial-gradient(circle at 70% 80%, rgba(255,255,255,0.14) 0 1px, transparent 1.5px)
        `,
        backgroundSize: "18px 18px, 22px 22px, 16px 16px, 20px 20px",
      }}
    />
  );
}