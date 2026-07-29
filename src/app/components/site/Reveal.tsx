import { motion, type HTMLMotionProps } from 'motion/react';

const EASE = [0.22, 1, 0.36, 1] as const;

interface RevealProps extends HTMLMotionProps<'div'> {
  delay?: number;
  /** Distance travelled on the way in, in pixels. */
  distance?: number;
}

/**
 * The single scroll-entrance used everywhere on the site. One motion, one
 * easing — the restraint is what keeps the page feeling composed rather than
 * bouncy.
 */
export function Reveal({ delay = 0, distance = 26, children, ...rest }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      // Pixel margin, not a percentage: it holds the entrance back until the
      // element is properly on screen, and avoids the browser inconsistencies
      // percentage rootMargins bring.
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.85, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Word-by-word entrance, reserved for the one headline that carries a page. */
export function RevealWords({
  text,
  className,
  delay = 0,
  accentFrom,
}: {
  text: string;
  className?: string;
  delay?: number;
  /** Index of the first word rendered in the brand colour. */
  accentFrom?: number;
}) {
  const words = text.split(' ');

  return (
    <span className={className}>
      {words.map((word, index) => (
        // The padding buys room for descenders, which the tight display
        // line-height would otherwise clip against `overflow-hidden`.
        <span
          key={`${word}-${index}`}
          className="inline-block overflow-hidden pb-[0.18em] align-bottom -mb-[0.18em]"
        >
          <motion.span
            className="inline-block"
            initial={{ y: '108%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{ duration: 0.9, delay: delay + index * 0.075, ease: EASE }}
            style={
              accentFrom !== undefined && index >= accentFrom
                ? { color: 'var(--color-brand-400)' }
                : undefined
            }
          >
            {word}
          </motion.span>
          {index < words.length - 1 ? <span>&nbsp;</span> : null}
        </span>
      ))}
    </span>
  );
}
