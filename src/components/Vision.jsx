const pillars = [
  {
    icon: '🌱',
    title: 'Student-Centered Learning',
    desc: 'Designing policies and curricula that honor every learner\'s individuality, nurturing potential at each stage of development.',
  },
  {
    icon: '🌍',
    title: 'Global & Inclusive Outlook',
    desc: 'Drawing from experience with learners across India, South Korea, and Japan to foster cross-cultural understanding from a young age.',
  },
  {
    icon: '🎤',
    title: 'Voice & Confidence',
    desc: 'Equipping young individuals through public speaking and debate to find their voice and carry it through life with confidence.',
  },
]

export default function Vision() {
  return (
    <section id="vision">
      <div className="sec-hdr reveal">
        <span className="sec-num">02</span>
        <h2>Vision &amp; Philosophy</h2>
        <div className="sec-rule" style={{ background: 'rgba(255,255,255,0.12)' }} />
      </div>

      <blockquote className="vquote reveal">
        Every child is unique and deserves an environment where they can truly thrive — a space
        that is joyful, purposeful, and empowering.
      </blockquote>

      <div className="pillars">
        {pillars.map((p, i) => (
          <div className={`pillar reveal d${i + 1}`} key={i}>
            <div className="pillar-icon">{p.icon}</div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
