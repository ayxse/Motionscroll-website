import React from 'react';
// import './Download.css'; // Remove CSS import

function Download() {
  const handleDownload = () => {
    window.location.href = "https://github.com/ayxse/MotionScroll/releases/tag/v1.0.2";
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 text-gray-100"> {/* Lighter base text */}
      <h2 className="text-4xl font-bold text-center mb-10 text-white">Download MotionScroll</h2> {/* White heading */}
      
      <div className="grid md:grid-cols-2 gap-10 mb-12">
        {/* Adjusted Download Card background (bg-gray-800/60) */}
        <div className="bg-gray-800/60 border border-gray-600/50 p-8 rounded-xl shadow-lg shadow-black/30 text-center flex flex-col items-center">
          <h3 className="text-2xl font-semibold mb-3 text-white">Android App</h3> {/* White heading */}
          <p className="text-gray-400 mb-6">Compatible with Android 8.0 and higher</p> {/* Medium gray text */}
          <button 
            className="bg-white text-black font-bold py-3 px-8 rounded-lg hover:bg-gray-200 transition duration-200 mb-3" // White button
            onClick={handleDownload}
          >
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
        <h3 className="text-2xl font-semibold mb-3 text-white">Open Source</h3> {/* White heading */}
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
