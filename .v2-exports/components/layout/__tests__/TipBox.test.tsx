import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TipBox from '../TipBox';

describe('TipBox component', () => {
  it('should render children', () => {
    render(<TipBox>Tip content</TipBox>);
    expect(screen.getByText('Tip content')).toBeInTheDocument();
  });

  it('should render title when provided', () => {
    render(<TipBox title="Pro Tip">Content</TipBox>);
    expect(screen.getByText('Pro Tip')).toBeInTheDocument();
  });

  it('should not render title when not provided', () => {
    const { container } = render(<TipBox>Content</TipBox>);
    expect(container.querySelector('.tip-box__title')).not.toBeInTheDocument();
  });

  it('should apply default info variant', () => {
    const { container } = render(<TipBox>Content</TipBox>);
    expect(container.querySelector('.tip-box--info')).toBeInTheDocument();
  });

  it('should apply warning variant', () => {
    const { container } = render(<TipBox variant="warning">Content</TipBox>);
    expect(container.querySelector('.tip-box--warning')).toBeInTheDocument();
  });

  it('should apply success variant', () => {
    const { container } = render(<TipBox variant="success">Content</TipBox>);
    expect(container.querySelector('.tip-box--success')).toBeInTheDocument();
  });

  it('should render icon for info variant', () => {
    const { container } = render(<TipBox variant="info">Content</TipBox>);
    const icon = container.querySelector('.tip-box__icon svg');
    expect(icon).toBeInTheDocument();
  });

  it('should render icon for warning variant', () => {
    const { container } = render(<TipBox variant="warning">Content</TipBox>);
    const icon = container.querySelector('.tip-box__icon svg');
    expect(icon).toBeInTheDocument();
  });

  it('should render icon for success variant', () => {
    const { container } = render(<TipBox variant="success">Content</TipBox>);
    const icon = container.querySelector('.tip-box__icon svg');
    expect(icon).toBeInTheDocument();
  });

  it('should have tip-box base class', () => {
    const { container } = render(<TipBox>Content</TipBox>);
    expect(container.querySelector('.tip-box')).toBeInTheDocument();
  });
});
