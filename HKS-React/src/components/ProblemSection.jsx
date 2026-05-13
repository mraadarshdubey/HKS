const problems = [
  {
    title: 'Ads are running, but the phone remains silent',
    desc: 'Money is spent every day, and your dashboard shows "Reach," yet you\'re getting zero actual inquiries.',
    icon: 'fas fa-times-circle',
  },
  {
    title: 'Relying solely on the "Boost" button',
    desc: 'Clicking the Boost button without a strategy might get you likes, but it doesn\'t bring in real business.',
    icon: 'fas fa-times-circle',
  },
  {
    title: 'The exhaustion of posting content daily',
    desc: 'You spend your entire day creating reels and posts, only to end up with no leads or sales at the end of the day.',
    icon: 'fas fa-times-circle',
  },
  {
    title: 'Leads arrived, but no deals were closed',
    desc: 'People ask "What\'s the price?" and then vanish. You lack a proper system to convert interest into sales.',
    icon: 'fas fa-times-circle',
  },
  {
    title: 'Unsure of where things are going wrong',
    desc: "It feels like shooting in the dark. It's unclear which ads are performing and which ones are just wasting your budget.",
    icon: 'fas fa-times-circle',
  },
  {
    title: 'Lost hope in courses and agencies',
    desc: "You've tried everything—YouTube tutorials, cheap courses, and expensive agencies. Yet, the results remain stuck at zero.",
    icon: 'fas fa-times-circle',
  },
];

export default function ProblemSection() {
  return (
    <section className="section-wrapper problem-section fade-in-section">
      <div className="section-inner">
        <div style={{ maxWidth: '720px' }}>
          <span className="section-label">Are You Facing This?</span>
          <h2 className="section-h2">You Are Not Doing It Wrong… You Just Don't Have a Clear System.</h2>
          <p className="section-sub">
            These problems persist only because you lack a proper system. Let's fix that together.
          </p>
        </div>

        <div className="myth-grid">
          {problems.map((p, i) => (
            <div className="myth-card" key={i}>
              <div className="myth-icon">
                <i className={p.icon} style={{ filter: 'drop-shadow(0 0 12px rgba(255,46,46,0.4))' }} />
              </div>
              <p className="myth-title">{p.title}</p>
              <div className="divider" />
              <p className="reality-text">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="problem-closing">
          <p>
            Truth is simple: You are not doing it wrong…{' '}
            <span>👉 You just don't have a clear system. That's exactly what I fix. ↓</span>
          </p>
        </div>
      </div>
    </section>
  );
}
