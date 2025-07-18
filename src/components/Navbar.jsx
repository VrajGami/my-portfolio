import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import { styles } from '../styles';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const socials = [
  { icon: FaLinkedin, url: 'https://www.linkedin.com/in/vraj-gami/' },
  { icon: FaGithub, url: 'https://github.com/VrajGami' },
];

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [toggle, setToggle] = useState(false);
  const containerRef = useRef(null);

 
  const blobX = useMotionValue(0);
  const springX = useSpring(blobX, { stiffness: 350, damping: 30 });

  useEffect(() => {
    const idx = navLinks.findIndex((link) => link.title === active);
    if (containerRef.current) {
      const item = containerRef.current.children[idx];
      if (item) blobX.set(item.offsetLeft + item.clientWidth / 2 - 40);
    }
  }, [active, blobX]);

  const handleLinkClick = (title) => {
    setActive(title);
    setToggle(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`${styles.paddingX} fixed top-0 w-full z-50 bg-transparent backdrop-blur-lg`}>  
      <div className="max-w-7xl mx-auto flex justify-between items-center h-20 relative">
        {/* Logo */}
        <Link to="/" onClick={() => handleLinkClick('Home')} className="flex items-center gap-3 cursor-pointer group">
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <motion.p
            className="text-white text-lg font-semibold"
            whileHover={{ color: '#7F00FF', scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Vraj <span className="hidden sm:inline">Gami</span>
          </motion.p>
        </Link>

        {/* Desktop Menu */}
        <ul ref={containerRef} className="hidden sm:flex gap-8 relative">
          {/* Neon Blob */}
          <motion.div
            className="absolute top-1/2 left-0 w-20 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-80 filter blur-xl -translate-y-1/2"
            style={{ x: springX }}
          />

          {navLinks.map(({ id, title }) => (
            <motion.li
              key={id}
              className="relative z-10 text-white uppercase text-sm tracking-wide cursor-pointer px-2"
              onClick={() => handleLinkClick(title)}
              initial={{ opacity: 0.7 }}
              animate={{ opacity: active === title ? 1 : 0.7 }}
              whileHover={{ scale: 1.2, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <a href={`#${id}`}>{title}</a>
              {/* Underline on active */}
              {active === title && (
                <motion.span
                  className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-500"
                  layoutId="underline"
                />
              )}
            </motion.li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden sm:flex gap-6 items-center">
          {socials.map(({ icon: Icon, url }, idx) => (
            <motion.a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl"
              whileHover={{ scale: 1.3, color: '#ec4899' }}
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <Icon />
            </motion.a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="sm:hidden flex items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-8 h-8 object-contain text-white"
            onClick={() => setToggle(!toggle)}
          />
          <AnimatePresence>
            {toggle && (
              <motion.div
                className="absolute top-20 right-4 w-48 bg-gradient-to-br from-purple-900 to-pink-700 p-6 rounded-3xl shadow-2xl"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              >
                <ul className="flex flex-col gap-4">
                  {navLinks.map(({ id, title }) => (
                    <li
                      key={id}
                      className={`text-white font-medium ${active === title ? 'underline' : ''}`}
                      onClick={() => handleLinkClick(title)}
                    >
                      <a href={`#${id}`}>{title}</a>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4 mt-6 justify-center">
                  {socials.map(({ icon: Icon, url }) => (
                    <motion.a
                      key={url}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-3xl"
                      whileHover={{ scale: 1.2, color: '#7F00FF' }}
                    >
                      <Icon />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
