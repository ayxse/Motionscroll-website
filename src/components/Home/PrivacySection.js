import React from 'react';
import Reveal from '../ui/Reveal';
import { ArrowUpRightIcon, CloudOffIcon, CodeIcon, CpuIcon } from '../ui/Icons';
import { REPO_URL } from '../../config';

const points = [
  {
    icon: CpuIcon,
    title: 'Processed on-device',
    desc: 'Face detection runs locally, in real time, using your phone’s own hardware.',
  },
  {
    icon: CloudOffIcon,
    title: 'Nothing leaves your phone',
    desc: 'No cloud, no storage, no tracking. Video is never uploaded or shared.',
  },
  {
    icon: CodeIcon,
    title: 'Open for anyone to check',
    desc: 'Every line of code is public on GitHub under the Apache 2.0 license.',
  },
];

function PrivacySection() {
  return (
    <section className="px-5 py-20 sm:px-6 md:py-28">
      <Reveal className="scheme-dark mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-surface text-ink ring-1 ring-line">
        <div className="grid gap-12 p-8 sm:p-12 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:p-16">
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent">Privacy</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.1] tracking-[-0.03em] sm:text-4xl lg:text-[2.75rem]">
              Your camera feed never leaves your phone.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-8 text-muted">
              MotionScroll only needs to know which way your head is tilted. Everything else stays private.
            </p>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-1.5 text-[15px] font-medium text-accent transition-colors hover:text-ink"
            >
              Read the source on GitHub
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
          </div>

          <ul className="space-y-8 lg:pt-10">
            {points.map(({ icon: PointIcon, title, desc }) => (
              <li key={title} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-accent ring-1 ring-line">
                  <PointIcon />
                </span>
                <div>
                  <h3 className="text-[17px] font-semibold tracking-tight">{title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}

export default PrivacySection;
