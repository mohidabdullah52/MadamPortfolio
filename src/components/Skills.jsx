import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeading from './SectionHeading';
import './Skills.css';

const Skills = () => {
  const { ref, isInView } = useScrollAnimation(0.15);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const pillVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section className="skills" id="skills">
      <div className="container">
        <SectionHeading subtitle="what I know" title="My Skills" />
        
        <motion.div
          className="skills__grid"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {Object.entries(skillsData).map(([key, category]) => (
            <motion.div
              key={key}
              className="skills__card"
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: 'var(--shadow-card-hover)', borderColor: 'var(--color-primary)' }}
            >
              <h3 className="skills__card-title">{category.title}</h3>
              <div className="skills__pills">
                {category.items.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="skills__pill"
                    variants={pillVariants}
                    whileHover={{ scale: 1.05, background: 'var(--color-primary)', color: 'var(--color-text-on-primary)' }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
