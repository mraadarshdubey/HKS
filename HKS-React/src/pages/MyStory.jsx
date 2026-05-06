import React from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';

const milestones = [
  { year: '2016', title: 'Shuruat aur Nakamyabi', desc: 'Maine apna chhota business shuru kiya. Sab kehte the — "Ads chalao, customers khud aayenge." Maine wahi kiya, par sirf paise gaye, customers nahi. Wo saal mere liye ek bahut badi seekh tha.' },
  { year: '2018', title: 'System ki Khoj', desc: 'Mujhe samajh aaya ki problem budget ya platform mein nahi, balki ek sahi "System" ki kami mein hai. Maine mahino tak data dekha, funnels banaye, aur Meta Ads ko root level se samajhna shuru kiya.' },
  { year: '2020', title: 'Ek Bada Milestone', desc: 'Ads pe ₹1 Crore kharch karne ka anubhav mila. Isme mere khud ke aur mere clients ke paise shamil the. Har thokar ne mujhe ek naya lesson sikhaya aur mera system aur majboot hota gaya.' },
  { year: '2021', title: 'Pehla Kadam Training ki taraf', desc: 'Jab mere results dikhne lage, toh logon ne poochha ki main ye kaise karta hoon. Maine sikhana shuru kiya. Pehle 1,000 log, fir 5,000... aur karwan badhta gaya.' },
  { year: '2022', title: 'Marathi Business Tribe', desc: 'Maine mehsus kiya ki apni bhasha mein baat karne ka asar hi alag hota hai. Marathi entrepreneurs ke liye ek community banayi jo aaj 10,000+ logon ka parivaar ban chuka hai.' },
  { year: '2023+', title: 'Ek Nayi Zimmedari', desc: 'Aaj 50,000 se zyada logon ko train karne ke baad bhi mera maksad wahi hai — har chote business owner ko wo system dena jo maine saalon ki mehnat se banaya hai.' },
];

