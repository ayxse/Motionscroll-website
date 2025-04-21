import React from 'react';

function About() {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 text-gray-100"> 
      <h2 className="text-4xl font-bold text-center mb-10 text-white">About MotionScroll</h2> 
      
      <div className="bg-gray-800/60 border border-gray-600/50 rounded-xl shadow-lg shadow-black/30 p-8 mb-12">
        <p className="text-lg text-gray-300 leading-relaxed mb-6"> 
          MotionScroll was developed for the purpose of enabling hands-free scrolling through head movement detection. This makes reading 
          and browsing more accessible and convenient, especially in situations where 
          using your hands isn't practical.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          The goal is to provide a seamless experience for users who need or prefer alternative ways to interact with their devices.
        </p>
      </div>

      {/* GitHub Link Section */}
      <div className="text-center bg-gray-800/60 border border-gray-600/50 p-8 rounded-xl shadow-lg shadow-black/30">
        <h3 className="text-2xl font-semibold mb-3 text-white">Open Source Project</h3> 
        <p className="text-gray-400 mb-4">MotionScroll is an open-source project. You can find the source code, report issues, or contribute on GitHub:</p> 
        <a 
          href="https://github.com/ayxse/MotionScroll" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-white hover:underline transition duration-200 text-lg" // Made link slightly larger
        >
          github.com/ayxse/MotionScroll
        </a>
      </div>
    </div>
  );
}

export default About;
