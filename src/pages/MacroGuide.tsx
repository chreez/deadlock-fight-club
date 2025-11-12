import { useState } from 'react'
import Container from '../components/layout/Container'
import Section from '../components/layout/Section'
import TipBox from '../components/layout/TipBox'
import { useMetaTags } from '../hooks/useMetaTags'
import './GuidePages.css'

export default function MacroGuide() {
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)

  const quiz = [
    {
      question: "You're even in souls at 10 minutes. What split should you use?",
      options: ["1-1-4", "2-2-2", "5-0-1", "6-0-0"],
      correct: "2-2-2",
      explanation: "Even souls with resources on map = 2-2-2 default split"
    },
    {
      question: "Urn spawns in 30 seconds and you have a Wraith with TP. Best split?",
      options: ["2-2-2", "1-3-2", "1-1-4", "5-0-1"],
      correct: "1-3-2",
      explanation: "Objective spawning + self-sufficient carry = 1-3-2 pressure split"
    },
    {
      question: "You're 20%+ behind in souls. Enemies have 3 rejuvenators. What now?",
      options: ["Keep farming 2-2-2", "1-1-4 emergency", "6-0-0 rejuve hunt", "Surrender"],
      correct: "6-0-0 rejuve hunt",
      explanation: "Massive deficit + rejuves = extreme 6-0-0 comeback play"
    },
    {
      question: "Your solo Ivy is alone on lane. Enemies know it. What's the space situation?",
      options: ["Your space", "Their space", "Neutral space", "No space"],
      correct: "Their space",
      explanation: "Enemies know you're alone = their space. Play cautious near walker."
    },
    {
      question: "You win a 5v2 fight. What should you do?",
      options: ["Split 2-2-2 to farm", "Stay as 5, take objectives", "Recall to shop", "Chase kills"],
      correct: "Stay as 5, take objectives",
      explanation: "Stay together after won fights. Splitting is too slow—maximize resource gains as a unit."
    }
  ]

  const handleAnswer = (questionIndex: number, answer: string) => {
    setQuizAnswers(prev => ({ ...prev, [questionIndex]: answer }))
  }

  const calculateScore = () => {
    return quiz.filter((q, i) => quizAnswers[i] === q.correct).length
  }

  const allAnswered = quiz.every((_, i) => quizAnswers[i] !== undefined)

  useMetaTags({
    title: 'Advanced Macro Guide - Deadlock Fight Club',
    description: 'Master lane splitting, resource control, and comeback strategies. Learn 2-2-2, 1-3-2, 1-1-4 splits and how to tip the resource meter in your favor.',
    url: 'https://deadlock-fights.netlify.app/macro-guide',
    image: 'https://deadlock-fights.netlify.app/assets/heroes/bebop.png'
  });

  return (
    <Container maxWidth="md">
      <article className="guide-page">
        <header>
          <Section>
            <h1>Advanced Macro: Lane Splitting & Resource Control</h1>
            <p className="guide-tagline">
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
        </header>

        <Section>
          <h2>The Resource Meter Philosophy</h2>
          <p>
            <strong>Look at your minimap:</strong> everything below the horizon is yours, everything
            above is theirs. Your goal: tip this resource meter by crossing that line—take their camps,
            jungle, objectives. Resources they can't reclaim.
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

          <div className="split-strategy">
            <h3>The 2-2-2 Default Split</h3>
            <div className="stat-box">
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
          </div>

          <div className="split-strategy">
            <h3>Objective-Focused Splits: 1-3-2 and 1-2-3</h3>
            <p>
              Three players one side, solo carry other side. Use when contesting urn/bridge buffs or
              when carry needs solo farm (Wraith, Infernus, Ivy with escape tools).
            </p>

            <div className="example-box">
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
          </div>
        </Section>

        <Section>
          <h2>Emergency Splits When Behind</h2>
          <p>
            Behind in souls? Force numerical advantages to win resource pushes.
          </p>

          <div className="split-strategy">
            <h3>The 1-1-4 Emergency Split</h3>
            <div className="stat-box">
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
          </div>

          <div className="split-strategy">
            <h3>Desperate Rotations: 5-0-1 and 6-0-0</h3>
            <TipBox variant="warning">
              <strong>High-risk:</strong> Use only when 20%+ behind. Abandons lane stability.
            </TipBox>

            <div className="stat-box">
              <strong>5-0-1 Five-Man Rotation</strong>
              <ul>
                <li><strong>Setup:</strong> Leave one farming carry on lane, rotate five to an objective</li>
                <li><strong>Execution:</strong> Must be fast—get the kill/objective and leave immediately</li>
                <li><strong>Risk:</strong> If stalled, enemies take walkers, mid boss, or urn on opposite side</li>
              </ul>
            </div>

            <p>
              Show in lane, push wave, disappear as five. Force 5v2, execute fast, take their resources.
              <strong> Stay together</strong>—splitting after is too slow.
            </p>

            <div className="stat-box">
              <strong>6-0-0 Rejuvenator Denial (Extreme)</strong>
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
          </div>
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

        <Section>
          <h2>Test Your Knowledge</h2>
          <p>Quick quiz to check your understanding of macro concepts:</p>

          {quiz.map((q, qIndex) => (
            <div key={qIndex} style={{
              marginTop: 'var(--spacing-xl)',
              padding: 'var(--spacing-lg)',
              background: 'var(--bg-secondary)',
              borderRadius: 'var(--radius-large)',
              border: showResults && quizAnswers[qIndex] === q.correct
                ? '2px solid #4caf50'
                : showResults && quizAnswers[qIndex] !== q.correct
                ? '2px solid #f44336'
                : '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <p style={{ fontWeight: 'bold', marginBottom: 'var(--spacing-md)', color: 'var(--text-primary)' }}>
                {qIndex + 1}. {q.question}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                {q.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleAnswer(qIndex, option)}
                    disabled={showResults}
                    style={{
                      padding: 'var(--spacing-md)',
                      background: quizAnswers[qIndex] === option
                        ? 'rgba(255, 140, 66, 0.2)'
                        : 'rgba(255, 255, 255, 0.05)',
                      border: quizAnswers[qIndex] === option
                        ? '2px solid var(--accent-orange)'
                        : '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: 'var(--radius-standard)',
                      color: 'var(--text-primary)',
                      textAlign: 'left',
                      cursor: showResults ? 'default' : 'pointer',
                      transition: 'all var(--transition-fast)',
                      opacity: showResults && option !== q.correct ? 0.5 : 1
                    }}
                  >
                    {option}
                    {showResults && option === q.correct && ' ✓'}
                  </button>
                ))}
              </div>

              {showResults && (
                <div style={{
                  marginTop: 'var(--spacing-md)',
                  padding: 'var(--spacing-md)',
                  background: 'rgba(255, 140, 66, 0.1)',
                  borderRadius: 'var(--radius-standard)',
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)'
                }}>
                  <strong style={{ color: 'var(--accent-orange)' }}>Explanation:</strong> {q.explanation}
                </div>
              )}
            </div>
          ))}

          <div style={{ marginTop: 'var(--spacing-xl)', textAlign: 'center' }}>
            {!showResults ? (
              <button
                onClick={() => setShowResults(true)}
                disabled={!allAnswered}
                style={{
                  padding: 'var(--spacing-md) var(--spacing-xl)',
                  background: allAnswered ? 'var(--accent-orange)' : 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  borderRadius: 'var(--radius-standard)',
                  color: allAnswered ? '#000' : 'var(--text-secondary)',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  cursor: allAnswered ? 'pointer' : 'not-allowed',
                  transition: 'all var(--transition-default)'
                }}
              >
                {allAnswered ? 'Show Results' : `Answer All Questions (${Object.keys(quizAnswers).length}/${quiz.length})`}
              </button>
            ) : (
              <div>
                <div style={{
                  padding: 'var(--spacing-lg)',
                  background: calculateScore() >= 4 ? 'rgba(76, 175, 80, 0.1)' : 'rgba(255, 140, 66, 0.1)',
                  borderRadius: 'var(--radius-large)',
                  marginBottom: 'var(--spacing-lg)'
                }}>
                  <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent-orange)', margin: 0 }}>
                    {calculateScore()}/{quiz.length}
                  </p>
                  <p style={{ color: 'var(--text-secondary)', marginTop: 'var(--spacing-sm)' }}>
                    {calculateScore() === 5 && "Perfect! You've mastered macro."}
                    {calculateScore() === 4 && "Great work! Solid macro understanding."}
                    {calculateScore() === 3 && "Good start. Review the splits again."}
                    {calculateScore() < 3 && "Keep studying! Re-read the guide."}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setQuizAnswers({})
                    setShowResults(false)
                  }}
                  style={{
                    padding: 'var(--spacing-md) var(--spacing-xl)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid var(--accent-orange)',
                    borderRadius: 'var(--radius-standard)',
                    color: 'var(--text-primary)',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
                  Retake Quiz
                </button>
              </div>
            )}
          </div>
        </Section>

        <Section>
          <h2>Source</h2>
          <p>
            This guide is based on advanced macro concepts from competitive Deadlock gameplay analysis.
            Watch the full breakdown:
          </p>

          <div style={{
            position: 'relative',
            paddingBottom: '56.25%',
            height: 0,
            overflow: 'hidden',
            maxWidth: '100%',
            marginTop: 'var(--spacing-lg)',
            borderRadius: 'var(--radius-large)'
          }}>
            <iframe
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 0
              }}
              src="https://www.youtube.com/embed/1r9tIZ3IYYk"
              title="Deadlock Advanced Macro Guide"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <p style={{
            marginTop: 'var(--spacing-md)',
            fontSize: '0.9rem',
            color: 'var(--text-secondary)',
            fontStyle: 'italic'
          }}>
            Video: Advanced Deadlock Macro &amp; Lane Splitting Strategies
            <br />
            <a
              href="https://youtu.be/1r9tIZ3IYYk"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent-orange)' }}
            >
              Watch on YouTube →
            </a>
          </p>
        </Section>
      </article>
    </Container>
  )
}
