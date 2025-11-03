import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Container from './Container';

describe('Container component', () => {
  it('should render children', () => {
    render(<Container>Test Content</Container>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('should apply default lg max-width', () => {
    const { container } = render(<Container>Content</Container>);
    const containerEl = container.querySelector('.container--lg');
    expect(containerEl).toBeInTheDocument();
  });

  it('should apply sm max-width when specified', () => {
    const { container } = render(<Container maxWidth="sm">Content</Container>);
    const containerEl = container.querySelector('.container--sm');
    expect(containerEl).toBeInTheDocument();
  });

  it('should apply md max-width when specified', () => {
    const { container } = render(<Container maxWidth="md">Content</Container>);
    const containerEl = container.querySelector('.container--md');
    expect(containerEl).toBeInTheDocument();
  });

  it('should apply full max-width when specified', () => {
    const { container } = render(<Container maxWidth="full">Content</Container>);
    const containerEl = container.querySelector('.container--full');
    expect(containerEl).toBeInTheDocument();
  });

  it('should apply padded class by default', () => {
    const { container } = render(<Container>Content</Container>);
    const containerEl = container.querySelector('.container--padded');
    expect(containerEl).toBeInTheDocument();
  });

  it('should not apply padded class when padding is false', () => {
    const { container } = render(<Container padding={false}>Content</Container>);
    const containerEl = container.querySelector('.container--padded');
    expect(containerEl).not.toBeInTheDocument();
  });

  it('should apply custom className', () => {
    const { container } = render(<Container className="custom-class">Content</Container>);
    const containerEl = container.querySelector('.custom-class');
    expect(containerEl).toBeInTheDocument();
  });

  it('should combine multiple classes correctly', () => {
    const { container } = render(
      <Container maxWidth="sm" padding={true} className="custom">
        Content
      </Container>
    );
    const containerEl = container.firstChild;
    expect(containerEl).toHaveClass('container');
    expect(containerEl).toHaveClass('container--sm');
    expect(containerEl).toHaveClass('container--padded');
    expect(containerEl).toHaveClass('custom');
  });

  it('should render with empty className by default', () => {
    const { container } = render(<Container>Content</Container>);
    const containerEl = container.firstChild;
    // Should have base classes but not a specific custom class
    expect(containerEl).toHaveClass('container');
    expect(containerEl).toHaveClass('container--lg');
    expect(containerEl).toHaveClass('container--padded');
  });
});
