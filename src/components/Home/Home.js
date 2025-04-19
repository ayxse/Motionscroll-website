import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import UseCasesSection from './UseCasesSection';
import RequirementsSection from './RequirementsSection';

function Home() {
  return (
    <main className="w-full max-w-6xl px-4 py-8"> {/* Max width, padding */}
      <HeroSection />
      <FeaturesSection />
      <UseCasesSection />
      <RequirementsSection />
    </main>
  );
}

export default Home;
