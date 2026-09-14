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

<<<<<<< HEAD
              <button className="btn btn-primary" onClick={onOpenSimulator} onMouseEnter={() => soundFx.hover()}>
=======
              <button
                className="btn btn-primary"
                onClick={() => {
                  soundFx.servo();
                  onOpenSimulator();
                }}
                onMouseEnter={() => soundFx.hover()}
              >
>>>>>>> 77123f097644f3bc6e3fa08a36c0fe5679582c73
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
<<<<<<< HEAD
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', marginRight: '0.5rem', fontFamily: 'Space Grotesk, sans-serif' }}>
              {portfolioData.sections.hero.connect}:
            </span>
=======
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', marginRight: '0.5rem', fontFamily: 'Space Grotesk, sans-serif' }}>
                {portfolioData.sections.hero.connect}:
              </span>
>>>>>>> 77123f097644f3bc6e3fa08a36c0fe5679582c73
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


        </div>
      </div>
    </section>
  );
}
