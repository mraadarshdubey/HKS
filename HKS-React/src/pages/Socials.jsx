import React from 'react';
import PageHeader from '../components/PageHeader';

const socials = [
  {
    platform: 'Facebook',
    handle: '@KiranHajareOfficial',
    followers: '15K+',
    icon: '📘',
    desc: 'Daily tips, live sessions, and the go-to hub for the Marathi Business Tribe community. Join 15,000+ entrepreneurs.',
    color: '#1877f2',
    cta: 'Follow on Facebook',
    url: '#',
    badge: 'Most Active',
  },
  {
    platform: 'Instagram',
    handle: '@kiran_hajare',
    followers: '28K+',
    icon: '📸',
    desc: 'Visual strategy breakdowns, behind-the-scenes of live campaigns, reels on Meta Ads tactics that actually work.',
    color: '#e1306c',
    cta: 'Follow on Instagram',
    url: '#',
    badge: 'Top Reels',
  },
  {
    platform: 'LinkedIn',
    handle: 'Kiran Hajare',
    followers: '8K+',
    icon: '💼',
    desc: 'Long-form insights, professional case studies, and deep dives into educational marketing strategy for serious entrepreneurs.',
    color: '#0077b5',
    cta: 'Connect on LinkedIn',
    url: '#',
    badge: 'Thought Leadership',
  },
  {
    platform: 'X (Twitter)',
    handle: '@KiranHajare_',
    followers: '5K+',
    icon: '✖',
    desc: 'Raw unfiltered thoughts on digital marketing, business, and the Marathi entrepreneur ecosystem. Real-time insights.',
    color: '#1a1a1a',
    cta: 'Follow on X',
    url: '#',
    badge: null,
  },
  {
    platform: 'WhatsApp Community',
    handle: 'Marathi Business Tribe',
    followers: '10K+',
    icon: '💬',
    desc: 'The inner circle. Direct access to tips, tools, strategies, and Kiran\'s personal recommendations — straight to your phone.',
    color: '#25d366',
    cta: 'Join Community',
    url: '#',
    badge: 'Free Access',
  },
  {
    platform: 'Telegram',
    handle: '@HelloKiranSheth',
    followers: '6K+',
    icon: '✈️',
    desc: 'Exclusive resources, frameworks, and campaign templates shared only with Telegram subscribers. No spam. Just value.',
    color: '#0088cc',
    cta: 'Join Channel',
    url: '#',
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
        <div style={{
          background: 'linear-gradient(135deg, rgba(37,211,102,0.12), rgba(37,211,102,0.04))',
          border: '1px solid rgba(37,211,102,0.25)', borderRadius: 20,
          padding: '56px 48px', textAlign: 'center'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: 16 }}>💬</div>
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
        </div>
      </div>
    </div>
  );
}
