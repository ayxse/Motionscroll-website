import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

function FeaturesSection() {
  // We'll let the hook use its defaults for better scroll trigger
  const sectionRef = useScrollAnimation()[0]; // Only get the ref, ignore the visibility state
  const [card1Ref, isCard1Visible] = useScrollAnimation({ delay: 50 });
  const [card2Ref, isCard2Visible] = useScrollAnimation({ delay: 100 });
  const [card3Ref, isCard3Visible] = useScrollAnimation({ delay: 150 });

  // Base classes for all cards including transition - updated for cleaner design
  const baseCardClasses = "bg-gray-900/40 border border-gray-800/50 p-6 rounded-xl backdrop-blur-sm hover:bg-gray-900/60 hover:border-gray-700/50 transform transition-all duration-300 ease-out";

  return (
    <section className="py-16 px-4" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-inter font-bold mb-4 text-white">
            Effortless, hands-free scrolling for everyone
          </h2>
          <p className="text-lg text-gray-400 font-inter max-w-2xl mx-auto leading-relaxed">
            Using your device's front-facing camera, MotionScroll tracks your head movements to automatically scroll content. No hands required - just look up or down.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div
            ref={card1Ref}
            className={`${baseCardClasses} ${isCard1Visible
              ? 'opacity-100 translate-y-0 hover:-translate-y-1'
              : 'opacity-0 translate-y-10'}`}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-300 rounded-xl flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                <path d="M20.2 7.8l-7.7 7.7-4-4-5.7 5.7" />
                <path d="M15 7h6v6" />
              </svg>
            </div>
            <h3 className="text-xl font-inter font-semibold mb-3 text-white">Intelligent Scrolling</h3>
            <p className="text-gray-400 font-inter leading-relaxed">Perfect for reading long articles, documents, and digital content. The app automatically adjusts scroll speed based on your reading position and pace.</p>
          </div>

          {/* Card 2 */}
          <div
            ref={card2Ref}
            className={`${baseCardClasses} ${isCard2Visible
              ? 'opacity-100 translate-y-0 hover:-translate-y-1'
              : 'opacity-0 translate-y-10'}`}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-300 rounded-xl flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" className="text-black">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <h3 className="text-xl font-inter font-semibold mb-3 text-white">Smart Detection</h3>
            <p className="text-gray-400 font-inter leading-relaxed">Advanced face-tracking technology provides smooth, responsive scrolling that feels natural and intuitive. No more manual scrolling or interruptions.</p>
          </div>

          {/* Card 3 */}
          <div
            ref={card3Ref}
            className={`${baseCardClasses} ${isCard3Visible
              ? 'opacity-100 translate-y-0 hover:-translate-y-1'
              : 'opacity-0 translate-y-10'}`}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-300 rounded-xl flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="24" height="24" className="text-black">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <h3 className="text-xl font-inter font-semibold mb-3 text-white">Privacy First</h3>
            <p className="text-gray-400 font-inter leading-relaxed">All face-tracking processing happens locally on your device. Your camera data never leaves your phone, ensuring your privacy and security.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
