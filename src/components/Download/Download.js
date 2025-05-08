import React from 'react';
// import './Download.css'; // Remove CSS import

function Download() {
  const handleDownload = () => {
    window.location.href = "https://github.com/ayxse/MotionScroll/releases/tag/v1.0.2";
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4 text-gray-100"> {/* Lighter base text, increased max-width */}
      <h2 className="text-4xl font-bold text-center mb-10 text-white">Download MotionScroll</h2> {/* White heading */}
      
      <div className="grid md:grid-cols-2 gap-10 mb-12">
        {/* Adjusted Download Card background (bg-gray-800/60) */}
        <div className="bg-gray-800/60 border border-gray-600/50 p-8 rounded-xl shadow-lg shadow-black/30 text-center flex flex-col items-center">
          <h3 className="text-2xl font-semibold mb-3 text-white">Android App</h3> {/* White heading */}
          <p className="text-gray-400 mb-6">Compatible with Android 8.0 and higher</p> {/* Medium gray text */}
          <button 
            className="bg-white text-black font-bold py-3 px-8 rounded-lg hover:bg-gray-200 transition duration-200 mb-3 flex items-center" // White button, flex
            onClick={handleDownload}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2">
              <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
              <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
            </svg>
            Download APK
          </button>
          <p className="text-sm text-gray-500">Version 1.0.2</p> {/* Medium gray text */}
        </div>
        
        {/* Adjusted Instructions box background (bg-gray-800/60) */}
        <div className="bg-gray-800/60 border border-gray-600/50 p-8 rounded-xl">
          <h3 className="text-2xl font-semibold mb-4 text-white">Installation Instructions</h3> {/* White heading */}
          <ol className="list-decimal list-inside space-y-2 text-gray-300"> {/* Lighter gray text */}
            <li>Download the APK file</li>
            <li>Open the file on your Android device</li>
            <li>Allow installation from unknown sources if prompted</li>
            <li>Follow the installation prompts</li>
            <li>Grant camera permissions when first launching the app</li>
          </ol>
        </div>
      </div>

      {/* Adjusted GitHub Section background (bg-gray-800/60) */}
      <div className="text-center bg-gray-800/60 border border-gray-600/50 p-8 rounded-xl shadow-lg shadow-black/30">
        <h3 className="text-2xl font-semibold mb-3 text-white flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-white w-7 h-7 mr-3">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.09.682-.218.682-.484 0-.236-.009-.866-.014-1.699-2.782.602-3.369-1.34-3.369-1.34-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.071 1.532 1.03 1.532 1.03.891 1.529 2.341 1.089 2.91.833.091-.647.349-1.086.635-1.337-2.22-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.254-.447-1.27.097-2.646 0 0 .84-.269 2.75 1.025A9.548 9.548 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.748-1.025 2.748-1.025.546 1.376.202 2.392.1 2.646.64.701 1.026 1.593 1.026 2.682 0 3.842-2.338 4.687-4.566 4.935.359.307.679.917.679 1.852 0 1.336-.012 2.415-.012 2.741 0 .269.18.579.688.481A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
          </svg>
          Open Source
        </h3> {/* White heading */}
        <p className="text-gray-400 mb-4">This project is open source! Check the GitHub repository:</p> {/* Medium gray text */}
        <a 
          href="https://github.com/ayxse/MotionScroll" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-white hover:underline transition duration-200 break-words w-full block" // Gray link, white hover, added break-words, w-full, and block
        >
          @ayxse/MotionScroll
        </a>
      </div>
    </div>
  );
}

export default Download;
