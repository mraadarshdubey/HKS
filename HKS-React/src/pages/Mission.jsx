import React from 'react';
import PageHeader from '../components/PageHeader';

const pillars = [
  {
    icon: '🎓',
    title: 'Empower Every Educator',
    desc: 'Give every coaching institute owner — regardless of city or background — access to systems that used to be reserved only for large-budget brands.',
    color: '#cf9d45',
  },
  {
    icon: '🌍',
    title: 'Vernacular First',
    desc: 'Marketing in the language your audience thinks in is not a strategy — it is respect. We build systems that speak to the Marathi-speaking entrepreneur.',
    color: '#ff2e2e',
  },
  {
    icon: '⚙️',
    title: 'Systems Over Hustle',
    desc: 'Sustainable growth comes from automation and precision, not grinding 18-hour days. We liberate institutes from chaos and put them on autopilot.',
    color: '#cf9d45',
  },
  {
    icon: '📈',
    title: 'Data-Driven Decisions',
    desc: 'Every campaign we run, every funnel we build is backed by data. We make marketing an investment — not a gamble.',
    color: '#ff2e2e',
  },
];

export default function Mission() {
  return (
    <div style={{ background: 'transparent', minHeight: '100vh', color: '#d1d5db' }}>
      <PageHeader
        title="Liberate & Educate"
        subtitle="A movement to give every coaching institute the systems to compete, scale, and win."
        label="Our Mission"
      />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px 100px' }}>

        {/* Hero Quote */}
        <div style={{
          textAlign: 'center', marginBottom: 80,
          padding: '64px 32px',
          background: 'linear-gradient(135deg, #111 0%, #0a0a0a 100%)',
          border: '1px solid #222', borderRadius: 24, position: 'relative', overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at 30% 50%, rgba(207,157,69,0.08), transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(255,46,46,0.06), transparent 60%)',
            pointerEvents: 'none'
          }} />
          <div style={{ fontSize: '4rem', lineHeight: 1, color: '#cf9d45', opacity: 0.2, fontFamily: 'Georgia', marginBottom: 16 }}>"</div>
          <p style={{
            fontFamily: 'var(--font-headline)', fontSize: 'clamp(1.6rem,3.5vw,2.5rem)',
            fontWeight: 900, color: '#fff', lineHeight: 1.3, maxWidth: 800, margin: '0 auto 24px'
          }}>
            Education is the most powerful weapon you can use to change the world. My job is to ensure those who educate never go unseen.
          </p>
          <div style={{ color: '#cf9d45', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>— Kiran Hajare</div>
        </div>

        {/* Vision / Mission split */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 32, marginBottom: 80
        }}>
          <div style={{
            background: '#111', border: '1px solid #222', borderRadius: 20,
            padding: '40px 36px', borderTop: '4px solid #cf9d45'
          }}>
            <div style={{ color: '#cf9d45', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}>Our Vision</div>
            <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.6rem', fontWeight: 900, color: '#fff', marginBottom: 16 }}>A Fully Liberated Education Economy</h3>
            <p style={{ color: '#9ca3af', lineHeight: 1.75 }}>
              A world where every coaching institute — in every city, in every language — has the digital infrastructure to reach the students who need them. Where quality education finds its audience without depending on luck.
            </p>
          </div>
          <div style={{
            background: '#111', border: '1px solid #222', borderRadius: 20,
            padding: '40px 36px', borderTop: '4px solid #ff2e2e'
          }}>
            <div style={{ color: '#ff2e2e', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}>Our Mission</div>
            <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.6rem', fontWeight: 900, color: '#fff', marginBottom: 16 }}>Systematic Growth for Every Educator</h3>
            <p style={{ color: '#9ca3af', lineHeight: 1.75 }}>
              To build and deploy battle-tested Meta Ads systems, AI funnels, and predictable admission pipelines for 1,000+ coaching institutes across India — starting with the Marathi market.
            </p>
          </div>
        </div>

        {/* Pillars */}
        <div style={{ marginBottom: 80 }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{
              display: 'inline-block', background: 'rgba(207,157,69,0.1)',
              border: '1px solid rgba(207,157,69,0.3)', color: '#cf9d45',
              fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase',
              padding: '4px 16px', borderRadius: 999, marginBottom: 16
            }}>Foundation</span>
            <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 900, color: '#fff' }}>
              4 Pillars of Liberate & Educate
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {pillars.map((p, i) => (
              <div key={i} style={{
                background: '#111', border: '1px solid #1e1e1e', borderRadius: 16,
                padding: '32px 28px', transition: 'transform 0.3s, border-color 0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = p.color + '44'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = '#1e1e1e'; }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: 18 }}>{p.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.15rem', fontWeight: 900, color: '#fff', marginBottom: 12 }}>{p.title}</h3>
                <p style={{ color: '#9ca3af', lineHeight: 1.7, fontSize: '0.94rem' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Movement CTA */}
        <div style={{
          background: 'linear-gradient(135deg, #ff2e2e 0%, #cc0000 100%)',
          borderRadius: 20, padding: '56px 48px', textAlign: 'center',
          boxShadow: '0 32px 64px rgba(255,46,46,0.25)'
        }}>
          <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '2rem', fontWeight: 900, color: '#fff', marginBottom: 14 }}>
            Join the Movement
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', maxWidth: 500, margin: '0 auto 28px', lineHeight: 1.7 }}>
            If you run a coaching institute and want to build a predictable admission machine — this mission is for you.
          </p>
          <button style={{
            background: '#fff', color: '#cc0000', fontWeight: 900, fontSize: '1rem',
            padding: '14px 40px', border: 'none', borderRadius: 8, cursor: 'pointer',
            transition: 'transform 0.2s',
          }}>Apply for a Strategy Call →</button>
        </div>
      </div>
    </div>
  );
}
