import React from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from '../utils/useInView';
import { textVariant } from '../utils/motion';

const volunteering = [
  {
    title: "Awareness Campaign Volunteer & Blood Donation Camp Coordinator",
    organization: "Lions Club",
    date: "May 2021 – Sept. 2022 (COVID-19)",
    address: "Madhapar-Bhuj, Gujarat, India",
    iconBg: "#FFD700",
    points: [
      "Organized and managed a successful blood donation camp, ensuring smooth operations and high donor turnout.",
      "Coordinated and participated in COVID-19 awareness campaigns, educating the community on safety protocols and preventive measures.",
      "Led and contributed to tree planting drives and other community service initiatives, promoting environmental sustainability and public health."
    ],
    certificateUrl: "https://vraj-gami-documents.s3.ca-central-1.amazonaws.com/lions+club.pdf"
  }
];

const VolunteeringCard = ({ experience }) => (
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
      borderRight: '7px solid #a78bfa',
    }}
    date={<p className="text-white/70 text-base font-semibold opacity-100">{experience.date}</p>}
    iconStyle={{
      background: experience.iconBg,
      boxShadow: `0 0 15px #fff, 0 0 15px #fff`,
    }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <span className="text-white text-lg font-bold">{experience.organization[0]}</span>
      </div>
    }
  >
    <div>
      <h3 className="text-white text-xl font-bold">{experience.title}</h3>
      <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 text-lg font-semibold" style={{ margin: 0 }}>{experience.organization}</p>
      <p className="text-white/60 text-sm mt-1 mb-2 italic">{experience.address}</p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li key={`volunteering-point-${index}`} className="text-white/80 text-[14px] pl-1 tracking-wider">{point}</li>
      ))}
    </ul>
    {experience.certificateUrl && (
      <div className="mt-4 ml-5">
        <a
          href={experience.certificateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline text-[15px]"
        >
          Lions Club Certificate (PDF)
        </a>
      </div>
    )}
  </VerticalTimelineElement>
);

const Volunteering = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.25 });

  React.useEffect(() => {
    if (inView) {
      controls.start('show');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  return (
    <div ref={ref} className="mt-20 flex flex-col relative z-10 w-full items-center">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        animate={controls}
        className={`w-full flex flex-col items-center mb-8`}
      >
        <p className={`${styles.sectionSubText} text-center mb-2`}>Community & Service</p>
        <h2 className={`${styles.sectionHeadText} text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg`}>Volunteering</h2>
      </motion.div>
      <div className="mt-20 flex flex-col relative z-10 w-full">
        <VerticalTimeline lineColor="rgba(167, 139, 250, 0.3)">
          {volunteering.map((exp, idx) => (
            <VolunteeringCard key={`volunteering-${idx}`} experience={exp} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Volunteering, "volunteering");
