import React from 'react';

function FeaturesSection() {
  return (
    <section className="py-0 px-1 text-center mb-5"> 
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-100">How It Works</h2> {/* Lighter gray heading */}
      <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-12">Using your device's front-facing camera, MotionScroll tracks your eye movement to automatically scroll content. No hands required - just read naturally.</p> {/* Darker gray text */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"> 
        {/* Slightly lighter card background (bg-gray-800/60) */}
        <div className="bg-gray-800/60 border border-gray-600/50 p-8 rounded-xl shadow-lg shadow-black/30 hover:shadow-gray-500/30 hover:border-gray-400 transform hover:-translate-y-2 transition duration-300 ease-in-out">
          <h3 className="text-xl font-semibold mb-4 text-white">Intelligent Scrolling</h3> {/* White heading */}
          <p className="text-gray-300">Perfect for reading long articles, documents, and digital content. The app automatically adjusts scroll speed based on your reading position and pace.</p> {/* Lighter gray text */}
        </div>

        <div className="bg-gray-800/60 border border-gray-600/50 p-8 rounded-xl shadow-lg shadow-black/30 hover:shadow-gray-500/30 hover:border-gray-400 transform hover:-translate-y-2 transition duration-300 ease-in-out">
          <h3 className="text-xl font-semibold mb-4 text-white">Smart Detection</h3> {/* White heading */}
          <p className="text-gray-300">Advanced eye-tracking technology provides smooth, responsive scrolling that feels natural and intuitive. No more manual scrolling or interruptions.</p> {/* Lighter gray text */}
        </div>

        <div className="bg-gray-800/60 border border-gray-600/50 p-8 rounded-xl shadow-lg shadow-black/30 hover:shadow-gray-500/30 hover:border-gray-400 transform hover:-translate-y-2 transition duration-300 ease-in-out">
          <h3 className="text-xl font-semibold mb-4 text-white">Privacy First</h3> {/* White heading */}
          <p className="text-gray-300">All eye-tracking processing happens locally on your device. Your camera data never leaves your phone, ensuring your privacy and security.</p> {/* Lighter gray text */}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
