import { useState } from 'react';

const faqs = [
  {
    q: "I'm a small business owner—will this system work for me?",
    a: "Absolutely! I specialize in working with small and medium-sized business owners. This system was specifically designed for those who run ads on a small budget but aren't seeing customers yet. Over 30,000 people are already benefiting from it.",
  },
  {
    q: "I know nothing about ads—is it possible for me to learn?",
    a: "Yes, 100%. I teach everything from the absolute basics. I explain things in simple language, step-by-step, with no technical knowledge required. If you can use a phone, you can master this system.",
  },
  {
    q: "What kind of budget do I need to start running ads?",
    a: "I focus on low-budget advertising. You can start with as little as ₹200–₹500 per day. I'll teach you how to achieve maximum results even on a tight budget and how to scale once your business grows.",
  },
  {
    q: "Can I speak directly with Kiran?",
    a: "Yes! Book a free Clarity Call. I will personally speak with you to understand your situation and provide specific guidance for your business. There's zero sales pitch—just genuine help.",
  },
  {
    q: "What's the difference between Meta Ads and simply boosting a post?",
    a: "Boosting a post is often a waste of money. With Meta Ads, you target the right people in the right place at the right time. I'll teach you how to use Meta Ads Manager properly to generate real leads, not just likes.",
  },
  {
    q: "How long will it take to see actual results?",
    a: "Those who follow my system diligently usually start seeing results within 15–30 days. Some even get their first customer within the first week. The key is consistency.",
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
          <h2 className="section-h2" style={{ color: '#0a0a0a' }}>Simple Answers. No Complicated Jargon.</h2>
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
      <style>{`
        .faq-item {
          transition: all 0.4s ease;
          border-left: 2px solid transparent;
        }
        .faq-item:hover {
          background: rgba(207,157,69,0.03);
          border-left: 2px solid #cf9d45;
          transform: translateX(5px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        .faq-item.open {
          border-left: 4px solid #cf9d45;
          background: rgba(207,157,69,0.05);
          box-shadow: 0 10px 30px rgba(0,0,0,0.4);
        }
        .faq-toggle {
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .faq-item:hover .faq-toggle {
          transform: scale(1.1);
          color: #cf9d45;
        }
        .faq-item.open .faq-toggle {
          transform: rotate(45deg) scale(1.1);
          color: #cf9d45;
        }
      `}</style>
    </section>
  );
}
