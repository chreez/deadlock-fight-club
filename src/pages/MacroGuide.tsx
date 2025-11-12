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
          <p className="guide-lead">
            Understanding macro play in Deadlock is the difference between random fights and
            strategic resource control. This guide covers lane splitting strategies, the resource
            meter concept, and how to execute comeback plays when you're behind.
          </p>

          <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>
            While Bebop obviously dominates through superior hook mechanics and hyper beam supremacy,
            even the most skilled Bebop player needs proper macro to control the map and starve enemies
            of resources.
          </p>
        </Section>

        <Section>
          <h2>The Resource Meter Philosophy</h2>
          <p>
            The core concept of Deadlock macro is simple: <strong>everything below a line is yours,
            everything above is theirs.</strong> Your goal is to tip this resource meter by taking
            enemy resources they can't reclaim.
          </p>

          <TipBox variant="info">
            <strong>Key Insight:</strong> You can win games purely through better resource control,
            not just superior mechanics. Choking out enemy farm creates soul gaps that translate
            into item advantages and power spikes.
          </TipBox>

          <p>
            Every action should serve this purpose: take camps, deny jungle, secure objectives like
            urn and bridge buffs. When you consistently deny enemy resources while securing your own,
            you create an economy differential that makes your team uncontestable.
          </p>

          <p>
            This comes at a cost: time to rotate, risk of enemy collapse, and potential deaths that
            feed souls back. The key is understanding when the risk is worth the reward.
          </p>
        </Section>

        <Section>
          <h2>Lane Splitting Fundamentals</h2>
          <p>
            Lane splits describe how your team positions across the map. Each split has specific
            use cases, strengths, and risks. Understanding when to use each split is essential
            for macro play.
          </p>

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
            This is your baseline. Two people can efficiently farm lane creeps plus closed jungle.
            When enemies leave a lane understaffed, you punish by taking their jungle and pushing
            objectives.
          </p>

          <p>
            <strong>The constraint:</strong> If you're too poor and enemies too rich, they can leave
            one person to stall your two-person push while their three-person squad takes objectives
            elsewhere. Soul economy determines whether 2-2-2 pressure actually works.
          </p>

          <TipBox variant="info">
            <strong>Default scenario:</strong> When soul counts are even and map resources are up,
            stick to 2-2-2. It's safe, efficient, and prevents the enemy from gaining easy advantages.
          </TipBox>

          <h3>Objective-Focused Splits: 1-3-2 and 1-2-3</h3>
          <p>
            These splits allocate three players to one side of the map while leaving a solo carry
            on another lane. Use these when:
          </p>
          <ul>
            <li>You have a carry who needs solo farm and can survive alone (Wraith, Infernus, Ivy)</li>
            <li>An objective like urn or bridge buff is being contested</li>
            <li>You need numerical advantage to secure resources or win fights</li>
          </ul>

          <div className="example-box">
            <h3>Example: Urn Contest on Right Side</h3>
            <p>
              <strong>Setup:</strong> Put one self-sufficient carry on left lane, two players mid,
              three players right side near urn.
            </p>
            <p>
              <strong>Advantage:</strong> You have a +1 player advantage at the objective. Even if
              you're 3v3, one player can grab urn while two pressure the enemy.
            </p>
            <p>
              <strong>Pressure play:</strong> Your three-person squad forces enemies to either
              rotate (freeing up other lanes for resource denial) or concede the objective.
            </p>
          </div>

          <p>
            When running a 1-3-2, your solo laner must be good enough to leave quickly if ganked.
            Heroes with escapes (TP, dash, movement abilities) excel here. The three-person squad
            creates pressure that forces enemy rotations, opening the map.
          </p>

          <TipBox variant="warning">
            <strong>Risk:</strong> If your solo carry dies, you've fed souls and lost map presence.
            Only use these splits when your solo player has escape tools or excellent map awareness.
          </TipBox>
        </Section>

        <Section>
          <h2>Emergency Splits When Behind</h2>
          <p>
            When you're behind in souls, standard splits won't cut it. You need to create scenarios
            where you're more likely to win the next resource push. This requires forcing numerical
            advantages through strategic positioning.
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
            This split maintains lane stability (one person per lane to catch waves) while
            concentrating firepower for teamfights. The four-person squad hunts for picks or
            secures contested objectives.
          </p>

          <p>
            <strong>How to execute:</strong> Push waves with a 2-2-2 while enemies are in jungle.
            Once waves are set, over-rotate four players to one lane before enemies notice. This
            creates temporary numerical advantage.
          </p>

          <p>
            Solo players must be able to extract value from their lanes or at minimum not die.
            Walkers and lane resources must still have value—if your base is getting pushed, you
            can't afford to leave lanes empty.
          </p>

          <h3>Desperate Rotations: 5-0-1 and 6-0-0</h3>
          <TipBox variant="warning">
            <strong>High-risk plays:</strong> These splits abandon lane stability entirely. Only
            use when you're 20%+ behind in souls and need to force immediate advantages.
          </TipBox>

          <p>
            When facing a massive soul deficit (think +25% soul gap, meaning they have 125k souls
            when you have 100k), you need desperate measures.
          </p>

          <div className="stat-box">
            <h3>5-0-1 Five-Man Rotation</h3>
            <ul>
              <li><strong>Setup:</strong> Leave one farming carry on lane, rotate five to an objective</li>
              <li><strong>Execution:</strong> Must be fast—get the kill/objective and leave immediately</li>
              <li><strong>Risk:</strong> If stalled, enemies take walkers, mid boss, or urn on opposite side</li>
            </ul>
          </div>

          <p>
            Five-man splits rely on enemies not realizing you've rotated. Show someone in lane,
            push the wave, then disappear as five before they notice. If you find two enemies and
            force a 5v2, execute fast and take something that's theirs.
          </p>

          <p>
            <strong>Stay together after the kill.</strong> If you split up after winning the 5v2,
            you're too slow. Take guardian, walker, or jungle camps as a unit, then regroup.
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
            This is the most extreme comeback play. When enemies have rejuvenators and are better
            mechanically, your only path back is removing those rejuves. Scout for isolated enemies
            (ideally with Calico or Haze for vision), then collapse with all six players.
          </p>

          <TipBox variant="info">
            <strong>Execution priority:</strong> Kill target, force rejuvenator pop, execute again
            if possible. If you can't get the second execute, just burn the rejuvenator and retreat.
            Now they're down rejuves for the next patron fight.
          </TipBox>

          <p>
            Best case: you find three enemies, kill all three, burn rejuves, and suddenly they're
            taking urn with no safety net. This creates your comeback window.
          </p>
        </Section>

        <Section>
          <h2>Understanding Space Control</h2>
          <p>
            Space is defined by where you can safely operate versus where enemies can punish you.
            When enemies know you're somewhere and can collapse on you if you push too far, you're
            entering their space.
          </p>

          <div className="example-box">
            <h3>Space Awareness Example</h3>
            <p>
              <strong>Situation:</strong> You're a solo Ivy on left lane. Your team is grouped
              right side fighting for urn.
            </p>
            <p>
              <strong>Analysis:</strong> If enemies realize you're alone, your lane becomes their
              space. You must play carefully, stay near walker, and don't overextend.
            </p>
            <p>
              <strong>Counter-play:</strong> If enemies don't know your team rotated, play
              aggressively to bait them into thinking you have backup. When they engage, you punish
              or your team capitalizes elsewhere.
            </p>
          </div>

          <p>
            <strong>Key principle:</strong> When you're the solo player in a split that doesn't
            favor you, identify whether you're in your space or theirs. Play accordingly—aggressive
            in your space, cautious in theirs.
          </p>

          <p>
            Use space awareness to extract value without dying. Show yourself in lane to apply
            pressure, then disappear to jungle when enemies rotate. Make them think you have backup
            even when you don't.
          </p>
        </Section>

        <Section>
          <h2>Decision-Making Framework</h2>
          <p>
            Macro decisions come down to recognizing patterns and understanding when to deviate
            from defaults. Here's the mental framework:
          </p>

          <div className="principles-list">
            <ul>
              <li>✓ Equal souls + resources on map = 2-2-2 default split</li>
              <li>✓ Objective spawning + need pressure = 1-3-2 or 1-2-3 split</li>
              <li>✓ Behind in souls + need advantages = 1-1-4 emergency split</li>
              <li>✓ Massive deficit + enemy rejuves = 5-0-1 or 6-0-0 desperate plays</li>
              <li>✓ Solo in a lane = assess space and play accordingly</li>
              <li>✓ After winning fight = stay together, take enemy resources as unit</li>
            </ul>
          </div>

          <TipBox variant="warning">
            <strong>Common mistake:</strong> Splitting after a won fight. If you just won a 5v2
            teamfight, don't send two people to one lane and two to another. You'll be too slow.
            Stay as five, take walker/guardian, then reorganize.
          </TipBox>

          <p>
            Always ask: What am I trying to accomplish? Am I trying to create numerical advantage,
            deny resources, secure objectives, or buy time for carries to farm? Your split should
            match your goal.
          </p>

          <h3>Playing From Behind: The Paradox Rule</h3>
          <p>
            Sometimes the best macro play is a good micro play. If you're a 4.5k Paradox and see
            a 5.4k Yamato alone at low HP with no ultimate, you can kill them. This creates space,
            denies resources, and buys time.
          </p>

          <p>
            <strong>But there's a line:</strong> If that Yamato gets 2k more souls and you don't,
            nothing changes. Time is your enemy. You need to act while you can still win the 1v1,
            not when the gap is insurmountable.
          </p>

          <TipBox variant="info">
            <strong>Carry responsibility:</strong> If you're the solo carry on a lane and keep dying
            trying to make hero plays, you're not helping. Extract safe farm, use cooldowns correctly,
            and wait for your team to create advantages elsewhere.
          </TipBox>
        </Section>

        <Section>
          <h2>Key Principles Summary</h2>
          <p>
            Macro play is about tipping the resource meter in your favor through strategic
            positioning and resource denial. Every split, rotation, and fight should serve
            this purpose.
          </p>

          <div className="principles-list">
            <ul>
              <li>✓ Always think about taking enemy resources they can't reclaim</li>
              <li>✓ Use 2-2-2 as default when souls are even and resources are up</li>
              <li>✓ Switch to 1-3-2 when objectives spawn or you need concentrated pressure</li>
              <li>✓ Force 1-1-4 when behind to create numerical advantages</li>
              <li>✓ Execute 5-0-1 or 6-0-0 only in desperate situations with clear targets</li>
              <li>✓ Understand space—know when you're in your territory versus theirs</li>
              <li>✓ Act decisively when you have advantages; hesitation wastes power spikes</li>
              <li>✓ Stay together after won fights to maximize resource gains</li>
            </ul>
          </div>

          <p className="guide-closing">
            Mastering macro isn't about memorizing splits—it's about reading the game state and
            adapting your positioning to create advantages. Win through superior resource control,
            and the kills will follow.
          </p>
        </Section>
      </div>
    </Container>
  )
}
