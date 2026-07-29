import { motion, useScroll, useSpring } from 'motion/react';

/** A hairline progress bar — the only chrome that tells you how far you've flown. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-px origin-left bg-gradient-to-r from-brand-500 via-brand-400 to-orchid-400"
      aria-hidden="true"
    />
  );
}
