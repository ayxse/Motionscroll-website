import { useState, useCallback } from 'react';

// Custom hook to handle image fade-in animations
export const useImageFadeIn = () => {
  const [loadedImages, setLoadedImages] = useState(new Set());

  const handleImageLoad = useCallback((imageSrc) => {
    setLoadedImages(prev => new Set([...prev, imageSrc]));
  }, []);

  const getImageClasses = useCallback((imageSrc, additionalClasses = '') => {
    const isLoaded = loadedImages.has(imageSrc);
    const baseClasses = `transition-all duration-300 ease-out ${isLoaded ? 'opacity-100 scale-100' : 'opacity-100 scale-100'}`;
    return `${baseClasses} ${additionalClasses}`.trim();
  }, [loadedImages]);

  return { handleImageLoad, getImageClasses };
}; 
