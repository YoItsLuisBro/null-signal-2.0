export function AboutPanel() {
  return (
    <section className="ns-section">
      <div className="ns-container">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="ns-panel p-5 sm:p-6">
            <p className="ns-label">About // Signal Source</p>
            <h2 className="ns-heading mt-4 text-3xl leading-none sm:text-4xl">
              Built on structure, clarity, and execution.
            </h2>
          </div>

          <div className="ns-panel-strong p-5 sm:p-6 lg:p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-(--signal)">
                  Profile
                </p>
                <p className="mt-3 text-sm leading-7 text-(--muted) sm:text-base">
                  My background in accounting and software engineering naturally
                  pushes me toward systems that are structured, logical, and
                  useful.
                </p>
              </div>

              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-(--signal)">
                  Approach
                </p>
                <p className="mt-3 text-sm leading-7 text-(--muted) sm:text-base">
                  I like interfaces with strong identity and clear hierarchy —
                  products that feel bold without sacrificing usability.
                </p>
              </div>

              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-(--signal)">
                  Interests
                </p>
                <p className="mt-3 text-sm leading-7 text-(--muted) sm:text-base">
                  Frontend systems, technical UI, product thinking, financial
                  tooling, and portfolio-grade interactive experiences.
                </p>
              </div>

              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-(--signal)">
                  Goal
                </p>
                <p className="mt-3 text-sm leading-7 text-(--muted) sm:text-base">
                  Build memorable digital products that combine sharp UX, clean
                  engineering, and a visual language people remember.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
