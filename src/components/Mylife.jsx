import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ConstellationCanvas from './canvas/Constilation'


const storySections = [
  { title: 'Architect of Logic',  description: 'Transforming ideas into elegant code, I architect solutions that scale and inspire innovation.' },
  { title: 'Competitive Spirit',  description: 'From badminton courts to chessboards, my drive for excellence sharpens strategy and teamwork.' },
  { title: 'Intrepid Explorer', description: 'Every journey fuels my creativity I seek new horizons to broaden my mind and spark fresh ideas.' },
  { title: 'Community Builder',  description: 'Leading projects with heart, I unite teams and give back through volunteer work that makes a difference.' },
  { title: 'Visionary Creator',  description: 'Blending art and technology, I craft interfaces that delight users and tell compelling stories.' },
  { title: 'Relentless Learner', description: 'Driven by curiosity, I dive into new frameworks, languages, and paradigms every single day.' },
];
const blobVariants = {
  animate: {
    scale:    [1, 1.2, 1, 1.1, 1],
    rotate:   [0, 10, -5, 15, 0],
    opacity:  [0.6, 0.8, 0.7, 0.9, 0.6],
    transition: { duration: 30, repeat: Infinity, ease: 'easeInOut' },
  },
};

const cardVariants = {
  offscreen: { opacity: 0, y: 100, scale: 0.8 },
  onscreen:  {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', bounce: 0.4, duration: 1 }
  }
};
export default function MyLife() {
   const scrollY = useRef(0);
 
  const scrollContainer = useRef(null);

  useEffect(() => {
  const el = scrollContainer.current;
  const handleScroll = () => {
    scrollY.current = el.scrollTop;
  };
  el?.addEventListener('scroll', handleScroll);
  return () => el?.removeEventListener('scroll', handleScroll);
}, []);


  return (
    <div className="relative w-full h-screen font-sans text-white bg-transparent overflow-hidden">
     <ConstellationCanvas
  scrollY={scrollY}
  scrollContainer={scrollContainer}
/>

 <motion.div
        className="absolute top-[-25%] left-[-25%] w-[70vw] h-[70vw] bg-gradient-to-r from-indigo-500/50 to-purple-600/50 rounded-full mix-blend-screen blur-3xl pointer-events-none"
        variants={blobVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-[-25%] right-[-25%] w-[70vw] h-[70vw] bg-gradient-to-tr from-pink-400/50 to-red-500/50 rounded-full mix-blend-screen blur-3xl pointer-events-none"
        variants={blobVariants}
        animate="animate"
      />
     <main
  ref={scrollContainer}
  className="relative z-10 h-full overflow-y-auto px-6 md:px-12"
>
     <section className="flex flex-col items-center justify-center min-h-screen text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-gray-100 to-white"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-100 to-white">
              A Glimpse Into
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-500">
              My Universe
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl"
          >
           
          </motion.p>
        </section>


              <section className="max-w-3xl mx-auto space-y-32 py-40">
          {storySections.map((s, i) => (
            <motion.div
              key={i}
              className="relative p-10 md:p-14 bg-transparent rounded-3xl border border-white/20 shadow-xl shadow-black/50"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
             
            >
            
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">
                {s.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </section>



        <footer className="text-center py-32">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="text-3xl font-semibold text-gray-400"
          >
            Thank you for exploring. The journey has only just begun.
          </motion.p>
        </footer>
      </main>
    </div>
  );
}