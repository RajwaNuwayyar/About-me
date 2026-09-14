import React, { useState, useEffect, useRef } from 'react';
import { Bot, Play, RotateCcw, Radar, Cpu, Zap, Activity } from 'lucide-react';
import { soundFx } from '../utils/soundFx';

export default function RobotLab() {
  // Joint angles in degrees
  const [shoulder, setShoulder] = useState(-50);
  const [elbow, setElbow] = useState(105);
  const [wrist, setWrist] = useState(-45);
  const [gripper, setGripper] = useState(25); // 0 (closed) to 50 (wide)
  const [radarEnabled, setRadarEnabled] = useState(true);
  const [isAutonomous, setIsAutonomous] = useState(false);
  const [activePreset, setActivePreset] = useState('parked');

  const canvasRef = useRef(null);
  const autoSequenceRef = useRef(null);

  const blocksRef = useRef([
    { id: 1, x: 440, y: 318, size: 24, color: '#f59e0b', grabbed: false, dragged: false },
    { id: 2, x: 120, y: 318, size: 24, color: '#10b981', grabbed: false, dragged: false },
    { id: 3, x: 180, y: 318, size: 24, color: '#ef4444', grabbed: false, dragged: false }
  ]);
  const dragStateRef = useRef({ isDragging: false, blockId: null, offsetX: 0, offsetY: 0 });

  // Sound throttler for sliders
  const lastSoundTime = useRef(0);
  const triggerServoSound = () => {
    const now = Date.now();
    if (now - lastSoundTime.current > 120) {
      soundFx.servo();
      lastSoundTime.current = now;
    }
  };

  // Robot Geometry definitions (in pixels)
  const basePos = { x: 260, y: 320 };
  const L1 = 95;  // Shoulder to elbow length
  const L2 = 80;  // Elbow to wrist length
  const L3 = 45;  // Wrist to gripper length

  // Compute forward kinematics
  const radShoulder = (shoulder * Math.PI) / 180;
  const radElbow = ((shoulder + elbow) * Math.PI) / 180;
  const radWrist = ((shoulder + elbow + wrist) * Math.PI) / 180;

  const j1 = { x: basePos.x, y: basePos.y }; // Shoulder joint
  const j2 = {
    x: j1.x + L1 * Math.cos(radShoulder),
    y: j1.y + L1 * Math.sin(radShoulder)
  }; // Elbow joint
  const j3 = {
    x: j2.x + L2 * Math.cos(radElbow),
    y: j2.y + L2 * Math.sin(radElbow)
  }; // Wrist joint
  const endEffector = {
    x: j3.x + L3 * Math.cos(radWrist),
    y: j3.y + L3 * Math.sin(radWrist)
  };

  // Convert pixel coords to simulated millimeter coords
  const simCoords = {
    x: Math.round((endEffector.x - basePos.x) * 1.5),
    y: Math.round((basePos.y - endEffector.y) * 1.5),
    angle: Math.round(shoulder + elbow + wrist)
  };

  // Canvas render loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let radarAngle = 0;
    let animId;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Draw Grid & Workspace Envelope
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 1;
      const step = 25;
      for (let x = 0; x < canvas.width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Max reach circle
      ctx.beginPath();
      ctx.arc(basePos.x, basePos.y, L1 + L2 + L3, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 242, 254, 0.08)';
      ctx.setLineDash([4, 4]);
      ctx.stroke();
      ctx.setLineDash([]);

      // 2. Draw Sensor Radar Beam if enabled
      if (radarEnabled) {
        radarAngle = (radarAngle + 0.035) % (Math.PI * 2);
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(basePos.x, basePos.y);
        ctx.arc(basePos.x, basePos.y, L1 + L2 + L3 + 20, radarAngle, radarAngle + 0.35);
        ctx.closePath();
        const radarGrad = ctx.createRadialGradient(
          basePos.x, basePos.y, 10,
          basePos.x, basePos.y, L1 + L2 + L3 + 20
        );
        radarGrad.addColorStop(0, 'rgba(0, 242, 254, 0.3)');
        radarGrad.addColorStop(1, 'rgba(0, 242, 254, 0.0)');
        ctx.fillStyle = radarGrad;
        ctx.fill();
        ctx.restore();
      }

      // Physics & Blocks
      blocksRef.current.forEach(block => {
        if (gripper < 15 && !block.dragged) {
          const dx = endEffector.x - block.x;
          const dy = endEffector.y - block.y;
          if (Math.sqrt(dx * dx + dy * dy) < 45) {
             block.grabbed = true;
          }
        } else {
          block.grabbed = false;
        }

        if (block.grabbed) {
          block.x = endEffector.x;
          block.y = endEffector.y + 10;
        } else if (!block.dragged) {
          if (block.y < 318) {
            block.y += 4.5;
            if (block.y > 318) block.y = 318;
          }
        }

        ctx.fillStyle = block.color;
        ctx.fillRect(block.x - block.size/2, block.y - block.size/2, block.size, block.size);
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1;
        ctx.strokeRect(block.x - block.size/2, block.y - block.size/2, block.size, block.size);
        
        if (block.grabbed || block.dragged) {
          ctx.beginPath();
          ctx.arc(block.x, block.y, block.size * 1.2, 0, Math.PI * 2);
          ctx.strokeStyle = block.color;
          ctx.lineWidth = 2;
          ctx.setLineDash([4, 4]);
          ctx.stroke();
          ctx.setLineDash([]);
        }
      });

      // 3. Draw Ground Pedestal & Base
      ctx.fillStyle = '#111927';
      ctx.fillRect(basePos.x - 70, basePos.y + 10, 140, 40);
      ctx.strokeStyle = '#00f2fe';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(basePos.x - 70, basePos.y + 10, 140, 40);

      // Base mount
      ctx.beginPath();
      ctx.arc(basePos.x, basePos.y + 10, 25, Math.PI, 0);
      ctx.fillStyle = '#1e293b';
      ctx.fill();
      ctx.stroke();

      // 4. Draw Link 1 (Shoulder to Elbow)
      ctx.beginPath();
      ctx.moveTo(j1.x, j1.y);
      ctx.lineTo(j2.x, j2.y);
      ctx.lineWidth = 16;
      ctx.lineCap = 'round';
      ctx.strokeStyle = '#1e293b';
      ctx.stroke();

      ctx.lineWidth = 6;
      ctx.strokeStyle = '#00f2fe';
      ctx.stroke();

      // 5. Draw Link 2 (Elbow to Wrist)
      ctx.beginPath();
      ctx.moveTo(j2.x, j2.y);
      ctx.lineTo(j3.x, j3.y);
      ctx.lineWidth = 12;
      ctx.strokeStyle = '#0f172a';
      ctx.stroke();

      ctx.lineWidth = 4;
      ctx.strokeStyle = '#9d4edd';
      ctx.stroke();

      // 6. Draw Link 3 (Wrist to Gripper Base)
      ctx.beginPath();
      ctx.moveTo(j3.x, j3.y);
      ctx.lineTo(endEffector.x, endEffector.y);
      ctx.lineWidth = 8;
      ctx.strokeStyle = '#ff9100';
      ctx.stroke();

      // 7. Draw Joints (Bearings)
      [j1, j2, j3].forEach((joint, idx) => {
        ctx.beginPath();
        ctx.arc(joint.x, joint.y, 9, 0, Math.PI * 2);
        ctx.fillStyle = '#0a0f1d';
        ctx.fill();
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = idx === 0 ? '#00f2fe' : idx === 1 ? '#9d4edd' : '#ff9100';
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(joint.x, joint.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
      });

      // 8. Draw Gripper Claws
      const clawNormalX = -Math.sin(radWrist);
      const clawNormalY = Math.cos(radWrist);
      const clawSpread = gripper * 0.45;

      const claw1Start = {
        x: endEffector.x + clawNormalX * clawSpread,
        y: endEffector.y + clawNormalY * clawSpread
      };
      const claw1Tip = {
        x: claw1Start.x + Math.cos(radWrist) * 20,
        y: claw1Start.y + Math.sin(radWrist) * 20
      };

      const claw2Start = {
        x: endEffector.x - clawNormalX * clawSpread,
        y: endEffector.y - clawNormalY * clawSpread
      };
      const claw2Tip = {
        x: claw2Start.x + Math.cos(radWrist) * 20,
        y: claw2Start.y + Math.sin(radWrist) * 20
      };

      ctx.beginPath();
      ctx.moveTo(endEffector.x, endEffector.y);
      ctx.lineTo(claw1Start.x, claw1Start.y);
      ctx.lineTo(claw1Tip.x, claw1Tip.y);
      ctx.moveTo(endEffector.x, endEffector.y);
      ctx.lineTo(claw2Start.x, claw2Start.y);
      ctx.lineTo(claw2Tip.x, claw2Tip.y);
      ctx.lineWidth = 3.5;
      ctx.strokeStyle = '#38bdf8';
      ctx.stroke();

      // End Effector Glowing Spot
      ctx.beginPath();
      ctx.arc(endEffector.x, endEffector.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#ff9100';
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#ff9100';
      ctx.fill();
      ctx.shadowBlur = 0;

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => cancelAnimationFrame(animId);
  }, [shoulder, elbow, wrist, gripper, radarEnabled]);

  // Canvas Mouse/Touch Interactions
  const getEventCoords = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    // Account for CSS scaling vs internal resolution (520x380)
    const scaleX = canvasRef.current.width / rect.width;
    const scaleY = canvasRef.current.height / rect.height;
    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY
    };
  };

  const handleMouseDown = (e) => {
    // Prevent default scrolling on touch
    if (e.touches && e.cancelable) e.preventDefault();
    const { x, y } = getEventCoords(e);

    for (let i = blocksRef.current.length - 1; i >= 0; i--) {
      const block = blocksRef.current[i];
      if (
        x >= block.x - block.size/2 && x <= block.x + block.size/2 &&
        y >= block.y - block.size/2 && y <= block.y + block.size/2
      ) {
        dragStateRef.current = { isDragging: true, blockId: block.id, offsetX: x - block.x, offsetY: y - block.y };
        block.dragged = true;
        block.grabbed = false;
        break;
      }
    }
  };

  const handleMouseMove = (e) => {
    if (!dragStateRef.current.isDragging) return;
    if (e.touches && e.cancelable) e.preventDefault();
    const { x, y } = getEventCoords(e);
    
    const block = blocksRef.current.find(b => b.id === dragStateRef.current.blockId);
    if (block) {
      block.x = x - dragStateRef.current.offsetX;
      block.y = y - dragStateRef.current.offsetY;
    }
  };

  const handleMouseUp = () => {
    if (dragStateRef.current.isDragging) {
      const block = blocksRef.current.find(b => b.id === dragStateRef.current.blockId);
      if (block) block.dragged = false;
      dragStateRef.current = { isDragging: false, blockId: null, offsetX: 0, offsetY: 0 };
    }
  };

  // Autonomous Sequence Handler
  const runAutonomousSequence = () => {
    if (isAutonomous) return;
    setIsAutonomous(true);
    soundFx.radar();

    const keyframes = [
      { s: -20, e: 60, w: -40, g: 45, delay: 0 },
      { s: -10, e: 45, w: -30, g: 45, delay: 500 },
      { s: -10, e: 45, w: -30, g: 8, delay: 1100 },  // Clamp
      { s: -65, e: 80, w: -15, g: 8, delay: 1700 },  // Lift
      { s: -110, e: 90, w: 20, g: 8, delay: 2400 },  // Move left
      { s: -140, e: 55, w: 10, g: 45, delay: 3100 }, // Release
      { s: -50, e: 105, w: -45, g: 25, delay: 3800 } // Reset
    ];

    keyframes.forEach((kf) => {
      const tid = setTimeout(() => {
        setShoulder(kf.s);
        setElbow(kf.e);
        setWrist(kf.w);
        setGripper(kf.g);
        soundFx.servo();
      }, kf.delay);
      autoSequenceRef.current = tid;
    });

    setTimeout(() => {
      setIsAutonomous(false);
      soundFx.success();
      setActivePreset('custom');
    }, 4500);
  };

  // Presets
  const applyPreset = (name, s, e, w, g) => {
    soundFx.blip();
    setActivePreset(name);
    setShoulder(s);
    setElbow(e);
    setWrist(w);
    setGripper(g);
  };

  return (
    <section id="robotics" className="simulator-section">
      <div className="container">
        {/* Section Heading */}
        <div className="section-header">
          <div className="section-label">
            <Cpu size={15} />
            <span>Interactive Telemetry Lab</span>
          </div>
          <h2 className="section-title">
            Kinematics & <span className="section-title-gradient">Robotic Simulator</span>
          </h2>
          <p className="section-subtitle">
            Manipulate the 6-DOF robotic arm digital twin in real time. Test joint limits, inspect inverse kinematics coordinates, or trigger automated pick-and-place routines.
          </p>
        </div>

        {/* Interactive Lab Container */}
        <div className="simulator-grid">
          {/* Left Canvas Visualization */}
          <div className="sim-canvas-panel">
            <div className="sim-header">
              <div className="sim-status-chip">
                <span className="badge-pulse-dot" />
                <span>{isAutonomous ? 'AUTONOMOUS SUBROUTINE EXECUTING' : 'MANUAL TELEOPERATION READY'}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  className={`btn-icon ${radarEnabled ? 'active' : ''}`}
                  onClick={() => {
                    soundFx.click();
                    setRadarEnabled(!radarEnabled);
                  }}
                  title="Toggle LiDAR Radar Sweep"
                >
                  <Radar size={16} style={{ color: radarEnabled ? 'var(--accent-primary)' : 'var(--text-muted)' }} />
                </button>
              </div>
            </div>

            <canvas
              ref={canvasRef}
              width={520}
              height={380}
              className="sim-canvas"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleMouseDown}
              onTouchMove={handleMouseMove}
              onTouchEnd={handleMouseUp}
              onTouchCancel={handleMouseUp}
              style={{ cursor: 'crosshair', touchAction: 'none' }}
            />

            {/* Live Telemetry Bar */}
            <div style={{
              padding: '0.85rem 1.25rem',
              background: 'rgba(10, 15, 26, 0.9)',
              borderTop: '1px solid rgba(255, 255, 255, 0.06)',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.8rem'
            }}>
              <div>
                <span style={{ color: 'var(--text-muted)' }}>EE COORDS: </span>
                <span style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>
                  X: {simCoords.x}mm | Y: {simCoords.y}mm
                </span>
              </div>
              <div>
                <span style={{ color: 'var(--text-muted)' }}>STATUS: </span>
                <span style={{ color: '#34d399', fontWeight: 600 }}>IK SOLVED (0.08ms)</span>
              </div>
            </div>
          </div>

          {/* Right Controls & Telemetry Data */}
          <div className="glass-panel sim-controls-panel">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Activity size={18} style={{ color: 'var(--accent-primary)' }} />
                Joint Controls
              </h3>
              <div className="badge badge-cyan">
                <span>DEGREE OF FREEDOM</span>
              </div>
            </div>

            {/* Sliders */}
            <div className="sim-slider-group">
              <div className="sim-slider-label">
                <span>Joint 1 (Shoulder Pitch)</span>
                <span className="sim-slider-val">{shoulder}°</span>
              </div>
              <input
                type="range"
                min="-360"
                max="360"
                value={shoulder}
                disabled={isAutonomous}
                className="cyber-range"
                onChange={(e) => {
                  setShoulder(Number(e.target.value));
                  triggerServoSound();
                  setActivePreset('custom');
                }}
              />
            </div>

            <div className="sim-slider-group">
              <div className="sim-slider-label">
                <span>Joint 2 (Elbow Flexion)</span>
                <span className="sim-slider-val">{elbow}°</span>
              </div>
              <input
                type="range"
                min="-360"
                max="360"
                value={elbow}
                disabled={isAutonomous}
                className="cyber-range"
                onChange={(e) => {
                  setElbow(Number(e.target.value));
                  triggerServoSound();
                  setActivePreset('custom');
                }}
              />
            </div>

            <div className="sim-slider-group">
              <div className="sim-slider-label">
                <span>Joint 3 (Wrist Pitch)</span>
                <span className="sim-slider-val">{wrist}°</span>
              </div>
              <input
                type="range"
                min="-360"
                max="360"
                value={wrist}
                disabled={isAutonomous}
                className="cyber-range"
                onChange={(e) => {
                  setWrist(Number(e.target.value));
                  triggerServoSound();
                  setActivePreset('custom');
                }}
              />
            </div>

            <div className="sim-slider-group">
              <div className="sim-slider-label">
                <span>End-Effector (Gripper Aperture)</span>
                <span className="sim-slider-val">{gripper > 15 ? 'OPEN' : 'CLAMPED'} ({gripper}mm)</span>
              </div>
              <input
                type="range"
                min="2"
                max="50"
                value={gripper}
                disabled={isAutonomous}
                className="cyber-range"
                onChange={(e) => {
                  setGripper(Number(e.target.value));
                  triggerServoSound();
                  setActivePreset('custom');
                }}
              />
            </div>

            {/* Quick Presets */}
            <div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.5rem', fontFamily: 'JetBrains Mono, monospace' }}>
                TELEMETRY PRESETS:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <button
                  className={`btn-secondary ${activePreset === 'parked' ? 'active' : ''}`}
                  style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}
                  onClick={() => applyPreset('parked', -50, 105, -45, 25)}
                  disabled={isAutonomous}
                >
                  Parked Pose
                </button>
                <button
                  className={`btn-secondary ${activePreset === 'extended' ? 'active' : ''}`}
                  style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}
                  onClick={() => applyPreset('extended', -15, 30, -15, 45)}
                  disabled={isAutonomous}
                >
                  Full Reach
                </button>
                <button
                  className={`btn-secondary ${activePreset === 'low' ? 'active' : ''}`}
                  style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}
                  onClick={() => applyPreset('low', -10, 80, -70, 10)}
                  disabled={isAutonomous}
                >
                  Ground Pickup
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="sim-actions-row">
              <button
                className="btn btn-primary"
                style={{ flex: 1 }}
                onClick={runAutonomousSequence}
                disabled={isAutonomous}
              >
                <Play size={16} />
                <span>{isAutonomous ? 'Running Routine...' : 'Run Auto Pick & Place'}</span>
              </button>

              <button
                className="btn btn-secondary"
                onClick={() => applyPreset('parked', -50, 105, -45, 25)}
                disabled={isAutonomous}
                title="Reset to origin"
              >
                <RotateCcw size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
