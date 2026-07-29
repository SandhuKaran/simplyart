import { useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { clone as cloneSkinned } from 'three/examples/jsm/utils/SkeletonUtils.js';
import * as THREE from 'three';

import { pointerState, scrollState } from './scroll';
import {
  DRACO_PATH,
  FRAMING_DISTANCE,
  MODEL_URLS,
  propWorldZ,
  type SceneProp,
} from './sceneConfig';

const DEG = Math.PI / 180;

/**
 * Bounding box that understands skinning.
 *
 * `Box3.setFromObject` transforms a skinned mesh's *rest pose* box by the mesh
 * node's matrix, which ignores the bones entirely — for a rigged model like
 * batman.glb that is off by a factor of seven and puts the model nowhere near
 * where you placed it. `SkinnedMesh.computeBoundingBox` walks the posed
 * vertices instead, so we use it wherever a skeleton is involved.
 */
function measure(object: THREE.Object3D) {
  object.updateMatrixWorld(true);

  const bounds = new THREE.Box3();
  bounds.makeEmpty();

  object.traverse((child) => {
    const mesh = child as THREE.Mesh;
    if (!mesh.isMesh || !mesh.geometry) return;

    const skinned = child as THREE.SkinnedMesh;
    if (skinned.isSkinnedMesh) {
      skinned.computeBoundingBox();
      if (skinned.boundingBox) {
        bounds.union(skinned.boundingBox.clone().applyMatrix4(skinned.matrixWorld));
      }
      return;
    }

    if (!mesh.geometry.boundingBox) mesh.geometry.computeBoundingBox();
    if (mesh.geometry.boundingBox) {
      bounds.union(mesh.geometry.boundingBox.clone().applyMatrix4(mesh.matrixWorld));
    }
  });

  return bounds;
}

/**
 * One prop in the corridor. It holds a fixed world Z; the camera flying past is
 * what gives it its entrance, sweep and exit. Everything else here is small
 * secondary motion: a slow spin, a gentle bob and a touch of pointer parallax.
 */
export function FloatingModel({
  prop,
  reducedMotion,
}: {
  prop: SceneProp;
  reducedMotion: boolean;
}) {
  const { scene } = useGLTF(MODEL_URLS[prop.key], DRACO_PATH);
  const camera = useThree((state) => state.camera) as THREE.PerspectiveCamera;

  const outer = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Group>(null);
  const seed = useMemo(() => Math.random() * Math.PI * 2, []);

  // Models arrive at wildly different scales and origins, so normalise every one
  // to a known size centred on its own bounding box.
  const object = useMemo(() => {
    const copy = cloneSkinned(scene);

    const bounds = measure(copy);
    const center = bounds.getCenter(new THREE.Vector3());
    const dimensions = bounds.getSize(new THREE.Vector3());
    const largest = Math.max(dimensions.x, dimensions.y, dimensions.z) || 1;

    copy.traverse((child) => {
      const mesh = child as THREE.Mesh;
      if (!mesh.isMesh) return;
      // The corridor is long and the props are small; culling by their (skinned,
      // unreliable) bounds costs more than it saves.
      mesh.frustumCulled = false;
      const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
      materials.forEach((material) => {
        const standard = material as THREE.MeshStandardMaterial;
        if (standard.isMeshStandardMaterial) standard.envMapIntensity = 1.15;
      });
    });

    // Centre by shifting a wrapper rather than the model, so skinned hierarchies
    // keep the transforms their bones expect.
    const centred = new THREE.Group();
    centred.add(copy);
    copy.position.sub(center);

    const scaled = new THREE.Group();
    scaled.add(centred);
    scaled.scale.setScalar(prop.size / largest);
    return scaled;
  }, [scene, prop.size]);

  const worldZ = useMemo(() => propWorldZ(prop.at), [prop.at]);

  useFrame((state, delta) => {
    const group = outer.current;
    if (!group) return;

    group.position.z = worldZ;

    const distance = camera.position.z - worldZ;
    // Fog swallows anything past its far plane, so there is nothing to draw.
    group.visible = distance > 0.8 && distance < 52;
    if (!group.visible || !inner.current) return;

    // Place the prop on a rail against the *visible* frame rather than at a
    // fixed world X. Far away it hugs a corner, well clear of the copy; as the
    // camera closes in it slides outward and sweeps out of shot, instead of
    // ploughing through the middle of the headline.
    const halfHeight = Math.tan((camera.fov * DEG) / 2) * distance;
    const halfWidth = halfHeight * camera.aspect;
    const approach = THREE.MathUtils.clamp(distance / FRAMING_DISTANCE, 0, 1);
    const framing = prop.spread + (1.8 - prop.spread) * (1 - approach);

    group.position.x = prop.side * halfWidth * framing;

    const time = state.clock.elapsedTime;
    const bob = reducedMotion ? 0 : Math.sin(time * 0.55 + seed) * 0.28;
    group.position.y = halfHeight * prop.y * 0.78 + bob;

    if (reducedMotion) {
      inner.current.rotation.set(prop.tilt[0], prop.tilt[1], prop.tilt[2]);
      return;
    }

    inner.current.rotation.y += delta * prop.spin;
    inner.current.rotation.x =
      prop.tilt[0] + Math.sin(time * 0.4 + seed) * 0.08 + pointerState.y * 0.06;
    inner.current.rotation.z =
      prop.tilt[2] +
      Math.cos(time * 0.35 + seed) * 0.05 +
      THREE.MathUtils.clamp(scrollState.velocity * 0.35, -0.18, 0.18);
  });

  return (
    <group ref={outer}>
      <group ref={inner} rotation={prop.tilt}>
        <primitive object={object} />
      </group>
    </group>
  );
}

export function preloadModels(keys: SceneProp['key'][]) {
  keys.forEach((key) => useGLTF.preload(MODEL_URLS[key], DRACO_PATH));
}
