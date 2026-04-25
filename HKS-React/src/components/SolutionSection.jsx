const steps = [
  {
    number: '01',
    title: 'STEP-BY-STEP SYSTEM',
    subtitle: 'No Confusion, No Overwhelm',
    desc: 'Main tumhe ek clear, step-by-step system deta hoon. Kya karna hai, kab karna hai — sab clearly explain karta hoon.',
    icon: 'fas fa-list-ol',
  },
  {
    number: '02',
    title: 'PRACTICAL LEARNING',
    subtitle: 'Not Theory — Real Execution',
    desc: 'Jo main sikhata hoon wo sirf theory nahi hai. Yeh actual campaigns, real results, aur live examples se seekha hua knowledge hai.',
    icon: 'fas fa-tools',
    iconColor: '#FFD700',
  },
  {
    number: '03',
    title: 'SIMPLE LANGUAGE',
    subtitle: 'Easy to Understand',
    desc: 'Main simple Hinglish mein explain karta hoon. Koi complicated jargon nahi — aise samjhata hoon jaise ek dost samjhata hai.',
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
            Simple words — I help you stop wasting money on ads and start getting real customers. Step by step.
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

        {/* What Will You Learn — redesigned */}
        <div style={{
          background: '#0f0f0f',
          border: '1px solid #2a2a2a',
          borderRadius: '20px',
          overflow: 'hidden',
          marginTop: '48px',
        }}>
          {/* Header bar */}
          <div style={{
            background: 'linear-gradient(135deg, #cf9d45 0%, #e8b85a 100%)',
            padding: '20px 40px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
          }}>
            <i className="fas fa-graduation-cap" style={{ color: '#000', fontSize: '1.4rem' }} />
            <div>
              <p style={{ color: '#000', fontWeight: 900, fontSize: '1.15rem', margin: 0, fontFamily: 'var(--font-headline)' }}>
                What Will You Actually Learn?
              </p>
              <p style={{ color: 'rgba(0,0,0,0.65)', fontSize: '0.8rem', margin: 0 }}>
                6 core skills that take you from confusion to confident results
              </p>
            </div>
          </div>

          {/* Outcome Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1px',
            background: '#222',
          }}>
            {outcomes.map((o, i) => (
              <div
                key={i}
                style={{
                  background: '#111',
                  padding: '28px 32px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#161616'}
                onMouseLeave={e => e.currentTarget.style.background = '#111'}
              >
                {/* Icon circle */}
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: 'rgba(207,157,69,0.12)',
                  border: '1px solid rgba(207,157,69,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <i className={o.icon} style={{ color: '#cf9d45', fontSize: '1rem' }} />
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
    </section>
  );
}
