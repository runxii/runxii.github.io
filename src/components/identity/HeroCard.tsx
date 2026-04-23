interface HeroCardProps {
  name?: string
  role?: string
  intro?: string
}

export default function HeroCard({
  name = 'Yang',
  role = 'software engineer',
  intro,
}: HeroCardProps) {
  return (
    <div className="relative mx-auto h-[540px] w-80% top-10">

      <div
        className="absolute inset-0 z-0"
        style={{
          background:
                        'linear-gradient(to bottom, #5B0E0E 0%, #8A2525 40%, #D48080 75%, #F5EAE6 100%)',
          filter: `blur(14px)`,
          transform: 'scale(1.08)',
        }}
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center">
        <h1 className="font-portfolio-serif text-[120px] leading-none tracking-tight text-white drop-shadow-md">
          {name}
        </h1>

        <p className="font-portfolio-mono mt-4 text-[22px] tracking-[0.1em] text-white drop-shadow-sm">
          {role}
        </p>

        {intro
          ? (
              <p className="font-portfolio-sans mt-7 max-w-[210px] text-[12px] leading-5 text-white/78">
                {intro}
              </p>
            )
          : null}
      </div>

    </div>
  )
}
