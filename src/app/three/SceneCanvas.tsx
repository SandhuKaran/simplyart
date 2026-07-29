import { Component, Suspense, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Lightformer } from '@react-three/drei';
import { useLocation } from 'react-router';
import * as THREE from 'three';

import { FloatingModel } from './FloatingModel';
import { Starfield } from './Starfield';
import { advanceScroll, pointerState, resetScrollState, scrollState, trackViewport } from './scroll';
import { cameraZ, propsForRoute } from './sceneConfig';

/** Flies the camera down the corridor and adds a little pointer parallax. */
function CameraRig({ reducedMotion }: { reducedMotion: boolean }) {
  const camera = useThree((state) => state.camera);
  const lights = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    advanceScroll(delta);

    camera.position.z = cameraZ(scrollState.current);

    if (!reducedMotion) {
      camera.position.x += (pointerState.x * 0.5 - camera.position.x) * 0.045;
      camera.position.y += (-pointerState.y * 0.32 - camera.position.y) * 0.045;
      camera.rotation.z = THREE.MathUtils.clamp(scrollState.velocity * 0.08, -0.03, 0.03);
    }

    // The key lights ride with the camera so whatever is closest is always lit.
    if (lights.current) {
      lights.current.position.set(camera.position.x, camera.position.y, camera.position.z);
    }
  });

  return (
    <group ref={lights}>
      <directionalLight position={[3, 5, 2]} intensity={2.1} color="#fff6e8" />
      <pointLight position={[-6, 1, -2]} intensity={38} distance={26} decay={2} color="#1fc77c" />
      <pointLight position={[6, -2, -3]} intensity={34} distance={26} decay={2} color="#9a78f5" />
      <pointLight position={[0, 3, 3]} intensity={16} distance={18} decay={2} color="#ffffff" />
    </group>
  );
}

function Stage({
  pathname,
  reducedMotion,
  density,
  allowHeavy,
}: {
  pathname: string;
  reducedMotion: boolean;
  density: number;
  allowHeavy: boolean;
}) {
  const props = useMemo(
    () => propsForRoute(pathname).filter((prop) => allowHeavy || !prop.heavy),
    [pathname, allowHeavy],
  );

  return (
    <>
      <color attach="background" args={['#06050d']} />
      <fog attach="fog" args={['#06050d', 15, 50]} />

      <ambientLight intensity={0.55} />
      <CameraRig reducedMotion={reducedMotion} />

      <Environment resolution={256} frames={1}>
        <Lightformer intensity={2.4} position={[0, 5, -8]} scale={[16, 8, 1]} color="#fff3e2" />
        <Lightformer intensity={1.6} position={[-8, 0, 3]} scale={[10, 12, 1]} color="#1fc77c" />
        <Lightformer intensity={1.4} position={[8, 1, 3]} scale={[10, 12, 1]} color="#9a78f5" />
        <Lightformer intensity={0.9} form="ring" position={[0, -6, 2]} scale={9} color="#f7c55c" />
      </Environment>

      <Starfield density={density} reducedMotion={reducedMotion} />

      <Suspense fallback={null}>
        {props.map((prop) => (
          <FloatingModel key={`${pathname}-${prop.key}-${prop.at}`} prop={prop} reducedMotion={reducedMotion} />
        ))}
      </Suspense>
    </>
  );
}

/** A WebGL failure must never take the page down with it. */
class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

function useSceneQuality() {
  const [quality, setQuality] = useState({
    reducedMotion: false,
    density: 1,
    allowHeavy: true,
  });

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const compactQuery = window.matchMedia('(max-width: 820px)');

    const evaluate = () => {
      const compact = compactQuery.matches;
      const modest = (navigator.hardwareConcurrency ?? 8) <= 4;
      setQuality({
        reducedMotion: motionQuery.matches,
        density: compact || modest ? 0.45 : 1,
        allowHeavy: !compact && !modest,
      });
    };

    evaluate();
    motionQuery.addEventListener('change', evaluate);
    compactQuery.addEventListener('change', evaluate);
    return () => {
      motionQuery.removeEventListener('change', evaluate);
      compactQuery.removeEventListener('change', evaluate);
    };
  }, []);

  return quality;
}

export function SceneCanvas() {
  const { pathname } = useLocation();
  const { reducedMotion, density, allowHeavy } = useSceneQuality();

  useEffect(() => trackViewport(), []);

  // A new route scrolls to the top; without this the camera would fly all the
  // way back through the corridor first.
  useEffect(() => {
    resetScrollState();
  }, [pathname]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <SceneBoundary>
        <Canvas
          dpr={[1, 1.75]}
          gl={{ antialias: true, powerPreference: 'high-performance' }}
          camera={{ fov: 45, near: 0.1, far: 200, position: [0, 0, 6] }}
          performance={{ min: 0.5 }}
        >
          <Stage
            pathname={pathname}
            reducedMotion={reducedMotion}
            density={density}
            allowHeavy={allowHeavy}
          />
        </Canvas>
      </SceneBoundary>
    </div>
  );
}
