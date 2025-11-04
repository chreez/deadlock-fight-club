import type { Item } from '../../data/types';
import ItemCard from './ItemCard';

export interface LoadoutDisplayProps {
  items: Item[];
  totalCost?: number;
  title?: string;
}

export default function LoadoutDisplay({ items, totalCost, title }: LoadoutDisplayProps) {
  const calculatedCost = totalCost ?? items.reduce((sum, item) => sum + item.cost, 0);

  // Count tier distribution
  const tierDistribution = items.reduce(
    (acc, item) => {
      acc[item.tier] = (acc[item.tier] || 0) + 1;
      return acc;
    },
    {} as Record<number, number>
  );

  return (
    <div className="loadout-display">
      {title && <h3 className="loadout-display__title">{title}</h3>}
      <div className="loadout-display__grid">
        {items.map((item, index) => (
          <ItemCard key={index} item={item} showCost={true} showCategory={true} />
        ))}
      </div>
      <div className="loadout-display__stats">
        <div className="loadout-display__stat">
          <span className="loadout-display__stat-label">Total Cost:</span>
          <span className="loadout-display__stat-value">${calculatedCost.toLocaleString()}</span>
        </div>
        <div className="loadout-display__stat">
          <span className="loadout-display__stat-label">Tier Distribution:</span>
          <span className="loadout-display__stat-value">
            {[1, 2, 3, 4].map(tier => (
              <span key={tier} className="loadout-display__tier-count">
                T{tier}: {tierDistribution[tier] || 0}
              </span>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}
