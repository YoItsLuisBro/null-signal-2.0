import { Link } from "react-router-dom";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectCard } from "../ui/ProjectCard";
import { featuredProjects } from "../../features/projects/projects.data";

export function FeaturedProjectsSection() {
  return (
    <section className="ns-section">
      <div className="ns-container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Selected Work"
            title="Built to be remembered."
            copy="A focused set of projects that show interface design, technical execution, and strong product identity."
          />

          <Link to="/projects" className="ns-btn ns-btn-secondary w-fit">
            Open Archive
          </Link>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
