import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MyStory from './pages/MyStory';
import Books from './pages/Books';
import Mission from './pages/Mission';
import Press from './pages/Press';
import Platforms from './pages/Platforms';
import BusinessDev from './pages/BusinessDev';
import PersonalDev from './pages/PersonalDev';
import Podcasts from './pages/Podcasts';
import YouTube from './pages/YouTube';
import Socials from './pages/Socials';
import Articles from './pages/Articles';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Contact from './pages/Contact';

// Premium SimplePage for Contact/Terms/Privacy
const SimplePage = ({ title }) => (
  <div style={{ background: 'transparent', minHeight: '100vh', color: '#d1d5db' }}>
    <div style={{
      background: '#111', borderBottom: '1px solid #222',
      padding: '120px 24px 80px', textAlign: 'center', position: 'relative', overflow: 'hidden'
    }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(207,157,69,0.06), transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ display: 'inline-block', background: 'rgba(207,157,69,0.1)', border: '1px solid rgba(207,157,69,0.3)', color: '#cf9d45', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '4px 16px', borderRadius: 999, marginBottom: 20 }}>Kiran Hajare</div>
      <h1 style={{ fontFamily: 'var(--font-headline)', fontSize: 'clamp(2.5rem,6vw,4rem)', fontWeight: 900, color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>{title}</h1>
    </div>
    <div style={{ maxWidth: 700, margin: '80px auto', padding: '0 24px', textAlign: 'center' }}>
      <p style={{ color: '#9ca3af', fontSize: '1.1rem', lineHeight: 1.8 }}>This section is being prepared. Check back soon for the full content.</p>
    </div>
  </div>
);

// Wrapper that adds the fixed background map to inner pages
const PageWrapper = ({ children }) => (
  <div style={{ position: 'relative', minHeight: '100vh', background: '#0a0a0a' }}>
    {/* Fixed background map that stays in place on scroll */}
    <div className="fixed-map-bg" />
    <div style={{ position: 'relative', zIndex: 10 }}>
      {children}
    </div>
  </div>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <AnnouncementBar />
        <Navbar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my-story" element={<PageWrapper><MyStory /></PageWrapper>} />
            <Route path="/books" element={<PageWrapper><Books /></PageWrapper>} />
            <Route path="/mission" element={<PageWrapper><Mission /></PageWrapper>} />
            <Route path="/press" element={<PageWrapper><Press /></PageWrapper>} />
            <Route path="/platforms" element={<PageWrapper><Platforms /></PageWrapper>} />
            <Route path="/business-development" element={<PageWrapper><BusinessDev /></PageWrapper>} />
            <Route path="/personal-development" element={<PageWrapper><PersonalDev /></PageWrapper>} />
            <Route path="/podcasts" element={<PageWrapper><Podcasts /></PageWrapper>} />
            <Route path="/youtube" element={<PageWrapper><YouTube /></PageWrapper>} />
            <Route path="/socials" element={<PageWrapper><Socials /></PageWrapper>} />
            <Route path="/articles" element={<PageWrapper><Articles /></PageWrapper>} />
            <Route path="/privacy-policy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
            <Route path="/terms-of-service" element={<PageWrapper><TermsOfService /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

