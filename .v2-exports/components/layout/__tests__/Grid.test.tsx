import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Grid from '../Grid';

describe('Grid component', () => {
  it('should render children', () => {
    render(<Grid>Grid Content</Grid>);
    expect(screen.getByText('Grid Content')).toBeInTheDocument();
  });

  it('should apply default 3 column layout', () => {
    const { container } = render(<Grid>Content</Grid>);
    expect(container.querySelector('.grid--cols-3')).toBeInTheDocument();
  });

  it('should apply 2 column layout', () => {
    const { container } = render(<Grid columns={2}>Content</Grid>);
    expect(container.querySelector('.grid--cols-2')).toBeInTheDocument();
  });

  it('should apply 4 column layout', () => {
    const { container } = render(<Grid columns={4}>Content</Grid>);
    expect(container.querySelector('.grid--cols-4')).toBeInTheDocument();
  });

  it('should apply auto column layout', () => {
    const { container } = render(<Grid columns="auto">Content</Grid>);
    expect(container.querySelector('.grid--cols-auto')).toBeInTheDocument();
  });

  it('should apply default md gap', () => {
    const { container } = render(<Grid>Content</Grid>);
    expect(container.querySelector('.grid--gap-md')).toBeInTheDocument();
  });

  it('should apply sm gap', () => {
    const { container } = render(<Grid gap="sm">Content</Grid>);
    expect(container.querySelector('.grid--gap-sm')).toBeInTheDocument();
  });

  it('should apply lg gap', () => {
    const { container } = render(<Grid gap="lg">Content</Grid>);
    expect(container.querySelector('.grid--gap-lg')).toBeInTheDocument();
  });

  it('should apply responsive class by default', () => {
    const { container } = render(<Grid>Content</Grid>);
    expect(container.querySelector('.grid--responsive')).toBeInTheDocument();
  });

  it('should not apply responsive class when responsive is false', () => {
    const { container } = render(<Grid responsive={false}>Content</Grid>);
    expect(container.querySelector('.grid--responsive')).not.toBeInTheDocument();
  });

  it('should apply custom className', () => {
    const { container } = render(<Grid className="custom">Content</Grid>);
    expect(container.querySelector('.custom')).toBeInTheDocument();
  });
});
