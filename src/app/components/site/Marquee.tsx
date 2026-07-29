import { motion } from 'motion/react';

/**
 * A slow, single-line ticker. Duplicated once so the loop is seamless, and slow
 * enough that it reads as texture rather than an advert.
 */
export function Marquee({
  items,
  duration = 42,
  reverse = false,
}: {
  items: string[];
  duration?: number;
  reverse?: boolean;
}) {
  const track = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-6 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <motion.div
        className="flex w-max items-center gap-14"
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration, ease: 'linear', repeat: Infinity }}
      >
        {track.map((item, index) => (
          <span key={`${item}-${index}`} className="flex shrink-0 items-center gap-14">
            <span className="font-display text-2xl whitespace-nowrap text-paper/45 md:text-3xl">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400/60" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
