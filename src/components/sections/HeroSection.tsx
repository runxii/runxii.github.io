import type { Locale } from '@/types/i18n'
import type { Profile } from '@/types/profile'
import HeroCard from '@/components/card/HeroCard'
import Container from '@/components/layout/Container'
import DottedBand from '@/components/ui/DottedBand'
import WaveLine from '@/components/ui/WaveLine'

interface HeroSectionProps {
  profile: Profile
  locale: Locale
}

export default function HeroSection({ profile, locale }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pb-14 pt-10 md:pb-20 md:pt-12">
      <div className="absolute inset-x-0 top-[52%] -translate-y-1">

        <DottedBand className="absolute inset-0 z-0" />
        <WaveLine className="relative z-10 translate-y-[180px]" />
      </div>

      <Container>
        <div className="relative min-h-[392px]">
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
  )
}
