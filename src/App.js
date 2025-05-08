import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Download from './components/Download/Download';
import About from './components/About/About';
import Guide from './components/Guide/Guide';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black text-white flex flex-col items-center font-geist-mono overflow-x-hidden">
        <header className="w-full p-3 md:p-5 bg-gradient-to-r from-black/10 to-black/10 border-b border-gray-700/50 sticky top-0 z-20 flex flex-col items-center">
          <div className="text-center mb-6">
            <Link to="/">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-italics hover:text-gray-300 transition-colors">MotionScroll</h1>
            </Link>
            <p className="text-lg text-gray-600"></p>
          </div>
          <Navbar />
        </header>

        <div className="relative z-10 w-full flex flex-col items-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/download" element={<Download />} />
            <Route path="/about" element={<About />} />
            <Route path="/guide" element={<Guide />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;