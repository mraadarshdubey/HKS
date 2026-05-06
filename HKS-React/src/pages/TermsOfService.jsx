import SEO from '../components/SEO';

export default function TermsOfService() {
  return (
    <main style={{ background: 'transparent', minHeight: '100vh', color: '#d1d5db' }}>
      <SEO
        title="Terms & Conditions — hellokiransheth"
        description="Read the terms and conditions for using hellokiransheth services. Outlines rules, regulations, and agreements for our digital marketing partnerships."
        path="/terms-of-service"
        noindex={true}
      />
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
          Terms & Conditions
        </h1>
        <p style={{ color: '#9ca3af', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
          Please read these terms and conditions carefully before using our services. They outline the rules, regulations, and mutual agreements for our partnership.
        </p>
      </div>

      {/* Content Container */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 24px 100px', lineHeight: 1.8, fontSize: '1.05rem', color: '#a1a1aa' }}>
        
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.8rem', color: '#cf9d45', fontWeight: 800, marginBottom: '16px' }}>Agreement</h2>
          <p>
            By accessing and using this website, you accept and agree to be bound by the terms, conditions, and notices contained herein.
          </p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.8rem', color: '#cf9d45', fontWeight: 800, marginBottom: '16px' }}>Accurate Information</h2>
          <p>
            Users must provide accurate, current, and complete information when engaging with <strong>hellokiransheth</strong> services. Any false or misleading information may result in service suspension.
          </p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.8rem', color: '#cf9d45', fontWeight: 800, marginBottom: '16px' }}>Service Availability</h2>
          <p>
            Our services are subject to availability and may be modified or discontinued at any time. We reserve the right to accept or decline any project or client engagement.
          </p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.8rem', color: '#cf9d45', fontWeight: 800, marginBottom: '16px' }}>Content Changes</h2>
          <p>
            We reserve the right to change, modify, or remove any content on our website at any time without prior notice.
          </p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.8rem', color: '#cf9d45', fontWeight: 800, marginBottom: '16px' }}>Campaign Results Disclaimer</h2>
          <p>
            While we strive for excellence, no guaranteed results can be promised. Campaign performance depends on various external factors including market conditions, audience response, platform algorithms, and competitive factors.
          </p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.8rem', color: '#cf9d45', fontWeight: 800, marginBottom: '16px' }}>Compliance</h2>
          <p>
            All clients must comply with Meta platform policies, local laws, and applicable regulations. <strong>hellokiransheth</strong> reserves the right to decline campaigns that violate these standards.
          </p>
        </section>

        <section style={{ marginBottom: '40px', padding: '32px', background: '#111', border: '1px solid #222', borderRadius: '16px' }}>
          <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.5rem', color: '#fff', fontWeight: 800, marginBottom: '12px' }}>Limitation of Liability</h2>
          <p style={{ margin: 0, fontSize: '0.95rem' }}>
            <strong>hellokiransheth</strong> shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services.
          </p>
        </section>

      </div>
    </main>
  );
}
