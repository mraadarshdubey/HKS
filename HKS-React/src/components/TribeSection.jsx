import React from 'react';

export default function TribeSection() {
  return (
    <section className="tribe-section">
      {/* Background Glow */}
      <div className="tribe-glow"></div>

      <div className="container">
        <div className="tribe-card glass-panel">

          {/* Text Content */}
          <div className="tribe-content">
            <div className="tribe-badge">Our Community</div>
            <h2 className="section-title" style={{ marginBottom: '20px' }}>
              Join <span className="gold">70,000+</span> Marathi Business Owners
            </h2>
            <p className="tribe-desc">
              Become a part of the <strong className="white">Marathi Business Tribe</strong>. Learn how to scale your business using cutting-edge Meta Ads & AI Funnel Systems. Get predictable leads, daily sales, and connect with driven entrepreneurs.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
              <a
                href="https://marathibusinesstribe.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-btn tribe-btn"
              >
                Explore The Tribe
                <span className="btn-icon">→</span>
              </a>

              <div className="tribe-socials">
                <a href="https://www.instagram.com/hellokiransheth/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://www.youtube.com/@hellokiransheth" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.13 1 12 1 12s0 3.87.46 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.87 23 12 23 12s0-3.87-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
                </a>
                <a href="https://www.facebook.com/hellokiransheth/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Visual Side */}
          <div className="tribe-visual">
            <div className="tribe-orb-container">
              <div className="tribe-orb">
                <div className="orb-ring ring-1"></div>
                <div className="orb-ring ring-2"></div>
                <div className="orb-ring ring-3"></div>
                <div className="orb-inner">
                  <div className="orb-text">MBT</div>
                  <div className="orb-sub">Marathi<br />Business Tribe</div>
                </div>
              </div>
              
              {/* Floating Elements Representing Members */}
              <div className="floating-member member-1">
                <i className="fas fa-user-tie"></i>
              </div>
              <div className="floating-member member-2">
                <i className="fas fa-briefcase"></i>
              </div>
              <div className="floating-member member-3">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="floating-member member-4">
                <i className="fas fa-store"></i>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
