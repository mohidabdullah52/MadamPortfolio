import React from 'react';
import { motion } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  const appVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <ThemeProvider>
      <motion.div 
        className="app"
        variants={appVariants}
        initial="hidden"
        animate="visible"
      >
        <Navbar />
        
        <main>
          {/* Hero Section */}
          <Hero />
          
          {/* About Section */}
          <About />
          
          {/* Skills Section */}
          <Skills />

          {/* Projects Section */}
          <Projects />

          {/* Experience Section */}
          <Experience />

          {/* Education Section */}
          <Education />

          {/* Contact Section */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
        
        <ScrollToTop />
      </motion.div>
    </ThemeProvider>
  );
}

export default App;
