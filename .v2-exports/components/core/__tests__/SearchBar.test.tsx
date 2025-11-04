import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from '../SearchBar';

describe('SearchBar component', () => {
  it('should render search input', () => {
    const onChange = vi.fn();
    render(<SearchBar value="" onChange={onChange} />);
    const input = screen.getByPlaceholderText('Search...');
    expect(input).toBeInTheDocument();
  });

  it('should use custom placeholder', () => {
    const onChange = vi.fn();
    render(<SearchBar value="" onChange={onChange} placeholder="Search heroes..." />);
    expect(screen.getByPlaceholderText('Search heroes...')).toBeInTheDocument();
  });

  it('should display current value', () => {
    const onChange = vi.fn();
    render(<SearchBar value="test" onChange={onChange} />);
    const input = screen.getByPlaceholderText('Search...');
    expect(input).toHaveValue('test');
  });

  it('should call onChange when typing', async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(<SearchBar value="" onChange={onChange} />);

    const input = screen.getByPlaceholderText('Search...');
    await user.type(input, 'a');

    expect(onChange).toHaveBeenCalled();
  });

  it('should show clear button when value is not empty', () => {
    const onChange = vi.fn();
    render(<SearchBar value="test" onChange={onChange} />);
    const clearButton = screen.getByLabelText('Clear search');
    expect(clearButton).toBeInTheDocument();
  });

  it('should not show clear button when value is empty', () => {
    const onChange = vi.fn();
    render(<SearchBar value="" onChange={onChange} />);
    const clearButton = screen.queryByLabelText('Clear search');
    expect(clearButton).not.toBeInTheDocument();
  });

  it('should call onClear when clear button is clicked', async () => {
    const onChange = vi.fn();
    const onClear = vi.fn();
    const user = userEvent.setup();
    render(<SearchBar value="test" onChange={onChange} onClear={onClear} />);

    const clearButton = screen.getByLabelText('Clear search');
    await user.click(clearButton);

    expect(onClear).toHaveBeenCalled();
  });

  it('should clear input when clear button is clicked', async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(<SearchBar value="test" onChange={onChange} />);

    const clearButton = screen.getByLabelText('Clear search');
    await user.click(clearButton);

    const input = screen.getByPlaceholderText('Search...');
    expect(input).toHaveValue('');
  });

  it('should have search icon', () => {
    const onChange = vi.fn();
    const { container } = render(<SearchBar value="" onChange={onChange} />);
    const searchIcon = container.querySelector('.search-bar__icon');
    expect(searchIcon).toBeInTheDocument();
  });
});
