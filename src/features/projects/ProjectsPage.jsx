import { projects } from "./projects.data";
import { ProjectCard } from "../../components/ui/ProjectCard";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { PageMeta } from "../../components/ui/PageMeta";

export function ProjectsPage() {
  return (
    <section className="ns-section">
      <PageMeta
        title="Projects"
        description="Selected builds, systems, and creative experiments by Luis Fonseca across frontend interfaces, product concepts, and technical UI work."
      />

      <div className="ns-container">
        <div className="ns-panel-strong p-6 sm:p-8 lg:p-10">
          <SectionHeading
            eyebrow="Project Archive"
            title="Selected builds, systems, and creative experiments."
            copy="A growing archive of frontend interfaces, product concepts, and technically driven visual builds."
          />

          <div className="mt-8 flex flex-wrap gap-2">
            <span className="ns-chip">React</span>
            <span className="ns-chip">Vite</span>
            <span className="ns-chip">Tailwind</span>
            <span className="ns-chip">UI Systems</span>
            <span className="ns-chip">Product Thinking</span>
          </div>
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
