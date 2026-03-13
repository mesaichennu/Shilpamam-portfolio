const skillGroups = [
  {
    title: 'Leadership & Administration',
    tags: [
      { label: 'Educational Leadership', gold: true },
      { label: 'School Administration', gold: true },
      { label: 'Team Recruitment' },
      { label: 'Policy Design' },
      { label: 'Strategic Planning' },
      { label: 'Institution Building' },
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
      { label: 'Debating', gold: true },
      { label: 'Mentoring' },
      { label: 'English Language Teaching' },
      { label: 'Cross-cultural Communication' },
    ],
  },
  {
    title: 'Academic Credentials',
    tags: [
      { label: 'MBA', gold: true },
      { label: 'Corporate Management', gold: true },
      { label: 'Business Administration' },
      { label: '4+ Years Leadership' },
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
