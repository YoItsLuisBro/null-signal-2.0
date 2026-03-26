import { SectionHeading } from "../ui/SectionHeading";
import { siteConfig } from "../../lib/site";

export function ContactSection() {
  return (
    <section id="contact" className="ns-section ns-anchor-section">
      <div className="ns-container">
        <div className="ns-panel-strong ns-scanlines p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <SectionHeading
                eyebrow="Secure Contact Channel"
                title="Let’s build something sharp."
                copy="Available for freelance work, collaborations, portfolio conversations, and full-time opportunities."
              />

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="ns-btn ns-btn-primary w-full sm:w-auto"
                >
                  Email Me
                </a>

                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noreferrer"
                  className="ns-btn ns-btn-secondary w-full sm:w-auto"
                >
                  GitHub
                </a>

                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="ns-btn ns-btn-secondary w-full sm:w-auto"
                >
                  LinkedIn
                </a>

                <a
                  href={siteConfig.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="ns-btn ns-btn-secondary w-full sm:w-auto"
                >
                  Resume
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="border-2 border-(--border) bg-black/30 p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-(--signal)">
                  Transmission Log
                </p>
                <div className="mt-3 font-mono text-xs leading-6 text-(--muted)">
                  <p>status: open</p>
                  <p>preferred_channel: email</p>
                  <p>response_mode: direct // collaborative // professional</p>
                  <p>location: {siteConfig.location}</p>
                </div>
              </div>

              <div className="border-2 border-(--border) p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-(--signal)">
                  Contact Endpoints
                </p>

                <div className="mt-4 space-y-3 text-sm">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-(--muted)">
                      Email
                    </p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="mt-1 inline-block break-all text-(--text) hover:text-(--signal)"
                    >
                      {siteConfig.email}
                    </a>
                  </div>

                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-(--muted)">
                      GitHub
                    </p>
                    <a
                      href={siteConfig.github}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-block break-all text-(--text) hover:text-(--signal)"
                    >
                      {siteConfig.github}
                    </a>
                  </div>

                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-(--muted)">
                      LinkedIn
                    </p>
                    <a
                      href={siteConfig.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-block break-all text-(--text) hover:text-(--signal)"
                    >
                      {siteConfig.linkedin}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
