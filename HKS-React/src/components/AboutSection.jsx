export default function AboutSection() {
  return (
    <section className="section-wrapper about-section fade-in-section">
      <div className="section-inner">
        <div className="about-grid">
          {/* Image */}
          <div className="about-img-wrap">
            <img
              src="/k1.png"
              alt="Kiran Hajare — Digital Marketing Expert"
            />
            <div className="about-limit-badge">
              <p className="number">₹1Cr+</p>
              <p className="label">Real Ad Spend</p>
            </div>
          </div>

          {/* Copy */}
          <div className="about-copy">
            <span className="section-label">I Was In The Same Situation As You</span>
            <h2 className="section-h2">Hi, I'm Kiran Hajare.</h2>

            <div className="paras">
              <p>
                There was a time when I was also running a small business. People told me —
                <em>"Post on Instagram, run ads… customers will come."</em>
              </p>
              <p>I tried everything. But what happened?</p>
              <p>
                <strong style={{ color: '#ff2e2e' }}>❌ Money gone &nbsp;❌ Time gone &nbsp;❌ No customers</strong>
              </p>
              <p>
                That's when I realized — the problem was not me… the problem was
                I didn't have a <strong>proper system.</strong>
              </p>
              <p>
                So I decided to understand this properly. Till today, I've spent more than
                <strong> ₹1 crore on ads</strong> — for myself and for my clients. After all the
                mistakes and learning, I built a simple system that actually works.
              </p>
              <p>
                Now I teach the same system to people like you —
                in a very <strong>simple, step-by-step way.</strong>
              </p>
            </div>

            <div className="about-stat-box">
              <p>50,000+ people trained · 30,000+ using my system · ₹1Cr+ real ad spend experience</p>
            </div>

            <div className="about-signature">
              <span style={{ fontFamily: 'Georgia, serif', fontSize: '1.5rem', fontStyle: 'italic', color: '#cf9d45' }}>
                Kiran Hajare
              </span>
              <span>— Digital Marketing Expert & Growth Strategist</span>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .about-img-wrap {
          position: relative;
          transition: all 0.5s ease;
          /* Removed overflow: hidden so the badge can be outside */
        }
        .about-img-wrap:hover {
          transform: translateY(-5px) scale(1.02);
        }
        .about-img-wrap:hover img {
          box-shadow: 0 20px 50px rgba(207,157,69,0.3) !important;
        }

        .about-limit-badge {
          animation: float-badge 4s ease-in-out infinite;
          background: linear-gradient(135deg, #cf9d45, #b8860b);
          color: #000;
          border: none;
          box-shadow: 0 10px 20px rgba(207,157,69,0.4);
        }
        @keyframes float-badge {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
        .about-stat-box {
          transition: all 0.3s ease;
          border-left: 3px solid #cf9d45;
          background: linear-gradient(90deg, rgba(207,157,69,0.1), transparent);
        }
        .about-stat-box:hover {
          transform: translateX(10px);
          background: linear-gradient(90deg, rgba(207,157,69,0.15), transparent);
          border-left-width: 6px;
        }
      `}</style>
    </section>
  );
}
