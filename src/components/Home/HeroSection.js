import React from 'react';
const trustItems = [
  'On-device processing',
  'No cloud upload',
  'Front camera control',
  'Quick overlay toggle',
];

function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pt-6 pb-16 md:pt-10">
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="text-center lg:text-left">
          <p className="mb-4 text-[13px] font-medium uppercase text-[#d6ba73]">
            Hands-free Android scrolling
          </p>

          <h1 className="mb-6 text-5xl font-normal leading-[1.04] text-[#f1ede4] md:text-6xl lg:text-[68px]">
            Scroll hands-free with
            <span className="text-[#d6ba73]"> MotionScroll</span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-base leading-8 text-[#b8b2a8] md:text-lg lg:mx-0">
            Turn subtle head movement into smooth Android scrolling. Built for reading, cooking, studying, and every moment your hands are busy.
          </p>

          <div className="mb-9 flex flex-col items-center gap-3 sm:flex-row lg:items-start">
            <a
              href="https://github.com/ayxse/MotionScroll/releases/tag/v1.0.2"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#e5dfd3] px-6 py-3 text-[15px] font-medium text-[#111111] transition-all duration-200 hover:bg-white sm:w-auto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
              </svg>
              Download APK
            </a>
            <a
              href="https://github.com/ayxse/MotionScroll"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/12 bg-white/[0.07] px-6 py-3 text-[15px] font-medium text-white transition-all duration-200 hover:bg-white/[0.11] sm:w-auto"
            >
              View source
              <span className="text-white/45">↗</span>
            </a>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10 text-left">
            {trustItems.map((label) => (
              <div key={label} className="flex items-center gap-3 py-3 text-sm text-white/72">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#d6ba73]/12 text-[#d6ba73]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                </span>
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="group relative min-h-[520px] overflow-hidden rounded-lg border border-white/10 bg-[#121212] p-5 shadow-2xl shadow-black/35 transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
          <div className="relative z-10 mx-auto flex min-h-[480px] max-w-[520px] flex-col justify-center gap-4">
            <div className="rounded-lg border border-white/10 bg-[#171717] p-5 shadow-xl shadow-black/25">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium uppercase text-[#d6ba73]">Motion engine</p>
                  <h3 className="mt-2 text-2xl font-normal text-white">Scroll active</h3>
                </div>
                <div className="flex h-11 w-20 items-center justify-end rounded-full border border-white/12 bg-white/[0.06] p-1">
                  <span className="h-9 w-9 rounded-full bg-[#d6ba73] animate-soft-pulse" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-white/10 bg-white/[0.06] p-4">
                  <p className="text-[11px] font-medium uppercase text-white/45">Head angle</p>
                  <p className="mt-2 text-2xl font-medium text-white">-12°</p>
                  <p className="mt-1 text-xs text-[#d6ba73]">Tilt up detected</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.06] p-4">
                  <p className="text-[11px] font-medium uppercase text-white/45">Processing</p>
                  <p className="mt-2 text-2xl font-medium text-white">Local</p>
                  <p className="mt-1 text-xs text-[#8fbfd0]">No video upload</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-[#171717] p-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-medium text-white">Scroll response</span>
                <span className="rounded-full bg-white/[0.07] px-2.5 py-1 text-xs font-medium text-[#d6ba73]">Smooth</span>
              </div>
              <div className="relative h-28 overflow-hidden rounded-lg border border-white/10 bg-[#101010]">
                <div className="absolute inset-x-8 top-1/2 h-px bg-white/10" />
                <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2">
                  <div className="relative h-16">
                    <div className="animate-signal-dot absolute left-0 top-8 h-2 w-2 rounded-full bg-white/30" />
                    <div className="animate-signal-dot absolute left-[22%] top-4 h-2 w-2 rounded-full bg-[#d6ba73]" style={{ animationDelay: '0.25s' }} />
                    <div className="animate-signal-dot absolute left-[46%] top-10 h-2 w-2 rounded-full bg-[#8fbfd0]" style={{ animationDelay: '0.5s' }} />
                    <div className="animate-signal-dot absolute left-[70%] top-6 h-2 w-2 rounded-full bg-[#e5dfd3]" style={{ animationDelay: '0.75s' }} />
                    <div className="animate-signal-dot absolute right-0 top-8 h-2 w-2 rounded-full bg-white/30" style={{ animationDelay: '1s' }} />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/38">
                  <span>Tilt up</span>
                  <span>Neutral</span>
                  <span>Tilt down</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                ['Camera', 'On'],
                ['Overlay', 'Ready'],
                ['Data', 'Private'],
                ['Android', '8.0+'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3">
                  <p className="text-[11px] font-medium uppercase text-white/38">{label}</p>
                  <p className="mt-1 text-sm font-medium text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
