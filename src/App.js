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
      <div className="min-h-screen bg-[#030303] text-white flex flex-col items-center overflow-x-hidden relative">
        <header className="w-full px-4 py-3 sticky top-0 z-50 border-b border-white/[0.06]"
          style={{ background: 'rgba(3,3,3,0.85)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
        >
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2.5">
              <img
                src={logo}
                alt="MotionScroll Logo"
                className="w-8 h-8 select-none"
              />  
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
