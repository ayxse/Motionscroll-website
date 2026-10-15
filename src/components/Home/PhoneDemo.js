import React from 'react';
import logo from '../../images/motionscroll.png';
import { ArrowDownIcon, ArrowUpIcon } from '../ui/Icons';

const ingredients = [
  '200 g spaghetti',
  '2 lemons, zest and juice',
  '3 cloves garlic, sliced',
  'A handful of basil and parsley',
  'Olive oil, salt and pepper',
  'Parmesan, to serve',
];

const method = [
  'Cook the pasta in well-salted water until just al dente.',
  'Meanwhile, warm the olive oil and gently fry the garlic until golden.',
  'Stir in the lemon zest, juice and a splash of pasta water.',
  'Toss the pasta through the sauce with the chopped herbs.',
  'Season, then finish with plenty of parmesan.',
  'Serve straight away, with extra lemon on the side.',
];

// Decorative: a phone scrolling a recipe while a face glyph tilts in sync.
// The timeline lives in index.css (.demo-*).
function PhoneDemo() {
  return (
    <div className="relative mx-auto flex w-full max-w-[440px] justify-center py-6" aria-hidden="true">
      {/* Sensing rings */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-line" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-line" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-3xl" />

      {/* Phone */}
      <div className="relative h-[560px] w-[276px] rounded-[46px] bg-[#111113] p-[9px] shadow-2xl shadow-black/25 ring-1 ring-black/5 dark:ring-white/10">
        <div className="relative h-full w-full overflow-hidden rounded-[37px] bg-surface">
          <div className="absolute inset-x-0 top-0 z-10 flex h-11 items-center justify-between bg-surface/90 px-6 text-[11px] font-semibold text-ink backdrop-blur">
            <span>9:41</span>
            <span className="absolute left-1/2 top-2.5 h-[22px] w-[76px] -translate-x-1/2 rounded-full bg-[#111113]" />
            <span className="flex items-center gap-1">
              <span className="h-2 w-3 rounded-[2px] bg-ink/80" />
              <span className="h-2.5 w-5 rounded-[3px] border border-ink/60 p-px">
                <span className="block h-full w-3/4 rounded-[1px] bg-ink/80" />
              </span>
            </span>
          </div>

          <div className="demo-feed px-5 pt-16 [--feed-distance:-430px]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-accent">Recipe · 25 min</p>
            <h3 className="mt-1.5 text-[20px] font-semibold leading-tight tracking-tight text-ink">Lemon herb pasta</h3>
            <p className="mt-1.5 text-[11.5px] leading-[1.55] text-muted">
              Bright, quick and made with things you already have. Perfect for a weeknight.
            </p>

            <div className="mt-4 flex h-32 items-center justify-center rounded-2xl bg-subtle">
              <svg viewBox="0 0 80 56" className="h-16 w-24 text-muted/60" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 26h68a34 26 0 0 1-68 0Z" />
                <path d="M28 52h24" />
                <path d="M30 18c2-6-2-8 0-14M40 18c2-6-2-8 0-14M50 18c2-6-2-8 0-14" />
              </svg>
            </div>

            <h4 className="mt-5 text-[12.5px] font-semibold text-ink">Ingredients</h4>
            <ul className="mt-2.5 space-y-2.5">
              {ingredients.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-[11.5px] text-muted">
                  <span className="h-3.5 w-3.5 shrink-0 rounded-[4px] border border-line bg-canvas" />
                  {item}
                </li>
              ))}
            </ul>

            <h4 className="mt-6 text-[12.5px] font-semibold text-ink">Method</h4>
            <ol className="mt-2.5 space-y-3">
              {method.map((step, i) => (
                <li key={step} className="flex gap-2.5 text-[11.5px] leading-[1.55] text-muted">
                  <span className="mt-px flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand/10 text-[9px] font-semibold text-accent">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>

            <div className="mt-6 rounded-xl bg-brand/10 p-3.5">
              <p className="text-[11px] font-semibold text-accent">Tip</p>
              <p className="mt-1 text-[11.5px] leading-[1.55] text-ink/80">
                Save a mug of pasta water before draining. It makes the sauce glossy and silky.
              </p>
            </div>
          </div>

          {/* MotionScroll's floating overlay shortcut */}
          <div className="absolute right-3 top-[58%] flex h-11 w-11 items-center justify-center rounded-full bg-brand shadow-lg shadow-brand/30 ring-4 ring-surface">
            <img src={logo} alt="" className="h-5 w-5" />
          </div>
        </div>
      </div>

      {/* Head-tilt status */}
      <div className="absolute bottom-16 left-0 flex items-center gap-3 rounded-2xl border border-line bg-surface/95 py-3 pl-3 pr-5 shadow-xl shadow-black/10 backdrop-blur sm:-left-4">
        <svg viewBox="0 0 40 40" className="h-10 w-10 shrink-0">
          <circle cx="20" cy="20" r="19" className="fill-brand/10 stroke-brand/30" strokeWidth="1" />
          <g className="demo-face fill-accent">
            <circle cx="14.5" cy="17" r="1.9" />
            <circle cx="25.5" cy="17" r="1.9" />
            <path d="M14.5 24.5q5.5 4 11 0" fill="none" className="stroke-accent" strokeWidth="1.9" strokeLinecap="round" />
          </g>
        </svg>
        <div className="relative h-10 w-[118px]">
          <StatusLabel className="demo-label-level" title="Head level" detail="Paused" />
          <StatusLabel
            className="demo-label-down"
            title="Tilting down"
            detail={<><ArrowDownIcon className="h-3 w-3" strokeWidth={2.5} /> Scrolling down</>}
          />
          <StatusLabel
            className="demo-label-up"
            title="Tilting up"
            detail={<><ArrowUpIcon className="h-3 w-3" strokeWidth={2.5} /> Scrolling up</>}
          />
        </div>
      </div>
    </div>
  );
}

function StatusLabel({ className, title, detail }) {
  return (
    <div className={`absolute inset-0 flex flex-col justify-center ${className}`}>
      <span className="text-[13px] font-semibold leading-tight text-ink">{title}</span>
      <span className="mt-0.5 inline-flex items-center gap-1 text-xs text-muted">{detail}</span>
    </div>
  );
}

export default PhoneDemo;
