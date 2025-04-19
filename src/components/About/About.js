import React, { useState } from 'react'; // Import useState
import step1 from '../../images/1.png'; 
import step2 from '../../images/2.png'; 
import step3 from '../../images/3.png';
import step4 from '../../images/4.png';
// import './About.css'; // Remove CSS import

function About() {
  const [expandedImage, setExpandedImage] = useState(null); // State for expanded image URL

  const openModal = (imageSrc) => {
    setExpandedImage(imageSrc);
  };

  const closeModal = () => {
    setExpandedImage(null);
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4 text-gray-100"> 
      <h2 className="text-4xl font-bold text-center mb-6 text-white">About</h2> 
      <p className="text-lg text-gray-500 text-center max-w-3xl mx-auto mb-12"> 
        MotionScroll was developed for the purpose of enabling hands-free scrolling through eye movement detection. This makes reading 
        and browsing more accessible and convenient, especially in situations where 
        using your hands isn't practical.
      </p>

      <div className="mb-16">
        <h3 className="text-3xl font-semibold text-center mb-10 text-gray-100">Installation Guide</h3> {/* Lighter gray heading */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Step Card Styling */}
          <div className="bg-gray-800/60 border border-gray-600/50 rounded-xl shadow-lg shadow-black/30 p-6 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            {/* Removed link, added onClick */}
            <img 
              src={step1} 
              alt="Enable Accessibility Service" 
              className="w-24 h-auto md:w-32 rounded-md border border-gray-600 hover:opacity-80 transition-opacity cursor-pointer flex-shrink-0" 
              onClick={() => openModal(step1)}
            /> 
            <div className="text-center md:text-left">
              <h4 className="text-xl font-semibold mb-2 text-white">Step 1: Enable Accessibility</h4> 
              <p className="text-gray-300">Open the app and click on "Enable Accessibility Service" to begin setup.</p> 
            </div>
          </div>

          <div className="bg-gray-800/60 border border-gray-600/50 rounded-xl shadow-lg shadow-black/30 p-6 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            {/* Removed link, added onClick */}
            <img 
              src={step2} 
              alt="Find MotionScroll" 
              className="w-24 h-auto md:w-32 rounded-md border border-gray-600 hover:opacity-80 transition-opacity cursor-pointer flex-shrink-0" 
              onClick={() => openModal(step2)}
            /> 
            <div className="text-center md:text-left">
              <h4 className="text-xl font-semibold mb-2 text-white">Step 2: Locate MotionScroll</h4> 
              <p className="text-gray-300">In your device's Accessibility settings, find and select "MotionScroll" from the list of services.</p> 
            </div>
          </div>

          <div className="bg-gray-800/60 border border-gray-600/50 rounded-xl shadow-lg shadow-black/30 p-6 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            {/* Removed link, added onClick */}
            <img 
              src={step3} 
              alt="Enable Service" 
              className="w-24 h-auto md:w-32 rounded-md border border-gray-600 hover:opacity-80 transition-opacity cursor-pointer flex-shrink-0" 
              onClick={() => openModal(step3)}
            /> 
            <div className="text-center md:text-left">
              <h4 className="text-xl font-semibold mb-2 text-white">Step 3: Activate Service</h4> 
              <p className="text-gray-300 mb-3">Enable the accessibility service for MotionScroll.</p> 
              {/* Adjusted Important Note background */}
              <div className="bg-gray-700/70 border border-yellow-500/60 p-3 rounded-md text-sm">
                <h5 className="font-bold text-yellow-400 mb-1">ⓘ Important:</h5> 
                <p className="text-yellow-300/90">Make sure to enable the "Overlay Shortcut" option. This creates a floating button 
                that allows you to quickly toggle the service on/off without navigating through settings again.</p> 
              </div>
            </div>
          </div>

          <div className="bg-gray-800/60 border border-gray-600/50 rounded-xl shadow-lg shadow-black/30 p-6 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            {/* Removed link, added onClick */}
            <img 
              src={step4} 
              alt="Grant Permissions" 
              className="w-24 h-auto md:w-32 rounded-md border border-gray-600 hover:opacity-80 transition-opacity cursor-pointer flex-shrink-0" 
              onClick={() => openModal(step4)}
            /> 
            <div className="text-center md:text-left">
              <h4 className="text-xl font-semibold mb-2 text-white">Step 4: Final Setup</h4> 
              <p className="text-gray-300">Press "Allow" to grant necessary permissions and complete the setup.</p> 
            </div>
          </div>
        </div>

        {/* Adjusted Overlay Info Section background (bg-gray-800/60) */}
        <div className="bg-gray-800/60 border border-gray-600/50 p-8 rounded-xl">
          <h3 className="text-2xl font-semibold text-center mb-4 text-white">Using the Overlay Shortcut</h3> 
          <p className="text-gray-400 text-center mb-6">The overlay shortcut is crucial for a smooth experience:</p> 
          <ul className="list-disc list-inside space-y-2 text-gray-300 max-w-md mx-auto"> 
            <li>It provides quick access to enable/disable the service</li>
            <li>Helps you regain manual control when needed</li>
            <li>Prevents getting stuck in auto-scroll mode</li>
            <li>Makes the app more user-friendly and accessible</li>
          </ul>
        </div>
      </div>

      {/* Modal for expanded image */}
      {expandedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" 
          onClick={closeModal} // Close modal on overlay click
        >
          <div 
            className="relative max-w-3xl max-h-[80vh]" 
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside image container
          >
            <img 
              src={expandedImage} 
              alt="Expanded step" 
              className="block max-w-full max-h-[80vh] object-contain rounded-lg" 
            />
            <button 
              onClick={closeModal}
              className="absolute -top-2 -right-2 bg-white text-black rounded-full p-1 leading-none text-xl font-bold w-8 h-8 flex items-center justify-center hover:bg-gray-300 transition"
              aria-label="Close image"
            >
              &times; {/* Close icon */}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default About;
