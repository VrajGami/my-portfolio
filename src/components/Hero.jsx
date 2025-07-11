import { motion } from 'framer-motion';
import {styles} from '../styles';
import {ComputersCanvas} from './canvas'



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

const Hero = () => {
  return (
  <section className='relative w-full h-screen mx-auto'> 
  
    <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
      <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-gradient-to-r from-purple-400 to-pink-500' />
          <div className='w-1 sm:h-80 h-40 violet-gradient bg-gradient-to-r from-purple-400 to-pink-500'/>
        
      </div>
      <div>
          <motion.h1
            className={`${styles.heroHeadText} text-white`}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Hi, I'm <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500'> Vraj </span>
          </motion.h1>
          <motion.p
            className={`${styles.heroSubText} text-white-100 mt-2`}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Dedicated to the craft of turning complex challenges into clean, simple solutions.
          </motion.p>
      </div>
 
    </div>  
       <ComputersCanvas/>
       <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center '>
          <a href='#about'>
              <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center item-start p-2'>
<motion.div
          animate={{
            y:[0,24,0]
          }}
          transition={{
            duration : 1.5,
            repeat : Infinity,
            repeatType : 'loop'
          }}
          className="w-3 h-3 rounded-full bg-secondary mb-1"
          />
              </div>
          </a>

       </div>
  </section>
  );
};

export default Hero;
