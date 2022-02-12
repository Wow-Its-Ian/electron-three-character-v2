import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, Stars } from '@react-three/drei';

import Lights from './Three/Lights';
import Archer from './Three/GLTF/Archer';

export default function Game() {
  return (
    <Canvas>
      <color attach="background" args={['gray']} />
      <OrbitControls />
      <Lights />
      <Suspense fallback={null}>
        <Archer />
      </Suspense>
    </Canvas>
  );
}
