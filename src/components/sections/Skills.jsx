import React from 'react';
import { motion } from 'framer-motion';
import { education, skills, certifications } from '../../data/skills';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="display-text section-title">EDUCATION & SKILLS</h2>
          <span className="section-line"></span>
        </motion.div>

        <div className="skills-grid">
          {/* Colonne Gauche : Formation & Certifications */}
          <motion.div 
            className="skills-column left-column"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="column-title display-text">EDUCATION</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4 className="timeline-degree">{edu.degree}</h4>
                    <p className="timeline-school">{edu.school}</p>
                    <span className="timeline-year">{edu.year} • {edu.location}</span>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="column-title display-text mt-8">CERTIFICATIONS</h3>
            <div className="cert-list">
              {certifications.map((cert, index) => (
                <div key={index} className="cert-item">
                  <h4>{cert.name}</h4>
                  <p>{cert.issuer} • {cert.year}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Colonne Droite : Compétences Techniques */}
          <motion.div 
            className="skills-column right-column"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="column-title display-text">SKILLS</h3>
            <div className="skills-categories">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="skill-category">
                  <h4 className="category-label">{category.replace('_', ' ').toUpperCase()}</h4>
                  <div className="tags-container">
                    {items.map(skill => (
                      <span key={skill} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;