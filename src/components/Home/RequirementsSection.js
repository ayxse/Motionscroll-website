import React from 'react';
import { Link } from 'react-router-dom';

function RequirementsSection() {
  return (
    <section className="py-12 px-4 pb-16">
      <div className="max-w-6xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-12" />

        {/* CTA card */}
        <div
          className="relative rounded-2xl border border-violet-500/20 overflow-hidden text-center px-8 py-14"
          style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(3,3,3,0.6) 60%)' }}
        >
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(139,92,246,0.12) 0%, transparent 70%)' }} />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/25 bg-violet-500/10 text-violet-300 text-[13px] font-medium mb-6 select-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
              </svg>
              Android 8.0 or higher
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Ready to scroll hands-free?
            </h2>
            <p className="text-gray-400 max-w-md mx-auto mb-8 leading-relaxed">
              Works on any Android device running Android 8.0+ with a front-facing camera. Free, open-source, and installs in minutes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://github.com/ayxse/MotionScroll/releases/tag/v1.0.2"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold text-[15px] rounded-xl hover:bg-gray-100 transition-all duration-200"
                style={{ boxShadow: '0 0 28px rgba(139,92,246,0.3)' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                  <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                </svg>
                Download APK
              </a>
              <Link
                to="/guide"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/12 text-gray-300 font-medium text-[15px] rounded-xl hover:border-white/25 hover:text-white transition-all duration-200"
              >
                View Setup Guide
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                  <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>

            <p className="text-xs text-gray-600 mt-5">
              All face-tracking processing happens locally · No cloud · No data collection
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RequirementsSection;
