import React from 'react';
import PageHeader from '../components/PageHeader';

const platforms = [
  {
    name: 'AdmissionOS',
    tagline: 'The All-in-One Admission Command Centre',
    desc: 'A SaaS dashboard built specifically for coaching institutes to track leads, run follow-up automations, and monitor admission conversion rates in real-time.',
    icon: '🚀',
    status: 'Live',
    statusColor: '#22c55e',
    features: ['Lead Pipeline CRM', 'WhatsApp Auto Follow-up', 'Admission Funnel Analytics', 'AI Lead Scoring'],
    color: '#cf9d45',
  },
  {
    name: 'FunnelForge',
    tagline: 'AI-Powered Funnel Builder for Education',
    desc: 'Drag-and-drop funnel builder with pre-built templates optimized for educational institutes. No developer needed — launch in 48 hours.',
    icon: '⚡',
    status: 'Beta',
    statusColor: '#3b82f6',
    features: ['50+ Institute Templates', 'Meta Ads Integration', 'SMS + Email Automation', 'A/B Testing'],
    color: '#ff2e2e',
  },
  {
    name: 'MarathiAds.io',
    tagline: 'Vernacular Ad Copy Intelligence',
    desc: 'AI that writes high-converting Meta Ad copies in Marathi — trained on data from real campaigns that generated lakhs in admissions.',
    icon: '🧠',
    status: 'Coming Soon',
    statusColor: '#cf9d45',
    features: ['AI Marathi Copywriting', 'Audience Profiling', 'Ad Performance Predictions', 'Cultural Context Engine'],
    color: '#cf9d45',
  },
];

export default function Platforms() {
  return (
    <div style={{ background: 'transparent', minHeight: '100vh', color: '#d1d5db' }}>
      <PageHeader
        title="Software Platforms"
        subtitle="Purpose-built digital tools to give every institute an unfair advantage."
        label="My Companies"
      />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px 100px' }}>

        {/* Intro */}
        <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 72px' }}>
          <p style={{ fontSize: '1.1rem', color: '#9ca3af', lineHeight: 1.8 }}>
            Most software is built for everyone — which means it's optimized for no one. These platforms are built exclusively for Indian coaching institutes and Marathi entrepreneurs who want to dominate their market.
          </p>
        </div>

        {/* Platform Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 40, marginBottom: 80 }}>
          {platforms.map((p, i) => (
            <div key={i} style={{
              background: '#111', border: '1px solid #1e1e1e', borderRadius: 24,
              overflow: 'hidden', display: 'grid',
              gridTemplateColumns: i % 2 === 0 ? '1fr 1.3fr' : '1.3fr 1fr',
              transition: 'box-shadow 0.3s',
            }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = `0 24px 56px rgba(0,0,0,0.4)`}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
              className="platform-card"
            >
              {/* Visual panel */}
              {i % 2 !== 0 && (
                <div style={{
                  background: `linear-gradient(135deg, #1a1a1a, #0d0d0d)`,
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  padding: '64px', position: 'relative', overflow: 'hidden', minHeight: 280,
                  borderRight: `1px solid #1e1e1e`, order: i % 2 !== 0 ? -1 : 1
                }}>
                  <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at center, ${p.color}12, transparent 70%)` }} />
                  <div style={{ fontSize: '5rem', zIndex: 1, marginBottom: 20 }}>{p.icon}</div>
                  <div style={{
                    zIndex: 1, background: p.statusColor + '22', border: `1px solid ${p.statusColor}44`,
                    color: p.statusColor, fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.15em',
                    textTransform: 'uppercase', padding: '4px 16px', borderRadius: 999
                  }}>{p.status}</div>
                </div>
              )}

              {/* Info Panel */}
              <div style={{ padding: '48px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ color: p.color, fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12 }}>Platform</div>
                <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: '2rem', fontWeight: 900, color: '#fff', marginBottom: 8 }}>{p.name}</h2>
                <p style={{ color: '#cf9d45', fontWeight: 600, fontSize: '1rem', marginBottom: 18, fontStyle: 'italic' }}>{p.tagline}</p>
                <p style={{ color: '#9ca3af', lineHeight: 1.75, marginBottom: 28 }}>{p.desc}</p>
                {/* Features */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 28 }}>
                  {p.features.map((f, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#e5e7eb', fontSize: '0.85rem', fontWeight: 500 }}>
                      <span style={{ color: p.color, flexShrink: 0 }}>✓</span> {f}
                    </div>
                  ))}
                </div>
                <button style={{
                  alignSelf: 'flex-start', padding: '12px 28px',
                  background: p.status === 'Live' ? p.color : 'transparent',
                  color: p.status === 'Live' ? '#000' : p.color,
                  border: `1px solid ${p.color}55`, borderRadius: 8,
                  fontWeight: 800, fontSize: '0.85rem', cursor: 'pointer',
                  textTransform: 'uppercase', letterSpacing: '0.05em',
                  transition: 'all 0.2s'
                }}>
                  {p.status === 'Live' ? 'Explore Platform →' : p.status === 'Beta' ? 'Join Beta →' : 'Get Notified →'}
                </button>
              </div>

              {/* Visual panel (right side) */}
              {i % 2 === 0 && (
                <div style={{
                  background: `linear-gradient(135deg, #1a1a1a, #0d0d0d)`,
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  padding: '64px', position: 'relative', overflow: 'hidden', minHeight: 280,
                  borderLeft: `1px solid #1e1e1e`
                }}>
                  <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at center, ${p.color}12, transparent 70%)` }} />
                  <div style={{ fontSize: '5rem', zIndex: 1, marginBottom: 20 }}>{p.icon}</div>
                  <div style={{
                    zIndex: 1, background: p.statusColor + '22', border: `1px solid ${p.statusColor}44`,
                    color: p.statusColor, fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.15em',
                    textTransform: 'uppercase', padding: '4px 16px', borderRadius: 999
                  }}>{p.status}</div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(207,157,69,0.12), rgba(255,46,46,0.08))',
          border: '1px solid rgba(207,157,69,0.2)', borderRadius: 20,
          padding: '56px 48px', textAlign: 'center'
        }}>
          <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.8rem', fontWeight: 900, color: '#fff', marginBottom: 12 }}>
            Want Early Access to Any Platform?
          </h3>
          <p style={{ color: '#9ca3af', maxWidth: 540, margin: '0 auto 28px', lineHeight: 1.7 }}>
            Get priority onboarding, beta access, and direct support. Apply below and our team will reach out within 48 hours.
          </p>
          <button style={{
            background: '#cf9d45', color: '#000', fontWeight: 800, fontSize: '1rem',
            padding: '14px 40px', border: 'none', borderRadius: 8, cursor: 'pointer',
            boxShadow: '0 0 30px rgba(207,157,69,0.3)'
          }}>Apply for Early Access →</button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .platform-card { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
