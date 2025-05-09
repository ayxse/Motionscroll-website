import { useState, useEffect, useRef } from 'react';

function useScrollAnimation(options = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // Don't run on the server side
    if (typeof window === 'undefined') return;

    // Use default options that ensure items only appear after scrolling down a bit
    const defaultOptions = {
      threshold: 0.1, // Lower threshold means it will trigger earlier
      rootMargin: "0px 0px -100px 0px" // Negative bottom margin pushes trigger point down
    };

    // Extract delay from options if present
    const { delay, ...intersectionOptions } = options;
    
    // Merge provided options with defaults
    const finalOptions = { ...defaultOptions, ...intersectionOptions };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // When the element is intersecting (visible)
        if (entry.isIntersecting) {
          // Use the provided delay or default to 100ms
          const timeoutDelay = delay || 100;
          
          // Add a slight delay to make it feel more natural and stagger elements
          setTimeout(() => {
            setIsVisible(true);
          }, timeoutDelay);
          
          // Optional: Unobserve after animation triggers once
          observer.unobserve(entry.target); 
        }
      });
    }, finalOptions);

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    // Cleanup observer on component unmount
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]); // Re-run effect if options change

  return [elementRef, isVisible];
}

export default useScrollAnimation; 