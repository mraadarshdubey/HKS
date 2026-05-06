import React, { useState } from 'react';
import SEO from '../components/SEO';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', institute: '', revenue: '', message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [msg, setMsg]       = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status === 'error') { setStatus('idle'); setMsg(''); }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setMsg('');
    try {
      const res  = await fetch('/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setMsg(data.message || 'Your inquiry has been sent!');
        setFormData({ name: '', email: '', phone: '', institute: '', revenue: '', message: '' });
      } else {
        setStatus('error');
        setMsg(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMsg('Network error. Please check your connection and try again.');
    }
  };

  return (
    <main style={{ background: 'transparent', minHeight: '100vh', color: '#d1d5db', paddingBottom: '100px' }}>
      <SEO
        title="Contact Kiran Hajare — Book a Free Strategy Call"
        description="Ready to scale your coaching institute? Send an inquiry or book a 1-on-1 strategy call with Kiran Hajare. Get a custom growth plan for your institute."
        path="/contact"
        keywords="contact Kiran Hajare, Kiran Hajare consultation, book strategy call Kiran Hajare, coaching institute marketing consultation"
      />
      
      {/* Hero Banner */}
      <div style={{
        background: '#111', borderBottom: '1px solid #222',
        padding: '120px 24px 80px', textAlign: 'center', position: 'relative', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(207,157,69,0.06), transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ display: 'inline-block', background: 'rgba(207,157,69,0.1)', border: '1px solid rgba(207,157,69,0.3)', color: '#cf9d45', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '4px 16px', borderRadius: 999, marginBottom: 20 }}>
          Let's Build Together
        </div>
        <h1 style={{ fontFamily: 'var(--font-headline)', fontSize: 'clamp(2.5rem,6vw,4rem)', fontWeight: 900, color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: '16px' }}>
          Contact Us
        </h1>
        <p style={{ color: '#9ca3af', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
          Ready to scale your institute? Drop us a message, book a consultation, or join our community. We're here to help you dominate your market.
        </p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '80px auto 0', padding: '0 24px' }}>
        <div className="contact-grid">
          
          {/* Left Column: Info & Direct Contact */}
          <div className="contact-info-col">
            <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: '2rem', color: '#fff', fontWeight: 800, marginBottom: '24px' }}>
              Direct Communication
            </h2>
            <p style={{ color: '#a1a1aa', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '40px' }}>
              We value your time. Our team typically responds within 24 hours during standard business days. Reach out directly or fill the form.
            </p>

            <article className="contact-card">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div>
                <h3 style={{ color: '#cf9d45', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>Email Us</h3>
                <a href="mailto:hajarekiran210@gmail.com" style={{ color: '#fff', fontSize: '1.1rem', textDecoration: 'none', fontWeight: 500 }} className="hover-gold">hajarekiran210@gmail.com</a>
              </div>
            </article>

            <article className="contact-card">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div>
                <h3 style={{ color: '#cf9d45', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>Location</h3>
                <p style={{ color: '#fff', fontSize: '1.1rem', margin: 0, fontWeight: 500 }}>Maharashtra, India</p>
                <p style={{ color: '#6b7280', fontSize: '0.85rem', margin: '4px 0 0 0' }}>Serving institutes globally.</p>
              </div>
            </article>

            {/* Direct Booking CTA */}
            <article className="booking-card">
              <div className="booking-glow"></div>
              <h3 style={{ color: '#fff', fontSize: '1.3rem', fontWeight: 800, marginBottom: '12px', position: 'relative', zIndex: 2 }}>Need Faster Results?</h3>
              <p style={{ color: '#9ca3af', fontSize: '0.95rem', marginBottom: '24px', position: 'relative', zIndex: 2 }}>
                Skip the email queue and book a direct 1-on-1 strategy call with Kiran Hajare to map out your institute's growth plan immediately.
              </p>
              <a href="https://rzp.io/rzp/IPZgTGU" target="_blank" rel="noopener noreferrer" className="book-btn" style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}>
                Book a Strategy Call →
              </a>
            </article>
          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="contact-form-wrapper">
            <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.8rem', color: '#fff', fontWeight: 800, marginBottom: '24px' }}>
              Send an Inquiry
            </h2>

            {status === 'success' ? (
              <div style={{
                background: 'rgba(207,157,69,0.08)', border: '1px solid rgba(207,157,69,0.3)',
                borderRadius: 16, padding: '48px 32px', textAlign: 'center',
              }}>
                <div style={{ fontSize: '3rem', marginBottom: 16 }}>🎉</div>
                <h3 style={{ color: '#cf9d45', fontFamily: 'var(--font-headline)', fontSize: '1.4rem', fontWeight: 900, marginBottom: 12 }}>
                  Inquiry Sent Successfully!
                </h3>
                <p style={{ color: '#9ca3af', lineHeight: 1.7, marginBottom: 24 }}>
                  {msg}<br />We'll respond within 24 hours. Check your inbox for a confirmation email.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  style={{ background: 'transparent', border: '1px solid #cf9d45', color: '#cf9d45', fontWeight: 700, padding: '10px 28px', borderRadius: 8, cursor: 'pointer', fontSize: '0.9rem' }}
                >
                  Send Another →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="premium-form">
                <div className="form-row">
                  <div className="input-group">
                    <label htmlFor="name">Full Name *</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" disabled={status === 'loading'} />
                  </div>
                  <div className="input-group">
                    <label htmlFor="email">Email Address *</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@institute.com" disabled={status === 'loading'} />
                  </div>
                </div>

                <div className="form-row">
                  <div className="input-group">
                    <label htmlFor="phone">WhatsApp Number *</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+91 98765 43210" disabled={status === 'loading'} />
                  </div>
                  <div className="input-group">
                    <label htmlFor="institute">Institute Name</label>
                    <input type="text" id="institute" name="institute" value={formData.institute} onChange={handleChange} placeholder="Excel Academy" disabled={status === 'loading'} />
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="revenue">Current Monthly Revenue (Optional)</label>
                  <select id="revenue" name="revenue" value={formData.revenue} onChange={handleChange} className="custom-select" disabled={status === 'loading'}>
                    <option value="" disabled>Select a range</option>
                    <option value="Under ₹1 Lakh">Under ₹1 Lakh</option>
                    <option value="₹1 Lakh - ₹5 Lakhs">₹1 Lakh - ₹5 Lakhs</option>
                    <option value="₹5 Lakhs - ₹15 Lakhs">₹5 Lakhs - ₹15 Lakhs</option>
                    <option value="₹15 Lakhs+">₹15 Lakhs+</option>
                  </select>
                </div>

                <div className="input-group">
                  <label htmlFor="message">How can we help you? *</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Describe your current bottleneck or goals..." rows="5" disabled={status === 'loading'}></textarea>
                </div>

                {msg && status === 'error' && (
                  <p style={{ color: '#ff6b6b', fontSize: '0.88rem', fontWeight: 600, marginBottom: 16, padding: '10px 16px', background: 'rgba(255,107,107,0.08)', borderRadius: 8, border: '1px solid rgba(255,107,107,0.2)' }}>
                    ⚠️ {msg}
                  </p>
                )}

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={status === 'loading'}
                  style={{ opacity: status === 'loading' ? 0.75 : 1, cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}
                >
                  {status === 'loading' ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 60px;
          align-items: flex-start;
        }
        @media (max-width: 968px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        .contact-card {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          padding: 24px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 16px;
          margin-bottom: 24px;
          transition: all 0.3s ease;
        }
        .contact-card:hover {
          background: rgba(255,255,255,0.05);
          border-color: rgba(207,157,69,0.3);
          transform: translateX(5px);
        }
        .contact-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(207,157,69,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #cf9d45;
          flex-shrink: 0;
        }
        .hover-gold {
          transition: color 0.2s;
        }
        .hover-gold:hover {
          color: #cf9d45 !important;
        }

        .booking-card {
          position: relative;
          background: #111;
          border: 1px solid #222;
          padding: 32px;
          border-radius: 20px;
          overflow: hidden;
          margin-top: 40px;
        }
        .booking-glow {
          position: absolute;
          top: -50px;
          right: -50px;
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(207,157,69,0.2), transparent 70%);
          border-radius: 50%;
          z-index: 1;
        }
        .book-btn {
          position: relative;
          z-index: 2;
          width: 100%;
          padding: 16px;
          background: transparent;
          border: 1px solid #cf9d45;
          color: #cf9d45;
          font-weight: 700;
          font-size: 1rem;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .book-btn:hover {
          background: #cf9d45;
          color: #000;
          box-shadow: 0 10px 30px rgba(207,157,69,0.3);
        }

        /* Form Styles */
        .contact-form-wrapper {
          background: linear-gradient(145deg, #161616, #0d0d0d);
          border: 1px solid #222;
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }
        @media (max-width: 600px) {
          .contact-form-wrapper {
            padding: 24px;
          }
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        @media (max-width: 600px) {
          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }
        .input-group {
          margin-bottom: 24px;
          display: flex;
          flex-direction: column;
        }
        .input-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: #9ca3af;
          margin-bottom: 8px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .input-group input, .input-group textarea, .custom-select {
          width: 100%;
          background: rgba(0,0,0,0.5);
          border: 1px solid #333;
          border-radius: 12px;
          padding: 14px 18px;
          color: #fff;
          font-size: 1rem;
          font-family: inherit;
          transition: all 0.3s ease;
        }
        .input-group input:focus, .input-group textarea:focus, .custom-select:focus {
          outline: none;
          border-color: #cf9d45;
          box-shadow: 0 0 0 4px rgba(207,157,69,0.1);
          background: rgba(0,0,0,0.8);
        }
        .input-group input::placeholder, .input-group textarea::placeholder {
          color: #555;
        }
        .custom-select {
          appearance: none;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23cf9d45' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 16px center;
          background-size: 16px;
        }
        .submit-btn {
          width: 100%;
          background: linear-gradient(135deg, #cf9d45, #b8860b);
          color: #000;
          border: none;
          border-radius: 12px;
          padding: 18px;
          font-size: 1.1rem;
          font-weight: 800;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 10px 30px rgba(207,157,69,0.3);
        }
        .submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(207,157,69,0.5);
          background: linear-gradient(135deg, #dfad55, #c8961b);
        }
        .submit-btn svg {
          transition: transform 0.3s ease;
        }
        .submit-btn:hover svg {
          transform: translate(4px, -4px);
        }
      `}</style>
    </main>
  );
}
