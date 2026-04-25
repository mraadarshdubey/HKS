import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';

const episodes = [
  { ep: 1, ytId: '8oGp61dIBHc', title: 'Kiran Hajare on Sales Funnel, Meta Ads & Attention Monetization', duration: '48 min', desc: '🎙 NEW PODCAST EPISODE WITH KIRAN HAJARE | Funnels, Monetization & Business Growth Revealed' },
  { ep: 2, ytId: 'nEmvI-Z81rw', title: 'मार्केटिंग करून छोटा बिझनेस "मोठा" करण्याचा फॉर्म्युला', duration: '42 min', desc: 'बहुतेक छोटे छोटे बिझनेस मोठे होऊ शकत नाहीत - कारण एकच - त्यांना मार्केटिंगचं तंत्र अवगत झालेलं नसतं!' },
  { ep: 3, ytId: 'o5bmttwprE8', title: 'Mastering Facebook & Instagram Ads: Boost Your Business Growth', duration: '55 min', desc: 'Learn how to run successful Facebook and Instagram ads. In-depth strategies and tips to optimize your ad campaigns and grow your business.' },
  { ep: 4, ytId: 'qgpN24cTIDY', title: 'Digital Marketing (डिजिटल मार्केटिंग) for Business | Kiran Hajare', duration: '38 min', desc: 'In this episode, Kiran Hajare — a leading expert in Facebook and Instagram Meta Ads — shares deep insights on digital marketing for business growth.' },
  // { ep: 5, title: '₹47 Lakh Case Study Breakdown', duration: '61 min', desc: 'The actual campaign data, targeting strategy, and copy breakdown from the campaign that generated ₹47 Lakh in collected admissions.' },
  // { ep: 6, title: 'Building a Brand That Sells for You', duration: '44 min', desc: 'Authority positioning, content leverage, and why institutes with strong brands pay less per lead and close more admissions.' },
];

