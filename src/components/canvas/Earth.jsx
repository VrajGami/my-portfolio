import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const EarthModel = () => {

 const earth = useGLTF('./planet/scene.gltf');
  return (
    <primitive scale={2.5} position-y={0} position-x={0} object={earth.scene} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
 
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <EarthModel />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};


export default EarthCanvas;
