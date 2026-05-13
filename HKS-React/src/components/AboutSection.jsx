import { Link } from 'react-router-dom';

export default function AboutSection() {
  return (
    <section className="section-wrapper about-section fade-in-section">
      <div className="section-inner">
        <div className="about-grid">
          {/* Image */}
          <div className="about-img-wrap">
            <img
              src="/k1.webp"
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
                To be honest, a few years ago, I was exactly where you are today. Running a small business with big dreams, while everyone told me — 
                <em> "Just post on Instagram, run some ads, and customers will line up."</em>
              </p>
              <p>I did exactly that. But instead of customers lining up, my money and time just kept draining away.</p>
              <p>
                That's when I realized the fault wasn't with me—it was the <strong>system</strong> I lacked. 
                Over the last few years, I've spent more than ₹1 Crore on ads, learning through trial and error, until I finally discovered a path that delivers consistent results every single time.
              </p>
              <p>
                Today, I teach that same simple, step-by-step framework to entrepreneurs like you, so you don't have to spend years struggling as I did. <Link to="/my-story" style={{ color: '#cf9d45', textDecoration: 'underline' }}>Read my full story here</Link>.
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
