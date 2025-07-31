import React from 'react';
// Import the image
import scrollImage from '../../images/motionscroll.png'; // Ensure the path is correct

function HeroSection() {

  // --- Configuration Constants ---
  // Define the duration for one full rotation in seconds.
  const rotationSpeedSeconds = 60; // <-- EDIT THIS VALUE TO CHANGE SPIN SPEED

  // Define the desired width of the image in pixels.
  const imageWidthPx = 200; // <-- EDIT THIS VALUE TO RESIZE THE IMAGE (e.g., 150, 300, 400)

  return (
    // Reduced top padding slightly (pt-10) and increased bottom margin (mb-82 seems large, maybe typo? Adjusted to mb-12 for example)
    <section className="pt-3 pb-7 px-4 text-center mb-16">
      {/* Lighter gray/white gradient text */}
      <h2 className="text-4xl md:text-6xl font-bold mb-10 bg-gradient-to-r from-gray-200 via-white to-gray-200 text-transparent bg-clip-text leading-snug pb-4">
        Hands-free Scrolling<br />
        Powered by Head Movements
      </h2>

      {/* Image container - keeps text-center alignment working well */}
      <div className="mt-16 mb-2 select-none">
        <img
          src={scrollImage}
          alt="Demonstration of hands-free scrolling (rotating)"
          // Removed max-w-5xl and w-full. Kept inline-block, h-auto, grayscale, animate-spin
          className="inline-block h-auto animate-spin"
          // Apply inline styles for specific width and animation duration
          style={{
            width: `${imageWidthPx}px`, // Set specific width in pixels
            height: 'auto', // Ensure height adjusts automatically (redundant with h-auto class, but safe)
            animationDuration: `${rotationSpeedSeconds}s` // Control spin speed
          }}
        />
      </div>

    </section>
  );
}

export default HeroSection;
