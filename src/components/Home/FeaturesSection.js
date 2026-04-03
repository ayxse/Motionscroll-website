import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: 'Head-Motion Scrolling',
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
    title: 'Smart Face Tracking',
    desc: 'Advanced face-detection runs entirely on your device, adapting to different lighting and angles for responsive, low-latency control.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Privacy First',
    desc: 'All processing happens locally on your device. Camera data never leaves your phone — no cloud, no storage, no tracking.',
  },
];

function FeaturesSection() {
  const sectionRef = useScrollAnimation()[0];
  const [card1Ref, isCard1Visible] = useScrollAnimation({ delay: 0 });
  const [card2Ref, isCard2Visible] = useScrollAnimation({ delay: 80 });
  const [card3Ref, isCard3Visible] = useScrollAnimation({ delay: 160 });

  const refs = [card1Ref, card2Ref, card3Ref];
  const visibles = [isCard1Visible, isCard2Visible, isCard3Visible];

  return (
    <section className="py-12 px-4" ref={sectionRef}>
      {/* Divider line */}
      <div className="max-w-6xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-12" />

        {/* Section header */}
        <div className="text-center mb-10">
          <p className="text-[13px] font-semibold tracking-widest text-violet-400/80 uppercase mb-3">How it works</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight">
            Effortless, hands-free scrolling
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
            Using your device's front-facing camera, MotionScroll tracks head movements to scroll automatically. No touch, no hands — just look.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              ref={refs[i]}
              className={`group relative rounded-2xl border p-7 transition-all duration-500 ease-out
                bg-white/[0.03] border-white/[0.07]
                hover:bg-white/[0.055] hover:border-violet-500/20
                ${visibles[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                transitionDelay: `${i * 80}ms`,
                boxShadow: '0 1px 0 0 rgba(255,255,255,0.04) inset',
              }}
            >
              {/* Subtle card glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: '0 0 40px rgba(139,92,246,0.08)' }} />

              {/* Icon */}
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 text-violet-400"
                style={{ background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.2)' }}>
                {f.icon}
              </div>

              <h3 className="text-[17px] font-semibold mb-2.5 text-white">{f.title}</h3>
              <p className="text-gray-400 text-[14.5px] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
