import React from 'react';
import './styles/global.css';

// ✅ Imports obligatoires — vérifiez que les chemins correspondent exactement à votre arborescence
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <Hero />
        <Projects />
        <Skills /> 
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;