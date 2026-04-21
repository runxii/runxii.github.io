import { PageShell } from '@/components/layout/PageShell'
import { AboutSection } from '@/components/sections/AboutSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { LabSection } from '@/components/sections/LabSection'
import { StartSection } from '@/components/sections/StartSection'
import { WorkSection } from '@/components/sections/WorkSection'

export default function HomePage() {
  return (
    <PageShell>
      <StartSection />
      <WorkSection />
      <LabSection />
      <AboutSection />
      <ContactSection />
    </PageShell>
  )
}
