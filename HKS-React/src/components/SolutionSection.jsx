const steps = [
  {
    number: '01',
    title: 'ATTRACT',
    subtitle: 'Qualified Leads, Not Just Volume',
    desc: 'AI-powered targeting that finds students actively looking for courses like yours. No wasted spend.',
    icon: 'fas fa-bullseye',
  },
  {
    number: '02',
    title: 'CONVERT',
    subtitle: 'Automated Follow-Up That Never Sleeps',
    desc: 'Instant WhatsApp + email sequences. Lead scoring. Counsellor handoff at the perfect moment.',
    icon: 'fas fa-funnel-dollar',
    iconColor: '#FFD700',
  },
  {
    number: '03',
    title: 'CLOSE',
    subtitle: 'Admissions, Not Just Conversations',
    desc: "Conversion-trained scripts, objection handling guides, and live dashboards so you know what's working.",
    icon: 'fas fa-handshake',
  },
];

export default function SolutionSection() {
  return (
    <section className="section-wrapper solution-section fade-in-section">
      <div className="section-inner">
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto' }}>
          <span className="section-label">The System</span>
          <h2 className="section-h2" style={{ color: '#0a0a0a' }}>
            The Admission System.<br />Built ONLY for Coaching Institutes.
          </h2>
          <p className="section-sub">We don't just run ads. We build the complete pipeline from inquiry to admission.</p>
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
          <h3 className="diff-heading">This is NOT what a regular agency does.</h3>
          <div className="diff-body">
            <p>
              Most agencies deliver leads and walk away. We own the full pipeline — from the first ad impression to
              the fee payment receipt.{' '}
              <strong>We win when you win.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
