import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, type ReactNode } from 'react';

import { Eyebrow } from './Primitives';

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Shared opening for the inner pages: tall enough that the 3D corridor reads as
 * the backdrop, short enough that the content is not buried.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-[78vh] items-center px-6 pb-24 pt-40">
      <motion.div style={{ y, opacity }} className="mx-auto w-full max-w-6xl">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 0.12, duration: 0.95, ease: EASE }}
          className="mt-8 max-w-4xl font-display text-h1 font-normal text-paper"
        >
          {title}
        </motion.h1>

        {lead ? (
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.9, ease: EASE }}
            className="mt-9 max-w-xl text-lead text-muted-on-dark"
          >
            {lead}
          </motion.p>
        ) : null}
      </motion.div>
    </section>
  );
}
