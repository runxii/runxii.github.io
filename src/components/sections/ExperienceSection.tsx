import type { ExperienceItem } from '@/types/experience'
import type { Locale } from '@/types/i18n'
import ExperienceTimeline from '@/components/card/ExperienceTimeline'
import Container from '@/components/layout/Container'
import SectionTitle from '@/components/ui/SectionTitle'

interface ExperienceSectionProps {
  title: string
  items: ExperienceItem[]
  locale: Locale
}

export default function ExperienceSection({
  title,
  items,
  locale,
}: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-14 md:py-20">
      <Container>
        <SectionTitle title={title} />
        <ExperienceTimeline items={items} locale={locale} />
      </Container>
    </section>
  )
}
