import React, { useState } from 'react';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import Lightbox from './Lightbox';
import { AlertIcon, ArrowRightIcon, CheckIcon, ExpandIcon, GitHubIcon, ToggleIcon } from '../ui/Icons';
import { ISSUES_URL } from '../../config';
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

const parts = [
  {
    id: 'restricted-settings',
    label: 'Part 1',
    title: 'Allow restricted settings',
    intro:
      'Android blocks accessibility access for apps installed outside the Play Store. Unlock it first. You only need to do this once.',
    steps: [
      {
        title: 'Check Accessibility settings',
        desc: 'After installing and opening MotionScroll, go to your phone’s Accessibility settings and look for “Installed apps” or “Downloaded apps”. MotionScroll will appear greyed out.',
        images: [perm7, perm71, perm8],
      },
      {
        title: 'Find MotionScroll in your apps',
        desc: 'Go to Settings → Apps, then find and select MotionScroll from the list.',
        images: [perm9, perm10, perm101, perm11],
      },
      {
        title: 'Allow restricted settings',
        desc: 'On the MotionScroll app info page, tap the three-dot menu (⋮) in the top-right corner and select “Allow restricted settings”.',
        images: [perm12, perm13],
      },
    ],
  },
  {
    id: 'setup',
    label: 'Part 2',
    title: 'Turn on MotionScroll',
    intro: 'Enable the accessibility service and give MotionScroll what it needs to scroll for you.',
    steps: [
      {
        title: 'Open Accessibility Services',
        desc: 'In the MotionScroll app, tap “Accessibility Services” to jump to your device’s accessibility settings.',
        images: [step1Img],
      },
      {
        title: 'Select MotionScroll',
        desc: 'Find and select MotionScroll in the list of services.',
        images: [step2Img],
      },
      {
        title: 'Activate the service',
        desc: 'Switch on “Use MotionScroll” to activate the accessibility service.',
        images: [step3Img],
      },
      {
        title: 'Grant permission',
        desc: 'Tap “Allow” to give MotionScroll control of the screen so it can perform scroll actions.',
        images: [step4Img],
      },
      {
        title: 'Enable the overlay shortcut',
        warning: 'Make sure “MotionScroll shortcut” is switched on. It adds a floating button for quickly turning MotionScroll on and off.',
        images: [step5Img],
      },
      {
        title: 'Turn on the camera',
        desc: 'Back in the app, switch on the Camera toggle to start face tracking. You’re ready to scroll.',
        images: [step6Img],
      },
    ],
  },
];

const overlayBenefits = [
  'Turn MotionScroll on or off without opening the app',
  'Take back manual control at any moment',
  'Never get stuck in auto-scroll mode',
];

// Every screenshot in a part, in order, so the viewer can page through the whole part.
const lightboxItems = (part) =>
  part.steps.flatMap((step, stepIndex) =>
    step.images.map((src, imageIndex) => ({
      src,
      alt: `${part.label}, step ${stepIndex + 1}: ${step.title} (screenshot ${imageIndex + 1})`,
      caption: `Step ${stepIndex + 1} · ${step.title}`,
    })),
  );

