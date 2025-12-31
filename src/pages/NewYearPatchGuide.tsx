import Container from '../components/layout/Container'
import Section from '../components/layout/Section'
import TipBox from '../components/layout/TipBox'
import { useMetaTags } from '../hooks/useMetaTags'
import './GuidePages.css'

export default function NewYearPatchGuide() {
  useMetaTags({
    title: 'New Year Patch: Bebop Bomb Scaling Goes Crazy - Deadlock Fight Club',
    description: 'Full breakdown of the 12-29-2025 Deadlock patch. Bebop bomb scaling rework, Grey Talon buffs, and 10 heroes buffed heading into 2026.',
    url: 'https://deadlock-fights.netlify.app/new-year-patch',
    image: 'https://deadlock-fights.netlify.app/blog/new-year-patch/hero.jpg'
  });

  return (
    <Container maxWidth="md">
      <div className="guide-page">
        <Section>
          <h1>New Year Patch: Bebop Bomb Scaling Goes Crazy</h1>
          <p className="guide-lead">
            Valve's final balance patch of 2025 buffs 10 heroes heading into the new year.
          </p>
          <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>
            Bebop received the buffs he deserves this patch. The other heroes got some changes too, I guess.
          </p>
        </Section>

        <Section>
          <h2>Quick Summary</h2>
          <div className="stat-box">
            <h3>Buffs</h3>
            <ul className="hero-changes-list">
              <li><strong>Bebop</strong>
                <ul>
                  <li>Stamina: 2 → 3</li>
                  <li>Health per Boon: +46 → +52</li>
                  <li>Sticky Bomb Spirit Scaling: 1.1 → 1.5</li>
                </ul>
              </li>
              <li><strong>Grey Talon</strong>
                <ul>
                  <li>Rain of Arrows CD: 35s → 30s</li>
                  <li>Rain of Arrows T3: +30% Bullet Evasion</li>
                  <li>Guided Owl Spirit/Kill: 5 → 8</li>
                </ul>
              </li>
              <li><strong>Holliday</strong>
                <ul>
                  <li>Powder Keg CD: 32s → 28s</li>
                  <li>Lasso: Divine Barrier bug fixed</li>
                </ul>
              </li>
              <li><strong>Ivy</strong>
                <ul>
                  <li>Watcher's Covenant Healing: 25% → 35%</li>
                  <li>Air Drop Ally Penalty: -30% → -20%</li>
                </ul>
              </li>
              <li><strong>Kelvin</strong>
                <ul>
                  <li>Frost Grenade T3: -30% Stamina Regen</li>
                  <li>Ice Path T3 Spirit: 55 → 75</li>
                </ul>
              </li>
              <li><strong>Mo & Krill</strong>
                <ul>
                  <li>Sand Blast: Castable while burrowed</li>
                  <li>Sand Blast T2 CD: -19s → -23s</li>
                  <li>Sand Blast T3: Slows dash 40%</li>
                </ul>
              </li>
              <li><strong>Paradox</strong>
                <ul>
                  <li>Kinetic Carbine CD: 30s → 27s</li>
                  <li>Time Wall Width: 7m → 7.5m</li>
                </ul>
              </li>
              <li><strong>Seven</strong>
                <ul>
                  <li>Lightning Ball T3: +1m → +1.5m</li>
                  <li>Storm Cloud DPS: 90 → 95</li>
                  <li>Storm Cloud T3 Move Speed: 2.5 → 3.8</li>
                </ul>
              </li>
              <li><strong>Sinclair</strong>
                <ul>
                  <li>Spirit Growth: 1.1 → 1.3</li>
                  <li>Rabbit Hex CD: 30s → 26s</li>
                  <li>Rabbit Hex Radius: 6m → 6.5m</li>
                </ul>
              </li>
              <li><strong>Yamato</strong>
                <ul>
                  <li>Power Slash T3 Spirit Scaling: +0.5</li>
                  <li>Shadow Transform Heal/Kill: 12% → 15%</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="stat-box">
            <h3>Nerfs / Tradeoffs</h3>
            <ul className="hero-changes-list">
              <li><strong>Bebop</strong>
                <ul>
                  <li>Sticky Bomb Base Damage: 100 → 75</li>
                  <li>Stamina Regen CD: 4.55s → 6s</li>
                </ul>
              </li>
              <li><strong>Seven</strong>
                <ul>
                  <li>Power Surge T2: -15%/8s → -10%/6s</li>
                </ul>
              </li>
              <li><strong>Yamato</strong>
                <ul>
                  <li>Power Slash T3 Damage: +166 → +150</li>
                </ul>
              </li>
              <li><strong>Sinclair</strong>
                <ul>
                  <li>Vexing Bolt Velocity: 1000 → 800</li>
                </ul>
              </li>
            </ul>
          </div>

          <p style={{ marginTop: 'var(--spacing-md)', fontSize: '0.9rem' }}>
            <a href="https://forums.playdeadlock.com/threads/12-29-2025-update.95233/" style={{ color: 'var(--accent-orange)' }}>See official patch notes →</a>
          </p>

          <details className="raw-notes-drawer">
            <summary>View Raw Patch Notes</summary>
            <div className="raw-notes-content">
              <table className="patch-table">
                <thead>
                  <tr>
                    <th>Hero</th>
                    <th>Ability</th>
                    <th>Change</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td rowSpan={8}>Bebop</td><td>Stamina</td><td>2 → 3</td></tr>
                  <tr><td>Stamina Regen CD</td><td>4.55s → 6s</td></tr>
                  <tr><td>Health per Boon</td><td>+46 → +52</td></tr>
                  <tr><td>Sticky Bomb Base Damage</td><td>100 → 75</td></tr>
                  <tr><td>Sticky Bomb T2 Damage</td><td>63 → 60</td></tr>
                  <tr><td>Sticky Bomb Spirit Scaling</td><td>1.1 → 1.5</td></tr>
                  <tr><td>Per Hero Hit Bonus</td><td>1.5% → 1% + 0.0025% Spirit</td></tr>
                  <tr><td>Per Hero Kill Bonus</td><td>4% → 2.5% + 0.015% Spirit</td></tr>

                  <tr><td rowSpan={5}>Grey Talon</td><td>Rain of Arrows CD</td><td>35s → 30s</td></tr>
                  <tr><td>Rain of Arrows T3</td><td>+30% Bullet Evasion</td></tr>
                  <tr><td>Guided Owl Duration</td><td>16s → 18s</td></tr>
                  <tr><td>Guided Owl T1 Damage</td><td>+81 → +85</td></tr>
                  <tr><td>Guided Owl Spirit/Kill</td><td>5 → 8</td></tr>

                  <tr><td rowSpan={2}>Holliday</td><td>Powder Keg CD</td><td>32s → 28s</td></tr>
                  <tr><td>Lasso</td><td>Fixed Divine Barrier removal</td></tr>

                  <tr><td rowSpan={3}>Ivy</td><td>Watcher's Covenant Healing</td><td>25% → 35%</td></tr>
                  <tr><td>Replicated Healing Boon Scale</td><td>+0.5</td></tr>
                  <tr><td>Air Drop Ally Damage Penalty</td><td>-30% → -20%</td></tr>

                  <tr><td rowSpan={3}>Kelvin</td><td>Frost Grenade T3</td><td>-30% Stamina Regen</td></tr>
                  <tr><td>Ice Path T3 Max Spirit</td><td>55 → 75</td></tr>
                  <tr><td>Ice Path T3 Linger</td><td>6s → 8s</td></tr>

                  <tr><td rowSpan={5}>Mo & Krill</td><td>Burrow Detection</td><td>Improved vertical area</td></tr>
                  <tr><td>Sand Blast Damage</td><td>Fixed 40 damage</td></tr>
                  <tr><td>Sand Blast Cast</td><td>Castable while burrowed</td></tr>
                  <tr><td>Sand Blast T2 CD</td><td>-19s → -23s</td></tr>
                  <tr><td>Sand Blast T3</td><td>Slows dash distance 40%</td></tr>

                  <tr><td rowSpan={2}>Paradox</td><td>Kinetic Carbine CD</td><td>30s → 27s</td></tr>
                  <tr><td>Time Wall Width</td><td>7m → 7.5m</td></tr>

                  <tr><td rowSpan={5}>Seven</td><td>Lightning Ball T3</td><td>+1m → +1.5m</td></tr>
                  <tr><td>Power Surge T2</td><td>-15%/8s → -10%/6s</td></tr>
                  <tr><td>Storm Cloud DPS</td><td>90 → 95</td></tr>
                  <tr><td>Storm Cloud T3 DPS</td><td>+54 → +65</td></tr>
                  <tr><td>Storm Cloud T3 Move Speed</td><td>2.5 → 3.8</td></tr>

                  <tr><td rowSpan={5}>Sinclair</td><td>Spirit Power Growth</td><td>1.1 → 1.3</td></tr>
                  <tr><td>Vexing Bolt Velocity</td><td>1000 → 800</td></tr>
                  <tr><td>Vexing Bolt Targeting</td><td>Snaps to heroes only</td></tr>
                  <tr><td>Vexing Bolt Duration</td><td>3s → 4s</td></tr>
                  <tr><td>Rabbit Hex CD</td><td>30s → 26s</td></tr>

                  <tr><td rowSpan={3}>Yamato</td><td>Power Slash T3 Damage</td><td>+166 → +150</td></tr>
                  <tr><td>Power Slash T3 Spirit Scale</td><td>+0.5</td></tr>
                  <tr><td>Shadow Transform Heal/Kill</td><td>12% → 15%</td></tr>
                </tbody>
              </table>
              <p style={{ marginTop: 'var(--spacing-sm)', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Source: <a href="https://forums.playdeadlock.com/threads/12-29-2025-update.95233/" style={{ color: 'var(--accent-orange)' }}>Official 12-29-2025 Patch Notes</a>
              </p>
            </div>
          </details>
        </Section>

        <Section>
          <h2>Bebop</h2>
          <img
            src="/blog/new-year-patch/bebop-stamina.jpg"
            alt="Bebop stamina increased from 2 to 3, health per boon from 46 to 52"
            className="patch-image"
          />

          <div className="stat-box">
            <h3>Base Stats</h3>
            <ul>
              <li><strong>Stamina:</strong> 2 → 3 bars</li>
              <li><strong>Stamina Regen Cooldown:</strong> 4.55s → 6s</li>
              <li><strong>Health per Boon:</strong> +46 → +52</li>
            </ul>
          </div>

          <img
            src="/blog/new-year-patch/bebop-bomb.jpg"
            alt="Bebop sticky bomb scaling rework: base damage down but spirit scaling massively increased"
            className="patch-image"
          />

          <div className="stat-box">
            <h3>Sticky Bomb Rework</h3>
            <ul>
              <li><strong>Base Damage:</strong> 100 → 75</li>
              <li><strong>T2 Damage:</strong> 63 → 60</li>
              <li><strong>Spirit Scaling:</strong> 1.1 → 1.5</li>
              <li><strong>Per Hero Hit:</strong> 1.5% → 1% + 0.0025% Spirit Scaling</li>
              <li><strong>Per Hero Kill:</strong> 4% → 2.5% + 0.015% Spirit Scaling</li>
            </ul>
          </div>

          <p>
            The bomb scaling changes are the real story here. While base damage dropped,
            the spirit scaling went from 1.1 to 1.5. Per the video, spirit-heavy builds
            can reach around 1,500 damage early with proper stack farming.
          </p>

          <TipBox variant="warning">
            <strong>Counter Play:</strong> Per the video, Debuff Remover and Reactive Barrier
            are essential against Bebop this patch.
          </TipBox>
        </Section>

        <Section>
          <h2>Grey Talon</h2>
          <img
            src="/blog/new-year-patch/grey-talon.jpg"
            alt="Grey Talon Rain of Arrows cooldown reduced, now grants 30% bullet evasion at T3"
            className="patch-image"
          />

          <div className="stat-box">
            <h3>Rain of Arrows</h3>
            <ul>
              <li><strong>Cooldown:</strong> 35s → 30s</li>
              <li><strong>T3:</strong> Now grants +30% Bullet Evasion</li>
            </ul>
          </div>

          <div className="stat-box">
            <h3>Guided Owl</h3>
            <ul>
              <li><strong>Duration:</strong> 16s → 18s</li>
              <li><strong>T1 Damage:</strong> +81 → +85</li>
              <li><strong>Spirit Power per Kill:</strong> 5 → 8</li>
            </ul>
          </div>

          <p>
            The 30% bullet evasion on Rain of Arrows T3 helps survivability while airborne.
            Guided Owl spirit power per kill nearly doubled (5 → 8).
          </p>
        </Section>

        <Section>
          <h2>Holliday</h2>
          <img
            src="/blog/new-year-patch/holliday.jpg"
            alt="Holliday Powder Keg cooldown reduced from 32 to 28 seconds"
            className="patch-image"
          />

          <div className="stat-box">
            <h3>Changes</h3>
            <ul>
              <li><strong>Powder Keg Cooldown:</strong> 32s → 28s</li>
              <li><strong>Lasso:</strong> Fixed bug where Divine Barrier could cancel the grab</li>
            </ul>
          </div>

          <p>
            Two changes—Powder Keg cooldown reduced and a bug fix preventing Divine Barrier
            from canceling Lasso grabs.
          </p>
        </Section>

        <Section>
          <h2>Ivy</h2>
          <img
            src="/blog/new-year-patch/ivy.jpg"
            alt="Ivy Watcher's Covenant replicated healing increased from 25% to 35%"
            className="patch-image"
          />

          <div className="stat-box">
            <h3>Changes</h3>
            <ul>
              <li><strong>Watcher's Covenant Replicated Healing:</strong> 25% → 35%</li>
              <li><strong>Replicated Healing:</strong> Now scales with boons (+0.5)</li>
              <li><strong>Air Drop Ally Damage Penalty:</strong> -30% → -20%</li>
            </ul>
          </div>

          <p>
            Watcher's Covenant replicated healing increased from 25% to 35% and now scales
            with boons. Air Drop ally damage penalty reduced from -30% to -20%.
          </p>
        </Section>

        <Section>
          <h2>Kelvin</h2>
          <img
            src="/blog/new-year-patch/kelvin.jpg"
            alt="Kelvin Frost Grenade T3 now reduces enemy stamina regen by 30%"
            className="patch-image"
          />

          <div className="stat-box">
            <h3>Frost Grenade</h3>
            <ul>
              <li><strong>T3:</strong> Now reduces enemy stamina regen by -30%</li>
            </ul>
          </div>

          <div className="stat-box">
            <h3>Ice Path T3</h3>
            <ul>
              <li><strong>Max Spirit Power:</strong> 55 → 75</li>
              <li><strong>Linger Duration:</strong> 6s → 8s</li>
            </ul>
          </div>

          <p>
            Frost Grenade T3 now reduces enemy stamina regen by 30%. Ice Path T3 spirit
            scaling increased (55 → 75) and linger duration extended (6s → 8s).
          </p>
        </Section>

        <Section>
          <h2>Mo & Krill</h2>
          <img
            src="/blog/new-year-patch/mo-krill.jpg"
            alt="Mo and Krill Sand Blast can now be cast while burrowed"
            className="patch-image"
          />

          <div className="stat-box">
            <h3>Sand Blast</h3>
            <ul>
              <li><strong>Damage:</strong> Now deals fixed 40 damage per hit</li>
              <li><strong>Cast:</strong> Can now be cast while burrowed</li>
              <li><strong>T2 Cooldown Reduction:</strong> -19s → -23s</li>
              <li><strong>T3:</strong> Now slows dash distance by 40%</li>
            </ul>
          </div>

          <div className="stat-box">
            <h3>Burrow</h3>
            <ul>
              <li><strong>Vertical Area Detection:</strong> Improved</li>
            </ul>
          </div>

          <p>
            Sand Blast can now be cast while burrowed. T2 cooldown reduction improved (-19s → -23s)
            and T3 now slows enemy dash distance by 40%.
          </p>
        </Section>

        <Section>
          <h2>Paradox</h2>
          <img
            src="/blog/new-year-patch/paradox.jpg"
            alt="Paradox Kinetic Carbine cooldown reduced from 30 to 27 seconds"
            className="patch-image"
          />

          <div className="stat-box">
            <h3>Changes</h3>
            <ul>
              <li><strong>Kinetic Carbine Cooldown:</strong> 30s → 27s</li>
              <li><strong>Time Wall Width:</strong> 7m → 7.5m</li>
            </ul>
          </div>

          <p>
            Kinetic Carbine cooldown reduced by 3 seconds. Time Wall width increased by 0.5m,
            which per the video should cover most gaps and doorways at max size.
          </p>
        </Section>

        <Section>
          <h2>Seven</h2>
          <img
            src="/blog/new-year-patch/seven-ball.jpg"
            alt="Seven Lightning Ball T3 radius increased, Power Surge T2 slightly nerfed"
            className="patch-image"
          />

          <div className="stat-box">
            <h3>Lightning Ball</h3>
            <ul>
              <li><strong>T3 Radius:</strong> +1m → +1.5m</li>
            </ul>
          </div>

          <div className="stat-box">
            <h3>Power Surge (Slight Nerf)</h3>
            <ul>
              <li><strong>T2 Spirit Resist Reduction:</strong> -15% (8s) → -10% (6s)</li>
            </ul>
          </div>

          <img
            src="/blog/new-year-patch/seven-storm.jpg"
            alt="Seven Storm Cloud DPS and movement speed significantly buffed"
            className="patch-image"
          />

          <div className="stat-box">
            <h3>Storm Cloud</h3>
            <ul>
              <li><strong>Base DPS:</strong> 90 → 95</li>
              <li><strong>T3 DPS:</strong> +54 → +65</li>
              <li><strong>T3 Move Speed:</strong> 2.5 → 3.8</li>
            </ul>
          </div>

          <p>
            Lightning Ball T3 radius increased (+1m → +1.5m). Power Surge T2 spirit resist
            reduction nerfed slightly. Storm Cloud got DPS and movement speed buffs.
          </p>
        </Section>

        <Section>
          <h2>Sinclair</h2>
          <img
            src="/blog/new-year-patch/sinclair.jpg"
            alt="Sinclair spirit power growth increased, Rabbit Hex cooldown and radius buffed"
            className="patch-image"
          />

          <div className="stat-box">
            <h3>Base Stats</h3>
            <ul>
              <li><strong>Spirit Power Growth:</strong> 1.1 → 1.3</li>
            </ul>
          </div>

          <div className="stat-box">
            <h3>Vexing Bolt</h3>
            <ul>
              <li><strong>Initial Velocity:</strong> 1000 → 800</li>
              <li><strong>Targeting:</strong> Now snaps only to heroes</li>
              <li><strong>Max Duration:</strong> 3s → 4s</li>
            </ul>
          </div>

          <div className="stat-box">
            <h3>Rabbit Hex</h3>
            <ul>
              <li><strong>Cooldown:</strong> 30s → 26s</li>
              <li><strong>Radius:</strong> 6m → 6.5m</li>
            </ul>
          </div>

          <p>
            Spirit power growth increased (1.1 → 1.3). Vexing Bolt now snaps to heroes only
            (slower velocity but longer duration). Rabbit Hex cooldown and radius both buffed.
          </p>
        </Section>

        <Section>
          <h2>Yamato</h2>
          <img
            src="/blog/new-year-patch/yamato.jpg"
            alt="Yamato Power Slash T3 base damage reduced but spirit scaling increased"
            className="patch-image"
          />

          <div className="stat-box">
            <h3>Power Slash T3</h3>
            <ul>
              <li><strong>Flat Damage:</strong> +166 → +150</li>
              <li><strong>Spirit Power Scaling:</strong> +0.5</li>
            </ul>
          </div>

          <div className="stat-box">
            <h3>Shadow Transformation</h3>
            <ul>
              <li><strong>Heal on Kill:</strong> 12% → 15%</li>
            </ul>
          </div>

          <p>
            Power Slash T3 flat damage reduced but spirit scaling increased by 0.5.
            Shadow Transformation heal on kill buffed from 12% to 15%.
          </p>
        </Section>

        <Section>
          <p className="guide-closing">
            10 heroes buffed in Valve's final 2025 balance patch. Bebop bomb scaling is the
            headline change with spirit scaling jumping from 1.1 to 1.5.
          </p>
          <p style={{ marginTop: 'var(--spacing-md)', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Based on <a href="https://www.youtube.com/watch?v=AZfa_NaU0v0" style={{ color: 'var(--accent-orange)' }}>"This Bebop Bomb Buff is CRAZY!"</a> by Dead Air.
            Official patch notes: <a href="https://forums.playdeadlock.com/threads/12-29-2025-update.95233/" style={{ color: 'var(--accent-orange)' }}>12-29-2025 Update</a>
          </p>
        </Section>
      </div>
    </Container>
  )
}
