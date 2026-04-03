import React from 'react';

const steps = [
  'Download the APK file from GitHub Releases',
  'Open the file on your Android device',
  'Allow installation from unknown sources if prompted',
  'Follow the on-screen installation prompts',
  'Grant camera permissions when first launching the app',
];

function Download() {
  const handleDownload = () => {
    window.location.href = 'https://github.com/ayxse/MotionScroll/releases/tag/v1.0.2';
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-20 px-4">
      {/* Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-500/25 bg-violet-500/10 text-violet-300 text-[13px] font-medium mb-6 select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          v1.0.2 — Latest release
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
          Download MotionScroll
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
          Free, open-source, and installs directly as an APK. No Play Store required.
        </p>
      </div>

      {/* Main download card */}
      <div
        className="relative rounded-2xl border border-violet-500/20 p-10 text-center mb-8 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.07) 0%, rgba(3,3,3,0.5) 60%)' }}
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(139,92,246,0.1) 0%, transparent 70%)' }} />

        <div className="relative z-10">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 text-violet-400"
            style={{ background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.25)' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
              <path d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-1">Download for Android</h2>
          <p className="text-gray-400 mb-7 text-[15px]">Requires Android 8.0 or higher · Front-facing camera</p>

          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-black font-semibold text-[15px] rounded-xl hover:bg-gray-100 transition-all duration-200 mb-3"
            style={{ boxShadow: '0 0 32px rgba(139,92,246,0.35), 0 2px 8px rgba(0,0,0,0.4)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
              <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
            </svg>
            Download APK
          </button>
          <p className="text-xs text-gray-600">Free · Open Source · Apache 2.0 License</p>
        </div>
      </div>

      {/* Two-column info */}
      <div className="grid md:grid-cols-2 gap-5">
        {/* Installation steps */}
        <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-7">
          <h3 className="text-[17px] font-semibold text-white mb-5">Installation Guide</h3>
          <ol className="space-y-3">
            {steps.map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-[14px] text-gray-300">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-violet-600/30 border border-violet-500/30 text-violet-300 text-xs flex items-center justify-center font-semibold mt-0.5">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        {/* Open Source */}
        <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-7">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-violet-400"
              style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.18)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5 w-5 h-5">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.09.682-.218.682-.484 0-.236-.009-.866-.014-1.699-2.782.602-3.369-1.34-3.369-1.34-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.071 1.532 1.03 1.532 1.03.891 1.529 2.341 1.089 2.91.833.091-.647.349-1.086.635-1.337-2.22-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.254-.447-1.27.097-2.646 0 0 .84-.269 2.75 1.025A9.548 9.548 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.748-1.025 2.748-1.025.546 1.376.202 2.392.1 2.646.64.701 1.026 1.593 1.026 2.682 0 3.842-2.338 4.687-4.566 4.935.359.307.679.917.679 1.852 0 1.336-.012 2.415-.012 2.741 0 .269.18.579.688.481A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-[17px] font-semibold text-white">Open Source</h3>
          </div>
          <p className="text-[14px] text-gray-400 mb-5 leading-relaxed">
            MotionScroll is fully open source under the Apache 2.0 license. Explore the code, report issues, or contribute on GitHub.
          </p>
          <a
            href="https://github.com/ayxse/MotionScroll"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[14px] text-violet-400 hover:text-violet-300 font-medium transition-colors"
          >
            View on GitHub
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
              <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
            </svg>
          </a>

          <div className="mt-6 pt-5 border-t border-white/[0.06] space-y-2.5">
            {[
              'All processing happens on-device',
              'No user data collected or transmitted',
              'Camera feed never leaves your phone',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-[13.5px] text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 text-violet-400 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download;
