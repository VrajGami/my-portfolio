import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
  <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
     <ambientLight intensity={3} />
      <directionalLight position={[10, 10, 5]} intensity={3} /> 
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1,1]}/>
        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading/>
        <Decal position={[0,0,1]} 
        rotation={[2 * Math.PI, 0, 6.25]}
        flatShading
        map={decal}/>
      
      </mesh>
     </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
   <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }} 
    >
  {/* <ambientLight intensity={3} />
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
  <pointLight intensity={3} /> */}
      <Suspense fallback={<CanvasLoader />}>
   
        <OrbitControls
          enableZoom={false}
          
        />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