export default function Podcasts() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <div style={{ background: 'transparent', minHeight: '100vh', color: '#d1d5db' }}>
      <PageHeader
        title="Podcasts"
        subtitle="Deep strategic audio sessions for institute owners who want to grow faster and smarter."
        label="Listen & Grow"
      />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px 100px' }}>

        {/* Listen On Badges 
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <p style={{ color: '#6b7280', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 20 }}>Available On</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { label: 'Spotify', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg> },
              { label: 'Apple Podcasts', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="22"></line></svg> },
              { label: 'YouTube', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> },
              { label: 'Google Podcasts', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="22"></line></svg> }
            ].map((p, i) => (
              <button key={i} style={{
                background: '#111', border: '1px solid #333', color: '#fff',
                padding: '10px 24px', borderRadius: 999, fontSize: '0.85rem', fontWeight: 600,
                cursor: 'pointer', transition: 'all 0.2s'
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#cf9d4566'; e.currentTarget.style.color = '#cf9d45'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.color = '#fff'; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  {p.icon}
                  {p.label}
                </div>
              </button>
            ))}
          </div>
        </div>
        */}

        {/* Featured Episode 
        <div style={{
          background: 'linear-gradient(135deg, #111 0%, rgba(207,157,69,0.06))',
          border: '1px solid rgba(207,157,69,0.25)', borderRadius: 24,
          padding: '48px', marginBottom: 64, display: 'flex', gap: 36, alignItems: 'center', flexWrap: 'wrap'
        }}>
          <div style={{
            width: 100, height: 100, borderRadius: '50%', flexShrink: 0,
            background: '#cf9d45', display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 40px rgba(207,157,69,0.4)', cursor: 'pointer',
            transition: 'transform 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="#000"><path d="M5 3l14 9-14 9V3z" /></svg>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', gap: 12, marginBottom: 12, flexWrap: 'wrap' }}>
              <span style={{ background: '#cf9d4522', color: '#cf9d45', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: 999, border: '1px solid #cf9d4533' }}>Featured Episode</span>
              <span style={{ color: '#6b7280', fontSize: '0.8rem' }}>61 min</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.8rem', fontWeight: 900, color: '#fff', marginBottom: 10 }}>
              ₹47 Lakh Case Study Breakdown
            </h2>
            <p style={{ color: '#9ca3af', lineHeight: 1.7 }}>
              The actual campaign data, targeting strategy, and copy breakdown from the campaign that generated ₹47 Lakh in collected admissions. No filter. Full numbers.
            </p>
          </div>
        </div>
        */}

        {/* All Episodes Grid */}
        <div style={{ marginBottom: 24 }}>
          <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.6rem', fontWeight: 900, color: '#fff', marginBottom: 32 }}>All Episodes</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {episodes.map((ep) => (
              <div key={ep.ep} style={{
                background: '#111', border: '1px solid #1a1a1a', borderRadius: 18,
                padding: '28px', display: 'flex', flexDirection: 'column', gap: 14,
                transition: 'transform 0.3s, border-color 0.3s',
                cursor: 'pointer',
              }}
                onClick={() => ep.ytId && setActiveVideo(ep.ytId)}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = '#cf9d4433'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = '#1a1a1a'; }}
              >
                {/* Thumbnail */}
                <div style={{
                  borderRadius: 12, aspectRatio: '16/9',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  position: 'relative', overflow: 'hidden', background: '#0d0d0d'
                }}>
                  {ep.ytId ? (
                    <img
                      src={`https://img.youtube.com/vi/${ep.ytId}/maxresdefault.jpg`}
                      alt={ep.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      onError={e => { e.currentTarget.src = `https://img.youtube.com/vi/${ep.ytId}/hqdefault.jpg`; }}
                    />
                  ) : (
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #1a1a1a, #0d0d0d)' }} />
                  )}
                  {/* Dark overlay on hover */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'rgba(0,0,0,0.35)',
                    transition: 'background 0.3s'
                  }} className="thumb-overlay" />
                  {/* Play Button */}
                  <div style={{
                    position: 'absolute',
                    width: 56, height: 56, borderRadius: '50%',
                    background: '#cf9d45',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 0 24px rgba(207,157,69,0.6)', zIndex: 2,
                    transition: 'transform 0.2s, box-shadow 0.2s'
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#000"><path d="M5 3l14 9-14 9V3z" /></svg>
                  </div>
                  <span style={{
                    position: 'absolute', bottom: 10, right: 10,
                    background: 'rgba(0,0,0,0.75)', color: '#fff', fontSize: '0.7rem',
                    fontWeight: 700, padding: '3px 8px', borderRadius: 4, zIndex: 3
                  }}>{ep.duration}</span>
                </div>
                <span style={{ color: '#cf9d45', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em' }}>Episode {ep.ep}</span>
                <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.05rem', fontWeight: 900, color: '#fff', lineHeight: 1.3 }}>{ep.title}</h3>
                <p style={{ color: '#9ca3af', fontSize: '0.88rem', lineHeight: 1.65, flex: 1 }}>{ep.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Subscribe CTA
        <div style={{
          background: '#111', border: '1px solid #222', borderRadius: 20,
          padding: '48px', textAlign: 'center', marginTop: 64
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16, color: '#cf9d45' }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="22"></line></svg>
          </div>
          <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.8rem', fontWeight: 900, color: '#fff', marginBottom: 12 }}>Never Miss an Episode</h3>
          <p style={{ color: '#9ca3af', maxWidth: 480, margin: '0 auto 28px', lineHeight: 1.7 }}>New episodes drop every Monday. Strategic, tactical, and rooted in real campaign data. Subscribe and get notified instantly.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{ background: '#cf9d45', color: '#000', fontWeight: 800, fontSize: '0.95rem', padding: '13px 32px', border: 'none', borderRadius: 8, cursor: 'pointer' }}>Subscribe on Spotify →</button>
            <button style={{ background: 'transparent', color: '#cf9d45', fontWeight: 700, fontSize: '0.9rem', padding: '13px 28px', border: '1px solid #cf9d4555', borderRadius: 8, cursor: 'pointer' }}>Apple Podcasts</button>
          </div>
        </div>
        */}
      </div>
      {/* Video Popup Modal */}
      {activeVideo && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(10px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px'
        }} onClick={() => setActiveVideo(null)}>
          <div style={{
            position: 'relative', width: '100%', maxWidth: '1000px', aspectRatio: '16/9',
            background: '#000', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 30px 80px rgba(0,0,0,0.6)',
            border: '1px solid rgba(207,157,69,0.3)'
          }} onClick={e => e.stopPropagation()}>
            <button onClick={() => setActiveVideo(null)} style={{
              position: 'absolute', top: '16px', right: '16px', background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff', width: '40px', height: '40px', borderRadius: '50%', fontSize: '1.5rem', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s', zIndex: 10
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#cf9d45'; e.currentTarget.style.color = '#000'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.6)'; e.currentTarget.style.color = '#fff'; }}
            >&times;</button>
            <iframe 
              width="100%" 
              height="100%" 
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
