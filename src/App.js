import React from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Download from './components/Download/Download';
import About from './components/About/About';
import Guide from './components/Guide/Guide';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import logo from './images/motionscroll.png';

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    if (process.env.NODE_ENV === 'test') return;

    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    } catch {
      // jsdom does not implement scrollTo.
    }
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0b0b0b] text-white flex flex-col items-center overflow-x-hidden relative">
        <header
          className="w-full px-4 py-2 sticky top-0 z-50 border-b border-white/10"
          style={{ background: 'rgba(11,11,11,0.88)', backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)' }}
        >
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="MotionScroll Logo"
                className="w-9 h-9 select-none rounded-lg bg-[#151515] p-1.5 shadow-sm shadow-black/40 ring-1 ring-white/10"
              />
              <span className="hidden sm:block text-sm font-medium text-white">
                MotionScroll
              </span>
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
