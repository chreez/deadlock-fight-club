import React, { useState } from 'react';
import { getAbilityIcon } from '../../utils/assets';
import './AbilityIcon.css';

export interface AbilityIconProps {
  heroName: string;
  abilityName: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function AbilityIcon({ heroName, abilityName, size = 'md' }: AbilityIconProps) {
  const [imageError, setImageError] = useState(false);
  const iconPath = getAbilityIcon(heroName, abilityName);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className={`ability-icon ability-icon--${size}`} title={abilityName}>
      {imageError ? (
        <div className="ability-icon__placeholder">
          <span className="ability-icon__placeholder-text">
            {abilityName.charAt(0).toUpperCase()}
          </span>
        </div>
      ) : (
        <img
          src={iconPath}
          alt={abilityName}
          className="ability-icon__image"
          onError={handleImageError}
          loading="lazy"
        />
      )}
      <div className="ability-icon__tooltip">{abilityName}</div>
    </div>
  );
}
