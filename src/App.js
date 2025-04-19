import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import logo from './images/download.png'; // Unused
// import video from './images/video.mp4'; // Unused
// import './App.css'; // Will replace with Tailwind
import Navbar from './components/Navbar/Navbar';
import Download from './components/Download/Download';
import About from './components/About/About';
import Home from './components/Home/Home'; // Import the new Home component

function App() {
  return (
    <Router basename="/Motionscroll-website">
      {/* Added font-geist-mono and noise-bg class */}
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black text-white flex flex-col items-center font-geist-mono noise-bg"> 
        {/* Correcting typo *again* for stable sticky behavior (from-black/70) */}
        {/* Note: Header and Routes need z-index to appear above noise */}
        <header className="w-full p-5 bg-gradient-to-r from-black/10 to-black/10 backdrop-blur-md border-b border-gray-700/50 sticky top-0 z-20 flex flex-col items-center"> 
          <div className="text-center mb-6"> {/* Increased bottom margin */}
            <h1 className="text-5xl font-italics">MotionScroll</h1> {/* Increased font size */}
            <p className="text-lg text-gray-600"></p> {/* Darker gray for tagline placeholder */}
          </div>
          <Navbar />
        </header>
        
        {/* Removed image-noise-overlay class, kept relative z-10 */}
        <div className="relative z-10 w-full flex flex-col items-center"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/download" element={<Download />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// Removed the old inline Home function

export default App;
