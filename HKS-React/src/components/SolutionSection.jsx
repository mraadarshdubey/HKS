import { Link } from 'react-router-dom';

const steps = [
  {
    number: '01',
    title: 'STEP-BY-STEP SYSTEM',
    subtitle: 'No Confusion, No Overwhelm',
    desc: "I provide you with a clear, step-by-step framework. I'll explain exactly what to do and when to do it—no guesswork involved.",
    icon: 'fas fa-list-ol',
  },
  {
    number: '02',
    title: 'PRACTICAL LEARNING',
    subtitle: 'Not Theory — Real Execution',
    desc: "What I teach isn't just theory. It's practical knowledge gained from managing actual campaigns and achieving real-world results.",
    icon: 'fas fa-tools',
    iconColor: '#FFD700',
  },
  {
    number: '03',
    title: 'SIMPLE LANGUAGE',
    subtitle: 'Easy to Understand',
    desc: "I explain everything in simple, conversational language. No complicated jargon—just clear guidance, like a friend would give.",
    icon: 'fas fa-comments',
  },
];

const outcomes = [
  {
    icon: 'fas fa-bullseye',
    title: 'Meta Ads Properly',
    text: 'How to set up and run Meta Ads the right way — from account setup to getting real results.',
  },
  {
    icon: 'fas fa-rupee-sign',
    title: 'Low Budget Leads',
    text: 'How to get quality leads even with a small daily ad budget of ₹200–500.',
  },
  {
    icon: 'fas fa-chart-line',
    title: 'Ads That Actually Work',
    text: 'Learn what kind of creatives, copy, and targeting actually convert into customers.',
  },
  {
    icon: 'fas fa-robot',
    title: 'AI for Faster Ads',
    text: 'Use AI tools to create ads 10x faster and test more ideas in less time.',
  },
  {
    icon: 'fas fa-handshake',
    title: 'Convert Leads to Customers',
    text: 'The follow-up system that turns interested leads into paying customers every time.',
  },
  {
    icon: 'fas fa-map-signs',
    title: 'Clear Direction Always',
    text: 'Always know what your next step is — no confusion, no overwhelm, no wasted effort.',
  },
  {
    icon: 'fas fa-whatsapp',
    title: 'WhatsApp Follow-Up System',
    text: 'Set up a WhatsApp follow-up process so no lead ever goes cold or unanswered again.',
  },
  {
    icon: 'fas fa-star',
    title: 'Build Your Own Brand',
    text: 'How to build trust and authority online so customers come to you — not your competitors.',
  },
];

export default function SolutionSection() {
  return (
    <section className="section-wrapper solution-section fade-in-section">
      <div className="section-inner">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto' }}>
          <span className="section-label">What I Give You</span>
          <h2 className="section-h2" style={{ color: '#0a0a0a' }}>
            A Simple System That Takes You<br />From Ads to Real Customers.
          </h2>
          <p className="section-sub">
            Simple words — I help you stop wasting money on Meta Ads and start getting real customers with tailored <Link to="/business-development" style={{ color: '#0a0a0a', textDecoration: 'underline' }}>digital marketing services for coaching institutes</Link>. Step by step.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="steps-grid">
          {steps.map((step, i) => (
            <div className="step-card" key={i}>
              <div className="step-icon-wrap">
                <i className={step.icon} style={step.iconColor ? { color: step.iconColor } : {}} />
              </div>
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p className="step-subtitle">{step.subtitle}</p>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>

        {/* What Will You Learn — Highly Animated */}
        <div className="learn-container">
          {/* Header bar */}
          <div className="learn-header">
            <i className="fas fa-graduation-cap" style={{ color: '#000', fontSize: '1.4rem', zIndex: 2 }} />
            <div style={{ zIndex: 2 }}>
              <p style={{ color: '#000', fontWeight: 900, fontSize: '1.15rem', margin: 0, fontFamily: 'var(--font-headline)' }}>
                What Will You Actually Learn?
              </p>
              <p style={{ color: 'rgba(0,0,0,0.65)', fontSize: '0.8rem', margin: 0 }}>
                6 core skills that take you from confusion to confident results
              </p>
            </div>
          </div>

          {/* Outcome Grid */}
          <div className="learn-grid">
            {outcomes.map((o, i) => (
              <div className="learn-card" key={i}>
                {/* Icon circle */}
                <div className="learn-icon-wrap">
                  <i className={o.icon} style={{ color: '#cf9d45', fontSize: '1rem', transition: 'color 0.3s' }} />
                </div>

                {/* Text */}
                <div>
                  <p style={{
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    marginBottom: '4px',
                    fontFamily: 'var(--font-headline)',
                  }}>
                    {o.title}
                  </p>
                  <p style={{
                    color: '#9ca3af',
                    fontSize: '0.85rem',
                    lineHeight: 1.6,
                    margin: 0,
                  }}>
                    {o.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer info bar */}
          <div style={{
            padding: '18px 40px',
            background: '#0a0a0a',
            borderTop: '1px solid #222',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}>
            <i className="fas fa-check-circle" style={{ color: '#cf9d45' }} />
            <p style={{ color: '#6b7280', fontSize: '0.85rem', margin: 0 }}>
              Simple words. Real execution. Zero theory overload. — <span style={{ color: '#cf9d45' }}>Use the button in the top navbar to book your free call.</span>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .learn-container {
          background: #0f0f0f;
          border: 1px solid #2a2a2a;
          border-radius: 20px;
          overflow: hidden;
          margin-top: 48px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
          position: relative;
        }

        .learn-header {
          background: linear-gradient(135deg, #cf9d45 0%, #e8b85a 100%);
          padding: 20px 40px;
          display: flex;
          align-items: center;
          gap: 14px;
          position: relative;
          overflow: hidden;
        }

        .learn-header::after {
          content: '';
          position: absolute;
          top: 0; left: -150%; width: 50%; height: 100%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.6), transparent);
          transform: skewX(-25deg);
          animation: gold-shimmer 4s infinite cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes gold-shimmer {
          0% { left: -150%; }
          100% { left: 250%; }
        }

        .learn-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1px;
          background: #222;
        }

        .learn-card {
          background: #111;
          padding: 28px 32px;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        .learn-card::before {
          content: '';
          position: absolute;
          top: -50%; left: -50%;
          width: 200%; height: 200%;
          background: radial-gradient(circle, rgba(207,157,69,0.15) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.5s ease;
          z-index: -1;
          pointer-events: none;
        }

        .learn-card:hover {
          background: #181818;
          transform: scale(1.02);
          box-shadow: 0 15px 30px rgba(0,0,0,0.6);
          z-index: 10;
          border-radius: 12px;
          border: 1px solid rgba(207,157,69,0.3);
        }

        .learn-card:hover::before {
          opacity: 1;
        }

        .learn-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(207,157,69,0.12);
          border: 1px solid rgba(207,157,69,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .learn-card:hover .learn-icon-wrap {
          background: #cf9d45;
          box-shadow: 0 0 20px rgba(207,157,69,0.7);
          transform: scale(1.15) rotate(10deg);
        }

        .learn-card:hover .learn-icon-wrap i {
          color: #000 !important;
        }
      `}</style>
    </section>
  );
}
