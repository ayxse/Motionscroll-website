import React from 'react';
// import './Download.css'; // Remove CSS import

function Download() {
  const handleDownload = () => {
    window.location.href = "https://github.com/ayxse/MotionScroll/releases/tag/v1.0.2";
  };

  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-inter font-bold mb-4 text-white">
            Get Started with MotionScroll
          </h1>
          <p className="text-lg text-gray-400 font-inter max-w-2xl mx-auto">
            Download the app and start experiencing hands-free scrolling today.
          </p>
        </div>

        {/* Main download section */}
        <div className="mb-12">
          <div className="bg-gray-900/40 border border-gray-800/50 p-8 rounded-2xl backdrop-blur-sm text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-300 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7 text-black">
                  <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                  <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                </svg>
              </div>
              <h2 className="text-2xl font-inter font-semibold mb-2 text-white">Download for Android</h2>
              <p className="text-gray-400 font-inter mb-6">Compatible with Android 8.0 and higher</p>
            </div>
            
            <button 
              className="inline-flex items-center px-8 py-3 bg-white text-black font-inter font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg shadow-white/10 hover:shadow-white/20 mb-3"
              onClick={handleDownload}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-2">
                <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
              </svg>
              Download APK
            </button>
            <p className="text-sm text-gray-500 font-inter">Version 1.0.2</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Installation Instructions */}
          <div className="bg-gray-900/40 border border-gray-800/50 p-6 rounded-2xl backdrop-blur-sm">
            <h3 className="text-xl font-inter font-semibold mb-4 text-white">Installation Guide</h3>
            <ol className="space-y-2 text-sm text-gray-300 font-inter">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-5 h-5 bg-gray-700 text-white text-xs rounded-full flex items-center justify-center mr-3 mt-0.5">1</span>
                Download the APK file
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-5 h-5 bg-gray-700 text-white text-xs rounded-full flex items-center justify-center mr-3 mt-0.5">2</span>
                Open the file on your Android device
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-5 h-5 bg-gray-700 text-white text-xs rounded-full flex items-center justify-center mr-3 mt-0.5">3</span>
                Allow installation from unknown sources if prompted
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-5 h-5 bg-gray-700 text-white text-xs rounded-full flex items-center justify-center mr-3 mt-0.5">4</span>
                Follow the installation prompts
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-5 h-5 bg-gray-700 text-white text-xs rounded-full flex items-center justify-center mr-3 mt-0.5">5</span>
                Grant camera permissions when first launching the app
              </li>
            </ol>
          </div>

          {/* Open Source */}
          <div className="bg-gray-900/40 border border-gray-800/50 p-6 rounded-2xl backdrop-blur-sm">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-300 rounded-lg flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-black w-5 h-5">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.09.682-.218.682-.484 0-.236-.009-.866-.014-1.699-2.782.602-3.369-1.34-3.369-1.34-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.071 1.532 1.03 1.532 1.03.891 1.529 2.341 1.089 2.91.833.091-.647.349-1.086.635-1.337-2.22-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.254-.447-1.27.097-2.646 0 0 .84-.269 2.75 1.025A9.548 9.548 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.748-1.025 2.748-1.025.546 1.376.202 2.392.1 2.646.64.701 1.026 1.593 1.026 2.682 0 3.842-2.338 4.687-4.566 4.935.359.307.679.917.679 1.852 0 1.336-.012 2.415-.012 2.741 0 .269.18.579.688.481A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-inter font-semibold text-white">Open Source</h3>
            </div>
            <p className="text-sm text-gray-400 font-inter mb-4 leading-relaxed">
              MotionScroll is open source and available on GitHub. Contribute to the project, report issues, or explore the code.
            </p>
            <a 
              href="https://github.com/ayxse/MotionScroll" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-gray-300 hover:text-white transition-colors duration-200 font-inter font-medium text-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 mr-2">
                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
              </svg>
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download;
