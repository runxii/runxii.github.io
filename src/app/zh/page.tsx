import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import LabsSection from "@/components/sections/LabsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import AboutSection from "@/components/sections/AboutSection";
import { siteConfig } from "@/config/site";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { labs } from "@/data/labs";
import { experience } from "@/data/experience";
import { socialLinks } from "@/data/social";
import { getLocalizedNav } from "@/lib/portfolio";

const locale = "zh" as const;

export const metadata: Metadata = {
  title: siteConfig.defaultTitle[locale],
  description: siteConfig.defaultDescription[locale],
};

export default function HomePage() {
  const navItems = getLocalizedNav(locale);

  return (
    <div className="min-h-screen bg-[#f6f2ed] text-neutral-900">
      <Header locale={locale} navItems={navItems} />

      <main>
        <HeroSection profile={profile} locale={locale} />
        <ProjectsSection title="Projects" projects={projects} locale={locale} />
        <LabsSection title="Labs" items={labs} locale={locale} />
        <ExperienceSection
          title="Experience"
          items={experience}
          locale={locale}
        />
        <AboutSection profile={profile} locale={locale} />
      </main>

      <Footer links={socialLinks} />
    </div>
  );
}