import { PageShell } from "@/components/layout/PageShell";
import { StartSection } from "@/components/sections/StartSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { LabSection } from "@/components/sections/LabSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
    return (
        <PageShell>
            <StartSection />
            <WorkSection />
            <LabSection />
            <AboutSection />
            <ContactSection />
        </PageShell>
    );
}
