import { motion } from 'framer-motion';
import { styles } from '../styles';

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      type: 'spring',
      stiffness: 120,
      damping: 14,
    },
  }),
};

// Updated shooting star: curved path + visible size + high z-index
const shootingStarVariants = {
  initial: {
    x: '-10%',
    y: '-10%',
    opacity: 0,
  },
  animate: {
    x: ['-10%', '50%', '110%'],
    y: ['-10%', '30%', '110%'],
    opacity: [0, 1, 0],
    transition: {
      duration: 2,         // speed of the star
      ease: 'easeInOut',
      repeat: Infinity,
      repeatDelay: 3,      // pause between shooting stars
    },
  },
};

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Background video */}
      <div className="absolute inset-0 z-[-100000] overflow-hidden">
        <video
          autoPlay
          loop
          muted
        className="w-full h-full object-cover rotate-180 absolute  left-0 top-[-35vh]"
        >
          <source src="./blackhole.webm" type="video/webm" />
        </video>
        <div
          className="absolute bottom-0 left-0 w-full h-1/2"
          style={{
            background:
              'linear-gradient(to top, rgba(10, 5, 20, 1) 60%, rgba(10, 5, 20, 0) 100%)',
          }}
        />
      </div>

      {/* Shooting star */}
      <motion.div
        className="absolute top-0 left-0 w-48 h-1 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 z-10000 opacity-90"
        variants={shootingStarVariants}
        initial="initial"
        animate="animate"
      />

      {/* Main content */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[320px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-pink-500 to-purple-400" />
          <div className="w-1 sm:h-80 h-40 violet-gradient bg-gradient-to-r from-purple-400 to-pink-500" />
        </div>
        <div>
          <motion.h1
            className={`${styles.heroHeadText} text-white`}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Vraj
            </span>
          </motion.h1>
          <motion.p
            className={`${styles.heroSubText} text-white-100 mt-2`}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Dedicated to the craft of turning complex challenges into clean,
            simple solutions.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
