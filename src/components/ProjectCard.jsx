
import React from 'react'; 
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { github } from '../assets'; 
import { fadeIn } from '../utils/motion'; 
import { useNavigate } from 'react-router-dom'; 

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_demo_link, longDescription }) => {
  const navigate = useNavigate(); 

  const handleMoreInfoClick = () => {
    navigate('/project-details', {
      state: {
        project: {
          name,
          description,
          tags,
          image,
          source_code_link,
          live_demo_link,
          longDescription,
        }
      }
    });
  };

  return (
   
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="w-full sm:w-[320px]">
      <Tilt
        options={{
          max: 15,
          scale: 1.02,
          speed: 500,
          transition: true,
        }}
        className="h-full w-full"
      >

        <div className="animated-border-wrapper rounded-2xl p-[1.5px] h-full">
          <div className="bg-tertiary rounded-[14px] p-3 flex flex-col h-full">


            <div className='relative w-full h-[160px]'>
              <img src={image} alt={name} className='w-full h-full object-cover rounded-xl' />
              <div className='absolute inset-0 flex justify-end m-2'>
                <div
                  onClick={() => window.open(source_code_link, "_blank")}
                  className='black-gradient w-9 h-9 rounded-full flex justify-center items-center cursor-pointer transition-transform hover:scale-110'
                >
                  <img src={github} alt='github' className='w-1/2 h-1/2 object-contain' />
                </div>
              </div>
            </div>

      
            <div className='mt-3 flex-grow'>
              <h3 className='text-white font-bold text-[20px]'>{name}</h3>
              <p className='mt-1 text-secondary text-[13px] line-clamp-4'>{description}</p>
            </div>


            <div className='mt-2 flex flex-wrap gap-1'>
              {tags.map((tag) => (
                <p key={tag.name} className={`text-[12px] px-2 py-0.5 bg-black/20 rounded-full ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>

    
            <div className='mt-4 flex justify-center'>
             <motion.button onClick={handleMoreInfoClick} whileHover={{scale : 1.1 }} whileTap= {{scale : 0.9 }} transition={{type : "spring", stiffness : 400, damping : 17}}
               className='filter-sphere relative inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white rounded-full cursor-pointer bg-white/10 backdrop-blur-rm border-2
               border-white/20 shadow-2xl shadow-black/40'
               >
                 <span className='z-10'> More Info </span>
           
               </motion.button>
            </div>

          </div>
        </div>
      </Tilt>
    </motion.div>
    
  )
}

export default ProjectCard;