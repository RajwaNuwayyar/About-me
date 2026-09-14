import React, { useState } from 'react';
import { Cpu, Globe, Terminal, Wrench } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { soundFx } from '../utils/soundFx';

export default function SkillsMatrix() {
  const { portfolioData } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('web');
  const { skillsCategories } = portfolioData;

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Cpu': return <Cpu size={18} />;
      case 'Globe': return <Globe size={18} />;
      case 'Terminal': return <Terminal size={18} />;
      default: return <Wrench size={18} />;
    }
  };

  const currentCategoryData = skillsCategories.find((c) => c.id === activeCategory) || skillsCategories[0];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <Terminal size={15} />
            <span>{portfolioData.sections.skills.label}</span>
          </div>
          <h2 className="section-title">
            {portfolioData.sections.skills.title1} <span className="section-title-gradient">{portfolioData.sections.skills.title2}</span>
          </h2>
          <p className="section-subtitle">
            {portfolioData.sections.skills.subtitle}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="skills-category-tabs">
          {skillsCategories.map((cat) => (
            <button
              key={cat.id}
              className={`skill-category-tab ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => {
                soundFx.click();
                setActiveCategory(cat.id);
              }}
              onMouseEnter={() => soundFx.hover()}
            >
              {getIcon(cat.icon)}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Service Content */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
          {/* Category Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6' }}>
              {currentCategoryData.desc}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {/* Skills Cards Grid */}
            <div className="skills-deck-grid" style={{ gridTemplateColumns: '1fr' }}>
              {currentCategoryData.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="skill-matrix-card"
                  onMouseEnter={() => soundFx.hover()}
                  style={{ marginBottom: '1rem' }}
                >
                  <div className="skill-card-top">
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <p className="skill-desc">{skill.desc}</p>
                </div>
              ))}
            </div>

            {/* Category Preview Image */}
            {currentCategoryData.image && (
              <div style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                border: '1px solid var(--border-subtle)',
                background: 'rgba(0,0,0,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src={currentCategoryData.image} 
                  alt={currentCategoryData.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
