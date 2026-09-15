import React, { useState, useRef, useEffect } from 'react';
import { Terminal, CornerDownLeft, Sparkles, X, Minimize2, Maximize2, Send, Command } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { soundFx } from '../utils/soundFx';

export default function TerminalWidget({ onThemeChange }) {
  const { language, setLanguage, portfolioData } = useLanguage();
  const [history, setHistory] = useState([
    { type: 'system', text: 'SYSTEM: CYBER-OS v3.4.1 [KERNEL: ARM64-RTOS-ROS2]' },
    { type: 'system', text: language === 'id' ? "Ketik 'help' untuk daftar perintah, atau 'skills' / 'projects'." : "Type 'help' to inspect available commands, or 'skills' / 'projects' / 'robot status'." }
  ]);
  const [inputVal, setInputVal] = useState('');
  const bottomRef = useRef(null);

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const rawCmd = inputVal.trim();
      if (!rawCmd) return;

      const lower = rawCmd.toLowerCase();
      const newLogs = [...history, { type: 'input', text: `$ ${rawCmd}` }];

      if (lower === 'clear') {
        soundFx.click();
        setHistory([]);
        setInputVal('');
        return;
      }

      if (lower === 'help') {
        soundFx.blip();
        const helpText = portfolioData.terminalHelp.map(item => `  • ${item.command.padEnd(14)} - ${item.desc}`).join('\n');
        newLogs.push({
          type: 'output',
          text: (language === 'id' ? `DIREKTIF TERSEDIA:\n` : `AVAILABLE DIRECTIVES:\n`) + helpText
        });
      } else if (lower === 'whoami') {
        soundFx.blip();
        newLogs.push({
          type: 'output',
          text: `IDENTITY: ${portfolioData.personal.name}
ROLE: ${portfolioData.personal.role}
TAGLINE: "${portfolioData.personal.tagline}"
BIO: ${portfolioData.personal.bio}`
        });
      } else if (lower === 'skills') {
        soundFx.blip();
        newLogs.push({
          type: 'output',
          text: `TECHNICAL ARSENAL:
  [ROBOTICS & HARDWARE] : ROS 2, C++20, ESP32, Kinematics, LiDAR SLAM, KiCad, OpenCV
  [WEB & FULLSTACK]     : React.js, TypeScript, Canvas API, WebSockets, Node.js, Express, Postgres
  [SYSTEMS & TOOLS]     : Python, Electron, Linux/Embedded, Docker, WebUSB, Git`
        });
      } else if (lower === 'projects') {
        soundFx.blip();
        newLogs.push({
          type: 'output',
          text: `FEATURED ARTIFACTS:
  1. Aegis-6        [ROBOTICS]  - 6-DOF Robotic Arm with Web Kinematics
  2. NovaPulse      [WEB/CLOUD] - Edge IoT Telemetry Platform (50k msgs/s)
  3. Vektor Rover   [ROBOTICS]  - Autonomous LiDAR SLAM Vehicle
  4. Synthetix      [DESKTOP]   - Microcontroller & CAN Bus Analyzer Studio
  5. NeuroVision    [AI/VISION] - Spatial Hand-Tracking Teleoperation`
        });
      } else if (lower === 'robot status') {
        soundFx.radar();
        newLogs.push({
          type: 'output',
          text: `ROBOT TELEMETRY REPORT:
  • Node Name     : /manipulator/aegis_6
  • Kinematics    : 6-Axis Inverse Kinematics SOLVED
  • Repeatability : ±0.15 mm
  • Teleop Feed   : WebSocket 120Hz connected
  • End-Effector  : Gripper Ready`
        });
      } else if (lower.startsWith('theme')) {
        const parts = lower.split(' ');
        const theme = parts[1];
        if (['cyan', 'amber', 'violet', 'emerald'].includes(theme)) {
          soundFx.success();
          onThemeChange(theme);
          newLogs.push({
            type: 'success',
            text: language === 'id' ? `✓ Aksen warna siber diubah ke: ${theme.toUpperCase()}` : `✓ Cyber accent lighting set to: ${theme.toUpperCase()}`
          });
        } else {
          soundFx.click();
          newLogs.push({
            type: 'error',
            text: language === 'id' ? `Tema tidak dikenal '${parts[1]}'. Opsi: cyan, amber, violet, emerald.` : `Unknown theme '${parts[1]}'. Options: cyan, amber, violet, emerald.`
          });
        }
      } else if (lower.startsWith('lang ')) {
        const targetLang = lower.split(' ')[1];
        if (targetLang === 'en' || targetLang === 'id') {
          soundFx.success();
          setLanguage(targetLang);
          newLogs.push({
            type: 'success',
            text: targetLang === 'id' ? '✓ Bahasa antarmuka berhasil diubah ke Indonesia.' : '✓ Language successfully changed to English.'
          });
        } else {
          soundFx.click();
          newLogs.push({
            type: 'error',
            text: language === 'id' ? `Bahasa '${targetLang}' tidak dikenali. Opsi: en, id.` : `Unknown language '${targetLang}'. Options: en, id.`
          });
        }
      } else if (lower === 'contact') {
        soundFx.blip();
        newLogs.push({
          type: 'output',
          text: `COMMUNICATION & SOCIAL CHANNELS:
  • WhatsApp : ${portfolioData.personal.socials.whatsapp}
  • Instagram: ${portfolioData.personal.socials.instagram}
  • TikTok   : ${portfolioData.personal.socials.tiktok}
  • Facebook : ${portfolioData.personal.socials.facebook}
  • GitHub   : ${portfolioData.personal.socials.github}
  • LinkedIn : ${portfolioData.personal.socials.linkedin}
  • Email    : ${portfolioData.personal.socials.email}`
        });
      } else {
        soundFx.click();
        newLogs.push({
          type: 'error',
          text: language === 'id' ? `Perintah tidak dikenali: '${rawCmd}'. Ketik 'help' untuk daftar perintah.` : `Command not recognized: '${rawCmd}'. Type 'help' for command directory.`
        });
      }

      setHistory(newLogs);
      setInputVal('');
    }
  };

  return (
    <section id="terminal" className="terminal-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <Terminal size={15} />
            <span>Developer Shell</span>
          </div>
          <h2 className="section-title">
            Interactive <span className="section-title-gradient">CLI Terminal</span>
          </h2>
          <p className="section-subtitle">
            {language === 'id' 
              ? "Lebih menyukai baris perintah? Jalankan perintah shell untuk memeriksa telemetri latar belakang, memicu rutinitas perangkat keras, atau mengonfigurasi tema UI."
              : "Prefer the command line? Run shell commands to inspect background telemetry, trigger hardware routines, or configure UI themes."}
          </p>
        </div>

        {/* Cyber Terminal Window */}
        <div className="cyber-terminal">
          <div className="terminal-titlebar">
            <div className="terminal-dots">
              <span className="terminal-dot dot-red" />
              <span className="terminal-dot dot-yellow" />
              <span className="terminal-dot dot-green" />
            </div>
            <span className="terminal-title">command prompt</span>
            <span style={{ fontSize: '0.72rem', color: 'var(--accent-primary)', opacity: 0.8 }}>
              UTF-8 • TTY1
            </span>
          </div>

          <div className="terminal-body">
            {history.map((item, idx) => (
              <pre
                key={idx}
                className={`terminal-log ${item.type}`}
                style={{ whiteSpace: 'pre-wrap', fontFamily: 'JetBrains Mono, monospace' }}
              >
                {item.text}
              </pre>
            ))}

            {/* Input Line */}
            <div className="terminal-input-row">
              <span className="terminal-prompt">C:\Users\Admin&gt;</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleCommand}
                placeholder="Type 'help' and press Enter..."
                className="terminal-input"
                autoComplete="off"
                spellCheck="false"
              />
              <CornerDownLeft size={14} style={{ color: 'var(--text-muted)' }} />
            </div>
            <div ref={bottomRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
