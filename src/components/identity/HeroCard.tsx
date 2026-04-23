import BlurGlow from "@/components/decorative/BlurGlow";
import NoiseOverlay from "@/components/decorative/NoiseOverlay";

type HeroCardProps = {
  name: string;
  role: string;
  intro?: string;
};

export default function HeroCard({ name, role, intro }: HeroCardProps) {
  return (
    <div className="relative mx-auto h-[372px] w-[480px] overflow-hidden rounded-[2px] bg-[linear-gradient(to_bottom,rgba(91,14,14,0.98)_0%,rgba(122,21,21,0.96)_18%,rgba(155,31,31,0.88)_42%,rgba(200,104,104,0.42)_70%,rgba(238,236,233,0.96)_100%)] shadow-[0_26px_60px_rgba(0,0,0,0.22)]">
        
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_16%,rgba(255,255,255,0.08),transparent_22%),radial-gradient(circle_at_50%_46%,rgba(255,255,255,0.06),transparent_28%),linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_30%)]" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center">
        <h1 className="font-portfolio-serif text-[78px] leading-none tracking-tight text-white">
          {name}
        </h1>

        <p className="font-portfolio-mono mt-5 text-[32px] tracking-[0.13em] text-white">
          {role}
        </p>

        {intro ? (
          <p className="font-portfolio-sans mt-7 max-w-[210px] text-[12px] leading-5 text-white/78">
            {intro}
          </p>
        ) : null}
      </div>
    </div>
  );
}