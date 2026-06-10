import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeading from './SectionHeading';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheckCircle } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const { ref, isInView } = useScrollAnimation(0.15);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request or mailto action
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

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

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <SectionHeading subtitle="get in touch" title="Contact Me" />
        
        <motion.div 
          className="contact__grid"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Column: Contact info */}
          <motion.div className="contact__info" variants={childVariants}>
            <h3 className="contact__title">Let's connect! 🩷</h3>
            <p className="contact__description">
              Have a question, want to work together, or just say hi? Feel free to reach out. I'll get back to you as soon as possible!
            </p>
            
            <div className="contact__details">
              <div className="contact__detail-item">
                <div className="contact__icon-wrapper">
                  <FiMail size={20} />
                </div>
                <div className="contact__detail-text">
                  <span className="label">Email</span>
                  <a href={`mailto:${personalInfo.email}`} className="value">{personalInfo.email}</a>
                </div>
              </div>

              {personalInfo.phone && (
                <div className="contact__detail-item">
                  <div className="contact__icon-wrapper">
                    <FiPhone size={20} />
                  </div>
                  <div className="contact__detail-text">
                    <span className="label">Phone</span>
                    <a href={`tel:${personalInfo.phone}`} className="value">{personalInfo.phone}</a>
                  </div>
                </div>
              )}

              <div className="contact__detail-item">
                <div className="contact__icon-wrapper">
                  <FiMapPin size={20} />
                </div>
                <div className="contact__detail-text">
                  <span className="label">Location</span>
                  <span className="value">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Social media connections */}
            <div className="contact__socials">
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn"
                aria-label="GitHub"
              >
                <FiGithub size={22} />
              </a>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={22} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Contact form */}
          <motion.div className="contact__form-container" variants={childVariants}>
            <form onSubmit={handleSubmit} className="contact__form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange}
                  required 
                  className="contact__input"
                  placeholder="Hello Kitty"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange}
                  required 
                  className="contact__input"
                  placeholder="kitty@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange}
                  required 
                  className="contact__input"
                  placeholder="Let's build something cute!"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange}
                  required 
                  rows="5" 
                  className="contact__input contact__textarea"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting} 
                className="btn btn--primary contact__submit-btn"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <FiSend size={16} />}
              </button>

              <AnimatePresence>
                {submitSuccess && (
                  <motion.div 
                    className="contact__success-msg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiCheckCircle size={18} />
                    <span>Thank you! Your message was sent successfully.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
