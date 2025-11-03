import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import FooterNav from './FooterNav';

describe('FooterNav component', () => {
  it('should render all navigation links', () => {
    render(<FooterNav />);

    expect(screen.getByText('Fight Club')).toBeInTheDocument();
    expect(screen.getByText('Counter Guide')).toBeInTheDocument();
    expect(screen.getByText('Counter Cheatsheet')).toBeInTheDocument();
  });

  it('should have correct href attributes', () => {
    render(<FooterNav />);

    const fightClubLink = screen.getByText('Fight Club');
    const counterGuideLink = screen.getByText('Counter Guide');
    const counterCheatsheetLink = screen.getByText('Counter Cheatsheet');

    expect(fightClubLink).toHaveAttribute('href', '/');
    expect(counterGuideLink).toHaveAttribute('href', '/counter-guide');
    expect(counterCheatsheetLink).toHaveAttribute('href', '/counter-cheatsheet');
  });

  it('should highlight Fight Club when current page is fight-club', () => {
    const { container } = render(<FooterNav currentPage="fight-club" />);
    const fightClubLink = screen.getByText('Fight Club');

    expect(fightClubLink).toHaveClass('footer-nav__link--active');
  });

  it('should highlight Counter Guide when current page is counter-guide', () => {
    const { container } = render(<FooterNav currentPage="counter-guide" />);
    const counterGuideLink = screen.getByText('Counter Guide');

    expect(counterGuideLink).toHaveClass('footer-nav__link--active');
  });

  it('should highlight Counter Cheatsheet when current page is counter-cheatsheet', () => {
    const { container } = render(<FooterNav currentPage="counter-cheatsheet" />);
    const counterCheatsheetLink = screen.getByText('Counter Cheatsheet');

    expect(counterCheatsheetLink).toHaveClass('footer-nav__link--active');
  });

  it('should not highlight any link when no current page is set', () => {
    const { container } = render(<FooterNav />);
    const activeLinks = container.querySelectorAll('.footer-nav__link--active');

    expect(activeLinks.length).toBe(0);
  });

  it('should have nav element', () => {
    const { container } = render(<FooterNav />);
    expect(container.querySelector('nav.footer-nav')).toBeInTheDocument();
  });
});
