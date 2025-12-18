import Container from '../components/layout/Container'
import Section from '../components/layout/Section'
import TipBox from '../components/layout/TipBox'
import { useMetaTags } from '../hooks/useMetaTags'
import './GuidePages.css'

export default function DecemberPatchGuide() {
  useMetaTags({
    title: 'December Patch Breakdown - Deadlock Fight Club',
    description: 'Full breakdown of Deadlock\'s last patch of 2024. Patron defense buffs, hero nerfs, movement reverts, and economy changes explained.',
    url: 'https://deadlock-fights.netlify.app/december-patch',
    image: 'https://deadlock-fights.netlify.app/assets/heroes/bebop.png'
  });

  return (
    <Container maxWidth="md">
      <div className="guide-page">
        <Section>
          <h1>December Patch Breakdown</h1>
          <p className="guide-lead">
            Valve shipped Deadlock's last balance patch of the year with major overhauls to the Patron, hero nerfs across the board, and—thank the Rejuvenator—they reverted the movement nerfs.
          </p>
          <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>
            Even Bebop—objectively untouchable by nerfs because Valve knows perfection when they see it—benefits from these movement changes.
          </p>
        </Section>

        <Section>
          <h2>Quick Reference</h2>
          <div className="stat-box">
            <h3>Patron & Objectives</h3>
            <ul>
              <li><strong>Patron:</strong> 50% damage resist with 1 defender in pit, 100% with 2 defenders</li>
              <li><strong>Shrine HP:</strong> 3,000 → 7,000 (more than doubled)</li>
              <li><strong>Troopers:</strong> +30% HP and damage when both shrines destroyed</li>
            </ul>
          </div>

          <div className="stat-box">
            <h3>Movement Changes</h3>
            <ul>
              <li><strong>Slow on shot:</strong> REMOVED (no more free slowing bullets)</li>
              <li><strong>Wall jump:</strong> Initial jump no longer costs stamina</li>
              <li><strong>Stamina regen:</strong> Increased</li>
              <li><strong>Sprint nerfs:</strong> Base movespeed -0.1 for heroes above 6.5 sprint</li>
              <li><strong>Sprint scaling:</strong> Heroes with spirit-scaling sprint reduced 40%</li>
            </ul>
          </div>

          <div className="stat-box">
            <h3>Hero Nerfs</h3>
            <ul>
              <li><strong>Billy:</strong> HP regen 3 → 2.5, Chain Gang breaks out of LoS</li>
              <li><strong>Dynamo:</strong> HP regen 2.5 → 1.75, Kinetic Pulse scaling 0.2 → 0.1</li>
              <li><strong>Shiv:</strong> Killing Blow radius 15m → 13m, rage buildup -6%</li>
              <li><strong>Mirage:</strong> Jin's mark cooldown up, Traveller +10s base CD</li>
              <li><strong>Wraith:</strong> Bullet damage per boon 0.17 → 0.14, spirit scaling reduced</li>
            </ul>
          </div>

          <div className="stat-box">
            <h3>Economy Changes</h3>
            <ul>
              <li><strong>Urn bounty:</strong> 700 → 1,300 base (+230/min unchanged)</li>
              <li><strong>Solo kills:</strong> +25% bounty bonus</li>
              <li><strong>Duo kills:</strong> +15% bounty bonus</li>
              <li><strong>Vitality tree:</strong> Now gives flat HP instead of % (4.8k = +525 HP)</li>
              <li><strong>Spirit tree:</strong> 4.8k spike +45 → +38</li>
            </ul>
          </div>
        </Section>

        <Section>
          <h2>Patron Defense Overhaul</h2>
          <p>
            The biggest change: <strong>Patron now has 50% damage resistance when a single enemy defender is in the pit</strong>. Two defenders? Complete immunity—you can't deal any damage to Stage 2 Patron.
          </p>
          <p>
            This creates outplay potential and elongates games rather than allowing teams to rush the Patron, ignore the teamfight, and end in seconds.
          </p>

          <img
            src="/assets/patches/december-2024/shrine-health.jpg"
            alt="Shrine Health increased from 3000 to 7000, killing both makes troopers 30% stronger"
            className="patch-image"
          />

          <TipBox variant="info">
            <strong>Shrine HP doubled:</strong> From 3,000 to 7,000. No more Wraith TPing in, melting both shrines, and leaving before anyone notices.
          </TipBox>

          <p>
            Additionally, troopers gain +30% HP and damage when both shrines are destroyed, making your push stronger after objectives.
          </p>
        </Section>

        <Section>
          <h2>Movement: Restored and Rebalanced</h2>
          <p>
            The community was vocal about movement nerfs, and Valve listened. The "slow on shot" tagging—slowing bullets on everyone for free—has been <strong>completely removed</strong>.
          </p>

          <img
            src="/assets/patches/december-2024/shot-slow-removed.jpg"
            alt="Shot slow removed from the game"
            className="patch-image"
          />

          <div className="example-box">
            <h3>What's Back</h3>
            <ul>
              <li><strong>Initial wall jump:</strong> No longer costs stamina</li>
              <li><strong>Stamina regen:</strong> Increased rate</li>
              <li><strong>Neutral mob tagging:</strong> Reduced downtime before peak sprint</li>
            </ul>
          </div>

          <img
            src="/assets/patches/december-2024/wall-jump.jpg"
            alt="Initial wall jump will no longer use stamina"
            className="patch-image"
          />

          <TipBox variant="warning">
            <strong>But there are tradeoffs:</strong> Movement speed bonuses now stack diminishingly, and any hero with sprint speed spirit scaling has those values reduced by 40%. Base movespeed reduced by 0.1 for heroes above 6.5 sprint.
          </TipBox>

          <p>
            The 10% movespeed slow from taking damage is now 20%, but only affects movespeed <em>above</em> your base hero speed—meaning items and scaling, not your base stats.
          </p>
        </Section>

        <Section>
          <h2>Hero Nerfs Breakdown</h2>

          <div className="item-entry">
            <h3>Billy</h3>
            <p>
              HP regen nerfed from 3 to 2.5. More importantly, <strong>Chain Gang now breaks when outside line of sight</strong> (listed as "breaks faster" but we all know it never broke before). Blasted light melee percentage 35% → 25%.
            </p>
          </div>

          <div className="item-entry">
            <h3>Dynamo</h3>
            <img
              src="/assets/patches/december-2024/dynamo-nerf.jpg"
              alt="Dynamo nerfs: Health regen 2.5 to 1.75, Kinetic Pulse 0.2 to 0.1"
              className="patch-image"
            />
            <p>
              HP regen 2.5 → 1.75. The real hit: <strong>Kinetic Pulse spirit scaling 0.2 → 0.1</strong>. Worse than before the recent buff. No more curb stomping heads as easily.
            </p>
          </div>

          <div className="item-entry">
            <h3>Lady Geist</h3>
            <p>
              Malice self-damage 7% → 9%. Essence Bomb self-damage scaling 1.6 → 1.8. Stamina Dash moved to Bucket 3 (slower full dash distance).
            </p>
          </div>

          <div className="item-entry">
            <h3>Mirage</h3>
            <p>
              Jin's mark cooldown 2.5s → 2.6s with max range reduced. <strong>Traveller base cooldown +10 seconds</strong>—need more investment to get returns. Damage per boons and movement speed both scaled back.
            </p>
          </div>

          <div className="item-entry">
            <h3>Shiv</h3>
            <img
              src="/assets/patches/december-2024/shiv-nerf.jpg"
              alt="Shiv nerfs: Killing Blow cast 15m to 13m, Bloodletting deferred damage 30% to 25%, Rage buildup reduced by 6%"
              className="patch-image"
            />
            <p>
              Finally visiting Nerf City. <strong>Killing Blow radius 15m → 13m</strong>. Bloodletting deferred damage 35% → 25% base (need T2 to recover). Rage buildup reduced by 6%.
            </p>
          </div>

          <div className="item-entry">
            <h3>Vindicta</h3>
            <p>
              Assassinate T2 max damage bonus +90 → +80.
            </p>
          </div>

          <div className="item-entry">
            <h3>Wraith</h3>
            <img
              src="/assets/patches/december-2024/wraith-nerf.jpg"
              alt="Wraith nerfs: Bullet damage per boon 0.17 to 0.14, Project Mind T2 scaling 2.44 to 1.7"
              className="patch-image"
            />
            <p>
              Bullet damage per boon 0.17 → 0.14. Project Mind T2 spirit scaling reduced for barrier gains. Still very viable in the gun meta.
            </p>
          </div>
        </Section>

        <Section>
          <h2>Investment Tree Rework</h2>
          <p>
            The 4.8k investment spikes introduced recently have been rebalanced:
          </p>

          <div className="stat-box">
            <h3>Spirit Investment</h3>
            <p>4.8k spike: +45 → +38 spirit</p>
          </div>

          <div className="stat-box">
            <h3>Vitality Investment</h3>
            <p>
              <strong>Major change:</strong> No longer percentage-based HP. Now flat HP values.
            </p>
            <p>4.8k spike: +525 flat HP</p>
          </div>

          <TipBox variant="info">
            <strong>Items rebalanced around this:</strong> Expect adjusted item effectiveness to match the new investment scaling.
          </TipBox>
        </Section>

        <Section>
          <h2>Economy & Objective Changes</h2>

          <h3>Urn is Massive Now</h3>
          <img
            src="/assets/patches/december-2024/urn-buff.jpg"
            alt="Urn buff: Bounty increase 700 to 1300, Carrier bonus 25% to 35%, Carrier resistance 30% to 50%"
            className="patch-image"
          />
          <p>
            First urn of the game is now huge. Base bounty jumped from 700 to <strong>1,300 souls</strong> (plus 230 per minute). Carrier bonus +10% with increased resistance while carrying.
          </p>

          <h3>Kill Bounties Favor Small Fights</h3>
          <p>
            Solo kills: <strong>+25% bounty</strong>. Duo kills: <strong>+15% bounty</strong>. Valve continues discouraging deathball meta—1v1 and 2v2 fights are now more rewarding.
          </p>

          <h3>Jungle Changes</h3>
          <img
            src="/assets/patches/december-2024/jungle-camps.jpg"
            alt="Jungle camps: HP growth 0.5% to 2%, less HP before 15 min more after, HP reduction 20%"
            className="patch-image"
          />
          <ul>
            <li>Camp HP growth: Less before 15 min, more after</li>
            <li>Flat HP: -20%</li>
            <li>Spirit resist: +5%</li>
            <li>Sinner sacrifices bounty: -10%</li>
            <li>Cultist sacrifice CD: 260s → 270s</li>
          </ul>

          <h3>Trooper Adjustments</h3>
          <ul>
            <li>Medic warps heal allied troopers 30% more</li>
            <li>Trooper heal applied over 8 seconds (was 2)</li>
            <li>Heal amount: 260 → 350</li>
            <li>Trooper DPS vs troopers: 35 → 45</li>
            <li>Attack range vs troopers/players: +5 meters</li>
          </ul>
        </Section>

        <Section>
          <h2>Jump Pad & Soul Economy</h2>
          <p>
            Jump pad stuns now deal <strong>15% of max HP as damage</strong>. Still divisive—jump pads aren't in a great spot overall.
          </p>

          <h3>Unsecured Souls Rework</h3>
          <p>
            Old system: Souls gained over a rolling 165-second window, minimum 1 soul/second.
          </p>
          <p>
            New system: Drains 0.5% of remaining souls plus 1.6, scaling with 8% bounty growth per minute.
          </p>
        </Section>

        <Section>
          <p className="guide-closing">
            If this is the last balance patch of the year, it puts Deadlock in a solid spot. The Patron changes create real defensive opportunities, movement feels better with stamina and wall jump reverts, and the economy changes reward skilled play over deathballing. Time to hit the lanes.
          </p>
          <p style={{ marginTop: 'var(--spacing-md)', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Source: <a href="https://www.youtube.com/watch?v=BLjtY7OgQ_g" style={{ color: 'var(--accent-orange)' }}>"Valve Saved Movement & Changed the Patron in Deadlock!"</a> by Dead Air
          </p>
        </Section>
      </div>
    </Container>
  )
}
