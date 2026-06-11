import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { aboutData, personalInfo } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeading from './SectionHeading';
import { FiDownload } from 'react-icons/fi';
import './About.css';

const About = () => {
  const { theme } = useTheme();
  const { ref, isInView } = useScrollAnimation(0.15);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <section className="about" id="about">
      <div className="container">
        <SectionHeading subtitle="get to know me" title="About Me" />
        
        <motion.div 
          className="about__content"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* LEFT COLUMN: Character image */}
          <motion.div className="about__left" variants={imageVariants}>
            <div className="about__image-wrapper">
              <div className="about__image-bg"></div>
              <img 
                src={theme === 'light' ? '/hello-kitty-about.png' : '/kuromi-about.png'} 
                alt={theme === 'light' ? 'Hello Kitty Reading' : 'Kuromi Reading'} 
                className="about__image"
              />
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Bio & Stats */}
          <motion.div className="about__right" variants={containerVariants}>
            <motion.p className="about__description" variants={itemVariants}>
              {aboutData.description}
            </motion.p>
            
            <motion.div className="about__stats" variants={containerVariants}>
              {aboutData.stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="stat-card" 
                  variants={itemVariants}
                >
                  <span className="stat-card__value">{stat.value}</span>
                  <span className="stat-card__label">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="about__cv-btn-wrapper" variants={itemVariants}>
              <a 
                href={personalInfo.resumeFile} 
                download="Bushra_Noor_Resume.pdf"
                className="btn btn--primary about__cv-btn"
              >
                Download CV <FiDownload size={18} />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
