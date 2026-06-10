import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeading from './SectionHeading';
import { FaGraduationCap } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const { ref, isInView } = useScrollAnimation(0.15);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const pillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section className="education" id="education">
      <div className="container">
        <SectionHeading subtitle="my education" title="Education" />
        
        <motion.div
          className="education__content"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="education-card"
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: 'var(--shadow-card-hover)', borderColor: 'var(--color-primary)' }}
            >
              <div className="education-card__header">
                <div className="education-card__icon-wrapper">
                  <FaGraduationCap size={28} />
                </div>
                <div className="education-card__title-block">
                  <span className="education-card__period">{edu.period}</span>
                  <h3 className="education-card__degree">{edu.degree}</h3>
                  <h4 className="education-card__institution">{edu.institution}</h4>
                </div>
              </div>

              {edu.coursework && edu.coursework.length > 0 && (
                <div className="education-card__coursework">
                  <h5 className="education-card__coursework-title">Key Coursework</h5>
                  <div className="education-card__coursework-pills">
                    {edu.coursework.map((course, idx) => (
                      <motion.span
                        key={idx}
                        className="education-card__coursework-pill"
                        variants={pillVariants}
                        whileHover={{ scale: 1.05, background: 'var(--color-primary)', color: 'var(--color-text-on-primary)' }}
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
