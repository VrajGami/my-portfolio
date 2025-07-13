import React, { useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';
import { useInView } from '../utils/useInView';

const SectionWrapper = (Component, idName) => function HOC() {
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
        <motion.section
            ref={ref}
            variants={staggerContainer()}
            initial="hidden"
            animate={controls}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        >
            <span className='hash-span' id={idName}>
                &nbsp;
            </span>
            <Component />
        </motion.section>
    );
}

export default SectionWrapper;