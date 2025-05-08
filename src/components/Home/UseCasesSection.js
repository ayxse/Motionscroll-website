import React from 'react';

function UseCasesSection() {
  return (
    <section className="py-10 px-4 text-center mb-16"> 
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-100">Use cases:</h2> {/* Lighter gray heading */}
      {/* Adjusted list item background (bg-gray-800/60) */}
      <ul className="list-none p-0 max-w-lg mx-auto text-left space-y-4"> 
        <li className="flex items-center text-gray-300 p-4 bg-gray-800/60 border border-gray-600/50 rounded-lg transition duration-200 hover:bg-gray-700/60 hover:border-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white w-6 h-6 mr-4 shrink-0">
            <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
            <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/>
          </svg>
          <span>Reading news articles and long-form content</span>
        </li>
        <li className="flex items-center text-gray-300 p-4 bg-gray-800/60 border border-gray-600/50 rounded-lg transition duration-200 hover:bg-gray-700/60 hover:border-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-white w-6 h-6 mr-4 shrink-0">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
          <span>Reviewing business documents</span>
        </li>
        <li className="flex items-center text-gray-300 p-4 bg-gray-800/60 border border-gray-600/50 rounded-lg transition duration-200 hover:bg-gray-700/60 hover:border-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="text-white w-6 h-6 mr-4 shrink-0" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M19 3v12h-5c-.023 -3.681 .184 -7.406 5 -12zm0 12v6h-1v-3m-10 -14v17m-3 -17v3a3 3 0 1 0 6 0v-3" />
          </svg>
          <span>Following recipes while cooking</span>
        </li>
        <li className="flex items-center text-gray-300 p-4 bg-gray-800/60 border border-gray-600/50 rounded-lg transition duration-200 hover:bg-gray-700/60 hover:border-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white w-6 h-6 mr-4 shrink-0">
            <circle cx="5.5" cy="17.5" r="2.5"/>
            <circle cx="17.5" cy="15.5" r="2.5"/>
            <path d="M8 17V5l12-2v12"/>
          </svg>
          <span>Reading sheet music while playing instruments</span>
        </li>
        <li className="flex items-center text-gray-300 p-4 bg-gray-800/60 border border-gray-600/50 rounded-lg transition duration-200 hover:bg-gray-700/60 hover:border-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-white w-6 h-6 mr-4 shrink-0">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
          </svg>
          <span>Studying research papers and documentation</span>
        </li>
      </ul>
    </section>
  );
}

export default UseCasesSection;
