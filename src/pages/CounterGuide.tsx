import Container from '../components/layout/Container'
import Section from '../components/layout/Section'
import TipBox from '../components/layout/TipBox'
import './GuidePages.css'

export default function CounterGuide() {
  return (
    <Container maxWidth="md">
      <div className="guide-page">
        <Section>
          <h1>The BEST Items To Counter EVERY Hero In Deadlock</h1>
          <p className="guide-lead">
            Most Deadlock guides focus on countering heroes individually, but this approach teaches
            you to build smarter by using items that counter multiple heroes and entire team compositions
            at once. Instead of memorizing single matchups, you'll learn which items give the most value
            against the majority of teams you face.
          </p>
        </Section>

        <Section>
          <h2>Universal Counter Items</h2>

          <div className="item-entry">
            <h3>Reactive Barrier</h3>
            <p className="item-cost">1,600 souls • Tier 2</p>
            <p>Automatically activates when you get hit by any form of crowd control. No-brainer to buy early into teams with lots of CC.</p>
            <p className="item-counters"><strong>Counters:</strong> Bebop (Hook), Abrams (Shoulder Charge), Doorman (Cart Combo)</p>
          </div>

          <div className="item-entry">
            <h3>Debuff Reducer</h3>
            <p>Reduces duration of stuns, slows and ultimates that apply CC. Builds into Debuff Remover.</p>
            <p className="item-counters"><strong>Counters:</strong> Abrams (Stun), Holiday (Lasso), Moe (Ultimate)</p>
          </div>

          <div className="item-entry">
            <h3>Counterspell</h3>
            <p>Can be bought every game on any hero. Transforms your parry to protect from enemy abilities. Time it just before an ability reaches you.</p>
            <p className="item-counters"><strong>Counters:</strong> Bebop (Hook, Bomb, Uppercut), Lash (Slam), Grey Talon (Ult), Holiday (Lasso)</p>
          </div>
        </Section>

        <Section>
          <h2>Defensive Stat Items</h2>

          <h3>Spirit Shielding (1,600 souls)</h3>
          <p>
            Heavily increases your survivability against spirit damage. One of the best early game
            pickups if you're dealing with lots of spirit heroes. Great value into double spirit lanes.
          </p>

          <h3>Spirit Resilience vs Bullet Resilience</h3>
          <p>
            <strong>Spirit Resilience:</strong> The better stat option overall. No equivalent to
            Armor-Piercing Rounds exists for spirit damage.
          </p>
          <p>
            <strong>Bullet Resilience:</strong> Good against weapon-heavy teams and melee heroes
            (bullet resist translates to melee resist 1:1). However, Armor-Piercing Rounds can
            ignore 50% of bullet resist. Consider Battle Vest (cheaper, adds fire rate) or Plated
            Armor (double price but deflects bullets and on-hit effects).
          </p>

          <h3>Spellbreaker (6,400 souls)</h3>
          <p>
            <strong>Best spirit resist option in the game.</strong> Provides insane spirit resist
            and debuff resist. Can make heroes like Grey Talon and Vindicta useless. Whenever you
            need spirit resist, this is the endgame option.
          </p>
        </Section>

        <Section>
          <h2>Active Counter Items</h2>

          <h3>Knockdown</h3>
          <p>
            Drops an anvil on someone's head, stunning them. <strong>Prevents and cancels many ultimates.</strong>
            Absolute menace against flying characters or anyone mid-animation.
          </p>
          <p><strong>Counters:</strong> Bebop (Ult), Moe (Ult), Flying characters, Big animation ultimates</p>
          <TipBox variant="info">
            Hit Moe and Krill with knockdown when they're constantly burrowing!
          </TipBox>

          <h3>Slowing Hex</h3>
          <p>
            Massively reduces enemy movement and silences their movement-based abilities and items
            for over 3 seconds. You're going to have impact with this item almost every game.
            Getting slowed is infuriating and makes you an easy pick.
          </p>
          <p><strong>Counters:</strong> Mirage (escaping with bats), Abrams (chasing), Ivy (ulting)</p>

          <h3>Disarming Hex</h3>
          <p>
            Disarms your target for 4 seconds and reduces their bullet resist. <strong>Lifesaver that
            turns fights in your favor when enemy team is mostly weapon builds.</strong>
          </p>

          <h3>Silence Options</h3>
          <p>
            <strong>Silence Glyph:</strong> Launches a projectile forward, suppressing everyone in its path.
            Especially effective against Lady Geist and Yamato who use ults at low health.
          </p>
          <p>
            <strong>Mystic Reach:</strong> Point-and-click silence option. Passively increases fire rate
            by 16%. 30% of all damage dealt during silence gets applied when silence wears off.
          </p>

          <h3>Curse</h3>
          <p>
            <strong>Best item to buy against fed enemies.</strong> Silence, disarm and prevent item usage.
            Also interrupts channeled abilities. Can cancel Dynamo's ult on a team.
          </p>
        </Section>

        <Section>
          <h2>Anti-Heal Items</h2>

          <h3>Toxic Bullets (1,600 souls)</h3>
          <p>
            <strong>Biggest bang for your buck.</strong> 35% heal reduction on bullet damage for 4 seconds.
            Good pickup if enemy team has substantial healing (Abrams, Moe and Krill, Kelvin).
          </p>

          <h3>Decay</h3>
          <p>
            40% heal reduction on spirit damage. Press Tab and if majority of their healing is coming
            from spirit damage (e.g., Kelvin with Healing Nova), buy Decay. Otherwise, Toxic Bullets
            is usually better value.
          </p>
        </Section>

        <Section>
          <h2>The Counter-Building Philosophy</h2>
          <TipBox variant="info">
            <strong>Key Insight:</strong> Instead of memorizing what counters each individual hero,
            focus on items that counter multiple heroes or entire playstyles at once. This makes you
            more adaptable and less gold-starved trying to counter-build one person.
          </TipBox>

          <p>
            Press Tab frequently during the game. Look at:
          </p>
          <ul>
            <li>What type of damage is the enemy team building (weapon vs spirit)?</li>
            <li>How much healing do they have?</li>
            <li>How much CC do they have?</li>
            <li>Who is getting fed and needs to be shut down?</li>
          </ul>

          <p className="guide-closing">
            Counter-building isn't about having a perfect item for every matchup—it's about recognizing
            patterns and adapting your build to give you the best chance against the entire enemy team
            composition.
          </p>
        </Section>
      </div>
    </Container>
  )
}
