import React from 'react';
import type { Item } from '../../data/types';
import { getItemIcon } from '../../utils/assets';
import Badge from '../core/Badge';
import './ItemCard.css';

export interface ItemCardProps {
  item: Item;
  showCost?: boolean;
  showCategory?: boolean;
  onClick?: () => void;
}

export default function ItemCard({
  item,
  showCost = true,
  showCategory = true,
  onClick,
}: ItemCardProps) {
  return (
    <div
      className={`item-card ${onClick ? 'item-card--clickable' : ''}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
    >
      <div className="item-card__header">
        <Badge type="tier" value={item.tier} />
        {showCost && <Badge type="cost" value={item.cost} />}
      </div>
      <div className="item-card__image-container">
        <img
          src={getItemIcon(item.name, item.category)}
          alt={item.name}
          className="item-card__image"
          loading="lazy"
        />
      </div>
      <div className="item-card__footer">
        <div className="item-card__name">{item.name}</div>
        {showCategory && <Badge type="category" value={item.category} />}
      </div>
    </div>
  );
}
