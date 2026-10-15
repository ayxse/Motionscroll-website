import React, { useCallback, useEffect, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from '../ui/Icons';

// Full-screen screenshot viewer. `items` is [{ src, alt, caption }].
function Lightbox({ items, index, onClose, onIndexChange }) {
  const closeButtonRef = useRef(null);
  const touchStartX = useRef(null);
  const item = items[index];
  const hasPrev = index > 0;
  const hasNext = index < items.length - 1;

  const goPrev = useCallback(() => {
    if (hasPrev) onIndexChange(index - 1);
  }, [hasPrev, index, onIndexChange]);

  const goNext = useCallback(() => {
    if (hasNext) onIndexChange(index + 1);
  }, [hasNext, index, onIndexChange]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') goPrev();
      else if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose, goPrev, goNext]);

  // Lock page scroll and move focus into the dialog while it is open.
  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
      previouslyFocused?.focus?.();
    };
  }, []);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 50) goPrev();
    if (deltaX < -50) goNext();
    touchStartX.current = null;
  };

  const navButton =
    'flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 disabled:pointer-events-none disabled:opacity-30';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.caption}
      className="animate-fade-in fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <CloseIcon />
      </button>

      <img
        key={item.src}
        src={item.src}
        alt={item.alt}
        onClick={(e) => e.stopPropagation()}
        className="animate-fade-in max-h-[calc(100vh-9rem)] w-auto max-w-full rounded-2xl object-contain ring-1 ring-white/10"
      />

      <div className="mt-5 flex items-center gap-4" onClick={(e) => e.stopPropagation()}>
        <button type="button" onClick={goPrev} disabled={!hasPrev} aria-label="Previous screenshot" className={navButton}>
          <ChevronLeftIcon />
        </button>
        <div className="min-w-[10rem] text-center">
          <p className="text-sm font-medium text-white">{item.caption}</p>
          <p className="mt-0.5 font-mono text-xs text-white/60">
            {index + 1} / {items.length}
          </p>
        </div>
        <button type="button" onClick={goNext} disabled={!hasNext} aria-label="Next screenshot" className={navButton}>
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
}

export default Lightbox;
