import React, { useState, useEffect, useCallback } from 'react'; // Import useEffect, useCallback
import step1Img from '../../images/tutorial/1.png';
import step2Img from '../../images/tutorial/2.png';
import step3Img from '../../images/tutorial/3.png';
import step4Img from '../../images/tutorial/4.png';
import step5Img from '../../images/tutorial/5.png';
import step6Img from '../../images/tutorial/6.png';
// Permissions Guide Images
import perm7 from '../../images/permissions/7.png';
import perm71 from '../../images/permissions/7.1.png';
import perm8 from '../../images/permissions/8.png';
import perm9 from '../../images/permissions/9.png';
import perm10 from '../../images/permissions/10.png';
import perm101 from '../../images/permissions/10.1.png';
import perm11 from '../../images/permissions/11.png';
import perm12 from '../../images/permissions/12.png';
import perm13 from '../../images/permissions/13.png';

// Group permission images by step
const permStep1Images = [perm7, perm71, perm8];
const permStep2Images = [perm9, perm10, perm101, perm11];
const permStep3Images = [perm12, perm13];

// Combine all permission image arrays to easily check if the active set is a permission set
const allPermissionSets = [permStep1Images, permStep2Images, permStep3Images];

// Array of setup images (still not interactive)
const setupImages = [step1Img, step2Img, step3Img, step4Img, step5Img, step6Img];


