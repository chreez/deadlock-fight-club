import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HeroCard from './HeroCard';
import type { Hero } from '../../data/types';

describe('HeroCard component', () => {
  const mockHero: Hero = {
    name: 'Bebop',
    asset: 'bebop.png',
  };

  it('should render hero name', () => {
    render(<HeroCard hero={mockHero} />);
    expect(screen.getByText('Bebop')).toBeInTheDocument();
  });

  it('should render hero image with correct src', () => {
    render(<HeroCard hero={mockHero} />);
    const img = screen.getByAltText('Bebop');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/assets/heroes/bebop.png');
  });

  it('should apply selected class when selected', () => {
    const { container } = render(<HeroCard hero={mockHero} selected />);
    const heroCard = container.querySelector('.hero-card--selected');
    expect(heroCard).toBeInTheDocument();
  });

  it('should not apply selected class by default', () => {
    const { container } = render(<HeroCard hero={mockHero} />);
    const heroCard = container.querySelector('.hero-card--selected');
    expect(heroCard).not.toBeInTheDocument();
  });

  it('should apply clickable class when onClick is provided', () => {
    const { container } = render(<HeroCard hero={mockHero} onClick={() => {}} />);
    const heroCard = container.querySelector('.hero-card--clickable');
    expect(heroCard).toBeInTheDocument();
  });

  it('should call onClick when clicked', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    render(<HeroCard hero={mockHero} onClick={handleClick} />);

    const heroCard = screen.getByRole('button');
    await user.click(heroCard);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should have button role when clickable', () => {
    render(<HeroCard hero={mockHero} onClick={() => {}} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should not have button role when not clickable', () => {
    render(<HeroCard hero={mockHero} />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('should handle keyboard Enter key', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    render(<HeroCard hero={mockHero} onClick={handleClick} />);

    const heroCard = screen.getByRole('button');
    heroCard.focus();
    await user.keyboard('{Enter}');

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should handle keyboard Space key', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    render(<HeroCard hero={mockHero} onClick={handleClick} />);

    const heroCard = screen.getByRole('button');
    heroCard.focus();
    await user.keyboard(' ');

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should render with different hero data', () => {
    const anotherHero: Hero = {
      name: 'Lady Geist',
      asset: 'lady-geist.png',
    };
    render(<HeroCard hero={anotherHero} />);

    expect(screen.getByText('Lady Geist')).toBeInTheDocument();
    const img = screen.getByAltText('Lady Geist');
    expect(img).toHaveAttribute('src', '/assets/heroes/lady-geist.png');
  });

  it('should have lazy loading on image', () => {
    render(<HeroCard hero={mockHero} />);
    const img = screen.getByAltText('Bebop');
    expect(img).toHaveAttribute('loading', 'lazy');
  });
});
