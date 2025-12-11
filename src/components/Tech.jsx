import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-center text-[#dfd9ff] font-medium lg:text-[20px] sm:text-[18px] xs:text-[16px] text-[14px] lg:leading-[30px]">
          Tools of the Galaxy
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 hover:from-pink-500 hover:to-yellow-500 transition-all duration-300 cursor-default">
            My Tech Universe.
          </span>
        </h2>
      </motion.div>

      <div className='flex flex-row flex-wrap justify-center gap-10 mt-20'>
        {technologies.map((technology, index) => (
          <div className='w-28 h-28' key={technology.name}>
            <Tilt className="w-full h-full">
              <motion.div
                variants={fadeIn("right", "spring", index * 0.1, 0.75)}
                className='w-full green-pink-gradient p-[1px] rounded-full shadow-card cursor-pointer'
              >
                <div
                  options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                  }}
                  className='bg-tertiary rounded-full flex justify-center items-center w-full h-full min-h-[100px] min-w-[100px]'
                >
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </motion.div>
            </Tilt>
            <p className="text-center mt-2 text-secondary text-[14px]">{technology.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");