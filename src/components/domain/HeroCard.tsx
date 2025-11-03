import React from 'react';
import type { Hero } from '../../data/types';
import { getHeroPortrait } from '../../utils/assets';
import './HeroCard.css';

export interface HeroCardProps {
  hero: Hero;
  onClick?: () => void;
  selected?: boolean;
}

export default function HeroCard({ hero, onClick, selected = false }: HeroCardProps) {
  return (
    <div
      className={`hero-card ${selected ? 'hero-card--selected' : ''} ${
        onClick ? 'hero-card--clickable' : ''
      }`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
    >
      <div className="hero-card__image-container">
        <img
          src={getHeroPortrait(hero.name, hero.asset)}
          alt={hero.name}
          className="hero-card__image"
          loading="lazy"
        />
      </div>
      <div className="hero-card__name">{hero.name}</div>
    </div>
  );
}
