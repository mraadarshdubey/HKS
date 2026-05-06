const problems = [
  {
    title: 'Ads chal rahe hain par phone silent hai',
    desc: 'Paise har roz kat rahe hain, dashboard pe "Reach" bhi dikh rahi hai, lekin enquiries zero hain.',
    icon: 'fas fa-times-circle',
  },
  {
    title: 'Sirf "Boost" button pe bharosa',
    desc: 'Bina soche samjhe Boost button dabate ho, likes toh mil jaate hain par dhanda nahi aata.',
    icon: 'fas fa-times-circle',
  },
  {
    title: 'Roz content daalne ki thakaan',
    desc: 'Din bhar reel aur post banane mein nikal jata hai, par end of the day na koi lead hai na koi sale.',
    icon: 'fas fa-times-circle',
  },
  {
    title: 'Leads toh aayi, par deal nahi hui',
    desc: 'Log poonchte hain "Price kya hai?" aur uske baad gayab ho jaate hain. System hi nahi hai convert karne ka.',
    icon: 'fas fa-times-circle',
  },
  {
    title: 'Pata hi nahi ki galti kahan ho rahi hai',
    desc: 'Andhere mein teer chala rahe ho. Kaunsi ad result de rahi hai aur kaunsi paisa duba rahi hai, kuch clear nahi hai.',
    icon: 'fas fa-times-circle',
  },
  {
    title: 'Courses aur Agencies se umeed khatam',
    desc: 'Sab try kar liya — YouTube video, saste courses, mehengi agencies. Result wahi ka wahi zero.',
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
