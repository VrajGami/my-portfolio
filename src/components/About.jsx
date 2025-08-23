import { motion } from "framer-motion";
import { styles } from "../styles";
import { aboutContent } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="relative">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-semibold text-[20px] sm:text-[24px]">
          Introduction
        </p>
        <h2
          className={`${styles.sectionHeadText} text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500`}
        >
          Overview
        </h2>
        <motion.div
          className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mt-2 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Balanced Planet-like shape */}
        <motion.div
          className="absolute top-[-40px] right-[-60px] w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-md opacity-70"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          {/* Orbiting elements */}
          <motion.div
            className="absolute top-[-10px] left-[50%] w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-70"
            animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-[-10px] right-[50%] w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-70"
            animate={{ x: [0, -15, 0], y: [0, 15, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.2, 1)}
        initial="hidden"
        animate="show"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="
          w-full
          mt-6
          text-slate-200
          text-[18px]
          md:text-[20px]
          leading-[32px]
          md:leading-[36px]
          font-light
          tracking-wide
          px-4
          sm:px-6
          md:px-8
          lg:px-12
          hover:text-white
          relative
        "
      >
        {aboutContent}

        {/* Balanced Planet-like shape */}
        <motion.div
          className="absolute bottom-[-50px] left-[-40px] w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full shadow-md opacity-70"
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        >
          {/* Orbiting elements */}
          <motion.div
            className="absolute top-[-8px] left-[50%] w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-70"
            animate={{ x: [0, 15, 0], y: [0, -15, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-[-8px] right-[50%] w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-70"
            animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
