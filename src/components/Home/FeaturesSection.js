import React from 'react';

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: 'Head-motion scrolling',
    desc: 'Tilt your head up or down to scroll in any direction. The app continuously reads your head angle and translates it to smooth, natural scrolling.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4v4a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
        <path d="M6 10a6 6 0 0 0 12 0" />
        <line x1="12" y1="16" x2="12" y2="22" />
      </svg>
    ),
    title: 'Responsive face tracking',
    desc: 'Advanced face-detection runs entirely on your device, adapting to different lighting and angles for responsive, low-latency control.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Privacy first',
    desc: 'All processing happens locally on your device. Camera data never leaves your phone — no cloud, no storage, no tracking.',
  },
];

function FeaturesSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
          <div className="lg:sticky lg:top-24">
            <p className="text-[13px] font-medium text-[#d6ba73] uppercase mb-3">How it works</p>
            <h2 className="text-3xl md:text-4xl font-normal mb-4 text-white">
              Effortless, hands-free scrolling
            </h2>
            <p className="text-white/58 leading-7 max-w-md">
              Your phone reads head angle from the front camera, translates that motion into scroll actions, and keeps the signal local.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-lg border border-white/10 bg-white/[0.06] p-6 transition-all duration-200 ease-out hover:bg-white/[0.075] hover:border-white/20"
              >
                <div className="flex gap-5">
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 text-[#d6ba73] bg-[#d6ba73]/10 border border-[#d6ba73]/20">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-normal mb-2 text-white">{f.title}</h3>
                    <p className="text-white/58 text-[14.5px] leading-7">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
