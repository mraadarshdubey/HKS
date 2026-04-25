const caseStudies = [
  {
    icon: 'fas fa-graduation-cap',
    title: 'IIT JEE Coaching — Delhi NCR',
    problem: '500 leads/month. Less than 30 admissions.',
    solution: 'Complete WhatsApp funnel with automated nurture + counsellor scripts.',
    resultNumber: '127 admissions',
    resultSub: 'in 60 days',
  },
  {
    icon: 'fas fa-chart-line',
    title: 'UPSC Coaching — Lucknow',
    problem: 'High ad spend, low ROI. Leads not answering calls.',
    solution: 'Redesigned the lead magnet + created a 7-day automated follow-up sequence.',
    resultNumber: '3.2x improved',
    resultSub: 'conversion rate',
  },
  {
    icon: 'fas fa-rupee-sign',
    title: 'Skill Development Institute — Pune',
    problem: 'No online presence. Relied only on referrals.',
    solution: 'AI-powered landing pages + complete Google & Meta funnel from scratch.',
    resultNumber: '₹8.4 Lakh',
    resultSub: 'collected in first batch',
  },
];

const testimonials = [
  {
    initials: 'RS',
    name: 'Rajesh Sharma',
    role: 'Director, Apex IIT Academy',
    quote:
      '"I spent 2 years with agencies who just sent reports. Adarsh sent admissions. In 45 days we crossed our previous best month."',
  },
  {
    initials: 'PM',
    name: 'Priya Mehta',
    role: 'Founder, Prism Coaching',
    quote:
      '"The WhatsApp follow-up system alone was worth everything. Our counsellors now talk to warm leads only — not cold ones."',
  },
  {
    initials: 'VN',
    name: 'Vikram Nair',
    role: 'CEO, Target UPSC Institute',
    quote: '"Honest, direct, and result-focused. He told me exactly what wasn\'t working and fixed it. No BS."',
  },
];

export default function ProofSection() {
  return (
    <section className="section-wrapper proof-section fade-in-section">
      <div className="section-inner">
        <div style={{ textAlign: 'center' }}>
          <span className="section-label">Results</span>
          <h2 className="section-h2">Real Institutes. Real Numbers.</h2>
          <p className="section-sub">We let the results do the talking.</p>
        </div>

        {/* Case Studies */}
        <div className="case-grid">
          {caseStudies.map((cs, i) => (
            <div className="case-card" key={i}>
              <div className="case-icon">
                <i className={cs.icon} />
              </div>
              <p className="case-title">{cs.title}</p>
              <span className="case-micro-label">The Problem</span>
              <p className="case-problem">{cs.problem}</p>
              <span className="case-micro-label">What We Built</span>
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
