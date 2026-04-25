import React from 'react';
import PageHeader from '../components/PageHeader';

const books = [
  {
    title: 'The Admission Machine',
    subtitle: 'Engineering Predictable Enrollments',
    desc: 'A step-by-step playbook that breaks down exactly how to set up a Meta Ads funnel that fills seats on autopilot — no guesswork, no wasted budget.',
    tag: 'Funnel Strategy',
    color: '#cf9d45',
    status: 'Coming Soon',
  },
  {
    title: 'Beyond Organic',
    subtitle: 'Paid Traffic for Education Institutes',
    desc: 'The complete guide to moving past WhatsApp forwards and referrals into systematic paid acquisition that scales without you being in the room.',
    tag: 'Paid Ads Mastery',
    color: '#ff2e2e',
    status: 'Coming Soon',
  },
  {
    title: 'Marathi Growth Code',
    subtitle: 'Growing Businesses in the Vernacular Economy',
    desc: 'How Marathi entrepreneurs can dominate local markets using digital systems built for the Marathi-speaking audience — in language, culture, and context.',
    tag: 'Local Business',
    color: '#cf9d45',
    status: 'Coming Soon',
  },
];

export default function Books() {
  return (
    <div style={{ background: 'transparent', minHeight: '100vh', color: '#d1d5db' }}>
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32, marginBottom: 80 }}>
          {books.map((book, i) => (
            <div key={i} className="book-card" style={{ '--book-color': book.color }}>
              {/* Book Cover Mock */}
              <div className="book-cover">
                {/* Decorative lines */}
                <div style={{ position: 'absolute', top: 0, right: 0, width: 120, height: 120, background: `radial-gradient(circle, ${book.color}20, transparent 70%)` }} />
                <div className="book-tag">{book.tag}</div>
                <h3 style={{
                  fontFamily: 'var(--font-headline)', fontSize: '1.6rem', fontWeight: 900,
                  color: '#fff', lineHeight: 1.15, marginBottom: 8, position: 'relative', zIndex: 2
                }}>{book.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#6b7280', fontWeight: 600, fontStyle: 'italic', position: 'relative', zIndex: 2 }}>{book.subtitle}</p>
                <div className="book-status">{book.status}</div>
              </div>

              {/* Book Info */}
              <div style={{ padding: '28px 32px', flex: 1 }}>
                <p style={{ color: '#9ca3af', lineHeight: 1.75, fontSize: '0.96rem' }}>{book.desc}</p>
              </div>

              {/* CTA */}
              <div style={{ padding: '0 32px 28px' }}>
                <button className="book-btn">
                  Notify Me on Launch →
                </button>
              </div>
            </div>
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
        .book-banner-icon {
          animation: float-icon 4s ease-in-out infinite;
        }

        .book-card {
          background: #111;
          border: 1px solid #222;
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
        }
        .book-card:hover {
          transform: translateY(-8px);
          border-color: var(--book-color);
          box-shadow: 0 24px 48px rgba(0,0,0,0.6);
        }
        .book-cover {
          background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%);
          padding: 48px 32px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          position: relative;
          overflow: hidden;
          min-height: 220px;
          border-bottom: 3px solid var(--book-color);
        }
        .book-cover::after {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 50%; height: 100%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent);
          transform: skewX(-25deg);
          transition: all 0.7s;
          z-index: 1;
        }
        .book-card:hover .book-cover::after {
          left: 150%;
        }
        .book-tag {
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--book-color);
          margin-bottom: 16px;
          background: rgba(255,255,255,0.03);
          padding: 4px 12px;
          border-radius: 999px;
          border: 1px solid var(--book-color);
          position: relative;
          z-index: 2;
        }
        .book-status {
          position: absolute;
          bottom: 16px;
          right: 16px;
          background: #000;
          color: var(--book-color);
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          padding: 4px 12px;
          border-radius: 999px;
          border: 1px solid var(--book-color);
          z-index: 2;
        }
        .book-btn {
          width: 100%;
          padding: 12px 24px;
          background: transparent;
          border: 1px solid var(--book-color);
          color: var(--book-color);
          font-weight: 700;
          font-size: 0.85rem;
          border-radius: 8px;
          cursor: pointer;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: all 0.3s ease;
        }
        .book-card:hover .book-btn, .book-btn:hover {
          background: var(--book-color);
          color: #000;
          box-shadow: 0 0 20px rgba(255,255,255,0.1);
        }

        .early-access-banner {
          background: linear-gradient(135deg, rgba(207,157,69,0.15), rgba(255,46,46,0.1));
          border: 1px solid rgba(207,157,69,0.25);
          border-radius: 20px;
          padding: 48px;
          text-align: center;
          transition: all 0.4s ease;
        }
        .early-access-banner:hover {
          box-shadow: 0 20px 50px rgba(0,0,0,0.4);
          transform: translateY(-3px);
          border-color: rgba(207,157,69,0.5);
        }
        .early-access-icon {
          display: flex;
          justify-content: center;
          margin-bottom: 16px;
          color: #cf9d45;
          animation: pulse-glow 3s infinite alternate;
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
        .early-access-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 40px rgba(207,157,69,0.6);
          background: #e6b75c;
        }
      `}</style>
    </div>
  );
}
