import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext'; // <-- Import du hook
import './Navbar.css';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme(); // <-- Utilisation du contexte

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container navbar-content">
        <div className="navbar-logo display-text">
          ZINEB<span className="logo-dot">.</span>CHERRADI
        </div>

        <ul className="navbar-links">
          <li><a href="#projects">Projets</a></li>
          <li><a href="#skills">Compétences</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label="Basculer le thème"
        >
          {isDark ? <FaSun className="icon-sun" /> : <FaMoon className="icon-moon" />}
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;