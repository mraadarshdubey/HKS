import React from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';

const books = [
  {
    title: 'The Admission Machine',
    subtitle: 'Engineering Predictable Enrollments',
    desc: 'A step-by-step playbook that breaks down exactly how to set up a Meta Ads funnel that fills seats on autopilot — no guesswork, no wasted budget.',
    tag: 'Funnel Strategy',
    color: '#cf9d45',
    status: 'Coming Soon',
    image: '/Enquiry To Payment.png',
  },
  {
    title: 'Beyond Organic',
    subtitle: 'Paid Traffic for Education Institutes',
    desc: 'The complete guide to moving past WhatsApp forwards and referrals into systematic paid acquisition that scales without you being in the room.',
    tag: 'Paid Ads Mastery',
    color: '#ff2e2e',
    status: 'Coming Soon',
    image: '/Get More Customer.png',
  },
  {
    title: 'Marathi Growth Code',
    subtitle: 'Growing Businesses in the Vernacular Economy',
    desc: 'How Marathi entrepreneurs can dominate local markets using digital systems built for the Marathi-speaking audience — in language, culture, and context.',
    tag: 'Local Business',
    color: '#cf9d45',
    status: 'Coming Soon',
    image: '/Workers To Business Leader.png',
  },
];

export default function Books() {
  return (
    <main style={{ background: 'transparent', minHeight: '100vh', color: '#d1d5db' }}>
      <SEO
        title="Books — Digital Marketing & Growth Strategy Playbooks"
        description="Discover Kiran Hajare's books on Meta Ads funnels, paid traffic for education institutes, and growing businesses in the Marathi-speaking economy."
        path="/books"
        keywords="Kiran Hajare books, Meta ads playbook, coaching institute marketing book, Marathi business growth, digital marketing guide India"
      />
      <PageHeader
        title="Kiran's Books"
        subtitle="Distilled frameworks — from years of scaling institutes — condensed into actionable playbooks."
        label="Written Knowledge"
      />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px 120px' }}>
        
        {/* Animated Intro Banner */}
        <div className="book-hero-banner">
          <div className="hero-glow"></div>
          <div className="hero-content">
            <div className="hero-icon-wrap">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
            </div>
            <div className="hero-text">
              <h2 className="hero-title">Knowledge You Won't Find on YouTube</h2>
              <p className="hero-desc">Each book is a distilled vault of real-world campaigns, client data, and battle-tested frameworks. No fluff. Just systems.</p>
            </div>
          </div>
        </div>

        {/* Premium Book Grid */}
        <div className="books-grid">
          {books.map((book, i) => (
            <article key={i} className="premium-book-card" style={{ '--accent': book.color }}>
              
              {/* Book Presentation Section */}
              <div className="book-stage">
                <div className="stage-lighting"></div>
                <div className="stage-floor"></div>
                
                <div className="book-3d-wrapper">
                  <div className="book-3d-object">
                    <img src={book.image} alt={book.title} className="book-front-cover" />
                    <div className="book-spine-3d"></div>
                    <div className="book-pages-3d"></div>
                  </div>
                  <div className="book-shadow-3d"></div>
                </div>

                <div className="book-badge-premium">
                  <span>{book.status}</span>
                </div>
              </div>

              {/* Information Section */}
              <div className="book-details">
                <div className="detail-header">
                  <span className="detail-tag">{book.tag}</span>
                  <div className="detail-accent-line"></div>
                </div>
                
                <h3 className="detail-title">{book.title}</h3>
                <p className="detail-subtitle">{book.subtitle}</p>
                
                <div className="detail-body">
                  <p>{book.desc}</p>
                </div>

                <div className="detail-footer">
                  <button className="premium-cta">
                    <span>Reserve Your Copy</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Waitlist Section */}
        <div className="waitlist-card-premium">
          <div className="waitlist-glow"></div>
          <div className="waitlist-inner">
            <div className="waitlist-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
            </div>
            <div className="waitlist-text">
              <h3>Join the Inner Circle</h3>
              <p>Be the first to get early access, exclusive bonus chapters, and launch-day discounts.</p>
            </div>
            <button className="waitlist-btn">Join the Waitlist</button>
          </div>
        </div>
      </div>

      <style>{`
        /* Global & Layout */
        .books-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 60px;
          margin-bottom: 100px;
        }

        /* Hero Banner */
        .book-hero-banner {
          position: relative;
          background: #0a0a0a;
          border: 1px solid #1a1a1a;
          border-radius: 32px;
          padding: 48px;
          margin-bottom: 80px;
          overflow: hidden;
          display: flex;
          align-items: center;
        }
        .hero-glow {
          position: absolute;
          top: -50%; left: -50%;
          width: 200%; height: 200%;
          background: radial-gradient(circle at center, rgba(207,157,69,0.05) 0%, transparent 40%);
          pointer-events: none;
        }
        .hero-content {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .hero-icon-wrap {
          width: 80px; height: 80px;
          border-radius: 20px;
          background: rgba(207,157,69,0.1);
          border: 1px solid rgba(207,157,69,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #cf9d45;
          flex-shrink: 0;
        }
        .hero-title {
          font-family: var(--font-headline);
          font-size: 1.8rem;
          font-weight: 900;
          color: #fff;
          margin-bottom: 8px;
        }
        .hero-desc {
          color: #9ca3af;
          max-width: 600px;
          line-height: 1.6;
        }

        /* Premium Book Card */
        .premium-book-card {
          background: #080808;
          border: 1px solid #1a1a1a;
          border-radius: 40px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
        }
        .premium-book-card:hover {
          transform: translateY(-12px);
          border-color: rgba(255,255,255,0.1);
          box-shadow: 0 40px 80px rgba(0,0,0,0.8);
        }

        /* Book Stage Area */
        .book-stage {
          height: 380px;
          background: linear-gradient(to bottom, #111, #080808);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border-bottom: 1px solid #1a1a1a;
        }
        .stage-lighting {
          position: absolute;
          top: -20%; left: 50%;
          width: 140%; height: 140%;
          transform: translateX(-50%);
          background: radial-gradient(circle at top center, var(--accent) 0%, transparent 60%);
          opacity: 0.15;
          transition: opacity 0.6s ease;
        }
        .premium-book-card:hover .stage-lighting {
          opacity: 0.25;
        }
        .stage-floor {
          position: absolute;
          bottom: 0; left: 0; width: 100%; height: 60px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.02), transparent);
          transform: perspective(100px) rotateX(40deg);
        }

        /* 3D Book Object */
        .book-3d-wrapper {
          position: relative;
          z-index: 5;
          transform: translateY(10px);
          transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .premium-book-card:hover .book-3d-wrapper {
          transform: translateY(-10px);
        }
        .book-3d-object {
          position: relative;
          width: 200px;
          height: 280px;
          transform-style: preserve-3d;
          transform: rotateY(-20deg) rotateX(5deg);
          transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .premium-book-card:hover .book-3d-object {
          transform: rotateY(-5deg) rotateX(2deg);
        }
        .book-front-cover {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 2px 8px 8px 2px;
          box-shadow: 20px 20px 50px rgba(0,0,0,0.6);
          position: relative;
          z-index: 10;
        }
        .book-spine-3d {
          position: absolute;
          top: 0; left: 0;
          width: 32px; height: 100%;
          background: #222;
          transform: rotateY(-90deg) translateX(-16px) translateZ(-16px);
          transform-origin: left;
          box-shadow: inset -10px 0 20px rgba(0,0,0,0.4);
        }
        .book-pages-3d {
          position: absolute;
          top: 3px; right: -4px;
          width: 20px; height: calc(100% - 6px);
          background: #eee;
          transform: rotateY(90deg);
          transform-origin: right;
          background: repeating-linear-gradient(to bottom, #ddd, #ddd 1px, #fff 1px, #fff 2px);
        }
        .book-shadow-3d {
          position: absolute;
          bottom: -40px; left: 50%;
          width: 110%; height: 20px;
          background: rgba(0,0,0,0.6);
          transform: translateX(-50%) perspective(100px) rotateX(60deg);
          filter: blur(15px);
          border-radius: 50%;
          transition: transform 0.6s ease, opacity 0.6s ease;
        }
        .premium-book-card:hover .book-shadow-3d {
          transform: translateX(-50%) perspective(100px) rotateX(60deg) scale(1.1);
          opacity: 0.8;
        }

        /* Badge */
        .book-badge-premium {
          position: absolute;
          top: 24px; right: 24px;
          padding: 8px 16px;
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 99px;
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--accent);
          z-index: 20;
        }

        /* Details */
        .book-details {
          padding: 40px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.01), transparent);
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .detail-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }
        .detail-tag {
          font-size: 0.7rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #666;
        }
        .detail-accent-line {
          height: 1px;
          flex: 1;
          background: linear-gradient(to right, #222, transparent);
        }
        .detail-title {
          font-family: var(--font-headline);
          font-size: 1.8rem;
          font-weight: 900;
          color: #fff;
          line-height: 1.2;
          margin-bottom: 8px;
        }
        .detail-subtitle {
          font-size: 0.95rem;
          color: var(--accent);
          font-weight: 600;
          font-style: italic;
          margin-bottom: 24px;
        }
        .detail-body {
          color: #9ca3af;
          line-height: 1.7;
          font-size: 0.96rem;
          margin-bottom: 32px;
          flex: 1;
        }

        /* CTA */
        .premium-cta {
          width: 100%;
          background: #111;
          border: 1px solid #222;
          padding: 18px;
          border-radius: 16px;
          color: #fff;
          font-weight: 800;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          overflow: hidden;
        }
        .premium-cta::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent, rgba(255,255,255,0.05), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }
        .premium-cta:hover::after {
          transform: translateX(100%);
        }
        .premium-cta:hover {
          background: var(--accent);
          border-color: var(--accent);
          color: #000;
          box-shadow: 0 10px 20px rgba(0,0,0,0.4);
          transform: translateY(-2px);
        }

        /* Waitlist Premium */
        .waitlist-card-premium {
          position: relative;
          background: #0a0a0a;
          border: 1px solid #cf9d4522;
          border-radius: 32px;
          padding: 60px;
          overflow: hidden;
          text-align: center;
        }
        .waitlist-glow {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: radial-gradient(circle at top center, rgba(207,157,69,0.08) 0%, transparent 70%);
        }
        .waitlist-inner {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        .waitlist-icon {
          width: 64px; height: 64px;
          background: #cf9d45;
          color: #000;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 30px rgba(207,157,69,0.3);
        }
        .waitlist-text h3 {
          font-family: var(--font-headline);
          font-size: 2rem;
          font-weight: 900;
          color: #fff;
          margin-bottom: 8px;
        }
        .waitlist-text p {
          color: #9ca3af;
          font-size: 1.1rem;
        }
        .waitlist-btn {
          margin-top: 10px;
          padding: 16px 48px;
          background: #cf9d45;
          color: #000;
          border: none;
          border-radius: 12px;
          font-weight: 900;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s;
        }
        .waitlist-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 15px 40px rgba(207,157,69,0.4);
        }

        @media (max-width: 768px) {
          .book-hero-banner {
            padding: 32px 24px;
            flex-direction: column;
            text-align: center;
          }
          .hero-content {
            flex-direction: column;
          }
          .waitlist-card-premium {
            padding: 40px 24px;
          }
        }
      `}</style>
    </main>
  );
}
