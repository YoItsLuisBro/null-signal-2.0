export const pageContentMotion = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.28,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.14,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.16,
      ease: [0.4, 0, 1, 1],
    },
  },
};

export const panelReveal = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
