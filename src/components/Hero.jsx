import React, { useState, useEffect } from 'react';
import { Bot, Code2, ArrowRight, Sparkles, Terminal, Activity, Cpu, Radio, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsappIcon, TiktokIcon, FacebookIcon } from './Icons';
import { useLanguage } from '../context/LanguageContext';
import { soundFx } from '../utils/soundFx';

const ROLES_EN = [
  "Web Applications",
  "UI/UX Design Systems",
  "IT & Hardware Support",
  "Network Infrastructure",
  "Python Integrations"
];

const ROLES_ID = [
  "Aplikasi Web",
  "Sistem Desain UI/UX",
  "Dukungan IT & Hardware",
  "Infrastruktur Jaringan",
  "Integrasi Python"
];

export default function Hero({ onOpenSimulator }) {
  const { language, portfolioData } = useLanguage();
  const { personal } = portfolioData;
  const ROLES = language === 'id' ? ROLES_ID : ROLES_EN;
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [ping, setPing] = useState(18);

  // Typewriter effect
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const typeSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));
        if (text.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  // Jitter ping for realism
  useEffect(() => {
    const interval = setInterval(() => {
      setPing(Math.floor(14 + Math.random() * 8));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Bio & Intro */}
          <div>
            <div className="badge badge-cyan" style={{ marginBottom: '1.25rem' }}>
              <Terminal size={14} />
              <span>{portfolioData.sections.hero.greeting}</span>
            </div>

            <h1 className="hero-title">
              Engineering <br />
              <span className="hero-typewriter-wrapper">
                {text}
                <span className="hero-typewriter-cursor" />
              </span>
            </h1>

            <p className="hero-bio">
              {personal.bio}
            </p>

            {/* CTAs */}
            <div className="hero-cta-group">
              <a
                href="#projects"
                className="btn btn-primary"
                onClick={() => soundFx.click()}
              >
                <span>Explore Projects</span>
                <ArrowRight size={17} />
              </a>

              <button className="btn btn-primary" onClick={onOpenSimulator} onMouseEnter={() => soundFx.hover()}>
                <Sparkles size={18} />
                <span>{portfolioData.sections.hero.start}</span>
              </button>

              <a
                href="#terminal"
                className="btn btn-outline"
                onClick={() => soundFx.click()}
              >
                <Terminal size={17} />
                <span>Interactive CLI</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="hero-socials" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.65rem', marginBottom: '2rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', marginRight: '0.5rem', fontFamily: 'Space Grotesk, sans-serif' }}>
              {portfolioData.sections.hero.connect}:
            </span>
              {personal.socials.whatsapp && (
                <a
                  href={personal.socials.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-icon"
                  title="WhatsApp"
                  aria-label="WhatsApp"
                  onClick={() => soundFx.click()}
                >
                  <WhatsappIcon size={16} />
                </a>
              )}
              {personal.socials.instagram && (
                <a
                  href={personal.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-icon"
                  title="Instagram"
                  aria-label="Instagram"
                  onClick={() => soundFx.click()}
                >
                  <InstagramIcon size={16} />
                </a>
              )}
              {personal.socials.tiktok && (
                <a
                  href={personal.socials.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-icon"
                  title="TikTok"
                  aria-label="TikTok"
                  onClick={() => soundFx.click()}
                >
                  <TiktokIcon size={16} />
                </a>
              )}
              {personal.socials.facebook && (
                <a
                  href={personal.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-icon"
                  title="Facebook"
                  aria-label="Facebook"
                  onClick={() => soundFx.click()}
                >
                  <FacebookIcon size={16} />
                </a>
              )}
              {personal.socials.github && (
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-icon"
                  title="GitHub"
                  aria-label="GitHub"
                  onClick={() => soundFx.click()}
                >
                  <GithubIcon size={16} />
                </a>
              )}
              {personal.socials.linkedin && (
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-icon"
                  title="LinkedIn"
                  aria-label="LinkedIn"
                  onClick={() => soundFx.click()}
                >
                  <LinkedinIcon size={16} />
                </a>
              )}
              {personal.socials.email && (
                <a
                  href={`mailto:${personal.socials.email}`}
                  className="btn-icon"
                  title="Email"
                  aria-label="Email"
                  onClick={() => soundFx.click()}
                >
                  <Mail size={16} />
                </a>
              )}
            </div>


          </div>

          {/* Right Column: Interactive Cyber Telemetry Card */}
          <div className="hero-card-container">
            <div className="cyber-card-frame">
              {/* Corner brackets */}
              <div className="cyber-card-corner corner-tl" />
              <div className="cyber-card-corner corner-tr" />
              <div className="cyber-card-corner corner-bl" />
              <div className="cyber-card-corner corner-br" />

              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Activity size={17} style={{ color: 'var(--accent-primary)' }} />
                  <span className="font-mono" style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    CORE_TELEMETRY.SYS
                  </span>
                </div>
                <div className="badge badge-emerald">
                  <span className="badge-pulse-dot" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Status Display Matrix */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem', marginBottom: '1.25rem' }}>
                <div style={{ background: 'rgba(0,0,0,0.35)', padding: '0.85rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'JetBrains Mono, monospace' }}>NODE LATENCY</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent-primary)', fontFamily: 'Space Grotesk, sans-serif' }}>
                    {ping} ms
                  </div>
                </div>

                <div style={{ background: 'rgba(0,0,0,0.35)', padding: '0.85rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'JetBrains Mono, monospace' }}>ACTIVE PROTOCOL</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#38bdf8', fontFamily: 'Space Grotesk, sans-serif' }}>
                    ROS 2 + WSS
                  </div>
                </div>

                <div style={{ background: 'rgba(0,0,0,0.35)', padding: '0.85rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'JetBrains Mono, monospace' }}>KINEMATICS ENGINE</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-amber)', fontFamily: 'Space Grotesk, sans-serif' }}>
                    6-DOF Solved
                  </div>
                </div>

                <div style={{ background: 'rgba(0,0,0,0.35)', padding: '0.85rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'JetBrains Mono, monospace' }}>UI RENDER FPS</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#34d399', fontFamily: 'Space Grotesk, sans-serif' }}>
                    60.0 FPS
                  </div>
                </div>
              </div>

              {/* Live Terminal Snippet */}
              <div style={{
                background: 'rgba(4, 7, 13, 0.85)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '8px',
                padding: '0.85rem 1rem',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.78rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }}>
                <div style={{ color: 'var(--accent-primary)' }}>$ ros2 topic echo /robot/joint_states</div>
                <div>[INFO] Base: 45.2° | Shoulder: -32.8° | Elbow: 78.4°</div>
                <div style={{ color: '#34d399' }}>✓ End-effector coordinate: [X: 242mm, Y: 110mm, Z: 85mm]</div>
                <div style={{ color: 'var(--text-muted)' }}>✓ Kinematic loop frequency: 200 Hz</div>
              </div>

              {/* Quick Interactive Button */}
              <button
                style={{
                  width: '100%',
                  marginTop: '1.25rem',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  background: 'rgba(var(--accent-rgb), 0.12)',
                  border: '1px solid var(--accent-primary)',
                  color: 'var(--accent-primary)',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.2s ease'
                }}
                onClick={() => {
                  soundFx.servo();
                  onOpenSimulator();
                }}
                onMouseEnter={() => soundFx.hover()}
              >
                <Cpu size={16} />
                <span>Test Interactive Robotic Arm in Lab</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
