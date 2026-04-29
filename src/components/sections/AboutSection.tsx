import type { Locale } from '@/types/i18n'
import type { Profile } from '@/types/profile'
import Container from '@/components/layout/Container'
import DottedBand from '@/components/ui/DottedBand'
import SectionTitle from '@/components/ui/SectionTitle'
import WaveLine from '@/components/ui/WaveLine'

interface AboutSectionProps {
  profile: Profile
  locale: Locale
}

export default function AboutSection({ profile, locale }: AboutSectionProps) {
  return (
    <section id="about" className="relative py-14 md:py-20">
      <div className="absolute inset-x-0 top-[52%] -translate-y-1">

        <DottedBand className="absolute inset-0 z-0" />
        <WaveLine className="relative z-10 translate-y-[180px]" />
      </div>
      <Container>
        <SectionTitle title={profile.aboutTitle[locale]} />
        <div className="relative mx-auto h-[520px] w-80%">
          <div
            className="absolute inset-0 z-0"
            style={{
              background: 'linear-gradient(to bottom, #5B0E0E 0%, #8A2525 40%, #D48080 75%, #F5EAE6 100%)',
              filter: `blur(14px)`,
            }}
          />
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center">
            <p className="font-portfolio-mono text-[16px] leading-7 text-white">
              {profile.aboutText[locale]}
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
