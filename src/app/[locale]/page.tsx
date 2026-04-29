import type { Metadata } from 'next'
import type { Locale } from '@/types/i18n'
import { notFound } from 'next/navigation'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import AboutSection from '@/components/sections/AboutSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import HeroSection from '@/components/sections/HeroSection'
import LabsSection from '@/components/sections/LabsSection'
// import ProjectsSection from '@/components/sections/ProjectsSection'
import { siteConfig } from '@/config/site'
import { experience } from '@/data/experience'
// import { labs } from '@/data/labs'
import { profile } from '@/data/profile'
import { projects } from '@/data/projects'
import { sectionLabels } from '@/data/sectionLabels'
import { socialLinks } from '@/data/social'
import { isLocale } from '@/lib/i18n'
import { getLocalizedNav } from '@/lib/portfolio'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  if (!isLocale(locale)) {
    return {}
  }

  return {
    title: siteConfig.defaultTitle[locale],
    description: siteConfig.defaultDescription[locale],
  }
}

export default async function LocaleHomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  const typedLocale: Locale = locale
  const navItems = getLocalizedNav(typedLocale)

  return (
    <div className="min-h-screen bg-[#f6f2ed] text-neutral-900">
      <Header locale={typedLocale} navItems={navItems} />

      <main>
        <HeroSection profile={profile} locale={typedLocale} />
        {/* <ProjectsSection */}
        {/*  title={sectionLabels.projects[typedLocale]} */}
        {/*  projects={projects} */}
        {/*  locale={typedLocale} */}
        {/* /> */}
        <LabsSection
          title={sectionLabels.projects[typedLocale]}
          items={projects}
          locale={typedLocale}
        />
        <ExperienceSection
          title={sectionLabels.experience[typedLocale]}
          items={experience}
          locale={typedLocale}
        />
        <AboutSection profile={profile} locale={typedLocale} />
      </main>

      <Footer links={socialLinks} />
    </div>
  )
}
