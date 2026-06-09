import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { useTheme } from '../context/ThemeContext';
import KittyBowIcon from '../assets/icons/KittyBowIcon';
import KuromiSkullIcon from '../assets/icons/KuromiSkullIcon';
import ThemeToggle from './ThemeToggle';
import { navLinks, personalInfo } from '../data/portfolioData';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const { theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="navbar__container">
        {/* LOGO */}
        <Link 
          to="home" 
          smooth={true} 
          duration={500} 
          className="navbar__logo"
          onClick={closeMenu}
          style={{ cursor: 'pointer' }}
        >
          {theme === 'light' ? (
            <>
              <KittyBowIcon size={32} className="navbar__logo-icon" />
              <span className="navbar__logo-text">{personalInfo.logoTextLight}</span>
            </>
          ) : (
            <>
              <KuromiSkullIcon size={32} className="navbar__logo-icon" />
              <span className="navbar__logo-text">{personalInfo.logoTextDark}</span>
            </>
          )}
        </Link>

        {/* DESKTOP NAV LINKS */}
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.id} className="navbar__item">
              <Link
                activeClass="navbar__link--active"
                to={link.id}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="navbar__link"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* RIGHT CONTROLS */}
        <div className="navbar__right">
          <ThemeToggle />
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="navbar__cta btn btn--primary desktop-only"
          >
            Let's Talk &gt;
          </Link>
          <button 
            className="navbar__hamburger" 
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="navbar__mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="navbar__mobile-links">
              {navLinks.map((link) => (
                <li key={link.id} className="navbar__mobile-item">
                  <Link
                    activeClass="navbar__link--active"
                    to={link.id}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="navbar__mobile-link"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="navbar__mobile-item">
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="navbar__mobile-cta btn btn--primary"
                  onClick={closeMenu}
                >
                  Let's Talk &gt;
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
