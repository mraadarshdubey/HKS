import React from 'react';
import PageHeader from '../components/PageHeader';

const books = [
  {
    title: 'The Admission Machine',
    subtitle: 'Engineering Predictable Enrollments',
    desc: 'A step-by-step playbook that breaks down exactly how to set up a Meta Ads funnel that fills seats on autopilot — no guesswork, no wasted budget.',
    tag: 'Funnel Strategy',
    color: '#cf9d45',
    status: 'Coming Soon',
  },
  {
    title: 'Beyond Organic',
    subtitle: 'Paid Traffic for Education Institutes',
    desc: 'The complete guide to moving past WhatsApp forwards and referrals into systematic paid acquisition that scales without you being in the room.',
    tag: 'Paid Ads Mastery',
    color: '#ff2e2e',
    status: 'Coming Soon',
  },
  {
    title: 'Marathi Growth Code',
    subtitle: 'Growing Businesses in the Vernacular Economy',
    desc: 'How Marathi entrepreneurs can dominate local markets using digital systems built for the Marathi-speaking audience — in language, culture, and context.',
    tag: 'Local Business',
    color: '#cf9d45',
    status: 'Coming Soon',
  },
];

export default function Books() {
  return (
    <div style={{ background: 'transparent', minHeight: '100vh', color: '#d1d5db' }}>
      <PageHeader
        title="Kiran's Books"
        subtitle="Distilled frameworks — from years of scaling institutes — condensed into actionable playbooks."
        label="Written Knowledge"
      />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px 100px' }}>
        {/* Intro Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #111 60%, rgba(207,157,69,0.08))',
          border: '1px solid #222', borderRadius: 20, padding: '40px 48px',
          marginBottom: 72, display: 'flex', alignItems: 'center', gap: 28, flexWrap: 'wrap'
        }}>
          <div style={{ fontSize: '3.5rem' }}>📖</div>
          <div>
            <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.5rem', color: '#fff', fontWeight: 900, marginBottom: 8 }}>
              Knowledge You Won't Find on YouTube
            </h2>
            <p style={{ color: '#9ca3af', maxWidth: 600, lineHeight: 1.7 }}>
              Each book is a distilled vault of real-world campaigns, client data, and battle-tested frameworks. No fluff. No theory. Just proven systems.
            </p>
          </div>
        </div>

        {/* Book Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32, marginBottom: 80 }}>
          {books.map((book, i) => (
            <div key={i} style={{
              background: '#111', border: '1px solid #222', borderRadius: 20,
              overflow: 'hidden', display: 'flex', flexDirection: 'column',
              transition: 'transform 0.3s, border-color 0.3s, box-shadow 0.3s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = book.color + '55';
                e.currentTarget.style.boxShadow = `0 24px 48px rgba(0,0,0,0.4)`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#222';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Book Cover Mock */}
              <div style={{
                background: `linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)`,
                padding: '48px 32px', display: 'flex', flexDirection: 'column',
                alignItems: 'flex-start', position: 'relative', overflow: 'hidden', minHeight: 220,
                borderBottom: `3px solid ${book.color}`
              }}>
                {/* Decorative lines */}
                <div style={{ position: 'absolute', top: 0, right: 0, width: 120, height: 120, background: `radial-gradient(circle, ${book.color}20, transparent 70%)` }} />
                <div style={{
                  fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.2em',
                  textTransform: 'uppercase', color: book.color, marginBottom: 16,
                  background: `${book.color}18`, padding: '4px 12px', borderRadius: 999,
                  border: `1px solid ${book.color}44`
                }}>{book.tag}</div>
                <h3 style={{
                  fontFamily: 'var(--font-headline)', fontSize: '1.6rem', fontWeight: 900,
                  color: '#fff', lineHeight: 1.15, marginBottom: 8
                }}>{book.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#6b7280', fontWeight: 600, fontStyle: 'italic' }}>{book.subtitle}</p>
                <div style={{
                  position: 'absolute', bottom: 16, right: 16,
                  background: '#000', color: book.color, fontSize: '0.65rem',
                  fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em',
                  padding: '4px 12px', borderRadius: 999, border: `1px solid ${book.color}33`
                }}>{book.status}</div>
              </div>

              {/* Book Info */}
              <div style={{ padding: '28px 32px', flex: 1 }}>
                <p style={{ color: '#9ca3af', lineHeight: 1.75, fontSize: '0.96rem' }}>{book.desc}</p>
              </div>

              {/* CTA */}
              <div style={{ padding: '0 32px 28px' }}>
                <button style={{
                  width: '100%', padding: '12px 24px',
                  background: 'transparent', border: `1px solid ${book.color}55`,
                  color: book.color, fontWeight: 700, fontSize: '0.85rem',
                  borderRadius: 8, cursor: 'pointer', letterSpacing: '0.05em',
                  textTransform: 'uppercase', transition: 'all 0.2s'
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = book.color; e.currentTarget.style.color = '#000'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = book.color; }}
                >
                  Notify Me on Launch →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Early Access Banner */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(207,157,69,0.15), rgba(255,46,46,0.1))',
          border: '1px solid rgba(207,157,69,0.25)', borderRadius: 20,
          padding: '48px', textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: 16 }}>✍️</div>
          <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.8rem', fontWeight: 900, color: '#fff', marginBottom: 12 }}>Currently Writing</h3>
          <p style={{ color: '#9ca3af', maxWidth: 540, margin: '0 auto', lineHeight: 1.7 }}>
            Kiran is actively documenting battle-tested frameworks into these playbooks. Want early access? Join the waitlist and get notified first.
          </p>
          <button style={{
            marginTop: 28, padding: '14px 36px',
            background: '#cf9d45', color: '#000',
            border: 'none', borderRadius: 8, fontWeight: 800,
            fontSize: '1rem', cursor: 'pointer',
            boxShadow: '0 0 30px rgba(207,157,69,0.35)', transition: 'all 0.2s'
          }}>Join the Waitlist →</button>
        </div>
      </div>
    </div>
  );
}
