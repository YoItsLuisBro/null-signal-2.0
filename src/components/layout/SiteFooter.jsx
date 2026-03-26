import { siteConfig } from "../../lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-(--border) py-6">
      <div className="ns-container">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-(--signal)">
              {siteConfig.brand}
            </p>
            <p className="mt-2 max-w-xl text-sm leading-7 text-(--muted)">
              Structured interfaces, technical systems, and visually distinct
              digital work.
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:items-end">
            <div className="flex flex-wrap gap-3">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[10px] uppercase tracking-[0.18em] text-(--muted) hover:text-(--signal)"
              >
                GitHub
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[10px] uppercase tracking-[0.18em] text-(--muted) hover:text-(--signal)"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-mono text-[10px] uppercase tracking-[0.18em] text-(--muted) hover:text-(--signal)"
              >
                Email
              </a>
            </div>

            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-(--muted)">
              © {year} {siteConfig.name} // All signals reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
