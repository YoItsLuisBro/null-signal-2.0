import { Link } from "react-router-dom";
import { motion as Motion } from "motion/react";
import { panelReveal } from "../../lib/motion";
import { SignalCoreCanvas } from "../../three/SignalCoreCanvas";
import { TerminalStrip } from "../ui/TerminalStrip";
import { siteConfig } from "../../lib/site";
import portrait from "../../assets/luis-portrait.jpg";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-8 sm:py-12 lg:py-16">
      <div className="ns-container">
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <Motion.div
            variants={panelReveal}
            initial="initial"
            animate="animate"
            className="ns-panel-strong ns-scanlines min-w-0 p-5 sm:p-8 lg:p-10"
          >
            <div className="flex min-w-0 flex-wrap items-center justify-between gap-3 border-b border-(--border) pb-4">
              <p className="ns-label">{siteConfig.brand}</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-(--muted) sm:text-xs">
                Personal Portfolio // Active
              </p>
            </div>

            <div className="mt-6 min-w-0">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-(--signal) sm:text-xs">
                {siteConfig.heroEyebrow}
              </p>

              <h1
                className="ns-heading mt-4 wrap-break-word leading-[0.9]"
                style={{ fontSize: "clamp(2.75rem, 11vw, 6.5rem)" }}
              >
                LUIS
                <br />
                FONSECA
              </h1>

              <div className="mt-5 max-w-2xl space-y-3">
                <p className="text-base font-medium uppercase tracking-[0.04em] text-(--text) sm:text-lg">
                  {siteConfig.heroSubheadline}
                </p>

                <p className="ns-copy max-w-2xl">{siteConfig.heroCopy}</p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  to="/projects"
                  className="ns-btn ns-btn-primary w-full sm:w-auto"
                >
                  View Projects
                </Link>

                <a
                  href="/#contact"
                  className="ns-btn ns-btn-secondary w-full sm:w-auto"
                >
                  Open Contact
                </a>
              </div>
            </div>

            <div className="mt-8 min-w-0">
              <TerminalStrip />
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
              <div className="border-2 border-(--border) p-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-(--muted)">
                  Primary Focus
                </p>
                <p className="mt-2 text-sm font-semibold uppercase">
                  Full-Stack Systems
                </p>
              </div>

              <div className="border-2 border-(--border) p-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-(--muted)">
                  Product Style
                </p>
                <p className="mt-2 text-sm font-semibold uppercase">
                  Brutalist / Technical
                </p>
              </div>

              <div className="border-2 border-(--border) p-3 sm:col-span-2 xl:col-span-1">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-(--muted)">
                  Core Stack
                </p>
                <p className="mt-2 text-sm font-semibold uppercase">
                  Frontend + Backend
                </p>
              </div>
            </div>
          </Motion.div>

          <div className="grid min-w-0 gap-6">
            <Motion.div
              variants={panelReveal}
              initial="initial"
              animate="animate"
              className="ns-panel min-w-0 overflow-hidden p-4 sm:p-5"
            >
              <div className="flex min-w-0 flex-wrap items-center justify-between gap-3 border-b border-(--border) pb-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-(--signal)">
                  Identity Frame
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-(--muted)">
                  Portrait
                </p>
              </div>

              <div className="mt-4 overflow-hidden border-2 border-(--border) bg-(--bg-soft)">
                <div className="aspect-[4/4.8] w-full sm:aspect-[4/4.6] lg:aspect-[4/4.8]">
                  <img
                    src={portrait}
                    alt="Luis Fonseca portrait"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </Motion.div>

            <Motion.div
              variants={panelReveal}
              initial="initial"
              animate="animate"
              className="ns-panel ns-terminal-glow min-w-0 overflow-hidden p-3"
            >
              <div className="mb-3 flex min-w-0 flex-wrap items-center justify-between gap-3 border-b border-(--border) pb-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-(--signal)">
                  Signal Core
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-(--muted)">
                  Interactive 3D
                </p>
              </div>

              <div className="relative overflow-hidden border-2 border-(--border) bg-[radial-gradient(circle_at_center,rgba(124,255,91,0.08),transparent_55%)]">
                <div className="pointer-events-none absolute inset-0 opacity-20">
                  <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[24px_24px]" />
                </div>

                <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.03)_0,rgba(255,255,255,0.03)_1px,transparent_2px,transparent_4px)] opacity-20" />

                <SignalCoreCanvas />
              </div>

              <div className="mt-3 flex items-center justify-between gap-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-(--muted)">
                  Pointer-reactive artifact
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-(--signal)">
                  Stable // Live
                </p>
              </div>
            </Motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
