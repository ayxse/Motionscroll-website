import React from 'react';
import { Link } from 'react-router-dom';

function RequirementsSection() {
  return (
    <section className="py-16 px-4 pb-20">
      <div className="max-w-6xl mx-auto">
        <div
          className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] px-6 py-10 text-white shadow-2xl shadow-black/30 md:px-10 md:py-12"
        >
          <div className="relative z-10 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/10 text-[#d6ba73] text-[13px] font-medium mb-6 select-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
                Android 8.0 or higher
              </div>

              <h2 className="text-3xl md:text-4xl font-normal text-white mb-4">
                Ready to scroll hands-free?
              </h2>
              <p className="text-white/70 max-w-lg leading-7">
                Works on any Android device running Android 8.0+ with a front-facing camera. Free, open-source, and installs in minutes.
              </p>
            </div>

            <div className="flex flex-col gap-3 md:items-end">
              <a
                href="https://github.com/ayxse/MotionScroll/releases/tag/v1.0.2"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3 bg-[#e5dfd3] text-[#111111] font-medium text-[15px] rounded-lg hover:bg-white transition-all duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                  <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                </svg>
                Download APK
              </a>
              <Link
                to="/guide"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3 border border-white/15 text-white/75 font-medium text-[15px] rounded-lg hover:border-white/30 hover:text-white transition-all duration-200"
              >
                View Setup Guide
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                  <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                </svg>
              </Link>

              <p className="text-xs text-white/40 text-center md:text-right">
                All face-tracking processing happens locally · No cloud · No data collection
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RequirementsSection;