function Guide() {
  const [viewer, setViewer] = useState(null); // { items, index }

  const openViewer = (part, src) => {
    const items = lightboxItems(part);
    setViewer({ items, index: items.findIndex((item) => item.src === src) });
  };

  const scrollToPart = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="mx-auto max-w-4xl px-5 pb-24 pt-12 sm:px-6 md:pb-32 md:pt-20">
      <SectionHeading
        as="h1"
        eyebrow="Setup guide"
        title="Set up MotionScroll"
        description="Two short parts: unlock restricted settings, then switch on the service. Follow them in order."
      />

      <Reveal className="mt-10 grid gap-3 sm:grid-cols-2">
        {parts.map((part) => (
          <button
            key={part.id}
            type="button"
            onClick={() => scrollToPart(part.id)}
            className="group flex items-center justify-between gap-4 rounded-2xl border border-line bg-surface p-5 text-left transition-colors hover:border-ink/20"
          >
            <span>
              <span className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-accent">{part.label}</span>
              <span className="mt-1 block font-semibold tracking-tight text-ink">{part.title}</span>
              <span className="mt-0.5 block text-sm text-muted">{part.steps.length} steps</span>
            </span>
            <ArrowRightIcon className="h-5 w-5 rotate-90 text-muted transition-transform group-hover:translate-y-0.5 group-hover:text-ink" />
          </button>
        ))}
      </Reveal>

      {parts.map((part) => (
        <section key={part.id} id={part.id} className="scroll-mt-24 pt-20">
          <Reveal className="border-b border-line pb-8">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-accent">{part.label}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-[2.25rem]">{part.title}</h2>
            <p className="mt-3 max-w-2xl text-[17px] leading-7 text-muted">{part.intro}</p>
          </Reveal>

          <ol className="mt-10">
            {part.steps.map((step, i) => (
              <GuideStep
                key={step.title}
                number={i + 1}
                step={step}
                isLast={i === part.steps.length - 1}
                onOpenImage={(src) => openViewer(part, src)}
              />
            ))}
          </ol>

          {part.id === 'restricted-settings' && (
            <Reveal className="mt-10 flex items-center gap-3 rounded-2xl bg-brand/10 px-5 py-4 text-[15px] text-ink">
              <CheckIcon className="h-5 w-5 shrink-0 text-accent" strokeWidth={2.25} />
              Done. MotionScroll can now be enabled as an accessibility service.
            </Reveal>
          )}
        </section>
      ))}

      <Reveal className="mt-16 rounded-3xl border border-line bg-surface p-7 sm:p-8">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-accent">
            <ToggleIcon />
          </span>
          <h2 className="text-lg font-semibold tracking-tight text-ink">Why the overlay shortcut matters</h2>
        </div>
        <ul className="mt-5 grid gap-3 sm:grid-cols-3">
          {overlayBenefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-2.5 text-[15px] leading-6 text-muted">
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2.25} />
              {benefit}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal className="mt-4 flex flex-col items-start justify-between gap-5 rounded-3xl border border-line bg-surface p-7 sm:flex-row sm:items-center sm:p-8">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-ink">Stuck on a step?</h2>
          <p className="mt-1 text-[15px] text-muted">Settings vary between phone makers. Open an issue and describe what you see.</p>
        </div>
        <Button href={ISSUES_URL} external variant="secondary">
          <GitHubIcon />
          Get help on GitHub
        </Button>
      </Reveal>

      {viewer && (
        <Lightbox
          items={viewer.items}
          index={viewer.index}
          onClose={() => setViewer(null)}
          onIndexChange={(index) => setViewer((current) => ({ ...current, index }))}
        />
      )}
    </div>
  );
}

function GuideStep({ number, step, isLast, onOpenImage }) {
  return (
    <Reveal as="li" className={`relative grid grid-cols-[2.25rem_1fr] gap-x-5 ${isLast ? '' : 'pb-12'}`}>
      {!isLast && <span aria-hidden="true" className="absolute bottom-0 left-[1.125rem] top-11 w-px bg-line" />}
      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface font-mono text-sm font-medium text-ink">
        {number}
      </span>

      <div className="min-w-0 pt-1">
        <h3 className="text-lg font-semibold tracking-tight text-ink">{step.title}</h3>
        {step.desc && <p className="mt-2 max-w-2xl text-[15px] leading-7 text-muted">{step.desc}</p>}
        {step.warning && (
          <div className="mt-3 flex max-w-2xl gap-3 rounded-xl border border-warn/25 bg-warn/[0.08] p-4 text-[15px] leading-6">
            <AlertIcon className="mt-0.5 h-5 w-5 shrink-0 text-warn" />
            <p className="text-muted">
              <span className="font-medium text-ink">Important: </span>
              {step.warning}
            </p>
          </div>
        )}

        <div className="-mx-1 mt-5 flex snap-x gap-3 overflow-x-auto px-1 pb-2">
          {step.images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => onOpenImage(src)}
              aria-label={`Enlarge screenshot ${i + 1} for “${step.title}”`}
              className="group relative shrink-0 snap-start overflow-hidden rounded-xl border border-line bg-subtle"
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                width="1080"
                height="2400"
                className="h-56 w-auto transition-transform duration-300 group-hover:scale-[1.03] sm:h-64"
              />
              <span className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-black/60 text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                <ExpandIcon className="h-3.5 w-3.5" strokeWidth={2} />
              </span>
            </button>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default Guide;
