import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SiteHeader from './components/layout/SiteHeader'
import Home from './pages/Home'
import CounterGuide from './pages/CounterGuide'
import CounterCheatsheet from './pages/CounterCheatsheet'
import MidgameGuide from './pages/MidgameGuide'
import MacroGuide from './pages/MacroGuide'
import LaningGuide from './pages/LaningGuide'
import Guides from './pages/Guides'

function App() {
  return (
    <BrowserRouter>
      <SiteHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter-guide" element={<CounterGuide />} />
        <Route path="/counter-cheatsheet" element={<CounterCheatsheet />} />
        <Route path="/midgame-guide" element={<MidgameGuide />} />
        <Route path="/macro-guide" element={<MacroGuide />} />
        <Route path="/laning-guide" element={<LaningGuide />} />
        <Route path="/guides" element={<Guides />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
