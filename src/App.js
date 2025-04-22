import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import Link
// import logo from './images/download.png'; // Unused
// import video from './images/video.mp4'; // Unused
// import './App.css'; // Will replace with Tailwind
import Navbar from './components/Navbar/Navbar';
import Download from './components/Download/Download';
import About from './components/About/About'; // This is the NEW About component
import Guide from './components/Guide/Guide'; // Import the new Guide component
import Home from './components/Home/Home'; // Import the new Home component

function App() {
  return (
    <Router basename="/Motionscroll-website">
      {/* Added font-geist-mono and noise-bg class, ADDED overflow-x-hidden */}
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black text-white flex flex-col items-center font-geist-mono noise-bg overflow-x-hidden"> 
        {/* Correcting typo *again* for stable sticky behavior (from-black/70) */}
        {/* Note: Header and Routes need z-index to appear above noise */}
        {/* Made padding responsive: p-3 md:p-5 */}
        {/* Removed backdrop-blur-md for consistent appearance */}
        <header className="w-full p-3 md:p-5 bg-gradient-to-r from-black/10 to-black/10 border-b border-gray-700/50 sticky top-0 z-20 flex flex-col items-center"> 
          <div className="text-center mb-6"> {/* Increased bottom margin */}
            {/* Made title responsive and wrapped in Link, added hover effect */}
            <Link to="/">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-italics hover:text-gray-300 transition-colors">MotionScroll</h1> 
            </Link>
            <p className="text-lg text-gray-600"></p> {/* Darker gray for tagline placeholder */}
          </div>
          <Navbar />
        </header>
        
        {/* Removed image-noise-overlay class, kept relative z-10 */}
        <div className="relative z-10 w-full flex flex-col items-center"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/download" element={<Download />} />
            {/* Updated /about route to point to the new About component */}
            <Route path="/about" element={<About />} /> 
            {/* Added /guide route */}
            <Route path="/guide" element={<Guide />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// Removed the old inline Home function

export default App;