interface SectionTitleProps {
  title: string
  subtitle?: string
  id?: string
}

export default function SectionTitle({
  title,
  subtitle,
  id,
}: SectionTitleProps) {
  return (
    <div id={id} className="mb-12 text-center">
      <div className="relative inline-flex flex-col items-center">
        <h2 className="font-portfolio-serif relative z-10 text-[50pt] leading-none text-black">
          {title}
        </h2>
        <div
          className="mx-auto mt-4 h-3 w-[220px] bg-[radial-gradient(circle,_rgba(115,217,228,0.95)_2.5px,_transparent_3px)] bg-[length:14px_14px] bg-repeat-x"
        />
        <div
          aria-hidden="true"
          className="font-portfolio-serif pointer-events-none left-1/2 top-[58px] z-0 scale-y-[-1] text-[48pt] leading-none text-red-500/70 blur-sm select-none"
        >
          {title}
        </div>
      </div>

      {subtitle
        ? (
            <p className="font-portfolio-sans mt-3 text-sm text-neutral-600">
              {subtitle}
            </p>
          )
        : null}
    </div>
  )
}
