import React, { useState, useEffect, useCallback } from 'react';
import { useImageFadeIn } from '../../hooks/useImageFadeIn';
import step1Img from '../../images/tutorial/1.png';
import step2Img from '../../images/tutorial/2.png';
import step3Img from '../../images/tutorial/3.png';
import step4Img from '../../images/tutorial/4.png';
import step5Img from '../../images/tutorial/5.png';
import step6Img from '../../images/tutorial/6.png';
import perm7 from '../../images/permissions/7.png';
import perm71 from '../../images/permissions/7.1.png';
import perm8 from '../../images/permissions/8.png';
import perm9 from '../../images/permissions/9.png';
import perm10 from '../../images/permissions/10.png';
import perm101 from '../../images/permissions/10.1.png';
import perm11 from '../../images/permissions/11.png';
import perm12 from '../../images/permissions/12.png';
import perm13 from '../../images/permissions/13.png';

const permStep1Images = [perm7, perm71, perm8];
const permStep2Images = [perm9, perm10, perm101, perm11];
const permStep3Images = [perm12, perm13];
const allPermissionSets = [permStep1Images, permStep2Images, permStep3Images];
const setupImages = [step1Img, step2Img, step3Img, step4Img, step5Img, step6Img];

const setupSteps = [
  {
    img: step1Img,
    title: 'Find Accessibility Services',
    desc: "When you first load the app, navigate to your device's Accessibility settings and select \"Accessibility Services\".",
  },
  {
    img: step2Img,
    title: 'Locate MotionScroll',
    desc: "In your device's Accessibility settings, find and select \"MotionScroll\" from the list of services.",
  },
  {
    img: step3Img,
    title: 'Activate Service',
    desc: 'Enable the accessibility service for MotionScroll.',
  },
  {
    img: step4Img,
    title: 'Grant Permissions',
    desc: 'Press "Allow" to grant MotionScroll full control of the device to control the screen and perform actions.',
  },
  {
    img: step5Img,
    title: 'Enable Overlay Shortcut',
    desc: null,
    warning: 'Make sure to enable the "Overlay Shortcut" option. This creates a floating button for quick toggling.',
  },
  {
    img: step6Img,
    title: 'Enable Camera',
    desc: 'Enable the camera slider within the app to start face tracking and control your screen.',
  },
];

