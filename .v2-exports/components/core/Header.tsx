import React from 'react';

export interface HeaderProps {
  title: string;
  showBackLink?: boolean;
  backHref?: string;
}

export default function Header({ title, showBackLink = false, backHref = '/' }: HeaderProps) {
  return (
    <header className="header">
      <div className="header__container">
        {showBackLink && (
          <a href={backHref} className="header__back">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            <span>Back</span>
          </a>
        )}
        <h1 className="header__title">{title}</h1>
      </div>
    </header>
  );
}
