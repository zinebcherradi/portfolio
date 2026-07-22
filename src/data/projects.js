// src/data/projects.js

// IMPORTS DES IMAGES LOCALES (Obligatoire pour CRA)
import securebankImg from '../assets/images/securebank-preview.png';
import mrclensImg from '../assets/images/mrclens-preview.png';
import powerbiImg from '../assets/images/powerbi-preview.png';

export const projects = [
  {
    id: 'securebank',
    title: 'SECUREBANK',
    subtitle: 'APPLICATION BANCAIRE SÉCURISÉE',
    year: '2025',
    stack: ['FastAPI', 'React', 'MySQL', 'JWT', 'Zero Trust'],
    description: 'Application bancaire sécurisée avec transactions atomiques et sécurité Zero Trust.',
    image: securebankImg,
    //  LIEN GITHUB EXACT POUR SECUREBANK
    link: 'https://github.com/zinebcherradi/Bank.git' 
  },
  {
    id: 'mrclens',
    title: 'MRCLENS',
    subtitle: 'PLATEFORME TOURISTIQUE IA',
    year: '2025 - EN COURS',
    stack: ['React', 'Node.js', 'FastAPI', 'RAG', 'EfficientNetV2', 'GPT-4o'],
    description: 'Plateforme touristique intelligente avec avatar IA et vision par ordinateur (93.5% accuracy).',
    image: mrclensImg,
    link: '#' // Remplacez par le lien MrClens si disponible
  },
  {
    id: 'powerbi',
    title: 'DASHBOARD POWER BI',
    subtitle: 'OPTIMISATION FLUX URGENCES',
    year: '2026',
    stack: ['Power BI', 'SQL', 'DAX Avancé', 'Power Query'],
    description: 'Dashboard analytique santé : KPIs Door-to-Doctor et suivi capacitaire temps réel.',
    image: powerbiImg,
    // 👇 LIEN LINKEDIN EXACT POUR LE DASHBOARD
    link: 'https://www.linkedin.com/posts/zineb-cherradi-6b16592a5_c%C3%A9tait-un-v%C3%A9ritable-honneur-de-collaborer-ugcPost-7471281246493589505-O2l0/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEmZ7aUB-pi5dCVt5OewhV70Cyzd6w5wLIU'
  }
];