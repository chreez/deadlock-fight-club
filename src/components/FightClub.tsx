import React, { useState } from 'react';
import { HEROES } from '../data/heroes';
import { ITEMS, FAIR_ITEM_COMBOS } from '../data/items';
import type { Hero, Item } from '../data/types';
import { getRandomElement, shuffle } from '../utils/random';
import { getHeroPortrait, getItemIcon } from '../utils/assets';
import Button from './core/Button';
import './FightClub.css';

interface MatchData {
  hero1: Hero;
  hero2: Hero;
  player1Items: Item[];
  player2Items: Item[];
  totalCost: number;
}

export default function FightClub() {
  const [matchData, setMatchData] = useState<MatchData | null>(null);
  const [copied, setCopied] = useState(false);

  const selectFairItems = (): { player1Items: Item[]; player2Items: Item[]; totalCost: number } => {
    const combo = getRandomElement(FAIR_ITEM_COMBOS);
    const shuffledItems = shuffle(ITEMS);

    const player1Items: Item[] = [];
    const player2Items: Item[] = [];

    let i = 0;
    combo.tiers.forEach(tier => {
      while (i < shuffledItems.length && shuffledItems[i].tier !== tier) {
        i++;
      }
      if (i < shuffledItems.length) {
        player1Items.push(shuffledItems[i]);
        i++;
      }
    });

    combo.tiers.forEach(tier => {
      while (i < shuffledItems.length && shuffledItems[i].tier !== tier) {
        i++;
      }
      if (i < shuffledItems.length) {
        player2Items.push(shuffledItems[i]);
        i++;
      }
    });

    return {
      player1Items,
      player2Items,
      totalCost: combo.total,
    };
  };

  const generateMatch = () => {
    const hero1 = getRandomElement(HEROES);
    const hero2 = getRandomElement(HEROES);
    const { player1Items, player2Items, totalCost } = selectFairItems();

    setMatchData({
      hero1,
      hero2,
      player1Items,
      player2Items,
      totalCost,
    });
    setCopied(false);
  };

  const copyToClipboard = () => {
    if (!matchData) return;

    const text = `FIGHT CLUB MATCH
Player 1: ${matchData.hero1.name}
Items: ${matchData.player1Items.map(i => `${i.name} (${i.cost}s)`).join(', ')}

Player 2: ${matchData.hero2.name}
Items: ${matchData.player2Items.map(i => `${i.name} (${i.cost}s)`).join(', ')}

Total Cost per Player: ${matchData.totalCost.toLocaleString()} souls`;

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (!matchData) {
    return (
      <div className="fight-club">
        <div className="fight-club__intro">
          <h1 className="fight-club__title">Deadlock Fight Club</h1>
          <p className="fight-club__description">
            Generate balanced 1v1 matchups with randomized heroes and fair item builds.
            Perfect for settling disputes or practicing specific scenarios.
          </p>
          <Button variant="primary" onClick={generateMatch}>
            Generate Fight Club Match
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="fight-club">
      <div className="fight-club__match">
        <div className="fight-club__player-row">
          <span className="fight-club__player-label">PLAYER 1</span>
          <div className="fight-club__hero">
            <img
              src={getHeroPortrait(matchData.hero1.name)}
              alt={matchData.hero1.name}
              className="fight-club__hero-image"
            />
            <span className="fight-club__hero-name">{matchData.hero1.name}</span>
          </div>
          <div className="fight-club__items">
            {matchData.player1Items.map((item, index) => (
              <div key={index} className="fight-club__item">
                <img
                  src={getItemIcon(item.name, item.category)}
                  alt={item.name}
                  className="fight-club__item-image"
                  onError={(e) => {
                    const img = e.currentTarget;
                    img.src = '/assets/items/placeholder.png';
                  }}
                />
                <span className="fight-club__item-name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="fight-club__vs">VS</div>

        <div className="fight-club__player-row">
          <span className="fight-club__player-label">PLAYER 2</span>
          <div className="fight-club__hero">
            <img
              src={getHeroPortrait(matchData.hero2.name)}
              alt={matchData.hero2.name}
              className="fight-club__hero-image"
            />
            <span className="fight-club__hero-name">{matchData.hero2.name}</span>
          </div>
          <div className="fight-club__items">
            {matchData.player2Items.map((item, index) => (
              <div key={index} className="fight-club__item">
                <img
                  src={getItemIcon(item.name, item.category)}
                  alt={item.name}
                  className="fight-club__item-image"
                  onError={(e) => {
                    const img = e.currentTarget;
                    img.src = '/assets/items/placeholder.png';
                  }}
                />
                <span className="fight-club__item-name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="fight-club__actions">
        <Button variant="primary" onClick={generateMatch}>
          Generate a New Match
        </Button>
        <Button variant="copy" onClick={copyToClipboard}>
          {copied ? '✓ Copied!' : 'Copy to Clipboard'}
        </Button>
      </div>
    </div>
  );
}
