export const pageAnimation = {
  hidden: { opacity: 0, y: 300 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, when: 'beforeChildren', staggerChildren: 0.2 },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: { duration: 0.5 },
  },
};

export const titleAnimation = {
  hidden: { y: 200 },
  show: { y: 0, transition: { duration: 0.75, ease: 'easeOut' } },
};

export const photoAnimation = {
  hidden: { scale: 1.5, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { easy: 'easyOut', duration: 0.75 } },
};

export const lineAnimation = {
  hidden: { width: '0%' },
  show: { width: '100%', transition: { duration: 0.75 } },
};

export const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { when: 'beforeChildren', easy: 'easyOut', duration: 0.5 } },
  exit: { opacity: 0 },
};

export const rotate = {
  hidden: { rotate: 0, scale: 1 },
  show: { rotate: 360, scale: 2, transition: { repeat: Infinity, duration: 2 } },
};
