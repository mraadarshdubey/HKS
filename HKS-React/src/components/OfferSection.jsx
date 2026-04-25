import { useEffect, useRef } from 'react';

const includes = [
  { item: 'Full funnel audit', icon: 'fas fa-search' },
  { item: 'Lead quality analysis', icon: 'fas fa-filter' },
  { item: 'Competitor gap report', icon: 'fas fa-binoculars' },
  { item: 'Custom 90-day roadmap', icon: 'fas fa-map' },
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
        <div className="offer-badge">Free Offer</div>

        <h2 className="offer-h2">Get Your Free Admission<br />Growth Plan</h2>
        <p className="offer-sub">
          We'll audit your current process and show you{' '}
          <strong>exactly</strong> where you're losing students.
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
          <span className="countdown-label">Next available session fills in:</span>
          <div className="countdown-display" ref={displayRef}>23:59:59</div>
        </div>

        <a href="#" className="offer-cta-btn">
          <span className="main">
            Claim Your Free Growth Plan <i className="fas fa-arrow-right" />
          </span>
          <span className="sub">Only 5 spots available this week. No credit card. No obligation.</span>
        </a>
      </div>
    </section>
  );
}
