import React from 'react';
import PageHeader from '../components/PageHeader';

const channels = [
  {
    name: 'Kiran Hajare Official',
    handle: '@KiranHajareOfficial',
    subs: '50K+',
    videos: '120+',
    focus: 'Meta Ads strategy, case studies, and admission funnel walkthroughs for coaching institutes.',
    color: '#ff2e2e',
    featured: [
      'How I Generated ₹47L in Admissions with Meta Ads',
      'The 3-Step Funnel That Fills Coaching Seats in 30 Days',
      'AI Follow-Up Systems: Never Lose a Lead Again',
    ],
  },
  {
    name: 'Marathi Business Tribe',
    handle: '@MarathiBusinessTribe',
    subs: '25K+',
    videos: '80+',
    focus: 'Marathi language digital marketing, entrepreneur mindset, and vernacular business strategy.',
    color: '#cf9d45',
    featured: [
      'मराठी उद्योजकांसाठी Meta Ads कसे चालवावे',
      'WhatsApp वरून Admissions कसे Generate करावे',
      'Digital Marketing मध्ये Brand कसा बनवावा',
    ],
  },
];

const playlists = [
  { icon: '🎯', title: 'Meta Ads Masterclass', count: '24 Videos', desc: 'Complete A-Z guide to running profitable Meta Ads for educational institutes.' },
  { icon: '📈', title: 'Case Studies', count: '18 Videos', desc: 'Real campaign breakdowns with actual data, numbers, and results.' },
  { icon: '🤖', title: 'AI & Automation', count: '12 Videos', desc: 'How to set up AI-powered lead follow-ups that convert while you sleep.' },
  { icon: '🧠', title: 'Mindset for Business', count: '16 Videos', desc: 'The mental frameworks that separate top-performing institute owners.' },
];

export default function YouTube() {
  return (
    <div style={{ background: 'transparent', minHeight: '100vh', color: '#d1d5db' }}>
      <PageHeader
        title="YouTube Channels"
        subtitle="Visual blueprints, live campaign breakdowns, and strategic content to 10x your institute."
        label="My Content"
      />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px 100px' }}>

        {/* Channel Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32, marginBottom: 80 }}>
          {channels.map((ch, i) => (
            <div key={i} style={{
              background: '#111', border: '1px solid #1e1e1e', borderRadius: 24,
              overflow: 'hidden', transition: 'transform 0.3s, box-shadow 0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 24px 56px rgba(0,0,0,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              {/* Channel banner */}
              <div style={{
                background: `linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)`,
                padding: '36px 32px', position: 'relative', overflow: 'hidden',
                borderBottom: `3px solid ${ch.color}`
              }}>
                <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 80% 50%, ${ch.color}15, transparent 70%)` }} />
                {/* Channel Avatar */}
                <div style={{
                  width: 64, height: 64, borderRadius: '50%',
                  background: ch.color, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.8rem', marginBottom: 16, boxShadow: `0 0 24px ${ch.color}44`,
                  zIndex: 1, position: 'relative'
                }}>📺</div>
                <div style={{ color: '#6b7280', fontSize: '0.75rem', fontWeight: 600, marginBottom: 6 }}>{ch.handle}</div>
                <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.4rem', fontWeight: 900, color: '#fff', zIndex: 1, position: 'relative' }}>{ch.name}</h2>
                <div style={{ display: 'flex', gap: 24, marginTop: 16, zIndex: 1, position: 'relative' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-headline)', fontSize: '1.2rem', fontWeight: 900, color: ch.color }}>{ch.subs}</div>
                    <div style={{ fontSize: '0.65rem', color: '#6b7280', fontWeight: 600, textTransform: 'uppercase' }}>Subscribers</div>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-headline)', fontSize: '1.2rem', fontWeight: 900, color: ch.color }}>{ch.videos}</div>
                    <div style={{ fontSize: '0.65rem', color: '#6b7280', fontWeight: 600, textTransform: 'uppercase' }}>Videos</div>
                  </div>
                </div>
              </div>
              <div style={{ padding: '28px 32px' }}>
                <p style={{ color: '#9ca3af', lineHeight: 1.7, marginBottom: 24, fontSize: '0.95rem' }}>{ch.focus}</p>
                <div style={{ marginBottom: 24 }}>
                  <p style={{ color: '#6b7280', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>Top Videos</p>
                  {ch.featured.map((f, j) => (
                    <div key={j} style={{
                      display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10,
                      color: '#e5e7eb', fontSize: '0.88rem', lineHeight: 1.4
                    }}>
                      <span style={{ color: ch.color, flexShrink: 0, marginTop: 2 }}>▶</span> {f}
                    </div>
                  ))}
                </div>
                <a href="#" style={{
                  display: 'block', textAlign: 'center', padding: '12px 24px',
                  background: ch.color, color: ch.color === '#cf9d45' ? '#000' : '#fff',
                  fontWeight: 800, fontSize: '0.9rem', borderRadius: 8,
                  textDecoration: 'none', transition: 'opacity 0.2s'
                }}>Visit Channel →</a>
              </div>
            </div>
          ))}
        </div>

        {/* Playlists */}
        <div style={{ marginBottom: 80 }}>
          <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.8rem', fontWeight: 900, color: '#fff', marginBottom: 32 }}>Popular Playlists</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            {playlists.map((pl, i) => (
              <div key={i} style={{
                background: '#111', border: '1px solid #1a1a1a', borderRadius: 16, padding: '28px 24px',
                cursor: 'pointer', transition: 'transform 0.3s, border-color 0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.borderColor = '#cf9d4433'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = '#1a1a1a'; }}
              >
                <div style={{ fontSize: '2rem', marginBottom: 14 }}>{pl.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.05rem', fontWeight: 900, color: '#fff', marginBottom: 6 }}>{pl.title}</h3>
                <p style={{ color: '#cf9d45', fontSize: '0.75rem', fontWeight: 700, marginBottom: 10 }}>{pl.count}</p>
                <p style={{ color: '#9ca3af', fontSize: '0.87rem', lineHeight: 1.6 }}>{pl.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Subscribe Banner */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(255,46,46,0.12), rgba(207,157,69,0.08))',
          border: '1px solid rgba(255,46,46,0.2)', borderRadius: 20,
          padding: '56px 48px', textAlign: 'center'
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>🔔</div>
          <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.8rem', fontWeight: 900, color: '#fff', marginBottom: 12 }}>Subscribe & Never Miss a Strategy Drop</h3>
          <p style={{ color: '#9ca3af', maxWidth: 500, margin: '0 auto 28px', lineHeight: 1.7 }}>New case studies, funnel walkthroughs, and Meta Ads deep dives every week. Hit subscribe and turn on notifications.</p>
          <button style={{
            background: '#ff2e2e', color: '#fff', fontWeight: 800, fontSize: '1rem',
            padding: '14px 40px', border: 'none', borderRadius: 8, cursor: 'pointer',
            boxShadow: '0 0 30px rgba(255,46,46,0.3)'
          }}>Subscribe Now →</button>
        </div>
      </div>
    </div>
  );
}
