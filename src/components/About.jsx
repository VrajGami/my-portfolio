import {motion} from 'framer-motion';
import {styles} from '../styles';
import { aboutContent } from '../constants';
import {fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const About = () => {
  return (
    <>
      <motion.div varients={textVariant()}>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-semibold" >Introduction</p>
        <h2 className={styles.sectionHeadText}> Overview</h2>
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
        "
      >
        {aboutContent}
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
