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

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px 100px' }}>
        {/* Intro Banner */}
        <div className="book-banner">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16, color: '#cf9d45' }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="book-banner-icon"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
          </div>
          <div>
            <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.5rem', color: '#fff', fontWeight: 900, marginBottom: 8 }}>
              Knowledge You Won't Find on YouTube
            </h2>
            <p style={{ color: '#9ca3af', maxWidth: 600, lineHeight: 1.7 }}>
              Each book is a distilled vault of real-world campaigns, client data, and battle-tested frameworks. No fluff. No theory. Just proven systems.
            </p>
          </div>
        </div>

        {/* Book Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 48, marginBottom: 80 }}>
          {books.map((book, i) => (
            <article key={i} className="book-card" style={{ '--book-color': book.color }}>
              {/* Book Cover Visual */}
              <div className="book-visual-wrap">
                <div className="book-3d-container">
                  <img src={book.image} alt={book.title} className="book-cover-img" />
                  <div className="book-spine"></div>
                  <div className="book-glow-effect"></div>
                </div>
                <div className="book-status-badge">{book.status}</div>
              </div>

              {/* Book Info */}
              <div className="book-content">
                <div className="book-tag-row">
                  <span className="book-category-tag">{book.tag}</span>
                </div>
                <h3 className="book-title">{book.title}</h3>
                <p className="book-subtitle">{book.subtitle}</p>
                <div className="book-divider"></div>
                <p className="book-description">{book.desc}</p>
                
                <button className="book-action-btn">
                  Notify Me on Launch
                  <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Early Access Banner */}
        <div className="early-access-banner">
          <div className="early-access-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
          </div>
          <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.8rem', fontWeight: 900, color: '#fff', marginBottom: 12 }}>Currently Writing</h3>
          <p style={{ color: '#9ca3af', maxWidth: 540, margin: '0 auto', lineHeight: 1.7 }}>
            Kiran is actively documenting battle-tested frameworks into these playbooks. Want early access? Join the waitlist and get notified first.
          </p>
          <button className="early-access-btn">Join the Waitlist →</button>
        </div>
      </div>

      <style>{`
        .book-card {
          background: #0d0d0d;
          border: 1px solid #1a1a1a;
          border-radius: 24px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
        }

        .book-card:hover {
          transform: translateY(-10px);
          border-color: var(--book-color);
          box-shadow: 0 30px 60px rgba(0,0,0,0.8), 0 0 20px rgba(207,157,69,0.1);
        }

        .book-visual-wrap {
          background: linear-gradient(135deg, #161616 0%, #080808 100%);
          padding: 60px 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          perspective: 1000px;
          border-bottom: 1px solid #1a1a1a;
        }

        .book-3d-container {
          position: relative;
          width: 180px;
          height: 260px;
          transform-style: preserve-3d;
          transform: rotateY(-15deg) rotateX(5deg);
          transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .book-card:hover .book-3d-container {
          transform: rotateY(-5deg) rotateX(0deg) scale(1.05);
        }

        .book-cover-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 2px 8px 8px 2px;
          box-shadow: 15px 15px 30px rgba(0,0,0,0.5);
          position: relative;
          z-index: 2;
        }

        .book-spine {
          position: absolute;
          top: 0;
          left: 0;
          width: 30px;
          height: 100%;
          background: #222;
          transform: rotateY(-90deg);
          transform-origin: left;
          z-index: 1;
          box-shadow: inset -10px 0 20px rgba(0,0,0,0.5);
        }

        .book-glow-effect {
          position: absolute;
          inset: -20px;
          background: radial-gradient(circle, var(--book-color) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.5s ease;
          z-index: 0;
          filter: blur(20px);
        }

        .book-card:hover .book-glow-effect {
          opacity: 0.15;
        }

        .book-status-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(0,0,0,0.8);
          border: 1px solid var(--book-color);
          color: var(--book-color);
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 999px;
          letter-spacing: 0.1em;
          backdrop-filter: blur(10px);
        }

        .book-content {
          padding: 32px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .book-tag-row {
          margin-bottom: 16px;
        }

        .book-category-tag {
          font-size: 0.7rem;
          font-weight: 700;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          border-bottom: 1px solid #333;
          padding-bottom: 4px;
        }

        .book-title {
          font-family: var(--font-headline);
          font-size: 1.6rem;
          font-weight: 900;
          color: #fff;
          line-height: 1.2;
          margin-bottom: 8px;
        }

        .book-subtitle {
          font-size: 0.9rem;
          color: var(--book-color);
          font-weight: 600;
          font-style: italic;
          margin-bottom: 20px;
        }

        .book-divider {
          width: 40px;
          height: 3px;
          background: var(--book-color);
          margin-bottom: 20px;
          border-radius: 999px;
        }

        .book-description {
          color: #9ca3af;
          font-size: 0.95rem;
          line-height: 1.7;
          margin-bottom: 32px;
          flex: 1;
        }

        .book-action-btn {
          width: 100%;
          background: transparent;
          border: 1px solid #222;
          color: #fff;
          font-weight: 700;
          font-size: 0.9rem;
          padding: 16px;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .book-card:hover .book-action-btn {
          border-color: var(--book-color);
          background: linear-gradient(135deg, rgba(207,157,69,0.1), transparent);
          color: var(--book-color);
        }

        .book-action-btn:hover {
          background: var(--book-color) !important;
          color: #000 !important;
          box-shadow: 0 10px 20px rgba(207,157,69,0.3);
        }

        .book-banner {
          background: linear-gradient(135deg, #111 60%, rgba(207,157,69,0.08));
          border: 1px solid #222;
          border-radius: 20px;
          padding: 40px 48px;
          margin-bottom: 72px;
          display: flex;
          align-items: center;
          gap: 28px;
          flex-wrap: wrap;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .book-banner:hover {
          border-color: rgba(207,157,69,0.4);
          box-shadow: 0 15px 40px rgba(0,0,0,0.5);
          transform: translateY(-2px);
        }

        .early-access-banner {
          background: linear-gradient(135deg, rgba(207,157,69,0.15), rgba(255,46,46,0.1));
          border: 1px solid rgba(207,157,69,0.25);
          border-radius: 20px;
          padding: 48px;
          text-align: center;
          transition: all 0.4s ease;
        }

        .early-access-btn {
          margin-top: 28px;
          padding: 14px 36px;
          background: #cf9d45;
          color: #000;
          border: none;
          border-radius: 8px;
          font-weight: 800;
          font-size: 1rem;
          cursor: pointer;
          box-shadow: 0 0 30px rgba(207,157,69,0.35);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        @keyframes pulse-glow {
          from { opacity: 0.6; transform: scale(1); }
          to { opacity: 1; transform: scale(1.1); }
        }

        @media (max-width: 768px) {
          .book-card {
            max-width: 400px;
            margin: 0 auto;
          }
          .book-banner {
            padding: 32px 24px;
            text-align: center;
            justify-content: center;
          }
        }
      `}</style>
    </main>
  );
}
