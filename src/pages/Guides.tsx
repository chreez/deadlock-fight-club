import { Link } from 'react-router-dom'
import Container from '../components/layout/Container'
import Section from '../components/layout/Section'
import { useMetaTags } from '../hooks/useMetaTags'
import './Guides.css'

export default function Guides() {
  useMetaTags({
    title: 'Strategy Guides - Deadlock Fight Club',
    description: 'In-depth Deadlock strategy guides: counter-building, macro play, midgame transitions, and quick counter lookups. Skip the fluff, learn what actually wins games.',
    url: 'https://deadlock-fights.netlify.app/guides',
    image: 'https://deadlock-fights.netlify.app/assets/heroes/bebop.png'
  });

  const guides = [
    {
      title: 'December Patch Breakdown',
      description: 'Patron defense buffs, hero nerfs, movement reverts, and economy changes explained.',
      path: '/december-patch'
    },
    {
      title: 'Laning Mistakes Guide',
      description: 'Stop losing lanes. Learn the 6 biggest laning mistakes players make every match.',
      path: '/laning-guide'
    },
    {
      title: 'Counter-Building Guide',
      description: 'Learn which items counter entire team compositions, not just individual heroes.',
      path: '/counter-guide'
    },
    {
      title: 'Counter Cheatsheet',
      description: 'Quick hero-based counter lookup with autocomplete search.',
      path: '/counter-cheatsheet'
    },
    {
      title: 'Midgame Guide',
      description: 'Understand the 5-minute combat cycle, power spikes, and when MOBA mechanics take over.',
      path: '/midgame-guide'
    },
    {
      title: 'Advanced Macro Guide',
      description: 'Master lane splitting strategies, resource control, and comeback mechanics when behind.',
      path: '/macro-guide'
    }
  ]

  return (
    <Container maxWidth="lg">
      <Section>
        <div className="guides-page">
          <h1 className="guides-page__title">Deadlock Strategy Guides</h1>
          <p className="guides-page__subtitle">
            Educational content for Deadlock players, from Bebop mains to everyone else.
          </p>

          <div className="guides-page__grid">
            {guides.map((guide) => (
              <Link
                key={guide.path}
                to={guide.path}
                className="guide-card"
              >
                <h2 className="guide-card__title">{guide.title}</h2>
                <p className="guide-card__description">{guide.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </Container>
  )
}