function Guide() {
  const [expandedImageIndex, setExpandedImageIndex] = useState(null);
  const [activeImageSet, setActiveImageSet] = useState([]);
  const { handleImageLoad, getImageClasses } = useImageFadeIn();

  const openModal = (imageSrc, imageSet) => {
    const index = imageSet.findIndex(img => img === imageSrc);
    if (index !== -1) {
      setActiveImageSet(imageSet);
      setExpandedImageIndex(index);
    }
  };

  const closeModal = () => {
    setExpandedImageIndex(null);
    setActiveImageSet([]);
  };

  const goToNextImage = useCallback(() => {
    if (expandedImageIndex !== null && activeImageSet.length > 0) {
      setExpandedImageIndex(prev => prev < activeImageSet.length - 1 ? prev + 1 : prev);
    }
  }, [expandedImageIndex, activeImageSet]);

  const goToPrevImage = useCallback(() => {
    if (expandedImageIndex !== null && activeImageSet.length > 0) {
      setExpandedImageIndex(prev => prev > 0 ? prev - 1 : prev);
    }
  }, [expandedImageIndex, activeImageSet]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (expandedImageIndex !== null) {
        if (e.key === 'ArrowRight') goToNextImage();
        else if (e.key === 'ArrowLeft') goToPrevImage();
        else if (e.key === 'Escape') closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [expandedImageIndex, goToNextImage, goToPrevImage]);

  const imgClass = (src) =>
    getImageClasses(src, 'w-auto h-48 rounded-lg cursor-pointer transition-all duration-200 hover:opacity-75 ring-1 ring-white/10 hover:ring-white/25');

  const setupImgClass = (src) =>
    getImageClasses(src, 'w-24 h-auto md:w-28 rounded-lg cursor-pointer transition-all duration-200 hover:opacity-75 ring-1 ring-white/10 hover:ring-white/25 flex-shrink-0');

  return (
    <div className="w-full max-w-5xl mx-auto py-20 px-4">
      {/* Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-500/25 bg-violet-500/10 text-violet-300 text-[13px] font-medium mb-6 select-none">
          Step-by-step setup
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Installation Guide</h1>
        <p className="text-gray-400 max-w-md mx-auto leading-relaxed">
          Follow both guides in order — Permissions first, then Setup.
        </p>
      </div>

      {/* ── Permissions section ── */}
      <div className="mb-10 rounded-2xl border border-amber-500/20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, rgba(217,119,6,0.07) 0%, rgba(3,3,3,0.5) 60%)' }}>
        <div className="px-7 py-6 border-b border-amber-500/15 flex items-start gap-3">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
            style={{ background: 'rgba(217,119,6,0.15)', border: '1px solid rgba(217,119,6,0.25)' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-amber-400">
              <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white mb-1">Step 0 — Allow Restricted Settings</h2>
            <p className="text-[14px] text-amber-200/70 leading-relaxed">
              Due to Android security restrictions, you must manually allow restricted settings before MotionScroll can work. Complete these steps before the Setup Guide.
            </p>
          </div>
        </div>

        <div className="p-7 grid grid-cols-1 gap-5">
          {/* Perm step 1 */}
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-6">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-semibold flex items-center justify-center flex-shrink-0">1</span>
              <h3 className="text-[15px] font-semibold text-white">Check Accessibility Settings</h3>
            </div>
            <p className="text-gray-400 text-[14px] mb-5 leading-relaxed">
              After installing and opening MotionScroll, go to your phone's Accessibility settings and look for "Installed apps" or "Downloaded apps". MotionScroll will appear greyed out.
            </p>
            <div className="flex flex-wrap gap-3">
              {permStep1Images.map((src, i) => (
                <img key={i} src={src} alt={`Permission step 1 screenshot ${i + 1}`}
                  className={imgClass(src)}
                  onClick={() => openModal(src, permStep1Images)}
                  onLoad={() => handleImageLoad(src)}
                />
              ))}
            </div>
          </div>

          {/* Perm step 2 */}
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-6">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-semibold flex items-center justify-center flex-shrink-0">2</span>
              <h3 className="text-[15px] font-semibold text-white">Locate MotionScroll in Settings</h3>
            </div>
            <p className="text-gray-400 text-[14px] mb-5 leading-relaxed">
              Go to your device Settings → Apps / Applications → find and select MotionScroll from the list.
            </p>
            <div className="flex flex-wrap gap-3">
              {permStep2Images.map((src, i) => (
                <img key={i} src={src} alt={`Permission step 2 screenshot ${i + 1}`}
                  className={imgClass(src)}
                  onClick={() => openModal(src, permStep2Images)}
                  onLoad={() => handleImageLoad(src)}
                />
              ))}
            </div>
          </div>

          {/* Perm step 3 */}
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-6">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-semibold flex items-center justify-center flex-shrink-0">3</span>
              <h3 className="text-[15px] font-semibold text-white">Allow Restricted Settings</h3>
            </div>
            <p className="text-gray-400 text-[14px] mb-5 leading-relaxed">
              On the MotionScroll app info page, tap the three dots (⋮) in the top-right corner and select "Allow restricted settings".
            </p>
            <div className="flex flex-wrap gap-3">
              {permStep3Images.map((src, i) => (
                <img key={i} src={src} alt={`Permission step 3 screenshot ${i + 1}`}
                  className={imgClass(src)}
                  onClick={() => openModal(src, permStep3Images)}
                  onLoad={() => handleImageLoad(src)}
                />
              ))}
            </div>
            <div className="flex items-center gap-2 mt-5 text-[13.5px] text-emerald-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 flex-shrink-0">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              Done — you can now proceed to the Setup Guide below.
            </div>
          </div>
        </div>
      </div>

      {/* ── Setup Guide section ── */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-violet-400 flex-shrink-0"
            style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-white">Setup Guide</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          {setupSteps.map((step, i) => (
            <div key={i} className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-5 flex items-start gap-4 hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-200">
              <img
                src={step.img}
                alt={`Step ${i + 1}: ${step.title}`}
                className={setupImgClass(step.img)}
                onClick={() => openModal(step.img, setupImages)}
                onLoad={() => handleImageLoad(step.img)}
              />
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[11px] font-semibold text-violet-400/70 uppercase tracking-wider">Step {i + 1}</span>
                </div>
                <h4 className="text-[15px] font-semibold text-white mb-1.5">{step.title}</h4>
                {step.desc && <p className="text-gray-400 text-[13.5px] leading-relaxed">{step.desc}</p>}
                {step.warning && (
                  <div className="rounded-lg border border-amber-500/20 bg-amber-500/8 px-3 py-2.5 mt-1">
                    <p className="text-[13px] text-amber-300/90 leading-relaxed">
                      <span className="font-semibold">Important: </span>{step.warning}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Overlay tip */}
        <div className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-6">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-violet-400 flex-shrink-0"
              style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <h3 className="text-[15px] font-semibold text-white">Using the Overlay Shortcut</h3>
          </div>
          <ul className="space-y-2">
            {[
              'Quickly enable or disable the service without opening the app',
              'Helps you regain manual control at any moment',
              'Prevents getting stuck in auto-scroll mode',
              'Makes the overall experience smoother and more accessible',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[14px] text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-violet-400/60 flex-shrink-0 mt-0.5">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Image modal ── */}
      {expandedImageIndex !== null && activeImageSet.length > 0 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(8px)' }}
          onClick={closeModal}
        >
          {allPermissionSets.includes(activeImageSet) && expandedImageIndex > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevImage(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-white/10 border border-white/15 text-white flex items-center justify-center hover:bg-white/20 transition"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
              </svg>
            </button>
          )}

          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={activeImageSet[expandedImageIndex]}
              alt={`Expanded step ${expandedImageIndex + 1}`}
              className="block max-w-full max-h-[82vh] object-contain rounded-xl ring-1 ring-white/10"
            />
            <button
              onClick={closeModal}
              className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white/10 border border-white/15 text-white flex items-center justify-center hover:bg-white/20 transition text-lg leading-none"
              aria-label="Close"
            >
              ×
            </button>
          </div>

          {allPermissionSets.includes(activeImageSet) && expandedImageIndex < activeImageSet.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goToNextImage(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-white/10 border border-white/15 text-white flex items-center justify-center hover:bg-white/20 transition"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Guide;
