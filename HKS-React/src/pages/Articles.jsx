import React from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';

const articles = [
  {
    cat: 'Meta Ads',
    tag: '#funnels',
    title: 'The 5-Step Admission Funnel That Fills Coaching Seats in 30 Days',
    excerpt: 'Stop running ads without a system. This framework has generated over ₹47 Lakh in collected admissions for institutes that had never run a single ad before.',
    readTime: '8 min read',
    date: 'April 14, 2024',
    featured: true,
  },
  {
    cat: 'Case Study',
    tag: '#results',
    title: 'From 0 to 200 Admissions: A Maharashtra Coaching Institute Case Study',
    excerpt: 'Full data breakdown of a 90-day Meta Ads campaign that took one Nashik-based institute from empty classrooms to a 3-month waiting list.',
    readTime: '12 min read',
    date: 'March 28, 2024',
    featured: false,
  },
  {
    cat: 'AI & Automation',
    tag: '#ai',
    title: 'Why AI Follow-Up Systems Are the New Admission Manager',
    excerpt: 'Manual WhatsApp follow-ups are costing you 60% of your leads. Here\'s how to set up an AI system that converts leads while you sleep.',
    readTime: '7 min read',
    date: 'March 10, 2024',
    featured: false,
  },
  {
    cat: 'Vernacular Marketing',
    tag: '#marathi',
    title: 'Why Marathi Ads Outperform English Ads 2:1 for Local Institutes',
    excerpt: 'Data from 200+ campaigns proves that language is not just communication — it\'s trust. Here\'s how to use vernacular strategy to dominate your local market.',
    readTime: '9 min read',
    date: 'February 22, 2024',
    featured: false,
  },
  {
    cat: 'Mindset',
    tag: '#identity',
    title: 'The Identity Shift Every Institute Owner Must Make Before Scaling',
    excerpt: 'External systems can only take you as far as your internal identity allows. The ceiling of your business is the ceiling of your self-concept.',
    readTime: '6 min read',
    date: 'February 8, 2024',
    featured: false,
  },
  {
    cat: 'Strategy',
    tag: '#growth',
    title: 'The 3 Numbers Every Coaching Institute Owner Must Track Weekly',
    excerpt: 'Cost per lead. Cost per conversion. Lifetime value. If you\'re not tracking these three, you\'re flying blind. Here\'s the exact dashboard to build.',
    readTime: '5 min read',
    date: 'January 30, 2024',
    featured: false,
  },
];

const catColors = {
  'Meta Ads': '#ff2e2e',
  'Case Study': '#cf9d45',
  'AI & Automation': '#3b82f6',
  'Vernacular Marketing': '#10b981',
  'Mindset': '#a78bfa',
  'Strategy': '#cf9d45',
};

