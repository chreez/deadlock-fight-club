import Container from '../components/layout/Container'
import Section from '../components/layout/Section'
import TipBox from '../components/layout/TipBox'
import { useMetaTags } from '../hooks/useMetaTags'
import './GuidePages.css'

export default function LaningGuide() {
  useMetaTags({
    title: '6 Laning Mistakes You\'re Making Every Game - Deadlock Fight Club',
    description: 'Stop losing lanes to "bad luck." Learn the 6 biggest laning mistakes players make every match, from ignoring matchups to wasting pressure and buying wrong items.',
    url: 'https://deadlock-fights.netlify.app/laning-guide',
    image: 'https://deadlock-fights.netlify.app/assets/heroes/bebop.png'
  });

  return (
    <Container maxWidth="md">
      <div className="guide-page">
        <Section>
          <h1>6 Laning Mistakes You're Making EVERY Game</h1>
          <p className="guide-lead">
            Ever have a lane that falls apart for seemingly no reason? You're farming, trading, building items, and suddenly the enemy is destroying your guardian with more souls. That's not bad luck—that's laning mistakes. Almost everyone makes the same ones over and over.
          </p>
          <p className="guide-lead">
            This guide breaks down the 6 biggest laning mistakes you're making every single game, from wasting time and pressure to buying the wrong items and ignoring enemy cooldowns.
          </p>
          <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>
            Even Bebop—objectively the best character with the best hook in the game—can lose lane if you make these mistakes.
          </p>
        </Section>

        <Section>
          <h2>Mistake #1: Not Understanding Matchups</h2>
          <p>
            This might be the biggest reason you're losing lanes. Some heroes in Deadlock are naturally much stronger early into the game than others. Players still force disadvantageous fights because they don't know any better.
          </p>

          <div className="example-box">
            <h3>Example: Holiday vs Vindictor</h3>
            <p>
              <strong>Holiday's advantage:</strong> Her kegs and crack shot deal significant damage as soon as the game starts.
            </p>
            <p>
              <strong>Vindictor's mistake:</strong> Trying to keep chipping away at Holiday's health, waiting to unlock her ultimate. Just like that, you're dead to a sniper.
            </p>
            <p>
              <strong>The lesson:</strong> By understanding where your strengths lie, even a losing lane on paper can be winning.
            </p>
          </div>

          <h3>How to Play Melee Heroes</h3>
          <p>
            <strong>The worst thing you can do</strong> is try to trade with heroes like Holiday at range. When you finally get close to deal real damage, you have no health left.
          </p>
          <p>
            That's why it's important for melee heroes to <strong>preserve their health pool</strong> until they find the perfect moment to get close and strike.
          </p>

          <TipBox variant="info">
            <strong>Use veils to your advantage:</strong> Valve implemented veils into each lane to give melee heroes a chance. In mid lane, there are veils on either side allowing you to move in and out when hitting troops. By sitting on the enemy side of the veil, they have no choice but to respect that. If they try to push you, that's a free kill.
          </TipBox>

          <h3>Countering Melee Heroes in Veils</h3>
          <p>
            As a ranged hero, <strong>punish them as they come out</strong>. You can kill troopers and secure souls from the veil. While they're in the veil, they can't damage your guardian or buy items. Take those windows where they move out and lower their health as much as possible. Once low enough, even the veil won't save them.
          </p>

          <TipBox variant="warning">
            <strong>You don't need to be a genius:</strong> You don't need to learn every hero's power spike. Just knowing what the character does and adapting your playstyle accordingly will be enough to start climbing ranks.
          </TipBox>
        </Section>

        <Section>
          <h2>Mistake #2: Building The Same Items Every Game</h2>
          <p>
            Too many players open up their build browser, find their top daily build, and go left to right each game. This isn't exactly bad, but some items will seriously make your lane 10x easier.
          </p>
          <p>
            <strong>Get into the habit of building to counter your enemies each laning phase.</strong>
          </p>

          <div className="item-entry">
            <h3>Spirit Shielding</h3>
            <p className="item-cost">1,600 souls • Tier 2</p>
            <p>
              Fantastic response when you're against two heroes like Calico and Mina that build spirit damage. Provides out-of-combat regen, a barrier when you take spirit damage, and movement speed.
            </p>
            <p className="item-counters">
              <strong>When to buy:</strong> Double spirit lanes, or even against gun-build heroes that deal spirit damage (e.g., Wraith with her cards)
            </p>
            <TipBox variant="info">
              <strong>Pro tip:</strong> Even heroes building gun end up dealing spirit damage in lanes, so it almost always has value as you learn the game.
            </TipBox>
          </div>

          <div className="item-entry">
            <h3>Reactive Barrier</h3>
            <p className="item-cost">1,600 souls • Tier 2</p>
            <p>
              <strong>This will literally save you from every bad decision and misplay in lane.</strong> Gives you a barrier every time you get stunned, chained, or movement locked. Also restores one stamina to escape with and gives 6% spirit resist.
            </p>
            <p className="item-counters">
              <strong>Counters:</strong> Bebop (Hook), Abrams (Charge), Lash (Slam), and most CC abilities
            </p>
            <p>
              If you're stood in the open and get hooked by a Bebop, don't worry—you have Reactive Barrier.
            </p>
          </div>

          <div className="item-entry">
            <h3>Counterspell</h3>
            <p className="item-cost">3,200 souls • Tier 3</p>
            <p>
              <strong>For more skilled players.</strong> One of the best items in the game when used efficiently, upgrading your parry to ignore most damage sources. That same Bebop hook which Reactive Barrier saved you from? Just parry with Counterspell.
            </p>
            <p className="item-counters">
              <strong>Can parry:</strong> Bebop Hook, Calico's Slash, Lash's Slam, and even ultimates later in the game
            </p>
            <TipBox variant="warning">
              <strong>Requires skill:</strong> Takes more precision than Reactive Barrier—you need to time each parry correctly.
            </TipBox>
          </div>

          <h3>Anti-Melee Options</h3>
          <p>
            Against melee-heavy lanes like Billy and Abrams, their main damage comes from punching you. Parrying becomes a lifesaver.
          </p>

          <div className="item-entry">
            <h3>Rebuttal</h3>
            <p className="item-cost">800 souls • Tier 1</p>
            <p>
              On a successful parry, you heal, deal the damage back, and gain a damage boost to run them down. Also provides melee resist, bonus health, and lowers your parry cooldown.
            </p>
          </div>

          <div className="item-entry">
            <h3>Close Quarters</h3>
            <p className="item-cost">1,600 souls • Tier 2</p>
            <p>
              Deal 20% more weapon damage within 15 meters of your opponent, plus gain 20% melee resist. A nice 2-in-1 item for gun builds into melee-heavy lanes.
            </p>
          </div>
        </Section>

        <Section>
          <h2>Mistake #3: Ignoring Cooldowns</h2>
          <p>
            Another huge mistake is ignoring cooldowns—both your own and the enemies'. In lower ranks, many players dash in and get aggressive while their biggest damaging ability is on cooldown from the last fight.
          </p>
          <p>
            If you're trying to fight as a Lash missing Slam while the enemy Doorman has every cooldown available, it's not going to go well.
          </p>

          <div className="stat-box">
            <h3>Common Ability Cooldowns</h3>
            <ul>
              <li><strong>Most threatening abilities:</strong> Over 10 seconds</li>
              <li><strong>Character-defining abilities:</strong> 20-30 seconds (Bebop Hook, Mirage Tornado)</li>
              <li><strong>Seven's Power Surge:</strong> 33 seconds at max level</li>
            </ul>
          </div>

          <TipBox variant="info">
            <strong>Track your own cooldowns:</strong> Develop a habit of checking them more often. It's easy—just glance at your ability bar.
          </TipBox>

          <h3>Punish Enemy Cooldowns</h3>
          <p>
            You don't need perfect knowledge of exact cooldown timers. But <strong>punishing enemies when their abilities are on cooldown makes each fight much more advantageous</strong> for you.
          </p>
          <p>
            Whenever you notice heroes use their major cooldowns, it's the perfect chance to dominate and punish them:
          </p>
          <ul>
            <li>Deal damage</li>
            <li>Shove in the wave</li>
            <li>Even damage the guardian</li>
          </ul>
          <p>
            Try to make them lose as much as possible while they're helpless and waiting on cooldowns. It's that simple.
          </p>
        </Section>

        <Section>
          <h2>Mistake #4: Wasting Time</h2>
          <p>
            Players waste precious time each lane. <strong>Waves spawn every 30 seconds.</strong> Instead of sitting waiting for the next wave over and over again, use that time to gain a lead.
          </p>

          <h3>Farm Boxes Between Waves</h3>
          <p>
            Boxes spawn at 2 minutes. If there aren't many good opportunities to deal damage to opponents after shoving in a wave, <strong>go grab some boxes</strong>.
          </p>
          <p>
            For example in mid, you don't need a super optimized path—just see what you can find behind you. In just 20 seconds you could be up over 300 souls. Then when you find time again, check the right side, and so on.
          </p>

          <TipBox variant="info">
            <strong>Keep an eye on wave timing:</strong> As long as you watch for when the wave starts approaching, keep finding boxes. In situations where your teammate starts hitting troopers immediately, just tell them to wait for you to get back.
          </TipBox>

          <h3>Other Ways to Use Downtime</h3>
          <ul>
            <li>Steal the enemy's Tier 1 camp</li>
            <li>Take your own camp</li>
            <li>Go for bridge buffs every 5 minutes</li>
          </ul>
          <p>
            The important thing is <strong>you're not just sitting waiting</strong> when you can be collecting extra souls to get a lead. Staying active is key.
          </p>

          <div className="timeline">
            <h3>Zipline Boost Timing</h3>
            <p>
              <strong>At 6:05:</strong> Boosts become available
            </p>
            <p>
              When you're waiting for a wave on low HP, you likely have time to boost back to base and return on full health instead of sitting there scared for your life.
            </p>
            <TipBox variant="warning">
              <strong>Watch out:</strong> If you just killed an enemy past 6:05, be aware they can boost back. Overstaying and getting caught by this is a very common but avoidable mistake.
            </TipBox>
          </div>
        </Section>

        <Section>
          <h2>Mistake #5: Being Greedy With Healing</h2>
          <p>
            Many players are greedy with their souls and it's costing them the lane. There are so many fantastic Tier 1 options to buy that are completely ignored or skipped for a damage item.
          </p>

          <h3>Out-of-Combat Regen Items</h3>
          <p>
            Whenever you're over half health, there are still great options. Many players don't realize that even Sprint Boots will heal you over time.
          </p>

          <div className="item-entry">
            <h3>Sprint Boots</h3>
            <p className="item-cost">1,250 souls • Tier 1</p>
            <p>
              Primarily gives sprint speed, but also provides +2 out-of-combat regen. Out-of-combat regen is displayed at the top of your health bar.
            </p>
            <p className="item-counters">
              <strong>Upgrades to:</strong> Enduring Speed
            </p>
          </div>

          <div className="item-entry">
            <h3>Monster Rounds</h3>
            <p className="item-cost">500 souls • Tier 1</p>
            <p>
              Popular in pro games like Deadlock Night Shift. Not only helps with pushing waves, but provides +1 out-of-combat regen.
            </p>
            <p className="item-counters">
              <strong>Upgrades to:</strong> Cultist Sacrifice
            </p>
          </div>

          <div className="stat-box">
            <h3>Regen Stacking Example</h3>
            <p>
              <strong>Sprint Boots + Monster Rounds + Spirit Shielding = 5.5 out-of-combat regen</strong>
            </p>
            <p>Total cost: 3,200 souls</p>
            <p>
              When doing box runs and taking camps with this much regen, you don't even need to buy direct healing items.
            </p>
          </div>

          <h3>Direct Healing Items</h3>
          <p>
            Being greedy and avoiding healing right when you're very weak is a bad idea. The healing item has a 70-second cooldown and gives movement speed when active.
          </p>
          <p>
            However, whenever you get shot by an enemy, the healing effect cancels.
          </p>

          <TipBox variant="info">
            <strong>Smart healing usage:</strong> When you're barely surviving pushing a wave, use healing on yourself and do a box run while zooming around. You'll have a much lower chance of it being cancelled than sitting in lane.
          </TipBox>

          <h3>Hero-Specific Options</h3>
          <p>
            For heroes like Calico that have melee abilities like Kitu, items such as Melee Lifesteal treat them equal to landing a punch. That's right—slashing into someone will heal you for the same amount as punching them.
          </p>
          <p>
            Other great options include Extra Regen and Resto Shot. <strong>Always buy at least one healing item each lane.</strong>
          </p>
        </Section>

        <Section>
          <h2>Mistake #6: Neglecting The Map</h2>
          <p>
            Players often neglect their map. Whenever you stomp the enemy lane and take their guardian early into the game, <strong>don't just sit around</strong>.
          </p>

          <h3>When To Roam</h3>
          <p>
            It's still laning phase for others that have both guardians up. Take this as an opportunity to push in your wave and check the map.
          </p>
          <p>
            Look at how much health both sides have:
          </p>
          <ul>
            <li><strong>If enemies are weak and your team can't finish:</strong> Go help them</li>
            <li><strong>Pressure their lane with a numbers advantage</strong> and destroy the guardian</li>
          </ul>

          <TipBox variant="warning">
            <strong>Don't overstay:</strong> You don't want to spend too long doing this, as sharing souls with 3 players is less than ideal, but it's definitely something you should look to be doing.
          </TipBox>

          <h3>Double Ganking Risks</h3>
          <p>
            Sometimes you can double gank which almost guarantees kills and a guardian. But there are a few risks with this play:
          </p>
          <ul>
            <li>The enemies in your lane can take the guardian while you're helping another lane</li>
            <li>No one is there to collect the wave, losing out on important souls</li>
            <li>If somehow the roam goes badly, you're sharing souls between 4 players for a prolonged period</li>
          </ul>

          <h3>Alternative: Pressure Walkers</h3>
          <p>
            Whenever roaming looks like a bad option, don't be afraid to start pressuring Walkers instead:
          </p>
          <ul>
            <li>It's unlikely you'll get ganked from another lane</li>
            <li>Creates space to steal enemy camps</li>
            <li>If others come to defend, they'll lose their guardian</li>
          </ul>
          <p>
            Just because you win lane early doesn't mean sitting back and collecting waves is the best play.
          </p>
        </Section>

        <Section>
          <p className="guide-closing">
            Practice these 6 principles and you'll never lose a lane to "bad luck" again. Understand your matchups, adapt your items to the enemy composition, track cooldowns, use downtime efficiently, invest in sustain, and leverage your map awareness. Master the laning phase and you'll snowball into victory.
          </p>
        </Section>
      </div>
    </Container>
  )
}
