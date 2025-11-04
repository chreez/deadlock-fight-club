import { Link } from 'react-router-dom'
import Container from '../components/layout/Container'
import Section from '../components/layout/Section'
import './Guides.css'

export default function Guides() {
  const guides = [
    {
      title: 'Counter-Building Guide',
      description: 'Learn which items counter entire team compositions, not just individual heroes.',
      path: '/counter-guide',
      status: 'Available'
    },
    {
      title: 'Counter Cheatsheet',
      description: 'Quick hero-based counter lookup with autocomplete search.',
      path: '/counter-cheatsheet',
      status: 'Available'
    },
    {
      title: 'Midgame Guide',
      description: 'Understand the 5-minute combat cycle, power spikes, and when MOBA mechanics take over.',
      path: '/midgame-guide',
      status: 'Available'
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
                <div className="guide-card__header">
                  <h2 className="guide-card__title">{guide.title}</h2>
                  <span className={`guide-card__status guide-card__status--${guide.status.toLowerCase().replace(' ', '-')}`}>
                    {guide.status}
                  </span>
                </div>
                <p className="guide-card__description">{guide.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </Container>
  )
}
