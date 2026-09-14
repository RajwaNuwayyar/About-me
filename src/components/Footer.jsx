import React, { useState, useEffect } from 'react';
import { Bot, ArrowUp, Heart, Cpu, Activity, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsappIcon, TiktokIcon, FacebookIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import { soundFx } from '../utils/soundFx';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    soundFx.blip();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="cyber-footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand & Mission */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.6rem' }}>
              <div className="brand-icon-box">
                <Bot size={18} />
              </div>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif' }}>
                RAJWA<span style={{ color: 'var(--accent-primary)' }}>.DEV</span>
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', maxWidth: '380px' }}>
              Crafting digital solutions across software engineering, UI/UX design & robotics innovation.
            </p>
            {/* Social Icons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.85rem', flexWrap: 'wrap' }}>
              {portfolioData.personal.socials.whatsapp && (
                <a
                  href={portfolioData.personal.socials.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-icon"
                  title="WhatsApp"
                  aria-label="WhatsApp"
                  onClick={() => soundFx.click()}
                  style={{ width: '34px', height: '34px' }}
                >
                  <WhatsappIcon size={15} />
                </a>
              )}
              {portfolioData.personal.socials.instagram && (
                <a
                  href={portfolioData.personal.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-icon"
                  title="Instagram"
                  aria-label="Instagram"
                  onClick={() => soundFx.click()}
                  style={{ width: '34px', height: '34px' }}
                >
                  <InstagramIcon size={15} />
                </a>
              )}
              {portfolioData.personal.socials.tiktok && (
                <a
                  href={portfolioData.personal.socials.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-icon"
                  title="TikTok"
                  aria-label="TikTok"
                  onClick={() => soundFx.click()}
                  style={{ width: '34px', height: '34px' }}
                >
                  <TiktokIcon size={15} />
                </a>
              )}
              {portfolioData.personal.socials.facebook && (
                <a
                  href={portfolioData.personal.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-icon"
                  title="Facebook"
                  aria-label="Facebook"
                  onClick={() => soundFx.click()}
                  style={{ width: '34px', height: '34px' }}
                >
                  <FacebookIcon size={15} />
                </a>
              )}
              {portfolioData.personal.socials.github && (
                <a
                  href={portfolioData.personal.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-icon"
                  title="GitHub"
                  aria-label="GitHub"
                  onClick={() => soundFx.click()}
                  style={{ width: '34px', height: '34px' }}
                >
                  <GithubIcon size={15} />
                </a>
              )}
              {portfolioData.personal.socials.linkedin && (
                <a
                  href={portfolioData.personal.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-icon"
                  title="LinkedIn"
                  aria-label="LinkedIn"
                  onClick={() => soundFx.click()}
                  style={{ width: '34px', height: '34px' }}
                >
                  <LinkedinIcon size={15} />
                </a>
              )}
              {portfolioData.personal.socials.email && (
                <a
                  href={`mailto:${portfolioData.personal.socials.email}`}
                  className="btn-icon"
                  title="Email"
                  aria-label="Email"
                  onClick={() => soundFx.click()}
                  style={{ width: '34px', height: '34px' }}
                >
                  <Mail size={15} />
                </a>
              )}
            </div>
          </div>

          {/* Live Telemetry Status */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            padding: '0.75rem 1.25rem',
            borderRadius: '12px'
          }}>
            <div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'JetBrains Mono, monospace' }}>
                LOCAL STATION TIME
              </div>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--accent-primary)', fontFamily: 'JetBrains Mono, monospace' }}>
                {time || '12:00:00 PM'}
              </div>
            </div>

            <div style={{ height: '30px', width: '1px', background: 'rgba(255,255,255,0.1)' }} />

            <div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'JetBrains Mono, monospace' }}>
                SYSTEM STATUS
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.88rem', color: '#34d399', fontWeight: 600 }}>
                <span className="badge-pulse-dot" style={{ background: '#34d399' }} />
                <span>100% OPERATIONAL</span>
              </div>
            </div>
          </div>

          {/* Scroll to Top */}
          <button
            className="btn-icon"
            onClick={scrollToTop}
            title="Return to top"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Rajwa Nuwayyar Saif Lawahidz. Built with React.js, Web Audio API & HTML5 Canvas.
          </div>
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            <a href="#robotics" className="nav-link" style={{ padding: 0 }} onClick={() => soundFx.click()}>
              Robotics Lab
            </a>
            <a href="#projects" className="nav-link" style={{ padding: 0 }} onClick={() => soundFx.click()}>
              Projects
            </a>
            <a href="#terminal" className="nav-link" style={{ padding: 0 }} onClick={() => soundFx.click()}>
              Terminal
            </a>
            <a href="#contact" className="nav-link" style={{ padding: 0 }} onClick={() => soundFx.click()}>
              Transmission
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
