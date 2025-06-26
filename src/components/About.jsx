import React from 'react';
import { Tilt } from 'react-tilt'; 
import {motion, scale} from 'framer-motion';
import {styles} from '../styles';
import { services,aboutContent } from '../constants';
import {fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { useNavigate } from 'react-router-dom'; 

const About = () => {
   const navigate = useNavigate(); 
      const handleMoreInfoClick = () => {
    navigate('/myLife', {});
  };
  return (
<>
<motion.div varients={textVariant()}>
    <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-semibold" >Introduction</p>
    <h2 className={styles.sectionHeadText}> Overview</h2>
</motion.div>
<motion.p
variants={fadeIn("","",0.1,1)}
className='mt-4 text-secodary text-[17px] leading-[30px] '
>
  {aboutContent}
</motion.p>
<div className='mt-10 flex justify-center'>
    <motion.button onClick={handleMoreInfoClick} whileHover={{scale : 1.1 }} whileTap= {{scale : 0.9 }} transition={{type : "spring", stiffness : 400, damping : 17}}
    className='filter-sphere relative inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white rounded-full cursor-pointer bg-white/10 backdrop-blur-rm border-2
    border-white/20 shadow-2xl shadow-black/40'
    >
      <span className='z-10'> More Info </span>

    </motion.button>
</div>

</>
  );
};

export default SectionWrapper(About, "about");