export default function MyStory() {
  return (
    <main style={{ background: 'transparent', minHeight: '100vh', color: '#d1d5db' }}>
      <SEO
        title="My Story — From Struggle to ₹1Cr+ Ad Spend Expert"
        description="Read Kiran Hajare's journey from struggling small business owner to training 50,000+ people in digital marketing. ₹1Cr+ real ad spend, proven systems, and the Marathi Business Tribe."
        path="/my-story"
        keywords="Kiran Hajare story, Kiran Hajare journey, who is Kiran Hajare, Kiran Hajare biography, Marathi Business Tribe founder"
        schema={{
          '@type': 'Article',
          headline: 'Kiran Hajare — From Struggle to ₹1Cr+ Ad Spend Expert',
          description: 'The full journey of Kiran Hajare from struggling small business owner to training 50,000+ people and managing ₹1Cr+ in real ad spend.',
          image: 'https://hellokiransheth.in/k1.webp',
          datePublished: '2024-01-15',
          dateModified: '2026-05-06',
        }}
      />
      <PageHeader
        title="My Story"
        subtitle="From small business struggles to training 50,000+ people — the unfiltered truth."
        label="The Founder's Journey"
      />

      {/* Intro Section */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 60, alignItems: 'center' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 60, alignItems: 'center' }} className="story-intro-grid">
            {/* Image */}
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute', inset: '-16px',
                background: 'radial-gradient(ellipse at center, rgba(207,157,69,0.25) 0%, transparent 70%)',
                borderRadius: '50%', filter: 'blur(40px)', zIndex: 0
              }} />
              <div style={{
                position: 'relative', zIndex: 1,
                borderRadius: 20, overflow: 'hidden',
                border: '1px solid #333',
                boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
                aspectRatio: '4/5',
              }}>
                <img
                  src="/k1.webp"
                  alt="Kiran Hajare"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', filter: 'brightness(0.95) contrast(1.05)' }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 60%)'
                }} />
                {/* Floating badge */}
                <div style={{
                  position: 'absolute', bottom: 20, left: 20,
                  background: '#cf9d45', color: '#000',
                  fontWeight: 900, fontSize: '0.75rem', padding: '6px 16px',
                  borderRadius: 999, letterSpacing: '0.1em', textTransform: 'uppercase'
                }}>50,000+ People Trained</div>
              </div>
            </div>

            {/* Text */}
            <div>
              <div style={{
                display: 'inline-block', background: 'rgba(207,157,69,0.1)', border: '1px solid rgba(207,157,69,0.3)',
                color: '#cf9d45', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em',
                textTransform: 'uppercase', padding: '4px 14px', borderRadius: 999, marginBottom: 24
              }}>I Was In The Same Situation As You</div>
              <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 900, color: '#fff', lineHeight: 1.1, marginBottom: 20 }}>
                Ads chal rahe the,<br /><span style={{ color: '#cf9d45' }}>par dhanda nahi tha.</span><br />Fir maine system ko samjha.
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#9ca3af', marginBottom: 16 }}>
                Namaste, main Kiran Hajare hoon. Sach kahun toh ek waqt tha jab main bhi bilkul aapki tarah pareshan tha. Log kehte the — "Instagram pe dalo, ads chalao, sab theek ho jayega."
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#9ca3af', marginBottom: 16 }}>
                Maine sab try kiya. <strong style={{ color: '#ff2e2e' }}>Paisa gaya, waqt gaya, par customers nahi aaye.</strong>
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#9ca3af', marginBottom: 20 }}>
                Tab mujhe mehsus hua ki galti mere business mein nahi, balki mere kaam karne ke tarike mein thi. Maine saalon tak seekha, ₹1 Crore se zyada ads pe kharch kiye, aur finally ek aisa system banaya jo sach mein kaam karta hai.
              </p>
              <blockquote style={{
                borderLeft: '4px solid #cf9d45', paddingLeft: 20,
                color: '#cf9d45', fontStyle: 'italic', fontWeight: 600, fontSize: '1.1rem',
                margin: '28px 0', lineHeight: 1.6
              }}>
                "Now I teach the same system to people like you — in a very simple, step-by-step way."
              </blockquote>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 1, background: '#222', borderRadius: 16,
          overflow: 'hidden', margin: '72px 0', border: '1px solid #222'
        }}>
          {[
            { num: '50,000+', label: 'People Trained' },
            { num: '30,000+', label: 'Using My System' },
            { num: '₹1Cr+', label: 'Real Ad Spend Experience' },
          ].map((stat, i) => (
            <div key={i} style={{
              background: '#111', padding: '36px 24px', textAlign: 'center',
              transition: 'background 0.3s',
            }}>
              <div style={{
                fontFamily: 'var(--font-headline)', fontSize: 'clamp(2rem,4vw,2.8rem)',
                fontWeight: 900, color: '#cf9d45', lineHeight: 1
              }}>{stat.num}</div>
              <div style={{ fontSize: '0.8rem', color: '#6b7280', marginTop: 8, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div style={{ marginBottom: 100 }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ display: 'inline-block', background: 'rgba(255,46,46,0.1)', border: '1px solid rgba(255,46,46,0.3)', color: '#ff2e2e', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '4px 16px', borderRadius: 999, marginBottom: 16 }}>The Journey</span>
            <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, color: '#fff' }}>Built Year by Year</h2>
          </div>

          <div style={{ position: 'relative', paddingLeft: 40 }}>
            {/* Animated Vertical line */}
            <div className="animated-line" />

            {milestones.map((m, i) => (
              <div key={i} style={{ display: 'flex', gap: 32, marginBottom: 48, position: 'relative' }}>
                {/* Dot */}
                <div style={{
                  position: 'absolute', left: -33, top: 6,
                  width: 18, height: 18, borderRadius: '50%',
                  background: i % 2 === 0 ? '#cf9d45' : '#ff2e2e',
                  border: '3px solid #0a0a0a',
                  boxShadow: `0 0 15px ${i % 2 === 0 ? 'rgba(207,157,69,0.8)' : 'rgba(255,46,46,0.8)'}`,
                  flexShrink: 0,
                  zIndex: 2,
                }} />
                <div 
                  className={`story-timeline-card ${i % 2 === 0 ? 'gold-sweep' : 'red-sweep'}`}
                  style={{
                  background: '#111', border: '1px solid #222', borderRadius: 16,
                  padding: '28px 32px', flex: 1,
                  transition: 'all 0.3s ease',
                  position: 'relative', overflow: 'hidden'
                }}>
                  <div style={{
                    display: 'inline-block', fontFamily: 'var(--font-headline)',
                    fontSize: '0.75rem', fontWeight: 800, color: i % 2 === 0 ? '#cf9d45' : '#ff2e2e',
                    letterSpacing: '0.1em', marginBottom: 8
                  }}>{m.year}</div>
                  <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.3rem', fontWeight: 900, color: '#fff', marginBottom: 10 }}>{m.title}</h3>
                  <p style={{ color: '#9ca3af', lineHeight: 1.7, fontSize: '0.97rem' }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .story-intro-grid { grid-template-columns: 1fr !important; }
        }

        .story-timeline-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 2px;
          animation: border-sweep 3s ease-in-out infinite;
        }

        .gold-sweep::before {
          background: linear-gradient(90deg, transparent, #cf9d45, transparent);
        }

        .red-sweep::before {
          background: linear-gradient(90deg, transparent, #ff2e2e, transparent);
          animation-delay: 1.5s;
        }

        .story-timeline-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6);
        }

        .gold-sweep:hover { border-color: rgba(207, 157, 69, 0.4); }
        .red-sweep:hover { border-color: rgba(255, 46, 46, 0.4); }

        .animated-line {
          position: absolute;
          left: 16px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, rgba(207, 157, 69, 0.1), #cf9d45, #ff2e2e, #cf9d45, rgba(207, 157, 69, 0.1));
          background-size: 100% 200%;
          animation: line-flow 4s linear infinite;
        }

        @keyframes line-flow {
          0% { background-position: 0 0; }
          100% { background-position: 0 200%; }
        }
      `}</style>
    </main>
  );
}
