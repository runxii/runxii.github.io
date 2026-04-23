import type { Locale } from "@/types/i18n";
import type { ExperienceItem } from "@/types/experience";

type ExperienceTimelineProps = {
  items: ExperienceItem[];
  locale: Locale;
};

export default function ExperienceTimeline({
  items,
  locale,
}: ExperienceTimelineProps) {
  return (
    <div className="relative mx-auto max-w-[760px]">
      <div className="absolute left-1/2 top-0 hidden h-full w-[56px] -translate-x-1/2 bg-cyan-200/70 md:block" />

      <div className="space-y-10 md:space-y-12">
        {items.map((item) => {
          const isLeft = item.side === "left";
          const cardTone =
            item.category === "education"
              ? "bg-cyan-100/90"
              : "bg-red-100/85";

          return (
            <div
              key={item.id}
              className="grid gap-4 md:grid-cols-2 md:gap-10"
            >
              <div className={`${isLeft ? "md:text-right" : "md:invisible"}`}>
                {isLeft ? (
                  <div className={`inline-block max-w-[230px] rounded-[2px] px-4 py-4 shadow ${cardTone}`}>
                    <p className="font-portfolio-serif text-[32px] leading-none text-neutral-950">
                      {item.dateLabel}
                    </p>
                    <p className="font-portfolio-sans mt-2 text-[11px] font-semibold leading-5 text-neutral-900">
                      {item.title[locale]}
                    </p>
                    <p className="font-portfolio-sans text-[10px] text-neutral-700">
                      {item.organization[locale]}
                    </p>
                    {(item.start || item.end) && (
                      <p className="font-portfolio-mono mt-3 text-[10px] text-neutral-500">
                        {[item.start, item.end].filter(Boolean).join("  ")}
                      </p>
                    )}
                  </div>
                ) : (
                  <div />
                )}
              </div>

              <div className="relative">
                <div className="absolute -left-[22px] top-3 hidden h-4 w-4 rounded-full bg-red-400 shadow-[0_2px_10px_rgba(0,0,0,0.15)] md:block" />

                {!isLeft ? (
                  <div className={`inline-block max-w-[230px] rounded-[2px] px-4 py-4 shadow ${cardTone}`}>
                    <p className="font-portfolio-serif text-[32px] leading-none text-neutral-950">
                      {item.dateLabel}
                    </p>
                    <p className="font-portfolio-sans mt-2 text-[11px] font-semibold leading-5 text-neutral-900">
                      {item.title[locale]}
                    </p>
                    <p className="font-portfolio-sans text-[10px] text-neutral-700">
                      {item.organization[locale]}
                    </p>
                    {(item.start || item.end) && (
                      <p className="font-portfolio-mono mt-3 text-[10px] text-neutral-500">
                        {[item.start, item.end].filter(Boolean).join("  ")}
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="md:h-full" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}