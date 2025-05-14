import { useState, useEffect, useRef } from 'react';

function useScrollAnimation(options = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  const hasAnimatedRef = useRef(false);

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
    
    // Add a forced minimum delay for initial load
    const initialLoadDelay = 700; // milliseconds to wait before checking visibility
    
    // Observer callback function
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        // When the element is intersecting (visible)
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          // Mark as animated to prevent duplicate animations
          hasAnimatedRef.current = true;
          
          // Use the provided delay or default to 300ms
          const timeoutDelay = delay || 300;
          
          // Add the animation delay
          setTimeout(() => {
            setIsVisible(true);
          }, timeoutDelay);
          
          // Optional: Unobserve after animation triggers once
          observer.unobserve(entry.target); 
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersection, finalOptions);

    const currentElement = elementRef.current;
    
    // Instead of observing immediately, wait a bit to ensure animations run
    // even if the elements are already visible on load
    const initialTimer = setTimeout(() => {
      if (currentElement) {
        observer.observe(currentElement);
        
        // If element is already in viewport on first load, we still want animation
        // In this case, we'll manually trigger the animation after a minimum delay
        const checkInitialVisibility = () => {
          const rect = currentElement.getBoundingClientRect();
          const isElementInViewport = (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
          );
          
          if (isElementInViewport && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            
            // Respect the staggered delay but add it to our minimum initial delay
            const timeoutDelay = delay || 300;
            setTimeout(() => {
              setIsVisible(true);
            }, timeoutDelay);
          }
        };
        
        checkInitialVisibility();
      }
    }, initialLoadDelay);

    // Cleanup observer and timers on component unmount
    return () => {
      clearTimeout(initialTimer);
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]); // Re-run effect if options change

  return [elementRef, isVisible];
}

export default useScrollAnimation; 