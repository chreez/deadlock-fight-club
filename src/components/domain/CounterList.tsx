import React from 'react';
import type { CounterItem } from '../../data/types';
import { ITEMS } from '../../data/items';
import { getItemIcon } from '../../utils/assets';
import Badge from '../core/Badge';

export interface CounterListProps {
  counters: CounterItem[];
  heroName: string;
}

export default function CounterList({ counters, heroName }: CounterListProps) {
  // Group counters by category
  const groupedCounters = counters.reduce(
    (acc, counter) => {
      const category = counter.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(counter);
      return acc;
    },
    {} as Record<string, CounterItem[]>
  );

  const categoryOrder = ['weapon', 'vitality', 'spirit'];
  const sortedCategories = Object.keys(groupedCounters).sort((a, b) => {
    const aIndex = categoryOrder.indexOf(a.toLowerCase());
    const bIndex = categoryOrder.indexOf(b.toLowerCase());
    return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
  });

  return (
    <div className="counter-list">
      <h3 className="counter-list__title">Counter Items for {heroName}</h3>
      {sortedCategories.map(category => (
        <div key={category} className="counter-list__category">
          <h4 className="counter-list__category-title">
            <Badge type="category" value={category} />
          </h4>
          <div className="counter-list__items">
            {groupedCounters[category].map((counter, index) => {
              // Find the actual item from ITEMS to get its real category
              const item = ITEMS.find(i => i.name === counter.name);
              const itemCategory = item ? item.category : 'weapon';

              return (
                <div key={index} className="counter-item">
                  <div className="counter-item__header">
                    <img
                      src={getItemIcon(counter.name, itemCategory)}
                      alt={counter.name}
                      className="counter-item__icon"
                      loading="lazy"
                    />
                    <div className="counter-item__info">
                      <div className="counter-item__name">{counter.name}</div>
                      <Badge type="cost" value={counter.cost} />
                    </div>
                  </div>
                  <div className="counter-item__details">
                    <div className="counter-item__effect">
                      <strong>Effect:</strong> {counter.effect}
                    </div>
                    {counter.reason && (
                      <div className="counter-item__reason">
                        <strong>Why:</strong> {counter.reason}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
