import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { personalInfo, services } from '../data/portfolioData';
import { FiCode, FiMonitor, FiDatabase, FiStar, FiArrowRight } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  const { theme } = useTheme();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="hero" id="home">
      <div className="container hero__container-layout">
        <div className="hero__content">
          {/* LEFT COLUMN */}
          <motion.div className="hero__left" variants={containerVariants} initial="hidden" animate="visible">
            <motion.p className="hero__greeting" variants={itemVariants}>
              {theme === 'light' ? personalInfo.greeting : personalInfo.greetingDark}
            </motion.p>
            <motion.h1 className="hero__title" variants={itemVariants}>
              I'm <span className="text-accent">{personalInfo.titleHighlight}</span>
              <br />
              {personalInfo.titleRest}
            </motion.h1>
            <motion.p className="hero__tagline" variants={itemVariants}>
              {personalInfo.tagline}
            </motion.p>
            <motion.div className="hero__buttons" variants={itemVariants}>
              <a href="#projects" className="btn btn--primary">
                View My Work <FiArrowRight />
              </a>
              <a href="#about" className="btn btn--outline">
                About Me <FiArrowRight />
              </a>
            </motion.div>
            <motion.div className="hero__scroll-indicator" variants={itemVariants}>
              <div className="scroll-icon"></div>
              <span>Scroll to explore</span>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div className="hero__right"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Decorative background circle */}
            <div className="hero__bg-circle"></div>
            
            {/* Browser mockup */}
            <div className="hero__browser-mockup">
              <div className="browser__dots">
                <span className="dot dot--red"></span>
                <span className="dot dot--yellow"></span>
                <span className="dot dot--green"></span>
              </div>
              <div className="browser__content">
                <span className="browser__code">&lt;/&gt;</span>
                <div className="browser__lines">
                  <span className="line"></span>
                  <span className="line line--short"></span>
                  <span className="line"></span>
                </div>
              </div>
            </div>

            {/* Character image */}
            <motion.img
              key={theme}
              src={theme === 'light' ? '/hello-kitty-hero.png' : '/kuromi-hero.png'}
              alt={theme === 'light' ? 'Hello Kitty Developer' : 'Kuromi Developer'}
              className="hero__character-img"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />

            {/* Sparkle decorations */}
            <span className="sparkle sparkle--1">✦</span>
            <span className="sparkle sparkle--2">✦</span>
          </motion.div>
        </div>

        {/* Services Bar */}
        <motion.div className="hero__services-bar"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-item__icon">
                {service.icon === 'FiCode' && <FiCode size={24} />}
                {service.icon === 'FiMonitor' && <FiMonitor size={24} />}
                {service.icon === 'FiDatabase' && <FiDatabase size={24} />}
                {service.icon === 'FiStar' && <FiStar size={24} />}
              </div>
              <span className="service-item__label">{service.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
