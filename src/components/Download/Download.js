import React from 'react';
import './Download.css';

function Download() {
  const handleDownload = () => {
    window.location.href = "https://github.com/ayxse/MotionScroll/releases/download/v1.0.0/MotionScroll.apk";
  };

  return (
    <div className="download-section">
      <h2>Download MotionScroll</h2>
      <div className="download-content">
        <div className="download-card">
          <h3>Android App</h3>
          <p>Compatible with Android 8.0 and higher</p>
          <button 
            className="download-button"
            onClick={handleDownload}
          >
            Download APK
          </button>
          <p className="version-info">Version 1.0.0</p>
        </div>
        
        <div className="download-instructions">
          <h3>Installation Instructions</h3>
          <ol>
            <li>Download the APK file</li>
            <li>Open the file on your Android device</li>
            <li>Allow installation from unknown sources if prompted</li>
            <li>Follow the installation prompts</li>
            <li>Grant camera permissions when first launching the app</li>
          </ol>
        </div>
      </div>

      <div className="github-section">
        <h3>Open Source</h3>
        <p>This project is open source! Check the GitHub repository:</p>
        <a 
          href="https://github.com/ayxse/MotionScroll" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="github-link"
        >
          @ayxse/MotionScroll
        </a>
      </div>
    </div>
  );
}

export default Download; 