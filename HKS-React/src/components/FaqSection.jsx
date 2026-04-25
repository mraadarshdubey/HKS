import { useState } from 'react';

const faqs = [
  {
    q: 'Will this work for a small coaching institute?',
    a: "Yes — in fact, small institutes benefit most. You're more flexible, you can move fast, and there's more room to grow. We've built systems for institutes with 3-person teams and scaled them.",
  },
  {
    q: 'How fast will I see results?',
    a: 'Most clients see a measurable improvement in inquiry-to-admission conversion within 30–45 days of the system going live. The full system takes 60–90 days to mature.',
  },
  {
    q: "What's the investment?",
    a: "We'll discuss this on the free call based on your current setup and goals. There's no fixed package — we don't believe in one-size-fits-all pricing. We design around your ROI.",
  },
  {
    q: 'Is this just another digital marketing agency?',
    a: 'No. Agencies deliver leads. We deliver admissions. We build the entire pipeline — leads, follow-up, conversion, tracking — and measure success only by final admissions, not clicks.',
  },
  {
    q: 'What if I already have an in-house team?',
    a: "Even better. We work with your team, not against them. We bring the system, the tools, and the strategy. Your team executes with more clarity and less guesswork.",
  },
  {
    q: 'Do you guarantee results?',
    a: "We guarantee our work and our process. If the system is implemented correctly and you don't see improvement, we'll keep working — no extra charge — until you do.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="section-wrapper faq-section fade-in-section">
      <div className="section-inner" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '0' }}>
          <span className="section-label">Got Questions?</span>
          <h2 className="section-h2" style={{ color: '#0a0a0a' }}>Straight Answers. No Vague Replies.</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div className={`faq-item${openIndex === i ? ' open' : ''}`} key={i}>
              <div className="faq-question" onClick={() => toggle(i)} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && toggle(i)}>
                <h4>{faq.q}</h4>
                <div className="faq-toggle">
                  <i className="fas fa-plus" />
                </div>
              </div>
              <div className="faq-answer">{faq.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
