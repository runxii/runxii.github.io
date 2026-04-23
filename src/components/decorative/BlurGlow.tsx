type BlurGlowProps = {
  className?: string;
};

export default function BlurGlow({ className = "" }: BlurGlowProps) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute ${className}`}>
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(191,36,36,0.82)_0%,rgba(220,38,38,0.45)_28%,rgba(248,113,113,0.18)_52%,rgba(255,255,255,0)_76%)] blur-sm" />
      <div className="absolute inset-[12%] rounded-full bg-[radial-gradient(circle,rgba(255,160,160,0.35)_0%,rgba(255,255,255,0)_72%)] blur-sm" />
      <div className="absolute inset-[24%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0)_70%)] blur-sm" />
    </div>
  );
}