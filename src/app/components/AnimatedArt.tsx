import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface AnimatedArtProps {
  children: React.ReactNode;
  delay?: number;
}

export function AnimatedArt({ children, delay = 0 }: AnimatedArtProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, rotate }}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}
