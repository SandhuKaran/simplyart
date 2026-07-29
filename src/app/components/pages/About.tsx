import { ArrowUpRight, Compass, HandHeart, Lightbulb, Users } from 'lucide-react';

import { Reveal } from '../site/Reveal';
import { ButtonLink, DarkSection, Eyebrow, PaperSection, SectionHeading } from '../site/Primitives';
import { PageHero } from '../site/PageHero';

const values = [
  {
    icon: HandHeart,
    title: 'Care',
    body: 'Small groups, patient instructors, and enough time for a child to change their mind.',
  },
  {
    icon: Users,
    title: 'Community',
    body: 'We work alongside teachers and parents rather than dropping in and disappearing.',
  },
  {
    icon: Lightbulb,
    title: 'Curiosity',
    body: 'Open-ended prompts. There is no finished example on the wall to copy.',
  },
  {
    icon: Compass,
    title: 'Craft',
    body: 'Real materials, real technique. Children can tell when they are being given the cheap version.',
  },
];

const principles = [
  'Explore materials at their own pace',
  'Make independent creative choices',
  'Learn through hands-on experience',
  'Develop fine motor skills naturally',
  'Build confidence through self-expression',
];

const reasons = [
  { title: 'Turnkey', body: 'Everything for a complete art experience arrives with us.' },
  { title: 'Flexible', body: 'Programs shaped around your calendar, not ours.' },
  { title: 'Experienced', body: 'Practising artists who genuinely like working with children.' },
  { title: 'Age-tuned', body: 'Activities calibrated to each grade level.' },
  { title: 'Mess-free for you', body: 'We handle setup and we handle cleanup.' },
  { title: 'Memorable', body: 'Students leave with finished work and a story.' },
];

export function About() {
  return (
    <div className="relative">
      <PageHero
        eyebrow="About SIMPLYART"
        title={
          <>
            We are the studio
            <br />
            <span className="text-brand-400">that travels.</span>
          </>
        }
        lead="A small Ontario team convinced that every child deserves real materials, real technique, and a morning where the only right answer is their own."
      />

      {/* Mission */}
      <PaperSection>
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow tone="light" className="mx-auto">
            Our mission
          </Eyebrow>
          <p className="mt-9 font-display text-h2 leading-[1.1] text-ink-900">
            Bring positive, hands-on art directly to the rooms where children already are —
            and leave them more confident than we found them.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-px overflow-hidden rounded-card bg-ink-900/10 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.06} className="bg-paper p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <value.icon size={19} strokeWidth={1.6} />
              </span>
              <h3 className="mt-7 font-display text-h3 text-ink-900">{value.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-on-light">{value.body}</p>
            </Reveal>
          ))}
        </div>
      </PaperSection>

      {/* Montessori */}
      <DarkSection>
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-panel border border-white/10">
              <video
                src="/gallery/2.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="aspect-[4/5] w-full object-cover md:aspect-[4/3]"
              />
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Our approach"
              title={
                <>
                  Aligned to the
                  <br />
                  Montessori method
                </>
              }
              lead="Our sessions borrow the parts of Montessori that matter most in a studio: autonomy, repetition, and materials a child can be trusted with."
            />

            <ul className="mt-12">
              {principles.map((principle, index) => (
                <Reveal key={principle} delay={index * 0.05}>
                  <li className="flex items-baseline gap-5 border-t border-white/8 py-4 last:border-b">
                    <span className="font-display text-sm text-brand-400/70">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[1.02rem] text-paper/85">{principle}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </DarkSection>

      {/* Why schools choose us */}
      <PaperSection>
        <SectionHeading
          tone="light"
          eyebrow="Why schools choose us"
          title="The parts that make it easy"
          className="max-w-2xl"
        />

        <div className="mt-16 grid gap-x-14 sm:grid-cols-2">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={(index % 2) * 0.06}>
              <div className="flex items-baseline gap-6 border-t border-ink-900/10 py-7">
                <span className="font-display text-sm text-brand-600">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display text-h3 text-ink-900">{reason.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-on-light">
                    {reason.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </PaperSection>

      <DarkSection className="text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-display text-h1 text-paper">
            Come see a session.
          </h2>
        </Reveal>
        <Reveal delay={0.12} className="mt-11 flex flex-wrap justify-center gap-3">
          <ButtonLink to="/contact">
            Get in touch
            <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </ButtonLink>
          <ButtonLink to="/programs" variant="outlineDark">
            Browse programs
          </ButtonLink>
        </Reveal>
      </DarkSection>
    </div>
  );
}
