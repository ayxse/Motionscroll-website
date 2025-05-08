import React from 'react';

function FeaturesSection() {
  return (
    <section className="pt-4 px-1 text-center mb-5"> 
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-100">How It Works</h2> {/* Lighter gray heading */}
      <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-12">Using your device's front-facing camera, MotionScroll tracks your head movements to automatically scroll content. No hands required - just look up or down.</p> {/* Darker gray text, updated description */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"> 
        {/* Slightly lighter card background (bg-gray-800/60) */}
        <div className="bg-gray-800/60 border border-gray-600/50 p-8 rounded-xl shadow-lg shadow-black/30 hover:shadow-gray-500/30 hover:border-gray-400 transform hover:-translate-y-2 transition duration-300 ease-in-out">
          <div className="text-white mx-auto mb-4 w-9 h-9">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.2 7.8l-7.7 7.7-4-4-5.7 5.7"/>
              <path d="M15 7h6v6"/>
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-4 text-white">Intelligent Scrolling</h3> {/* White heading */}
          <p className="text-gray-300">Perfect for reading long articles, documents, and digital content. The app automatically adjusts scroll speed based on your reading position and pace.</p> {/* Lighter gray text */}
        </div>

        <div className="bg-gray-800/60 border border-gray-600/50 p-8 rounded-xl shadow-lg shadow-black/30 hover:shadow-gray-500/30 hover:border-gray-400 transform hover:-translate-y-2 transition duration-300 ease-in-out">
          <div className="text-white mx-auto mb-4 w-9 h-9">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-4 text-white">Smart Detection</h3> {/* White heading */}
          <p className="text-gray-300">Advanced face-tracking technology provides smooth, responsive scrolling that feels natural and intuitive. No more manual scrolling or interruptions.</p> {/* Lighter gray text */}
        </div>

        <div className="bg-gray-800/60 border border-gray-600/50 p-8 rounded-xl shadow-lg shadow-black/30 hover:shadow-gray-500/30 hover:border-gray-400 transform hover:-translate-y-2 transition duration-300 ease-in-out">
          <div className="text-white mx-auto mb-4 w-9 h-9">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-4 text-white">Privacy First</h3> {/* White heading */}
          <p className="text-gray-300">All face-tracking processing happens locally on your device. Your camera data never leaves your phone, ensuring your privacy and security.</p> {/* Lighter gray text */}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
