import React from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeading from './SectionHeading';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
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
    hidden: (direction) => ({
      opacity: 0,
      x: direction,
      y: 20
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="projects" id="projects">
      <div className="container">
        <SectionHeading subtitle="my work" title="Projects" />
        
        <motion.div
          className="projects__list"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projectsData.map((project, index) => {
            // Alternate entrance directions: even index from left (-60px), odd index from right (60px)
            const direction = index % 2 === 0 ? -60 : 60;

            return (
              <motion.div
                key={index}
                className="project-card"
                variants={cardVariants}
                custom={direction}
              >
                <div className="project-card__content">
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__description">{project.description}</p>
                  
                  {project.bullets && (
                    <ul className="project-card__bullets">
                      {project.bullets.map((bullet, bulletIdx) => (
                        <li key={bulletIdx} className="project-card__bullet">
                          <span className="project-card__bullet-dot">•</span>
                          <span className="project-card__bullet-text">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  <div className="project-card__footer">
                    <div className="project-card__tech">
                      {project.tech.map((techItem, techIdx) => (
                        <span key={techIdx} className="project-card__tech-tag">
                          {techItem}
                        </span>
                      ))}
                    </div>
                    
                    <div className="project-card__links">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-card__link project-card__link--github"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <FiGithub size={20} />
                          <span>Code</span>
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-card__link project-card__link--live"
                          aria-label={`View ${project.title} live demo`}
                        >
                          <FiExternalLink size={20} />
                          <span>Live</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
