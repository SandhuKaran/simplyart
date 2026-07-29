import { useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

import { scrollState } from './scroll';
import { CAMERA_START_Z, CORRIDOR_LENGTH } from './sceneConfig';

const STAR_TINTS = ['#ffffff', '#d9f7e9', '#e2d7ff', '#ffeecb'];

/**
 * The far field: a static cloud spanning the whole corridor. It never moves —
 * the sense of travel comes entirely from the camera flying through it.
 */
/**
 * Soft round sprite for the point clouds. Raw `pointsMaterial` draws hard
 * squares, which read as compression artefacts the moment a mote gets close to
 * the camera.
 */
function useMoteTexture() {
  return useMemo(() => {
    const size = 64;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;

    const context = canvas.getContext('2d')!;
    const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.4, 'rgba(255,255,255,0.55)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    context.fillStyle = gradient;
    context.fillRect(0, 0, size, size);

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }, []);
}

function DeepField({ count }: { count: number }) {
  const mote = useMoteTexture();

  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const tint = new THREE.Color();
    const depth = CORRIDOR_LENGTH + 40;

    for (let i = 0; i < count; i += 1) {
      // Push stars away from the middle of frame so they read as surroundings
      // rather than confetti behind the headline.
      const radius = 6 + Math.pow(Math.random(), 0.55) * 26;
      const angle = Math.random() * Math.PI * 2;

      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = Math.sin(angle) * radius * 0.7;
      positions[i * 3 + 2] = CAMERA_START_Z + 12 - Math.random() * depth;

      tint.set(STAR_TINTS[(Math.random() * STAR_TINTS.length) | 0]);
      const brightness = 0.4 + Math.random() * 0.6;
      colors[i * 3] = tint.r * brightness;
      colors[i * 3 + 1] = tint.g * brightness;
      colors[i * 3 + 2] = tint.b * brightness;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return geo;
  }, [count]);

  return (
    <points geometry={geometry} frustumCulled={false}>
      <pointsMaterial
        vertexColors
        map={mote}
        size={0.12}
        sizeAttenuation
        transparent
        opacity={0.85}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        fog={false}
      />
    </points>
  );
}

/**
 * The near field: a small cloud that rides along with the camera and stretches
 * with scroll velocity, which is what actually sells "moving through space".
 */
function DustField({ count, reducedMotion }: { count: number; reducedMotion: boolean }) {
  const group = useRef<THREE.Group>(null);
  const material = useRef<THREE.PointsMaterial>(null);
  const camera = useThree((state) => state.camera);
  const mote = useMoteTexture();

  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const radius = 3 + Math.random() * 14;
      const angle = Math.random() * Math.PI * 2;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = Math.sin(angle) * radius * 0.8;
      positions[i * 3 + 2] = -Math.random() * 34;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [count]);

  useFrame((_, delta) => {
    if (!group.current) return;

    // Follow the camera so the dust always surrounds the viewer.
    group.current.position.z = camera.position.z;

    if (reducedMotion) return;

    group.current.rotation.z += delta * 0.012;

    if (material.current) {
      const warp = Math.min(Math.abs(scrollState.velocity) * 2.2, 1);
      material.current.size = 0.11 + warp * 0.07;
      material.current.opacity = 0.28 + warp * 0.4;
    }
  });

  return (
    <group ref={group}>
      <points geometry={geometry} frustumCulled={false}>
        <pointsMaterial
          ref={material}
          map={mote}
          color="#bfe9d6"
          size={0.11}
          sizeAttenuation
          transparent
          opacity={0.3}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          fog={false}
        />
      </points>
    </group>
  );
}

function useGlowTexture() {
  return useMemo(() => {
    const size = 256;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;

    const context = canvas.getContext('2d')!;
    const gradient = context.createRadialGradient(
      size / 2,
      size / 2,
      0,
      size / 2,
      size / 2,
      size / 2,
    );
    gradient.addColorStop(0, 'rgba(255,255,255,0.9)');
    gradient.addColorStop(0.32, 'rgba(255,255,255,0.28)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    context.fillStyle = gradient;
    context.fillRect(0, 0, size, size);

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }, []);
}

/** Soft colour haze along the corridor, so the dark never reads as flat black. */
function Nebulae() {
  const texture = useGlowTexture();

  const clouds = useMemo(
    () => [
      { color: '#1fc77c', at: 0.08, x: -16, y: 7, scale: 46, opacity: 0.2 },
      { color: '#9a78f5', at: 0.3, x: 18, y: -6, scale: 54, opacity: 0.22 },
      { color: '#f0ae33', at: 0.55, x: -19, y: -8, scale: 42, opacity: 0.14 },
      { color: '#7c56e0', at: 0.78, x: 16, y: 9, scale: 58, opacity: 0.2 },
      { color: '#1fc77c', at: 0.97, x: -13, y: -5, scale: 50, opacity: 0.16 },
    ],
    [],
  );

  return (
    <>
      {clouds.map((cloud, index) => (
        <sprite
          key={index}
          position={[cloud.x, cloud.y, CAMERA_START_Z - CORRIDOR_LENGTH * cloud.at - 14]}
          scale={[cloud.scale, cloud.scale, 1]}
        >
          <spriteMaterial
            map={texture}
            color={cloud.color}
            transparent
            opacity={cloud.opacity}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
            fog={false}
          />
        </sprite>
      ))}
    </>
  );
}

export function Starfield({
  density = 1,
  reducedMotion = false,
}: {
  density?: number;
  reducedMotion?: boolean;
}) {
  return (
    <>
      <Nebulae />
      <DeepField count={Math.round(1600 * density)} />
      <DustField count={Math.round(320 * density)} reducedMotion={reducedMotion} />
    </>
  );
}
