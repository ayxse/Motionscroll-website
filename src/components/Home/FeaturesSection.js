import React from 'react';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import { ArrowUpDownIcon, LayersIcon, ShieldIcon, SlidersIcon, TimerIcon, ToggleIcon } from '../ui/Icons';

const features = [
  {
    icon: ArrowUpDownIcon,
    title: 'Tilt to scroll',
    desc: 'Look down to scroll down, look up to scroll up. Small, natural head movements are all it takes.',
  },
  {
    icon: LayersIcon,
    title: 'Works across apps',
    desc: 'MotionScroll runs as an accessibility service, so it works system-wide in most apps that scroll.',
  },
  {
    icon: SlidersIcon,
    title: 'Three scroll modes',
    desc: 'Scroll continuously, skip a set distance at a time, or add a delay between each scroll.',
  },
  {
    icon: TimerIcon,
    title: 'Tuned to you',
    desc: 'Adjust the skip distance and cooldown until scrolling feels just right.',
  },
  {
    icon: ToggleIcon,
    title: 'One-tap overlay',
    desc: 'A floating shortcut switches MotionScroll on or off without opening the app.',
  },
  {
    icon: ShieldIcon,
    title: 'Private by design',
    desc: 'Face detection runs entirely on your phone. Camera data never leaves the device.',
  },
];

function FeaturesSection() {
  return (
    <section className="px-5 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Features"
          title="Small movements. Smooth scrolling."
          description="MotionScroll reads your head angle from the front camera and turns it into scroll gestures, in real time, right on your phone."
        />

        <Reveal className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: FeatureIcon, title, desc }) => (
            <div key={title} className="bg-surface p-7 md:p-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-accent">
                <FeatureIcon />
              </span>
              <h3 className="mt-5 text-[17px] font-semibold tracking-tight text-ink">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{desc}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default FeaturesSection;
