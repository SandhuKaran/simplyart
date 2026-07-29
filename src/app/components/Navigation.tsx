import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

import { cx } from './site/Primitives';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/programs', label: 'Programs' },
  { path: '/events', label: 'Events' },
  { path: '/contact', label: 'Contact' },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [lifted, setLifted] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6 md:pt-6">
        <nav
          className={cx(
            'mx-auto flex w-full max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 ease-out-soft md:px-5',
            lifted
              ? 'border border-white/10 bg-ink-900/70 shadow-lift backdrop-blur-xl'
              : 'border border-transparent bg-transparent',
          )}
        >
          <Link to="/" className="flex shrink-0 items-center" aria-label="SIMPLYART home">
            <img src="/gallery/logo.png" alt="SIMPLYART" className="h-9 w-auto md:h-10" />
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cx(
                    'relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300',
                    active ? 'text-ink-950' : 'text-paper/65 hover:text-paper',
                  )}
                >
                  {active ? (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-brand-400"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="group hidden items-center gap-1.5 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-paper transition-all duration-300 hover:border-brand-400/70 hover:bg-white/[0.06] md:inline-flex"
            >
              Book a visit
              <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-paper transition-colors hover:bg-white/[0.06] md:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 bg-ink-950/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex h-full flex-col justify-center px-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * index + 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={link.path}
                    className={cx(
                      'block border-b border-white/8 py-5 font-display text-4xl transition-colors',
                      location.pathname === link.path ? 'text-brand-400' : 'text-paper',
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-10"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-8 py-4 font-semibold text-ink-950"
                >
                  Book a visit
                  <ArrowUpRight size={17} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
