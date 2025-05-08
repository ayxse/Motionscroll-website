import { useState, useEffect, useRef } from 'react';

function useScrollAnimation(options) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // When the element is intersecting (visible)
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: Unobserve after animation triggers once
          observer.unobserve(entry.target); 
        }
      });
    }, options); // Pass options like threshold

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