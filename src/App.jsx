import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InteractiveCanvas from './components/InteractiveCanvas';
import RobotLab from './components/RobotLab';
import Projects from './components/Projects';
import SkillsMatrix from './components/SkillsMatrix';
import TerminalWidget from './components/TerminalWidget';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import { soundFx } from './utils/soundFx';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  const [theme, setTheme] = useState('cyan');
  const [soundMuted, setSoundMuted] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  // Apply theme to document body
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    document.body.setAttribute('data-theme', newTheme);
  };

  // Toggle Sound FX
  const handleToggleSound = () => {
    const newState = !soundMuted;
    setSoundMuted(newState);
    soundFx.setEnabled(!newState);
    if (!newState) {
      soundFx.blip();
    }
  };

  // Listen for Ctrl+K or Cmd+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        soundFx.blip();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToSimulator = () => {
    const el = document.getElementById('robotics');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <LanguageProvider>
      <div className="portfolio-app-root">
      {/* Background Ambient Glows & Grid */}
      <div className="ambient-background">
        <div className="ambient-grid" />
        <div className="ambient-orb ambient-orb-1" />
        <div className="ambient-orb ambient-orb-2" />
        <div className="ambient-orb ambient-orb-3" />
      </div>

      {/* Interactive Constellation Canvas */}
      <InteractiveCanvas />

      {/* Navigation Header */}
      <Navbar
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        soundMuted={soundMuted}
        onToggleSound={handleToggleSound}
      />

      {/* Main Content Flow */}
      <main>
        <Hero onOpenSimulator={scrollToSimulator} />
        <RobotLab />
        <Projects />
        <SkillsMatrix />
        <TerminalWidget onThemeChange={handleThemeChange} />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Command Palette (Ctrl+K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onThemeChange={handleThemeChange}
        onToggleSound={handleToggleSound}
      />
    </div>
    </LanguageProvider>
  );
}
