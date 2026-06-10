import React from 'react';
import { Link } from 'react-scroll';
import { useTheme } from '../context/ThemeContext';
import KittyBowIcon from '../assets/icons/KittyBowIcon';
import KuromiSkullIcon from '../assets/icons/KuromiSkullIcon';
import { navLinks, personalInfo } from '../data/portfolioData';
import { FiGithub, FiLinkedin, FiHeart } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="footer">
      <div className="container footer__container">
        {/* Logo and Tagline */}
        <div className="footer__brand">
          <Link to="home" smooth={true} duration={500} className="footer__logo" style={{ cursor: 'pointer' }}>
            {theme === 'light' ? (
              <>
                <KittyBowIcon size={28} className="footer__logo-icon" />
                <span className="footer__logo-text">{personalInfo.logoTextLight}</span>
              </>
            ) : (
              <>
                <KuromiSkullIcon size={28} className="footer__logo-icon" />
                <span className="footer__logo-text">{personalInfo.logoTextDark}</span>
              </>
            )}
          </Link>
          <p className="footer__tagline">
            Building reliable backend systems and beautiful frontend interfaces.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer__nav">
          <h4 className="footer__title">Quick Links</h4>
          <ul className="footer__links">
            {navLinks.map((link) => (
              <li key={link.id} className="footer__item">
                <Link
                  to={link.id}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="footer__link"
                  style={{ cursor: 'pointer' }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Connections */}
        <div className="footer__socials-block">
          <h4 className="footer__title">Connect</h4>
          <div className="footer__socials">
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer__social-btn"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer__social-btn"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom copyright and credits */}
      <div className="footer__bottom">
        <div className="container footer__bottom-container">
          <p className="footer__copy">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="footer__credits">
            Made with <FiHeart className="heart-icon" /> by {personalInfo.name}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
