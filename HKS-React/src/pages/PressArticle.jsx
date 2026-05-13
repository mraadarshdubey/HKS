import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';

const articles = {
  'marathi-business-weekly': {
    outlet: 'Marathi Business Weekly',
    type: 'Feature Article',
    date: 'March 2024',
    title: 'The Man Behind Marathi Digital Marketing',
    hero: '/circle-kiran-sir.png',
    readTime: '5 min read',
    intro: 'In a landscape dominated by English-language marketing gurus, Kiran Hajare stands apart. The founder of HelloKiranSir has quietly built one of the most influential digital marketing communities in the Marathi-speaking world — from scratch, with zero venture funding, and a steadfast belief that regional India deserves world-class marketing education.',
    sections: [
      {
        heading: 'From the Ground Up',
        body: 'Kiran Hajare did not start with an audience. He started with a conviction. Over a decade ago, he noticed a massive gap — thousands of small business owners in Maharashtra were running their businesses entirely on word-of-mouth and WhatsApp forwards, with no systematic way to generate leads or grow revenue. "The tools were there. The knowledge was there in English. But nobody was translating it for Marathi businesses," Kiran recalls. He set out to change that.',
      },
      {
        heading: 'Building a Community of 10,000+',
        body: 'Today, his community spans more than 10,000 Marathi entrepreneurs — coaching institute owners, local retail businesses, coaches, and consultants — all learning how to use Meta Ads and AI-powered funnels to scale. Kiran\'s YouTube channel @hellokiransheth has become a go-to resource for vernacular business content, blending practical frameworks with relatable examples from the Marathi business ecosystem.',
      },
      {
        heading: 'The HelloKiranSir Philosophy',
        body: 'What makes Kiran\'s approach distinctive is his insistence on systems over hustle. "I don\'t teach people to work harder. I teach them to build systems that work for them," he says. His flagship programs walk clients through Meta Ads funnel architecture, AI-powered lead nurturing, and the admission machine framework — a proprietary process for coaching institutes that turns ad spend into guaranteed seat fillings.',
      },
      {
        heading: 'What\'s Next',
        body: 'With books in production, a growing speaker presence, and the Marathi Business Tribe platform serving 70,000+ members, Kiran Hajare is just getting started. His mission: to make every Marathi entrepreneur digitally sovereign — capable of running a predictable, scalable business without dependency on referrals or luck.',
      },
    ],
    tags: ['Feature Article', 'Marathi Entrepreneurship', 'Digital Marketing'],
    externalUrl: 'https://marathibusinesstribe.com/',
  },
  'edtech-insider': {
    outlet: 'EdTech Insider',
    type: 'Interview',
    date: 'January 2024',
    title: 'AI Funnels Are the Future of Admission Marketing',
    hero: '/k1.webp',
    readTime: '6 min read',
    intro: 'Kiran Hajare has worked with over 200 coaching institutes across India, and his message is consistent: the future of education marketing is not organic posts or referrals — it\'s systematic, AI-powered funnels that work around the clock to fill seats.',
    sections: [
      {
        heading: 'The Admission Problem Nobody Talks About',
        body: 'Most coaching institutes in India share the same problem: inconsistent admissions. "Owners fill their batches in April and October because parents are in "admission mode," but the rest of the year is dead," says Kiran. "My job is to show them how to make every month feel like April." His answer is a Meta Ads funnel that targets parents and students with precision — by age, location, interest, and behavior.',
      },
      {
        heading: 'How AI Changes the Game',
        body: 'Where Kiran\'s methodology diverges from traditional digital marketing is in the AI layer. Once a lead is captured through the ad funnel, an AI system takes over — sending personalised WhatsApp messages, answering queries, scheduling demo classes, and following up automatically until conversion. "The institute owner just shows up and teaches. The system does everything else," he explains.',
      },
      {
        heading: '200+ Institutes, One Framework',
        body: 'Across 200+ institutes he has personally consulted, the framework has remained consistent: compelling creative, hyper-local targeting, landing page optimised for mobile, and an AI follow-up sequence. The results: average cost per admission reduced by 40%, and batch-fill rates improved to near 100% for most clients.',
      },
      {
        heading: 'The Books Are Coming',
        body: 'Kiran is documenting these systems into a series of books — starting with "Enquiry To Payment," a playbook specifically for coaching institutes. "I want every institute owner in India to be able to pick up this book, implement the system, and fill their next batch without hiring a marketing agency," he says.',
      },
    ],
    tags: ['Interview', 'EdTech', 'AI Marketing', 'Admission Funnels'],
    externalUrl: 'https://adstoimpact.com/',
  },
  'digital-maharashtra': {
    outlet: 'Digital Maharashtra',
    type: 'Case Study',
    date: 'November 2023',
    title: '₹47 Lakh in Admissions Using Meta Ads Alone',
    hero: '/k1.webp',
    readTime: '7 min read',
    intro: 'A Pune-based coaching institute, struggling with inconsistent batch fill rates and rising word-of-mouth dependency, partnered with Kiran Hajare\'s team for a 90-day Meta Ads sprint. The result: ₹47 Lakh in collected admissions from a total ad spend of ₹1.8 Lakh — an ROAS of over 26x.',
    sections: [
      {
        heading: 'The Challenge',
        body: 'The institute, which offers competitive exam coaching for Class 8–12 students, had never run paid ads before. Their primary acquisition channels were parent referrals and a local hoarding. Batch capacities of 30 students per subject were routinely filled at only 60–70%, and the owner had no predictability over revenue.',
      },
      {
        heading: 'The Campaign Structure',
        body: 'Kiran\'s team designed a three-tier funnel: awareness campaigns targeting parents in a 10km radius using video testimonials, consideration campaigns with a free demo class offer, and conversion campaigns with urgency-driven creative. The landing page was optimised for WhatsApp opt-in, feeding directly into the AI follow-up sequence.',
      },
      {
        heading: 'The Numbers',
        body: 'Over 90 days: 847 leads generated. 312 demo class bookings. 214 actual admissions. At an average fee of ₹22,000 per student: ₹47.08 Lakh in gross admission revenue. Total Meta Ads spend: ₹1.82 Lakh. Cost per admission: ₹850. Every batch was filled to 100% capacity before the campaign ended.',
      },
      {
        heading: 'The Lesson',
        body: '"The institute owner said to me, I never imagined we could fill our batches this predictably," recalls Kiran. "That is the power of a system. It doesn\'t rely on luck, referrals, or a good month. It just runs." The case has since been shared at multiple EdTech events as a benchmark for local institute marketing.',
      },
    ],
    tags: ['Case Study', 'Meta Ads', 'Coaching Institutes', 'ROI'],
    externalUrl: 'https://adstoimpact.com/',
  },
  'startup-grind-pune': {
    outlet: 'Startup Grind Pune',
    type: 'Podcast Feature',
    date: 'August 2023',
    title: 'Scaling Education: The Kiran Hajare Way',
    hero: '/circle-kiran-sir.png',
    readTime: '4 min read',
    intro: 'Kiran Hajare joined the Startup Grind Pune podcast for a conversation about the Marathi business ecosystem, why vernacular marketing is criminally underutilised, and how he turned a simple insight — "teach them in their language" — into a movement that has touched 70,000+ entrepreneurs.',
    sections: [
      {
        heading: 'On the Marathi Entrepreneur',
        body: '"The Marathi entrepreneur is hungry, hardworking, and deeply loyal," Kiran told the hosts. "But they have been left behind by the mainstream marketing world, which still operates almost entirely in English. My work is to close that gap." He described the typical Marathi business owner — often a first-generation entrepreneur in retail, services, or education — as someone who is ready to invest in growth but has never been shown a clear path.',
      },
      {
        heading: 'Why Vernacular is the Future',
        body: 'Kiran was direct: "The next 200 million internet users in India will be Marathi, Bhojpuri, Tamil, Telugu speakers. Anyone who figures out how to market to them in their language will win the decade." His own content strategy — creating all his free educational content in Marathi — has been the foundation of the Marathi Business Tribe community.',
      },
      {
        heading: 'The Marathi Business Tribe',
        body: 'Marathi Business Tribe (marathibusinesstribe.com) is Kiran\'s flagship platform — a community and education hub where Marathi entrepreneurs learn Meta Ads, AI funnels, and digital marketing. With 70,000+ members, it is one of the largest vernacular business communities in India. "It\'s not just education. It\'s identity. People feel seen and heard," Kiran explained.',
      },
      {
        heading: 'AdsToImpact: The Agency Wing',
        body: 'For businesses that want Kiran\'s team to run their marketing directly, AdsToImpact (adstoimpact.com) is the execution arm. "Some people want to learn. Some people want it done for them. AdsToImpact is for the second group," he said. The agency focuses on creative-led Meta Ads campaigns with measurable ROI, primarily for education, coaching, and local service businesses.',
      },
    ],
    tags: ['Podcast', 'Vernacular Marketing', 'Marathi Business Tribe', 'AdsToImpact'],
    externalUrl: 'https://marathibusinesstribe.com/',
  },
  'ads-to-impact': {
    outlet: 'AdsToImpact.com',
    type: 'Platform Feature',
    date: 'April 2024',
    title: 'AdsToImpact — Where Creative Meets Conversion',
    hero: '/k1.webp',
    readTime: '5 min read',
    intro: 'AdsToImpact is Kiran Hajare\'s creative marketing agency — the execution arm of his ecosystem. While Marathi Business Tribe educates, AdsToImpact delivers: running high-performance Meta Ads campaigns for coaching institutes, local businesses, and growth-stage companies across India.',
    sections: [
      {
        heading: 'What is AdsToImpact?',
        body: 'AdsToImpact (adstoimpact.com) is a full-service digital marketing agency founded by Kiran Hajare. It specialises in Meta Ads — Facebook and Instagram paid campaigns — for businesses that need systematic, measurable growth. The agency\'s philosophy is simple: every rupee spent on ads must produce a clear, trackable impact.',
      },
      {
        heading: 'The Services',
        body: 'The agency offers Meta Ads campaign management (strategy, creative, targeting, and optimisation), AI-powered lead funnel setup (landing pages, WhatsApp automation, CRM integration), and performance-based creative development. All campaigns are managed end-to-end, with weekly reporting and direct access to the team.',
      },
      {
        heading: 'Who It\'s For',
        body: 'AdsToImpact primarily works with coaching institutes and education businesses, local service businesses (doctors, gyms, salons, clinics), D2C brands targeting Tier-2/3 India, and entrepreneurs who want a done-for-you marketing system that runs without their daily involvement.',
      },
      {
        heading: 'The Track Record',
        body: 'Under Kiran\'s leadership, AdsToImpact campaigns have collectively generated crores in revenue for clients across Maharashtra and beyond. The case study of ₹47 Lakh in admissions from ₹1.8 Lakh ad spend is one of several documented wins. The agency\'s core promise: your growth should be predictable, not accidental.',
      },
    ],
    tags: ['Platform Feature', 'Meta Ads Agency', 'AdsToImpact', 'Performance Marketing'],
    externalUrl: 'https://adstoimpact.com/',
  },
  'marathi-business-tribe': {
    outlet: 'Marathi Business Tribe',
    type: 'Platform Feature',
    date: 'May 2024',
    title: 'Marathi Business Tribe — India\'s Largest Marathi Business Community',
    hero: '/MBT.PNG',
    readTime: '5 min read',
    intro: 'Marathi Business Tribe (marathibusinesstribe.com) is India\'s leading platform for Marathi-speaking entrepreneurs. Founded by Kiran Hajare, it has grown to 70,000+ members across Maharashtra and beyond — all united by one goal: building businesses that generate predictable leads and sales, every single day.',
    sections: [
      {
        heading: 'The Origin Story',
        body: 'Marathi Business Tribe was founded in 2020, born from a simple observation: Marathi-speaking business owners were being left out of the digital marketing revolution. The content was in English, the trainers were from metros, and the examples were irrelevant to a Nashik retailer or a Kolhapur coaching institute owner. Kiran set out to build a home for these entrepreneurs — in their language, with their context, solving their real problems.',
      },
      {
        heading: '70,000+ Strong Community',
        body: 'Today the Marathi Business Tribe is home to over 70,000 business owners, entrepreneurs, coaches, and students. Members range from first-generation shopkeepers learning Facebook Ads for the first time to established coaching institutes scaling from one batch to ten. The community is built on a foundation of free content — YouTube videos, WhatsApp groups, and live workshops — with premium programs for those ready to go deep.',
      },
      {
        heading: 'Core Programs',
        body: 'The flagship program is the "Get More Customer Bootcamp" — a deep-dive into Meta Ads and AI Funnel Systems taught entirely in Marathi, with Hindi and English support. The bootcamp has produced hundreds of success stories, including businesses that went from zero online presence to generating 50+ qualified leads per day within 60 days of implementation.',
      },
      {
        heading: 'The Vision',
        body: 'Kiran\'s vision for Marathi Business Tribe goes beyond education. "I want every Marathi entrepreneur to be digitally sovereign — to own their customer acquisition, to not depend on luck or referrals, to run their business like a modern CEO." The platform, the community, the books, and the agency are all tools toward that single, ambitious mission.',
      },
    ],
    tags: ['Platform Feature', 'Marathi Business Tribe', 'Community', 'Meta Ads'],
    externalUrl: 'https://marathibusinesstribe.com/',
  },
};

