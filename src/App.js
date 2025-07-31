import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Download from './components/Download/Download';
import About from './components/About/About';
import Guide from './components/Guide/Guide';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white flex flex-col items-center font-inter overflow-x-hidden">
        <header className="w-full px-4 py-4 bg-black/90 backdrop-blur-sm border-b border-gray-800/50 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
                            <img
                src={`/logo.png?v=${Date.now()}`}
                alt="MotionScroll Logo" 
                className="w-10 h-10 animate-spin select-none logo-image"
                style={{ 
                  animationDuration: '20s'
                }}
                onLoad={() => console.log('Logo loaded successfully')}
                onError={(e) => {
                  console.log('Logo failed to load:', e);
                }}
              />
              <h1 className="text-2xl font-inter font-italics text-gray-300 hover:text-white transition-colors select-none">
                MotionScroll
              </h1>
            </Link>
            <Navbar />
          </div>
        </header>

        <div className="relative z-10 w-full flex flex-col items-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/download" element={<Download />} />
            <Route path="/about" element={<About />} />
            <Route path="/guide" element={<Guide />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;