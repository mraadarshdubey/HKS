import { useState, useEffect } from 'react';

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToOffer = () => {
    window.open('https://rzp.io/rzp/IPZgTGU', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`announcement-bar ${!isVisible ? 'hide' : ''}`} onClick={scrollToOffer} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && scrollToOffer()}>
      <span className="pulse">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '1.2em', height: '1.2em', display: 'inline-block', verticalAlign: '-0.2em', color: '#FFD700' }}>
          <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
        </svg>
      </span>
      Only <span className="spots-badge">5</span>
      Free Strategy Calls Left This Week —{' '}
      <span className="cta-link">Claim Yours Now <i className="fas fa-arrow-right" /></span>
    </div>
  );
}
