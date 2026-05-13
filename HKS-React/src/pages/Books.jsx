import React, { useRef, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';

const books = [
  {
    title: 'The Admission Machine',
    subtitle: 'Engineering Predictable Enrollments',
    desc: 'A step-by-step playbook that breaks down exactly how to set up a Meta Ads funnel that fills seats on autopilot — no guesswork, no wasted budget.',
    tag: 'Funnel Strategy',
    color: '#cf9d45',
    rgb: '207,157,69',
    status: 'Coming Soon',
    image: '/Enquiry To Payment.png',
    num: '01',
  },
  {
    title: 'Beyond Organic',
    subtitle: 'Paid Traffic for Education Institutes',
    desc: 'The complete guide to moving past WhatsApp forwards and referrals into systematic paid acquisition that scales without you being in the room.',
    tag: 'Paid Ads Mastery',
    color: '#e05c5c',
    rgb: '224,92,92',
    status: 'Coming Soon',
    image: '/Get More Customer.png',
    num: '02',
  },
  {
    title: 'Marathi Growth Code',
    subtitle: 'Growing Businesses in the Vernacular Economy',
    desc: 'How Marathi entrepreneurs can dominate local markets using digital systems built for the Marathi-speaking audience — in language, culture, and context.',
    tag: 'Local Business',
    color: '#cf9d45',
    rgb: '207,157,69',
    status: 'Coming Soon',
    image: '/Workers To Business Leader.png',
    num: '03',
  },
];

function BookCard({ book, idx }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const handleMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.setProperty('--rx', `${-y * 6}deg`);
      card.style.setProperty('--ry', `${x * 8}deg`);
    };
    const handleLeave = () => {
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
    };
    card.addEventListener('mousemove', handleMove);
    card.addEventListener('mouseleave', handleLeave);
    return () => {
      card.removeEventListener('mousemove', handleMove);
      card.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="bk-card"
      style={{ '--c': book.color, '--rgb': book.rgb, animationDelay: `${idx * 0.15}s` }}
    >
      {/* Left - Cover Display */}
      <div className="bk-visual">
        <div className="bk-bg-glow"></div>
        <div className="bk-grid-lines"></div>
        <div className="bk-num">{book.num}</div>

        <div className="bk-float">
          {/* Actual 3D book */}
          <div className="bk-book">
            <div className="bk-face bk-face-front">
              <img src={book.image} alt={book.title} />
            </div>
            <div className="bk-face bk-face-right"></div>
            <div className="bk-face bk-face-top"></div>
          </div>
          <div className="bk-reflection">
            <img src={book.image} alt="" />
          </div>
        </div>

        <div className="bk-status-pill">{book.status}</div>
      </div>

      {/* Right - Content */}
      <div className="bk-content">
        <div className="bk-tag-wrap">
          <span className="bk-tag">{book.tag}</span>
        </div>
        <h2 className="bk-title">{book.title}</h2>
        <p className="bk-subtitle">{book.subtitle}</p>
        <div className="bk-divider"></div>
        <p className="bk-desc">{book.desc}</p>
        <button className="bk-btn">
          <span>Reserve Early Access</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
      </div>
    </div>
  );
}

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

      <div className="bk-wrapper">

        {/* Section Header */}
        <div className="bk-header-strip">
          <div className="strip-line"></div>
          <span>3 Books · All Coming Soon</span>
          <div className="strip-line"></div>
        </div>

        {/* Book Stack */}
        <div className="bk-stack">
          {books.map((book, i) => (
            <BookCard key={i} book={book} idx={i} />
          ))}
        </div>

        {/* Waitlist */}
        <div className="bk-waitlist">
          <div className="wl-orbs">
            <div className="wl-orb wl-orb-1"></div>
            <div className="wl-orb wl-orb-2"></div>
          </div>
          <div className="wl-inner">
            <span className="wl-eyebrow">Limited Early Access</span>
            <h3 className="wl-title">Be First. Get More.</h3>
            <p className="wl-sub">Exclusive chapters, launch bonuses, and a discount reserved only for the waitlist.</p>
            <button className="wl-btn">Join the Waitlist →</button>
          </div>
        </div>

      </div>

      <style>{`
        .bk-wrapper {
          max-width: 1140px;
          margin: 0 auto;
          padding: 60px 24px 120px;
        }

        /* Header Strip */
        .bk-header-strip {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 64px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #555;
        }
        .strip-line {
          flex: 1;
          height: 1px;
          background: #1e1e1e;
        }

        /* Card */
        .bk-card {
          display: flex;
          gap: 0;
          background: #0a0a0a;
          border: 1px solid #1a1a1a;
          border-radius: 32px;
          overflow: hidden;
          margin-bottom: 40px;
          transform: perspective(1200px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg));
          transition: transform 0.15s ease, box-shadow 0.4s ease, border-color 0.4s ease;
          animation: fadeSlideUp 0.6s both;
        }
        .bk-card:hover {
          border-color: rgba(var(--rgb), 0.3);
          box-shadow: 0 40px 80px rgba(0,0,0,0.6), 0 0 60px rgba(var(--rgb), 0.07);
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: perspective(1200px) translateY(40px); }
          to { opacity: 1; transform: perspective(1200px) translateY(0); }
        }

        /* Visual Side */
        .bk-visual {
          flex: 0 0 380px;
          height: 440px;
          position: relative;
          overflow: hidden;
          background: #080808;
          border-right: 1px solid #1a1a1a;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .bk-bg-glow {
          position: absolute;
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(var(--rgb), 0.15) 0%, transparent 70%);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          transition: all 0.6s ease;
        }
        .bk-card:hover .bk-bg-glow {
          width: 400px; height: 400px;
          opacity: 1.2;
        }
        .bk-grid-lines {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .bk-num {
          position: absolute;
          top: 24px; left: 28px;
          font-size: 5rem;
          font-weight: 900;
          color: rgba(var(--rgb), 0.06);
          font-family: var(--font-headline);
          line-height: 1;
          user-select: none;
        }

        /* 3D Floating Book */
        .bk-float {
          position: relative;
          z-index: 5;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .bk-book {
          width: 160px;
          height: 230px;
          transform-style: preserve-3d;
          transform: rotateY(-25deg) rotateX(5deg);
          transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
        }
        .bk-card:hover .bk-book {
          transform: rotateY(-10deg) rotateX(2deg) translateY(-16px);
        }
        .bk-face {
          position: absolute;
          backface-visibility: hidden;
        }
        .bk-face-front {
          width: 160px; height: 230px;
          top: 0; left: 0;
          box-shadow: 20px 30px 50px rgba(0,0,0,0.7);
          border-radius: 2px 6px 6px 2px;
          overflow: hidden;
        }
        .bk-face-front img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
        }
        .bk-face-right {
          width: 36px; height: 230px;
          top: 0; left: 160px;
          transform-origin: left;
          transform: rotateY(90deg);
          background: linear-gradient(to right, #1a1a1a, #333);
          box-shadow: inset -8px 0 16px rgba(0,0,0,0.5);
        }
        .bk-face-top {
          width: 160px; height: 36px;
          top: -36px; left: 0;
          transform-origin: bottom;
          transform: rotateX(90deg);
          background: linear-gradient(to bottom,
            #f0f0f0 0%, #f0f0f0 10%,
            #e8e8e8 10%, #e8e8e8 20%,
            #f0f0f0 20%, #f0f0f0 30%,
            #e8e8e8 30%, #e8e8e8 40%,
            #f0f0f0 40%, #f0f0f0 50%,
            #e0e0e0 50%, #e0e0e0 100%
          );
        }
        .bk-reflection {
          width: 160px; height: 60px;
          margin-top: 2px;
          overflow: hidden;
          transform: scaleY(-1);
          opacity: 0.15;
          mask-image: linear-gradient(to bottom, rgba(0,0,0,0.5), transparent);
          -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,0.5), transparent);
          filter: blur(1px);
          border-radius: 0 0 6px 6px;
        }
        .bk-reflection img {
          width: 100%; height: 230px;
          object-fit: cover;
          object-position: bottom;
        }

        /* Status Pill */
        .bk-status-pill {
          position: absolute;
          top: 24px; right: 24px;
          padding: 6px 16px;
          background: rgba(var(--rgb), 0.1);
          border: 1px solid rgba(var(--rgb), 0.3);
          border-radius: 99px;
          font-size: 0.6rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--c);
        }

        /* Content Side */
        .bk-content {
          flex: 1;
          padding: 52px 56px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .bk-tag-wrap {
          margin-bottom: 20px;
        }
        .bk-tag {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--c);
          padding-bottom: 6px;
          border-bottom: 2px solid var(--c);
        }
        .bk-title {
          font-family: var(--font-headline);
          font-size: 2.4rem;
          font-weight: 900;
          color: #fff;
          line-height: 1.1;
          margin-bottom: 10px;
        }
        .bk-subtitle {
          color: #9ca3af;
          font-size: 1rem;
          font-weight: 500;
          font-style: italic;
          margin-bottom: 28px;
        }
        .bk-divider {
          width: 48px;
          height: 2px;
          background: linear-gradient(to right, var(--c), transparent);
          margin-bottom: 24px;
        }
        .bk-desc {
          color: #6b7280;
          font-size: 0.97rem;
          line-height: 1.75;
          margin-bottom: 40px;
        }
        .bk-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 32px;
          background: transparent;
          border: 1px solid #252525;
          border-radius: 14px;
          color: #fff;
          font-size: 0.9rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          align-self: flex-start;
        }
        .bk-btn:hover {
          background: var(--c);
          border-color: var(--c);
          color: #000;
          transform: translateX(6px);
          box-shadow: -6px 0 30px rgba(var(--rgb), 0.3);
        }
        .bk-btn svg {
          transition: transform 0.3s;
        }
        .bk-btn:hover svg {
          transform: translateX(4px);
        }

        /* Waitlist */
        .bk-waitlist {
          position: relative;
          margin-top: 20px;
          border-radius: 32px;
          background: #080808;
          border: 1px solid #1a1a1a;
          padding: 72px 80px;
          text-align: center;
          overflow: hidden;
        }
        .wl-orbs {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .wl-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
        }
        .wl-orb-1 {
          width: 400px; height: 400px;
          background: rgba(207,157,69,0.08);
          top: -100px; left: -100px;
        }
        .wl-orb-2 {
          width: 300px; height: 300px;
          background: rgba(224,92,92,0.06);
          bottom: -80px; right: -60px;
        }
        .wl-inner {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .wl-eyebrow {
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #cf9d45;
          background: rgba(207,157,69,0.1);
          border: 1px solid rgba(207,157,69,0.2);
          padding: 6px 18px;
          border-radius: 99px;
        }
        .wl-title {
          font-family: var(--font-headline);
          font-size: 3rem;
          font-weight: 900;
          color: #fff;
          margin: 0;
        }
        .wl-sub {
          color: #6b7280;
          font-size: 1.05rem;
          max-width: 480px;
        }
        .wl-btn {
          margin-top: 8px;
          padding: 18px 52px;
          background: linear-gradient(135deg, #cf9d45, #e6b75c);
          color: #000;
          border: none;
          border-radius: 14px;
          font-weight: 900;
          font-size: 1.05rem;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 0 40px rgba(207,157,69,0.25);
        }
        .wl-btn:hover {
          transform: scale(1.04);
          box-shadow: 0 0 60px rgba(207,157,69,0.4);
        }

        /* Responsive */
        @media (max-width: 900px) {
          .bk-card {
            flex-direction: column;
          }
          .bk-visual {
            flex: none;
            height: 360px;
            border-right: none;
            border-bottom: 1px solid #1a1a1a;
          }
          .bk-content {
            padding: 40px 32px;
          }
          .bk-title {
            font-size: 1.8rem;
          }
          .bk-waitlist {
            padding: 48px 28px;
          }
          .wl-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </main>
  );
}
