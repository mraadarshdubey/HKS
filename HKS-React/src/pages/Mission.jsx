import React from 'react';
import PageHeader from '../components/PageHeader';

const pillars = [
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>,
    title: 'Simple System for Everyone',
    desc: 'Har chote business owner ko ek aisa system milna chahiye jo samajhna aasaan ho. No complicated jargon — just step-by-step clarity.',
    color: '#cf9d45',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>,
    title: 'Vernacular First — Marathi & Hindi',
    desc: 'Marketing in the language your audience thinks in is not just a strategy — it is respect. We build systems that speak to local entrepreneurs in their own language.',
    color: '#ff2e2e',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>,
    title: 'Practical Learning — Not Theory',
    desc: 'Jo main sikhata hoon wo books se nahi, real campaigns se aaya hai. Rs.1Cr+ ad spend ka actual experience — theory nahi, real knowledge.',
    color: '#cf9d45',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>,
    title: 'Small Steps to Big Growth',
    desc: 'Growth does not have to be complicated. Take one step at a time. Build daily enquiries. Then scale. 30,000+ people are already doing this.',
    color: '#ff2e2e',
  },
];

export default function Mission() {
  return (
    <div style={{ background: 'transparent', minHeight: '100vh', color: '#d1d5db' }}>
      <PageHeader
        title="Mission — Liberate & Educate"
        subtitle="Har chote business owner ko ek simple system milna chahiye — ads se customers tak."
        label="Our Mission"
      />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px 100px' }}>

        <div style={{
          textAlign: 'center', marginBottom: 80, padding: '64px 32px',
          background: 'linear-gradient(135deg, #111 0%, #0a0a0a 100%)',
          border: '1px solid #222', borderRadius: 24, position: 'relative', overflow: 'hidden'
        }}>
          <div style={{ fontSize: '4rem', lineHeight: 1, color: '#cf9d45', opacity: 0.2, fontFamily: 'Georgia', marginBottom: 16 }}>"</div>
          <p style={{ fontFamily: 'var(--font-headline)', fontSize: 'clamp(1.6rem,3.5vw,2.5rem)', fontWeight: 900, color: '#fff', lineHeight: 1.3, maxWidth: 800, margin: '0 auto 24px' }}>
            I keep things simple and practical. Because that's what actually works for people like you and me.
          </p>
          <div style={{ color: '#cf9d45', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>— Kiran Hajare</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32, marginBottom: 80 }}>
          <div style={{ background: '#111', border: '1px solid #222', borderRadius: 20, padding: '40px 36px', borderTop: '4px solid #cf9d45' }}>
            <div style={{ color: '#cf9d45', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}>Our Vision</div>
            <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.6rem', fontWeight: 900, color: '#fff', marginBottom: 16 }}>Every Business Owner Gets Real Customers</h3>
            <p style={{ color: '#9ca3af', lineHeight: 1.75 }}>A world where every small business owner — in every city, in every language — has a system to run ads that bring customers. Money spent on marketing is never wasted.</p>
          </div>
          <div style={{ background: '#111', border: '1px solid #222', borderRadius: 20, padding: '40px 36px', borderTop: '4px solid #ff2e2e' }}>
            <div style={{ color: '#ff2e2e', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}>Our Mission</div>
            <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.6rem', fontWeight: 900, color: '#fff', marginBottom: 16 }}>Train 1 Lakh+ Business Owners</h3>
            <p style={{ color: '#9ca3af', lineHeight: 1.75 }}>To train 1,00,000+ small business owners and entrepreneurs with a simple, step-by-step Meta Ads system — in their own language, at their own pace, with real results.</p>
          </div>
        </div>

        <div style={{ marginBottom: 80 }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ display: 'inline-block', background: 'rgba(207,157,69,0.1)', border: '1px solid rgba(207,157,69,0.3)', color: '#cf9d45', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '4px 16px', borderRadius: 999, marginBottom: 16 }}>Foundation</span>
            <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 900, color: '#fff' }}>4 Pillars of This Mission</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {pillars.map((p, i) => (
              <div key={i} style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: 16, padding: '32px 28px', transition: 'transform 0.3s, border-color 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = p.color + '44'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = '#1e1e1e'; }}
              >
                <div style={{ color: p.color, marginBottom: 18 }}>{p.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.15rem', fontWeight: 900, color: '#fff', marginBottom: 12 }}>{p.title}</h3>
                <p style={{ color: '#9ca3af', lineHeight: 1.7, fontSize: '0.94rem' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: '#111', border: '1px solid #222', borderRadius: 20, padding: '48px', marginBottom: 40, textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.6rem', fontWeight: 900, color: '#fff', marginBottom: 20 }}>Why People Trust Kiran</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
            {[
              { num: '50,000+', label: 'People Trained' },
              { num: '30,000+', label: 'Using the System' },
              { num: 'Rs.1Cr+', label: 'Real Ad Spend' },
              { num: '100%', label: 'Practical, Not Theory' },
            ].map((s, i) => (
              <div key={i}>
                <div style={{ fontFamily: 'var(--font-headline)', fontSize: '2rem', fontWeight: 900, color: '#cf9d45' }}>{s.num}</div>
                <div style={{ color: '#6b7280', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 6 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: 'linear-gradient(135deg, #ff2e2e 0%, #cc0000 100%)', borderRadius: 20, padding: '56px 48px', textAlign: 'center', boxShadow: '0 32px 64px rgba(255,46,46,0.25)' }}>
          <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '2rem', fontWeight: 900, color: '#fff', marginBottom: 14 }}>Book a Free Clarity Call</h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', maxWidth: 500, margin: '0 auto 28px', lineHeight: 1.7 }}>
            Let's fix your ads step-by-step. I'll personally tell you exactly what you need to do to get real customers.
          </p>
          <button style={{ background: '#fff', color: '#cc0000', fontWeight: 900, fontSize: '1rem', padding: '14px 40px', border: 'none', borderRadius: 8, cursor: 'pointer' }}>Book Your Free Clarity Call</button>
        </div>
      </div>
    </div>
  );
}
