import Container from '../components/layout/Container'
import Section from '../components/layout/Section'
import TipBox from '../components/layout/TipBox'
import { useMetaTags } from '../hooks/useMetaTags'
import './GuidePages.css'

export default function MidgameGuide() {
  useMetaTags({
    title: 'Midgame Guide - Deadlock Fight Club',
    description: 'Lane phase ends. Towers fall. Chaos begins. Master the 5-minute combat cycle, understand power spikes, and learn when Deadlock stops being a shooter and becomes a MOBA.',
    url: 'https://deadlock-fights.netlify.app/midgame-guide',
    image: 'https://deadlock-fights.netlify.app/assets/heroes/bebop.png'
  });

  return (
    <Container maxWidth="md">
      <div className="guide-page">
        <Section>
          <h1>What the Hell is Deadlock's Midgame?</h1>
          <p className="guide-lead">
            If you've played Deadlock for even a couple of hours, that moment has come to you.
            You're in lane phase, things are making sense. You trade kills, you push creeps,
            and you try to get that tower at the end. Then, suddenly, some towers start to fall,
            objectives appear all around the map, and the team scatters out of your lane.
          </p>

          <p>
            Deadlock is sneaky. It's a hero shooter with some extra rules. If you come from
            others like Overwatch 2, Rivals, or even Apex, you can survive lane phase along
            pure skill and game sense alone. <strong>But once towers fall, Deadlock reveals its
            true identity: It's a MOBA wearing a hero shooter's jacket.</strong>
          </p>
        </Section>

        <Section>
          <h2>The First Truth: Wave Control Wins Games</h2>
          <TipBox variant="warning">
            <strong>Bad macro is bad gameplay.</strong> Ignoring waves is the fastest way to lose.
            As people chase kills in the jungle and fights over urn, walkers fall while nobody's looking.
          </TipBox>

          <p>
            If you're newer to MOBAs, "macro" might be confusing. It's everything beyond the
            immediate duel: how objectives are standing, how lanes are pushed, and how rotations
            are timed to ensure walkers don't take extra creep damage.
          </p>

          <p>
            <strong>Communication is key.</strong> If you see creeps crashing your side lane walker
            while you're on the other side in the jungle, call it out. The lower your rank, the more
            likely your teammates are suffering from tunnel vision.
          </p>
        </Section>

        <Section>
          <h2>Why Walkers Matter</h2>
          <div className="stat-box">
            <h3>Walker Stats</h3>
            <ul>
              <li><strong>Side lane walkers:</strong> 5,800 HP</li>
              <li><strong>Blue lane walker:</strong> 9,000+ HP</li>
              <li><strong>Aura effect:</strong> 15% Spirit and Bullet Resist to nearby allies</li>
            </ul>
          </div>

          <p>Walkers change the economy of the entire game:</p>
          <ul>
            <li><strong>One walker down</strong> = One extra item slot</li>
            <li><strong>Three walkers down</strong> = Two extra item slots</li>
          </ul>

          <p>
            This creates both an economic and power advantage, ensuring the next fight you take
            is one where your team is heavily bolstered in comparison.
          </p>

          <TipBox variant="info">
            <strong>Pre-Minute 16:</strong> Wasting time poking walkers is bait. Walker resistances
            are too high. The real move is to shove the wave, steal their jungle, and wait for a
            more opportune time to strike.
          </TipBox>
        </Section>

        <Section>
          <h2>The 5-Minute Combat Cycle</h2>
          <p>
            Every 5 minutes in Deadlock, urn and bridge buffs respawn. Think of these like timers
            in your head—the metronome of midgame. Teams naturally gravitate to these spawns
            (more so bridge buffs than urn), and they're the catalyst for many team fights.
          </p>

          <div className="timeline">
            <h3>How to Use the Cycle</h3>
            <p><strong>Between 10:00 and 14:30:</strong> Farm and get your next power spike</p>
            <p><strong>At the 5-minute mark:</strong> Take fights with your newly acquired items</p>
          </div>

          <TipBox variant="warning">
            <strong>The worst thing you can do:</strong> Show up late to the fight, scrambling for
            camps and boxes while sitting on 2,000+ souls. The urn doesn't win the fight—the
            preparation does.
          </TipBox>
        </Section>

        <Section>
          <h2>Power Spikes & Power Ramping</h2>
          <p>
            A <strong>power spike</strong> is when your character goes from "eh" to "oh god, kill it now."
            It can be an item like Tesla Bullets for Wraith/Ivy, or an upgraded ability like Tier 3
            on Kelvin's Ice Beam.
          </p>

          <p>
            <strong>These spikes don't last forever.</strong> You have a 2-3 minute window where you're
            markedly stronger. As soon as enemies hit their power spikes, the tables are even again.
            Those couple minutes are your window—take urn fights or push objectives. If you wait,
            your spike is wasted.
          </p>

          <h3>How to Hit Spikes on Time: Farming Priority</h3>
          <ol>
            <li><strong>Center Sacrifices</strong> - Focus above all (4 boons like golden statue)</li>
            <li><strong>Jungle Creeps</strong> - Steal enemy jungle when possible</li>
            <li><strong>Waves</strong> - Push to walker, then rotate to jungle</li>
          </ol>

          <p>
            <strong>Macro Soul Denial:</strong> In lane phase, you deny by shooting the little orb.
            In midgame, you deny by choking out entire soul camps. This creates a widening differential
            between team economies and snowballs your advantage.
          </p>
        </Section>

        <Section>
          <h2>Map Awareness & Intuition</h2>
          <p>The map is free information. You can see:</p>
          <ul>
            <li>Where enemies are (and where they <em>aren't</em>)</li>
            <li>Which waves are pushing too far</li>
            <li>What the next move might be</li>
          </ul>

          <div className="example-box">
            <h3>Example Scenario</h3>
            <p>
              <strong>Situation:</strong> You're in far left lane. You see 3-4 enemies on mid/right side of map.
            </p>
            <p>
              <strong>Analysis:</strong> Maximum 2 enemies in your lane.
            </p>
            <p>
              <strong>Best move:</strong> Shove lane and damage walker, or invade/steal farm.
              (Rotating to help teammates would take too long from your position.)
            </p>
          </div>

          <TipBox variant="warning">
            <strong>If you see NO enemies:</strong> This is dangerous. Pushing lane will likely result
            in getting ganked. Use your intuition (practiced pattern recognition) to predict what's happening.
          </TipBox>

          <p>
            Ask yourself: What's their win condition? Where do they need to be? What are their next buys?
            Take this info and counter-buy, counter-rotate, and counter-push. <strong>Deadlock rewards
            predictors, not reactors.</strong>
          </p>
        </Section>

        <Section>
          <h2>Bringing It All Together</h2>
          <p>
            Midgame is the pivot point where the hero shooter facade falls and the MOBA emerges.
            To play it well, adhere to these principles:
          </p>

          <div className="principles-list">
            <ul>
              <li>✓ Respect lane pressure</li>
              <li>✓ Protect and punish walkers</li>
              <li>✓ Align with the 5-minute combat cycle</li>
              <li>✓ Hit your power spikes on time</li>
              <li>✓ Farm and deny efficiently</li>
              <li>✓ Train your map sense until it becomes second nature</li>
            </ul>
          </div>

          <p className="guide-closing">
            So the next time towers fall and you ask yourself, "What the hell is Deadlock's midgame?"
            You'll have your answer.
          </p>
        </Section>
      </div>
    </Container>
  )
}
