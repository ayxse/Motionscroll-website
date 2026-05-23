import React from 'react';

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
  return (
    <section className="py-16 px-4 border-y border-white/[0.08]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 mx-auto max-w-2xl">
          <p className="text-[13px] font-medium text-[#d6ba73] uppercase mb-3">Use cases</p>
          <h2 className="text-3xl md:text-4xl font-normal mb-4 text-white">
            Built for busy hands
          </h2>
          <p className="text-white/58 leading-7">
            Wherever scrolling is awkward or impossible, MotionScroll steps in.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
          {useCases.map((uc) => (
            <div
              key={uc.label}
              className="flex items-center gap-3.5 rounded-lg border border-white/10 bg-white/[0.06] px-5 py-4 transition-all duration-200 hover:bg-white/[0.075] hover:border-white/20"
            >
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-[#d6ba73] bg-[#d6ba73]/10 border border-[#d6ba73]/20">
                {uc.icon}
              </div>
              <span className="text-[#d8d2c8] text-[14.5px] font-medium leading-snug">{uc.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UseCasesSection;
