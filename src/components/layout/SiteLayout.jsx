import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { MobileDock } from "./MobileDock";
import { RouteTransition } from "../ui/RouteTransition";
import { AppBootOverlay } from "../ui/AppBootOverlay";

export function SiteLayout() {
  const location = useLocation();
  const routeKey = location.pathname;

  return (
    <div className="ns-shell ns-grid-bg">
      <AppBootOverlay />
      <SiteHeader />
      <main className="ns-bottom-safe">
        <AnimatePresence mode="wait" initial={false}>
          <RouteTransition key={routeKey} routeKey={routeKey}>
            <Outlet />
          </RouteTransition>
        </AnimatePresence>
      </main>
      <SiteFooter />
      <MobileDock />
    </div>
  );
}
