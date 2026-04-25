import React from 'react';
import PageHeader from '../components/PageHeader';

const services = [
  {
    icon: '🎯',
    title: '1-on-1 Growth Consulting',
    desc: 'Private monthly retainer. Kiran works directly with your institute to audit, rebuild, and optimize your entire admission system from top to bottom.',
    price: '₹25,000/mo',
    spots: '3 spots remaining',
    color: '#cf9d45',
  },
  {
    icon: '👥',
    title: 'Elite Mastermind (Group)',
    desc: 'A closed cohort of 10 institute owners. Monthly intensive sessions, peer accountability, and direct access to Kiran\'s latest funnel systems.',
    price: '₹12,000/mo',
    spots: '5 spots remaining',
    color: '#ff2e2e',
  },
  {
    icon: '⚙️',
    title: 'Done-For-You Ad Agency',
    desc: 'We run your Meta Ads end-to-end. Creative, copy, targeting, testing, and optimization — fully managed so you can focus on teaching.',
    price: 'Custom Pricing',
    spots: 'Enquire Now',
    color: '#cf9d45',
  },
];

const results = [
  { metric: '₹47L+', label: 'Admissions Revenue Generated' },
  { metric: '200+', label: 'Institutes Scaled' },
  { metric: '3.8x', label: 'Average ROAS Achieved' },
  { metric: '90 Days', label: 'To Full Capacity (Avg.)' },
];

const faqs = [
  { q: 'What kind of institutes do you work with?', a: 'Primarily coaching institutes focused on academics, competitive exams, skill development, and professional training. If you run a structured program and want more admissions, we can help.' },
  { q: 'Do I need to already be running ads?', a: 'No. We work with institutes that have never run a single ad and those spending ₹5L/month. We meet you where you are and build from there.' },
  { q: 'How long before I see results?', a: 'Most clients see qualified leads within the first 7-14 days. Significant revenue impact typically manifests within 30-60 days.' },
];

export default function BusinessDev() {
  return (
    <div style={{ background: 'transparent', minHeight: '100vh', color: '#d1d5db' }}>
      <PageHeader
        title="Business Development"
        subtitle="Elite consulting, masterminds, and done-for-you growth systems for coaching institutes."
        label="My Companies"
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
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 480, margin: '0 auto 28px', lineHeight: 1.7 }}>
            Limited spots. No fluff. Just results. Book a free 30-minute strategy call to see if we're the right fit.
          </p>
          <button style={{
            background: '#fff', color: '#cc0000', fontWeight: 900, fontSize: '1rem',
            padding: '14px 40px', border: 'none', borderRadius: 8, cursor: 'pointer'
          }}>Book Your Free Strategy Call →</button>
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
