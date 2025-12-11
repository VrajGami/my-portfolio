import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { styles } from "../styles";
import { HackerText } from "./index";
import { logo } from "../assets";



const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      type: "spring",
      stiffness: 120,
      damping: 14,
    },
  }),
};



const Hero = () => {
  const ref = useRef(null);

  // 👇 Observe whether Hero is in viewport
  const isInView = useInView(ref, { threshold: 0.2 }); // adjust threshold if needed

  return (
    <section
      ref={ref}
      className="relative w-full h-screen mx-auto"
    >



      <>
        <div className="absolute inset-0 z-[-100000] overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rotate-180 absolute left-0 top-[-35vh]"
          >
            <source src="./blackhole.webm" type="video/webm" />
          </video>
          <div
            className="absolute bottom-0 left-0 w-full h-1/2"
            style={{
              background:
                "linear-gradient(to top, rgba(10, 5, 20, 1) 60%, rgba(10, 5, 20, 0) 100%)",
            }}
          />
        </div>
      </>

      {/* Main content */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[300px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <motion.div
            animate={{ boxShadow: ["0px 0px 0px 0px rgba(145,94,255,0)", "0px 0px 20px 5px rgba(145,94,255,0.6)", "0px 0px 0px 0px rgba(145,94,255,0)"] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-5 rounded-full bg-[#915eff]"
          />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <motion.h1
            className={`${styles.heroHeadText} text-white text-[80px] lg:text-[100px] drop-shadow-[0_0_0.2rem_#915eff]`}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915eff] via-[#ff00ff] to-[#00ffff]">
              <HackerText text="Vraj Gami" className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500" />
            </span>
          </motion.h1>
          <motion.p
            className={`${styles.heroSubText} mt-2 text-white-100 max-w-3xl`}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            {Array.from("Turning complex specs into seamless experiences, where every challenge reveals a new path to innovation.").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.05, delay: index * 0.03 + 1 }} // Typewriter speed
              >
                {char}
              </motion.span>
            ))}
          </motion.p>

        </div>

        {/* Logo with galaxy nebula effect */}
        <motion.div
          className="hidden lg:flex justify-center items-center ml-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <div className="relative w-[350px] h-[350px]">
            {/* Pulsing nebula glow layers */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-cyan-500/20 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 via-purple-600/10 to-pink-500/10 blur-2xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />

            {/* Floating stardust particles */}
            {Array.from({ length: 20 }).map((_, i) => {
              const angle = (i * 360) / 20;
              const distance = 80 + Math.random() * 60;
              return (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                  }}
                  animate={{
                    x: [
                      Math.cos((angle * Math.PI) / 180) * distance,
                      Math.cos((angle * Math.PI) / 180) * (distance + 20),
                      Math.cos((angle * Math.PI) / 180) * distance,
                    ],
                    y: [
                      Math.sin((angle * Math.PI) / 180) * distance,
                      Math.sin((angle * Math.PI) / 180) * (distance + 20),
                      Math.sin((angle * Math.PI) / 180) * distance,
                    ],
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random() * 2,
                  }}
                />
              );
            })}

            {/* Shooting stars/cosmic rays */}
            {[0, 120, 240].map((angle, index) => (
              <motion.div
                key={`ray-${angle}`}
                className="absolute w-1 h-12 bg-gradient-to-t from-transparent via-cyan-400/80 to-transparent rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transformOrigin: 'center',
                }}
                animate={{
                  rotate: angle + 360,
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.5,
                }}
              />
            ))}

            {/* Logo with enhanced glow */}
            <motion.img
              src={logo}
              alt="Vraj Gami Logo"
              className="absolute inset-0 w-full h-full object-contain drop-shadow-[0_0_40px_rgba(145,94,255,1)] mix-blend-screen"
              style={{ filter: 'brightness(1.3) contrast(1.2)' }}
              animate={{
                filter: [
                  'brightness(1.3) contrast(1.2)',
                  'brightness(1.4) contrast(1 .2)',
                  'brightness(1.3) contrast(1.2)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
