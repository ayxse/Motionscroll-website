import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Download from './components/Download/Download';
import About from './components/About/About';
import Guide from './components/Guide/Guide';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import logo from './images/motionscroll.png';

function App() {
  return (
    <Router>
             <div className="min-h-screen bg-black text-white flex flex-col items-center font-inter overflow-x-hidden relative">
        <header className="w-full px-2 py-2 bg-gradient-to-r from-black/95 via-gray-950/70 to-black/95 backdrop-blur-md border-b border-gray-700/30 shadow-lg shadow-black/20 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-1 sm:space-x-3">
                            <img
                src={logo}
                alt="MotionScroll Logo" 
                className="w-8 h-8 sm:w-9 sm:h-9 animate-spin select-none"
                style={{ 
                  animationDuration: '50s'
                }}
              />
              <h1 className="text-base sm:text-2xl font-inter font-thin text-white hover:text-gray-300 transition-colors select-none">
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