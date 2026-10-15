import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

// Fades its children up the first time they scroll into view.
function Reveal({ as: Tag = 'div', delay = 0, threshold = 0.15, className = '', children, ...rest }) {
  const [ref, isVisible] = useScrollAnimation({ delay, threshold });

  return (
    <Tag ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

export default Reveal;
