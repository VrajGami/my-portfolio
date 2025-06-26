import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Preload, useGLTF, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import CanvasLoader from '../Loader';

function Constellation({ scrollY, scrollContainer }) {
  const { scene } = useGLTF('./need_some_space/scene.gltf');
  const root = useRef();

  React.useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    scene.position.sub(center);
    root.current.add(scene);
  }, [scene]);

  useFrame(() => {
    if (root.current) {
       const el = scrollContainer.current;
        const maxScroll = el
        ? el.scrollHeight - el.clientHeight
     : 0;
      const t = maxScroll > 0 ? scrollY.current / maxScroll : 0;
      root.current.rotation.y = t * Math.PI * 2;
    }
  });

  return <group ref={root} scale={35} />;
}

function ScrollZoom({ scrollY }) {
  const { camera } = useThree();
  const idleTimeRef = useRef(0);
  const clock = useRef(new THREE.Clock());
  const idle = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      idleTimeRef.current = 0;
      idle.current = false;
      scrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  useFrame(() => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const t = max > 0 ? scrollY.current / max : 0;
    const targetZ = idle.current
      ? 1 + Math.sin(clock.current.getElapsedTime() * 0.5) * 0.5
      : 5 - t * 10;

    camera.position.z += (targetZ - camera.position.z) * (idle.current ? 0.2 : 0.05);

    idleTimeRef.current += clock.current.getDelta();
    if (idleTimeRef.current > 2) idle.current = true;
  });

  return null;
}

function Controls() {
  const controls = useRef();
  const { camera, gl } = useThree();
  useFrame(() => controls.current?.update());
  return (
    <OrbitControls
      ref={controls}
      args={[camera, gl.domElement]}
      enableZoom={false}
      enablePan={false}
      autoRotate
      autoRotateSpeed={0.3}
      dampingFactor={0.1}
      enableDamping
    />
  );
}

export default function ConstellationCanvas({ scrollY , scrollContainer}) {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 55, near: 0.1, far: 1000 }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        pointerEvents: 'none',
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <ambientLight intensity={0.3} />
      <hemisphereLight intensity={0.2} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={0.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight intensity={0.3} />

      <Suspense fallback={<CanvasLoader />}>
       <Constellation scrollY={scrollY}  scrollContainer={scrollContainer}/>

        <Preload all />
      </Suspense>

      <ScrollZoom scrollY={scrollY} />
      <Controls />
    </Canvas>
  );
}