export default function PressArticle() {
  const { slug } = useParams();
  const article = articles[slug];

  if (!article) {
    return (
      <main style={{ background: 'transparent', minHeight: '100vh', color: '#d1d5db', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-headline)', fontSize: '3rem', marginBottom: 16 }}>Article Not Found</h1>
          <Link to="/press" style={{ color: '#cf9d45', fontWeight: 700 }}>← Back to Press</Link>
        </div>
      </main>
    );
  }

  return (
    <main style={{ background: 'transparent', minHeight: '100vh', color: '#d1d5db' }}>
      <SEO
        title={`${article.title} — ${article.outlet} | Kiran Hajare Press`}
        description={article.intro.slice(0, 155)}
        path={`/press/${slug}`}
        keywords={`Kiran Hajare, ${article.tags.join(', ')}`}
      />

      {/* Hero */}
      <div className="pa-hero">
        <div className="pa-hero-bg" style={{ backgroundImage: `url(${article.hero})` }}></div>
        <div className="pa-hero-overlay"></div>
        <div className="pa-hero-content">
          <Link to="/press" className="pa-back-link">← Back to Press & Media</Link>
          <div className="pa-meta-row">
            <span className="pa-type-badge">{article.type}</span>
            <span className="pa-outlet">{article.outlet}</span>
            <span className="pa-date">{article.date}</span>
            <span className="pa-read">{article.readTime}</span>
          </div>
          <h1 className="pa-title">{article.title}</h1>
        </div>
      </div>

      {/* Body */}
      <div className="pa-body-wrap">
        <div className="pa-intro">{article.intro}</div>

        <div className="pa-divider-line"></div>

        {article.sections.map((sec, i) => (
          <div key={i} className="pa-section">
            <h2 className="pa-section-heading">{sec.heading}</h2>
            <p className="pa-section-body">{sec.body}</p>
          </div>
        ))}

        {/* Tags */}
        <div className="pa-tags">
          {article.tags.map((t, i) => (
            <span key={i} className="pa-tag">{t}</span>
          ))}
        </div>

        {/* External CTA */}
        <div className="pa-external-card">
          <div className="pa-ext-glow"></div>
          <div className="pa-ext-inner">
            <p style={{ color: '#9ca3af', fontSize: '0.9rem', marginBottom: 8 }}>Visit the official platform</p>
            <h3 style={{ color: '#fff', fontFamily: 'var(--font-headline)', fontSize: '1.4rem', fontWeight: 900, marginBottom: 20 }}>{article.outlet}</h3>
            <a href={article.externalUrl} target="_blank" rel="noopener noreferrer" className="pa-ext-btn">
              Visit {article.externalUrl} →
            </a>
          </div>
        </div>

        {/* Back */}
        <div style={{ textAlign: 'center', marginTop: 60 }}>
          <Link to="/press" className="pa-back-btn">← Return to All Press Features</Link>
        </div>
      </div>

      <style>{`
        .pa-hero {
          position: relative; height: 480px;
          display: flex; align-items: flex-end;
          overflow: hidden;
        }
        .pa-hero-bg {
          position: absolute; inset: 0;
          background-size: cover; background-position: top center;
          filter: blur(2px) brightness(0.3);
          transform: scale(1.05);
        }
        .pa-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(10,10,10,1));
        }
        .pa-hero-content {
          position: relative; z-index: 2;
          max-width: 820px; margin: 0 auto;
          padding: 0 24px 56px; width: 100%;
        }
        .pa-back-link {
          display: inline-block; color: #cf9d45; font-size: 0.8rem; font-weight: 700;
          text-decoration: none; margin-bottom: 24px; opacity: 0.8;
          transition: opacity 0.2s;
        }
        .pa-back-link:hover { opacity: 1; }
        .pa-meta-row {
          display: flex; align-items: center; gap: 16px; flex-wrap: wrap;
          margin-bottom: 20px;
        }
        .pa-type-badge {
          background: rgba(207,157,69,0.15); color: #cf9d45;
          border: 1px solid rgba(207,157,69,0.3); border-radius: 999px;
          font-size: 0.65rem; font-weight: 800; letter-spacing: 0.15em;
          text-transform: uppercase; padding: 5px 14px;
        }
        .pa-outlet { color: #9ca3af; font-size: 0.85rem; font-weight: 600; }
        .pa-date, .pa-read { color: #6b7280; font-size: 0.8rem; }
        .pa-title {
          font-family: var(--font-headline); font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 900; color: #fff; line-height: 1.1;
        }
        .pa-body-wrap {
          max-width: 820px; margin: 0 auto; padding: 72px 24px 100px;
        }
        .pa-intro {
          font-size: 1.15rem; line-height: 1.85; color: #e5e7eb;
          font-weight: 400; margin-bottom: 48px;
        }
        .pa-divider-line {
          width: 60px; height: 3px; background: #cf9d45;
          border-radius: 99px; margin-bottom: 48px;
        }
        .pa-section { margin-bottom: 48px; }
        .pa-section-heading {
          font-family: var(--font-headline); font-size: 1.5rem; font-weight: 900;
          color: #fff; margin-bottom: 16px;
        }
        .pa-section-body { color: #9ca3af; line-height: 1.8; font-size: 1rem; }
        .pa-tags { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 60px; }
        .pa-tag {
          background: #111; border: 1px solid #222; border-radius: 999px;
          padding: 6px 16px; font-size: 0.75rem; font-weight: 700;
          color: #9ca3af; letter-spacing: 0.05em;
        }
        .pa-external-card {
          position: relative; background: #0a0a0a;
          border: 1px solid rgba(207,157,69,0.2); border-radius: 24px;
          padding: 48px; text-align: center; overflow: hidden;
          margin-bottom: 48px;
        }
        .pa-ext-glow {
          position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(circle at center, rgba(207,157,69,0.06) 0%, transparent 70%);
        }
        .pa-ext-inner { position: relative; z-index: 2; }
        .pa-ext-btn {
          display: inline-block; background: #cf9d45; color: #000;
          font-weight: 800; font-size: 1rem; padding: 14px 40px;
          border-radius: 10px; text-decoration: none;
          box-shadow: 0 0 30px rgba(207,157,69,0.25);
          transition: all 0.3s;
        }
        .pa-ext-btn:hover { transform: scale(1.04); box-shadow: 0 0 50px rgba(207,157,69,0.4); }
        .pa-back-btn {
          display: inline-block; color: #9ca3af; font-weight: 700; font-size: 0.9rem;
          text-decoration: none; border: 1px solid #333; border-radius: 10px;
          padding: 12px 28px; transition: all 0.3s;
        }
        .pa-back-btn:hover { border-color: #cf9d45; color: #cf9d45; }
        @media (max-width: 768px) {
          .pa-hero { height: 380px; }
          .pa-title { font-size: 1.8rem; }
          .pa-body-wrap { padding: 48px 20px 80px; }
          .pa-intro { font-size: 1rem; }
          .pa-external-card { padding: 32px 24px; }
        }
      `}</style>
    </main>
  );
}
