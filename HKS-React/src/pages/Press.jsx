import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';

const mentions = [
  { outlet: 'Marathi Business Weekly', type: 'Feature Article', title: 'The Man Behind Marathi Digital Marketing', desc: 'An in-depth profile on how Kiran Hajare built a community of 10,000+ Marathi entrepreneurs from the ground up.', date: 'March 2024' },
  { outlet: 'EdTech Insider', type: 'Interview', title: 'AI Funnels Are the Future of Admission Marketing', desc: 'Kiran breaks down his proprietary AI-powered funnel system that has helped 200+ institutes automate their pipelines.', date: 'January 2024' },
  { outlet: 'Digital Maharashtra', type: 'Case Study', title: '₹47 Lakh in Admissions Using Meta Ads Alone', desc: 'A full breakdown of the exact campaign structure that generated ₹47 Lakh in collected admissions.', date: 'November 2023' },
  { outlet: 'Startup Grind Pune', type: 'Podcast Feature', title: 'Scaling Education: The Kiran Hajare Way', desc: 'A candid conversation about the Marathi business ecosystem and why vernacular marketing is the most underutilized growth lever.', date: 'August 2023' },
];

const logos = [
  { name: 'Full Color Logo', file: '/LOGO.png', bg: '#111' },
  { name: 'White / Reverse Logo', file: '/LOGO.webp', bg: '#0a0a0a' },
];

const photos = [
  { label: 'Professional Headshot', file: '/k1.webp' },
  { label: 'Circular Profile', file: '/circle-kiran-sir.png' },
];

