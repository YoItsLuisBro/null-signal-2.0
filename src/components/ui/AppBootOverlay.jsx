import { motion as Motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export function AppBootOverlay() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setVisible(false);
    }, 650);

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <Motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.3, ease: [0.4, 0, 1, 1] },
          }}
          className="pointer-events-none fixed inset-0 z-70 bg-[rgba(10,10,10,0.98)]"
        >
          <div className="flex h-full w-full items-center justify-center">
            <div className="border-2 border-(--signal) bg-black/40 px-6 py-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-(--signal) sm:text-xs">
                NULL//SIGNAL // Booting Interface
              </p>
            </div>
          </div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
}
