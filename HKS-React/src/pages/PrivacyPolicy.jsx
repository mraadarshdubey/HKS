export default function PrivacyPolicy() {
  return (
    <div style={{ background: 'transparent', minHeight: '100vh', color: '#d1d5db' }}>
      {/* Hero Banner */}
      <div style={{
        background: '#111', borderBottom: '1px solid #222',
        padding: '120px 24px 80px', textAlign: 'center', position: 'relative', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(207,157,69,0.06), transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ display: 'inline-block', background: 'rgba(207,157,69,0.1)', border: '1px solid rgba(207,157,69,0.3)', color: '#cf9d45', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '4px 16px', borderRadius: 999, marginBottom: 20 }}>
          Legal Information
        </div>
        <h1 style={{ fontFamily: 'var(--font-headline)', fontSize: 'clamp(2.5rem,6vw,4rem)', fontWeight: 900, color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: '16px' }}>
          Privacy Policy
        </h1>
        <p style={{ color: '#9ca3af', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
          Your trust is our priority. We are committed to protecting your personal information and being transparent about how we use it.
        </p>
      </div>

      {/* Content Container */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 24px 100px', lineHeight: 1.8, fontSize: '1.05rem', color: '#a1a1aa' }}>
        
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.8rem', color: '#cf9d45', fontWeight: 800, marginBottom: '16px' }}>Privacy Commitment</h2>
          <p>
            <strong>hellokiransheth</strong> respects your privacy and is committed to protecting any personal information you share with us. This Privacy Policy outlines how we collect, use, and safeguard your data.
          </p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.8rem', color: '#cf9d45', fontWeight: 800, marginBottom: '16px' }}>Information We Collect</h2>
          <ul style={{ listStyleType: 'disc', paddingLeft: '24px' }}>
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>Business Information (shared voluntarily)</li>
            <li>Information required for service delivery</li>
          </ul>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.8rem', color: '#cf9d45', fontWeight: 800, marginBottom: '16px' }}>How We Use Your Information</h2>
          <ul style={{ listStyleType: 'disc', paddingLeft: '24px' }}>
            <li>Deliver marketing services and campaign management</li>
            <li>Provide customer support and technical assistance</li>
            <li>Project communication and updates</li>
            <li>Lead management and follow-ups</li>
            <li>Internal analytics to improve our services</li>
          </ul>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.8rem', color: '#cf9d45', fontWeight: 800, marginBottom: '16px' }}>Data Protection & Security</h2>
          <ul style={{ listStyleType: 'disc', paddingLeft: '24px' }}>
            <li>We do not sell or rent user data to any third parties.</li>
            <li>All data is stored securely with restricted access.</li>
            <li>Only authorized team members can access client information.</li>
            <li>We follow Meta's data handling policies and industry standards.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.8rem', color: '#cf9d45', fontWeight: 800, marginBottom: '16px' }}>Cookies</h2>
          <p>
            Our website may use cookies to enhance analytics and user experience. These cookies help us understand how visitors use our site and improve our services.
          </p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.8rem', color: '#cf9d45', fontWeight: 800, marginBottom: '16px' }}>Your Rights</h2>
          <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
            <li style={{ marginBottom: '10px', display: 'flex', gap: '12px' }}>
              <span style={{ color: '#cf9d45' }}>•</span>
              <span>You may request data deletion or modification at any time.</span>
            </li>
            <li style={{ marginBottom: '10px', display: 'flex', gap: '12px' }}>
              <span style={{ color: '#cf9d45' }}>•</span>
              <span>Contact us at <a href="mailto:hajarekiran210@gmail.com" style={{ color: '#fff', textDecoration: 'underline', textUnderlineOffset: '4px' }}>hajarekiran210@gmail.com</a> for data-related requests.</span>
            </li>
            <li style={{ marginBottom: '10px', display: 'flex', gap: '12px' }}>
              <span style={{ color: '#cf9d45' }}>•</span>
              <span>We will respond within 24–48 hours.</span>
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: '40px', padding: '32px', background: '#111', border: '1px solid #222', borderRadius: '16px' }}>
          <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.5rem', color: '#fff', fontWeight: 800, marginBottom: '12px' }}>Policy Changes</h2>
          <p style={{ margin: 0, fontSize: '0.95rem' }}>
            We reserve the right to update this Privacy Policy at any time. Changes will be effective immediately upon posting on our website. Please review this policy periodically for updates.
          </p>
        </section>

      </div>
    </div>
  );
}
