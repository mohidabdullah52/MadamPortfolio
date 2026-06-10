import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import KittyBowIcon from '../assets/icons/KittyBowIcon';
import KuromiSkullIcon from '../assets/icons/KuromiSkullIcon';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './SectionHeading.css';

const SectionHeading = ({ subtitle, title }) => {
  const { theme } = useTheme();
  const { ref, isInView } = useScrollAnimation(0.1);

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <motion.div 
      className="section-heading"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <span className="section-heading__subtitle">{subtitle}</span>
      <h2 className="section-heading__title">{title}</h2>
      <div className="section-heading__decorator">
        <span className="section-heading__line"></span>
        <div className="section-heading__icon-wrapper">
          {theme === 'light' ? (
            <KittyBowIcon className="section-heading__icon" size={24} />
          ) : (
            <KuromiSkullIcon className="section-heading__icon" size={24} />
          )}
        </div>
        <span className="section-heading__line"></span>
      </div>
    </motion.div>
  );
};

export default SectionHeading;
