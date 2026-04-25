import React from 'react';
import PageHeader from '../components/PageHeader';

const mentions = [
  { outlet: 'Marathi Business Weekly', type: 'Feature Article', title: 'The Man Behind Marathi Digital Marketing', desc: 'An in-depth profile on how Kiran Hajare built a community of 10,000+ Marathi entrepreneurs from the ground up.', date: 'March 2024' },
  { outlet: 'EdTech Insider', type: 'Interview', title: 'AI Funnels Are the Future of Admission Marketing', desc: 'Kiran breaks down his proprietary AI-powered funnel system that has helped 200+ institutes automate their pipelines.', date: 'January 2024' },
  { outlet: 'Digital Maharashtra', type: 'Case Study', title: '₹47 Lakh in Admissions Using Meta Ads Alone', desc: 'A full breakdown of the exact campaign structure that generated ₹47 Lakh in collected admissions for private coaching institutes.', date: 'November 2023' },
  { outlet: 'Startup Grind Pune', type: 'Podcast Feature', title: 'Scaling Education: The Kiran Hajare Way', desc: 'A candid conversation about the Marathi business ecosystem and why vernacular marketing is the most underutilized growth lever.', date: 'August 2023' },
  { outlet: 'The Growth Academy', type: 'Guest Speaker', title: 'Keynote: The Predictable Admission Machine', desc: 'Kiran addressed 500+ institute owners on building systematic admission pipelines that work without daily intervention.', date: 'May 2023' },
  { outlet: 'Local Business Summit', type: 'Panel', title: 'Vernacular Marketing: The Next Frontier', desc: 'Panel discussion with top regional marketers on the power of local-language digital campaigns.', date: 'February 2023' },
];

export default function Press() {
  return (
    <div style={{ background: 'transparent', minHeight: '100vh', color: '#d1d5db' }}>
      <PageHeader
        title="Press & Media"
        subtitle="Features, interviews, keynotes and media mentions that document the journey."
        label="In The News"
      />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px 100px' }}>

        {/* Media Kit Banner */}
        <div style={{
          display: 'flex', gap: 32, alignItems: 'center', flexWrap: 'wrap',
          background: 'linear-gradient(135deg, #111 0%, rgba(207,157,69,0.06))',
          border: '1px solid #222', borderRadius: 20, padding: '36px 40px',
          marginBottom: 72
        }}>
          <div style={{ flex: 1 }}>
            <div style={{ color: '#cf9d45', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12 }}>For Journalists & Creators</div>
            <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.6rem', fontWeight: 900, color: '#fff', marginBottom: 10 }}>Download the Official Media Kit</h2>
            <p style={{ color: '#9ca3af', lineHeight: 1.7 }}>Bio, high-resolution photos, brand assets, and speaking topics — everything you need for a feature or interview.</p>
          </div>
          <button style={{
            flexShrink: 0, background: '#cf9d45', color: '#000',
            fontWeight: 800, fontSize: '0.9rem', padding: '14px 32px',
            border: 'none', borderRadius: 10, cursor: 'pointer',
            boxShadow: '0 0 24px rgba(207,157,69,0.3)', whiteSpace: 'nowrap',
            transition: 'all 0.2s'
          }}>↓ Get Media Kit</button>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', gap: 12, marginBottom: 40, flexWrap: 'wrap' }}>
          {['All', 'Feature Article', 'Interview', 'Case Study', 'Podcast Feature', 'Guest Speaker', 'Panel'].map((tab, i) => (
            <button key={i} style={{
              padding: '8px 20px', borderRadius: 999, fontSize: '0.8rem', fontWeight: 700,
              cursor: 'pointer', transition: 'all 0.2s',
              background: i === 0 ? '#cf9d45' : 'transparent',
              color: i === 0 ? '#000' : '#9ca3af',
              border: i === 0 ? 'none' : '1px solid #333',
            }}>
              {tab}
            </button>
          ))}
        </div>

        {/* Press Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, marginBottom: 80 }}>
          {mentions.map((m, i) => (
            <div key={i} style={{
              background: '#111', border: '1px solid #1e1e1e', borderRadius: 16,
              padding: '32px', display: 'flex', flexDirection: 'column', gap: 14,
              transition: 'border-color 0.3s, transform 0.3s',
              cursor: 'pointer',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#cf9d4544'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#1e1e1e'; e.currentTarget.style.transform = 'none'; }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                <span style={{
                  background: 'rgba(255,46,46,0.1)', color: '#ff2e2e',
                  fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.15em',
                  textTransform: 'uppercase', padding: '4px 10px', borderRadius: 999,
                  border: '1px solid rgba(255,46,46,0.2)', whiteSpace: 'nowrap'
                }}>{m.type}</span>
                <span style={{ color: '#6b7280', fontSize: '0.75rem', flexShrink: 0 }}>{m.date}</span>
              </div>
              <div style={{ color: '#cf9d45', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{m.outlet}</div>
              <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.1rem', fontWeight: 900, color: '#fff', lineHeight: 1.3 }}>{m.title}</h3>
              <p style={{ color: '#9ca3af', fontSize: '0.92rem', lineHeight: 1.65, flex: 1 }}>{m.desc}</p>
              <div style={{ color: '#cf9d45', fontSize: '0.82rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6 }}>
                Read Full Feature <span>→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Banner */}
        <div style={{
          background: '#111', border: '1px solid #222', borderRadius: 20,
          padding: '56px 48px', textAlign: 'center'
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16, color: '#cf9d45' }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="22"></line></svg>
          </div>
          <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.8rem', fontWeight: 900, color: '#fff', marginBottom: 12 }}>Book Kiran for Your Show or Event</h3>
          <p style={{ color: '#9ca3af', maxWidth: 540, margin: '0 auto 28px', lineHeight: 1.7 }}>
            Podcasts, summits, keynotes, or panel discussions — Kiran brings sharp insight, actionable frameworks, and real-world impact to every stage.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              background: '#cf9d45', color: '#000', fontWeight: 800, fontSize: '0.95rem',
              padding: '14px 36px', border: 'none', borderRadius: 8, cursor: 'pointer'
            }}>Book as Speaker →</button>
            <button style={{
              background: 'transparent', color: '#cf9d45', fontWeight: 700, fontSize: '0.9rem',
              padding: '14px 32px', border: '1px solid #cf9d4555', borderRadius: 8, cursor: 'pointer'
            }}>View Speaking Topics</button>
          </div>
        </div>
      </div>
    </div>
  );
}
