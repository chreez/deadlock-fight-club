import CounterCheatsheetComponent from '../components/CounterCheatsheet'
import { useMetaTags } from '../hooks/useMetaTags'

export default function CounterCheatsheet() {
  useMetaTags({
    title: 'Counter Cheatsheet - Deadlock Fight Club',
    description: 'Quick hero-based counter lookup with autocomplete search. Find the best counter items for any Deadlock hero instantly.',
    url: 'https://deadlock-fights.netlify.app/counter-cheatsheet',
    image: 'https://deadlock-fights.netlify.app/assets/heroes/bebop.png'
  });

  return <CounterCheatsheetComponent />
}
