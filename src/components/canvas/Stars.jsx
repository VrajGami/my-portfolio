import React, { useRef, useState, useEffect, Suspense, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from "three";


const Stars = ({ mouse, lastMoveTime }) => {
  const ref = useRef();
  const numPoints = 5000;
  const sphere = random.inSphere(new Float32Array(numPoints * 3), { radius: 1.2 });
  const targetRotation = useRef(new THREE.Vector3(0, 0, Math.PI / 4));
  const idleSpeed = 0.0005;

  useFrame(() => {
    const now = Date.now();
    const timeSinceMove = now - lastMoveTime.current;
    const isIdle = timeSinceMove > 100;

    if (!ref.current) return;

    if (isIdle) {
      ref.current.rotation.y += idleSpeed;
    } else {
      const targetX = (mouse.current.y / window.innerHeight - 0.5) * Math.PI / 16;
      const targetY = (mouse.current.x / window.innerWidth - 0.5) * Math.PI / 16;

      targetRotation.current.x += (targetX - targetRotation.current.x) * 0.05;
      targetRotation.current.y += (targetY - targetRotation.current.y) * 0.05;

      ref.current.rotation.x = targetRotation.current.x;
      ref.current.rotation.y = targetRotation.current.y;
    }
  });

  return (
    <group>
      <points ref={ref}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={sphere}
            count={numPoints}
            itemSize={3}
          />
        </bufferGeometry>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
    </group>
  );
};

// Main Canvas Component
const StarsCanvas = () => {
    const mouse = useRef({ x: 0, y: 0 });
  const lastMoveTime = useRef(Date.now());
      useEffect(()=> {
        const handleMouseMove = (event) => {
              mouse.current = { x: event.clientX, y: event.clientY };
              lastMoveTime.current = Date.now(); 
        }

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
      }, [])


  return (
    
    <Canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
                zIndex: -9999,
        pointerEvents: 'none',
      }}
      camera={{ position: [0, 0, 1] }}
    >
      <Suspense fallback={null}>
        <Stars mouse={mouse} lastMoveTime={lastMoveTime}/>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default StarsCanvas;