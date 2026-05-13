import React from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';

const socials = [
  {
    platform: 'Facebook',
    handle: '@hellokiransheth',
    followers: '22K+',
    posts: 'Daily Updates',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>,
    desc: 'Daily tips, live sessions, and the go-to hub for the Marathi Business Tribe community. Join 22,000+ entrepreneurs.',
    color: '#1877f2',
    cta: 'Follow on Facebook',
    url: 'https://www.facebook.com/hellokiransheth/',
    badge: 'Most Active',
  },
  {
    platform: 'Instagram',
    handle: '@hellokiransheth',
    followers: '52.8K+',
    posts: '726+ Posts',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>,
    desc: 'Visual strategy breakdowns, behind-the-scenes of live campaigns, reels on Meta Ads tactics that actually work.',
    color: '#e1306c',
    cta: 'Follow on Instagram',
    url: 'https://www.instagram.com/hellokiransheth/',
    badge: 'Top Reels',
  },
  {
    platform: 'LinkedIn',
    handle: '@hellokiransheth',
    followers: '8K+',
    posts: 'Pro Insights',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>,
    desc: 'Long-form insights, professional case studies, and deep dives into educational marketing strategy for serious entrepreneurs.',
    color: '#0077b5',
    cta: 'Connect on LinkedIn',
    url: 'https://in.linkedin.com/in/hellokiransheth',
    badge: 'Thought Leadership',
  },
  {
    platform: 'YouTube',
    handle: '@hellokiransheth',
    followers: '2.6K+',
    posts: '458+ Videos',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.13 1 12 1 12s0 3.87.46 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.87 23 12 23 12s0-3.87-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>,
    desc: 'Deep-dive strategies, case studies, and complete blueprints to scale your admissions. Updated weekly.',
    color: '#ff0000',
    cta: 'Subscribe on YouTube',
    url: 'https://www.youtube.com/@hellokiransheth',
    badge: 'Masterclasses',
  },
];

export default function Socials() {
  return (
    <main style={{ background: 'transparent', minHeight: '100vh', color: '#d1d5db' }}>
      <SEO
        title="Social Media — Follow @hellokiransheth"
        description="Connect with Kiran Hajare on Facebook, Instagram, LinkedIn, and YouTube. Get daily marketing tips, live sessions, and strategic insights for your coaching institute."
        path="/socials"
        keywords="Kiran Hajare Instagram, Kiran Hajare Facebook, hellokiransheth social media, Kiran Hajare LinkedIn, Kiran Hajare YouTube channel"
      />
      <PageHeader
        title="Connect With Kiran"
        subtitle="Every platform has a different lens. Find the one that speaks to you and plug in."
        label="Socials"
      />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px 100px' }}>

        {/* Community Quote */}
        <div style={{
          textAlign: 'center', marginBottom: 72, padding: '48px 32px',
          background: '#111', border: '1px solid #1e1e1e', borderRadius: 20
        }}>
          <p style={{ fontFamily: 'var(--font-headline)', fontSize: 'clamp(1.2rem,2.5vw,1.8rem)', fontWeight: 900, color: '#fff', marginBottom: 12 }}>
            "The feed you follow determines the future you build."
          </p>
          <p style={{ color: '#6b7280', fontSize: '0.85rem' }}>— Follow the accounts that sharpen you, not sedate you.</p>
        </div>

        {/* Socials Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, marginBottom: 80 }}>
          {socials.map((s, i) => (
            <div key={i} style={{
              background: '#111', border: '1px solid #1a1a1a', borderRadius: 20,
              padding: '32px', display: 'flex', flexDirection: 'column', gap: 16,
              position: 'relative', overflow: 'hidden',
              transition: 'transform 0.3s, border-color 0.3s, box-shadow 0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = s.color + '44'; e.currentTarget.style.boxShadow = \`0 20px 48px rgba(0,0,0,0.4)\`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = '#1a1a1a'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              {/* Top color accent */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: s.color }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, minWidth: 0 }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: '50%', flexShrink: 0,
                    background: s.color + '18', border: \`1px solid \${s.color}33\`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem'
                  }}>{s.icon}</div>
                  <div style={{ minWidth: 0 }}>
                    <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.05rem', fontWeight: 900, color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{s.platform}</h3>
                    <p style={{ color: '#6b7280', fontSize: '0.78rem', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{s.handle}</p>
                  </div>
                </div>
                {s.badge && (
                  <span style={{
                    background: '#cf9d4518', color: '#cf9d45', border: '1px solid #cf9d4433',
                    fontSize: '0.55rem', fontWeight: 800, letterSpacing: '0.05em',
                    textTransform: 'uppercase', padding: '4px 10px', borderRadius: 999, flexShrink: 0,
                    whiteSpace: 'nowrap'
                  }}>{s.badge}</span>
                )}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginTop: 4 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                  <span style={{ fontFamily: 'var(--font-headline)', fontSize: '1.8rem', fontWeight: 900, color: s.color }}>{s.followers}</span>
                  <span style={{ color: '#6b7280', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>{s.platform === 'YouTube' ? 'Subs' : 'Followers'}</span>
                </div>
                {s.posts && (
                  <>
                    <div style={{ height: 24, width: 1, background: '#2a2a2a' }}></div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                      <span style={{ fontFamily: 'var(--font-headline)', fontSize: '1.2rem', fontWeight: 900, color: '#fff' }}>{s.posts.split(' ')[0]}</span>
                      <span style={{ color: '#6b7280', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>{s.posts.split(' ').slice(1).join(' ')}</span>
                    </div>
                  </>
                )}
              </div>

              <p style={{ color: '#9ca3af', lineHeight: 1.7, fontSize: '0.9rem', flex: 1 }}>{s.desc}</p>

              <a href={s.url} target="_blank" rel="noopener noreferrer" style={{
                display: 'block', textAlign: 'center', padding: '11px 24px',
                background: s.color, color: '#fff',
                fontWeight: 700, fontSize: '0.85rem', borderRadius: 8,
                textDecoration: 'none', transition: 'opacity 0.2s',
                border: s.platform === 'X (Twitter)' ? '1px solid #333' : 'none',
              }}>{s.cta} →</a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
