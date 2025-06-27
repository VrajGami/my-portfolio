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

// Shooting Star Component
const ShootingStar = ({ id, startPos, speed, onDisappear }) => {
  const starRef = useRef();
  const trailRef = useRef();
  const initialPosition = useRef(new THREE.Vector3(...startPos));
  const trailLength = 0.3;
  const bounds = 3;

  useEffect(() => {
    if (starRef.current) {
      starRef.current.position.copy(initialPosition.current);
    }
  }, []);

  useEffect(() => {
    if (trailRef.current) {
      const geo = new THREE.BufferGeometry();
      const attr = new THREE.BufferAttribute(new Float32Array(6), 3);
      geo.setAttribute("position", attr);
      trailRef.current.geometry = geo;
    }
  }, []);

  useFrame(() => {
if (
    !starRef.current ||
    !trailRef.current ||
    !trailRef.current.geometry ||
    !trailRef.current.geometry.attributes.position ||
    !trailRef.current.geometry.attributes.position.array
  ) return;

    starRef.current.position.x += speed.x;
    starRef.current.position.y += speed.y;
    starRef.current.position.z += speed.z;

    const positions = trailRef.current.geometry.attributes.position.array;
    const { x, y, z } = starRef.current.position;
    positions[0] = x;
    positions[1] = y;
    positions[2] = z;
    positions[3] = x - speed.x * trailLength;
    positions[4] = y - speed.y * trailLength;
    positions[5] = z - speed.z * trailLength;
    trailRef.current.geometry.attributes.position.needsUpdate = true;

    if (
      Math.abs(x) > bounds ||
      Math.abs(y) > bounds ||
      Math.abs(z) > bounds
    ) {
      onDisappear(id);
    }
  });

  return (
    <>
      <mesh ref={starRef}>
        <sphereGeometry args={[0.005, 8, 8]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
      <line ref={trailRef}>
        <lineBasicMaterial transparent opacity={0.7} linewidth={2} />
      </line>
    </>
  );
};

// Manager for spawning shooting stars
const ShootingStarsManager = () => {
  const [shootingStars, setShootingStars] = useState([]);

  const handleStarDisappear = useCallback((idToRemove) => {
    setShootingStars((prev) => prev.filter((star) => star.id !== idToRemove));
  }, []);

  useEffect(() => {
    const spawnInterval = setInterval(() => {
      const x = (Math.random() - 0.5) * 4;
      const y = 1.5 + Math.random() * 1.0;
      const z = -2.0 + Math.random() * 4.0;

      const speedX = (Math.random() > 0.5 ? 1 : -1) * (0.01 + Math.random() * 0.02);
      const speedY = -0.02 - Math.random() * 0.02;
      const speedZ = (Math.random() - 0.5) * 0.01;

      const newStar = {
        id: Date.now() + Math.random(),
        startPos: [x, y, z],
        speed: { x: speedX, y: speedY, z: speedZ },
      };

      setShootingStars((prev) => [...prev, newStar]);
    }, 1000);

    return () => clearInterval(spawnInterval);
  }, []);

  return (
    <>
      {shootingStars.map((star) => (
        <ShootingStar
          key={star.id}
          id={star.id}
          startPos={star.startPos}
          speed={star.speed}
          onDisappear={handleStarDisappear}
        />
      ))}
    </>
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
        <Stars  mouse={mouse} lastMoveTime={lastMoveTime}/>
        <ShootingStarsManager />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default StarsCanvas;
