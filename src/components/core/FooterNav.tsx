import React from 'react';
import './FooterNav.css';

export interface FooterNavProps {
  currentPage?: 'fight-club' | 'counter-guide' | 'counter-cheatsheet';
}

export default function FooterNav({ currentPage }: FooterNavProps) {
  const links = [
    { href: '/', label: 'Fight Club', id: 'fight-club' },
    { href: '/counter-guide', label: 'Counter Guide', id: 'counter-guide' },
    { href: '/counter-cheatsheet', label: 'Counter Cheatsheet', id: 'counter-cheatsheet' },
  ];

  return (
    <nav className="footer-nav">
      <div className="footer-nav__container">
        {links.map(link => (
          <a
            key={link.id}
            href={link.href}
            className={`footer-nav__link ${
              currentPage === link.id ? 'footer-nav__link--active' : ''
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
