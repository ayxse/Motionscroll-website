import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import UseCasesSection from './UseCasesSection';
import RequirementsSection from './RequirementsSection';

function Home() {
  return (
    <>
      {/* Grid Background for home page only */}
      <div className="absolute inset-0 opacity-[0.35] pointer-events-none z-0" 
           style={{
             backgroundImage: `
               linear-gradient(to right, rgba(252, 249, 249, 0.1) 1px, transparent 1px),
               linear-gradient(to bottom, rgba(253, 253, 253, 0.1) 1px, transparent 1px)
             `,
             backgroundSize: '15px 15px',
             maskImage: `
               radial-gradient(
                 ellipse 600px 400px at center 8%,
                 white 20%,
                 white 50%,
                 transparent 80%
               ),
               linear-gradient(
                 to bottom,
                 transparent 0%,
                 white 5%,
                 white 18%,
                 transparent 22%,
                 transparent 100%
               )
             `,
             WebkitMaskImage: `
               radial-gradient(
                 ellipse 600px 400px at center 8%,
                 white 20%,
                 white 50%,
                 transparent 80%
               ),
               linear-gradient(
                 to bottom,
                 transparent 0%,
                 white 5%,
                 white 18%,
                 transparent 22%,
                 transparent 100%
               )
             `,
             maskComposite: 'intersect',
             WebkitMaskComposite: 'source-in'
           }}>
      </div>
      
      <main className="w-full max-w-6xl px-4 py-8 relative z-10"> {/* Max width, padding */}
        <HeroSection />
        <FeaturesSection />
        <UseCasesSection />
        <RequirementsSection />
      </main>
    </>
  );
}

export default Home;
