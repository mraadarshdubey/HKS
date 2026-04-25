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
            <img src="/LOGO.png" alt="KIRAN HAJARE" style={{ height: '160px', width: 'auto', objectFit: 'contain', transform: 'scale(1.96)', transformOrigin: 'left center' }} />
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
        <p className="footer-copyright-text">
          © {new Date().getFullYear()} KIRAN HAJARE
        </p>
      </div>
    </footer>
  );
}
