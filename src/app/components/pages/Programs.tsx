import { ArrowUpRight } from 'lucide-react';

import { Reveal } from '../site/Reveal';
import { ButtonLink, DarkSection, PaperSection, SectionHeading } from '../site/Primitives';
import { PageHero } from '../site/PageHero';

const programs = [
  {
    number: '01',
    title: 'Weekly school program',
    accent: 'var(--color-brand-400)',
    description:
      'A recurring studio session brought to your classroom, building skill and confidence across the school year.',
    meta: ['45–60 min sessions', 'All materials included', 'Curriculum aligned', 'Age-appropriate projects'],
  },
  {
    number: '02',
    title: 'Special events',
    accent: 'var(--color-clay-400)',
    description:
      'Birthdays, school celebrations and community days, built around one memorable thing to make.',
    meta: ['2–3 hour sessions', 'Themed activities', 'Decorations included', 'Take-home creations'],
  },
  {
    number: '03',
    title: 'Workshop series',
    accent: 'var(--color-sand-400)',
    description:
      'Multi-week intensives that go deep on a single technique — printmaking, clay, colour, portraiture.',
    meta: ['Multi-week series', 'Skill building focus', 'Advanced techniques', 'Portfolio development'],
  },
  {
    number: '04',
    title: 'PD day camps',
    accent: 'var(--color-orchid-400)',
    description:
      'Full-day art adventures on professional development days, so the studio stays open while school is out.',
    meta: ['Full day programs', 'Multiple projects', 'Snack breaks', 'Small group sizes'],
  },
  {
    number: '05',
    title: 'After school program',
    accent: 'var(--color-brand-300)',
    description:
      'Regular after-school enrichment — a gentle extension of the day where making is the whole point.',
    meta: ['Weekly sessions', 'Drop-in friendly', 'Seasonal themes', 'Progress tracking'],
  },
  {
    number: '06',
    title: 'Private groups',
    accent: 'var(--color-orchid-300)',
    description:
      'Custom experiences for homeschool co-ops, playgroups and community organisations.',
    meta: ['Flexible timing', 'Custom themes', 'Your location or ours', 'Group discounts'],
  },
];

const included = [
  'All art supplies and materials',
  'Professional art instruction',
  'Complete setup and cleanup',
  'Age-appropriate project design',
  'Finished artwork to take home',
  'Photos for your newsletter',
];

const standards = [
  'Montessori-aligned approach',
  'Practising artists as instructors',
  'Scheduling around your calendar',
  'Ontario-based and local',
  'Trusted by public and private schools',
  'Consistent, repeatable quality',
];

function Checklist({ items, tone }: { items: string[]; tone: 'light' | 'dark' }) {
  return (
    <ul>
      {items.map((item, index) => (
        <Reveal key={item} delay={index * 0.04}>
          <li
            className={`flex items-baseline gap-5 py-4 last:border-b ${
              tone === 'light' ? 'border-t border-ink-900/10' : 'border-t border-white/8'
            }`}
          >
            <span
              className={`font-display text-sm ${
                tone === 'light' ? 'text-brand-600' : 'text-brand-400/70'
              }`}
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <span
              className={`text-[1.02rem] ${tone === 'light' ? 'text-ink-900/85' : 'text-paper/85'}`}
            >
              {item}
            </span>
          </li>
        </Reveal>
      ))}
    </ul>
  );
}

export function Programs() {
  return (
    <div className="relative">
      <PageHero
        eyebrow="Our programs"
        title={
          <>
            Six ways to put
            <br />
            <span className="text-brand-400">materials in their hands.</span>
          </>
        }
        lead="Every option below arrives complete: instructors, supplies, setup and cleanup. You choose the shape, we handle the rest."
      />

      {/* Program list */}
      <DarkSection>
        <div className="border-t border-white/8">
          {programs.map((program, index) => (
            <Reveal key={program.title} delay={index * 0.04}>
              <article className="group grid gap-6 border-b border-white/8 py-12 transition-colors duration-500 md:grid-cols-[auto_1fr_1.1fr] md:items-start md:gap-12">
                <div className="flex items-center gap-4 md:block">
                  <span
                    className="inline-block h-2 w-2 rounded-full transition-transform duration-500 group-hover:scale-150"
                    style={{ backgroundColor: program.accent }}
                  />
                  <span className="font-display text-sm text-paper/40 md:mt-4 md:block">
                    {program.number}
                  </span>
                </div>

                <h3 className="font-display text-[1.7rem] leading-tight text-paper transition-colors duration-500 group-hover:text-brand-400 md:text-[2rem]">
                  {program.title}
                </h3>

                <div>
                  <p className="text-[1.02rem] leading-relaxed text-muted-on-dark">
                    {program.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {program.meta.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 px-3.5 py-1.5 text-[0.8rem] text-paper/65"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </DarkSection>

      {/* Standard */}
      <PaperSection>
        <SectionHeading
          tone="light"
          eyebrow="The SIMPLYART standard"
          title="What's included, every time"
          className="max-w-2xl"
        />

        <div className="mt-16 grid gap-x-16 gap-y-4 md:grid-cols-2">
          <div>
            <h3 className="mb-6 text-eyebrow font-semibold uppercase text-ink-900/50">
              Every session includes
            </h3>
            <Checklist items={included} tone="light" />
          </div>
          <div>
            <h3 className="mb-6 text-eyebrow font-semibold uppercase text-ink-900/50">
              Why SIMPLYART
            </h3>
            <Checklist items={standards} tone="light" />
          </div>
        </div>
      </PaperSection>

      <DarkSection className="text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-display text-h1 text-paper">
            Not sure which one fits?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-7 max-w-lg text-lead text-muted-on-dark">
            Tell us the age group and how long you have. We will recommend the format that works.
          </p>
        </Reveal>
        <Reveal delay={0.18} className="mt-12 flex flex-wrap justify-center gap-3">
          <ButtonLink to="/contact">
            Get in touch
            <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </ButtonLink>
          <ButtonLink to="/events" variant="outlineDark">
            See events
          </ButtonLink>
        </Reveal>
      </DarkSection>
    </div>
  );
}
