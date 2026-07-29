import { Link } from 'react-router';
import { ArrowUpRight, Instagram, Mail, MapPin } from 'lucide-react';

import { Reveal } from './site/Reveal';

const columns = [
  {
    title: 'Explore',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Programs', to: '/programs' },
      { label: 'Events', to: '/events' },
      { label: 'Contact', to: '/contact' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative z-10 mt-10 border-t border-white/8 bg-ink-950/80 px-6 pb-10 pt-24 backdrop-blur-xl">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal className="mb-20 max-w-3xl">
          <p className="font-display text-h2 leading-[1.05] text-paper">
            Let's put something
            <span className="text-brand-400"> beautiful </span>
            in their hands.
          </p>
          <Link
            to="/contact"
            className="group mt-9 inline-flex items-center gap-2.5 rounded-full bg-brand-500 px-8 py-4 font-semibold tracking-tight text-ink-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-400"
          >
            Start a conversation
            <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>

        <div className="grid gap-12 border-t border-white/8 pt-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <img src="/gallery/logo.png" alt="SIMPLYART" className="mb-6 h-10 w-auto" />
            <p className="max-w-xs text-sm leading-relaxed text-muted-on-dark">
              Immersive, Montessori-aligned art programs delivered to schools and celebrations
              across Ontario.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h4 className="mb-5 font-sans text-eyebrow font-semibold uppercase text-paper/50">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-paper/70 transition-colors hover:text-brand-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="mb-5 font-sans text-eyebrow font-semibold uppercase text-paper/50">
              Reach us
            </h4>
            <ul className="space-y-3.5 text-sm text-paper/70">
              <li className="flex items-center gap-3">
                <MapPin size={15} className="shrink-0 text-brand-400" />
                Ontario, Canada
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="shrink-0 text-brand-400" />
                hello@simplyartacademy.com
              </li>
              <li>
                <a
                  href="https://www.instagram.com/simplyartacademy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-brand-400"
                >
                  <Instagram size={15} className="shrink-0 text-brand-400" />
                  @simplyartacademy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/8 pt-8 text-xs text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} SIMPLYART Academy. All rights reserved.</p>
          <p>Positive creativity for growing minds.</p>
        </div>
      </div>
    </footer>
  );
}
