import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, Check, Instagram, Mail, MapPin, Minus, Plus } from 'lucide-react';

import { Reveal } from '../site/Reveal';
import { DarkSection, Eyebrow, PaperSection, SectionHeading, cx } from '../site/Primitives';
import { PageHero } from '../site/PageHero';

const eventOptions = [
  { value: 'school', label: 'Weekly school program' },
  { value: 'birthday', label: 'Birthday party' },
  { value: 'workshop', label: 'Workshop series' },
  { value: 'pd-day', label: 'PD day camp' },
  { value: 'after-school', label: 'After school program' },
  { value: 'event', label: 'Special event' },
  { value: 'other', label: 'Something else' },
];

const faqs = [
  {
    q: 'What areas do you serve?',
    a: 'We serve schools and communities across Ontario. Get in touch and we will confirm availability in your area.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'Two to four weeks is comfortable, especially for weekends and larger events. We will always try to accommodate a late request.',
  },
  {
    q: 'What age groups do you work with?',
    a: 'Programs are designed for ages 3 to 12, with the project and pacing tuned to each group.',
  },
  {
    q: 'Do you provide all materials?',
    a: 'Yes. Everything for a complete art experience arrives with us — supplies, protective coverings and cleanup.',
  },
  {
    q: 'Can you accommodate large groups?',
    a: 'We scale from intimate parties to full school events by running multiple stations with additional instructors.',
  },
];

const fieldClass =
  'w-full border-b border-ink-900/15 bg-transparent py-3.5 text-[1.02rem] text-ink-900 transition-colors duration-300 placeholder:text-ink-900/30 focus:border-brand-600 focus:outline-none';

const labelClass = 'block text-eyebrow font-semibold uppercase text-ink-900/50';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSent(true);
    setFormData({ name: '', email: '', phone: '', eventType: '', message: '' });
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex min-h-[420px] flex-col items-start justify-center"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-700">
          <Check size={20} strokeWidth={2} />
        </span>
        <h3 className="mt-8 font-display text-h2 text-ink-900">Message received.</h3>
        <p className="mt-4 max-w-sm text-lead text-muted-on-light">
          Thank you — we will come back to you within two working days with next steps.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-9 border-b border-ink-900/20 pb-1 text-sm font-semibold text-ink-900 transition-colors hover:border-brand-600 hover:text-brand-700"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-9">
      <div>
        <label htmlFor="name" className={labelClass}>
          Your name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={fieldClass}
          placeholder="Jane Doe"
        />
      </div>

      <div className="grid gap-9 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={fieldClass}
            placeholder="jane@school.ca"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={fieldClass}
            placeholder="Optional"
          />
        </div>
      </div>

      <div>
        <label htmlFor="eventType" className={labelClass}>
          I'm interested in *
        </label>
        <select
          id="eventType"
          name="eventType"
          value={formData.eventType}
          onChange={handleChange}
          required
          className={cx(fieldClass, 'appearance-none')}
        >
          <option value="">Select an option</option>
          {eventOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Tell us more *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className={cx(fieldClass, 'resize-none')}
          placeholder="Preferred dates, age group, number of children…"
        />
      </div>

      <button
        type="submit"
        className="group inline-flex items-center gap-2.5 rounded-full bg-ink-900 px-8 py-4 text-[0.95rem] font-semibold tracking-tight text-paper transition-all duration-300 ease-out-soft hover:-translate-y-0.5 hover:bg-brand-600"
      >
        Send message
        <ArrowUpRight
          size={17}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </button>
    </form>
  );
}

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border-t border-white/8">
      {faqs.map((faq, index) => {
        const open = openIndex === index;
        return (
          <Reveal key={faq.q} delay={index * 0.04}>
            <div className="border-b border-white/8">
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : index)}
                aria-expanded={open}
                className="flex w-full items-center justify-between gap-8 py-7 text-left"
              >
                <span
                  className={cx(
                    'font-display text-[1.3rem] transition-colors duration-300 md:text-[1.5rem]',
                    open ? 'text-brand-400' : 'text-paper',
                  )}
                >
                  {faq.q}
                </span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/12 text-paper/70">
                  {open ? <Minus size={15} /> : <Plus size={15} />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-2xl pb-8 text-[1.02rem] leading-relaxed text-muted-on-dark">
                      {faq.a}
                    </p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

export function Contact() {
  return (
    <div className="relative">
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Tell us about
            <br />
            <span className="text-brand-400">your room.</span>
          </>
        }
        lead="Age group, date, headcount — that is all we need to come back with a plan and a price."
      />

      {/* Form + details */}
      <PaperSection>
        <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
          <div>
            <Eyebrow tone="light">Send a message</Eyebrow>
            <h2 className="mb-14 mt-7 font-display text-h2 text-ink-900">
              Start the conversation
            </h2>
            <ContactForm />
          </div>

          <div className="lg:pt-4">
            <Eyebrow tone="light">Direct</Eyebrow>

            <ul className="mt-8">
              <li className="flex items-start gap-5 border-t border-ink-900/10 py-6">
                <MapPin size={17} className="mt-1 shrink-0 text-brand-600" strokeWidth={1.7} />
                <div>
                  <p className="font-medium text-ink-900">Where we work</p>
                  <p className="mt-1 text-[0.95rem] text-muted-on-light">
                    Schools and venues across Ontario, Canada
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-5 border-t border-ink-900/10 py-6">
                <Mail size={17} className="mt-1 shrink-0 text-brand-600" strokeWidth={1.7} />
                <div>
                  <p className="font-medium text-ink-900">Email</p>
                  <a
                    href="mailto:hello@simplyartacademy.com"
                    className="mt-1 block text-[0.95rem] text-muted-on-light transition-colors hover:text-brand-700"
                  >
                    hello@simplyartacademy.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-5 border-y border-ink-900/10 py-6">
                <Instagram size={17} className="mt-1 shrink-0 text-brand-600" strokeWidth={1.7} />
                <div>
                  <p className="font-medium text-ink-900">Instagram</p>
                  <a
                    href="https://www.instagram.com/simplyartacademy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-[0.95rem] text-muted-on-light transition-colors hover:text-brand-700"
                  >
                    @simplyartacademy
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-12 rounded-card bg-ink-900 p-9 text-paper">
              <h3 className="font-display text-h3">Office hours</h3>
              <p className="mt-5 text-[1.02rem] text-paper/85">Monday – Friday, 9:00 – 17:00</p>
              <p className="mt-2 text-sm text-paper/50">
                Weekend events available by appointment.
              </p>
            </div>
          </div>
        </div>
      </PaperSection>

      {/* FAQ */}
      <DarkSection>
        <SectionHeading
          eyebrow="Questions"
          title="Answered before you ask"
          className="mb-14 max-w-2xl"
        />
        <Faq />
      </DarkSection>
    </div>
  );
}
