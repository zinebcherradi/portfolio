import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

// IMPORT CRUCIAL : Chemin relatif depuis Hero.jsx vers l'image
import zinebPhoto from '../../assets/images/zineb-detouree.png'; 

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero-bg-text display-text">PORTFOLIO</h1>

      <div className="container hero-content">
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
            <button className="btn-primary">Voir mes projets</button>
            <button className="btn-outline">Télécharger CV</button>
          </div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero-image-wrapper">
            {/* UTILISATION DE LA VARIABLE IMPORTÉE */}
            <img src={zinebPhoto} alt="Zineb Cherradi" className="hero-photo" />
            
            <div className="hero-badge">
              <span className="badge-number">3+</span>
              
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;