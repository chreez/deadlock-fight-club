import FightClub from '../components/FightClub'
import { useMetaTags } from '../hooks/useMetaTags'

export default function Home() {
  useMetaTags({
    title: 'Deadlock Fight Club',
    description: 'Random hero matchup generator and strategy guides for Valve\'s Deadlock. Counter-building guides, midgame strategies, and more from Bebop mains.',
    url: 'https://deadlock-fights.netlify.app/',
    image: 'https://deadlock-fights.netlify.app/assets/heroes/bebop.png'
  });

  return <FightClub />
}
