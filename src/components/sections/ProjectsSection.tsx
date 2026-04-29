// import type { Locale } from '@/types/i18n'
// import type { Project } from '@/types/project'
// // import FeaturedProjectCard from '@/components/card/FeaturedProjectCard'
// import Container from '@/components/layout/Container'
// import SectionTitle from '@/components/ui/SectionTitle'
//
// interface ProjectsSectionProps {
//   title: string
//   projects: Project[]
//   locale: Locale
// }
//
// export default function ProjectsSection({
//   title,
//   projects,
//   locale,
// }: ProjectsSectionProps) {
//   const featured = projects.find(project => project.featured) ?? projects[0]
//
//   if (!featured)
//     return null
//
//   const activeIndex = Math.max(
//     projects.findIndex(project => project.slug === featured.slug),
//     0,
//   )
//
//   return (
//     <section id="projects" className="py-14 md:py-20">
//       <Container>
//         <SectionTitle title={title} />
//         <FeaturedProjectCard
//           project={featured}
//           projects={projects}
//           locale={locale}
//           activeIndex={activeIndex}
//         />
//       </Container>
//     </section>
//   )
// }
