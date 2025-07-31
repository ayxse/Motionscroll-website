import React from 'react';


function HeroSection() {


  return (
    <section className="pt-12 pb-16 px-4 text-center">
      {/* Main headline similar to LM Studio */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-inter font-bold mb-6 tracking-tight">
        <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
          Your hands-free
        </span>
        <br />
        <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
          scrolling application.
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-gray-400 font-inter font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
        Scroll through content using head movements.&nbsp;
        <br className="hidden md:block" />
        Powered by your device's camera.
      </p>

      {/* Download button prominently placed */}
      <div className="mb-16">
        <a 
          href="https://github.com/ayxse/MotionScroll/releases/tag/v1.0.2"
          className="inline-flex items-center px-8 py-4 bg-white text-black font-inter font-semibold text-lg rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg shadow-white/10 hover:shadow-white/20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-3">
            <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
            <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
          </svg>
          Download MotionScroll
        </a>
        <p className="text-xs text-gray-500 mt-3 font-inter text-center">MotionScroll is free and Open-source.</p>
      </div>

   

    </section>
  );
}

export default HeroSection;
