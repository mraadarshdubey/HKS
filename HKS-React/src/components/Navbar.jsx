import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  {
    label: 'About',
    children: [
      { label: 'My Story', to: '/my-story' },
      { label: 'Books', to: '/books' },
      { label: 'Mission', to: '/mission' },
      { label: 'Press', to: '/press' },
    ],
  },
  {
    label: 'Companies',
    children: [
      { label: 'Software Platforms', to: '/platforms' },
      { label: 'Business Development', to: '/business-development' },
      { label: 'Personal Development', to: '/personal-development' },
    ],
  },
  {
    label: 'Content',
    children: [
      { label: 'Podcasts', to: '/podcasts' },
      { label: 'YouTube', to: '/youtube' },
      { label: 'Socials', to: '/socials' },
      { label: 'Articles', to: '/articles' },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <>
      <nav
        className={`navbar-premium${scrolled ? ' navbar-scrolled' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="navbar-inner">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <img src="/LOGO.webp" alt="KIRAN HK" style={{ height: '120px', width: 'auto', objectFit: 'contain', transform: 'scale(1.6)', transformOrigin: 'left center' }} />
          </Link>

          {/* Desktop Links */}
          <ul className="navbar-links">
            {navLinks.map((item) => (
              <li
                key={item.label}
                className="navbar-dropdown-parent"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="navbar-link-btn">
                  {item.label}
                  <svg className="navbar-chevron" viewBox="0 0 12 7" fill="none">
                    <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
                {openDropdown === item.label && (
                  <div className="navbar-dropdown">
                    {item.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className={`navbar-dropdown-item${location.pathname === child.to ? ' active' : ''}`}
                      >
                        <span className="dropdown-dot" />
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="https://rzp.io/rzp/IPZgTGU"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-cta"
          >
            Book Free Call
          </a>

          {/* Mobile Hamburger */}
          <button
            className={`navbar-hamburger${mobileOpen ? ' open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-nav${mobileOpen ? ' open' : ''}`}>
        <div className="mobile-nav-inner">
          {navLinks.map((item) => (
            <div key={item.label} className="mobile-nav-group">
              <button
                className="mobile-nav-group-btn"
                onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
              >
                {item.label}
                <svg
                  className={`mobile-chevron${mobileExpanded === item.label ? ' rotated' : ''}`}
                  viewBox="0 0 12 7" fill="none"
                >
                  <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
              {mobileExpanded === item.label && (
                <div className="mobile-nav-children">
                  {item.children.map((child) => (
                    <Link key={child.to} to={child.to} className="mobile-nav-link">
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href="https://rzp.io/rzp/IPZgTGU"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-nav-cta"
            onClick={() => setMobileOpen(false)}
          >
            Book Free Strategy Call →
          </a>
        </div>
      </div>
    </>
  );
}
