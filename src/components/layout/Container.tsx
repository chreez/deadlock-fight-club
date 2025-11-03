import React from 'react';

export interface ContainerProps {
  maxWidth?: 'sm' | 'md' | 'lg' | 'full';
  padding?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function Container({
  maxWidth = 'lg',
  padding = true,
  children,
  className = '',
}: ContainerProps) {
  return (
    <div
      className={`container container--${maxWidth} ${
        padding ? 'container--padded' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
