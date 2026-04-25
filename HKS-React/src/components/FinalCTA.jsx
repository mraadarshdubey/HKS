export default function FinalCTA() {
  return (
    <section className="section-wrapper final-cta-section fade-in-section">
      <div className="section-inner" style={{ maxWidth: '800px' }}>
        <h2 className="section-h2">You've Been Running Ads. Without a Proper System.</h2>
        <p className="section-sub">
          That ends today. Use the <strong style={{ color: '#cf9d45' }}>Book Free Call</strong> button in the top navigation to get started — free, private, step-by-step.
        </p>

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
      <style>{`
        .trust-bar {
          transition: all 0.4s ease;
          border: 1px solid rgba(255,255,255,0.1);
        }
        .trust-bar:hover {
          transform: translateY(-3px) scale(1.02);
          background: rgba(255,255,255,0.05);
          border-color: rgba(207,157,69,0.3);
          box-shadow: 0 10px 30px rgba(0,0,0,0.5), inset 0 0 15px rgba(207,157,69,0.1);
        }
        .trust-bar span {
          transition: all 0.3s ease;
        }
        .trust-bar:hover span {
          color: #fff;
          text-shadow: 0 0 10px rgba(255,255,255,0.3);
        }
      `}</style>
    </section>
  );
}
