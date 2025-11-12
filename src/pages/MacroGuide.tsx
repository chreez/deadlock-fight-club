import Container from '../components/layout/Container'
import Section from '../components/layout/Section'
import TipBox from '../components/layout/TipBox'
import { useMetaTags } from '../hooks/useMetaTags'
import './GuidePages.css'

export default function MacroGuide() {
  useMetaTags({
    title: 'Advanced Macro Guide - Deadlock Fight Club',
    description: 'Master lane splitting, resource control, and comeback strategies. Learn 2-2-2, 1-3-2, 1-1-4 splits and how to tip the resource meter in your favor.',
    url: 'https://deadlock-fights.netlify.app/macro-guide',
    image: 'https://deadlock-fights.netlify.app/assets/heroes/bebop.png'
  });

  return (
    <Container maxWidth="md">
      <div className="guide-page">
        <Section>
          <h1>Advanced Macro: Lane Splitting & Resource Control</h1>
          <p style={{
            fontSize: '1.3rem',
            color: 'var(--accent-orange)',
            fontWeight: 'bold',
            marginBottom: 'var(--spacing-lg)'
          }}>
            Their Jungle. Your Souls.
          </p>
          <p className="guide-lead">
            Understanding macro play in Deadlock is the difference between random fights and
            strategic resource control. This guide covers lane splitting strategies, the resource
            meter concept, and how to execute comeback plays when you're behind.
          </p>

          <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>
            While everyone knows Bebop is superior to all other heroes, macro still wins games.
            Resource control beats raw mechanics every time.
          </p>
        </Section>

        <Section>
          <h2>The Resource Meter Philosophy</h2>
          <p>
            <strong>Everything below a line is yours, everything above is theirs.</strong> Your goal:
            tip this meter by taking enemy resources they can't reclaim—camps, jungle, objectives.
          </p>

          <TipBox variant="info">
            <strong>Key Insight:</strong> Win through resource denial, not just mechanics. Choking
            enemy farm creates soul gaps that translate to item advantages.
          </TipBox>

          <p>
            Risk: rotation time, enemy collapse, dying and feeding souls back. Reward: economy
            differential that makes your team uncontestable.
          </p>
        </Section>

        <Section>
          <h2>Lane Splitting Fundamentals</h2>

          <h3>The 2-2-2 Default Split</h3>
          <div className="stat-box">
            <h3>2-2-2 Split Overview</h3>
            <ul>
              <li><strong>Structure:</strong> Two players on each lane</li>
              <li><strong>When to use:</strong> Even soul count, resources available on map</li>
              <li><strong>Purpose:</strong> Efficient farming, maintain pressure across all lanes</li>
            </ul>
          </div>

          <p>
            Your baseline. Two people farm lane creeps plus closed jungle efficiently. When enemies
            leave a lane understaffed, punish by taking their jungle and objectives.
          </p>

          <p>
            <strong>Constraint:</strong> If you're behind in souls, one rich enemy can stall your
            two-person push while their team takes objectives elsewhere.
          </p>

          <h3>Objective-Focused Splits: 1-3-2 and 1-2-3</h3>
          <p>
            Three players one side, solo carry other side. Use when contesting urn/bridge buffs or
            when carry needs solo farm (Wraith, Infernus, Ivy with escape tools).
          </p>

          <div className="example-box">
            <h3>Urn Contest Example</h3>
            <p>
              <strong>Setup:</strong> 1 solo left, 2 mid, 3 right at urn = +1 advantage at objective
            </p>
            <p>
              <strong>Result:</strong> Forces enemy rotation (freeing other lanes) or free objective
            </p>
          </div>

          <TipBox variant="warning">
            <strong>Risk:</strong> Solo carry dies = fed souls + lost map presence. Requires escape tools.
          </TipBox>
        </Section>

        <Section>
          <h2>Emergency Splits When Behind</h2>
          <p>
            Behind in souls? Force numerical advantages to win resource pushes.
          </p>

          <h3>The 1-1-4 Emergency Split</h3>
          <div className="stat-box">
            <h3>1-1-4 Split Mechanics</h3>
            <ul>
              <li><strong>Structure:</strong> One player each on two lanes, four on one lane</li>
              <li><strong>When to use:</strong> Behind in souls, need to force favorable fights</li>
              <li><strong>Goal:</strong> Create 4v3 or 4v2 scenarios to secure kills and resources</li>
            </ul>
          </div>

          <p>
            Maintains lane stability (solos catch waves) while concentrating firepower. Push waves
            2-2-2, then over-rotate four players before enemies notice.
          </p>

          <h3>Desperate Rotations: 5-0-1 and 6-0-0</h3>
          <TipBox variant="warning">
            <strong>High-risk:</strong> Use only when 20%+ behind. Abandons lane stability.
          </TipBox>

          <div className="stat-box">
            <h3>5-0-1 Five-Man Rotation</h3>
            <ul>
              <li><strong>Setup:</strong> Leave one farming carry on lane, rotate five to an objective</li>
              <li><strong>Execution:</strong> Must be fast—get the kill/objective and leave immediately</li>
              <li><strong>Risk:</strong> If stalled, enemies take walkers, mid boss, or urn on opposite side</li>
            </ul>
          </div>

          <p>
            Show in lane, push wave, disappear as five. Force 5v2, execute fast, take their resources.
            <strong>Stay together</strong>—splitting after is too slow.
          </p>

          <div className="stat-box">
            <h3>6-0-0 Rejuvenator Denial (Extreme)</h3>
            <ul>
              <li><strong>Scenario:</strong> Enemies have 3+ rejuvenators, you're massively behind</li>
              <li><strong>Strategy:</strong> All six players hunt for picks to remove rejuvenators</li>
              <li><strong>Target:</strong> Isolated enemies farming your side of the map</li>
            </ul>
          </div>

          <p>
            Most extreme comeback. Scout isolated enemies (Calico/Haze vision), collapse as six.
            Kill, burn rejuve, execute again if possible. Creates comeback window.
          </p>
        </Section>

        <Section>
          <h2>Space Control Basics</h2>
          <p>
            Your space = where you're safe. Their space = where they can punish you. Solo players:
            identify which space you're in and play accordingly.
          </p>

          <div className="example-box">
            <h3>Solo Ivy Example</h3>
            <p>
              <strong>Alone on lane:</strong> If enemies know = their space (play safe near walker)
            </p>
            <p>
              <strong>Enemy unaware:</strong> Play aggressive, bait them into thinking you have backup
            </p>
          </div>
        </Section>

        <Section>
          <h2>Decision Framework</h2>
          <div className="principles-list">
            <ul>
              <li>✓ Equal souls = 2-2-2 default</li>
              <li>✓ Objective spawning = 1-3-2 pressure</li>
              <li>✓ Behind in souls = 1-1-4 emergency</li>
              <li>✓ Massive deficit + rejuves = 5-0-1 or 6-0-0</li>
              <li>✓ After won fight = stay together, take resources</li>
            </ul>
          </div>

          <TipBox variant="warning">
            <strong>Common mistake:</strong> Splitting after won fights. Stay as five, take objectives.
          </TipBox>

          <h3>The Paradox Rule</h3>
          <p>
            Sometimes micro beats macro. If you're 4.5k Paradox vs 5.4k Yamato at low HP with no ult,
            kill them. But act fast—if they get 2k more souls and you don't, your window closes.
          </p>
        </Section>

        <Section>
          <h2>Key Takeaways</h2>
          <div className="principles-list">
            <ul>
              <li>✓ Take enemy resources they can't reclaim</li>
              <li>✓ 2-2-2 default, 1-3-2 for objectives, 1-1-4 when behind</li>
              <li>✓ 5-0-1/6-0-0 only for desperate comebacks</li>
              <li>✓ Understand space—aggressive in yours, cautious in theirs</li>
              <li>✓ Stay together after won fights</li>
              <li>✓ Act fast when you have advantages</li>
            </ul>
          </div>

          <p className="guide-closing">
            Macro isn't about memorizing splits—read game state, adapt positioning, control resources.
          </p>
        </Section>
      </div>
    </Container>
  )
}
