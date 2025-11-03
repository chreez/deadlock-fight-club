import React from 'react';
import './SiteHeader.css';

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__container">
        <a href="/" className="site-header__logo">
          <span className="site-header__logo-text">Deadlock Fight Club</span>
        </a>
        <nav className="site-header__nav">
          <a href="/" className="site-header__nav-link">
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
