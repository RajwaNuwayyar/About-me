import React from 'react';
import { X, ExternalLink, Cpu, Layers, CheckCircle2, Zap } from 'lucide-react';
import { GithubIcon } from './Icons';
import { soundFx } from '../utils/soundFx';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="project-modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          soundFx.click();
          onClose();
        }
      }}
    >
      <div className="project-modal">
        {/* Header */}
        <div className="project-modal-header">
          <div>
            <div className="badge badge-cyan" style={{ marginBottom: '0.5rem' }}>
              <span>{project.category.toUpperCase()} SPECIFICATION</span>
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              {project.title}
            </h3>
            <div style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', fontFamily: 'Space Grotesk, sans-serif' }}>
              {project.subtitle}
            </div>
          </div>

          <button
            className="btn-icon"
            onClick={() => {
              soundFx.click();
              onClose();
            }}
            aria-label="Close Modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="project-modal-body">
          {project.image && (
            <div style={{
              width: '100%',
              maxHeight: '300px',
              borderRadius: '8px',
              overflow: 'hidden',
              marginBottom: '1.5rem',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <img 
                src={project.image} 
                alt={project.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          )}

          {/* Extended Description */}
          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '0.5rem', fontFamily: 'JetBrains Mono, monospace' }}>
              // ARCHITECTURAL OVERVIEW
            </h4>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.96rem' }}>
              {project.extendedDescription || project.description}
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '0.75rem', fontFamily: 'JetBrains Mono, monospace' }}>
              // ENGINEERING METRICS & BENCHMARKS
            </h4>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '0.75rem'
            }}>
              {Object.entries(project.metrics).map(([key, val]) => (
                <div
                  key={key}
                  style={{
                    background: 'rgba(0,0,0,0.3)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '8px',
                    padding: '0.75rem 1rem'
                  }}
                >
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'JetBrains Mono, monospace', textTransform: 'uppercase' }}>
                    {key.replace(/([A-Z])/g, ' $1')}
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-primary)', fontFamily: 'Space Grotesk, sans-serif' }}>
                    {val}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '0.75rem', fontFamily: 'JetBrains Mono, monospace' }}>
              // DEPLOYED TECHNOLOGIES & PROTOCOLS
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.tags.map((tag, idx) => (
                <span key={idx} className="project-tech-pill" style={{ fontSize: '0.8rem', padding: '0.3rem 0.75rem' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Links & CTA */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            paddingTop: '1rem',
            borderTop: '1px solid rgba(255,255,255,0.06)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="badge-pulse-dot" style={{ background: '#34d399' }} />
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'JetBrains Mono, monospace' }}>
                Status: {project.status}
              </span>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                  onClick={() => soundFx.click()}
                >
                  <GithubIcon size={16} />
                  <span>Source Code</span>
                </a>
              )}
              {project.links?.demo && (
                <a
                  href={project.links.demo}
                  className="btn btn-primary"
                  onClick={() => {
                    soundFx.blip();
                    if (project.links.demo === '#simulator') {
                      onClose();
                    }
                  }}
                >
                  <span>Launch Live System</span>
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
