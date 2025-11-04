import React from 'react';

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__container">
        <a href="/" className="site-header__logo" aria-label="Deadlock Fight Club">
          <span className="site-header__logo-text" aria-hidden="true">
            Deadlock Fight Club
          </span>
        </a>
        <nav className="site-header__nav">
          <a href="/" className="site-header__nav-link" aria-label="Fight Club">
            Fight Club
          </a>
          <a href="/guides" className="site-header__nav-link">
            Guides
          </a>
        </nav>
      </div>
    </header>
  );
}
