export default function FinalCTA() {
  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-wrapper final-cta-section fade-in-section">
      <div className="section-inner" style={{ maxWidth: '800px' }}>
        <h2 className="section-h2">You've Been Running Ads. Without a Proper System.</h2>
        <p className="section-sub">
          That ends today. Book your free clarity call. Let's fix your ads step-by-step and start getting real customers.
        </p>

        <button className="final-cta-btn" onClick={scrollToOffer} style={{ margin: '0 auto' }}>
          <span className="main">
            👉 Book a Free Clarity Call <i className="fas fa-arrow-right" />
          </span>
          <span className="sub">Free. Private. Step-by-step. No Obligation.</span>
        </button>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '32px' }}>
          <div className="trust-bar">
            <span><i className="fas fa-lock red" /> 100% Confidential</span>
            <span className="trust-separator" />
            <span><i className="fas fa-check red" /> No Pitch — Just Solutions</span>
            <span className="trust-separator" />
            <span><i className="fas fa-bolt gold" /> Results in 30 Days</span>
          </div>
        </div>
      </div>
    </section>
  );
}
