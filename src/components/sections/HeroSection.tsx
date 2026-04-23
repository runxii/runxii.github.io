import type { Locale } from "@/types/i18n";
import type { Profile } from "@/types/profile";
import Container from "@/components/layout/Container";
import HeroCard from "@/components/identity/HeroCard";
import DottedBand from "@/components/decorative/DottedBand";
import WaveLine from "@/components/decorative/WaveLine";
import BlurGlow from "@/components/decorative/BlurGlow";

type HeroSectionProps = {
  profile: Profile;
  locale: Locale;
};

export default function HeroSection({ profile, locale }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pb-14 pt-10 md:pb-20 md:pt-12">
      <Container>
        <div className="relative min-h-[392px]">
          <BlurGlow className="-left-[120px] top-[115px] h-[260px] w-[260px] opacity-85" />

          <div className="absolute inset-x-0 top-[52%] -translate-y-1/2">
            <DottedBand />
            <WaveLine className="-mt-[6px]" />
          </div>

          <div className="relative z-10 flex justify-center pt-2">
            <HeroCard
              name={profile.name}
              role={profile.role[locale]}
              intro={undefined}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}