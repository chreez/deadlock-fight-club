import FightClub from '../components/FightClub'
import { useMetaTags } from '../hooks/useMetaTags'

export default function Home() {
  useMetaTags({
    title: 'Deadlock Fight Club - Random Hero & Item Generator',
    description: 'Generate random Deadlock hero matchups and full item builds instantly. Practice any hero combo, theory-craft builds, or discover new strategies. Plus educational guides from Bebop mains.',
    url: 'https://deadlock-fights.netlify.app/',
    image: 'https://deadlock-fights.netlify.app/assets/heroes/bebop.png'
  });

  return <FightClub />
}
