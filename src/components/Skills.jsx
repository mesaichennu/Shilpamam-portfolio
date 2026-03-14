const skillGroups = [
  {
    title: 'Areas of Expertise',
    tags: [
      { label: 'Design & Setup', gold: true },
      { label: 'Teacher Development', gold: true },
      { label: 'Personality Transformation' },
      { label: 'Leadership Coaching' },
      { label: 'Change Management' },
      { label: 'Strategic Planning' },
    ],
  },
  {
    title: 'Curriculum & Pedagogy',
    tags: [
      { label: 'Curriculum Development', gold: true },
      { label: 'Inclusive Education', gold: true },
      { label: 'Early Childhood Education' },
      { label: 'Student-Centered Design' },
      { label: 'Future-Ready Learning' },
    ],
  },
  {
    title: 'Communication & Engagement',
    tags: [
      { label: 'Public Speaking', gold: true },
      // { label: 'Debating', gold: true },
      { label: 'Mentoring', gold: true },
      { label: 'Corporate Training' },
      { label: 'English Language Teaching' },
      { label: 'Cross-cultural Communication' },
    ],
  },
  {
    title: 'Academic Credentials',
    tags: [
      { label: 'MA Pyschology',gold: true },
      { label: 'Doctorate',gold: true },
      { label: 'PDGCA in Rural Development' },
      { label: 'HR' },
      { label: 'B.Tech  Computer Science' },
  
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="sec-hdr reveal">
        <span className="sec-num">04</span>
        <h2>Expertise &amp; Skills</h2>
        <div className="sec-rule" />
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, i) => (
          <div className={`skill-group reveal d${i + 1}`} key={i}>
            <h3>{group.title}</h3>
            <div className="stags">
              {group.tags.map((tag, j) => (
                <span className={`stag${tag.gold ? ' g' : ''}`} key={j}>
                  <span className="t">{tag.label}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
