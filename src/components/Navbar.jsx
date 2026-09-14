import React, { useState, useEffect } from 'react';
import { Bot, Volume2, VolumeX, Terminal, Menu, X, Command } from 'lucide-react';
import { soundFx } from '../utils/soundFx';

export default function Navbar({ onOpenCommandPalette, soundMuted, onToggleSound }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'robotics', 'projects', 'skills', 'terminal', 'experience', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Robotics Lab', href: '#robotics', id: 'robotics' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Terminal', href: '#terminal', id: 'terminal' },
    { label: 'Contact', href: '#contact', id: 'contact' }
  ];

  const handleNavClick = (href) => {
    soundFx.click();
    setMobileMenuOpen(false);
  };

  return (
    <header className={`cyber-navbar ${scrolled ? 'scrolled' : ''}`}>
      {/* Brand Logo */}
      <a href="#home" className="nav-brand" onClick={() => soundFx.blip()}>
        <div className="brand-icon-box">
          <Bot size={18} />
        </div>
        <span>RAJWA<span style={{ color: 'var(--accent-primary)' }}>.DEV</span></span>
      </a>

      {/* Desktop Navigation */}
      <nav className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => handleNavClick(item.href)}
            onMouseEnter={() => soundFx.hover()}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Quick Action Controls */}
      <div className="nav-actions">
        {/* Command Palette Trigger */}
        <button
          className="btn-icon"
          onClick={() => {
            soundFx.blip();
            onOpenCommandPalette();
          }}
          title="Open Command Palette (Ctrl+K)"
          aria-label="Open Command Palette"
        >
          <Command size={17} />
        </button>

        {/* Audio Toggle */}
        <button
          className="btn-icon"
          onClick={() => {
            onToggleSound();
          }}
          title={soundMuted ? "Enable Audio Effects" : "Mute Audio Effects"}
          aria-label="Toggle Sound Effects"
        >
          {soundMuted ? <VolumeX size={17} /> : <Volume2 size={17} style={{ color: 'var(--accent-primary)' }} />}
        </button>

        {/* Mobile Toggle */}
        <button
          className="btn-icon mobile-menu-btn"
          onClick={() => {
            soundFx.click();
            setMobileMenuOpen(!mobileMenuOpen);
          }}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}
