

import { motion } from 'framer-motion';
import { styles } from '../styles';

import { SectionWrapper } from '../hoc';
import { projects, projectDiscription } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import ProjectCard from './ProjectCard';

const Works = () => {
  return (
  <>
<motion.div variants={textVariant()}>
  <p className={'md:text-[20px] sm:text-[20px] xs:text-[20px] text-[20px] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-bold'}>My work</p>
  <h2 className={styles.sectionHeadText}>Projects</h2>
</motion.div>

<div className='w-full flex'>
  <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
    {projectDiscription}
  </motion.p>
</div>


<div className='mt-20 flex flex-wrap justify-center gap-7'>
{projects.map((project, index) => (
  <ProjectCard 
  {...project} index= {index}
  key={`project-${index}`}/>
))}
</div>
  </>
  );
};

export default SectionWrapper(Works, "projects");

