import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Section from '../Section';

describe('Section component', () => {
  it('should render children', () => {
    render(<Section>Section Content</Section>);
    expect(screen.getByText('Section Content')).toBeInTheDocument();
  });

  it('should render title when provided', () => {
    render(<Section title="Test Title">Content</Section>);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('should not render title when not provided', () => {
    const { container } = render(<Section>Content</Section>);
    expect(container.querySelector('.section__title')).not.toBeInTheDocument();
  });

  it('should apply id attribute when provided', () => {
    const { container } = render(<Section id="test-section">Content</Section>);
    const section = container.querySelector('#test-section');
    expect(section).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    const { container } = render(<Section className="custom">Content</Section>);
    expect(container.querySelector('.custom')).toBeInTheDocument();
  });

  it('should have section element', () => {
    const { container } = render(<Section>Content</Section>);
    expect(container.querySelector('section.section')).toBeInTheDocument();
  });

  it('should wrap content in section__content div', () => {
    const { container } = render(<Section>Content</Section>);
    expect(container.querySelector('.section__content')).toBeInTheDocument();
  });
});
