import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import PhoneDemo from './PhoneDemo';
import { ArrowRightIcon, CheckIcon, DownloadIcon } from '../ui/Icons';
import { MIN_ANDROID, RELEASE_URL, VERSION } from '../../config';

const highlights = [`Android ${MIN_ANDROID}+`, 'Processed on-device', 'Free & open source'];

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-10 sm:px-6 md:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:pb-24 lg:pt-20">
        <div className="text-center lg:text-left">
          <Link
            to="/download"
            className="animate-rise inline-flex items-center gap-2 rounded-full border border-line bg-surface py-1 pl-1 pr-3 text-[13px] text-muted shadow-sm transition-colors hover:text-ink"
          >
            <span className="rounded-full bg-brand/10 px-2 py-0.5 font-mono text-xs font-medium text-accent">v{VERSION}</span>
            Now available for Android
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </Link>

          <h1
            className="animate-rise mt-6 text-balance text-[2.625rem] font-semibold leading-[1.04] tracking-[-0.04em] text-ink sm:text-6xl lg:text-[4.25rem]"
            style={{ animationDelay: '80ms' }}
          >
            <span className="block">
              Scroll <span className="whitespace-nowrap">hands-free.</span>
            </span>
            <span className="block text-muted">Just tilt your head.</span>
          </h1>

          <p
            className="animate-rise mx-auto mt-6 max-w-xl text-lg leading-8 text-muted lg:mx-0"
            style={{ animationDelay: '160ms' }}
          >
            MotionScroll turns small head movements into smooth scrolling on Android. Made for recipes, sheet music,
            long reads, and every moment your hands are busy.
          </p>

          <div
            className="animate-rise mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
            style={{ animationDelay: '240ms' }}
          >
            <Button href={RELEASE_URL} size="lg" className="w-full sm:w-auto">
              <DownloadIcon strokeWidth={2} />
              Download APK
            </Button>
            <Button to="/guide" variant="secondary" size="lg" className="w-full sm:w-auto">
              Setup guide
              <ArrowRightIcon />
            </Button>
          </div>

          <ul
            className="animate-rise mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted lg:justify-start"
            style={{ animationDelay: '320ms' }}
          >
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-1.5">
                <CheckIcon className="h-4 w-4 text-accent" strokeWidth={2.25} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-rise" style={{ animationDelay: '200ms' }}>
          <PhoneDemo />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
