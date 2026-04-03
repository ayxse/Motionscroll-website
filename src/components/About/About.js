import React from 'react';

function About() {
  return (
    <div className="w-full max-w-3xl mx-auto py-20 px-4">
      {/* Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-500/25 bg-violet-500/10 text-violet-300 text-[13px] font-medium mb-6 select-none">
          Open Source · Apache 2.0
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          About MotionScroll
        </h1>
        <p className="text-gray-400 text-lg">
          Accessible technology, built for everyone.
        </p>
      </div>

      {/* Story */}
      <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-8 mb-5 space-y-5">
        {[
          'MotionScroll was built to enable hands-free scrolling through head movement detection. The app uses your device\'s front-facing camera to track subtle head movements and translate them into smooth, automatic scrolling actions.',
          'This makes reading and browsing more accessible and convenient — especially when your hands are occupied: eating, holding a baby, cooking, playing an instrument, or for users with limited mobility.',
          'The app works by analyzing real-time video to detect when you look up or down, then scrolling content in the corresponding direction. Sensitivity is adjustable so the experience feels natural to you. No special hardware or setup required — just a device with a front camera.',
          'The goal is to bridge the gap between traditional input methods and modern accessibility needs, making digital content inclusive for everyone.',
        ].map((para, i) => (
          <p key={i} className="text-gray-300 text-[15px] leading-relaxed">{para}</p>
        ))}
      </div>

      {/* Privacy note */}
      <div className="rounded-2xl border border-violet-500/20 bg-violet-500/[0.05] p-6 mb-5 flex gap-4">
        <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-violet-400 mt-0.5"
          style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)' }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="w-4.5 h-4.5 w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
          </svg>
        </div>
        <div>
          <h3 className="text-[15px] font-semibold text-white mb-1">Privacy by design</h3>
          <p className="text-gray-400 text-[14px] leading-relaxed">
            All head-movement detection runs locally on your device. No video data is ever transmitted, stored, or shared externally. Your camera feed stays on your phone, always.
          </p>
        </div>
      </div>

      {/* GitHub */}
      <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-8 text-center">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-4 text-violet-400"
          style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.09.682-.218.682-.484 0-.236-.009-.866-.014-1.699-2.782.602-3.369-1.34-3.369-1.34-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.071 1.532 1.03 1.532 1.03.891 1.529 2.341 1.089 2.91.833.091-.647.349-1.086.635-1.337-2.22-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.254-.447-1.27.097-2.646 0 0 .84-.269 2.75 1.025A9.548 9.548 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.748-1.025 2.748-1.025.546 1.376.202 2.392.1 2.646.64.701 1.026 1.593 1.026 2.682 0 3.842-2.338 4.687-4.566 4.935.359.307.679.917.679 1.852 0 1.336-.012 2.415-.012 2.741 0 .269.18.579.688.481A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">Open Source Project</h2>
        <p className="text-gray-400 text-[14.5px] mb-6 max-w-sm mx-auto leading-relaxed">
          MotionScroll is open source. Explore the code, report issues, or contribute on GitHub.
        </p>
        <a
          href="https://github.com/ayxse/MotionScroll"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[14.5px] text-violet-400 hover:text-violet-300 font-medium transition-colors"
        >
          github.com/ayxse/MotionScroll
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
