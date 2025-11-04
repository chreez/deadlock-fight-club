import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Badge from '../Badge';

describe('Badge component', () => {
  describe('tier badges', () => {
    it('should render tier badge with T prefix', () => {
      render(<Badge type="tier" value={1} />);
      expect(screen.getByText('T1')).toBeInTheDocument();
    });

    it('should render all tier levels correctly', () => {
      const { rerender } = render(<Badge type="tier" value={1} />);
      expect(screen.getByText('T1')).toBeInTheDocument();

      rerender(<Badge type="tier" value={2} />);
      expect(screen.getByText('T2')).toBeInTheDocument();

      rerender(<Badge type="tier" value={3} />);
      expect(screen.getByText('T3')).toBeInTheDocument();

      rerender(<Badge type="tier" value={4} />);
      expect(screen.getByText('T4')).toBeInTheDocument();
    });

    it('should apply tier-specific class', () => {
      const { container } = render(<Badge type="tier" value={2} />);
      const badge = container.querySelector('.badge--tier');
      expect(badge).toBeInTheDocument();
    });
  });

  describe('cost badges', () => {
    it('should render cost badge with $ prefix', () => {
      render(<Badge type="cost" value={500} />);
      expect(screen.getByText('$500')).toBeInTheDocument();
    });

    it('should format different cost values', () => {
      const { rerender } = render(<Badge type="cost" value={500} />);
      expect(screen.getByText('$500')).toBeInTheDocument();

      rerender(<Badge type="cost" value={1250} />);
      expect(screen.getByText('$1250')).toBeInTheDocument();

      rerender(<Badge type="cost" value={6200} />);
      expect(screen.getByText('$6200')).toBeInTheDocument();
    });

    it('should apply cost-specific class', () => {
      const { container } = render(<Badge type="cost" value={500} />);
      const badge = container.querySelector('.badge--cost');
      expect(badge).toBeInTheDocument();
    });
  });

  describe('category badges', () => {
    it('should render category badge with value as-is', () => {
      render(<Badge type="category" value="weapon" />);
      expect(screen.getByText('weapon')).toBeInTheDocument();
    });

    it('should render all category types', () => {
      const { rerender } = render(<Badge type="category" value="weapon" />);
      expect(screen.getByText('weapon')).toBeInTheDocument();

      rerender(<Badge type="category" value="vitality" />);
      expect(screen.getByText('vitality')).toBeInTheDocument();

      rerender(<Badge type="category" value="spirit" />);
      expect(screen.getByText('spirit')).toBeInTheDocument();
    });

    it('should apply category-specific class', () => {
      const { container } = render(<Badge type="category" value="weapon" />);
      const badge = container.querySelector('.badge--category');
      expect(badge).toBeInTheDocument();
    });
  });

  describe('custom colors', () => {
    it('should use custom color when provided', () => {
      const { container } = render(<Badge type="tier" value={1} color="#ff0000" />);
      const badge = container.querySelector('.badge');
      expect(badge).toHaveStyle({ '--badge-color': '#ff0000' });
    });
  });

  describe('badge styling', () => {
    it('should have base badge class', () => {
      const { container } = render(<Badge type="tier" value={1} />);
      const badge = container.querySelector('.badge');
      expect(badge).toBeInTheDocument();
    });

    it('should combine base and type-specific classes', () => {
      const { container } = render(<Badge type="cost" value={500} />);
      const badge = container.querySelector('.badge.badge--cost');
      expect(badge).toBeInTheDocument();
    });
  });
});
