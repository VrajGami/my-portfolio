import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: 'rgba(29, 24, 54, 0.6)',
      color: '#fff',
      border: '1px solid rgba(167, 139, 250, 0.3)',
      borderRadius: '1rem',
      boxShadow: '0 0 20px rgba(124, 58, 237, 0.3)',
      backdropFilter: 'blur(10px)',
    }}
    contentArrowStyle={{
      borderRight: '7px solid #6d28d9',
    }}
    date={
      <p className="text-white/70 text-base font-semibold opacity-100">
        {experience.date}
      </p>
    }
    iconStyle={{
      background: experience.iconBg,
      boxShadow: `0 0 15px #a78bfa, 0 0 5px #fff`,
    }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[90%] h-[90%] object-cover rounded-full"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-2xl font-bold">{experience.title}</h3>
      <p
        className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 text-lg font-semibold"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white/80 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <div>
      <div id="stars" className="absolute inset-0"></div>

      <motion.div
        variants={textVariant()}
        initial="hidden"
        animate="show"
        className="text-center mb-12 px-4 relative z-10"
      >

        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col relative z-10">
        <VerticalTimeline lineColor="rgba(167, 139, 250, 0.3)">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={`experience-${idx}`} experience={exp} />
          ))}
        </VerticalTimeline>
      </div>
     
    </div>
  );
};

export default SectionWrapper(Experience, 'work');
