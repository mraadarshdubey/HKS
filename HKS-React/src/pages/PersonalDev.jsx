import React from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';

const mindsetPillars = [
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>, title: 'Identity Shift', desc: 'You cannot out-earn your self-concept. Kiran\'s personal development work starts with rewiring the beliefs that are capping your growth.' },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>, title: 'Time Sovereignty', desc: 'Learn to extract 4 hours of deep work from every day — even with a full team, a full calendar, and a full inbox.' },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>, title: 'Pressure Mastery', desc: 'High performance under pressure is a learnable skill. We build entrepreneurs who don\'t crack when the stakes are highest.' },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>, title: 'Decision Architecture', desc: 'Most entrepreneurs make decisions emotionally and justify them logically. Learn to reverse that and make choices that compound.' },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>, title: 'Influence & Communication', desc: 'The ability to communicate your value — on stage, on camera, or in a sales call — is the single highest-ROI skill you can develop.' },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>, title: 'Resilience Protocols', desc: 'Business will test you. We build the mental infrastructure to absorb setbacks and emerge with clarity, not chaos.' },
];

const programs = [
  {
    title: 'The Inner CEO Framework',
    type: '8-Week Digital Program',
    desc: 'A comprehensive personal performance system covering identity, habits, decision-making, and peak productivity — designed for entrepreneurs who are already successful but want to operate at the next level.',
    color: '#cf9d45',
    status: 'Enrolling Now',
  },
  {
    title: 'Mindset Mastery 1-on-1',
    type: 'Private Coaching',
    desc: 'Direct private sessions with Kiran focused on the mental blocks, patterns, and blind spots holding you and your business back. Maximum 5 clients at a time.',
    color: '#ff2e2e',
    status: '2 Spots Left',
  },
];

export default function PersonalDev() {
  return (
    <main style={{ background: 'transparent', minHeight: '100vh', color: '#d1d5db' }}>
      <SEO
        title="Personal Development — Mindset & Identity by Kiran Hajare"
        description="Transform your entrepreneurial mindset with Kiran Hajare. Identity shifts, decision architecture, resilience protocols, and peak performance for business builders."
        path="/personal-development"
        keywords="Kiran Hajare mindset coaching, entrepreneur personal development, business mindset India, identity shift coaching, Kiran Hajare training"
      />
      <PageHeader
        title="Personal Development"
        subtitle="The inner game of entrepreneurship — mindset, identity, and peak performance built for business builders."
        label="My Companies"
      />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px 100px' }}>

        {/* Intro Quote */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 32, marginBottom: 80
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #111 0%, #0d0d0d)',
            border: '1px solid #222', borderRadius: 20, padding: '40px',
            borderLeft: '4px solid #cf9d45'
          }}>
            <p style={{ fontFamily: 'var(--font-headline)', fontSize: '1.4rem', color: '#cf9d45', fontStyle: 'italic', fontWeight: 700, lineHeight: 1.5 }}>
              "Your business will never grow faster than your identity allows."
            </p>
            <p style={{ color: '#6b7280', fontSize: '0.8rem', marginTop: 16, fontWeight: 600 }}>— Kiran Hajare</p>
          </div>
          <div style={{ background: '#111', border: '1px solid #222', borderRadius: 20, padding: '40px' }}>
            <p style={{ color: '#9ca3af', lineHeight: 1.8, fontSize: '1rem' }}>
              External systems can only take you so far. The entrepreneurs who truly scale — and keep what they build — are the ones who have done the internal work. This is not self-help. This is strategic performance science applied to business.
            </p>
          </div>
        </div>

        {/* 6 Pillars */}
        <div style={{ marginBottom: 80 }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ display: 'inline-block', background: 'rgba(207,157,69,0.1)', border: '1px solid rgba(207,157,69,0.3)', color: '#cf9d45', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '4px 16px', borderRadius: 999, marginBottom: 16 }}>The Framework</span>
            <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 900, color: '#fff' }}>6 Pillars of Peak Entrepreneur Performance</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            {mindsetPillars.map((p, i) => (
              <div key={i} style={{
                background: '#111', border: '1px solid #1a1a1a', borderRadius: 16, padding: '28px 24px',
                transition: 'transform 0.3s, border-color 0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = '#cf9d4433'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = '#1a1a1a'; }}
              >
                <div style={{ fontSize: '2.2rem', marginBottom: 14 }}>{p.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.05rem', fontWeight: 900, color: '#fff', marginBottom: 10 }}>{p.title}</h3>
                <p style={{ color: '#9ca3af', lineHeight: 1.7, fontSize: '0.9rem' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Programs */}
        <div style={{ marginBottom: 80 }}>
          <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: '2rem', fontWeight: 900, color: '#fff', marginBottom: 32 }}>Programs & Coaching</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>
            {programs.map((prog, i) => (
              <div key={i} style={{
                background: '#111', border: '1px solid #1e1e1e', borderRadius: 20,
                padding: '40px 36px', position: 'relative', overflow: 'hidden',
                transition: 'transform 0.3s, box-shadow 0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 48px rgba(0,0,0,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: prog.color }} />
                <div style={{
                  display: 'inline-block', background: prog.color + '18', color: prog.color,
                  fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase',
                  padding: '4px 12px', borderRadius: 999, border: `1px solid ${prog.color}33`, marginBottom: 20
                }}>{prog.status}</div>
                <div style={{ fontSize: '0.8rem', color: '#6b7280', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>{prog.type}</div>
                <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.5rem', fontWeight: 900, color: '#fff', marginBottom: 16 }}>{prog.title}</h3>
                <p style={{ color: '#9ca3af', lineHeight: 1.75, marginBottom: 28 }}>{prog.desc}</p>
                <button style={{
                  width: '100%', padding: '13px 24px',
                  background: prog.color, color: prog.color === '#cf9d45' ? '#000' : '#fff',
                  border: 'none', borderRadius: 8, fontWeight: 800, fontSize: '0.9rem', cursor: 'pointer'
                }}>Apply to Join →</button>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div style={{
          background: 'linear-gradient(135deg, #111, #0d0d0d)',
          border: '1px solid rgba(207,157,69,0.2)', borderRadius: 20,
          padding: '56px 48px', textAlign: 'center',
          boxShadow: '0 0 60px rgba(207,157,69,0.06)'
        }}>
          <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.8rem', fontWeight: 900, color: '#fff', marginBottom: 12 }}>Start the Inner Work</h3>
          <p style={{ color: '#9ca3af', maxWidth: 520, margin: '0 auto 28px', lineHeight: 1.7 }}>
            The system you want on the outside is built from the inside. Apply for a discovery session and Kiran will assess exactly where to start.
          </p>
          <button style={{
            background: '#cf9d45', color: '#000', fontWeight: 900, fontSize: '1rem',
            padding: '14px 40px', border: 'none', borderRadius: 8, cursor: 'pointer',
            boxShadow: '0 0 30px rgba(207,157,69,0.3)'
          }}>Book Discovery Session →</button>
        </div>
      </div>
    </main>
  );
}
