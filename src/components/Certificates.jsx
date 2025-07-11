import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { Tilt } from "react-tilt";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const BASE = "/my-portfolio";
const certificates = [
  { file: `${BASE}/certificates/certificate1.pdf`, preview: `${BASE}/certificate_previews/certificate1.png`, name: "Configuration Management and the Cloud" },
  { file: `${BASE}/certificates/certificate2.pdf`, preview: `${BASE}/certificate_previews/certificate2.png`, name: "Introduction to Git and Github" },
  { file: `${BASE}/certificates/certificate3.pdf`, preview: `${BASE}/certificate_previews/certificate3.png`, name: "Using Python to interact with Operating System" },
  { file: `${BASE}/certificates/certificate4.pdf`, preview: `${BASE}/certificate_previews/certificate4.png`, name: "Crash Course on Python" },
];

const CertificateCard = ({ preview, name, index, onCardClick }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    onClick={onCardClick}
    className="w-full cursor-pointer group"
  >
    <Tilt
      options={{ max: 15, scale: 1.05, speed: 500, transition: true, glare: true, "max-glare": 0.3 }}
      className="w-full"
    >
      <div className="relative p-0.5 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 
                     shadow-lg shadow-black/40 
                     transition-all duration-300 
                     group-hover:shadow-2xl group-hover:shadow-purple-500/50"
      >
        <div className="bg-[#1a1a2e] rounded-[14px] overflow-hidden">
          <div className="relative w-full aspect-video md:aspect-[1.4/1]">
            <img
              src={preview}
              alt={name}
              className="w-full h-full object-cover"
            />
 
          </div>
          <div className="px-5 py-4 bg-black/20">
            <p className="text-white text-lg lg:text-xl font-bold text-center tracking-wide">{name}</p>
          </div>
        </div>
      </div>
    </Tilt>
  </motion.div>
);


const Certificate = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };
  
  useEffect(() => {
    const mainContent = document.getElementById('root');
    if (open) {
      mainContent.style.filter = 'blur(8px) brightness(0.7)';
      mainContent.style.transition = 'filter 0.3s ease-in-out';
    } else {
      mainContent.style.filter = 'none';
    }
    return () => {
      mainContent.style.filter = 'none';
    };
  }, [open]);

  const lightboxSlides = certificates.map(cert => ({
    src: cert.file,
    title: cert.name,
  }));

  const renderSlide = ({ slide }) => {
    if (slide.src.toLowerCase().endsWith('.pdf')) {
      return (
        <div className="w-full h-full flex items-center justify-center bg-transparent">
          <div className="w-[90%] h-[90%] max-w-[1400px] flex flex-col bg-[#1d1d30] rounded-lg shadow-2xl overflow-hidden border border-white/10">
            <div className="flex-shrink-0 px-6 py-3 bg-black/20 flex items-center justify-center">
              <h3 className="text-white font-bold text-lg tracking-wider">{slide.title}</h3>
            </div>
            <div className="flex-grow w-full h-full bg-black">
              <iframe
                src={`${slide.src}#toolbar=0&navpanes=0`}
                title={slide.title}
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      );
    }
    return undefined;
  }

  return (
    <>
      <motion.div variants={textVariant()} className="mb-8 ">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 text-lg font-semibold">My Accomplishments & Qualifications</p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Certificates</h2>
      </motion.div>

      <div className="mt-20 w-full px-8 sm:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {certificates.map((cert, index) => (
          <CertificateCard
            key={`cert-${index}`}
            index={index}
            {...cert}
            onCardClick={() => openLightbox(index)}
          />
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={lightboxSlides}
        index={currentIndex}
        render={{ slide: renderSlide, thumbnail: () => <div/> }}
        plugins={[Fullscreen, Zoom]}
        styles={{ container: { backgroundColor: "transparent" } }}
      />
    </>
  );
};

export default SectionWrapper(Certificate, "certificate");