import React from 'react';
import Reveal from './Reveal';

const titleSizes = {
  h1: 'text-4xl sm:text-5xl lg:text-[3.5rem] tracking-[-0.035em] leading-[1.05]',
  h2: 'text-3xl sm:text-4xl lg:text-[2.75rem] tracking-[-0.03em] leading-[1.1]',
};

// Eyebrow + title + optional description, used at the top of pages and sections.
function SectionHeading({ eyebrow, title, description, as: Title = 'h2', align = 'left', className = '' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : '';

  return (
    <Reveal className={`max-w-2xl ${alignment} ${className}`}>
      {eyebrow && (
        <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent">{eyebrow}</p>
      )}
      <Title className={`mt-4 text-balance font-semibold text-ink ${titleSizes[Title]}`}>{title}</Title>
      {description && <p className="mt-5 text-lg leading-8 text-muted">{description}</p>}
    </Reveal>
  );
}

export default SectionHeading;
