import { useState, useEffect, useRef } from 'react';

function useScrollAnimation(options = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const { delay, ...intersectionOptions } = options;

    // Require a meaningful portion of the element to be well inside the viewport
    // before triggering — prevents cards animating while still off-screen below
    const finalOptions = {
      threshold: 0.25,
      rootMargin: '0px 0px -80px 0px',
      ...intersectionOptions,
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          const timeoutDelay = delay ?? 0;
          setTimeout(() => setIsVisible(true), timeoutDelay);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, finalOptions);
    const currentElement = elementRef.current;

    // Small defer so the observer is attached after first paint
    const timer = setTimeout(() => {
      if (currentElement) observer.observe(currentElement);
    }, 50);

    return () => {
      clearTimeout(timer);
      if (currentElement) observer.unobserve(currentElement);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return [elementRef, isVisible];
}

export default useScrollAnimation;
