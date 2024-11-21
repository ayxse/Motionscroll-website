import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './images/download.png';
import video from './images/video.mp4';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Download from './components/Download/Download';
import About from './components/About/About';

function App() {
  const handleVideoLoad = (e) => {
    e.target.currentTime = 1; // Starts 2 seconds in to skip initial frame
    e.target.playbackRate = 0.6; // Slowed down playback but not too slow
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="header-content">
            <h1>MotionScroll</h1>
            <p className="tagline"></p>
          </div>
          <Navbar />
        </header>
        
        <Routes>
          <Route path="/" element={
            <main>
              <h2>A Hands-free scrolling App powered by your eyes</h2>
              <div className="demo-video">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="feature-video"
                  onLoadedData={handleVideoLoad}
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <section className="features-section">
                <h2>How It Works</h2>
                <p>Using your device's front-facing camera, MotionScroll tracks your eye movement to automatically scroll content. No hands required - just read naturally.</p>
                
                <div className="feature-cards">
                  <div className="feature-card">
                    <h3>Intelligent Scrolling</h3>
                    <p>Perfect for reading long articles, documents, and digital content. The app automatically adjusts scroll speed based on your reading position and pace.</p>
                  </div>

                  <div className="feature-card">
                    <h3>Smart Detection</h3>
                    <p>Advanced eye-tracking technology provides smooth, responsive scrolling that feels natural and intuitive. No more manual scrolling or interruptions.</p>
                  </div>

                  <div className="feature-card">
                    <h3>Privacy First</h3>
                    <p>All eye-tracking processing happens locally on your device. Your camera data never leaves your phone, ensuring your privacy and security.</p>
                  </div>
                </div>
              </section>

              <section className="use-cases">
                <h2>Perfect For</h2>
                <ul>
                  <li>Reading news articles and long-form content</li>
                  <li>Reviewing business documents</li>
                  <li>Following recipes while cooking</li>
                  <li>Reading sheet music while playing instruments</li>
                  <li>Studying research papers and documentation</li>
                </ul>
              </section>

              <section className="requirements">
                <h2>Requirements</h2>
                <p>Compatible with Android devices running Android 8.0 or higher with a front-facing camera.</p>
                <p className="privacy-note">Note: MotionScroll requires camera permissions for eye-tracking functionality. All processing is done on-device to ensure your privacy.</p>
              </section>
            </main>
          } />
          <Route path="/download" element={<Download />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
