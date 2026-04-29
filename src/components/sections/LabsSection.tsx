import type { Locale } from '@/types/i18n'
import type { Project } from '@/types/project'
import LabCard from '@/components/card/LabCard'
import Container from '@/components/layout/Container'
import SectionTitle from '@/components/ui/SectionTitle'

interface LabsSectionProps {
  title: string
  items: Project[]
  locale: Locale
}

export default function LabsSection({
  title,
  items,
  locale,
}: LabsSectionProps) {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <SectionTitle title={title} />
        <div className="grid gap-4 md:grid-cols-3">
          {items.map(item => (
            <LabCard key={item.slug} project={item} locale={locale} />
          ))}
        </div>
      </Container>
    </section>
  )
}
