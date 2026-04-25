import { useState } from 'react';

const faqs = [
  {
    q: 'Main ek chota business owner hoon — kya yeh mujhe kaam karega?',
    a: "Haan, bilkul! Main specifically chote aur medium business owners ke liye kaam karta hoon. Jo bhi small budget mein ads chalate hain aur customers nahi aa rahe — unke liye hi yeh system banaya gaya hai. 30,000+ log already use kar rahe hain.",
  },
  {
    q: 'Mujhe ads ke baare mein kuch nahi pata — kya main seekh sakta hoon?',
    a: "Haan, 100%. Main sab kuch ekdam basic se sikhata hoon. Simple Hinglish mein, step-by-step. Koi technical knowledge ki zaroorat nahi. Agar aap phone use kar sakte hain, toh aap yeh seekh sakte hain.",
  },
  {
    q: 'Kitna budget chahiye ads chalane ke liye?',
    a: "Main low-budget ads pe focus karta hoon. ₹200–₹500 per day se bhi shuruat ho sakti hai. Main tumhe sikhata hoon ki chhote budget mein bhi maximum result kaise milega. Budget bada hone ke baad kaise scale karna hai — yeh bhi sikhata hoon.",
  },
  {
    q: 'Kiran sir se seedha baat ho sakti hai?',
    a: "Haan! Free Clarity Call book karo. Main personally tumse baat karoonga, tumhara situation samjhoonga, aur bataoonga ki aapke business ke liye exactly kya karna chahiye. Zero sales pitch — sirf real help.",
  },
  {
    q: 'Meta Ads aur simple post boosting mein kya fark hai?',
    a: "Post boost karna paisa waste karna hai. Meta Ads mein aap target karte ho — sahi log, sahi jagah, sahi time pe. Main tumhe proper Meta Ads Manager use karna sikhata hoon jahan se real leads aate hain, not just likes.",
  },
  {
    q: 'Results kitne time mein dikhenge?',
    a: "Jo log mera system properly follow karte hain, unhe 15–30 din mein pehle results dikhne lagte hain. Kuch logo ko 1 hafte mein hi pehla customer milta hai. Consistency sabse important cheez hai.",
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
    </section>
  );
}
