// src/components/ProjectDetailsPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import { useLocation } from 'react-router-dom'; 

const ProjectDetailsPage = () => {
  const location = useLocation();
  const { project } = location.state || {};

  if (!project) {
    return (
      <div className='bg-primary min-h-screen flex flex-col items-center justify-center p-8 text-white'>
        <p className='text-xl mb-4'>No project details found. Please go back to the projects section.</p>
        <button
          onClick={() => window.history.back()}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className='bg-primary min-h-screen flex flex-col items-center justify-start py-12 px-4 sm:px-8'>

      <div className='max-w-4xl w-full bg-tertiary rounded-2xl p-6 sm:p-10 shadow-lg text-white'>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>More Details About</p>
          <h2 className={styles.sectionHeadText}>{project.name}</h2>
        </motion.div>

        <div className='mt-6'>
          {project.image && (
            <img src={project.image} alt={project.name} className='w-full h-auto object-contain rounded-xl mb-6' />
          )}

          <p className='mt-2 text-secondary text-[16px] leading-[28px]'>{project.description}</p>
          {project.longDescription && (
            <p className='mt-4 text-secondary text-[16px] leading-[28px]'>{project.longDescription}</p>
          )}

          <div className='mt-4 flex flex-wrap gap-2'>
            {project.tags && project.tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
            ))}
          </div>

          <div className='mt-8 flex flex-wrap gap-4 justify-center'>
            {project.source_code_link && (
              <button
                onClick={() => window.open(project.source_code_link, "_blank")}
                className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-5 rounded-full transition-colors duration-300'
              >
                GitHub Code
              </button>
            )}
            {project.live_demo_link && (
              <button
                onClick={() => window.open(project.live_demo_link, "_blank")}
                className='bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-5 rounded-full transition-colors duration-300'
              >
                Live Demo
              </button>
            )}
            <button
              onClick={() => window.history.back()}
              className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-5 rounded-full transition-colors duration-300'
            >
              Back to Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;