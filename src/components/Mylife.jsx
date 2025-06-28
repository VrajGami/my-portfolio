import { Suspense, useEffect, useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Html, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';



const storySections = [
    { position: [0, 0, 0], title: 'Architect of Logic', description: "I thrive on transforming complex ideas into elegant, scalable code, crafting digital solutions that solve real-world problems." },
    { position: [2.5, -0.5, -25], title: 'Competitive Spirit', description: "On the court or in a chess match, my competitive edge sharpens my strategic thinking and pushes me to always improve." },
    { position: [-2.5, 0, -50], title: 'Intrepid Explorer', description: "Every journey, from scenic trails to far-off corners of the world, fuels my creativity and broadens my mind." },
    { position: [2, -1, -75], title: 'Community Builder', description: "I believe in the power of unity, leading projects with heart and giving back to make a tangible difference." },
    { position: [-3, 0.5, -100], title: 'Visionary Creator', description: "Blending art and technology, I craft interfaces and experiences that tell compelling stories and leave a lasting impact." },
    { position: [0, 0, -125], title: 'Relentless Learner', description: "Fueled by insatiable curiosity, I'm committed to continuous growth and mastering the tools of tomorrow." }
];


function Experience({ scrollY, scrollContainer }) {
  const { scene } = useGLTF('./need_some_space/scene.gltf'); 
  const camera = useThree(state => state.camera);
  const memoizedScene = useMemo(() => scene.clone(), [scene]);

  useFrame((state, delta) => {

    const scrollEl = scrollContainer.current;
    if (!scrollEl) return;
    const maxScroll = scrollEl.scrollHeight - scrollEl.clientHeight;
    const scrollProgress = scrollY.current / maxScroll;

    const sectionCount = storySections.length - 1;
    const scrollOffset = scrollProgress * sectionCount;
    const currentSectionIndex = Math.floor(scrollOffset);
    const nextSectionIndex = Math.min(currentSectionIndex + 1, sectionCount);
    const lerpFactor = scrollOffset - currentSectionIndex;

    const currentPos = new THREE.Vector3(...storySections[currentSectionIndex].position);
    const nextPos = new THREE.Vector3(...storySections[nextSectionIndex].position);
    
    const targetLookAt = new THREE.Vector3().lerpVectors(currentPos, nextPos, lerpFactor);
    const targetCameraPos = new THREE.Vector3(targetLookAt.x, targetLookAt.y, targetLookAt.z + 10);

    state.camera.position.lerp(targetCameraPos, delta * 1.0);
    state.camera.lookAt(targetLookAt);
  });

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[50, 50, 50]} intensity={0.8} color="#8a2be2" />
      <pointLight position={[-50, -50, -50]} intensity={0.8} color="#00ffff" />
      <Stars radius={400} depth={50} count={10000} factor={10} saturation={0} fade speed={1} />
      <primitive object={memoizedScene} scale={20} rotation={[0, Math.PI, 0]} />
    </>
  );
}

// --- Main Page Component ---
export default function MyLife() {
  const scrollContainer = useRef(null);
  const scrollY = useRef(0);

  useEffect(() => {
    const el = scrollContainer.current;
    if (!el) return;
    const handleScroll = () => {
      scrollY.current = el.scrollTop;
    };
    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full h-screen bg-[#050816] overflow-hidden font-sans">

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <Canvas shadows camera={{ position: [0, 0, 10], fov: 75 }}>
          <Suspense fallback={null}>
            <Experience scrollY={scrollY} scrollContainer={scrollContainer} />
          </Suspense>
        </Canvas>
      </div>

      <main ref={scrollContainer} className="relative z-10 h-full overflow-y-auto overflow-x-hidden">
        

        <section className="h-screen flex flex-col items-center justify-center text-center p-6">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tighter"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-100 to-white">A Glimpse Into</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-500">My Universe</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl"
          >
            Beyond the code and competition lies a universe of stories, passions, and adventures that shape who I am.
          </motion.p>
        </section>

        {/* This container pushes the story sections down, creating the scroll height */}
        <div className="relative w-full" style={{ height: `${storySections.length * 100}vh` }}>
            {storySections.map((section, index) => (
                <div key={index} className="h-screen flex items-center justify-center">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ root: scrollContainer, amount: 0.5 }}
                        transition={{ duration: 0.6 }}
                        className="w-[30rem] max-w-[90vw] p-8 bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-purple-400/30 shadow-2xl shadow-purple-900/50"
                    >
                         <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-cyan-300">
                            {section.title}
                        </h2>
                        <p className="text-lg text-gray-300 leading-relaxed">{section.description}</p>
                    </motion.div>
                </div>
            ))}
        </div>

        {/* Footer */}
        <footer className="h-screen flex flex-col items-center justify-center text-center p-6">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ root: scrollContainer, amount: 0.5 }} transition={{ duration: 1 }}>
                <h3 className="text-4xl font-bold mb-4">The journey continues...</h3>
                <p className="text-lg text-gray-400 mb-8">Let's connect and create something amazing together.</p>
                <a href="#contact"
                   className="inline-block bg-purple-600 text-white font-bold py-3 px-8 rounded-full hover:bg-purple-700 transition-colors duration-300 shadow-lg shadow-purple-500/30"
                >
                    Get In Touch
                </a>
            </motion.div>
        </footer>
      </main>
    </div>
  );
}