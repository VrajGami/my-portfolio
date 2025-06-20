import {BallCanvas} from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { motion } from 'framer-motion';

const Tech = () => {
  return (
 <div className='flex flex-row flex-wrap justify-center gap-10'>
  {technologies.map((technology) => (
    <div className="w-28 h-28" key={technology.name}>
      <BallCanvas icon={technology.icon}/> 
  <motion.p
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
  className="text-white text-[14px] font-medium text-center mt-2"
>
  {technology.name}
</motion.p>

    </div>
  ))}
 </div>
  );
};

export default SectionWrapper(Tech, "");
