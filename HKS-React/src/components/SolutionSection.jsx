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
  { icon: 'fas fa-phone-alt', text: 'More enquiries from the right customers' },
  { icon: 'fas fa-handshake', text: 'Better conversion — leads become paying customers' },
  { icon: 'fas fa-chart-line', text: 'Consistent business growth month after month' },
  { icon: 'fas fa-robot', text: 'Use AI to make ads faster and smarter' },
];

export default function SolutionSection() {
  return (
    <section className="section-wrapper solution-section fade-in-section">
      <div className="section-inner">
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto' }}>
          <span className="section-label">What I Give You</span>
          <h2 className="section-h2" style={{ color: '#0a0a0a' }}>
            A Simple System That Takes You From Ads to Customers.
          </h2>
          <p className="section-sub">
            Simple words — I help you go from running ads to getting real customers. Step by step.
          </p>
        </div>

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

        <div className="differentiator-box">
          <h3 className="diff-heading">What Will You Actually Learn?</h3>
          <div className="diff-body" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', marginTop: '16px' }}>
            {outcomes.map((o, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#0a0a0a' }}>
                <i className={o.icon} style={{ color: '#cf9d45', fontSize: '1rem' }} />
                <span>{o.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
