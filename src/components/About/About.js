import React from 'react';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import { ArrowUpRightIcon, GitHubIcon, LockIcon } from '../ui/Icons';
import { REPO_URL } from '../../config';

const story = [
  'This makes reading and browsing more accessible and convenient, especially when your hands are occupied: eating, holding a baby, cooking, playing an instrument, or for anyone with limited mobility.',
  'The app analyzes the front camera feed in real time to detect when you look up or down, then scrolls content in the same direction. Sensitivity is adjustable, so it can feel natural to you. No special hardware or setup is required, just a device with a front camera.',
  'The goal is to bridge the gap between traditional input methods and modern accessibility needs, and to make digital content more inclusive for everyone.',
];

function About() {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-24 pt-12 sm:px-6 md:pb-32 md:pt-20">
      <SectionHeading as="h1" eyebrow="About" title="Accessible scrolling, built for everyone." />

      <Reveal className="mt-10">
        <p className="text-xl leading-9 text-ink sm:text-[1.375rem]">
          MotionScroll was built to make scrolling hands-free. It uses your phone’s front-facing camera to track subtle head
          movements and turns them into smooth, automatic scrolling.
        </p>
        <div className="mt-8 space-y-6">
          {story.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="text-[17px] leading-8 text-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-14 grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl border border-line bg-surface p-7">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-accent">
            <LockIcon />
          </span>
          <h2 className="mt-5 text-lg font-semibold tracking-tight text-ink">Privacy by design</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-muted">
            All head-movement detection runs locally on your device. No video is ever transmitted, stored, or shared.
          </p>
        </div>

        <a
          href={REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col rounded-3xl border border-line bg-surface p-7 transition-colors hover:border-ink/20"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-accent">
            <GitHubIcon />
          </span>
          <h2 className="mt-5 text-lg font-semibold tracking-tight text-ink">Open source</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-muted">
            Explore the code, report issues, or contribute. Licensed under Apache 2.0.
          </p>
          <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[15px] font-medium text-accent">
            github.com/ayxse/MotionScroll
            <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </a>
      </Reveal>
    </div>
  );
}

export default About;
