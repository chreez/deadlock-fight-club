import { useState, useMemo } from 'react';
import { HERO_COUNTERS } from '../data/counterData';
import SearchBar from './core/SearchBar';
import CounterList from './domain/CounterList';
import Container from './layout/Container';

export default function CounterCheatsheet() {
  const [searchTerm, setSearchTerm] = useState('');

  const heroes = Object.keys(HERO_COUNTERS).sort();

  const filteredHeroes = useMemo(() => {
    if (!searchTerm) return heroes;
    const term = searchTerm.toLowerCase();
    return heroes.filter(hero => hero.toLowerCase().includes(term));
  }, [searchTerm, heroes]);

  return (
    <Container maxWidth="lg">
      <div className="counter-cheatsheet">
        <div className="counter-cheatsheet__header">
          <h1 className="counter-cheatsheet__title">Deadlock Counter Cheatsheet</h1>
          <p className="counter-cheatsheet__subtitle">
            Quick hero-based counter lookup. Search for any hero to see recommended counter items.
          </p>
        </div>

        <div className="counter-cheatsheet__search">
          <SearchBar
            placeholder="Search heroes..."
            value={searchTerm}
            onChange={setSearchTerm}
            onClear={() => setSearchTerm('')}
          />
          <div className="counter-cheatsheet__results-info">
            {filteredHeroes.length === heroes.length
              ? `Showing all ${heroes.length} heroes`
              : `Found ${filteredHeroes.length} of ${heroes.length} heroes`}
          </div>
        </div>

        <div className="counter-cheatsheet__list">
          {filteredHeroes.length === 0 ? (
            <div className="counter-cheatsheet__no-results">
              <p>No heroes found matching &ldquo;{searchTerm}&rdquo;</p>
            </div>
          ) : (
            filteredHeroes.map(heroName => (
              <div key={heroName} className="counter-cheatsheet__hero">
                <CounterList counters={HERO_COUNTERS[heroName]} heroName={heroName} />
              </div>
            ))
          )}
        </div>
      </div>
    </Container>
  );
}
