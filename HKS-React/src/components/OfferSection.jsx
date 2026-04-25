import { useEffect, useRef } from 'react';

const includes = [
  { item: 'How to run Meta Ads properly', icon: 'fas fa-bullseye' },
  { item: 'How to get leads on low budget', icon: 'fas fa-filter' },
  { item: 'What kind of ads actually work', icon: 'fas fa-chart-line' },
  { item: 'How to use AI to make ads faster', icon: 'fas fa-robot' },
  { item: 'How to convert leads into customers', icon: 'fas fa-handshake' },
  { item: 'A clear direction — what to do next', icon: 'fas fa-map' },
];

export default function OfferSection() {
  const displayRef = useRef(null);

  useEffect(() => {
    const storageKey = 'hksCountdownEndV3';
    let endTime = localStorage.getItem(storageKey);

    if (!endTime || parseInt(endTime) < Date.now()) {
      const next = new Date();
      next.setHours(23, 59, 59, 999);
      localStorage.setItem(storageKey, next.getTime().toString());
      endTime = next.getTime().toString();
    }

    const end = parseInt(endTime);
    const pad = (n) => (n < 10 ? '0' + n : n);

    const tick = () => {
      const dist = end - Date.now();
      if (!displayRef.current) return;
      if (dist <= 0) {
        displayRef.current.textContent = '00:00:00';
        return;
      }
      const h = Math.floor(dist / 3600000);
      const m = Math.floor((dist % 3600000) / 60000);
      const s = Math.floor((dist % 60000) / 1000);
      displayRef.current.textContent = `${pad(h)}:${pad(m)}:${pad(s)}`;
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="offer" className="offer-section fade-in-section">
      <div className="offer-box">
        <div className="offer-badge">Free Clarity Call</div>

        <h2 className="offer-h2">Book a Free Clarity Call<br />Let's Fix Your Ads — Step by Step</h2>
        <p className="offer-sub">
          I'll personally look at your situation and tell you{' '}
          <strong>exactly</strong> what you need to do to start getting real customers.
        </p>

        <div className="offer-includes-grid">
          {includes.map((inc, i) => (
            <div className="offer-item" key={i}>
              <div className="icon-wrap">
                <i className={inc.icon} />
              </div>
              <span>{inc.item}</span>
            </div>
          ))}
        </div>

        <div className="countdown-box">
          <span className="countdown-label">Next free session closes in:</span>
          <div className="countdown-display" ref={displayRef}>23:59:59</div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '12px' }}>
          <p style={{ color: '#6b7280', fontSize: '0.82rem' }}>
            <i className="fas fa-arrow-up" style={{ color: '#cf9d45', marginRight: 6 }} />
            Use the <strong style={{ color: '#cf9d45' }}>Book Free Call</strong> button in the top navigation to get started.
          </p>
        </div>
      </div>
    </section>
  );
}