export default function Articles() {
  const [active, setActive] = React.useState('All');
  const [email, setEmail]   = React.useState('');
  const [status, setStatus] = React.useState('idle'); // idle | loading | success | error
  const [msg, setMsg]       = React.useState('');

  const cats = ['All', 'Meta Ads', 'Case Study', 'AI & Automation', 'Vernacular Marketing', 'Mindset', 'Strategy'];
  const filtered = active === 'All' ? articles : articles.filter(a => a.cat === active);
  const featured = articles.find(a => a.featured);
  const rest = filtered.filter(a => !a.featured);

  const handleSubscribe = async () => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setMsg('Please enter a valid email address.');
      return;
    }
    setStatus('loading');
    setMsg('');
    try {
      const res = await fetch('/subscribe.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setMsg('🎉 You\'re subscribed! Check your inbox for a confirmation.');
        setEmail('');
      } else {
        setStatus('error');
        setMsg(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMsg('Network error. Please try again later.');
    }
  };

  return (
    <div style={{ background: 'transparent', minHeight: '100vh', color: '#d1d5db' }}>
      <SEO
        title="Articles — Digital Marketing Insights & Case Studies"
        description="Read Kiran Hajare's case studies, proven frameworks, and unfiltered insights on Meta Ads, coaching institute growth, and admission funnels. Updated weekly."
        path="/articles"
      />
      <PageHeader
        title="Articles"
        subtitle="Written case studies, proven frameworks, and unfiltered insights from the field."
        label="My Content"
      />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px 100px' }}>

        {/* Featured Article */}
        {featured && active === 'All' && (
          <div className="featured-card">
            <div style={{ display: 'flex', gap: 16, marginBottom: 20, flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{ background: '#cf9d4518', color: '#cf9d45', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '4px 14px', borderRadius: 999, border: '1px solid #cf9d4433', display: 'flex', alignItems: 'center' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '1.2em', height: '1.2em', marginRight: '4px' }}>
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
                Featured
              </span>
              <span style={{ background: catColors[featured.cat] + '18', color: catColors[featured.cat], fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: 999 }}>{featured.cat}</span>
              <span style={{ color: '#6b7280', fontSize: '0.8rem' }}>{featured.date} · {featured.readTime}</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 900, color: '#fff', marginBottom: 16, lineHeight: 1.2 }}>{featured.title}</h2>
            <p style={{ color: '#9ca3af', lineHeight: 1.8, maxWidth: 780, fontSize: '1rem', marginBottom: 24 }}>{featured.excerpt}</p>
            <div style={{ color: '#cf9d45', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6 }}>Read Full Article →</div>
          </div>
        )}

        {/* Category Tabs */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 40, flexWrap: 'wrap' }}>
          {cats.map((cat, i) => (
            <button 
              key={i} 
              onClick={() => setActive(cat)} 
              className={`cat-tab ${active === cat ? 'active' : 'inactive'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, marginBottom: 80 }}>
          {(active === 'All' ? rest : filtered).map((a, i) => (
            <div key={i} className="article-card">
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
                <span style={{
                  background: (catColors[a.cat] || '#cf9d45') + '18',
                  color: catColors[a.cat] || '#cf9d45',
                  fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.15em',
                  textTransform: 'uppercase', padding: '3px 10px', borderRadius: 999,
                }}>{a.cat}</span>
                <span style={{ color: '#6b7280', fontSize: '0.75rem' }}>{a.readTime}</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.1rem', fontWeight: 900, color: '#fff', lineHeight: 1.3 }}>{a.title}</h3>
              <p style={{ color: '#9ca3af', fontSize: '0.88rem', lineHeight: 1.65, flex: 1 }}>{a.excerpt}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 14, borderTop: '1px solid #1e1e1e' }}>
                <span style={{ color: '#6b7280', fontSize: '0.75rem' }}>{a.date}</span>
                <span style={{ color: '#cf9d45', fontWeight: 700, fontSize: '0.82rem' }}>Read →</span>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="newsletter-cta">
          <div className="newsletter-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '1em', height: '1em', color: '#cf9d45' }}>
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
          </div>
          <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.8rem', fontWeight: 900, color: '#fff', marginBottom: 12 }}>Get Articles Straight to Your Inbox</h3>
          <p style={{ color: '#9ca3af', maxWidth: 500, margin: '0 auto 28px', lineHeight: 1.7 }}>Join 5,000+ institute owners who read Kiran's weekly strategic breakdown every Friday. No fluff. Just high-signal insights.</p>

          {status !== 'success' ? (
            <>
              <div style={{ display: 'flex', gap: 12, maxWidth: 460, margin: '0 auto', flexWrap: 'wrap' }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="newsletter-input"
                  value={email}
                  onChange={e => { setEmail(e.target.value); setStatus('idle'); setMsg(''); }}
                  onKeyDown={e => e.key === 'Enter' && handleSubscribe()}
                  disabled={status === 'loading'}
                />
                <button
                  className="newsletter-btn"
                  onClick={handleSubscribe}
                  disabled={status === 'loading'}
                  style={{ opacity: status === 'loading' ? 0.7 : 1, cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}
                >
                  {status === 'loading' ? 'Subscribing...' : 'Subscribe →'}
                </button>
              </div>
              {msg && (
                <p style={{
                  marginTop: 16, fontSize: '0.88rem', fontWeight: 600,
                  color: status === 'error' ? '#ff6b6b' : '#cf9d45',
                }}>
                  {msg}
                </p>
              )}
            </>
          ) : (
            <div style={{
              background: 'rgba(207,157,69,0.1)', border: '1px solid rgba(207,157,69,0.3)',
              borderRadius: 12, padding: '20px 32px', maxWidth: 460, margin: '0 auto',
              color: '#cf9d45', fontWeight: 700, fontSize: '1rem',
            }}>
              {msg}
            </div>
          )}
        </div>
      </div>
      <style>{`
        .featured-card {
          background: linear-gradient(135deg, #111 0%, rgba(207,157,69,0.06));
          border: 1px solid rgba(207,157,69,0.25);
          border-radius: 24px;
          padding: 48px;
          margin-bottom: 64px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .featured-card:hover {
          transform: translateY(-5px) scale(1.01);
          box-shadow: 0 24px 56px rgba(207,157,69,0.15);
          border-color: rgba(207,157,69,0.5);
        }
        .featured-card::before {
          content: '';
          position: absolute;
          top: -100%; left: -100%;
          width: 300%; height: 300%;
          background: radial-gradient(circle, rgba(207,157,69,0.1) 0%, transparent 50%);
          opacity: 0;
          transition: opacity 0.5s;
          pointer-events: none;
        }
        .featured-card:hover::before {
          opacity: 1;
        }

        .cat-tab {
          padding: 8px 20px;
          border-radius: 999px;
          font-size: 0.8rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s;
        }
        .cat-tab:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(207,157,69,0.2);
        }
        .cat-tab.active {
          background: #cf9d45;
          color: #000;
          border: none;
        }
        .cat-tab.inactive {
          background: transparent;
          color: #9ca3af;
          border: 1px solid #333;
        }
        .cat-tab.inactive:hover {
          border-color: #cf9d45;
          color: #cf9d45;
        }

        .article-card {
          background: #111;
          border: 1px solid #1a1a1a;
          border-radius: 18px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          cursor: pointer;
          transition: all 0.4s ease;
          position: relative;
        }
        .article-card:hover {
          transform: translateY(-5px);
          border-color: rgba(207,157,69,0.4);
          box-shadow: 0 10px 30px rgba(207,157,69,0.1);
        }

        .newsletter-cta {
          background: #111;
          border: 1px solid #222;
          border-radius: 20px;
          padding: 56px 48px;
          text-align: center;
          position: relative;
          overflow: hidden;
          transition: all 0.5s;
        }
        .newsletter-cta:hover {
          border-color: rgba(207,157,69,0.3);
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        }
        .newsletter-icon {
          font-size: 2.5rem;
          margin-bottom: 16px;
          animation: float-icon 4s ease-in-out infinite;
        }
        @keyframes float-icon {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .newsletter-input {
          flex: 1;
          padding: 13px 20px;
          background: #1a1a1a;
          border: 1px solid #333;
          border-radius: 8px;
          color: #fff;
          font-size: 0.95rem;
          outline: none;
          min-width: 200px;
          transition: all 0.3s;
        }
        .newsletter-input:focus {
          border-color: #cf9d45;
          box-shadow: 0 0 10px rgba(207,157,69,0.2);
        }
        .newsletter-btn {
          background: #cf9d45;
          color: #000;
          font-weight: 800;
          font-size: 0.9rem;
          padding: 13px 28px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          flex-shrink: 0;
          transition: all 0.3s;
        }
        .newsletter-btn:hover {
          background: #e6b75c;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(207,157,69,0.4);
        }
      `}</style>
    </div>
  );
}
