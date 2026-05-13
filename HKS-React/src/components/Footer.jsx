import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer-premium">
      {/* Premium Ambient Background Glow */}
      <div className="footer-glow-line"></div>
      <div className="footer-glow-blob"></div>

      <div className="footer-inner">
        {/* Brand Column */}
        <div className="footer-brand">
          <Link to="/" className="inline-block mb-4">
            <img src="/LOGO.webp" alt="KIRAN HAJARE" style={{ height: '160px', width: 'auto', objectFit: 'contain', transform: 'scale(1.96)', transformOrigin: 'left center' }} />
          </Link>
          <p className="footer-desc">
            More Admissions. Better Conversions. Predictable Growth. Building powerful educational institutes that impact millions across the globe.
          </p>
          <div className="footer-legal-links">
            <Link to="/privacy-policy">Privacy</Link>
            <span className="dot">•</span>
            <Link to="/terms-of-service">Terms</Link>
            <span className="dot">•</span>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        {/* Navigation Columns */}
        <div className="footer-nav-grid">
          {/* Column 1 */}
          <div className="footer-col">
            <h4>About</h4>
            <ul>
              <li><Link to="/my-story"><span className="dash"></span>My Story</Link></li>
              <li><Link to="/books"><span className="dash"></span>Books</Link></li>
              <li><Link to="/mission"><span className="dash"></span>Mission</Link></li>
              <li><Link to="/press"><span className="dash"></span>Press</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="footer-col">
            <h4>Companies</h4>
            <ul>
              <li><Link to="/platforms"><span className="dash"></span>Platforms</Link></li>
              <li><Link to="/business-development"><span className="dash"></span>Business Dev</Link></li>
              <li><Link to="/personal-development"><span className="dash"></span>Personal Dev</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-col full-width-mobile">
            <h4>Content</h4>
            <ul>
              <li><Link to="/podcasts"><span className="dash"></span>Podcasts</Link></li>
              <li><Link to="/youtube"><span className="dash"></span>YouTube</Link></li>
              <li><Link to="/socials"><span className="dash"></span>Socials</Link></li>
              <li><Link to="/articles"><span className="dash"></span>Articles</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom / Disclaimer */}
      <div className="footer-bottom">
        <p className="footer-disclaimer-text">
          Results mentioned are based on real client data. Individual results may vary based on institute type, market,
          and implementation variables. This site is not a part of the Facebook website or Facebook Inc. Additionally,
          This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
        </p>
        
        <div className="footer-copyright-row">
          <p className="footer-copyright-text">
            © {new Date().getFullYear()} KIRAN HAJARE
          </p>
          
          {/* Creative Adstoimpact Credit */}
          <div className="footer-credit">
            <span className="credit-text">Designed &amp; Developed By</span>
            <a href="https://adstoimpact.com/" target="_blank" rel="noopener noreferrer" className="credit-link">
              <span className="credit-brand">AdsToImpact</span>
              <span className="credit-glow"></span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .footer-copyright-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 16px;
        }
        
        .footer-credit {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          color: #6b7280;
        }
        
        .credit-text {
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-size: 0.75rem;
        }
        
        .credit-link {
          position: relative;
          display: inline-block;
          text-decoration: none;
          padding: 4px 12px;
          border-radius: 99px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          transition: all 0.3s ease;
          overflow: hidden;
        }
        
        .credit-brand {
          position: relative;
          z-index: 2;
          font-weight: 800;
          letter-spacing: 0.02em;
          background: linear-gradient(90deg, #cf9d45, #f5d38c, #cf9d45);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% auto;
          transition: background-position 0.5s ease;
        }
        
        .credit-link:hover {
          background: rgba(207,157,69,0.08);
          border-color: rgba(207,157,69,0.3);
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(207,157,69,0.15);
        }
        
        .credit-link:hover .credit-brand {
          background-position: right center;
        }
        
        .credit-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(207,157,69,0.4), transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
        }
        
        .credit-link:hover .credit-glow {
          opacity: 1;
          animation: pulse-glow 2s infinite;
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        @media (max-width: 768px) {
          .footer-copyright-row {
            flex-direction: column;
            justify-content: center;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
