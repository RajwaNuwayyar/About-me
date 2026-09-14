import React, { useState } from 'react';
import { Layers, Globe, Terminal, ExternalLink, ArrowUpRight, Cpu, Award, Compass } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { soundFx } from '../utils/soundFx';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: 'all', label: 'All', icon: Layers },
    { id: 'robotics', label: 'Robotics & Hardware', icon: Cpu },
    { id: 'web', label: 'Web & Fullstack', icon: Globe },
    { id: 'apps', label: 'Apps & Tools', icon: Terminal },
    { id: 'certificate', label: 'Certificate', icon: Award },
    { id: 'exploration', label: 'Exploration', icon: Compass }
  ];

  const filteredProjects = activeFilter === 'all'
    ? portfolioData.projects
    : portfolioData.projects.filter((p) => p.category === activeFilter);

  const getCategoryBadgeClass = (category) => {
    switch (category) {
      case 'robotics': return 'badge-amber';
      case 'web': return 'badge-cyan';
      case 'apps': return 'badge-violet';
      case 'certificate': return 'badge-emerald';
      case 'exploration': return 'badge-amber';
      default: return 'badge-cyan';
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <Layers size={15} />
            <span>Engineered Systems</span>
          </div>
          <h2 className="section-title">
            Featured <span className="section-title-gradient">Projects & Inventions</span>
          </h2>
          <p className="section-subtitle">
            A curated showcase of autonomous hardware, high-throughput cloud dashboards, and cross-platform desktop applications.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="projects-filter-bar">
          {filters.map((f) => {
            const Icon = f.icon;
            return (
              <button
                key={f.id}
                className={`filter-btn ${activeFilter === f.id ? 'active' : ''}`}
                onClick={() => {
                  soundFx.click();
                  setActiveFilter(f.id);
                }}
                onMouseEnter={() => soundFx.hover()}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Icon size={15} />
                  {f.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onMouseEnter={() => soundFx.hover()}
            >
              <div className="project-card-header">
                <div className="project-badge-group">
                  <span className={`badge ${getCategoryBadgeClass(project.category)}`}>
                    <span className="badge-pulse-dot" />
                    <span>{project.category}</span>
                  </span>
                  {project.featured && (
                    <span className="badge badge-cyan" style={{ fontSize: '0.68rem', padding: '0.2rem 0.6rem' }}>
                      FEATURED
                    </span>
                  )}
                </div>

                <button
                  className="btn-icon"
                  style={{ width: '32px', height: '32px' }}
                  onClick={() => {
                    soundFx.blip();
                    setSelectedProject(project);
                  }}
                  title="View Specs & Architecture"
                >
                  <ArrowUpRight size={16} />
                </button>
              </div>

              {project.image && (
                <div style={{
                  width: '100%',
                  height: '180px',
                  borderBottom: '1px solid var(--border-subtle)',
                  borderTop: '1px solid var(--border-subtle)',
                  marginBottom: '1.25rem',
                  overflow: 'hidden'
                }}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                    className="project-card-img"
                  />
                </div>
              )}

              <div className="project-card-body">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-subtitle">{project.subtitle}</div>
                <p className="project-desc">{project.description}</p>

                {/* Primary Metrics */}
                {project.metrics && (
                  <div className="project-metrics-chip-row">
                    {Object.entries(project.metrics).slice(0, 2).map(([key, val]) => (
                      <div key={key}>
                        <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontFamily: 'JetBrains Mono, monospace', textTransform: 'uppercase' }}>
                          {key.replace(/([A-Z])/g, ' $1')}
                        </div>
                        <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'Space Grotesk, sans-serif' }}>
                          {val}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Pills */}
                <div className="project-tags-row">
                  {project.tags.slice(0, 4).map((tag, idx) => (
                    <span key={idx} className="project-tech-pill">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="project-tech-pill" style={{ color: 'var(--accent-primary)' }}>
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>

              <div className="project-card-footer">
                <button
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--accent-primary)',
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: 600,
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: 0
                  }}
                  onClick={() => {
                    soundFx.blip();
                    setSelectedProject(project);
                  }}
                >
                  <span>Detailed Architecture</span>
                  <ArrowUpRight size={15} />
                </button>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-icon"
                      style={{ width: '32px', height: '32px' }}
                      aria-label="GitHub Repository"
                      onClick={() => soundFx.click()}
                    >
                      <GithubIcon size={15} />
                    </a>
                  )}
                  {project.links?.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-icon"
                      style={{ width: '32px', height: '32px' }}
                      aria-label="Live Demo"
                      onClick={() => soundFx.click()}
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                  {project.links?.cert1 && (
                    <a
                      href={project.links.cert1}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-icon"
                      style={{ width: '32px', height: '32px' }}
                      aria-label="View Certificate 1"
                      onClick={() => soundFx.click()}
                    >
                      <Award size={15} />
                    </a>
                  )}
                  {project.links?.cert2 && (
                    <a
                      href={project.links.cert2}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-icon"
                      style={{ width: '32px', height: '32px' }}
                      aria-label="View Certificate 2"
                      onClick={() => soundFx.click()}
                    >
                      <Award size={15} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep-Dive Spec Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
