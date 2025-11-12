import CounterCheatsheetComponent from '../components/CounterCheatsheet'
import { useMetaTags } from '../hooks/useMetaTags'

export default function CounterCheatsheet() {
  useMetaTags({
    title: 'Counter Cheatsheet - Deadlock Fight Club',
    description: 'Instant hero counter lookup. Type any hero name, get the exact items that shut them down. No fluff, just the counters you need mid-match.',
    url: 'https://deadlock-fights.netlify.app/counter-cheatsheet',
    image: 'https://deadlock-fights.netlify.app/assets/heroes/bebop.png'
  });

  return <CounterCheatsheetComponent />
}
