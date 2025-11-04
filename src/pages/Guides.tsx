import { Link } from 'react-router-dom'
import Container from '../components/layout/Container'
import Section from '../components/layout/Section'
import './Guides.css'

export default function Guides() {
  const guides = [
    {
      title: 'Counter-Building Guide',
      description: 'Learn how to build effective counters against any hero in Deadlock.',
      path: '/counter-guide',
      status: 'Coming Soon'
    },
    {
      title: 'Counter Cheatsheet',
      description: 'Quick hero-based counter lookup with search functionality.',
      path: '/counter-cheatsheet',
      status: 'Available'
    },
    {
      title: 'Midgame Guide',
      description: 'Master the critical midgame transition phase.',
      path: '/midgame-guide',
      status: 'Coming Soon'
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
