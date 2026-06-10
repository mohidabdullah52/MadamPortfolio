import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
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

          <section id="experience" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h2>Experience Section Placeholder</h2>
          </section>

          <section id="contact" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h2>Contact Section Placeholder</h2>
          </section>
        </main>
        
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
