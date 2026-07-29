import { Reveal } from './Reveal';

/**
 * Asymmetric editorial grid.
 *
 * Heights are set per *row* rather than per item: a 7-column and a 5-column cell
 * sharing one aspect ratio would render at different heights, and the grid row
 * would stretch to the taller one, leaving a hole under the narrow cell. Fixing
 * the row height and letting `object-cover` do the cropping keeps the rhythm
 * varied without the gaps.
 */
const frames = [
  { src: '/gallery/1.jpg', span: 'md:col-span-7', height: 'md:h-[360px]', caption: 'Rainbow resist painting' },
  { src: '/gallery/2.jpg', span: 'md:col-span-5', height: 'md:h-[360px]', caption: 'Mixed-media collage' },
  { src: '/gallery/3.jpg', span: 'md:col-span-5', height: 'md:h-[420px]', caption: 'Colour theory, ages 5–7' },
  { src: '/gallery/4.jpg', span: 'md:col-span-7', height: 'md:h-[420px]', caption: 'School residency, Ontario' },
  { src: '/gallery/5.jpg', span: 'md:col-span-6', height: 'md:h-[320px]', caption: 'Texture study' },
  { src: '/gallery/6.jpg', span: 'md:col-span-6', height: 'md:h-[320px]', caption: 'Finished pieces, ready to go home' },
];

export function GalleryStrip() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-12 md:gap-4">
      {frames.map((frame, index) => (
        <Reveal
          key={frame.src}
          delay={(index % 2) * 0.08}
          // `bg-ink-800` keeps the cell reading as a frame while the lazy image
          // is still in flight, rather than as a hole in the layout.
          className={`${frame.span} ${frame.height} group relative h-[260px] overflow-hidden rounded-card border border-white/8 bg-ink-800 sm:h-[300px]`}
        >
          <img
            src={frame.src}
            alt={frame.caption}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-out-soft will-change-transform group-hover:scale-[1.06]"
          />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <span className="text-sm font-medium text-paper/90">{frame.caption}</span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
