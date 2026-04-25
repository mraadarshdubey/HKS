const myths = [
  {
    myth: 'More leads = more admissions',
    reality: 'Without a follow-up system, 80% of leads go cold in 48 hours.',
    bold: '80% of leads go cold',
    icon: 'fas fa-times-circle',
  },
  {
    myth: 'A good website is enough',
    reality: "A website without a funnel is a digital brochure. It informs. It doesn't convert.",
    bold: "It doesn't convert.",
    icon: 'fas fa-times-circle',
  },
  {
    myth: 'The problem is your ad budget',
    reality: "The real problem is what happens AFTER the inquiry lands. There's no system.",
    bold: "There's no system.",
    icon: 'fas fa-times-circle',
  },
];

export default function ProblemSection() {
  return (
    <section className="section-wrapper problem-section fade-in-section">
      <div className="section-inner">
        <div style={{ maxWidth: '720px' }}>
          <span className="section-label">Why Most Institutes Fail</span>
          <h2 className="section-h2">You're Getting Leads. But Admissions Aren't Growing.</h2>
          <p className="section-sub">Here's the brutal truth most agencies won't tell you:</p>
        </div>

        <div className="myth-grid">
          {myths.map((m, i) => (
            <div className="myth-card" key={i}>
              <div className="myth-icon">
                <i className={m.icon} style={{ filter: 'drop-shadow(0 0 12px rgba(255,46,46,0.4))' }} />
              </div>
              <span className="label-myth">The Myth</span>
              <p className="myth-title">{m.myth}</p>
              <div className="divider" />
              <span className="label-reality">The Reality</span>
              <p className="reality-text">
                {m.reality.replace(m.bold, '').split(m.bold)[0]}
                <strong>{m.bold}</strong>
                {m.reality.split(m.bold)[1] ?? ''}
              </p>
            </div>
          ))}
        </div>

        <div className="problem-closing">
          <p>
            Sound familiar? You're not the problem.{' '}
            <span>The missing system is. That's exactly what we fix. ↓</span>
          </p>
        </div>
      </div>
    </section>
  );
}
