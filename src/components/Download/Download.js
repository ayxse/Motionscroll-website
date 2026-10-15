import React from 'react';
import Button from '../ui/Button';
import Logo from '../ui/Logo';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import { ArrowRightIcon, CameraIcon, CheckIcon, DownloadIcon, InfoIcon, LockIcon, SmartphoneIcon } from '../ui/Icons';
import { APK_SIZE, MIN_ANDROID, RELEASE_URL, RELEASES_URL, VERSION } from '../../config';

const requirements = [
  { icon: SmartphoneIcon, label: `Android ${MIN_ANDROID} (Oreo) or newer` },
  { icon: CameraIcon, label: 'A front-facing camera' },
  { icon: LockIcon, label: 'Permission to install apps from unknown sources' },
];

const installSteps = [
  'Download the APK file from GitHub Releases.',
  'Open the file on your Android device.',
  'Allow installation from unknown sources if prompted.',
  'Follow the on-screen installation prompts.',
  'Grant camera permission when you first launch the app.',
];

function Download() {
  return (
    <div className="mx-auto max-w-5xl px-5 pb-24 pt-12 sm:px-6 md:pb-32 md:pt-20">
      <SectionHeading
        as="h1"
        eyebrow="Download"
        title="Get MotionScroll"
        description="Free and open source. Installs directly as an APK, no Play Store needed."
      />

      <Reveal className="mt-12 grid overflow-hidden rounded-3xl border border-line bg-surface md:grid-cols-[1.25fr_1fr]">
        <div className="flex flex-col justify-between gap-10 p-7 sm:p-10">
          <div className="flex items-center gap-4">
            <Logo className="h-14 w-14 rounded-2xl" />
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-ink">MotionScroll for Android</h2>
              <p className="mt-0.5 text-sm text-muted">
                Version {VERSION} · APK · {APK_SIZE}
              </p>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href={RELEASE_URL} size="lg" className="w-full sm:w-auto">
                <DownloadIcon strokeWidth={2} />
                Download APK
              </Button>
              <Button href={RELEASES_URL} external variant="secondary" size="lg" className="w-full sm:w-auto">
                All releases
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted">Hosted on GitHub Releases · Apache 2.0 license</p>
          </div>
        </div>

        <div className="border-t border-line bg-subtle/70 p-7 sm:p-10 md:border-l md:border-t-0">
          <h3 className="text-sm font-semibold text-ink">Requirements</h3>
          <ul className="mt-4 space-y-3.5">
            {requirements.map(({ icon: RequirementIcon, label }) => (
              <li key={label} className="flex items-start gap-3 text-[15px] leading-6 text-muted">
                <RequirementIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                {label}
              </li>
            ))}
          </ul>

          <h3 className="mt-8 text-sm font-semibold text-ink">Privacy</h3>
          <ul className="mt-4 space-y-3">
            {['All processing happens on-device', 'No user data collected or transmitted'].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15px] leading-6 text-muted">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={2} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <section className="mt-20 grid gap-8 md:mt-24 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">Installing the APK</h2>
          <p className="mt-3 text-[15px] leading-7 text-muted">
            Android asks for a couple of extra confirmations when you install an app from outside the Play Store.
          </p>
        </Reveal>

        <Reveal as="ol" className="divide-y divide-line border-y border-line">
          {installSteps.map((step, i) => (
            <li key={step} className="flex items-baseline gap-5 py-4 text-[15px] leading-7 text-ink">
              <span className="w-5 shrink-0 font-mono text-sm text-accent">{i + 1}</span>
              {step}
            </li>
          ))}
        </Reveal>
      </section>

      <Reveal className="mt-16 flex flex-col gap-5 rounded-3xl bg-brand/10 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div className="flex gap-4">
          <InfoIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
          <div>
            <h2 className="font-semibold tracking-tight text-ink">Next: finish setup</h2>
            <p className="mt-1 max-w-lg text-[15px] leading-6 text-muted">
              Android restricts accessibility access for apps installed outside the Play Store. The setup guide shows how to
              allow it.
            </p>
          </div>
        </div>
        <Button to="/guide" variant="secondary" className="shrink-0 self-start sm:self-auto">
          Open the setup guide
          <ArrowRightIcon />
        </Button>
      </Reveal>
    </div>
  );
}

export default Download;
