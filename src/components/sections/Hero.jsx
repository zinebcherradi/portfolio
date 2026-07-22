// src/components/sections/Hero.jsx

import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

// IMPORT DE LA PHOTO (Obligatoire car elle est dans src/)
import zinebPhoto from '../../assets/images/zineb-detouree.png'; 

const Hero = () => {
  return (
    <section className="hero">
      {/* Texte géant en arrière-plan */}
      <h1 className="hero-bg-text display-text">PORTFOLIO</h1>

      <div className="container hero-content">
        {/* Colonne Gauche : Texte & Actions */}
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="hero-subtitle">Hello, I'm</p>
          <h2 className="hero-title display-text">
            ZINEB <br />
            <span className="hero-highlight">CHERRADI</span>
          </h2>
          <p className="hero-description">
            Étudiante en Génie Logiciel à l'ESISA, récemment diplômée de ma 3ᵉ année et prochainement en Master. Passionnée par les nouvelles technologies et la conception de solutions innovantes, je m'intéresse au développement de systèmes performants, sécurisés et adaptés aux besoins réels. Curieuse et motivée par la résolution de problèmes complexes, je cherche constamment à approfondir mes compétences et à créer des projets ayant un impact concret.
          </p>
          
          <div className="hero-buttons">
            {/* Bouton Scroll vers Projets */}
            <a href="#projects" className="btn-primary">
              Voir mes projets
            </a>
            
            {/* Bouton Téléchargement CV (Lien direct vers public/cv.pdf) */}
            <a 
              href="/cv.pdf" 
              download="CV_Zineb_Cherradi_FullStack_IA.pdf" 
              className="btn-outline"
            >
              Télécharger CV
            </a>
          </div>
        </motion.div>

        {/* Colonne Droite : Photo Flottante & Badge */}
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero-image-wrapper">
            <img src={zinebPhoto} alt="Zineb Cherradi" className="hero-photo" />
            
            <div className="hero-badge">
              <span className="badge-number">3+</span>
              <span className="badge-label">Années d'Expérience</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;