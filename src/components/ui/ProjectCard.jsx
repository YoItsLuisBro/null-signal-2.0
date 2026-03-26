export function ProjectCard({ project }) {
  return (
    <article className="ns-panel group overflow-hidden transition duration-200 hover:-translate-y-1 hover:border-(--signal)">
      <div className="overflow-hidden border-b-2 border-(--border) bg-(--bg-soft)">
        <div className="aspect-16/10 w-full overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
          />
        </div>
      </div>

      <div className="p-5">
        <div className="flex flex-wrap items-start justify-between gap-3 border-b border-(--border) pb-4">
          <div className="min-w-0">
            <p className="ns-label">{project.category}</p>
            <h3 className="mt-3 text-2xl font-black uppercase leading-none">
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <span className="border border-(--signal) px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-(--signal)">
              {project.status}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-(--muted)">
              {project.year}
            </span>
          </div>
        </div>

        <p className="mt-4 text-sm leading-7 text-(--muted)">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span key={item} className="ns-chip">
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="ns-btn ns-btn-primary w-full sm:w-auto"
          >
            Live Site
          </a>

          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="ns-btn ns-btn-secondary w-full sm:w-auto"
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
