import { ArrowUpRight, Cake, CalendarDays, PartyPopper, School } from 'lucide-react';

import { Reveal } from '../site/Reveal';
import { ButtonLink, DarkSection, PaperSection, SectionHeading } from '../site/Primitives';
import { PageHero } from '../site/PageHero';
import { GalleryStrip } from '../site/GalleryStrip';

const eventTypes = [
  {
    icon: Cake,
    title: 'Birthday parties',
    description:
      'A creative party where the birthday child leads the theme and every guest goes home holding something they made.',
    highlights: [
      '2–3 hour sessions',
      'Themed art projects',
      'Decorations included',
      'An extra project for the birthday child',
      'Groups of 8–15',
    ],
  },
  {
    icon: School,
    title: 'School events',
    description:
      'Art stations for fairs, fun days and fundraisers. We scale the setup to the size of your crowd.',
    highlights: [
      'Flexible duration',
      'Multiple art stations',
      'Large group capacity',
      'Setup and cleanup included',
      'Works well for fundraisers',
    ],
  },
  {
    icon: PartyPopper,
    title: 'Community events',
    description:
      'Festivals, libraries and community centres — drop-in making that keeps a crowd engaged for hours.',
    highlights: [
      'All ages welcome',
      'Customisable activities',
      'Professional setup',
      'Built for continuous flow',
      'Bilingual signage on request',
    ],
  },
  {
    icon: CalendarDays,
    title: 'Private groups',
    description:
      'Homeschool groups, playgroups and family gatherings. A session shaped entirely around your group.',
    highlights: [
      'Small group friendly',
      'Custom themes available',
      'Your location or ours',
      'Flexible scheduling',
      'Ideal for special occasions',
    ],
  },
];

const testimonials = [
  {
    quote:
      'Best birthday party we have hosted. The kids were completely absorbed and everyone left with something beautiful.',
    name: 'Parent, Mississauga',
  },
  {
    quote:
      'SIMPLYART made our school fair. The art station had a queue all afternoon and the teachers did nothing but watch.',
    name: 'School administrator',
  },
  {
    quote:
      'Our homeschool group looks forward to these all month. Patient instructors, genuinely ambitious projects.',
    name: 'Homeschool co-op lead',
  },
];

export function Events() {
  return (
    <div className="relative">
      <PageHero
        eyebrow="Special events"
        title={
          <>
            Celebrations that
            <br />
            <span className="text-brand-400">leave something behind.</span>
          </>
        }
        lead="We bring the creativity, the supplies and the instructors directly to your occasion — and take the mess with us when we go."
      />

      {/* Event types */}
      <DarkSection>
        <SectionHeading
          eyebrow="What we host"
          title="Four kinds of celebration"
          className="mb-16 max-w-2xl"
        />

        <div className="grid gap-4 md:grid-cols-2">
          {eventTypes.map((event, index) => (
            <Reveal key={event.title} delay={(index % 2) * 0.08}>
              <article className="card-dark h-full p-9 transition-colors duration-500 hover:border-brand-400/35">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-brand-400">
                  <event.icon size={20} strokeWidth={1.6} />
                </span>

                <h3 className="mt-8 font-display text-h3 text-paper">{event.title}</h3>
                <p className="mt-3.5 text-[0.95rem] leading-relaxed text-muted-on-dark">
                  {event.description}
                </p>

                <ul className="mt-8">
                  {event.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-3.5 border-t border-white/8 py-3 text-[0.92rem] text-paper/75 last:border-b"
                    >
                      <span className="h-1 w-1 shrink-0 rounded-full bg-brand-400" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </DarkSection>

      {/* Gallery */}
      <DarkSection>
        <SectionHeading
          eyebrow="Event highlights"
          title="A look at recent sessions"
          className="mb-16 max-w-2xl"
        />
        <GalleryStrip />
      </DarkSection>

      {/* Testimonials */}
      <PaperSection>
        <SectionHeading
          tone="light"
          eyebrow="What people say"
          title="Told to us afterwards"
          className="max-w-2xl"
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-card bg-ink-900/10 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.08} className="bg-paper p-9">
              <span className="font-display text-5xl leading-none text-brand-500">&ldquo;</span>
              <p className="mt-5 text-[1.02rem] leading-relaxed text-ink-900/85">
                {testimonial.quote}
              </p>
              <p className="mt-8 text-sm text-muted-on-light">{testimonial.name}</p>
            </Reveal>
          ))}
        </div>
      </PaperSection>

      <DarkSection className="text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-display text-h1 text-paper">
            Let's plan your event.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-7 max-w-lg text-lead text-muted-on-dark">
            Give us a date, an age range and a rough headcount — we will send back a plan.
          </p>
        </Reveal>
        <Reveal delay={0.18} className="mt-12 flex flex-wrap justify-center gap-3">
          <ButtonLink to="/contact">
            Book your event
            <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </ButtonLink>
          <ButtonLink to="/programs" variant="outlineDark">
            See programs
          </ButtonLink>
        </Reveal>
      </DarkSection>
    </div>
  );
}
