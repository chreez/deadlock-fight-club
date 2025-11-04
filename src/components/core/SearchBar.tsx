import { useState, useEffect } from 'react';

export interface SearchBarProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onClear?: () => void;
  debounceMs?: number;
}

export default function SearchBar({
  placeholder = 'Search...',
  value,
  onChange,
  onClear,
  debounceMs = 0,
}: SearchBarProps) {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  useEffect(() => {
    if (debounceMs > 0) {
      const timer = setTimeout(() => {
        onChange(localValue);
      }, debounceMs);
      return () => clearTimeout(timer);
    } else {
      onChange(localValue);
    }
  }, [localValue, debounceMs, onChange]);

  const handleClear = () => {
    setLocalValue('');
    if (onClear) {
      onClear();
    }
  };

  return (
    <div className="search-bar">
      <svg
        className="search-bar__icon"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
      <input
        type="text"
        className="search-bar__input"
        placeholder={placeholder}
        value={localValue}
        onChange={e => setLocalValue(e.target.value)}
      />
      {localValue && (
        <button
          className="search-bar__clear"
          onClick={handleClear}
          type="button"
          aria-label="Clear search"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  );
}
