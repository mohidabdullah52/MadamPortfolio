import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        
        <main>
          {/* Hero Section */}
          <Hero />
          
          {/* Placeholder sections for smooth scroll testing */}
          <section id="about" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h2>About Section Placeholder</h2>
          </section>

          <section id="skills" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h2>Skills Section Placeholder</h2>
          </section>

          <section id="projects" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h2>Projects Section Placeholder</h2>
          </section>

          <section id="experience" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h2>Experience Section Placeholder</h2>
          </section>

          <section id="contact" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h2>Contact Section Placeholder</h2>
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
