import React from 'react';
import { getTierColor, getCategoryColor } from '../../styles/theme';
import './Badge.css';

export interface BadgeProps {
  type: 'tier' | 'cost' | 'category';
  value: string | number;
  color?: string;
}

export default function Badge({ type, value, color }: BadgeProps) {
  const getBadgeColor = (): string => {
    if (color) return color;

    if (type === 'tier') {
      const tierNum = parseInt(String(value)) as 1 | 2 | 3 | 4;
      return getTierColor(tierNum);
    }

    if (type === 'category') {
      const category = String(value).toLowerCase() as 'weapon' | 'vitality' | 'spirit';
      return getCategoryColor(category);
    }

    return 'var(--text-secondary)';
  };

  const getDisplayValue = (): string => {
    if (type === 'cost') {
      return `$${value}`;
    }
    if (type === 'tier') {
      return `T${value}`;
    }
    return String(value);
  };

  return (
    <span
      className={`badge badge--${type}`}
      style={{ '--badge-color': getBadgeColor() } as React.CSSProperties}
    >
      {getDisplayValue()}
    </span>
  );
}
