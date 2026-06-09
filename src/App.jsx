import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <div style={{ padding: '40px', textAlign: 'center' }}>
          <ThemeToggle />
          <h1 style={{ marginTop: '20px' }}>Theme Test</h1>
          <p style={{ marginTop: '10px' }}>Click the toggle above to switch between Hello Kitty and Kuromi themes.</p>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
