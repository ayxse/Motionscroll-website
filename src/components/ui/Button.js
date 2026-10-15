import React from 'react';
import { Link } from 'react-router-dom';

const base =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-colors duration-150 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:shrink-0';

const variants = {
  primary: 'bg-brand text-white shadow-sm shadow-brand/20 hover:bg-brand-strong',
  secondary: 'border border-line bg-surface text-ink hover:border-ink/20 hover:bg-subtle',
  ghost: 'text-muted hover:bg-subtle hover:text-ink',
};

const sizes = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-[15px]',
  lg: 'h-12 px-6 text-[15px]',
  icon: 'h-9 w-9',
};

// Renders a router <Link> for `to`, otherwise an <a>. `external` opens in a new tab.
function Button({ to, href, external = false, variant = 'primary', size = 'md', className = '', children, ...rest }) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}

export default Button;
