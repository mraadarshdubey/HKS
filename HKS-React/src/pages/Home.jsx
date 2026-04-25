import React from 'react';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import ProofSection from '../components/ProofSection';
import OfferSection from '../components/OfferSection';
import AboutSection from '../components/AboutSection';
import FaqSection from '../components/FaqSection';
import FinalCTA from '../components/FinalCTA';
import MobileStickyCTA from '../components/MobileStickyCTA';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Home() {
  useScrollReveal();

  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProofSection />
      {/* <OfferSection /> */}
      <AboutSection />
      <FaqSection />
      {/* <FinalCTA /> */}
      <MobileStickyCTA />
    </>
  );
}
