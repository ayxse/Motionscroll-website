import React from 'react';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import {
  AccessibilityIcon,
  BookOpenIcon,
  CoffeeIcon,
  FileTextIcon,
  GraduationCapIcon,
  HeartIcon,
  MusicIcon,
  UtensilsIcon,
} from '../ui/Icons';

const useCases = [
  { icon: UtensilsIcon, label: 'Following a recipe' },
  { icon: MusicIcon, label: 'Reading sheet music' },
  { icon: BookOpenIcon, label: 'Long-form articles' },
  { icon: GraduationCapIcon, label: 'Studying papers & notes' },
  { icon: FileTextIcon, label: 'Reviewing documents' },
  { icon: CoffeeIcon, label: 'Eating a meal' },
  { icon: HeartIcon, label: 'Holding a baby' },
  { icon: AccessibilityIcon, label: 'Limited hand mobility' },
];

function UseCasesSection() {
  return (
    <section className="border-y border-line bg-subtle/60 px-5 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          align="center"
          eyebrow="Use cases"
          title="Made for busy hands"
          description="Wherever touching the screen is awkward, messy, or simply not possible, MotionScroll keeps things moving."
        />

        <Reveal as="ul" className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3">
          {useCases.map(({ icon: UseCaseIcon, label }) => (
            <li
              key={label}
              className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface py-2.5 pl-3.5 pr-5 text-[15px] font-medium text-ink shadow-sm shadow-black/[0.03]"
            >
              <UseCaseIcon className="h-[18px] w-[18px] text-accent" />
              {label}
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default UseCasesSection;