// Renamed function from About to Guide
function Guide() {
  // State now holds the index of the expanded image, or null if closed
  const [expandedImageIndex, setExpandedImageIndex] = useState(null); 
  // State to track which image set is currently being viewed (permissions or setup)
  const [activeImageSet, setActiveImageSet] = useState([]); 

  // Function to open the modal, finding the index in the correct set
  const openModal = (imageSrc, imageSet) => {
    const index = imageSet.findIndex(img => img === imageSrc);
    if (index !== -1) {
      setActiveImageSet(imageSet); // Store which set is active
      setExpandedImageIndex(index);
    }
  };

  // Function to close the modal
  const closeModal = () => {
    setExpandedImageIndex(null);
    setActiveImageSet([]); // Clear active set
  };

  // Function to go to the next image (stops at end)
  const goToNextImage = useCallback(() => {
    if (expandedImageIndex !== null && activeImageSet.length > 0) {
      setExpandedImageIndex((prevIndex) => {
        // Only increment if not already at the last image
        return prevIndex < activeImageSet.length - 1 ? prevIndex + 1 : prevIndex;
      });
    }
  }, [expandedImageIndex, activeImageSet]);

  // Function to go to the previous image (stops at beginning)
  const goToPrevImage = useCallback(() => {
    if (expandedImageIndex !== null && activeImageSet.length > 0) {
      setExpandedImageIndex((prevIndex) => {
        // Only decrement if not already at the first image
        return prevIndex > 0 ? prevIndex - 1 : prevIndex;
      });
    }
  }, [expandedImageIndex, activeImageSet]);

  // Effect for keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (expandedImageIndex !== null) { // Only act if modal is open
        if (event.key === 'ArrowRight') {
          goToNextImage();
        } else if (event.key === 'ArrowLeft') {
          goToPrevImage();
        } else if (event.key === 'Escape') {
          closeModal();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [expandedImageIndex, goToNextImage, goToPrevImage]); // Dependencies

  return (
    // Changed main heading from About to Guides
    <div className="w-full max-w-5xl mx-auto py-12 px-4 text-gray-100"> 
      <h2 className="text-4xl font-bold text-center mb-16 text-white">Installation Guides</h2> 
      {/* Removed descriptive paragraph */}

      {/* Permissions Guide Section - Adjusted red colors */}
      <div className="mb-16 bg-red-800/30 border border-red-400/50 rounded-xl shadow-lg shadow-black/30 p-8">
        <h3 className="text-3xl font-semibold text-center mb-8 text-red-300">⚠️ Important: Permissions Guide</h3>
        <p className="text-center text-red-200 mb-10 max-w-2xl mx-auto">
          Due to Android security restrictions, you must manually allow restricted settings for MotionScroll to function correctly. Follow these steps before proceeding to the main Setup Guide.
        </p>

        {/* Changed space-y-10 to gap-8 and removed space-y-10 */}
        <div className="grid grid-cols-1 gap-8"> 
          {/* Step 1: Initial Check - Adjusted step background and screenshot outline */}
          <div className="bg-black/25 border border-red-300/50 rounded-xl shadow-lg shadow-black/30 p-6">
            <h4 className="text-2xl font-semibold mb-4 text-white text-center">Step 1: Check Accessibility Settings</h4>
            <p className="text-gray-300 mb-6 text-center">After installing and opening MotionScroll, navigate to your phone's Accessibility settings. Look for "Installed apps" or "Downloaded apps". You'll likely find MotionScroll listed but greyed out due to restricted settings.</p>
            {/* Removed inner background, added darker outline to images */}
            <div className="flex flex-wrap justify-center gap-4"> 
              {/* Pass the specific step image array, darker outline */}
              <img src={perm7} alt="Open MotionScroll App" className="w-auto h-48 rounded-md cursor-pointer hover:opacity-80 transition-opacity outline outline-1 outline-white/25" onClick={() => openModal(perm7, permStep1Images)} />
              <img src={perm71} alt="Navigate Accessibility Services" className="w-auto h-48 rounded-md cursor-pointer hover:opacity-80 transition-opacity outline outline-1 outline-white/25" onClick={() => openModal(perm71, permStep1Images)} />
              <img src={perm8} alt="MotionScroll Greyed Out" className="w-auto h-48 rounded-md cursor-pointer hover:opacity-80 transition-opacity outline outline-1 outline-white/25" onClick={() => openModal(perm8, permStep1Images)} />
            </div>
          </div>

          {/* Step 2: Find App Settings - Darker red background, darker screenshot outline */}
          <div className="bg-black/25 border border-red-300/50 rounded-xl shadow-lg shadow-black/30 p-6">
            <h4 className="text-2xl font-semibold mb-4 text-white text-center">Step 2: Locate MotionScroll in Settings</h4>
            <p className="text-gray-300 mb-6 text-center">Go to your main device Settings. Find the "Apps" or "Applications" section. Search for and select "MotionScroll" from the list of installed applications.</p>
            {/* Removed inner background, added darker outline to images */}
            <div className="flex flex-wrap justify-center gap-4">
              {/* Pass the specific step image array, darker outline */}
              <img src={perm9} alt="Device Settings" className="w-auto h-48 rounded-md cursor-pointer hover:opacity-80 transition-opacity outline outline-1 outline-white/25" onClick={() => openModal(perm9, permStep2Images)} />
              <img src={perm10} alt="Search for Apps" className="w-auto h-48 rounded-md cursor-pointer hover:opacity-80 transition-opacity outline outline-1 outline-white/25" onClick={() => openModal(perm10, permStep2Images)} />
              <img src={perm101} alt="Find MotionScroll in Apps" className="w-auto h-48 rounded-md cursor-pointer hover:opacity-80 transition-opacity outline outline-1 outline-white/25" onClick={() => openModal(perm101, permStep2Images)} />
              <img src={perm11} alt="Select MotionScroll" className="w-auto h-48 rounded-md cursor-pointer hover:opacity-80 transition-opacity outline outline-1 outline-white/25" onClick={() => openModal(perm11, permStep2Images)} />
            </div>
          </div>

          {/* Step 3: Allow Restricted Settings - Darker red background, darker screenshot outline */}
          <div className="bg-black/25 border border-red-300/50 rounded-xl shadow-lg shadow-black/30 p-6">
            <h4 className="text-2xl font-semibold mb-4 text-white text-center">Step 3: Allow Restricted Settings</h4>
            <p className="text-gray-300 mb-6 text-center">Once on the MotionScroll app info page, tap the three dots (⋮) in the top-right corner. Select "Allow restricted settings" from the dropdown menu.</p>
            {/* Removed inner background, added darker outline to images */}
            <div className="flex flex-wrap justify-center gap-4">
              {/* Pass the specific step image array, darker outline */}
              <img src={perm12} alt="Tap Three Dots" className="w-auto h-48 rounded-md cursor-pointer hover:opacity-80 transition-opacity outline outline-1 outline-white/25" onClick={() => openModal(perm12, permStep3Images)} />
              <img src={perm13} alt="Allow Restricted Settings" className="w-auto h-48 rounded-md cursor-pointer hover:opacity-80 transition-opacity outline outline-1 outline-white/25" onClick={() => openModal(perm13, permStep3Images)} />
            </div>
             <p className="text-center text-green-300 mt-8 font-semibold">
              After completing these steps, you can proceed with the Setup Guide below.
            </p>
          </div>
        </div>
      </div>
      {/* End Permissions Guide Section */}

      {/* Setup Guide Section */}
      <div className="mb-16">
        <h3 className="text-3xl font-semibold text-center mb-10 text-gray-100">Setup Guide</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Step 1 */}
          <div className="bg-gray-800/60 border border-gray-600/50 rounded-xl shadow-lg shadow-black/30 p-6 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <img 
              src={step1Img} 
              alt="Step 1: Find Accessibility Services" 
              className="w-24 h-auto md:w-32 rounded-md border border-gray-600 hover:opacity-80 transition-opacity cursor-pointer flex-shrink-0" 
              // Pass setupImages array for setup guide images
              onClick={() => openModal(step1Img, setupImages)} 
            /> 
            <div className="text-center md:text-left">
              <h4 className="text-xl font-semibold mb-2 text-white">Step 1: Find Accessibility Services</h4> 
              <p className="text-gray-300">When you first load the app, navigate to your device\'s Accessibility settings and select "Accessibility Services".</p> 
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-gray-800/60 border border-gray-600/50 rounded-xl shadow-lg shadow-black/30 p-6 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <img 
              src={step2Img} 
              alt="Step 2: Locate MotionScroll" 
              className="w-24 h-auto md:w-32 rounded-md border border-gray-600 hover:opacity-80 transition-opacity cursor-pointer flex-shrink-0" 
              onClick={() => openModal(step2Img, setupImages)}
            /> 
            <div className="text-center md:text-left">
              <h4 className="text-xl font-semibold mb-2 text-white">Step 2: Locate MotionScroll</h4> 
              <p className="text-gray-300">In your device\'s Accessibility settings, find and select "MotionScroll" from the list of services.</p> 
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-gray-800/60 border border-gray-600/50 rounded-xl shadow-lg shadow-black/30 p-6 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <img 
              src={step3Img} 
              alt="Step 3: Activate Service" 
              className="w-24 h-auto md:w-32 rounded-md border border-gray-600 hover:opacity-80 transition-opacity cursor-pointer flex-shrink-0" 
              onClick={() => openModal(step3Img, setupImages)}
            /> 
            <div className="text-center md:text-left">
              <h4 className="text-xl font-semibold mb-2 text-white">Step 3: Activate Service</h4> 
              <p className="text-gray-300">Enable the accessibility service for MotionScroll.</p> 
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-gray-800/60 border border-gray-600/50 rounded-xl shadow-lg shadow-black/30 p-6 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <img 
              src={step4Img} 
              alt="Step 4: Grant Permissions" 
              className="w-24 h-auto md:w-32 rounded-md border border-gray-600 hover:opacity-80 transition-opacity cursor-pointer flex-shrink-0" 
              onClick={() => openModal(step4Img, setupImages)}
            /> 
            <div className="text-center md:text-left">
              <h4 className="text-xl font-semibold mb-2 text-white">Step 4: Grant Permissions</h4> 
              <p className="text-gray-300">Press "Allow" to grant MotionScroll full control of the device to control the screen and perform actions.</p> 
            </div>
          </div>

          {/* Step 5 */}
          <div className="bg-gray-800/60 border border-gray-600/50 rounded-xl shadow-lg shadow-black/30 p-6 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <img 
              src={step5Img} 
              alt="Step 5: Enable Overlay Shortcut" 
              className="w-24 h-auto md:w-32 rounded-md border border-gray-600 hover:opacity-80 transition-opacity cursor-pointer flex-shrink-0" 
              onClick={() => openModal(step5Img, setupImages)}
            /> 
            <div className="text-center md:text-left">
              <h4 className="text-xl font-semibold mb-2 text-white">Step 5: Enable Overlay Shortcut</h4> 
              {/* Adjusted Important Note background */}
              <div className="bg-gray-700/70 border border-yellow-500/60 p-3 rounded-md text-sm mt-2">
                <h5 className="font-bold text-yellow-400 mb-1">ⓘ Important:</h5> 
                <p className="text-yellow-300/90">Make sure to enable the "Overlay Shortcut" option. This creates a floating button for quick toggling.</p> 
              </div>
            </div>
          </div>

          {/* Step 6 */}
          <div className="bg-gray-800/60 border border-gray-600/50 rounded-xl shadow-lg shadow-black/30 p-6 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <img 
              src={step6Img} 
              alt="Step 6: Enable Camera" 
              className="w-24 h-auto md:w-32 rounded-md border border-gray-600 hover:opacity-80 transition-opacity cursor-pointer flex-shrink-0" 
              onClick={() => openModal(step6Img, setupImages)}
            /> 
            <div className="text-center md:text-left">
              <h4 className="text-xl font-semibold mb-2 text-white">Step 6: Enable Camera</h4> 
              <p className="text-gray-300">Enable the camera slider within the app to start face tracking and control your screen.</p> 
            </div>
          </div>
        </div>

        {/* Overlay Control Guide */}
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

      {/* Updated Modal for expanded image with navigation */}
      {expandedImageIndex !== null && activeImageSet.length > 0 && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" 
          onClick={closeModal} // Close modal on overlay click
        >
          {/* Previous Button - Show only if active set is permissions AND not the first image */}
          {allPermissionSets.includes(activeImageSet) && expandedImageIndex > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevImage(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-white/50 text-black rounded-full p-2 leading-none text-2xl font-bold w-10 h-10 flex items-center justify-center hover:bg-white/80 transition"
              aria-label="Previous image"
            >
              {'<'}
            </button>
          )}

          {/* Image Container */}
          <div 
            className="relative max-w-3xl max-h-[80vh]" 
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside image container
          >
            <img 
              src={activeImageSet[expandedImageIndex]} // Get image source from the active set using the index
              alt={`Expanded step ${expandedImageIndex + 1}`} 
              className="block max-w-full max-h-[80vh] object-contain rounded-lg" 
            />
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute -top-3 -right-3 bg-white text-black rounded-full p-1 leading-none text-xl font-bold w-8 h-8 flex items-center justify-center hover:bg-gray-300 transition"
              aria-label="Close image"
            >
              &times; {/* Close icon */}
            </button>
          </div>

          {/* Next Button - Show only if active set is permissions AND not the last image */}
           {allPermissionSets.includes(activeImageSet) && expandedImageIndex < activeImageSet.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goToNextImage(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-white/50 text-black rounded-full p-2 leading-none text-2xl font-bold w-10 h-10 flex items-center justify-center hover:bg-white/80 transition"
              aria-label="Next image"
            >
              {'>'}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Guide; // Export Guide
