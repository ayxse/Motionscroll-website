import React from 'react';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import { ArrowRightIcon, DownloadIcon } from '../ui/Icons';
import { MIN_ANDROID, RELEASE_URL } from '../../config';

const steps = [
  {
    title: 'Download the APK',
    desc: 'Grab the latest release from GitHub and install it on your phone.',
  },
  {
    title: 'Turn on the service',
    desc: 'Allow restricted settings, then enable MotionScroll in Accessibility.',
  },
  {
    title: 'Tilt to scroll',
    desc: 'Switch on the camera, open anything that scrolls, and tilt your head.',
  },
];

function GetStartedSection() {
  return (
    <section className="px-5 pb-24 pt-4 sm:px-6 md:pb-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          align="center"
          eyebrow="Get started"
          title="Up and running in three steps"
        />

        <Reveal as="ol" className="mt-14 grid gap-4 md:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="rounded-3xl border border-line bg-surface p-7">
              <span className="font-mono text-sm font-medium text-accent">0{i + 1}</span>
              <h3 className="mt-6 text-[17px] font-semibold tracking-tight text-ink">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{step.desc}</p>
            </li>
          ))}
        </Reveal>

        <Reveal className="mt-12 flex flex-col items-center gap-4">
          <div className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={RELEASE_URL} size="lg" className="w-full sm:w-auto">
              <DownloadIcon strokeWidth={2} />
              Download APK
            </Button>
            <Button to="/guide" variant="secondary" size="lg" className="w-full sm:w-auto">
              Read the setup guide
              <ArrowRightIcon />
            </Button>
          </div>
          <p className="text-sm text-muted">Requires Android {MIN_ANDROID} or newer with a front-facing camera.</p>
        </Reveal>
      </div>
    </section>
  );
}

export default GetStartedSection;
