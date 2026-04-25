export default function AboutSection() {
  return (
    <section className="section-wrapper about-section fade-in-section">
      <div className="section-inner">
        <div className="about-grid">
          {/* Image */}
          <div className="about-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Kiran Hajare — Growth Partner"
            />
            <div className="about-limit-badge">
              <p className="number">5 Limit</p>
              <p className="label">Clients at a time</p>
            </div>
          </div>

          {/* Copy */}
          <div className="about-copy">
            <span className="section-label">The Person Behind This</span>
            <h2 className="section-h2">Who's Building Your System?</h2>

            <div className="paras">
              <p>I'm Kiran. I spent 3 years inside coaching institutes watching them bleed money on ads with absolutely no system.</p>
              <p>Started as a web developer. Realized websites alone never convert. So I went deeper — into funnels, AI automation, and direct-response conversion psychology.</p>
              <p>Now I build complete, end-to-end admission systems. And I only work with <strong>5 clients at a time</strong> — because I actually care about delivering results, not just reports.</p>
            </div>

            <div className="about-stat-box">
              <p>₹47 Lakh+ in admissions generated for clients in the last 12 months.</p>
            </div>

            <div className="about-signature">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Signature_of_John_Hancock.svg"
                alt="Signature"
              />
              <span>— Kiran</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
