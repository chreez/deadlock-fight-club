import { useState } from 'react';
import { HEROES } from '../data/heroes';
import { ITEMS, FAIR_ITEM_COMBOS } from '../data/items';
import type { Hero, Item } from '../data/types';
import { getRandomElement, shuffle } from '../utils/random';

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
    combo.tiers.forEach((tier) => {
      while (i < shuffledItems.length && shuffledItems[i].tier !== tier) {
        i++;
      }
      if (i < shuffledItems.length) {
        player1Items.push(shuffledItems[i]);
        i++;
      }
    });

    combo.tiers.forEach((tier) => {
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

  const copyToClipboard = async () => {
    if (!matchData) return;

    const text = `FIGHT CLUB MATCH
Player 1: ${matchData.hero1.name}
Items: ${matchData.player1Items.map((i) => `${i.name} (${i.cost}s)`).join(', ')}

Player 2: ${matchData.hero2.name}
Items: ${matchData.player2Items.map((i) => `${i.name} (${i.cost}s)`).join(', ')}

Total Cost: ${matchData.totalCost} souls`;

    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fight-club">
      <div className="header">
        <h1>Deadlock Fight Club</h1>
        <p className="subtitle">Random 1v1 Hero & Item Generator</p>
      </div>

      <div className="controls">
        <button onClick={generateMatch} className="btn-generate">
          Generate Match
        </button>
        {matchData && (
          <button onClick={copyToClipboard} className="btn-copy">
            {copied ? '✓ Copied!' : 'Copy Match'}
          </button>
        )}
      </div>

      {matchData && (
        <div className="match-display">
          <div className="player player-1">
            <h2>Player 1</h2>
            <div className="hero-card">
              <img
                src={`/assets/heroes/${matchData.hero1.id}.png`}
                alt={matchData.hero1.name}
                onError={(e) => {
                  e.currentTarget.src = '/assets/heroes/generic.png';
                }}
              />
              <h3>{matchData.hero1.name}</h3>
            </div>
            <div className="items-list">
              <h4>Items ({matchData.totalCost} souls)</h4>
              {matchData.player1Items.map((item, idx) => (
                <div key={idx} className="item-card">
                  <img
                    src={`/assets/items/${item.category}/${item.id}.png`}
                    alt={item.name}
                    onError={(e) => {
                      e.currentTarget.src = '/assets/items/souls.png';
                    }}
                  />
                  <div className="item-info">
                    <span className="item-name">{item.name}</span>
                    <span className={`item-tier tier-${item.tier}`}>
                      Tier {item.tier} • {item.cost}s
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="vs">VS</div>

          <div className="player player-2">
            <h2>Player 2</h2>
            <div className="hero-card">
              <img
                src={`/assets/heroes/${matchData.hero2.id}.png`}
                alt={matchData.hero2.name}
                onError={(e) => {
                  e.currentTarget.src = '/assets/heroes/generic.png';
                }}
              />
              <h3>{matchData.hero2.name}</h3>
            </div>
            <div className="items-list">
              <h4>Items ({matchData.totalCost} souls)</h4>
              {matchData.player2Items.map((item, idx) => (
                <div key={idx} className="item-card">
                  <img
                    src={`/assets/items/${item.category}/${item.id}.png`}
                    alt={item.name}
                    onError={(e) => {
                      e.currentTarget.src = '/assets/items/souls.png';
                    }}
                  />
                  <div className="item-info">
                    <span className="item-name">{item.name}</span>
                    <span className={`item-tier tier-${item.tier}`}>
                      Tier {item.tier} • {item.cost}s
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .fight-club {
          max-width: 1400px;
          margin: 0 auto;
          padding: 40px 20px;
        }

        .header {
          text-align: center;
          margin-bottom: 40px;
        }

        .header h1 {
          font-size: 3rem;
          background: linear-gradient(135deg, var(--accent-orange), var(--accent-purple));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 10px;
        }

        .subtitle {
          color: var(--text-secondary);
          font-size: 1.2rem;
        }

        .controls {
          display: flex;
          gap: 15px;
          justify-content: center;
          margin-bottom: 40px;
        }

        .btn-generate,
        .btn-copy {
          padding: 15px 40px;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: 4px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-generate {
          background: linear-gradient(135deg, var(--accent-orange), #ff6b1a);
          color: white;
        }

        .btn-generate:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(255, 140, 66, 0.3);
        }

        .btn-copy {
          background: rgba(255, 255, 255, 0.08);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .btn-copy:hover {
          background: rgba(255, 255, 255, 0.12);
        }

        .match-display {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 40px;
          align-items: start;
        }

        .vs {
          font-size: 2.5rem;
          font-weight: 900;
          color: var(--accent-purple);
          align-self: center;
          margin-top: 100px;
        }

        .player {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 4px;
          padding: 30px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .player h2 {
          color: var(--accent-orange);
          margin-bottom: 20px;
          text-align: center;
        }

        .hero-card {
          text-align: center;
          margin-bottom: 30px;
        }

        .hero-card img {
          width: 200px;
          height: 200px;
          object-fit: cover;
          border-radius: 4px;
          border: 2px solid rgba(255, 140, 66, 0.3);
          margin-bottom: 15px;
        }

        .hero-card h3 {
          font-size: 1.5rem;
          color: white;
        }

        .items-list h4 {
          color: var(--text-secondary);
          margin-bottom: 15px;
          text-align: center;
        }

        .item-card {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 12px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
          margin-bottom: 10px;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .item-card img {
          width: 48px;
          height: 48px;
          border-radius: 4px;
        }

        .item-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .item-name {
          color: white;
          font-weight: 500;
        }

        .item-tier {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .tier-1 { color: #4ade80; }
        .tier-2 { color: #60a5fa; }
        .tier-3 { color: #a78bfa; }
        .tier-4 { color: #fb923c; }

        @media (max-width: 1024px) {
          .match-display {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .vs {
            justify-self: center;
            margin-top: 0;
          }
        }

        @media (max-width: 768px) {
          .header h1 {
            font-size: 2rem;
          }

          .subtitle {
            font-size: 1rem;
          }

          .controls {
            flex-direction: column;
          }

          .btn-generate,
          .btn-copy {
            width: 100%;
          }

          .hero-card img {
            width: 150px;
            height: 150px;
          }
        }
      `}</style>
    </div>
  );
}
