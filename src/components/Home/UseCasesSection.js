import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const useCases = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
        <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/>
      </svg>
    ),
    label: 'Read news & long-form articles',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    label: 'Review business documents',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px]" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M19 3v12h-5c-.023 -3.681 .184 -7.406 5 -12zm0 12v6h-1v-3m-10 -14v17m-3 -17v3a3 3 0 1 0 6 0v-3" />
      </svg>
    ),
    label: 'Follow recipes while cooking',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="5.5" cy="17.5" r="2.5"/>
        <circle cx="17.5" cy="15.5" r="2.5"/>
        <path d="M8 17V5l12-2v12"/>
      </svg>
    ),
    label: 'Read sheet music while playing',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    label: 'Study research papers & docs',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    label: 'Browse on the go, hands occupied',
  },
];

function UseCasesSection() {
  const observerOptions = { threshold: 0.08 };
  const [sec1Ref, isSec1Visible] = useScrollAnimation(observerOptions);
  const [sec2Ref, isSec2Visible] = useScrollAnimation(observerOptions);
  const [sec3Ref, isSec3Visible] = useScrollAnimation(observerOptions);
  const [sec4Ref, isSec4Visible] = useScrollAnimation(observerOptions);
  const [sec5Ref, isSec5Visible] = useScrollAnimation(observerOptions);
  const [sec6Ref, isSec6Visible] = useScrollAnimation(observerOptions);

  const refs = [sec1Ref, sec2Ref, sec3Ref, sec4Ref, sec5Ref, sec6Ref];
  const visibles = [isSec1Visible, isSec2Visible, isSec3Visible, isSec4Visible, isSec5Visible, isSec6Visible];

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-12" />

        <div className="text-center mb-10">
          <p className="text-[13px] font-semibold tracking-widest text-violet-400/80 uppercase mb-3">Use cases</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight">
            Built for the moments your<br className="hidden md:block" /> hands are busy
          </h2>
          <p className="text-gray-400 max-w-md mx-auto leading-relaxed">
            Wherever scrolling is awkward or impossible, MotionScroll steps in.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
          {useCases.map((uc, i) => (
            <div
              key={uc.label}
              ref={refs[i]}
              className={`flex items-center gap-3.5 rounded-xl border border-white/[0.07] bg-white/[0.03] px-5 py-4
                hover:bg-white/[0.055] hover:border-violet-500/20 transition-all duration-300
                ${visibles[i] ? 'opacity-100 translate-y-0' : 'scroll-animate-init'}`}
              style={{ transitionDelay: `${(i % 3) * 60}ms` }}
            >
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-violet-400"
                style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.18)' }}>
                {uc.icon}
              </div>
              <span className="text-gray-200 text-[14.5px] font-medium leading-snug">{uc.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UseCasesSection;
