import type { Locale } from "@/types/i18n";
import type { Profile } from "@/types/profile";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import DottedBand from "@/components/decorative/DottedBand";
import WaveLine from "@/components/decorative/WaveLine";

type AboutSectionProps = {
  profile: Profile;
  locale: Locale;
};

export default function AboutSection({ profile, locale }: AboutSectionProps) {
  return (
    <section id="about" className="py-14 md:py-20">
      <Container>
        <SectionTitle title={profile.aboutTitle[locale]} />

        <div className="mx-auto max-w-[760px] rounded-[2px] bg-[linear-gradient(to_bottom,rgba(101,17,17,0.95)_0%,rgba(137,28,28,0.92)_34%,rgba(176,38,38,0.72)_62%,rgba(236,236,236,0.9)_100%)] px-8 py-14 shadow-[0_18px_42px_rgba(0,0,0,0.14)] md:px-10 md:py-16">
          <p className="font-portfolio-mono max-w-[500px] text-[12px] leading-7 text-white/95">
            {profile.aboutText[locale]}
          </p>
        </div>

        <div className="mt-10">
          <DottedBand />
          <WaveLine className="-mt-2" />
        </div>
      </Container>
    </section>
  );
}