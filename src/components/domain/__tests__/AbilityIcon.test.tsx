import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import AbilityIcon from '../AbilityIcon';

describe('AbilityIcon component', () => {
  it('should render ability image', () => {
    render(<AbilityIcon heroName="Bebop" abilityName="Hyper Beam" />);
    const img = screen.getByAltText('Hyper Beam');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/assets/abilities/bebop/hyper-beam.png');
  });

  it('should render tooltip with ability name', () => {
    render(<AbilityIcon heroName="Bebop" abilityName="Hyper Beam" />);
    expect(screen.getByText('Hyper Beam')).toBeInTheDocument();
  });

  it('should apply default md size', () => {
    const { container } = render(<AbilityIcon heroName="Bebop" abilityName="Hook" />);
    expect(container.querySelector('.ability-icon--md')).toBeInTheDocument();
  });

  it('should apply sm size when specified', () => {
    const { container } = render(
      <AbilityIcon heroName="Bebop" abilityName="Hook" size="sm" />
    );
    expect(container.querySelector('.ability-icon--sm')).toBeInTheDocument();
  });

  it('should apply lg size when specified', () => {
    const { container } = render(
      <AbilityIcon heroName="Bebop" abilityName="Hook" size="lg" />
    );
    expect(container.querySelector('.ability-icon--lg')).toBeInTheDocument();
  });

  it('should have title attribute with ability name', () => {
    const { container } = render(<AbilityIcon heroName="Bebop" abilityName="Hook" />);
    const abilityIcon = container.querySelector('.ability-icon');
    expect(abilityIcon).toHaveAttribute('title', 'Hook');
  });

  it('should have lazy loading on image', () => {
    render(<AbilityIcon heroName="Bebop" abilityName="Hook" />);
    const img = screen.getByAltText('Hook');
    expect(img).toHaveAttribute('loading', 'lazy');
  });

  it('should show placeholder on image error', async () => {
    render(<AbilityIcon heroName="Unknown" abilityName="Unknown Ability" />);

    const img = screen.getByAltText('Unknown Ability');

    // Trigger error event
    img.dispatchEvent(new Event('error'));

    await waitFor(() => {
      expect(screen.getByText('U')).toBeInTheDocument(); // First letter of "Unknown Ability"
    });
  });

  it('should generate placeholder text from first letter of ability name', async () => {
    render(<AbilityIcon heroName="Test" abilityName="blast" />);

    const img = screen.getByAltText('blast');
    img.dispatchEvent(new Event('error'));

    await waitFor(() => {
      expect(screen.getByText('B')).toBeInTheDocument(); // Uppercase first letter
    });
  });
});
