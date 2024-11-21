import React from 'react';
import step1 from '../../images/1.png';
import step2 from '../../images/2.png';
import step3 from '../../images/3.png';
import step4 from '../../images/4.png';
import './About.css';

function About() {
  return (
    <div className="about-section">
      <h2>About MotionScroll</h2>
      <p className="about-intro">
        MotionScroll was developed for the purpose of enabling hands-free scrolling through eye movement detection. This makes reading 
        and browsing more accessible and convenient, especially in situations where 
        using your hands isn't practical.
      </p>

      <div className="setup-guide">
        <h3>Installation Guide</h3>
        
        <div className="setup-steps">
          <div className="step-card">
            <img src={step1} alt="Enable Accessibility Service" />
            <div className="step-content">
              <h4>Step 1: Enable Accessibility</h4>
              <p>Open the app and click on "Enable Accessibility Service" to begin setup.</p>
            </div>
          </div>

          <div className="step-card">
            <img src={step2} alt="Find MotionScroll" />
            <div className="step-content">
              <h4>Step 2: Locate MotionScroll</h4>
              <p>In your device's Accessibility settings, find and select "MotionScroll" from the list of services.</p>
            </div>
          </div>

          <div className="step-card">
            <img src={step3} alt="Enable Service" />
            <div className="step-content">
              <h4>Step 3: Activate Service</h4>
              <p>Enable the accessibility service for MotionScroll.</p>
              <div className="important-note">
                <h5>ⓘ Important:</h5>
                <p>Make sure to enable the "Overlay Shortcut" option. This creates a floating button 
                that allows you to quickly toggle the service on/off without navigating through settings again.</p>
              </div>
            </div>
          </div>

          <div className="step-card">
            <img src={step4} alt="Grant Permissions" />
            <div className="step-content">
              <h4>Step 4: Final Setup</h4>
              <p>Press "Allow" to grant necessary permissions and complete the setup.</p>
            </div>
          </div>
        </div>

        <div className="overlay-info">
          <h3>Using the Overlay Shortcut</h3>
          <p>The overlay shortcut is crucial for a smooth experience:</p>
          <ul>
            <li>It provides quick access to enable/disable the service</li>
            <li>Helps you regain manual control when needed</li>
            <li>Prevents getting stuck in auto-scroll mode</li>
            <li>Makes the app more user-friendly and accessible</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About; 