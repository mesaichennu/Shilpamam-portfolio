const pillars = [
  {
    icon: '🌱',
    title: 'Personalized Learning Strategies',
    desc: 'Guiding educators and institutions to adopt approaches that respect individual learning styles and unlock each learner’s full potential.',
  },
  {
    icon: '🌍',
    title: 'Global Learning Perspective',
    desc: 'Bringing international insights and diverse educational experiences to create inclusive and culturally aware learning environments.',
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
      To create learning environments where curiosity is celebrated, creativity is encouraged, and every mind is empowered to grow with confidence and purpose.
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
