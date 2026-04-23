type TechBadgeProps = {
  label: string;
};

export default function TechBadge({ label }: TechBadgeProps) {
  return (
    <span className="font-portfolio-sans inline-flex rounded-full bg-cyan-100 px-3 py-1 text-[10px] font-semibold tracking-[0.04em] text-neutral-800 shadow-[0_2px_6px_rgba(0,0,0,0.08)]">
      {label}
    </span>
  );
}