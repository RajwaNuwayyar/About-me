import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Copy, MessageSquare, Bot } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsappIcon, TiktokIcon, FacebookIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import { soundFx } from '../utils/soundFx';

export default function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'web',
    message: ''
  });

  const handleCopyEmail = () => {
    soundFx.blip();
    navigator.clipboard?.writeText(personal.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: "6877c33746662b82c865e960bc8a5a84",
          name: formData.name,
          email: formData.email,
          projectType: formData.projectType,
          message: formData.message,
          subject: `New Transmission from ${formData.name}`
        })
      });
      soundFx.success();
      setFormSubmitted(true);
    } catch (error) {
      console.error("Form submission failed:", error);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <Mail size={15} />
            <span>Direct Transmission</span>
          </div>
          <h2 className="section-title">
            Let's Build Something <span className="section-title-gradient">Extraordinary</span>
          </h2>
          <p className="section-subtitle">
            Whether you need a high-performance web platform, an autonomous robotics solution, or low-level firmware engineering, my inbox is open.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="contact-grid">
          {/* Left Column: Direct Links & Channels */}
          <div className="contact-info-panel">
            <div className="glass-panel" style={{ padding: '1.5rem' }}>
              <div className="badge badge-emerald" style={{ marginBottom: '1rem' }}>
                <span className="badge-pulse-dot" />
                <span>COMMUNICATIONS ONLINE</span>
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                Have a project or inquiry?
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                I am actively taking on ambitious software and robotics ventures, hardware consulting, and technical leadership roles.
              </p>

              {/* Copyable Email Box */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 1rem',
                  background: 'rgba(0,0,0,0.3)',
                  border: '1px solid rgba(var(--accent-rgb), 0.3)',
                  borderRadius: '8px'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'JetBrains Mono, monospace' }}>
                    PRIMARY EMAIL
                  </div>
                  <div style={{ color: 'var(--accent-primary)', fontWeight: 600, fontSize: '0.9rem', fontFamily: 'JetBrains Mono, monospace' }}>
                    {personal.socials.email}
                  </div>
                </div>

                <button
                  className="btn-icon"
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  style={{ width: '36px', height: '36px' }}
                >
                  {copied ? <CheckCircle2 size={16} style={{ color: '#34d399' }} /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            {/* Social Media & Instant Channels */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '0.75rem' }}>
              {personal.socials.whatsapp && (
                <a
                  href={personal.socials.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-method-card"
                  onMouseEnter={() => soundFx.hover()}
                  onClick={() => soundFx.click()}
                >
                  <div className="contact-icon-box" style={{ background: 'rgba(37, 211, 102, 0.12)', borderColor: 'rgba(37, 211, 102, 0.3)', color: '#25D366' }}>
                    <WhatsappIcon size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.92rem' }}>WhatsApp</div>
                    <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>Direct Chat & Fast Response</div>
                  </div>
                </a>
              )}

              {personal.socials.instagram && (
                <a
                  href={personal.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-method-card"
                  onMouseEnter={() => soundFx.hover()}
                  onClick={() => soundFx.click()}
                >
                  <div className="contact-icon-box" style={{ background: 'rgba(225, 48, 108, 0.12)', borderColor: 'rgba(225, 48, 108, 0.3)', color: '#E1306C' }}>
                    <InstagramIcon size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.92rem' }}>Instagram</div>
                    <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>@rajwa_nxl • Creative Works</div>
                  </div>
                </a>
              )}

              {personal.socials.tiktok && (
                <a
                  href={personal.socials.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-method-card"
                  onMouseEnter={() => soundFx.hover()}
                  onClick={() => soundFx.click()}
                >
                  <div className="contact-icon-box" style={{ background: 'rgba(254, 44, 85, 0.12)', borderColor: 'rgba(254, 44, 85, 0.3)', color: '#FE2C55' }}>
                    <TiktokIcon size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.92rem' }}>TikTok</div>
                    <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>@rajwa_nxl • Tech Content</div>
                  </div>
                </a>
              )}

              {personal.socials.facebook && (
                <a
                  href={personal.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-method-card"
                  onMouseEnter={() => soundFx.hover()}
                  onClick={() => soundFx.click()}
                >
                  <div className="contact-icon-box" style={{ background: 'rgba(24, 119, 242, 0.12)', borderColor: 'rgba(24, 119, 242, 0.3)', color: '#1877F2' }}>
                    <FacebookIcon size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.92rem' }}>Facebook</div>
                    <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>Social Network Profile</div>
                  </div>
                </a>
              )}

              {personal.socials.github && (
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-method-card"
                  onMouseEnter={() => soundFx.hover()}
                  onClick={() => soundFx.click()}
                >
                  <div className="contact-icon-box">
                    <GithubIcon size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.92rem' }}>GitHub</div>
                    <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>Repositories & Schematics</div>
                  </div>
                </a>
              )}

              {personal.socials.linkedin && (
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-method-card"
                  onMouseEnter={() => soundFx.hover()}
                  onClick={() => soundFx.click()}
                >
                  <div className="contact-icon-box">
                    <LinkedinIcon size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.92rem' }}>LinkedIn</div>
                    <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>Professional Network</div>
                  </div>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Contact Transmission Form */}
          <div className="glass-panel" style={{ padding: '2rem' }}>
            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '2px solid #10b981',
                  color: '#10b981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  boxShadow: '0 0 25px rgba(16, 185, 129, 0.3)'
                }}>
                  <CheckCircle2 size={32} />
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  Transmission Dispatched!
                </h3>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '420px', margin: '0 auto 1.5rem' }}>
                  Thank you for reaching out, {formData.name || 'friend'}. Your signal has been received and I will respond within 24 hours.
                </p>
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    soundFx.click();
                    setFormSubmitted(false);
                    setFormData({ name: '', email: '', projectType: 'web', message: '' });
                  }}
                >
                  Send Another Transmission
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label className="form-label">YOUR CALLSIGN / NAME</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Dr. Eleanor Arroway"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">RETURN EMAIL ADDRESS</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="name@organization.com"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">PROJECT NATURE</label>
                  <select
                    name="projectType"
                    className="form-input"
                    style={{ background: '#0a0f1d' }}
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  >
                    <option value="web">Web Application / High-Performance Frontend</option>
                    <option value="robotics">Robotics, ROS 2, or Autonomous Hardware</option>
                    <option value="apps">Cross-Platform Desktop / Mobile Tool</option>
                    <option value="consulting">Technical Consulting / Engineering Leadership</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">PROJECT DETAILS & OBJECTIVES</label>
                  <textarea
                    name="message"
                    required
                    placeholder="Describe your project, technical constraints, or timelines..."
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                  <Send size={16} />
                  <span>Transmit Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
