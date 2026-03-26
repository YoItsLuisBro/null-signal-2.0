import { motion as Motion } from "motion/react";
import { pageContentMotion } from "../../lib/motion";

function getRouteLabel(routeKey) {
  if (routeKey === "/") return "Loading // Home Signal";
  if (routeKey === "/projects") return "Opening // Project Archive";
  return "Routing // Signal Handoff";
}

export function RouteTransition({ children, routeKey }) {
  const label = getRouteLabel(routeKey);

  return (
    <div className="relative min-w-0 overflow-x-clip">
      <Motion.div
        key={`overlay-${routeKey}`}
        initial={{ y: "100%" }}
        animate={{ y: ["100%", "0%", "-100%"] }}
        transition={{
          duration: 0.65,
          times: [0, 0.46, 1],
          ease: [0.22, 1, 0.36, 1],
        }}
        className="pointer-events-none fixed inset-0 z-40"
      >
        <div className="relative h-full w-full bg-[rgba(10,10,10,0.94)]">
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(124,255,91,0.16)_48%,transparent_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[28px_28px]" />
          <div className="absolute inset-0 opacity-25 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.04)_0,rgba(255,255,255,0.04)_1px,transparent_2px,transparent_4px)]" />

          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-y border-[rgba(124,255,91,0.3)] bg-[rgba(124,255,91,0.08)] px-4 py-3">
            <div className="ns-container flex items-center justify-between gap-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-(--signal) sm:text-xs">
                NULL//SIGNAL
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-(--text) sm:text-xs">
                {label}
              </p>
            </div>
          </div>
        </div>
      </Motion.div>

      <Motion.div
        key={`content-${routeKey}`}
        variants={pageContentMotion}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </Motion.div>
    </div>
  );
}
