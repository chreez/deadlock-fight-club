import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
  it('should render title', () => {
    render(<Header title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('should not show back link by default', () => {
    render(<Header title="Title" />);
    expect(screen.queryByText('Back')).not.toBeInTheDocument();
  });

  it('should show back link when showBackLink is true', () => {
    render(<Header title="Title" showBackLink />);
    expect(screen.getByText('Back')).toBeInTheDocument();
  });

  it('should have default back href of /', () => {
    render(<Header title="Title" showBackLink />);
    const backLink = screen.getByText('Back').parentElement;
    expect(backLink).toHaveAttribute('href', '/');
  });

  it('should use custom backHref when provided', () => {
    render(<Header title="Title" showBackLink backHref="/custom" />);
    const backLink = screen.getByText('Back').parentElement;
    expect(backLink).toHaveAttribute('href', '/custom');
  });

  it('should have header element', () => {
    const { container } = render(<Header title="Title" />);
    expect(container.querySelector('header.header')).toBeInTheDocument();
  });

  it('should render h1 with title', () => {
    const { container } = render(<Header title="My Title" />);
    const h1 = container.querySelector('h1.header__title');
    expect(h1).toBeInTheDocument();
    expect(h1).toHaveTextContent('My Title');
  });
});
