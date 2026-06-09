import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        
        {/* Placeholder sections for smooth scroll testing */}
        <main>
          <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-bg-hero-gradient)' }}>
            <div className="container" style={{ textAlign: 'center' }}>
              <h1>Welcome to My Portfolio</h1>
              <p style={{ maxWidth: '600px', margin: '20px auto 0' }}>
                This is a test of the Hello Kitty & Kuromi themed single-page web application. Use the toggle in the Navbar to switch themes!
              </p>
            </div>
          </section>
          
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
