const results = [
  {
    icon: 'fas fa-star',
    title: 'Got Their First Sale',
    problem: 'Business tha, customers nahi the. Ads chalate the but koi nahi aata tha.',
    solution: 'Step-by-step Meta Ads system + proper targeting + follow-up process.',
    resultNumber: '1st Sale',
    resultSub: 'within 15 days of joining',
  },
  {
    icon: 'fas fa-phone-alt',
    title: 'Daily Enquiries Started',
    problem: 'Phone never rang with customer enquiries. Relied only on word-of-mouth.',
    solution: 'Low-budget ad system with proper lead magnet and WhatsApp follow-up.',
    resultNumber: '10–20 enquiries',
    resultSub: 'per day with small budget',
  },
  {
    icon: 'fas fa-award',
    title: 'Built Their Own Brand',
    problem: 'No online presence. No trust. Customers didn\'t know who they were.',
    solution: 'Content strategy + Meta Ads brand building + consistent digital presence.',
    resultNumber: 'Brand Authority',
    resultSub: 'built from scratch',
  },
];

const testimonials = [
  {
    initials: 'RK',
    name: 'Ramesh Kale',
    role: 'Small Business Owner, Pune',
    quote:
      '"Mujhe lagta tha ads karna bahut mushkil hai. Kiran sir ne itna simple samjhaya ki maine khud apna pehla ad chalaya aur 3 din mein customers aane lage."',
  },
  {
    initials: 'SP',
    name: 'Sunita Patil',
    role: 'Boutique Owner, Nashik',
    quote:
      '"Pehle sirf Instagram pe post karte the, kuch nahi hota tha. Kiran sir ka system follow kiya — aaj roz 5-7 enquiries aati hain. Business badh raha hai!"',
  },
  {
    initials: 'MJ',
    name: 'Mahesh Jadhav',
    role: 'Coaching Institute, Aurangabad',
    quote:
      '"30,000 log already unka system use kar rahe hain. Maine socha try karta hoon. 45 din mein mera batch full ho gaya. Simple aur effective system hai."',
  },
];

export default function ProofSection() {
  return (
    <section className="section-wrapper proof-section fade-in-section">
      <div className="section-inner">
        <div style={{ textAlign: 'center' }}>
          <span className="section-label">Real Results</span>
          <h2 className="section-h2">30,000+ People Have Already Got Results.</h2>
          <p className="section-sub">Small steps → Big growth. Yahi hamara promise hai.</p>
        </div>

        {/* Case Studies */}
        <div className="case-grid">
          {results.map((cs, i) => (
            <div className="case-card" key={i}>
              <div className="case-icon">
                <i className={cs.icon} />
              </div>
              <p className="case-title">{cs.title}</p>
              <span className="case-micro-label">The Problem</span>
              <p className="case-problem">{cs.problem}</p>
              <span className="case-micro-label">What We Did</span>
              <p className="case-solution">{cs.solution}</p>
              <div className="case-result">
                <span className="result-label">Result</span>
                <p className="result-number">{cs.resultNumber}</p>
                <span className="result-sub">{cs.resultSub}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <i className="fas fa-quote-right quote-bg" />
              <div className="stars">
                {[...Array(5)].map((_, si) => (
                  <i key={si} className="fas fa-star" />
                ))}
              </div>
              <blockquote>{t.quote}</blockquote>
              <div className="author">
                <div className="author-initials">{t.initials}</div>
                <div>
                  <p className="author-name">{t.name}</p>
                  <p className="author-role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
