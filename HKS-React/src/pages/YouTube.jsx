import React from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';

const channels = [
  {
    name: 'Kiran Hajare Official',
    handle: '@hellokiransheth',
    url: 'https://www.youtube.com/@hellokiransheth',
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
    handle: '@hellokiransheth',
    url: 'https://www.youtube.com/@hellokiransheth',
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
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>, title: 'Meta Ads Masterclass', count: '24 Videos', desc: 'Complete A-Z guide to running profitable Meta Ads for educational institutes.' },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>, title: 'Case Studies', count: '18 Videos', desc: 'Real campaign breakdowns with actual data, numbers, and results.' },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><line x1="8" y1="16" x2="8" y2="16"></line><line x1="16" y1="16" x2="16" y2="16"></line></svg>, title: 'AI & Automation', count: '12 Videos', desc: 'How to set up AI-powered lead follow-ups that convert while you sleep.' },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>, title: 'Mindset for Business', count: '16 Videos', desc: 'The mental frameworks that separate top-performing institute owners.' },
];

export default function YouTube() {
  return (
    <main style={{ background: 'transparent', minHeight: '100vh', color: '#d1d5db' }}>
      <SEO
        title="YouTube — @hellokiransheth Marketing Masterclasses"
        description="Watch Kiran Hajare's deep-dive strategies, case studies, and complete marketing blueprints on YouTube. Subscribe to @hellokiransheth for weekly growth content."
        path="/youtube"
        keywords="Kiran Hajare YouTube, hellokiransheth YouTube, Meta ads tutorial, coaching marketing videos, digital marketing masterclass"
      />
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
                  marginBottom: 16, boxShadow: `0 0 24px ${ch.color}44`, color: ch.color === '#cf9d45' ? '#000' : '#fff',
                  zIndex: 1, position: 'relative'
                }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>
                </div>
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
                      <span style={{ color: ch.color, flexShrink: 0, marginTop: 2 }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                      </span> {f}
                    </div>
                  ))}
                </div>
                <a href={ch.url} target="_blank" rel="noopener noreferrer" style={{
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

        {/* Success Stories (YouTube Shorts) */}
        <div style={{ marginBottom: 80 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: '#cf9d45', boxShadow: '0 0 10px #cf9d45' }}></span>
            <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.8rem', fontWeight: 900, color: '#fff', margin: 0 }}>Success Stories</h2>
          </div>
          <p style={{ color: '#9ca3af', marginBottom: 32, fontSize: '1.05rem', lineHeight: 1.6 }}>Real results from Marathi Business Tribe members who implemented our Meta Ads & AI strategies.</p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', 
            gap: '24px' 
          }}>
            {[
              'LiYtyW_-sgs', 'ozGxL5ljTTY', '7317jK00SzM', 'E2DkRg46Dz8', 
              'CnfqACM5O8Q', '-WByVOlNf-I', '75PbTi9pjgU', '2oRuRTeB1Ts', 
              'ZL3SkCmuLjQ', 'tVyvX9akkyA'
            ].map((id, i) => (
              <div key={i} style={{ 
                borderRadius: '20px', overflow: 'hidden', background: '#0a0a0a',
                border: '1px solid rgba(255,255,255,0.08)',
                aspectRatio: '9/16', position: 'relative',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 15px 40px rgba(207,157,69,0.15)'; e.currentTarget.style.borderColor = 'rgba(207,157,69,0.3)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`}
                  title={`Success Story ${i+1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  loading="lazy"
                ></iframe>
              </div>
            ))}
          </div>
        </div>

        {/* Subscribe Banner 
        <div style={{
          background: 'linear-gradient(135deg, rgba(255,46,46,0.12), rgba(207,157,69,0.08))',
          border: '1px solid rgba(255,46,46,0.2)', borderRadius: 20,
          padding: '56px 48px', textAlign: 'center'
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16, color: '#ff2e2e' }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
          </div>
          <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.8rem', fontWeight: 900, color: '#fff', marginBottom: 12 }}>Subscribe & Never Miss a Strategy Drop</h3>
          <p style={{ color: '#9ca3af', maxWidth: 500, margin: '0 auto 28px', lineHeight: 1.7 }}>New case studies, funnel walkthroughs, and Meta Ads deep dives every week. Hit subscribe and turn on notifications.</p>
          <button style={{
            background: '#ff2e2e', color: '#fff', fontWeight: 800, fontSize: '1rem',
            padding: '14px 40px', border: 'none', borderRadius: 8, cursor: 'pointer',
            boxShadow: '0 0 30px rgba(255,46,46,0.3)'
          }}>Subscribe Now →</button>
        </div>
        */}
      </div>
    </main>
  );
}
