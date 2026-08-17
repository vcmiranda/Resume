import { Container } from '@/components/layout/Container'
import { ProjectCard } from '@/components/work/ProjectCard'
import { allProjects, site } from '@vcm/content'

export function Work() {
  return (
    <Container className="py-16 sm:py-20">
      <h1 className="display text-3xl sm:text-4xl">{site.featuredWork.heading}</h1>
      <p className="measure mt-5 text-muted">{site.featuredWork.intro}</p>
      <div className="mt-12">
        {allProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Container>
  )
}