export default function Press() {
  const [copied, setCopied] = useState(false);

  const copyBio = () => {
    const bio = `Kiran Hajare is a digital marketing strategist, speaker, and educator who has spent over a decade helping coaching institutes and Marathi entrepreneurs scale through Meta Ads, AI-powered funnels, and systematic business development. He is the founder of HelloKiranSir and has worked with 200+ institutes across India, generating crores in admissions revenue. Kiran is a sought-after speaker on the topics of vernacular marketing, admission funnel strategy, and transforming workers into business leaders.`;
    navigator.clipboard.writeText(bio).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <main style={{ background: 'transparent', minHeight: '100vh', color: '#d1d5db' }}>
      <SEO
        title="Press & Media — Kiran Hajare"
        description="Download Kiran Hajare's media bio, speaker reel, approved logos and photos. Available for speaking, interviews, and podcasts."
        path="/press"
        keywords="Kiran Hajare press, Kiran Hajare media kit, Kiran Hajare speaker, Kiran Hajare interview"
      />
      <PageHeader
        title="Press & Media"
        subtitle="Kiran is available for speaking, interviews, and podcasts. Download the media bio and press kit here."
        label="Media Kit"
      />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px 120px' }}>

        {/* ── SECTION 1: Media Bio ── */}
        <section className="pm-section" id="media-bio">
          <div className="pm-section-label">
            <span className="pm-label-dot"></span> Media Bio
          </div>
          <div className="pm-bio-card">
            <div className="pm-bio-left">
              <img src="/circle-kiran-sir.png" alt="Kiran Hajare" className="pm-bio-photo" />
              <div className="pm-bio-stats">
                <div className="pm-stat"><span>200+</span><p>Institutes Scaled</p></div>
                <div className="pm-stat"><span>10K+</span><p>Entrepreneurs</p></div>
                <div className="pm-stat"><span>10+</span><p>Years Experience</p></div>
              </div>
            </div>
            <div className="pm-bio-right">
              <h2 className="pm-bio-name">Kiran Hajare</h2>
              <p className="pm-bio-role">Digital Marketing Strategist · Speaker · Educator</p>
              <div className="pm-bio-divider"></div>
              <p className="pm-bio-text">
                Kiran Hajare is a digital marketing strategist, speaker, and educator who has spent over a decade helping coaching institutes and Marathi entrepreneurs scale through Meta Ads, AI-powered funnels, and systematic business development. He is the founder of HelloKiranSir and has worked with 200+ institutes across India, generating crores in admissions revenue.
              </p>
              <p className="pm-bio-text" style={{ marginTop: 16 }}>
                Kiran is a sought-after speaker on the topics of vernacular marketing, admission funnel strategy, and transforming workers into business leaders. His frameworks have been featured in regional business publications and adopted by institutes across Maharashtra and beyond.
              </p>
              <div className="pm-bio-actions">
                <button className="pm-btn-gold" onClick={copyBio}>
                  {copied ? '✓ Copied!' : '⎘ Copy Bio Text'}
                </button>
                <a href="/LOGO.png" download className="pm-btn-ghost">↓ Download Full Press Kit</a>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: Speaker Reel ── */}
        <section className="pm-section" id="speaker-reel">
          <div className="pm-section-label">
            <span className="pm-label-dot"></span> Speaker Reel
          </div>
          <div className="pm-reel-card">
            <div className="pm-reel-video">
              <video
                src="/KH.mp4"
                controls
                playsInline
                poster="/k1.webp"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 16 }}
              />
            </div>
            <div className="pm-reel-info">
              <h3 className="pm-reel-title">Kiran Hajare — Speaker Reel</h3>
              <p className="pm-reel-desc">
                Watch Kiran in action — from keynotes to intimate workshops, he brings clarity, energy and frameworks that move audiences to implement immediately.
              </p>
              <div className="pm-topics">
                <p style={{ fontSize: '0.7rem', color: '#666', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 12 }}>Speaking Topics</p>
                {['Meta Ads & Admission Funnels', 'AI in Education Marketing', 'Vernacular Business Growth', 'Workers to Business Leaders', 'Scaling Without Chaos'].map((t, i) => (
                  <div key={i} className="pm-topic-item">
                    <span className="pm-topic-dot"></span> {t}
                  </div>
                ))}
              </div>
              <button className="pm-btn-gold" style={{ marginTop: 28 }}>Book Kiran to Speak →</button>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: Approved Logos ── */}
        <section className="pm-section" id="approved-logos">
          <div className="pm-section-label">
            <span className="pm-label-dot"></span> Approved Logos
          </div>
          <p className="pm-section-sub">
            Please use only these approved logo assets in any media coverage, presentations, or publications. Do not alter colors, proportions, or add effects.
          </p>
          <div className="pm-logo-grid">
            {logos.map((logo, i) => (
              <div key={i} className="pm-logo-card" style={{ background: logo.bg }}>
                <div className="pm-logo-img-wrap">
                  <img src={logo.file} alt={logo.name} className="pm-logo-img" />
                </div>
                <div className="pm-logo-meta">
                  <span className="pm-logo-name">{logo.name}</span>
                  <a href={logo.file} download className="pm-logo-dl">↓ Download</a>
                </div>
              </div>
            ))}
            <div className="pm-logo-card pm-logo-card-dark">
              <div className="pm-logo-img-wrap" style={{ background: '#000' }}>
                <img src="/favicon.svg" alt="Icon Mark" style={{ width: 60, height: 60, objectFit: 'contain' }} />
              </div>
              <div className="pm-logo-meta">
                <span className="pm-logo-name">Icon Mark / Favicon</span>
                <a href="/favicon.svg" download className="pm-logo-dl">↓ Download SVG</a>
              </div>
            </div>
          </div>
          <div className="pm-usage-guidelines">
            <h4>Logo Usage Guidelines</h4>
            <div className="pm-guidelines-grid">
              <div className="pm-guideline pm-guideline-ok">
                <span>✓</span> Use on light or dark backgrounds with sufficient contrast
              </div>
              <div className="pm-guideline pm-guideline-ok">
                <span>✓</span> Maintain proportions — never stretch or compress
              </div>
              <div className="pm-guideline pm-guideline-no">
                <span>✗</span> Do not recolor, add drop shadows, or place on busy backgrounds
              </div>
              <div className="pm-guideline pm-guideline-no">
                <span>✗</span> Do not use unofficial or older logo versions
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 4: Approved Photos ── */}
        <section className="pm-section" id="approved-photos">
          <div className="pm-section-label">
            <span className="pm-label-dot"></span> Approved Photos
          </div>
          <p className="pm-section-sub">
            High-resolution photos approved for editorial, event, and media use. Credit: HelloKiranSir.com
          </p>
          <div className="pm-photos-grid">
            {photos.map((photo, i) => (
              <div key={i} className="pm-photo-card">
                <div className="pm-photo-img-wrap">
                  <img src={photo.file} alt={photo.label} className="pm-photo-img" />
                  <div className="pm-photo-overlay">
                    <a href={photo.file} download className="pm-photo-dl-btn">↓ Download</a>
                  </div>
                </div>
                <div className="pm-photo-label">{photo.label}</div>
              </div>
            ))}
            <div className="pm-photo-card pm-photo-request">
              <div className="pm-photo-request-inner">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#cf9d45" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                <p>Need a specific photo or higher resolution? Contact the team.</p>
                <a href="/contact" className="pm-btn-ghost" style={{ marginTop: 16, display: 'inline-block', textDecoration: 'none' }}>Request a Photo →</a>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 5: Press Mentions ── */}
        <section className="pm-section" id="press-mentions">
          <div className="pm-section-label">
            <span className="pm-label-dot"></span> Press Mentions
          </div>
          <div className="pm-mentions-grid">
            {mentions.map((m, i) => (
              <div key={i} className="pm-mention-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 14 }}>
                  <span className="pm-mention-type">{m.type}</span>
                  <span style={{ color: '#6b7280', fontSize: '0.75rem' }}>{m.date}</span>
                </div>
                <div className="pm-mention-outlet">{m.outlet}</div>
                <h3 className="pm-mention-title">{m.title}</h3>
                <p className="pm-mention-desc">{m.desc}</p>
                <div className="pm-mention-cta">Read Full Feature →</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Booking CTA ── */}
        <div className="pm-booking-banner">
          <div className="pm-booking-glow"></div>
          <div className="pm-booking-inner">
            <div className="pm-booking-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>
            </div>
            <h3 className="pm-booking-title">Book Kiran for Your Show or Event</h3>
            <p className="pm-booking-sub">Podcasts, summits, keynotes, or panel discussions — Kiran brings sharp insight, actionable frameworks, and real-world impact to every stage.</p>
            <div className="pm-booking-btns">
              <button className="pm-btn-gold">Book as Speaker →</button>
              <button className="pm-btn-ghost">View Speaking Topics</button>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        /* Section wrapper */
        .pm-section { margin-bottom: 100px; }
        .pm-section-label {
          display: flex; align-items: center; gap: 10px;
          font-size: 0.65rem; font-weight: 800; letter-spacing: 0.25em;
          text-transform: uppercase; color: #cf9d45; margin-bottom: 36px;
        }
        .pm-label-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #cf9d45; display: inline-block;
          box-shadow: 0 0 8px #cf9d45;
        }
        .pm-section-sub {
          color: #9ca3af; font-size: 0.97rem; line-height: 1.7;
          max-width: 680px; margin-bottom: 40px;
        }

        /* ── Media Bio ── */
        .pm-bio-card {
          display: flex; gap: 60px; align-items: flex-start;
          background: #0a0a0a; border: 1px solid #1a1a1a;
          border-radius: 32px; padding: 56px; flex-wrap: wrap;
        }
        .pm-bio-left { display: flex; flex-direction: column; align-items: center; gap: 32px; flex-shrink: 0; }
        .pm-bio-photo {
          width: 180px; height: 180px; object-fit: cover; border-radius: 50%;
          border: 3px solid rgba(207,157,69,0.3);
          box-shadow: 0 0 40px rgba(207,157,69,0.15);
        }
        .pm-bio-stats { display: flex; gap: 20px; }
        .pm-stat { text-align: center; }
        .pm-stat span { font-family: var(--font-headline); font-size: 1.4rem; font-weight: 900; color: #cf9d45; display: block; }
        .pm-stat p { font-size: 0.7rem; color: #666; text-transform: uppercase; letter-spacing: 0.08em; margin: 4px 0 0; }
        .pm-bio-right { flex: 1; min-width: 280px; }
        .pm-bio-name { font-family: var(--font-headline); font-size: 2.4rem; font-weight: 900; color: #fff; margin-bottom: 6px; }
        .pm-bio-role { color: #cf9d45; font-size: 0.9rem; font-weight: 600; margin-bottom: 24px; }
        .pm-bio-divider { width: 48px; height: 2px; background: #cf9d45; margin-bottom: 24px; border-radius: 99px; }
        .pm-bio-text { color: #9ca3af; line-height: 1.75; font-size: 0.97rem; }
        .pm-bio-actions { display: flex; gap: 16px; margin-top: 32px; flex-wrap: wrap; }

        /* ── Speaker Reel ── */
        .pm-reel-card {
          display: flex; gap: 48px; align-items: flex-start; flex-wrap: wrap;
          background: #0a0a0a; border: 1px solid #1a1a1a;
          border-radius: 32px; padding: 48px; overflow: hidden;
        }
        .pm-reel-video { flex: 1; min-width: 280px; height: 320px; border-radius: 16px; overflow: hidden; background: #000; border: 1px solid #1a1a1a; }
        .pm-reel-info { flex: 1; min-width: 260px; }
        .pm-reel-title { font-family: var(--font-headline); font-size: 1.8rem; font-weight: 900; color: #fff; margin-bottom: 12px; }
        .pm-reel-desc { color: #9ca3af; line-height: 1.7; margin-bottom: 28px; }
        .pm-topic-item { display: flex; align-items: center; gap: 10px; color: #d1d5db; font-size: 0.9rem; padding: 8px 0; border-bottom: 1px solid #111; }
        .pm-topic-dot { width: 5px; height: 5px; border-radius: 50%; background: #cf9d45; flex-shrink: 0; }

        /* ── Logos ── */
        .pm-logo-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px; margin-bottom: 40px; }
        .pm-logo-card {
          border: 1px solid #1a1a1a; border-radius: 20px; overflow: hidden;
          transition: border-color 0.3s; background: #111;
        }
        .pm-logo-card:hover { border-color: rgba(207,157,69,0.3); }
        .pm-logo-img-wrap { height: 180px; display: flex; align-items: center; justify-content: center; padding: 32px; }
        .pm-logo-img { max-width: 200px; max-height: 120px; object-fit: contain; }
        .pm-logo-meta { display: flex; justify-content: space-between; align-items: center; padding: 16px 20px; border-top: 1px solid #1a1a1a; }
        .pm-logo-name { font-size: 0.8rem; font-weight: 700; color: #9ca3af; }
        .pm-logo-dl { font-size: 0.8rem; font-weight: 700; color: #cf9d45; text-decoration: none; }
        .pm-logo-dl:hover { text-decoration: underline; }
        .pm-usage-guidelines { background: #0a0a0a; border: 1px solid #1a1a1a; border-radius: 20px; padding: 32px; }
        .pm-usage-guidelines h4 { color: #fff; font-weight: 800; margin-bottom: 20px; }
        .pm-guidelines-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .pm-guideline { font-size: 0.88rem; line-height: 1.5; padding: 12px 16px; border-radius: 10px; }
        .pm-guideline span { font-weight: 800; margin-right: 6px; }
        .pm-guideline-ok { background: rgba(16,185,129,0.06); color: #9ca3af; border: 1px solid rgba(16,185,129,0.12); }
        .pm-guideline-ok span { color: #10b981; }
        .pm-guideline-no { background: rgba(239,68,68,0.05); color: #9ca3af; border: 1px solid rgba(239,68,68,0.1); }
        .pm-guideline-no span { color: #ef4444; }

        /* ── Photos ── */
        .pm-photos-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 28px; }
        .pm-photo-card { border-radius: 20px; overflow: hidden; background: #0a0a0a; border: 1px solid #1a1a1a; transition: border-color 0.3s; }
        .pm-photo-card:hover { border-color: rgba(207,157,69,0.3); }
        .pm-photo-img-wrap { position: relative; height: 320px; overflow: hidden; }
        .pm-photo-img { width: 100%; height: 100%; object-fit: cover; object-position: top; transition: transform 0.5s ease; }
        .pm-photo-card:hover .pm-photo-img { transform: scale(1.04); }
        .pm-photo-overlay {
          position: absolute; inset: 0; background: rgba(0,0,0,0.5);
          display: flex; align-items: center; justify-content: center;
          opacity: 0; transition: opacity 0.3s;
        }
        .pm-photo-card:hover .pm-photo-overlay { opacity: 1; }
        .pm-photo-dl-btn {
          background: #cf9d45; color: #000; font-weight: 800; font-size: 0.85rem;
          padding: 12px 28px; border-radius: 8px; text-decoration: none;
        }
        .pm-photo-label { padding: 16px 20px; font-size: 0.85rem; font-weight: 700; color: #9ca3af; }
        .pm-photo-request { min-height: 320px; border: 1px dashed #222 !important; }
        .pm-photo-request-inner { height: 100%; min-height: 320px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 14px; padding: 40px 24px; text-align: center; color: #6b7280; font-size: 0.95rem; line-height: 1.6; }

        /* ── Press Mentions ── */
        .pm-mentions-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; }
        .pm-mention-card {
          background: #0a0a0a; border: 1px solid #1a1a1a; border-radius: 20px;
          padding: 32px; display: flex; flex-direction: column; gap: 12px;
          transition: border-color 0.3s, transform 0.3s; cursor: pointer;
        }
        .pm-mention-card:hover { border-color: rgba(207,157,69,0.3); transform: translateY(-4px); }
        .pm-mention-type { background: rgba(255,46,46,0.1); color: #ff6b6b; font-size: 0.65rem; font-weight: 800; letter-spacing: 0.15em; text-transform: uppercase; padding: 4px 10px; border-radius: 999px; border: 1px solid rgba(255,46,46,0.2); }
        .pm-mention-outlet { color: #cf9d45; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.08em; }
        .pm-mention-title { font-family: var(--font-headline); font-size: 1.1rem; font-weight: 900; color: #fff; line-height: 1.3; }
        .pm-mention-desc { color: #9ca3af; font-size: 0.92rem; line-height: 1.65; flex: 1; }
        .pm-mention-cta { color: #cf9d45; font-size: 0.82rem; font-weight: 700; }

        /* ── Booking Banner ── */
        .pm-booking-banner {
          position: relative; background: #0a0a0a;
          border: 1px solid #1a1a1a; border-radius: 32px; overflow: hidden;
          padding: 72px; text-align: center;
        }
        .pm-booking-glow {
          position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(circle at center, rgba(207,157,69,0.07) 0%, transparent 60%);
        }
        .pm-booking-inner { position: relative; z-index: 2; display: flex; flex-direction: column; align-items: center; gap: 16px; }
        .pm-booking-icon { width: 64px; height: 64px; background: rgba(207,157,69,0.1); border: 1px solid rgba(207,157,69,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #cf9d45; }
        .pm-booking-title { font-family: var(--font-headline); font-size: 2.2rem; font-weight: 900; color: #fff; }
        .pm-booking-sub { color: #9ca3af; max-width: 560px; line-height: 1.7; }
        .pm-booking-btns { display: flex; gap: 16px; margin-top: 8px; flex-wrap: wrap; justify-content: center; }

        /* ── Shared Buttons ── */
        .pm-btn-gold {
          background: #cf9d45; color: #000; border: none; border-radius: 10px;
          font-weight: 800; font-size: 0.9rem; padding: 14px 32px;
          cursor: pointer; transition: all 0.3s;
          box-shadow: 0 0 24px rgba(207,157,69,0.25);
        }
        .pm-btn-gold:hover { transform: scale(1.04); box-shadow: 0 0 40px rgba(207,157,69,0.4); }
        .pm-btn-ghost {
          background: transparent; color: #9ca3af; border: 1px solid #333;
          border-radius: 10px; font-weight: 700; font-size: 0.9rem;
          padding: 14px 28px; cursor: pointer; transition: all 0.3s;
        }
        .pm-btn-ghost:hover { border-color: #cf9d45; color: #cf9d45; }

        /* Responsive */
        @media (max-width: 768px) {
          .pm-bio-card, .pm-reel-card { padding: 32px 24px; }
          .pm-bio-stats { gap: 12px; }
          .pm-guidelines-grid { grid-template-columns: 1fr; }
          .pm-booking-banner { padding: 48px 24px; }
          .pm-booking-title { font-size: 1.6rem; }
        }
      `}</style>
    </main>
  );
}
