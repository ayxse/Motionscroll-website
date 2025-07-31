import React from 'react';

function RequirementsSection() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-gray-900/40 border border-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
          <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-300 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 text-black">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
          </div>
          <h2 className="text-xl md:text-2xl font-inter font-bold mb-3 text-white">System Requirements</h2>
          <p className="text-base text-gray-300 font-inter mb-4 max-w-xl mx-auto leading-relaxed">
            MotionScroll works on Android devices running Android 8.0 or higher with a front-facing camera.
          </p>
          <div className="inline-flex items-center text-gray-400 font-inter text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            All face-tracking processing happens locally on your device
          </div>
        </div>
      </div>
    </section>
  );
}

export default RequirementsSection;
