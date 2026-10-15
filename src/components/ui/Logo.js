import React from 'react';
import logo from '../../images/motionscroll.png';

// The white pinwheel mark on a brand-purple tile, matching the app icon.
function Logo({ className = 'h-8 w-8 rounded-[9px]' }) {
  return (
    <span className={`inline-flex shrink-0 items-center justify-center bg-brand ${className}`}>
      <img src={logo} alt="" draggable="false" className="h-[60%] w-[60%] select-none" />
    </span>
  );
}

export default Logo;
