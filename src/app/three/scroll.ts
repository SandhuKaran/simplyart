/**
 * Global scroll + pointer state, kept outside React on purpose.
 *
 * The 3D scene reads these every frame from inside `useFrame`, so driving them
 * through React state would mean a re-render per scroll event. A mutable module
 * object costs nothing and stays perfectly in sync with the render loop.
 */

export const scrollState = {
  /** Raw document scroll, 0 at the top, 1 at the bottom. */
  target: 0,
  /** Eased follower of `target` — what the scene actually uses. */
  current: 0,
  /** Progress units per second; drives the "warp" feel of the dust layer. */
  velocity: 0,
};

export const pointerState = {
  /** -1 (left) .. 1 (right) */
  x: 0,
  /** -1 (top) .. 1 (bottom) */
  y: 0,
};

export function trackViewport(): () => void {
  const readScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    scrollState.target = max > 8 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
  };

  const readPointer = (event: PointerEvent) => {
    pointerState.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointerState.y = (event.clientY / window.innerHeight) * 2 - 1;
  };

  readScroll();
  window.addEventListener('scroll', readScroll, { passive: true });
  window.addEventListener('resize', readScroll);
  window.addEventListener('pointermove', readPointer, { passive: true });

  // Route changes and lazily-loaded media change the page height without firing
  // resize, so watch the document itself.
  const observer = new ResizeObserver(readScroll);
  observer.observe(document.body);

  return () => {
    window.removeEventListener('scroll', readScroll);
    window.removeEventListener('resize', readScroll);
    window.removeEventListener('pointermove', readPointer);
    observer.disconnect();
  };
}

/** Frame-rate independent easing toward `target`. Call once per frame. */
export function advanceScroll(delta: number) {
  const previous = scrollState.current;
  const step = 1 - Math.pow(0.0016, Math.min(delta, 1 / 20));
  scrollState.current += (scrollState.target - scrollState.current) * step;
  scrollState.velocity = (scrollState.current - previous) / Math.max(delta, 1e-4);
}

export function resetScrollState() {
  scrollState.target = 0;
  scrollState.current = 0;
  scrollState.velocity = 0;
}
