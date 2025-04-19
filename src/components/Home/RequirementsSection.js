import React from 'react';

function RequirementsSection() {
  return (
    // Adjusted background (bg-gray-800/60)
    <section className="py-10 px-4 text-center mb-14 bg-gray-800/60 border border-gray-600/50 rounded-xl shadow-lg shadow-black/30"> 
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Requirements</h2> {/* White heading */}
      <p className="text-lg text-gray-300 mb-4 max-w-xl mx-auto">Compatible with Android devices running Android 8.0 or higher with a front-facing camera.</p> {/* Lighter gray text */}
      <p className="text-sm text-gray-500 max-w-xl mx-auto">Note: MotionScroll requires camera permissions for eye-tracking functionality. All processing is done on-device to ensure your privacy.</p> {/* Medium gray text */}
    </section>
  );
}

export default RequirementsSection;
