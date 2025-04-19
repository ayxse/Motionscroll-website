import React from 'react';

function UseCasesSection() {
  return (
    <section className="py-10 px-4 text-center mb-16"> 
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-100">Use cases:</h2> {/* Lighter gray heading */}
      {/* Adjusted list item background (bg-gray-800/60) */}
      <ul className="list-none p-0 max-w-lg mx-auto text-left space-y-4"> 
        <li className="text-gray-300 p-4 bg-gray-800/60 border border-gray-600/50 rounded-lg transition duration-200 hover:bg-gray-700/60 hover:border-gray-500">Reading news articles and long-form content</li>
        <li className="text-gray-300 p-4 bg-gray-800/60 border border-gray-600/50 rounded-lg transition duration-200 hover:bg-gray-700/60 hover:border-gray-500">Reviewing business documents</li>
        <li className="text-gray-300 p-4 bg-gray-800/60 border border-gray-600/50 rounded-lg transition duration-200 hover:bg-gray-700/60 hover:border-gray-500">Following recipes while cooking</li>
        <li className="text-gray-300 p-4 bg-gray-800/60 border border-gray-600/50 rounded-lg transition duration-200 hover:bg-gray-700/60 hover:border-gray-500">Reading sheet music while playing instruments</li>
        <li className="text-gray-300 p-4 bg-gray-800/60 border border-gray-600/50 rounded-lg transition duration-200 hover:bg-gray-700/60 hover:border-gray-500">Studying research papers and documentation</li>
      </ul>
    </section>
  );
}

export default UseCasesSection;
