import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./need_some_space/scene.gltf");

  return (
     <primitive
      object={computer.scene}
    
      scale={isMobile ? 3 : 6}
      position={isMobile ? [0, -5, 1.1] : [0, -7, -1.5]}
      rotation={[0, -1, -0.1]}
    />
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[0, 1]}
      camera={{ position: [20, 3, 5], fov: 20 }}
      gl={{ preserveDrawingBuffer: true }} 
    >
  <ambientLight intensity={3} />
         <hemisphereLight intensity={1} groundColor='black' />
         <directionalLight position={[10, 10, 5]} intensity={3} /> 
         <spotLight
        position={[-20, 40, 40]} 
        angle={0.12} 
        penumbra={1} 
        intensity={3}
        castShadow
        shadow-mapSize={1024} 
      />
  <pointLight intensity={3} />
      <Suspense fallback={<CanvasLoader />}>
   
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
