/**
 * Scene choreography.
 *
 * The site is one long corridor of space. Scrolling flies the camera forward
 * along -Z; each prop sits at a fixed point in that corridor and gets swept past
 * the edge of frame as you reach it. `at` is the scroll fraction at which a prop
 * makes its closest approach, so choreography is expressed in page terms rather
 * than world units.
 */

export type ModelKey =
  | 'paint-brush'
  | 'balloons'
  | 'hello-kitty'
  | 'batman'
  | 'spiderman';

export interface SceneProp {
  key: ModelKey;
  /** Scroll fraction (0..1) of closest approach. */
  at: number;
  /** Which side of frame it drifts past. */
  side: -1 | 1;
  /** Resting placement as a fraction of the visible half-width, once far away. */
  spread: number;
  /** Vertical placement as a fraction of the visible half-height (-1..1). */
  y: number;
  /** Largest dimension after normalisation, in world units. */
  size: number;
  /** Idle spin around Y, radians per second. */
  spin: number;
  /** Resting tilt applied before the idle spin. */
  tilt: [number, number, number];
  /** Skipped on small screens / low-power devices. */
  heavy?: boolean;
}

/** World units the camera travels across a full page scroll. */
export const CORRIDOR_LENGTH = 82;
/** Camera Z at scroll 0. */
export const CAMERA_START_Z = 6;
/** How close a prop gets to the camera at its `at` point. */
export const CLOSEST_APPROACH = 3.4;
/** Distance used to decide horizontal placement, i.e. where a prop reads best. */
export const FRAMING_DISTANCE = 13;

export function propWorldZ(at: number) {
  return CAMERA_START_Z - CORRIDOR_LENGTH * at - CLOSEST_APPROACH;
}

export function cameraZ(progress: number) {
  return CAMERA_START_Z - CORRIDOR_LENGTH * progress;
}

// Copy is left-aligned almost everywhere, so left-hand props are pushed further
// out than right-hand ones. `at` values are chosen so each prop peaks inside a
// dark section — a prop making its closest approach behind an opaque paper panel
// is a prop nobody ever sees.
const home: SceneProp[] = [
  { key: 'paint-brush', at: 0.1, side: 1, spread: 0.59, y: 0.05, size: 3.6, spin: 0.22, tilt: [0.3, 0.6, -0.45] },
  { key: 'balloons', at: 0.4, side: -1, spread: 0.94, y: 0.5, size: 4.4, spin: 0.16, tilt: [0.1, -0.4, 0.12] },
  { key: 'hello-kitty', at: 0.6, side: 1, spread: 0.74, y: -0.4, size: 3.2, spin: 0.3, tilt: [0.12, -0.5, 0.08] },
  { key: 'batman', at: 0.85, side: -1, spread: 0.9, y: 0.42, size: 3.4, spin: 0.26, tilt: [0.08, 0.7, 0.1] },
  { key: 'spiderman', at: 0.96, side: 1, spread: 0.76, y: -0.28, size: 3.6, spin: 0.24, tilt: [0.1, -0.8, -0.1], heavy: true },
];

const about: SceneProp[] = [
  { key: 'hello-kitty', at: 0.1, side: 1, spread: 0.62, y: 0.1, size: 3.3, spin: 0.28, tilt: [0.12, -0.6, 0.06] },
  { key: 'balloons', at: 0.52, side: -1, spread: 0.92, y: 0.48, size: 4.2, spin: 0.15, tilt: [0.08, 0.4, -0.1] },
  { key: 'paint-brush', at: 0.94, side: 1, spread: 0.74, y: -0.36, size: 3.4, spin: 0.2, tilt: [0.35, -0.5, 0.4] },
];

const programs: SceneProp[] = [
  { key: 'paint-brush', at: 0.1, side: 1, spread: 0.6, y: 0.08, size: 3.6, spin: 0.21, tilt: [0.3, 0.5, -0.4] },
  { key: 'batman', at: 0.42, side: -1, spread: 0.9, y: 0.44, size: 3.3, spin: 0.25, tilt: [0.06, -0.7, 0.08] },
  { key: 'balloons', at: 0.95, side: 1, spread: 0.76, y: -0.3, size: 4.2, spin: 0.16, tilt: [0.1, 0.3, 0.1] },
];

const events: SceneProp[] = [
  { key: 'balloons', at: 0.1, side: 1, spread: 0.62, y: 0.12, size: 4.4, spin: 0.17, tilt: [0.1, -0.3, -0.1] },
  { key: 'spiderman', at: 0.42, side: -1, spread: 0.9, y: 0.4, size: 3.5, spin: 0.23, tilt: [0.1, 0.8, 0.1], heavy: true },
  { key: 'hello-kitty', at: 0.72, side: 1, spread: 0.74, y: -0.38, size: 3.2, spin: 0.29, tilt: [0.12, -0.5, 0.05] },
];

const contact: SceneProp[] = [
  { key: 'paint-brush', at: 0.1, side: 1, spread: 0.6, y: 0.08, size: 3.6, spin: 0.2, tilt: [0.32, 0.55, -0.42] },
  { key: 'hello-kitty', at: 0.92, side: -1, spread: 0.9, y: 0.4, size: 3.2, spin: 0.28, tilt: [0.1, -0.55, 0.06] },
];

export const sceneByRoute: Record<string, SceneProp[]> = {
  '/': home,
  '/about': about,
  '/programs': programs,
  '/events': events,
  '/contact': contact,
};

export function propsForRoute(pathname: string): SceneProp[] {
  return sceneByRoute[pathname] ?? home;
}

export const MODEL_URLS: Record<ModelKey, string> = {
  'paint-brush': '/models/paint-brush.glb',
  balloons: '/models/balloons.glb',
  'hello-kitty': '/models/hello-kitty.glb',
  batman: '/models/batman.glb',
  spiderman: '/models/spiderman.glb',
};

export const DRACO_PATH = '/draco/';
