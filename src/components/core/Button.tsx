import React from 'react';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'copy';
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  variant = 'primary',
  onClick,
  children,
  disabled = false,
  icon,
  type = 'button',
}: ButtonProps) {
  return (
    <button className={`btn btn--${variant}`} onClick={onClick} disabled={disabled} type={type}>
      {icon && <span className="btn__icon">{icon}</span>}
      <span className="btn__content">{children}</span>
    </button>
  );
}
