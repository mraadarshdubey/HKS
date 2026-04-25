const problems = [
  {
    title: 'Running ads but no enquiry',
    desc: 'You are spending money on ads but your phone is not ringing. Leads are not coming at all.',
    icon: 'fas fa-times-circle',
  },
  {
    title: 'Boosting posts but wasting money',
    desc: 'Boost button pe click karte ho, paise jaate hain, but koi result nahi aata. Sirf balance khatam hota hai.',
    icon: 'fas fa-times-circle',
  },
  {
    title: 'Posting content but no response',
    desc: 'Roz content daalte ho Instagram aur Facebook pe — but engagement zero, leads zero, sales zero.',
    icon: 'fas fa-times-circle',
  },
  {
    title: 'Getting leads but no conversion',
    desc: 'Kuch leads aate hain but wo customer nahi bante. Follow-up karo toh response nahi milta.',
    icon: 'fas fa-times-circle',
  },
  {
    title: 'Don\'t know what\'s actually working',
    desc: 'Paise kharch ho rahe hain ads pe — but kaunsa ad kaam kar raha hai, kaunsa nahi, kuch pata nahi.',
    icon: 'fas fa-times-circle',
  },
  {
    title: 'Tried everything but nothing sticks',
    desc: 'YouTube dekha, courses kiye, agencies hire ki — but koi permanent result nahi mila. Business wahi ka wahi.',
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
            Yeh sab problems sirf isliye hain kyunki ek proper system nahi hai. Let's fix that.
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
