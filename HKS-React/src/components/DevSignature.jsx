import React, { useState, useEffect } from 'react';

export default function DevSignature() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Toggle on Shift + A
      if (e.shiftKey && (e.key === 'a' || e.key === 'A')) {
        setIsVisible(prev => {
          const nextState = !prev;
          if (nextState) {
            // Slight delay to ensure DOM is ready for bounding rect calculation
            setTimeout(spawnBurst, 50);
          }
          return nextState;
        });
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const spawnBurst = () => {
    const colors = ['#FF2D55','#FFD43B','#3B82F6','#17D27F','#A855F7','#FF7A18'];
    const overlay = document.getElementById('dev-signature');
    if (!overlay) return;
    const card = overlay.querySelector('.dev-card');
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    for (let i = 0; i < 22; i++) {
      const dot = document.createElement('span');
      dot.className = 'dev-burst-dot';
      const angle = (i / 22) * 360;
      const dist  = 80 + Math.random() * 60;
      const rad   = (angle * Math.PI) / 180;
      dot.style.cssText = `
        left:${rect.left + rect.width/2}px;
        top:${rect.top + rect.height/2}px;
        background:${colors[i % colors.length]};
        --tx:${Math.cos(rad)*dist}px;
        --ty:${Math.sin(rad)*dist}px;
      `;
      document.body.appendChild(dot);
      setTimeout(() => dot.remove(), 800);
    }
  };

  return (
    <>
      <div 
        id="dev-signature" 
        className={isVisible ? 'dev-visible' : ''}
        onClick={(e) => {
          if (e.target.id === 'dev-signature') setIsVisible(false);
        }}
      >
        <div className="dev-card">
          <div className="dev-card-glow"></div>
          <div className="dev-close" title="Close" onClick={() => setIsVisible(false)}>✕</div>
          <div className="dev-badge">✦ SECRET ✦</div>
          <div className="dev-avatar">A</div>
          <p className="dev-label">Designed &amp; Developed By</p>
          <h2 className="dev-name" data-text="Adarsh">Adarsh</h2>
          <p className="dev-tagline">Crafting Premium Web Experiences</p>
          <div className="dev-divider"></div>
          <div className="dev-stack">
            <span>HTML</span><span>CSS</span><span>JavaScript</span><span>AI</span>
          </div>
          <p className="dev-hint">Press <kbd>Shift</kbd> + <kbd>A</kbd> to toggle</p>
        </div>
      </div>

      <style>{`
        /* ══════════════════════════════════
           SECRET SIGNATURE POPUP (Shift+A)
        ══════════════════════════════════ */
        #dev-signature {
          position: fixed; inset: 0; z-index: 100000;
          display: flex; align-items: center; justify-content: center;
          background: rgba(3, 4, 11, 0.75);
          backdrop-filter: blur(16px);
          opacity: 0; pointer-events: none;
          transition: opacity 0.4s ease;
        }
        #dev-signature.dev-visible {
          opacity: 1; pointer-events: all;
        }

        .dev-card {
          position: relative;
          background: linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 28px;
          padding: 48px 44px 36px;
          text-align: center;
          width: min(420px, 92vw);
          box-shadow: 0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06);
          transform: scale(0.85) translateY(30px);
          transition: transform 0.5s cubic-bezier(0.22,1,0.36,1);
          overflow: hidden;
        }
        #dev-signature.dev-visible .dev-card {
          transform: scale(1) translateY(0);
        }

        /* Animated glow behind card */
        .dev-card-glow {
          position: absolute; inset: -40px;
          background: radial-gradient(circle at 50% 50%, rgba(168,85,247,0.25), rgba(255,45,85,0.15), transparent 70%);
          animation: glow-spin 6s linear infinite;
          z-index: -1; border-radius: 50%;
        }
        @keyframes glow-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        /* Close button */
        .dev-close {
          position: absolute; top: 14px; right: 18px;
          font-size: 18px; cursor: pointer; color: rgba(255,255,255,0.4);
          transition: color 0.2s, transform 0.2s; line-height: 1;
        }
        .dev-close:hover { color: #ff2d55; transform: rotate(90deg); }

        /* Secret badge */
        .dev-badge {
          display: inline-block;
          font-size: 10px; font-weight: 900; letter-spacing: 0.2em;
          color: #ffd43b;
          border: 1px solid rgba(255,212,59,0.3);
          padding: 4px 12px; border-radius: 99px;
          margin-bottom: 22px;
          animation: badge-pulse 2s ease-in-out infinite;
        }
        @keyframes badge-pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(255,212,59,0.3); }
          50%      { box-shadow: 0 0 0 6px rgba(255,212,59,0); }
        }

        /* Avatar circle */
        .dev-avatar {
          width: 72px; height: 72px; border-radius: 50%;
          background: linear-gradient(135deg, #ff2d55, #a855f7, #3b82f6);
          display: flex; align-items: center; justify-content: center;
          font-size: 28px; font-weight: 900; color: #fff;
          margin: 0 auto 18px;
          box-shadow: 0 0 0 4px rgba(168,85,247,0.2), 0 0 30px rgba(168,85,247,0.3);
          animation: avatar-spin-ring 4s linear infinite;
        }
        @keyframes avatar-spin-ring {
          0%,100% { box-shadow: 0 0 0 4px rgba(255,45,85,0.3),   0 0 30px rgba(168,85,247,0.3); }
          33%      { box-shadow: 0 0 0 4px rgba(168,85,247,0.3),  0 0 30px rgba(59,130,246,0.3); }
          66%      { box-shadow: 0 0 0 4px rgba(59,130,246,0.3),  0 0 30px rgba(255,45,85,0.3); }
        }

        .dev-label {
          font-size: 12px; color: rgba(255,255,255,0.45);
          font-weight: 600; letter-spacing: 0.08em; margin-bottom: 6px;
        }

        /* Glitch name */
        .dev-name {
          font-size: 42px !important; font-weight: 900 !important;
          background: linear-gradient(90deg, #ff2d55, #ff7a18, #ffd43b, #a855f7);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative; display: inline-block;
          animation: glitch-name 3s ease-in-out infinite;
          margin: 0 0 6px !important;
          letter-spacing: -0.02em;
        }
        .dev-name::before, .dev-name::after {
          content: attr(data-text);
          position: absolute; top: 0; left: 0;
          background: linear-gradient(90deg, #ff2d55, #ff7a18, #ffd43b, #a855f7);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .dev-name::before {
          animation: glitch-1 3s ease-in-out infinite;
          clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
        }
        .dev-name::after {
          animation: glitch-2 3s ease-in-out infinite;
          clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
        }
        @keyframes glitch-1 {
          0%,90%,100% { transform: translate(0); opacity: 0; }
          92%          { transform: translate(-3px, 1px); opacity: 0.7; }
          94%          { transform: translate(3px, -1px); opacity: 0.7; }
          96%          { transform: translate(0); opacity: 0; }
        }
        @keyframes glitch-2 {
          0%,90%,100% { transform: translate(0); opacity: 0; }
          93%          { transform: translate(3px, 2px); opacity: 0.6; }
          95%          { transform: translate(-3px, -2px); opacity: 0.6; }
          97%          { transform: translate(0); opacity: 0; }
        }

        .dev-tagline {
          font-size: 13px; color: rgba(255,255,255,0.4);
          font-style: italic; margin-bottom: 22px;
        }

        .dev-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent);
          margin: 0 0 20px;
        }

        /* Tech stack chips */
        .dev-stack {
          display: flex; gap: 8px; flex-wrap: wrap; justify-content: center;
          margin-bottom: 20px;
        }
        .dev-stack span {
          font-size: 11px; font-weight: 800; letter-spacing: 0.05em;
          padding: 4px 12px; border-radius: 99px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.7);
          transition: background 0.3s, color 0.3s;
        }
        .dev-stack span:hover { background: rgba(255,45,85,0.15); color: #ff2d55; border-color: #ff2d55; }

        .dev-hint {
          font-size: 11px; color: rgba(255,255,255,0.2); margin: 0;
        }
        .dev-hint kbd {
          background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12);
          border-radius: 4px; padding: 1px 6px; font-size: 10px; font-family: monospace;
          color: rgba(255,255,255,0.4);
        }

        /* Confetti burst dots */
        .dev-burst-dot {
          position: fixed; width: 8px; height: 8px; border-radius: 50%;
          pointer-events: none; z-index: 100001;
          animation: burst-fly 0.8s cubic-bezier(0.22,1,0.36,1) forwards;
          transform: translate(-50%, -50%);
        }
        @keyframes burst-fly {
          0%   { transform: translate(-50%,-50%) translate(0,0) scale(1); opacity: 1; }
          100% { transform: translate(-50%,-50%) translate(var(--tx), var(--ty)) scale(0); opacity: 0; }
        }
      `}</style>
    </>
  );
}
