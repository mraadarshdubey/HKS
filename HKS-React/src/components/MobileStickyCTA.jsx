import { useState, useEffect } from 'react';

export default function MobileStickyCTA() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!dismissed && window.scrollY > 600) setShow(true);
      else if (window.scrollY <= 600) setShow(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <div className={`mobile-sticky${show ? ' show' : ''}`}>
      <button className="mobile-sticky-dismiss" onClick={() => setDismissed(true)} aria-label="Dismiss">
        <i className="fas fa-times" />
      </button>
      <a href="https://rzp.io/rzp/IPZgTGU" target="_blank" rel="noopener noreferrer">
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          Book Free Strategy Call <i className="fas fa-arrow-right" />
        </span>
        <span className="mobile-sub">Only 5 Spots Left</span>
      </a>
    </div>
  );
}
