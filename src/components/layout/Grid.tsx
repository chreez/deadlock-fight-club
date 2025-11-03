import React from 'react';
import './Grid.css';

export interface GridProps {
  columns?: 2 | 3 | 4 | 'auto';
  gap?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  responsive?: boolean;
  className?: string;
}

export default function Grid({
  columns = 3,
  gap = 'md',
  children,
  responsive = true,
  className = '',
}: GridProps) {
  return (
    <div
      className={`grid grid--cols-${columns} grid--gap-${gap} ${
        responsive ? 'grid--responsive' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
