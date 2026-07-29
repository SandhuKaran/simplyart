import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router';
import { ArrowUpRight, Boxes, CalendarDays, Palette, Sparkles } from 'lucide-react';

import { Reveal, RevealWords } from '../site/Reveal';
import { ButtonLink, DarkSection, Eyebrow, PaperSection, Pill, SectionHeading } from '../site/Primitives';
import { Marquee } from '../site/Marquee';
import { GalleryStrip } from '../site/GalleryStrip';

const stats = [
  { value: '3–12', label: 'Ages we teach' },
  { value: '100%', label: 'Materials supplied' },
  { value: '45–180', label: 'Minutes per session' },
  { value: 'Ontario', label: 'Where we travel' },
];

const services = [
  {
    index: '01',
    icon: Boxes,
    title: 'School residencies',
    body: 'A weekly studio that arrives at your door — easels, aprons, instructors and cleanup included.',
  },
  {
    index: '02',
    icon: CalendarDays,
    title: 'Celebrations',
    body: 'Birthdays, fairs and community days built around one memorable thing to make and take home.',
  },
  {
    index: '03',
    icon: Palette,
    title: 'Themed workshops',
    body: 'Multi-week series that go deep on a technique: printmaking, clay, colour theory, portraiture.',
  },
  {
    index: '04',
    icon: Sparkles,
    title: 'Montessori-aligned',
    body: 'Child-led pacing and open-ended prompts, so the work belongs to the child rather than the template.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Tell us the room',
    body: 'Age group, group size, how long you have and what you are hoping the children take away.',
  },
  {
    number: '02',
    title: 'We design the session',
    body: 'You get a plan with the project, the materials list and the timings — nothing for you to prepare.',
  },
  {
    number: '03',
    title: 'We arrive and reset',
    body: 'Setup, instruction, and a room left cleaner than we found it. Everyone leaves holding their work.',
  },
];

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '32%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-screen items-center px-6 pb-28 pt-36 md:pt-40">
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="mx-auto w-full max-w-6xl"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Eyebrow>Ontario art academy for children</Eyebrow>
        </motion.div>

        <h1 className="mt-8 max-w-4xl font-display text-display font-normal text-paper">
          <RevealWords text="Art for" delay={0.15} />
          <br />
          <RevealWords text="growing minds" delay={0.3} accentFrom={1} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 max-w-xl text-lead text-muted-on-dark"
        >
          We bring a complete art studio into schools, celebrations and community spaces across
          Ontario — materials, instructors, setup and cleanup included.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-wrap items-center gap-3"
        >
          <ButtonLink to="/contact">
            Book your event
            <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </ButtonLink>
          <ButtonLink to="/programs" variant="outlineDark">
            See the programs
          </ButtonLink>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        style={{ opacity: contentOpacity }}
        className="absolute inset-x-0 bottom-10 flex flex-col items-center gap-3"
      >
        <span className="text-eyebrow font-semibold uppercase text-paper/45">Scroll</span>
        <span className="relative h-12 w-px overflow-hidden bg-white/12">
          <motion.span
            className="absolute inset-x-0 top-0 h-5 bg-brand-400"
            animate={{ y: ['-100%', '240%'] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.div>
    </section>
  );
}

