import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-content">
        
        {/* Colonne Gauche : Appel à l'action */}
        <motion.div 
          className="contact-text"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="display-text contact-title">
            LET'S WORK <br />
            <span className="text-primary">TOGETHER</span>
          </h2>
          <p className="contact-description">
            Je viens de terminer ma 3ᵉ année de Génie Logiciel à l'ESISA et intégrerai un Master à la prochaine rentrée. Actuellement à la recherche d'un stage de 8 semaines (août–octobre 2026) en développement Full Stack ou en Intelligence Artificielle, je souhaite mettre en pratique mes compétences techniques au sein d'une équipe dynamique. Passionnée par la résolution de problèmes complexes et le développement de solutions innovantes, je serais ravie d'échanger sur la manière dont je peux contribuer à vos projets.
          </p>
          
          <a href="mailto:cherradi.05.zineb@gmail.com" className="btn-contact">
            ME CONTACTER
          </a>
        </motion.div>

        {/* Colonne Droite : Coordonnées */}
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <div>
              <span className="info-label">EMAIL</span>
              <a href="mailto:cherradi.05.zineb@gmail.com">cherradi.05.zineb@gmail.com</a>
            </div>
          </div>

          <div className="info-item">
            <FaPhoneAlt className="info-icon" />
            <div>
              <span className="info-label">TÉLÉPHONE</span>
              <a href="tel:+212645232012">+212 645 23 20 12</a>
            </div>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <span className="info-label">LOCALISATION</span>
              <span>Fès, Maroc</span>
            </div>
          </div>

          {/* Liens Sociaux Sécurisés et Fonctionnels */}
          <div className="social-links">
            <a 
              href="https://github.com/zinebcherradi" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub"
              className="social-link"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/zineb-cherradi-6b16592a5" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
              className="social-link"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer Minimaliste */}
      <footer className="footer-bar">
        <div className="container">
          <p>© 2026 ZINEB CHERRADI. TOUS DROITS RÉSERVÉS.</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;