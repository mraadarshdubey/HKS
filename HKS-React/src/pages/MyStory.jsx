import React from 'react';
import PageHeader from '../components/PageHeader';

const milestones = [
  { year: '2019', title: 'The First Failure', desc: 'Started with zero blueprint. Launched ads that bombed. Lost money. Gained lessons no course could teach.' },
  { year: '2020', title: 'The System Is Born', desc: 'Built the first admission funnel framework from scratch. Tested across 3 institutes. Results were undeniable.' },
  { year: '2021', title: '₹47 Lakh Milestone', desc: 'Generated over ₹47 Lakh in collected admissions for private clients in a single year. Proof of concept became proof of scale.' },
  { year: '2022', title: 'The Agency Launch', desc: 'Founded the growth agency. Brought in a team. Started serving coaching institutes across Maharashtra at scale.' },
  { year: '2023', title: 'Marathi Business Tribe', desc: 'Built a community of 10,000+ Marathi entrepreneurs. Became the go-to Meta Ads expert for the Marathi business world.' },
  { year: '2024+', title: 'AI Funnel Revolution', desc: 'Pioneered AI-powered funnels for educational institutes. Automating admissions, follow-ups, and conversions at scale.' },
];

export default function MyStory() {
  return (
    <div style={{ background: 'transparent', minHeight: '100vh', color: '#d1d5db' }}>
      <PageHeader
        title="My Story"
        subtitle="From zero blueprint to ₹47 Lakh+ in admissions — the unfiltered truth."
        label="The Founder's Journey"
      />

      {/* Intro Section */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 60, alignItems: 'center' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 60, alignItems: 'center' }} className="story-intro-grid">
            {/* Image */}
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute', inset: '-16px',
                background: 'radial-gradient(ellipse at center, rgba(207,157,69,0.25) 0%, transparent 70%)',
                borderRadius: '50%', filter: 'blur(40px)', zIndex: 0
              }} />
              <div style={{
                position: 'relative', zIndex: 1,
                borderRadius: 20, overflow: 'hidden',
                border: '1px solid #333',
                boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
                aspectRatio: '4/5',
              }}>
                <img
                  src="/k1.png"
                  alt="Kiran Hajare"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', filter: 'brightness(0.95) contrast(1.05)' }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 60%)'
                }} />
                {/* Floating badge */}
                <div style={{
                  position: 'absolute', bottom: 20, left: 20,
                  background: '#cf9d45', color: '#000',
                  fontWeight: 900, fontSize: '0.75rem', padding: '6px 16px',
                  borderRadius: 999, letterSpacing: '0.1em', textTransform: 'uppercase'
                }}>5+ Years of Real Wins</div>
              </div>
            </div>

            {/* Text */}
            <div>
              <div style={{
                display: 'inline-block', background: 'rgba(207,157,69,0.1)', border: '1px solid rgba(207,157,69,0.3)',
                color: '#cf9d45', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em',
                textTransform: 'uppercase', padding: '4px 14px', borderRadius: 999, marginBottom: 24
              }}>The Turning Point</div>
              <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 900, color: '#fff', lineHeight: 1.1, marginBottom: 20 }}>
                Growth is not <span style={{ color: '#cf9d45' }}>luck.</span><br />It is engineered.
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#9ca3af', marginBottom: 20 }}>
                Every great transformation starts with a struggle. My journey wasn't handed to me. It required breaking down the exact formulas that were failing and rebuilding them from scratch into predictable systems.
              </p>
              <blockquote style={{
                borderLeft: '4px solid #cf9d45', paddingLeft: 20,
                color: '#cf9d45', fontStyle: 'italic', fontWeight: 600, fontSize: '1.1rem',
                margin: '28px 0', lineHeight: 1.6
              }}>
                "The institutes I work with don't hope for admissions. They engineer them."
              </blockquote>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#9ca3af' }}>
                Today, our framework powers some of the most dynamic educational institutes in Maharashtra. We focus on true scaling — more admissions, better conversions, and absolute market dominance.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 1, background: '#222', borderRadius: 16,
          overflow: 'hidden', margin: '72px 0', border: '1px solid #222'
        }}>
          {[
            { num: '₹47L+', label: 'Admissions Generated' },
            { num: '200+', label: 'Institutes Served' },
            { num: '5+', label: 'Years in the Game' },
          ].map((stat, i) => (
            <div key={i} style={{
              background: '#111', padding: '36px 24px', textAlign: 'center',
              transition: 'background 0.3s',
            }}>
              <div style={{
                fontFamily: 'var(--font-headline)', fontSize: 'clamp(2rem,4vw,2.8rem)',
                fontWeight: 900, color: '#cf9d45', lineHeight: 1
              }}>{stat.num}</div>
              <div style={{ fontSize: '0.8rem', color: '#6b7280', marginTop: 8, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div style={{ marginBottom: 100 }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ display: 'inline-block', background: 'rgba(255,46,46,0.1)', border: '1px solid rgba(255,46,46,0.3)', color: '#ff2e2e', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '4px 16px', borderRadius: 999, marginBottom: 16 }}>The Journey</span>
            <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, color: '#fff' }}>Built Year by Year</h2>
          </div>

          <div style={{ position: 'relative', paddingLeft: 40 }}>
            {/* Vertical line */}
            <div style={{
              position: 'absolute', left: 16, top: 0, bottom: 0,
              width: 2, background: 'linear-gradient(to bottom, #cf9d45, #ff2e2e, transparent)'
            }} />

            {milestones.map((m, i) => (
              <div key={i} style={{ display: 'flex', gap: 32, marginBottom: 48, position: 'relative' }}>
                {/* Dot */}
                <div style={{
                  position: 'absolute', left: -33, top: 6,
                  width: 18, height: 18, borderRadius: '50%',
                  background: i % 2 === 0 ? '#cf9d45' : '#ff2e2e',
                  border: '3px solid #0a0a0a',
                  boxShadow: `0 0 12px ${i % 2 === 0 ? 'rgba(207,157,69,0.5)' : 'rgba(255,46,46,0.5)'}`,
                  flexShrink: 0,
                }} />
                <div style={{
                  background: '#111', border: '1px solid #222', borderRadius: 16,
                  padding: '28px 32px', flex: 1,
                  transition: 'border-color 0.3s, transform 0.3s',
                }}>
                  <div style={{
                    display: 'inline-block', fontFamily: 'var(--font-headline)',
                    fontSize: '0.75rem', fontWeight: 800, color: i % 2 === 0 ? '#cf9d45' : '#ff2e2e',
                    letterSpacing: '0.1em', marginBottom: 8
                  }}>{m.year}</div>
                  <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.3rem', fontWeight: 900, color: '#fff', marginBottom: 10 }}>{m.title}</h3>
                  <p style={{ color: '#9ca3af', lineHeight: 1.7, fontSize: '0.97rem' }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .story-intro-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
