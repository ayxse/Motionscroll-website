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
        <h3 className="text-2xl font-semibold mb-3 text-white flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-white w-7 h-7 mr-3">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.09.682-.218.682-.484 0-.236-.009-.866-.014-1.699-2.782.602-3.369-1.34-3.369-1.34-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.071 1.532 1.03 1.532 1.03.891 1.529 2.341 1.089 2.91.833.091-.647.349-1.086.635-1.337-2.22-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.254-.447-1.27.097-2.646 0 0 .84-.269 2.75 1.025A9.548 9.548 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.748-1.025 2.748-1.025.546 1.376.202 2.392.1 2.646.64.701 1.026 1.593 1.026 2.682 0 3.842-2.338 4.687-4.566 4.935.359.307.679.917.679 1.852 0 1.336-.012 2.415-.012 2.741 0 .269.18.579.688.481A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
          </svg>
          Open Source Project
        </h3> 
        <p className="text-gray-400 mb-4">MotionScroll is an open-source project. You can find the source code, report issues, or contribute on GitHub:</p> 
        <a 
          href="https://github.com/ayxse/MotionScroll" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-white hover:underline transition duration-200 text-lg break-words w-full block" // Made link slightly larger, added break-words and w-full block
        >
          github.com/ayxse/MotionScroll
        </a>
      </div>
    </div>
  );
}

export default About;
