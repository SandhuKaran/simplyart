import { Outlet } from 'react-router';

import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { ScrollProgress } from './site/ScrollProgress';
import { SceneCanvas } from '../three/SceneCanvas';

export function Root() {
  return (
    <div className="relative min-h-screen bg-ink-950 font-sans text-paper">
      {/* The 3D corridor lives behind everything and persists across routes. */}
      <SceneCanvas />

      <ScrollToTop />
      <ScrollProgress />
      <Navigation />

      <div className="relative z-10 flex min-h-screen flex-col">
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
