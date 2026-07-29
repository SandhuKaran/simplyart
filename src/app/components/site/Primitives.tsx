import { Link } from 'react-router';
import type { ReactNode } from 'react';

import { Reveal } from './Reveal';

function cx(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(' ');
}

/** Small uppercase label that sits above a heading. */
export function Eyebrow({
  children,
  tone = 'dark',
  className,
}: {
  children: ReactNode;
  tone?: 'dark' | 'light';
  className?: string;
}) {
  return (
    <span
      className={cx(
        'inline-flex items-center gap-2.5 text-eyebrow font-semibold uppercase',
        tone === 'dark' ? 'text-brand-300' : 'text-brand-700',
        className,
      )}
    >
      <span
        className={cx(
          'h-px w-8',
          tone === 'dark' ? 'bg-brand-400/60' : 'bg-brand-600/50',
        )}
      />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = 'dark',
  align = 'left',
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: 'dark' | 'light';
  align?: 'left' | 'center';
  className?: string;
}) {
  return (
    <div
      className={cx(
        'flex flex-col gap-6',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      {eyebrow ? (
        <Reveal>
          <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        </Reveal>
      ) : null}

      <Reveal delay={0.06}>
        <h2
          className={cx(
            'font-display text-h2 font-normal',
            tone === 'dark' ? 'text-paper' : 'text-ink-900',
          )}
        >
          {title}
        </h2>
      </Reveal>

      {lead ? (
        <Reveal delay={0.12}>
          <p
            className={cx(
              'text-lead max-w-2xl',
              tone === 'dark' ? 'text-muted-on-dark' : 'text-muted-on-light',
              align === 'center' && 'mx-auto',
            )}
          >
            {lead}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

const buttonBase =
  'group inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-4 text-[0.95rem] font-semibold tracking-tight transition-all duration-300 ease-out-soft';

const buttonVariants = {
  primary:
    'bg-brand-500 text-ink-950 hover:bg-brand-400 hover:-translate-y-0.5 shadow-[0_18px_44px_-18px_rgba(31,199,124,0.9)]',
  outlineDark:
    'border border-white/20 text-paper hover:border-brand-400/70 hover:bg-white/[0.06] hover:-translate-y-0.5',
  outlineLight:
    'border border-ink-900/15 text-ink-900 hover:border-ink-900/40 hover:bg-ink-900/[0.04] hover:-translate-y-0.5',
  ink: 'bg-ink-900 text-paper hover:bg-ink-700 hover:-translate-y-0.5 shadow-lift',
} as const;

type Variant = keyof typeof buttonVariants;

export function ButtonLink({
  to,
  href,
  variant = 'primary',
  children,
  className,
}: {
  to?: string;
  href?: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
}) {
  const classes = cx(buttonBase, buttonVariants[variant], className);

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to ?? '/'} className={classes}>
      {children}
    </Link>
  );
}

export function Pill({ children, tone = 'dark' }: { children: ReactNode; tone?: 'dark' | 'light' }) {
  return (
    <span
      className={cx(
        'inline-flex items-center rounded-full px-4 py-2 text-sm font-medium',
        tone === 'dark'
          ? 'border border-white/12 bg-white/[0.05] text-paper/80'
          : 'border border-ink-900/10 bg-ink-900/[0.03] text-ink-900/70',
      )}
    >
      {children}
    </span>
  );
}

/** Full-bleed dark section — the 3D scene shows through behind it. */
export function DarkSection({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cx('relative px-6 py-28 md:py-36', className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

/** Warm paper panel floating over the scene. */
export function PaperSection({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cx('relative px-4 py-14 md:px-6 md:py-20', className)}>
      <div className="panel shadow-panel mx-auto w-full max-w-6xl px-6 py-20 md:px-14 md:py-28">
        {children}
      </div>
    </section>
  );
}

export { cx };
