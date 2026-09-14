import React, { useState, useEffect, useRef } from 'react';
import { Search, Bot, Layers, Cpu, Terminal, Mail, Palette, Volume2, ArrowRight, X, MessageCircle, Share2, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { soundFx } from '../utils/soundFx';

export default function CommandPalette({ isOpen, onClose, onThemeChange, onToggleSound }) {
  const { portfolioData, language, setLanguage } = useLanguage();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const commands = [
    {
      id: 'goto-robotics',
      title: 'Launch Robotics Telemetry Lab',
      category: 'Navigation',
      icon: Bot,
      action: () => {
        window.location.hash = '#robotics';
      }
    },
    {
      id: 'goto-projects',
      title: 'Inspect Featured Projects',
      category: 'Navigation',
      icon: Layers,
      action: () => {
        window.location.hash = '#projects';
      }
    },
    {
      id: 'goto-skills',
      title: 'View Skills & Hardware Arsenal',
      category: 'Navigation',
      icon: Cpu,
      action: () => {
        window.location.hash = '#skills';
      }
    },
    {
      id: 'goto-terminal',
      title: 'Open Interactive CLI Terminal',
      category: 'Navigation',
      icon: Terminal,
      action: () => {
        window.location.hash = '#terminal';
      }
    },
    {
      id: 'goto-contact',
      title: 'Initiate Contact Transmission',
      category: 'Navigation',
      icon: Mail,
      action: () => {
        window.location.hash = '#contact';
      }
    },
    {
      id: 'social-whatsapp',
      title: 'Open WhatsApp (Direct Chat)',
      category: 'Socials',
      icon: MessageCircle,
      action: () => window.open(portfolioData.personal.socials.whatsapp, '_blank')
    },
    {
      id: 'social-instagram',
      title: 'Open Instagram Profile (@rajwa_nxl)',
      category: 'Socials',
      icon: Share2,
      action: () => window.open(portfolioData.personal.socials.instagram, '_blank')
    },
    {
      id: 'social-tiktok',
      title: 'Open TikTok Profile (@rajwa_nxl)',
      category: 'Socials',
      icon: Share2,
      action: () => window.open(portfolioData.personal.socials.tiktok, '_blank')
    },
    {
      id: 'social-facebook',
      title: 'Open Facebook Profile',
      category: 'Socials',
      icon: Globe,
      action: () => window.open(portfolioData.personal.socials.facebook, '_blank')
    },
    {
      id: 'social-github',
      title: 'Open GitHub Profile (@RajwaNuwayyar)',
      category: 'Socials',
      icon: Globe,
      action: () => window.open(portfolioData.personal.socials.github, '_blank')
    },
    {
      id: 'social-linkedin',
      title: 'Open LinkedIn Profile',
      category: 'Socials',
      icon: Globe,
      action: () => window.open(portfolioData.personal.socials.linkedin, '_blank')
    },
    {
      id: 'theme-cyan',
      title: 'Theme: Cyber Cyan (Default)',
      category: 'Appearance',
      icon: Palette,
      action: () => onThemeChange('cyan')
    },
    {
      id: 'theme-amber',
      title: 'Theme: Solar Amber / Robotics',
      category: 'Appearance',
      icon: Palette,
      action: () => onThemeChange('amber')
    },
    {
      id: 'theme-violet',
      title: 'Theme: Neon Violet',
      category: 'Appearance',
      icon: Palette,
      action: () => onThemeChange('violet')
    },
    {
      id: 'theme-emerald',
      title: 'Theme: Matrix Emerald',
      category: 'Appearance',
      icon: Palette,
      action: () => onThemeChange('emerald')
    },
    {
      id: 'toggle-sound',
      title: 'Toggle Audio Feedback',
      category: 'Settings',
      icon: Volume2,
      action: () => onToggleSound()
    }
  ];

  const filtered = commands.filter((c) =>
    c.title.toLowerCase().includes(query.toLowerCase()) ||
    c.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filtered.length);
      soundFx.hover();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
      soundFx.hover();
    } else if (e.key === 'Enter' && filtered[selectedIndex]) {
      e.preventDefault();
      soundFx.blip();
      filtered[selectedIndex].action();
      onClose();
    } else if (e.key === 'Escape') {
      soundFx.click();
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="cmd-palette-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          soundFx.click();
          onClose();
        }
      }}
    >
      <div className="cmd-palette-modal" onKeyDown={handleKeyDown}>
        <div className="cmd-search-row">
          <Search size={18} style={{ color: 'var(--accent-primary)' }} />
          <input
            ref={inputRef}
            type="text"
            className="cmd-search-input"
            placeholder="Type a command or navigate (e.g. 'theme', 'robotics')..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
          />
          <button
            className="btn-icon"
            style={{ width: '28px', height: '28px' }}
            onClick={() => {
              soundFx.click();
              onClose();
            }}
          >
            <X size={15} />
          </button>
        </div>

        <div className="cmd-list">
          {filtered.length === 0 ? (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              No matching directives found.
            </div>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  className={`cmd-item ${isSelected ? 'selected' : ''}`}
                  onClick={() => {
                    soundFx.blip();
                    item.action();
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                >
                  <div className="cmd-item-left">
                    <Icon size={16} style={{ color: isSelected ? 'var(--accent-primary)' : 'inherit' }} />
                    <span style={{ fontSize: '0.92rem' }}>{item.title}</span>
                  </div>

                  <span className="cmd-shortcut-tag">{item.category}</span>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
