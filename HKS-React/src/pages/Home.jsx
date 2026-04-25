import React from 'react';
import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import ProofSection from '../components/ProofSection';
import OfferSection from '../components/OfferSection';
import AboutSection from '../components/AboutSection';
import TribeSection from '../components/TribeSection';
import FaqSection from '../components/FaqSection';
import FinalCTA from '../components/FinalCTA';
import MobileStickyCTA from '../components/MobileStickyCTA';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Home() {
  useScrollReveal();

  return (
    <>
      <SEO
        title="Digital Marketing Expert & Growth Strategist"
        description="Kiran Hajare is India's leading digital marketing expert & growth strategist for coaching institutes. ₹1Cr+ real ad spend, 50,000+ people trained. Book a free strategy call today."
        path="/"
      />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProofSection />
      {/* <OfferSection /> */}
      <AboutSection />
      <TribeSection />
      <FaqSection />
      {/* <FinalCTA /> */}
      <MobileStickyCTA />
    </>
  );
}
