import type { ExperienceItem } from '@/types/experience'
import type { Locale } from '@/types/i18n'

interface ExperienceTimelineProps {
  items: ExperienceItem[]
  locale: Locale
}

export default function ExperienceTimeline({
  items,
  locale,
}: ExperienceTimelineProps) {
  return (
    <div className="relative mx-auto max-w-[760px]">

      <div className="space-y-10 md:space-y-12">
        {items.map((item) => {
          const isLeft = item.side === 'left'
          const cardTone
            = item.category === 'education'
              ? '#B9E3E1'
              : 'bg-[#FFDFD9]'

          return (
            <div
              key={item.id}
              className="grid gap-4 md:grid-cols-2 md:gap-10"
            >
              <div className={`${isLeft ? 'md:text-right' : 'md:invisible'}`}>

                {isLeft
                  ? (
                      <div>
                        <h3 className="my-2 font-portfolio-mono text-[28px] leading-none text-neutral-950">
                          {item.dateLabel}
                        </h3>
                        <div
                          className={`inline-block w-75% rounded-[2px] px-4 py-4 shadow-[0_0_14px_${cardTone}] bg-[${cardTone}]`}
                        >
                          <p className="my-2 font-portfolio-serif whitespace-pre-line mt-2 text-[18px] leading-5 text-neutral-900">
                            {item.title[locale]}
                          </p>
                          <p className="font-portfolio-sans text-[12px] text-neutral-700">
                            {item.organization[locale]}
                          </p>
                        </div>
                        <h4 className="my-2 font-portfolio-mono text-[24px] leading-none text-neutral-400">
                          {item.start}
                        </h4>
                      </div>
                    )
                  : (
                      <div />
                    )}

              </div>

              <div className="relative">
                <div
                  className="absolute -left-[22px] top-3 hidden h-4 w-4 rounded-full bg-red-400 shadow-[0_2px_10px_rgba(0,0,0,0.15)] md:block"
                />

                {!isLeft
                  ? (
                      <div>
                        <h3 className="my-2 font-portfolio-mono text-[28px] leading-none text-neutral-950">
                          {item.dateLabel}
                        </h3>

                        <div
                          className={`inline-block w-75% rounded-[2px] px-4 py-4 shadow-[0_0_12px_#FFDFD9] ${cardTone}`}
                        >
                          <p className="my-2 font-portfolio-serif mt-2 text-[18px] leading-5 text-neutral-900">
                            {item.title[locale]}
                          </p>
                          <p className="font-portfolio-sans text-[12px] text-neutral-700">
                            {item.organization[locale]}
                          </p>
                        </div>
                        <h4 className="my-2 font-portfolio-mono text-[24px] leading-none text-neutral-400">
                          {item.start}
                        </h4>
                      </div>
                    )
                  : (
                      <div className="md:h-full" />
                    )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
