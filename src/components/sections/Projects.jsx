// src/components/sections/Projects.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { projects } from '../../data/projects';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="display-text section-title">SELECTED PROJECTS</h2>
          <span className="section-line"></span>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              // 👇 REDIRECTION AU CLIC SUR TOUTE LA CARTE
              onClick={() => window.open(project.link, '_blank')}
              style={{ cursor: 'pointer' }}
            >
              {/* Image du projet */}
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <span className="project-year">{project.year}</span>
                </div>
              </div>

              {/* Contenu texte */}
              <div className="project-content">
                <div className="project-number display-text">0{index + 1}</div>
                <div className="project-info">
                  <h3 className="project-title display-text">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  
                  <div className="project-tags">
                    {project.stack.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
                
                {/* Icône flèche visuelle (décorative ici car toute la carte est cliquable) */}
                <div className="project-link-icon">
                  <FaArrowRight />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;