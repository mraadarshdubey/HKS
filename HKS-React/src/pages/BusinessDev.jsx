import React from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';

const services = [
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>,
    title: '1-on-1 Free Clarity Call',
    desc: 'Book a free 1-on-1 call with Kiran. Apni situation share karo. Main personally bataoonga ki exactly kya karna hai — step-by-step. No sales pitch, pure guidance.',
    price: 'FREE',
    spots: 'Limited Spots Daily',
    color: '#cf9d45',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
    title: 'Meta Ads Training Program',
    desc: 'A complete step-by-step Meta Ads training. Sab kuch sikhoge — account setup se lekar lead generation tak. Simple language mein. Real campaigns. Real results.',
    price: 'Enquire Now',
    spots: 'Next Batch Starting Soon',
    color: '#ff2e2e',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>,
    title: 'Done-For-You Ad Management',
    desc: 'Aapka business hai, hamara kaam hai ads chalana. Main aur meri team tumhare Meta Ads end-to-end manage karenge — targeting, copy, testing, optimization sab.',
    price: 'Custom Pricing',
    spots: 'Enquire Now',
    color: '#cf9d45',
  },
];

const results = [
  { metric: '50,000+', label: 'People Trained' },
  { metric: '30,000+', label: 'Using the System' },
  { metric: 'Rs.1Cr+', label: 'Real Ad Spend' },
  { metric: '30 Days', label: 'To First Results (Avg.)' },
];

const faqs = [
  { q: 'Main ek beginner hoon — kya yeh mujhe kaam karega?', a: 'Haan, 100%. Main specifically beginners ke liye simple language mein sikhata hoon. Koi bhi technical knowledge zaroorat nahi. Agar phone chalana aata hai, toh yeh seekh sakte hain.' },
  { q: 'Kitne budget se shuruat ho sakti hai?', a: 'Rs.200-500 per day se bhi shuruat ho sakti hai. Main tumhe low-budget mein maximum results kaise milein yeh sikhata hoon. Budget badhane ka idea bhi deta hoon.' },
  { q: 'Results kitne time mein aate hain?', a: 'Jo log properly system follow karte hain unhe 15-30 din mein pehle results dikhte hain. Kuch logo ko 1 hafte mein pehla customer milta hai. Consistency key hai.' },
];

export default function BusinessDev() {
  return (
    <div style={{ background: 'transparent', minHeight: '100vh', color: '#d1d5db' }}>
      <SEO
        title="Business Development — Growth Strategies by Kiran Hajare"
        description="Work with Kiran Hajare — free clarity call, step-by-step training, or done-for-you Meta ads management. Data-driven growth systems for coaching institutes."
        path="/business-development"
      />
      <PageHeader
        title="Work With Kiran"
        subtitle="Free clarity call, step-by-step training, or done-for-you ad management — choose your path."
        label="Get Started"
      />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px 100px' }}>

        {/* Results Bar */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 1, background: '#1a1a1a', borderRadius: 16,
          overflow: 'hidden', marginBottom: 80, border: '1px solid #222'
        }} className="results-bar">
          {results.map((r, i) => (
            <div key={i} style={{
              background: '#111', padding: '32px 20px', textAlign: 'center',
              borderRight: i < 3 ? '1px solid #1a1a1a' : 'none'
            }}>
              <div style={{ fontFamily: 'var(--font-headline)', fontSize: 'clamp(1.5rem,3vw,2.5rem)', fontWeight: 900, color: '#cf9d45' }}>{r.metric}</div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 6 }}>{r.label}</div>
            </div>
          ))}
        </div>

        {/* Services */}
        <div style={{ marginBottom: 80 }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ display: 'inline-block', background: 'rgba(255,46,46,0.1)', border: '1px solid rgba(255,46,46,0.3)', color: '#ff2e2e', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '4px 16px', borderRadius: 999, marginBottom: 16 }}>Work With Kiran</span>
            <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 900, color: '#fff' }}>Choose Your Growth Path</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>
            {services.map((s, i) => (
              <div key={i} style={{
                background: '#111', border: '1px solid #1e1e1e', borderRadius: 20,
                padding: '36px 32px', display: 'flex', flexDirection: 'column',
                position: 'relative', overflow: 'hidden',
                transition: 'transform 0.3s, border-color 0.3s, box-shadow 0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = s.color + '44'; e.currentTarget.style.boxShadow = `0 20px 48px rgba(0,0,0,0.4)`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = '#1e1e1e'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(to right, ${s.color}, transparent)` }} />
                <div style={{ fontSize: '2.5rem', marginBottom: 20 }}>{s.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.3rem', fontWeight: 900, color: '#fff', marginBottom: 14 }}>{s.title}</h3>
                <p style={{ color: '#9ca3af', lineHeight: 1.75, flex: 1, marginBottom: 24 }}>{s.desc}</p>
                <div style={{ borderTop: '1px solid #222', paddingTop: 20 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                    <span style={{ fontFamily: 'var(--font-headline)', fontSize: '1.3rem', fontWeight: 900, color: s.color }}>{s.price}</span>
                    <span style={{
                      fontSize: '0.7rem', fontWeight: 700, padding: '4px 12px', borderRadius: 999,
                      background: s.color + '18', color: s.color, border: `1px solid ${s.color}44`
                    }}>{s.spots}</span>
                  </div>
                  <button style={{
                    width: '100%', padding: '12px 24px',
                    background: s.color, color: s.color === '#cf9d45' ? '#000' : '#fff',
                    border: 'none', borderRadius: 8, fontWeight: 800,
                    fontSize: '0.9rem', cursor: 'pointer', transition: 'opacity 0.2s'
                  }}>Apply Now →</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ marginBottom: 80 }}>
          <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.8rem', fontWeight: 900, color: '#fff', marginBottom: 32 }}>Frequently Asked</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: '#111', border: '1px solid #222', borderRadius: 14, padding: '28px 32px' }}>
                <div style={{ fontFamily: 'var(--font-headline)', fontSize: '1.1rem', fontWeight: 800, color: '#fff', marginBottom: 10 }}>{faq.q}</div>
                <div style={{ color: '#9ca3af', lineHeight: 1.7 }}>{faq.a}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{
          background: 'linear-gradient(135deg, #ff2e2e 0%, #991111 100%)',
          borderRadius: 20, padding: '56px 48px', textAlign: 'center',
          boxShadow: '0 32px 64px rgba(255,46,46,0.2)'
        }}>
          <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '2rem', fontWeight: 900, color: '#fff', marginBottom: 12 }}>
            Ready to Engineer Your Growth?
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
            Use the <strong style={{ color: '#fff', textDecoration: 'underline' }}>Book Free Call</strong> button in the top navigation — free, private, no obligation.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .results-bar { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
