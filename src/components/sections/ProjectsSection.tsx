import type { Locale } from "@/types/i18n";
import type { Project } from "@/types/project";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FeaturedProjectCard from "@/components/work/FeaturedProjectCard";

type ProjectsSectionProps = {
  title: string;
  projects: Project[];
  locale: Locale;
};

export default function ProjectsSection({
  title,
  projects,
  locale,
}: ProjectsSectionProps) {
  const featured = projects.find((project) => project.featured) ?? projects[0];

  if (!featured) return null;

  return (
    <section id="projects" className="py-14 md:py-20">
      <Container>
        <SectionTitle title={title} />
        <FeaturedProjectCard
          project={featured}
          locale={locale}
          allProjectsCount={projects.length}
          activeIndex={0}
        />
      </Container>
    </section>
  );
}