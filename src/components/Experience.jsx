import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeading from './SectionHeading';
import './Experience.css';

const Experience = () => {
  const { ref, isInView } = useScrollAnimation(0.15);

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: 'spring', stiffness: 200, damping: 12, delay: 0.3 }
    }
  };

  return (
    <section className="experience" id="experience">
      <div className="container">
        <SectionHeading subtitle="my journey" title="Experience" />
        
        <div className="timeline-container" ref={ref}>
          {/* Vertical Timeline Line */}
          <motion.div 
            className="timeline-line" 
            variants={lineVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{ originY: 0 }}
          />

          <motion.div
            className="timeline-list"
            variants={timelineVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {experienceData.map((exp, index) => (
              <motion.div 
                key={index} 
                className="timeline-item"
                variants={itemVariants}
              >
                {/* Timeline Dot */}
                <motion.div 
                  className="timeline-dot"
                  variants={dotVariants}
                  whileHover={{ scale: 1.3 }}
                >
                  <div className="timeline-dot-inner"></div>
                </motion.div>

                {/* Timeline Card */}
                <motion.div 
                  className="timeline-card"
                  whileHover={{ y: -5, boxShadow: 'var(--shadow-card-hover)', borderColor: 'var(--color-primary)' }}
                >
                  <span className="timeline-period">{exp.period}</span>
                  <h3 className="timeline-role">{exp.role}</h3>
                  <h4 className="timeline-company">{exp.company}</h4>
                  
                  {exp.bullets && (
                    <ul className="timeline-bullets">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx} className="timeline-bullet">
                          <span className="timeline-bullet-marker">✦</span>
                          <span className="timeline-bullet-text">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
