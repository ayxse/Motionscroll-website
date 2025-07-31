import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

function UseCasesSection() {
  const observerOptions = {
    threshold: 0.1,
  };

  const [li1Ref, isLi1Visible] = useScrollAnimation(observerOptions);
  const [li2Ref, isLi2Visible] = useScrollAnimation(observerOptions);
  const [li3Ref, isLi3Visible] = useScrollAnimation(observerOptions);
  const [li4Ref, isLi4Visible] = useScrollAnimation(observerOptions);
  const [li5Ref, isLi5Visible] = useScrollAnimation(observerOptions);

  // Base classes for all list items including transition
  const baseLiClasses = "flex items-center bg-gray-900/30 p-4 border border-gray-800/50 rounded-lg transition-all duration-500 ease-out hover:bg-gray-900/50 hover:border-gray-700/50 backdrop-blur-sm";

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-inter font-bold mb-4 text-white">
            With MotionScroll, you can...
          </h2>
          <p className="text-lg text-gray-400 font-inter">
            Use your hands in situation where you are busy with something else.
          </p>
        </div>
        
        <div className="grid gap-3 max-w-2xl mx-auto">
          <div 
            ref={li1Ref}
            className={`${baseLiClasses} ${isLi1Visible ? 'opacity-100 translate-y-0' : 'scroll-animate-init'}`}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-300 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/>
              </svg>
            </div>
            <span className="text-gray-200 font-inter font-medium">Read news articles and long-form content</span>
          </div>
          
          <div 
            ref={li2Ref}
            className={`${baseLiClasses} ${isLi2Visible ? 'opacity-100 translate-y-0' : 'scroll-animate-init'}`}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-300 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="text-black w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            <span className="text-gray-200 font-inter font-medium"> Review business documents</span>
          </div>
          
          <div 
            ref={li3Ref}
            className={`${baseLiClasses} ${isLi3Visible ? 'opacity-100 translate-y-0' : 'scroll-animate-init'}`}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-300 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-black w-6 h-6" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M19 3v12h-5c-.023 -3.681 .184 -7.406 5 -12zm0 12v6h-1v-3m-10 -14v17m-3 -17v3a3 3 0 1 0 6 0v-3" />
              </svg>
            </div>
            <span className="text-gray-200 font-inter font-medium">Follow recipes while cooking</span>
          </div>
          
          <div 
            ref={li4Ref}
            className={`${baseLiClasses} ${isLi4Visible ? 'opacity-100 translate-y-0' : 'scroll-animate-init'}`}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-300 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                <circle cx="5.5" cy="17.5" r="2.5"/>
                <circle cx="17.5" cy="15.5" r="2.5"/>
                <path d="M8 17V5l12-2v12"/>
              </svg>
            </div>
            <span className="text-gray-200 font-inter font-medium">Read sheet music while playing instruments</span>
          </div>
          
          <div 
            ref={li5Ref}
            className={`${baseLiClasses} ${isLi5Visible ? 'opacity-100 translate-y-0' : 'scroll-animate-init'}`}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-300 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="text-black w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <span className="text-gray-200 font-inter font-medium">Study research papers and documentation</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UseCasesSection;
