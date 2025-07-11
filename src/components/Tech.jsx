import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { textVariant } from '../utils/motion'; 


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1, 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12
    },
  },
};


const TechCell = ({ name, icon }) => {

  const hexagonStyle = {
    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
  };

  return (
    <motion.div variants={itemVariants} className="relative w-32 h-[140px] md:w-40 md:h-[175px] group">
 
      <div
        className="absolute inset-0 animated-border-wrapper p-[3px] transition-transform duration-300 group-hover:scale-105"
        style={hexagonStyle}
      >
        {/* Layer 2: Dark Background */}
        <div
          className="relative w-full h-full bg-[#1d1836] flex items-center justify-center" 
          style={hexagonStyle}
        >
          {/* Layer 3: Content (Icon) */}
          <img
            src={icon}
            alt={name}
            className="w-14 h-14 md:w-20 md:h-20 object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>

      {/* The name appears below the icon, always visible */}
      <div className="absolute inset-0 flex items-center justify-center">
         <p className="absolute bottom-3 md:bottom-5 text-white text-sm font-bold opacity-100">
           {name}
         </p>
      </div>
    </motion.div>
  );
};

// --- Main Tech Component ---
const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-center text-[#dfd9ff] font-medium lg:text-[20px] sm:text-[18px] xs:text-[16px] text-[14px] lg:leading-[30px]">
          What I Work With
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
          My Tech Stack.
        </h2>
      </motion.div>

      <motion.div
        className="mt-20 flex flex-row flex-wrap justify-center gap-x-10 gap-y-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {technologies.map((technology) => (
          <TechCell key={technology.name} name={technology.name} icon={technology.icon} />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");