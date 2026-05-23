import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import UseCasesSection from './UseCasesSection';
import RequirementsSection from './RequirementsSection';

function Home() {
  return (
    <main className="w-full relative z-10">
      <HeroSection />
      <FeaturesSection />
      <UseCasesSection />
      <RequirementsSection />
    </main>
  );
}

export default Home;
