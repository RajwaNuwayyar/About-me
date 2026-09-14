import React, { useState } from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { soundFx } from '../utils/soundFx';

export default function Experience() {
  const { timeline } = portfolioData;
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (idx) => {
    soundFx.click();
    if (expandedId === idx) {
      setExpandedId(null);
    } else {
      setExpandedId(idx);
    }
  };

  return (
    <section id="experience" className="timeline-section">
      <div className="container">
        <div className="section-header">
          <div className="section-label">
            <Briefcase size={15} />
            <span>Engineering Track Record</span>
          </div>
          <h2 className="section-title">
            Career & <span className="section-title-gradient">Milestones</span>
          </h2>
          <p className="section-subtitle">
            A journey bridging software architecture, robotic automation, and hardware-software co-design.
          </p>
        </div>

        <div className="timeline-track">
          <div className="timeline-line" />

          {timeline.map((item, idx) => {
            const isExpanded = expandedId === idx;
            return (
              <div
                key={idx}
                className="timeline-item"
                onMouseEnter={() => soundFx.hover()}
              >
                <div className="timeline-marker">
                  <div className="timeline-marker-inner" />
                </div>

                <div 
                  className="timeline-card" 
                  onClick={() => toggleExpand(idx)}
                  style={{ cursor: 'pointer', transition: 'all var(--transition-smooth)' }}
                >
                  <div className="timeline-year">{item.year}</div>
                  <h3 className="timeline-role">{item.role}</h3>
                  <div className="timeline-company">{item.company}</div>
                  <p className="timeline-desc">{item.description}</p>
                  
                  {item.image && (
                    <div style={{
                      display: 'grid',
                      gridTemplateRows: isExpanded ? '1fr' : '0fr',
                      transition: 'grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      marginTop: isExpanded ? '1.25rem' : '0'
                    }}>
                      <div style={{ overflow: 'hidden' }}>
                        <div style={{ 
                          borderRadius: '8px', 
                          border: '1px solid var(--border-subtle)',
                          padding: '0.25rem',
                          background: 'rgba(0,0,0,0.2)'
                        }}>
                          <img 
                            src={item.image} 
                            alt={item.company} 
                            style={{ 
                              width: '100%', 
                              height: 'auto', 
                              objectFit: 'contain', 
                              display: 'block',
                              borderRadius: '6px'
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
