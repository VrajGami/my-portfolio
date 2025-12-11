import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from "three";
import { useScroll, useSpring } from "framer-motion";

const Stars = ({ mouse, lastMoveTime }) => {
  const ref = useRef();
  const numPoints = 5000;
  const sphere = random.inSphere(new Float32Array(numPoints * 3), { radius: 1.2 });

  const { scrollYProgress } = useScroll();
  const scrollVelocity = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });

  useFrame((state, delta) => {
    const velocity = Math.abs(scrollVelocity.getPrevious() - scrollVelocity.get()) * 10;
    const warpSpeed = Math.min(velocity, 0.05);

    if (ref.current) {
      if (warpSpeed > 0.001) {
        ref.current.rotation.x -= warpSpeed;
        ref.current.rotation.y -= warpSpeed * 0.2;
      } else {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
      }
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
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
          sizeAttenuation={true}
          depthWrite={false}
        />
      </points>
    </group>
  );
};

const StarsCanvas = () => {
  const mouse = useRef({ x: 0, y: 0 });
  const lastMoveTime = useRef(Date.now());

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      lastMoveTime.current = Date.now();
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -9999,
        pointerEvents: "none",
      }}
      camera={{ position: [0, 0, 1] }}
    >
      <Suspense fallback={null}>
        <Stars mouse={mouse} lastMoveTime={lastMoveTime} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default function Background() {
  return (
    <>
      <div className="fixed inset-0 z-[-100000] overflow-hidden">
        <div
          className="absolute bottom-0 left-0 w-full h-1/2"
          style={{
            background:
              "linear-gradient(to top, rgba(10, 5, 20, 1) 60%, rgba(10, 5, 20, 0) 100%)",
          }}
        />
      </div>
      <StarsCanvas />
    </>
  );
}