function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  const opacity = useTransform(scrollYProgress, [0, 0.14, 0.78, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1.06]);
  const blur = useTransform(scrollYProgress, [0, 0.15, 0.8, 1], [7, 0, 0, 7]);
  const filter = useTransform(blur, (value) => `blur(${value}px)`);

  return (
    <section ref={ref} className="relative h-[190vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center px-6">
        <motion.div style={{ opacity, scale, filter }} className="max-w-3xl text-center">
          <Eyebrow className="mx-auto">Why it matters</Eyebrow>
          <p className="mt-9 font-display text-h1 leading-[1.06] text-paper">
            A child who makes something
            <span className="text-brand-400"> real </span>
            learns they are someone who can make things.
          </p>
          <p className="mx-auto mt-9 max-w-xl text-lead text-muted-on-dark">
            That is the whole idea. Everything else — the aprons, the pigment, the drying rack in
            the hallway — is in service of it.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function Home() {
  return (
    <div className="relative">
      <Hero />

      {/* Facts strip */}
      <section className="relative border-y border-white/8 bg-ink-950/45 px-6 py-16 backdrop-blur-sm">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.06}>
              <p className="font-display text-3xl text-paper md:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm text-paper/55">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* What we do */}
      <PaperSection>
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20">
          <div>
            <SectionHeading
              tone="light"
              eyebrow="What we do"
              title={
                <>
                  A working studio,
                  <br />
                  delivered.
                </>
              }
              lead="SIMPLYART brings immersive art experiences directly to schools across Ontario. Our mobile setup follows the Montessori method — children choose their own pace, their own marks, their own finished thing."
            />

            <Reveal delay={0.18} className="mt-10 flex flex-wrap gap-2.5">
              {['School programs', 'Events', 'Workshops', 'PD day camps'].map((tag) => (
                <Pill key={tag} tone="light">
                  {tag}
                </Pill>
              ))}
            </Reveal>

            <Reveal delay={0.24} className="mt-10">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 border-b border-ink-900/20 pb-1 text-sm font-semibold text-ink-900 transition-colors hover:border-brand-600 hover:text-brand-700"
              >
                More about our approach
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="relative">
            <div className="overflow-hidden rounded-panel border border-ink-900/10 bg-ink-900/5">
              <video
                src="/gallery/1.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="aspect-[4/5] w-full object-cover md:aspect-[4/3]"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 hidden rounded-card border border-ink-900/10 bg-paper-pure px-6 py-5 shadow-lift md:block">
              <p className="font-display text-2xl text-ink-900">Ages 3–12</p>
              <p className="mt-1 text-sm text-muted-on-light">Every session age-tuned</p>
            </div>
          </Reveal>
        </div>
      </PaperSection>

      {/* Services */}
      <DarkSection>
        <SectionHeading
          eyebrow="Our services"
          title="Four ways we show up"
          lead="Pick the shape that fits your term, your budget and your room."
          className="max-w-2xl"
        />

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={(index % 2) * 0.08}>
              <article className="card-dark group h-full p-9 transition-colors duration-500 hover:border-brand-400/35">
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-brand-400">
                    <service.icon size={20} strokeWidth={1.6} />
                  </span>
                  <span className="font-display text-sm text-paper/35">{service.index}</span>
                </div>

                <h3 className="mt-8 font-display text-h3 text-paper">{service.title}</h3>
                <p className="mt-3.5 text-[0.95rem] leading-relaxed text-muted-on-dark">
                  {service.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </DarkSection>

      <Marquee items={['Draw', 'Paint', 'Print', 'Build', 'Imagine', 'Make a mess', 'Start again']} />

      <Manifesto />

      {/* How it works */}
      <PaperSection>
        <SectionHeading
          tone="light"
          eyebrow="How it works"
          title="Three steps, and we take the rest"
          className="max-w-2xl"
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-card bg-ink-900/10 md:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.08} className="bg-paper p-9">
              <span className="font-display text-4xl text-brand-600">{step.number}</span>
              <h3 className="mt-6 font-display text-h3 text-ink-900">{step.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-on-light">{step.body}</p>
            </Reveal>
          ))}
        </div>
      </PaperSection>

      {/* Gallery */}
      <DarkSection>
        <SectionHeading
          eyebrow="Gallery"
          title="What the children made"
          lead="Real work from real sessions — no templates, no two the same."
          className="mb-16 max-w-2xl"
        />
        <GalleryStrip />
      </DarkSection>

      {/* Closing CTA */}
      <DarkSection className="text-center">
        <Reveal>
          <Eyebrow className="mx-auto">Ready when you are</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mx-auto mt-9 max-w-3xl font-display text-h1 text-paper">
            Bring the studio to your school.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-7 max-w-lg text-lead text-muted-on-dark">
            Tell us the age group and the date. We will come back with a plan.
          </p>
        </Reveal>
        <Reveal delay={0.24} className="mt-12 flex flex-wrap justify-center gap-3">
          <ButtonLink to="/contact">
            Contact us
            <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </ButtonLink>
          <ButtonLink to="/events" variant="outlineDark">
            Explore events
          </ButtonLink>
        </Reveal>
      </DarkSection>
    </div>
  );
}
