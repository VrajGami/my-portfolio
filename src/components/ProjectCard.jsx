import React, { useState } from 'react'; 
import { Tilt } from 'react-tilt';
import { motion, AnimatePresence } from 'framer-motion';
import { github } from '../assets'; 
import { fadeIn } from '../utils/motion'; 

const tagColorMap = {
  "blue-text-gradient": "bg-gradient-to-r from-blue-500 to-cyan-500 text-white",
  "green-text-gradient": "bg-gradient-to-r from-green-500 to-emerald-400 text-white",
  "pink-text-gradient": "bg-gradient-to-r from-pink-500 to-rose-400 text-white",
};


const overlayVariants = {
  hidden: { opacity: 0, y: 30, pointerEvents: 'none' },
  visible: { opacity: 1, y: 0, pointerEvents: 'auto', transition: { type: 'spring', stiffness: 300, damping: 25 } },
  exit: { opacity: 0, y: 30, pointerEvents: 'none', transition: { duration: 0.2 } }
};

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_demo_link, longDescription }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)} 
      className="w-full sm:w-[320px]"
    >
      <Tilt
        options={{
          max: 15,
          scale: 1.02,
          speed: 500,
          transition: true,
        }}
        className="h-full w-full"
      >
        <div 
          className="animated-border-wrapper rounded-2xl p-[1.5px] h-full"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="bg-tertiary rounded-[14px] p-3 flex flex-col h-full relative overflow-hidden">
            <div className='relative w-full h-[160px]'>
              <img src={image} alt={name} className='w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105' />
              <div className='absolute top-3 right-3 z-20'>
                <a
                  href={source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='bg-gradient-to-tr from-purple-500 to-pink-500 w-11 h-11 rounded-full flex justify-center items-center cursor-pointer shadow-lg border-2 border-white/30 hover:scale-110 transition-transform duration-200'
                  title="View Source on GitHub"
                  tabIndex={0}
                >
                  <img src={github} alt='github' className='w-6 h-6 object-contain' />
                </a>
              </div>
            </div>

            <div className="mt-3 flex-grow flex flex-col">
              <h3 className='text-white font-bold text-center text-[20px]'>{name}</h3>
              <p className='mt-1 text-secondary text-[13px] line-clamp-4'>{description}</p>
            </div>

            <div className='mt-2 flex flex-wrap gap-1'>
              {tags.map((tag) => (
               <p
      key={tag.name}
      className={`text-[12px] px-2 py-0.5 rounded-full ${tagColorMap[tag.color] || 'bg-gray-500 text-white'}`}
    >
      #{tag.name}
    </p>
              ))}
            </div>

            <AnimatePresence>
              {hovered && (
                <motion.div
                  className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-br from-black/90 via-purple-900/90 to-pink-900/90 px-6 py-8 rounded-[14px] z-30 shadow-2xl"
                  variants={overlayVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <h3 className='text-white font-bold text-center text-[22px] mb-2 drop-shadow-lg'>{name}</h3>
                  <p className='text-white/90 text-[15px] text-center max-h-40 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-400 scrollbar-track-transparent rounded-md px-1 drop-shadow'>
                    {longDescription || description}
                  </p>
                  <a
                    href={source_code_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='mt-6 bg-gradient-to-tr from-purple-500 to-pink-500 px-6 py-2 rounded-full text-white font-bold shadow-lg border-2 border-white/30 hover:scale-105 transition-transform duration-200 flex items-center gap-2'
                  >
                    <img src={github} alt='github' className='w-5 h-5 object-contain' />
                    <span>GitHub</span>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </Tilt>
    </motion.div>
  )
}

export default ProjectCard;