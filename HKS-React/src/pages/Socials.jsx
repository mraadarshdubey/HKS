import React from 'react';
import PageHeader from '../components/PageHeader';

const socials = [
  {
    platform: 'Facebook',
    handle: '@hellokiransheth',
    followers: '15K+',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>,
    desc: 'Daily tips, live sessions, and the go-to hub for the Marathi Business Tribe community. Join 15,000+ entrepreneurs.',
    color: '#1877f2',
    cta: 'Follow on Facebook',
    url: 'https://www.facebook.com/hellokiransheth/',
    badge: 'Most Active',
  },
  {
    platform: 'Instagram',
    handle: '@hellokiransheth',
    followers: '28K+',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>,
    desc: 'Visual strategy breakdowns, behind-the-scenes of live campaigns, reels on Meta Ads tactics that actually work.',
    color: '#e1306c',
    cta: 'Follow on Instagram',
    url: 'https://www.instagram.com/hellokiransheth/',
    badge: 'Top Reels',
  },
  {
    platform: 'LinkedIn',
    handle: 'Kiran Hajare',
    followers: '8K+',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>,
    desc: 'Long-form insights, professional case studies, and deep dives into educational marketing strategy for serious entrepreneurs.',
    color: '#0077b5',
    cta: 'Connect on LinkedIn',
    url: 'https://www.linkedin.com/in/kiranhajare/',
    badge: 'Thought Leadership',
  },
  {
    platform: 'X (Twitter)',
    handle: '@hellokiransheth',
    followers: '5K+',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>,
    desc: 'Raw unfiltered thoughts on digital marketing, business, and the Marathi entrepreneur ecosystem. Real-time insights.',
    color: '#1a1a1a',
    cta: 'Follow on X',
    url: 'https://x.com/hellokiransheth',
    badge: null,
  },
  {
    platform: 'WhatsApp Community',
    handle: 'Marathi Business Tribe',
    followers: '10K+',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>,
    desc: 'The inner circle. Direct access to tips, tools, strategies, and Kiran\'s personal recommendations — straight to your phone.',
    color: '#25d366',
    cta: 'Join Community',
    url: '#',
    badge: 'Free Access',
  },
  {
    platform: 'YouTube',
    handle: '@hellokiransheth',
    followers: '50K+',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.13 1 12 1 12s0 3.87.46 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.87 23 12 23 12s0-3.87-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>,
    desc: 'Deep-dive strategies, case studies, and complete blueprints to scale your admissions. Updated weekly.',
    color: '#ff0000',
    cta: 'Subscribe on YouTube',
    url: 'https://www.youtube.com/@hellokiransheth',
    badge: 'Masterclasses',
  },
  {
    platform: 'Telegram',
    handle: '@HelloKiranSheth',
    followers: '6K+',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>,
    desc: 'Exclusive resources, frameworks, and campaign templates shared only with Telegram subscribers. No spam. Just value.',
    color: '#0088cc',
    cta: 'Join Channel',
    url: 'https://t.me/hellokiransheth',
    badge: 'Exclusive Resources',
  },
];

export default function Socials() {
  return (
    <div style={{ background: 'transparent', minHeight: '100vh', color: '#d1d5db' }}>
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
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = s.color + '44'; e.currentTarget.style.boxShadow = `0 20px 48px rgba(0,0,0,0.4)`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = '#1a1a1a'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              {/* Top color accent */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: s.color }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: '50%', flexShrink: 0,
                    background: s.color + '18', border: `1px solid ${s.color}33`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem'
                  }}>{s.icon}</div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.05rem', fontWeight: 900, color: '#fff' }}>{s.platform}</h3>
                    <p style={{ color: '#6b7280', fontSize: '0.78rem', fontWeight: 600 }}>{s.handle}</p>
                  </div>
                </div>
                {s.badge && (
                  <span style={{
                    background: '#cf9d4518', color: '#cf9d45', border: '1px solid #cf9d4433',
                    fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.12em',
                    textTransform: 'uppercase', padding: '3px 10px', borderRadius: 999, flexShrink: 0
                  }}>{s.badge}</span>
                )}
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                <span style={{ fontFamily: 'var(--font-headline)', fontSize: '1.8rem', fontWeight: 900, color: s.color }}>{s.followers}</span>
                <span style={{ color: '#6b7280', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>Followers</span>
              </div>

              <p style={{ color: '#9ca3af', lineHeight: 1.7, fontSize: '0.9rem', flex: 1 }}>{s.desc}</p>

              <a href={s.url} style={{
                display: 'block', textAlign: 'center', padding: '11px 24px',
                background: s.color, color: '#fff',
                fontWeight: 700, fontSize: '0.85rem', borderRadius: 8,
                textDecoration: 'none', transition: 'opacity 0.2s',
                border: s.platform === 'X (Twitter)' ? '1px solid #333' : 'none',
              }}>{s.cta} →</a>
            </div>
          ))}
        </div>

        {/* WhatsApp Tribe CTA */}
        {/* <div style={{
          background: 'linear-gradient(135deg, rgba(37,211,102,0.12), rgba(37,211,102,0.04))',
          border: '1px solid rgba(37,211,102,0.25)', borderRadius: 20,
          padding: '56px 48px', textAlign: 'center'
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16, color: '#25d366' }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          </div>
          <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.8rem', fontWeight: 900, color: '#fff', marginBottom: 12 }}>
            Join the Marathi Business Tribe
          </h3>
          <p style={{ color: '#9ca3af', maxWidth: 520, margin: '0 auto 28px', lineHeight: 1.7 }}>
            10,000+ Marathi entrepreneurs already inside. Get daily tips, exclusive strategies, and direct access to Kiran's latest insights — no cost, no noise.
          </p>
          <button style={{
            background: '#25d366', color: '#000', fontWeight: 900, fontSize: '1rem',
            padding: '14px 40px', border: 'none', borderRadius: 8, cursor: 'pointer',
            boxShadow: '0 0 30px rgba(37,211,102,0.3)'
          }}>Join WhatsApp Community →</button>
        </div> */}
      </div>
    </div>
  );
}
