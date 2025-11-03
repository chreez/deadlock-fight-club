import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ItemCard from '../ItemCard';
import type { Item } from '../../data/types';

describe('ItemCard component', () => {
  const mockItem: Item = {
    name: 'Reactive Barrier',
    category: 'vitality',
    tier: 2,
    cost: 1250,
  };

  it('should render item name', () => {
    render(<ItemCard item={mockItem} />);
    expect(screen.getByText('Reactive Barrier')).toBeInTheDocument();
  });

  it('should render item image with correct src', () => {
    render(<ItemCard item={mockItem} />);
    const img = screen.getByAltText('Reactive Barrier');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/assets/items/vitality/reactive-barrier.png');
  });

  it('should render tier badge', () => {
    render(<ItemCard item={mockItem} />);
    expect(screen.getByText('T2')).toBeInTheDocument();
  });

  it('should render cost badge by default', () => {
    render(<ItemCard item={mockItem} />);
    expect(screen.getByText('$1250')).toBeInTheDocument();
  });

  it('should render category badge by default', () => {
    render(<ItemCard item={mockItem} />);
    expect(screen.getByText('vitality')).toBeInTheDocument();
  });

  it('should hide cost badge when showCost is false', () => {
    render(<ItemCard item={mockItem} showCost={false} />);
    expect(screen.queryByText('$1250')).not.toBeInTheDocument();
  });

  it('should hide category badge when showCategory is false', () => {
    render(<ItemCard item={mockItem} showCategory={false} />);
    expect(screen.queryByText('vitality')).not.toBeInTheDocument();
  });

  it('should apply clickable class when onClick is provided', () => {
    const { container } = render(<ItemCard item={mockItem} onClick={() => {}} />);
    const itemCard = container.querySelector('.item-card--clickable');
    expect(itemCard).toBeInTheDocument();
  });

  it('should call onClick when clicked', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    render(<ItemCard item={mockItem} onClick={handleClick} />);

    const itemCard = screen.getByRole('button');
    await user.click(itemCard);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should have button role when clickable', () => {
    render(<ItemCard item={mockItem} onClick={() => {}} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should not have button role when not clickable', () => {
    render(<ItemCard item={mockItem} />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('should handle keyboard Enter key', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    render(<ItemCard item={mockItem} onClick={handleClick} />);

    const itemCard = screen.getByRole('button');
    itemCard.focus();
    await user.keyboard('{Enter}');

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should handle keyboard Space key', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    render(<ItemCard item={mockItem} onClick={handleClick} />);

    const itemCard = screen.getByRole('button');
    itemCard.focus();
    await user.keyboard(' ');

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should render weapon category item correctly', () => {
    const weaponItem: Item = {
      name: 'Basic Magazine',
      category: 'weapon',
      tier: 1,
      cost: 500,
    };
    render(<ItemCard item={weaponItem} />);

    expect(screen.getByText('Basic Magazine')).toBeInTheDocument();
    expect(screen.getByText('T1')).toBeInTheDocument();
    expect(screen.getByText('$500')).toBeInTheDocument();
    expect(screen.getByText('weapon')).toBeInTheDocument();

    const img = screen.getByAltText('Basic Magazine');
    expect(img).toHaveAttribute('src', '/assets/items/weapon/basic-magazine.png');
  });

  it('should render spirit category item correctly', () => {
    const spiritItem: Item = {
      name: 'Mystic Burst',
      category: 'spirit',
      tier: 1,
      cost: 500,
    };
    render(<ItemCard item={spiritItem} />);

    expect(screen.getByText('spirit')).toBeInTheDocument();
    const img = screen.getByAltText('Mystic Burst');
    expect(img).toHaveAttribute('src', '/assets/items/spirit/mystic-burst.png');
  });

  it('should have lazy loading on image', () => {
    render(<ItemCard item={mockItem} />);
    const img = screen.getByAltText('Reactive Barrier');
    expect(img).toHaveAttribute('loading', 'lazy');
  });
});
